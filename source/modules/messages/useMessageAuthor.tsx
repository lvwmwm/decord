// Module ID: 4356
// Function ID: 38643
// Name: useNullableMessageAuthor
// Dependencies: []
// Exports: default, getMessageAuthor, useUserNickAndColor

// Module 4356 (useNullableMessageAuthor)
function useNullableMessageAuthor(message) {
  const arg1 = message;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (null != arg0) {
      channel = guild_id.getChannel(arg0.channel_id);
    }
    return channel;
  });
  const importDefault = stateFromStores;
  let id;
  if (null != message) {
    let author = message.author;
    if (null != author) {
      id = author.id;
    }
  }
  const dependencyMap = id;
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  closure_3 = guild_id;
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = colorRoleId.getMember(guild_id, id);
      }
    }
    return member;
  });
  const obj2 = arg1(dependencyMap[7]);
  const items2 = [closure_8];
  const items3 = [id];
  const stateFromStores2 = arg1(dependencyMap[7]).useStateFromStores(items2, () => user.getUser(id), items3);
  const obj3 = arg1(dependencyMap[7]);
  let tmp6 = stateFromStores2;
  if (null != message) {
    tmp6 = stateFromStores2;
    if (message.author.bot) {
      author = undefined;
      if (null != message) {
        author = message.author;
      }
      tmp6 = author;
    }
  }
  const name = importDefault(dependencyMap[8]).useName(tmp6);
  const obj4 = importDefault(dependencyMap[8]);
  const items4 = [closure_6];
  const items5 = [guild_id];
  let colorRoleId;
  const stateFromStores3 = arg1(dependencyMap[7]).useStateFromStores(items4, () => guild.getGuild(guild_id), items5);
  if (null != stateFromStores1) {
    colorRoleId = stateFromStores1.colorRoleId;
  }
  closure_4 = colorRoleId;
  const obj5 = arg1(dependencyMap[7]);
  const items6 = [closure_5];
  const items7 = [guild_id, colorRoleId];
  const stateFromStores4 = arg1(dependencyMap[7]).useStateFromStores(items6, () => {
    let role;
    if (null != guild_id) {
      if (null != colorRoleId) {
        role = role.getRole(guild_id, colorRoleId);
      }
    }
    return role;
  }, items7);
  const obj6 = arg1(dependencyMap[7]);
  const items8 = [closure_7];
  const stateFromStores5 = arg1(dependencyMap[7]).useStateFromStores(items8, () => {
    let nickname = null;
    if (null != id) {
      nickname = null;
      if (null != stateFromStores) {
        nickname = null;
        if (stateFromStores.isPrivate()) {
          nickname = nickname.getNickname(id);
        }
      }
    }
    return nickname;
  });
  obj = { userId: id, guildId: guild_id };
  let tmp14 = null;
  if (null != message) {
    obj = { user: message.author, channel: stateFromStores, guild: stateFromStores3, memberColorRole: stateFromStores4, userName: name, member: stateFromStores1, friendNickname: stateFromStores5, displayNameStyles: tmp13 };
    tmp14 = computeMessageAuthor(obj);
  }
  return tmp14;
}
function useNullableUserAuthor(stateFromStores1, channel) {
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  const importDefault = id;
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const dependencyMap = guild_id;
  let obj = channel(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = member.getMember(guild_id, id);
      }
    }
    return member;
  });
  const items1 = [closure_6];
  const items2 = [guild_id];
  let colorRoleId;
  stateFromStores1 = channel(dependencyMap[7]).useStateFromStores(items1, () => guild.getGuild(guild_id), items2);
  if (null != stateFromStores) {
    colorRoleId = stateFromStores.colorRoleId;
  }
  let closure_3 = colorRoleId;
  const obj2 = channel(dependencyMap[7]);
  const items3 = [closure_5];
  const items4 = [guild_id, colorRoleId];
  const stateFromStores2 = channel(dependencyMap[7]).useStateFromStores(items3, () => {
    let role;
    if (null != guild_id) {
      if (null != colorRoleId) {
        role = role.getRole(guild_id, colorRoleId);
      }
    }
    return role;
  }, items4);
  const obj3 = channel(dependencyMap[7]);
  const items5 = [closure_7];
  const stateFromStores3 = channel(dependencyMap[7]).useStateFromStores(items5, () => {
    let nickname = null;
    if (null != id) {
      nickname = null;
      if (null != arg1) {
        nickname = null;
        if (arg1.isPrivate()) {
          nickname = nickname.getNickname(id);
        }
      }
    }
    return nickname;
  });
  const obj4 = channel(dependencyMap[7]);
  obj = { user: stateFromStores1, channel, guild: stateFromStores1, memberColorRole: stateFromStores2, member: stateFromStores, userName: importDefault(dependencyMap[8]).useName(stateFromStores1), friendNickname: stateFromStores3 };
  let displayNameStyles;
  if (null != stateFromStores1) {
    displayNameStyles = stateFromStores1.displayNameStyles;
  }
  obj.displayNameStyles = displayNameStyles;
  return computeMessageAuthor(obj);
}
function getUserAuthor(user, channel) {
  let id;
  if (null != user) {
    id = user.id;
  }
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let member = null;
  const guild = guild.getGuild(guild_id);
  if (null != guild_id) {
    member = null;
    if (null != id) {
      member = member.getMember(guild_id, id);
    }
  }
  let role;
  if (null != guild_id) {
    let colorRoleId;
    if (null != member) {
      colorRoleId = member.colorRoleId;
    }
    if (null != colorRoleId) {
      role = role.getRole(guild_id, member.colorRoleId);
    }
  }
  let nickname = null;
  if (null != id) {
    nickname = null;
    if (null != channel) {
      nickname = null;
      if (channel.isPrivate()) {
        nickname = nickname.getNickname(id);
      }
    }
  }
  const obj = { user, channel, guild, memberColorRole: role, member, friendNickname: nickname };
  let displayNameStyles;
  if (null != user) {
    displayNameStyles = user.displayNameStyles;
  }
  obj.displayNameStyles = displayNameStyles;
  return computeMessageAuthor(obj);
}
function computeMessageAuthor(channel) {
  let displayNameStyles;
  let friendNickname;
  let guild;
  let member;
  let memberColorRole;
  let user;
  let userName;
  ({ user, guild, memberColorRole, member, userName, friendNickname, displayNameStyles } = channel);
  let str = "???";
  if (null != user) {
    if (null == userName) {
      let obj = importDefault(dependencyMap[8]);
      userName = obj.getName(user);
    }
    str = userName;
  }
  let id;
  if (null != user) {
    id = user.id;
  }
  if (null != id) {
    if (null != channel.channel) {
      let id1;
      if (null != guild) {
        id1 = guild.id;
      }
      if (null == id1) {
        obj = { 9223372036854775807: "mn", 9223372036854775807: "description", 0: "Array" };
        let tmp9 = str;
        if (null != friendNickname) {
          tmp9 = friendNickname;
        }
        obj.nick = tmp9;
        obj.displayNameStyles = displayNameStyles;
        let obj1 = obj;
      } else if (null == member) {
        obj = { 9223372036854775807: "mn", 9223372036854775807: "description", 0: "Array", nick: str, displayNameStyles };
        obj1 = obj;
      } else {
        obj1 = {};
        const nick = member.nick;
        let tmp5 = str;
        if (null != nick) {
          tmp5 = nick;
        }
        obj1.nick = tmp5;
        ({ colorString: obj3.colorString, colorStrings: obj3.colorStrings } = member);
        let name;
        if (null != memberColorRole) {
          name = memberColorRole.name;
        }
        obj1.colorRoleName = name;
        let id2;
        if (null != memberColorRole) {
          id2 = memberColorRole.id;
        }
        obj1.colorRoleId = id2;
        ({ iconRoleId: obj3.iconRoleId, avatar: obj3.guildMemberAvatar, avatarDecoration: obj3.guildMemberAvatarDecoration } = member);
        const primaryGuild = user.primaryGuild;
        let tmp8;
        if (null != primaryGuild) {
          tmp8 = primaryGuild;
        }
        obj1.primaryGuild = tmp8;
        obj1.guildId = guild.id;
        obj1.authorId = user.id;
        obj1.displayNameStyles = displayNameStyles;
      }
    }
    return obj1;
  }
  const obj2 = { 9223372036854775807: "mn", 9223372036854775807: "description", 0: "Array", nick: str, displayNameStyles };
  obj1 = obj2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/messages/useMessageAuthor.tsx");

export default function useMessageNickAndColor(message) {
  let tmp = useNullableMessageAuthor(message);
  importDefault(dependencyMap[6])(null != tmp, "Result cannot be null because the message is not null");
  if (null != arg1) {
    tmp = arg1;
  }
  return tmp;
};
export { useNullableMessageAuthor };
export const getMessageAuthor = function getMessageAuthor(message) {
  return getUserAuthor(message.author, channel.getChannel(message.channel_id));
};
export const useUserNickAndColor = function useUserNickAndColor(stateFromStores1, channel) {
  const tmp = useNullableUserAuthor(stateFromStores1, channel);
  importDefault(dependencyMap[6])(null != tmp, "Result cannot be null because user and channel are not null");
  return tmp;
};
export { useNullableUserAuthor };
export { getUserAuthor };
