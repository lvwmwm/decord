// Module ID: 5083
// Function ID: 5084
// Name: useMessageAuthor
// Dependencies: [2045, 2108, 2102, 2067, 4479, 1372, 38, 504, 4678, 5084, 2]
// Exports: default, getMessageAuthor, useUserNickAndColor

// Module 5083 (useMessageAuthor)
import _modDef38 from "module_38" /* 38 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function useNullableMessageAuthor(message) {
  let colorRoleId;
  let guild_id;
  let id;
  _require = message;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (null != message) {
      channel = ChannelStore.getChannel(tmp.channel_id);
    }
    return channel;
  });
  id = undefined;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [colorRoleId];
  const tmpResult = tmp(id[7]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = GuildMemberStore.getMember(tmp, tmp3);
      }
    }
    return member;
  });
  const items2 = [UserStore];
  const items3 = [id];
  const tmpResult5 = tmp(id[7]);
  let stateFromStores2 = tmpResult5.useStateFromStores(items2, () => UserStore.getUser(id), items3);
  let bot;
  const useName = stateFromStores(id[8]).useName;
  stateFromStores(id[8]);
  if (message != null) {
    bot = message.author.bot;
  }
  if (bot) {
    let author1;
    if (message != null) {
      author1 = message.author;
    }
    stateFromStores2 = author1;
  }
  const name = useName(stateFromStores2);
  const items4 = [GuildStore];
  const items5 = [guild_id];
  colorRoleId = undefined;
  const tmpResult6 = tmp(id[7]);
  const stateFromStores3 = tmpResult6.useStateFromStores(items4, () => GuildStore.getGuild(guild_id), items5);
  if (stateFromStores1 != null) {
    colorRoleId = stateFromStores1.colorRoleId;
  }
  const items6 = [GuildRoleStore];
  const items7 = [guild_id, colorRoleId];
  const tmpResult7 = tmp(id[7]);
  const stateFromStores4 = tmpResult7.useStateFromStores(items6, () => {
    let role;
    if (null != guild_id) {
      if (null != colorRoleId) {
        role = GuildRoleStore.getRole(tmp, tmp3);
      }
    }
    return role;
  }, items7);
  const items8 = [RelationshipStore];
  const tmpResult8 = tmp(id[7]);
  const stateFromStores5 = tmpResult8.useStateFromStores(items8, () => {
    let nickname = null;
    if (null != id) {
      let isPrivateResult;
      const obj = stateFromStores;
      if (stateFromStores != null) {
        isPrivateResult = obj.isPrivate();
      }
      nickname = null;
      if (isPrivateResult) {
        nickname = RelationshipStore.getNickname(tmp);
      }
    }
    return nickname;
  });
  let tmp17 = null;
  if (null != message) {
    const obj2 = { user: message.author, channel: stateFromStores, guild: stateFromStores3, memberColorRole: stateFromStores4, userName: name, member: stateFromStores1, friendNickname: stateFromStores5, displayNameStyles: tmp16 };
    tmp17 = computeMessageAuthor(obj2);
  }
  return tmp17;
}
function useNullableUserAuthor(author, channel) {
  _require = channel;
  let id;
  if (author != null) {
    id = author.id;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp3 = _require;
  let obj = require("get initialized");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = GuildMemberStore.getMember(tmp, tmp3);
      }
    }
    return member;
  });
  const items1 = [GuildStore];
  const items2 = [guild_id];
  let colorRoleId;
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(guild_id), items2);
  if (stateFromStores != null) {
    colorRoleId = stateFromStores.colorRoleId;
  }
  const items3 = [GuildRoleStore];
  const items4 = [guild_id, colorRoleId];
  const tmp3Result = tmp3(guild_id[7]);
  const stateFromStores2 = tmp3Result.useStateFromStores(items3, () => {
    let role;
    if (null != guild_id) {
      if (null != colorRoleId) {
        role = GuildRoleStore.getRole(tmp, tmp3);
      }
    }
    return role;
  }, items4);
  const items5 = [RelationshipStore];
  const tmp3Result2 = tmp3(guild_id[7]);
  const stateFromStores3 = tmp3Result2.useStateFromStores(items5, () => {
    let nickname = null;
    if (null != id) {
      let isPrivateResult;
      const obj = channel;
      if (channel != null) {
        isPrivateResult = obj.isPrivate();
      }
      nickname = null;
      if (isPrivateResult) {
        nickname = RelationshipStore.getNickname(tmp);
      }
    }
    return nickname;
  });
  const obj5 = id(guild_id[8]);
  const name = obj5.useName(author);
  const obj3 = { user: author, channel, guild: stateFromStores1, memberColorRole: stateFromStores2, member: stateFromStores, userName: name, friendNickname: stateFromStores3, displayNameStyles: id(guild_id[9])({ userId: id, guildId: guild_id }) };
  return computeMessageAuthor(obj3);
}
function getUserAuthor(user, channel) {
  let displayNameStyles;
  let id;
  if (user != null) {
    id = user.id;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let member = null;
  const guild = GuildStore.getGuild(guild_id);
  if (null != guild_id) {
    member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(guild_id, id);
    }
  }
  let role;
  if (null != guild_id) {
    let colorRoleId;
    if (member != null) {
      colorRoleId = member.colorRoleId;
    }
    if (null != colorRoleId) {
      role = GuildRoleStore.getRole(guild_id, member.colorRoleId);
    }
  }
  let nickname = null;
  if (null != id) {
    nickname = null;
    if (null != channel) {
      nickname = null;
      if (channel.isPrivate()) {
        nickname = RelationshipStore.getNickname(id);
      }
    }
  }
  const obj = { user, channel, guild, memberColorRole: role, member, friendNickname: nickname, displayNameStyles };
  displayNameStyles = undefined;
  const tmp11 = computeMessageAuthor;
  if (user != null) {
    displayNameStyles = user.displayNameStyles;
  }
  return tmp11(obj);
}
function computeMessageAuthor(channel) {
  let displayNameStyles;
  let friendNickname;
  let guild;
  let id2;
  let member;
  let memberColorRole;
  let name;
  let primaryGuild;
  let user;
  let userName;
  ({ user, guild, memberColorRole, member, userName, friendNickname, displayNameStyles } = channel);
  let str = "???";
  channel = channel.channel;
  if (null != user) {
    if (userName == null) {
      const obj = UserUtilsDefault;
      userName = obj.getName(user);
    }
    str = userName;
  }
  let id;
  if (user != null) {
    id = user.id;
  }
  if (null != id) {
    let obj7;
    if (null != channel) {
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      if (null == id1) {
        if (friendNickname == null) {
          friendNickname = str;
        }
        obj7 = { nick: friendNickname, colorString: null, colorStrings: null, displayNameStyles };
        const obj3 = { nick: friendNickname, colorString: null, colorStrings: null, displayNameStyles };
      } else if (null == member) {
        obj7 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
        const obj4 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
      } else {
        let nick = member.nick;
        if (nick == null) {
          nick = str;
        }
        obj7 = { nick, colorString: null, colorStrings: null, colorRoleName: name, colorRoleId: id2, iconRoleId: null, guildMemberAvatar: null, guildMemberAvatarDecoration: null, primaryGuild, guildId: guild.id, authorId: user.id, displayNameStyles };
        ({ colorString: obj2.colorString, colorStrings: obj2.colorStrings } = member);
        name = undefined;
        if (memberColorRole != null) {
          name = memberColorRole.name;
        }
        id2 = undefined;
        if (memberColorRole != null) {
          id2 = memberColorRole.id;
        }
        ({ iconRoleId: obj2.iconRoleId, avatar: obj2.guildMemberAvatar, avatarDecoration: obj2.guildMemberAvatarDecoration } = member);
        primaryGuild = user.primaryGuild;
      }
    }
    return obj7;
  }
  obj7 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
}
const result = size.fileFinishedImporting("modules/messages/useMessageAuthor.tsx");

export default function useMessageNickAndColor(message, arg1) {
  let tmp = arg1;
  const tmp2 = useNullableMessageAuthor(message);
  _modDef38(null != tmp2, "Result cannot be null because the message is not null");
  if (arg1 == null) {
    tmp = tmp2;
  }
  return tmp;
};
export { useNullableMessageAuthor };
export const getMessageAuthor = function getMessageAuthor(message) {
  return getUserAuthor(message.author, ChannelStore.getChannel(message.channel_id));
};
export const useUserNickAndColor = function useUserNickAndColor(author, channel) {
  const tmp = useNullableUserAuthor(author, channel);
  _modDef38(true, "Result cannot be null because user and channel are not null");
  return tmp;
};
export { useNullableUserAuthor };
export { getUserAuthor };
