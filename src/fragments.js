const USER_FRAGMENT = `
  id
  username
  avatar
`;

const FILE_FRAGMENT = `
  id
  url
`;

const COMMENT_FRAGMENT = `
  id
  text
  user {
    username
  }
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    id
    location
    caption
    user {
      ${USER_FRAGMENT}
    }
    files {
      ${FILE_FRAGMENT}
    }
    comments {
      ${COMMENT_FRAGMENT}
    }
  }
`;

const MESSAGE_FRAGMENT = `
  id
  text
  to {
    ${USER_FRAGMENT}
  }
  from{
    ${USER_FRAGMENT}
  }
`;

export const ROOM_FRAGMENT = `
  fragment RoomParts on Room {
    id
    participants {
      ${USER_FRAGMENT}
    }
    messages{
      ${MESSAGE_FRAGMENT}
    }
  }
`;
