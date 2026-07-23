// Module ID: 4573
// Function ID: 40092
// Name: getGuildIdFromChannelId
// Dependencies: [1908, 1348, 1838, 3758, 3767, 1849, 653, 1832, 1392, 1212, 4574, 4312, 4320, 4575, 4321, 4572, 3829, 2]

// Module 4573 (getGuildIdFromChannelId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_9;
const require = arg1;
function getGuildIdFromChannelId(channelId) {
  const channel = store.getChannel(channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  return guildId;
}
function makeGuild(guild) {
  let obj = { type: "guild", guildId: guild.id, content: require(1832) /* isNullOrEmpty */.truncateText(guild.name, 32) };
  const obj2 = require(1832) /* isNullOrEmpty */;
  obj = { id: guild.id, icon: guild.icon, size: 40 };
  obj.icon = importDefault(1392).getGuildIconURL(obj);
  return obj;
}
function makeChannel(name, italics) {
  let obj = require(1832) /* isNullOrEmpty */;
  const tmp = makeText(obj.truncateText(name.name, 32));
  obj = { type: "channel" };
  let tmp2 = tmp;
  if ("italics" === italics) {
    obj = { type: "em" };
    const items = [tmp];
    obj.content = items;
    tmp2 = obj;
  }
  const items1 = [tmp2];
  obj.content = items1;
  ({ type: obj2.channelType, iconType: obj2.iconType } = name);
  return obj;
}
function makeMessage(isForumPost) {
  const obj = { type: "channel" };
  const items = [makeText("")];
  obj.content = items;
  let str = "message";
  if (isForumPost) {
    str = "post";
  }
  obj.iconType = str;
  return obj;
}
function getChannel(channelId, mentionChannels) {
  const _require = channelId;
  const channel = store.getChannel(channelId);
  const isSubscriptionGated = _require(4574).getChannelRoleSubscriptionStatus(channelId, store, _isNativeReflectConstruct, closure_6).isSubscriptionGated;
  const obj2 = _require(4574);
  const mentionIconType = _require(4312).getMentionIconType(channel);
  let str = "text";
  if (null != mentionIconType) {
    str = mentionIconType;
  }
  if (null != mentionChannels) {
    const found = mentionChannels.find((id) => id.id === closure_0);
    if (null != found) {
      let obj = {};
      ({ type: obj8.type, id: obj8.id, guild_id: obj8.guildId, name: obj8.name } = found);
      obj.isDm = null != channel && channel.isPrivate();
      const tmp8 = null != channel && channel.isPrivate();
      obj.isForumPost = null != channel && channel.isForumPost();
      obj.isMentionable = true;
      obj.canViewChannel = true;
      obj.roleSubscriptionGated = isSubscriptionGated;
      obj.iconType = str;
      let parent_id;
      if (null != channel) {
        parent_id = channel.parent_id;
      }
      obj.parentId = parent_id;
      return obj;
    }
  }
  let tmp3 = null;
  if (null != channel) {
    obj = {};
    ({ type: obj4.type, id: obj4.id, guild_id: obj4.guildId } = channel);
    obj.name = _require(4320).computeChannelName(channel, closure_8, closure_7);
    obj.isDm = channel.isPrivate();
    obj.isForumPost = channel.isForumPost();
    const obj5 = _require(4320);
    obj.isMentionable = _require(4575).isChannelTypeMentionable(channel.type);
    const obj6 = _require(4575);
    obj.canViewChannel = _require(4321).canViewChannel(channel);
    obj.roleSubscriptionGated = isSubscriptionGated;
    obj.iconType = str;
    obj.parentId = channel.parent_id;
    tmp3 = obj;
    const obj7 = _require(4321);
  }
  return tmp3;
}
function makeLink(first) {
  let obj = { type: "link", content: items, target: first, title: undefined };
  obj = { type: "text", content: first };
  items = [obj];
  return obj;
}
function makeText(content) {
  return { type: "text", content };
}
function handleUnknownChannel(guildId, channelId, messageId, guildIdFromChannelId, first) {
  const guild = store2.getGuild(guildId);
  if (null != guild) {
    const id = guild.id;
  }
  let obj = { type: "channelMention", guildId, channelId, messageId, originalLink: first };
  let tmp2 = null;
  if (null != guild) {
    tmp2 = null;
    if (id !== guildIdFromChannelId) {
      const items = [makeGuild(guild)];
      tmp2 = items;
    }
  }
  obj.inContent = tmp2;
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t.zLZPmk).toLowerCase();
  obj.type = constants.UNKNOWN;
  obj.iconType = "text";
  const items1 = [makeChannel(obj, "italics")];
  obj.content = items1;
  return obj;
}
function formatChannelMentionContent(guild, isForumPost, arg2, arg3) {
  let items8 = arg2;
  let obj = arg3;
  const tmp = makeGuild(guild);
  const tmp2 = makeChannel(isForumPost);
  const tmp3 = makeMessage(isForumPost.isForumPost);
  if (arg2) {
    if (obj) {
      if (isForumPost.isForumPost) {
        const channel = store.getChannel(isForumPost.parentId);
        if (null != channel) {
          obj = {};
          obj = { name: require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_8, closure_7), type: channel.type };
          const obj7 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
          const tmp11 = makeChannel;
          const mentionIconType = require(4312) /* _createForOfIteratorHelperLoose */.getMentionIconType(channel);
          let str = "forum";
          if (null != mentionIconType) {
            str = mentionIconType;
          }
          obj.iconType = str;
          const items = [tmp11(obj)];
          obj.inContent = items;
          const items1 = [tmp2];
          obj.content = items1;
          return obj;
        }
      }
      const obj1 = {};
      const items2 = [tmp2];
      obj1.inContent = items2;
      const items3 = [tmp3];
      obj1.content = items3;
      return obj1;
    }
  }
  if (items8) {
    if (!obj) {
      const obj2 = { inContent: null };
      const items4 = [tmp2];
      obj2.content = items4;
      return obj2;
    }
  }
  if (!items8) {
    if (obj) {
      let obj3 = {};
      const items5 = [tmp];
      obj3.inContent = items5;
      let tmp5 = tmp3;
      if (isForumPost.isForumPost) {
        tmp5 = tmp2;
      }
      const items6 = [tmp5];
      obj3.content = items6;
    }
  }
  let tmp6;
  if (!items8) {
    if (!obj) {
      obj = {};
      const items7 = [tmp];
      obj.inContent = items7;
      items8 = [tmp2];
      obj.content = items8;
      tmp6 = obj;
    }
  }
  obj3 = tmp6;
}
function parseChannel(canViewChannel, messageId, guildIdFromChannelId, first) {
  if (canViewChannel.canViewChannel) {
    if (canViewChannel.isMentionable) {
      let obj = { type: "channelMention" };
      ({ id: obj3.channelId, guildId: obj3.guildId } = canViewChannel);
      obj.messageId = messageId;
      obj.originalLink = first;
      const guild = store2.getGuild(canViewChannel.guildId);
      if (null == guild) {
        if (canViewChannel.isDm) {
          obj = {};
          const merged = Object.assign(obj);
          obj["guildId"] = closure_10;
          const items = [makeChannel(canViewChannel)];
          obj["inContent"] = items;
          const items1 = [makeMessage(false)];
          obj["content"] = items1;
          let tmp24 = obj;
        } else if (null != first) {
          tmp24 = makeLink(first);
        } else {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          const _HermesInternal2 = HermesInternal;
          tmp24 = makeText("#" + intl2.string(require(1212) /* getSystemLocale */.t.J90oLW));
        }
        return tmp24;
      } else {
        const obj1 = {};
        const merged1 = Object.assign(obj);
        const merged2 = Object.assign(formatChannelMentionContent(guild, canViewChannel, canViewChannel.guildId === guildIdFromChannelId, null != messageId));
        return obj1;
      }
    } else {
      const _HermesInternal = HermesInternal;
      return makeText("#" + canViewChannel.name);
    }
  } else {
    obj = { type: "channel" };
    if (canViewChannel.roleSubscriptionGated) {
      let name = canViewChannel.name;
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      name = intl.string(require(1212) /* getSystemLocale */.t["/YzI63"]);
    }
    const items2 = [makeText(name)];
    obj.content = items2;
    if (canViewChannel.roleSubscriptionGated) {
      let UNKNOWN = canViewChannel.type;
    } else {
      UNKNOWN = constants.UNKNOWN;
    }
    obj.channelType = UNKNOWN;
    obj.iconType = "locked";
    const obj2 = { type: "channelMention" };
    ({ guildId: obj2.guildId, id: obj2.channelId } = canViewChannel);
    obj2.messageId = messageId;
    obj2.inContent = null;
    const items3 = [obj];
    obj2.content = items3;
    return obj2;
  }
}
({ ChannelTypes: closure_9, ME: closure_10 } = ME);
let obj = {};
obj = {
  order: require("textRegexp").order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    return /^<#(\d+)>/.exec(arg0);
  },
  parse(channelId, arg1, returnMentionIds) {
    if (returnMentionIds.returnMentionIds) {
      const obj = { type: "channelMention", id: tmp };
      return obj;
    } else {
      const tmp3 = getChannel(tmp, returnMentionIds.mentionChannels);
      if (null == tmp3) {
        let tmp7 = handleUnknownChannel(null, tmp, null, getGuildIdFromChannelId(returnMentionIds.channelId));
      } else {
        tmp7 = parseChannel(tmp3, null, getGuildIdFromChannelId(returnMentionIds.channelId));
      }
      return tmp7;
    }
  }
};
obj.channelMention = obj;
obj = {
  order: require("t").defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const CHANNEL_OR_MESSAGES_URL_RE = require(4321) /* canViewChannel */.CHANNEL_OR_MESSAGES_URL_RE;
    const match = CHANNEL_OR_MESSAGES_URL_RE.exec(arg0);
    if (null != match) {
      if (null != match[2]) {
        if (obj.test(match[2])) {
          return null;
        }
        obj = /\D/;
      }
      if (null != match[3]) {
        if (obj2.test(match[3])) {
          return null;
        }
        obj2 = /\D/;
      }
    }
    return match;
  },
  parse(channelId, arg1, channelId) {
    const first = channelId[0];
    if (null == channelId[2]) {
      return makeLink(first);
    } else {
      const tmp6 = getChannel(tmp3, null);
      if (null == tmp6) {
        let tmp12 = handleUnknownChannel(tmp2, tmp3, tmp4, getGuildIdFromChannelId(channelId.channelId), first);
      } else {
        tmp12 = parseChannel(tmp6, tmp4, getGuildIdFromChannelId(channelId.channelId), first);
      }
      return tmp12;
    }
  }
};
obj.channelOrMessageUrl = obj;
obj.mediaPostLink = {
  order: require("t").defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const MEDIA_POST_URL_RE = require(4321) /* canViewChannel */.MEDIA_POST_URL_RE;
    return MEDIA_POST_URL_RE.exec(arg0);
  },
  parse(channelId, arg1, channelId) {
    const first = channelId[0];
    if (null != channelId[2]) {
      if (null != tmp4) {
        const tmp26 = getChannel(tmp4, null);
        if (null != tmp26) {
          return parseChannel(tmp26, tmp5, getGuildIdFromChannelId(channelId.channelId), first);
        } else {
          const tmp7 = getChannel(tmp3, null);
          if (null != tmp7) {
            let tmp14 = parseChannel(tmp7, tmp5, getGuildIdFromChannelId(channelId.channelId), first);
          } else {
            tmp14 = handleUnknownChannel(tmp2, tmp3, tmp5, getGuildIdFromChannelId(channelId.channelId), first);
          }
          return tmp14;
        }
      }
    }
    return makeLink(first);
  }
};
let obj1 = {
  order: require("t").defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const MEDIA_POST_URL_RE = require(4321) /* canViewChannel */.MEDIA_POST_URL_RE;
    return MEDIA_POST_URL_RE.exec(arg0);
  },
  parse(channelId, arg1, channelId) {
    const first = channelId[0];
    if (null != channelId[2]) {
      if (null != tmp4) {
        const tmp26 = getChannel(tmp4, null);
        if (null != tmp26) {
          return parseChannel(tmp26, tmp5, getGuildIdFromChannelId(channelId.channelId), first);
        } else {
          const tmp7 = getChannel(tmp3, null);
          if (null != tmp7) {
            let tmp14 = parseChannel(tmp7, tmp5, getGuildIdFromChannelId(channelId.channelId), first);
          } else {
            tmp14 = handleUnknownChannel(tmp2, tmp3, tmp5, getGuildIdFromChannelId(channelId.channelId), first);
          }
          return tmp14;
        }
      }
    }
    return makeLink(first);
  }
};
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/markup/MarkupChannelMentionRule.tsx");

export default obj;
export { getGuildIdFromChannelId };
export { getChannel };
export { handleUnknownChannel };
export { parseChannel };
