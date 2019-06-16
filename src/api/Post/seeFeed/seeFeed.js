import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFeed: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const following = await prisma.user({ id: user.id }).following();

      return prisma.posts({
        where: {
          user: { id_in: [user.id, ...following.map(user => user.id)] }
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
};

//[ 'cjwum5a9kx6a30b4289hbaev1', 'cjwvcf6e42xnk0b42t9qxqubf' ]
