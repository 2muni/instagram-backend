import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    fullName: parent => {
      const { lastName, firstName } = parent;
      return `${firstName} ${lastName}`;
    },
    isFollowing: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        return prisma.$exists.user({
          AND: [{ id: user.id }, { following_some: { id: parentId } }]
        });
      } catch (e) {
        return false;
      }
    },
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;

      return user.id === parentId;
    }
  }
};
