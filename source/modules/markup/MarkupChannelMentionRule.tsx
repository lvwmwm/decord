// Module ID: 4569
// Function ID: 40060
// Name: getGuildIdFromChannelId
// Dependencies: []

// Module 4569 (getGuildIdFromChannelId)
function getGuildIdFromChannelId(channelId) {
  const channel = store.getChannel(channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  return guildId;
}
function makeGuild(guild) {
  let obj = { type: "guild", guildId: guild.id, content: arg1(dependencyMap[7]).truncateText(guild.name, 32) };
  const obj2 = arg1(dependencyMap[7]);
  obj = { id: guild.id, icon: guild.icon, size: 40 };
  obj.icon = importDefault(dependencyMap[8]).getGuildIconURL(obj);
  return obj;
}
function makeChannel(name, italics) {
  let obj = italics(dependencyMap[7]);
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
  mentionChannels = channelId;
  const channel = store.getChannel(channelId);
  const isSubscriptionGated = mentionChannels(dependencyMap[10]).getChannelRoleSubscriptionStatus(channelId, store, closure_3, closure_6).isSubscriptionGated;
  const obj2 = mentionChannels(dependencyMap[10]);
  const mentionIconType = mentionChannels(dependencyMap[11]).getMentionIconType(channel);
  let str = "text";
  if (null != mentionIconType) {
    str = mentionIconType;
  }
  if (null != mentionChannels) {
    const found = mentionChannels.find((id) => id.id === id);
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
    obj.name = mentionChannels(dependencyMap[12]).computeChannelName(channel, closure_8, closure_7);
    obj.isDm = channel.isPrivate();
    obj.isForumPost = channel.isForumPost();
    const obj5 = mentionChannels(dependencyMap[12]);
    obj.isMentionable = mentionChannels(dependencyMap[13]).isChannelTypeMentionable(channel.type);
    const obj6 = mentionChannels(dependencyMap[13]);
    obj.canViewChannel = mentionChannels(dependencyMap[14]).canViewChannel(channel);
    obj.roleSubscriptionGated = isSubscriptionGated;
    obj.iconType = str;
    obj.parentId = channel.parent_id;
    tmp3 = obj;
    const obj7 = mentionChannels(dependencyMap[14]);
  }
  return tmp3;
}
function makeLink(first) {
  let obj = { type: "link", content: items, target: first, title: undefined };
  obj = { type: "text", content: first };
  const items = [obj];
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
  const intl = channelId(dependencyMap[9]).intl;
  obj.name = intl.string(channelId(dependencyMap[9]).t.zLZPmk).toLowerCase();
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
          obj = { name: isForumPost(dependencyMap[12]).computeChannelName(channel, closure_8, closure_7), type: channel.type };
          const obj7 = isForumPost(dependencyMap[12]);
          const tmp11 = makeChannel;
          const mentionIconType = isForumPost(dependencyMap[11]).getMentionIconType(channel);
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
          const intl2 = messageId(dependencyMap[9]).intl;
          const _HermesInternal2 = HermesInternal;
          tmp24 = makeText("#" + intl2.string(messageId(dependencyMap[9]).t.J90oLW));
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
      const intl = messageId(dependencyMap[9]).intl;
      name = intl.string(messageId(dependencyMap[9]).t./YzI63);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ ChannelTypes: closure_9, ME: closure_10 } = arg1(dependencyMap[6]));
let obj = {};
obj = {
  order: importDefault(dependencyMap[15]).order,
  requiredFirstCharacters: ["threeFriends"],
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
  order: importDefault(dependencyMap[16]).defaultRules.url.order - 0.5,
  requiredFirstCharacters: [78862721847422450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000],
  match(arg0) {
    const CHANNEL_OR_MESSAGES_URL_RE = arg1(dependencyMap[14]).CHANNEL_OR_MESSAGES_URL_RE;
    const match = CHANNEL_OR_MESSAGES_URL_RE.exec(arg0);
    if (null != match) {
      if (null != match[2]) {
        if (obj.test(match[2])) {
          return null;
        }
        const obj = /\D/;
      }
      if (null != match[3]) {
        if (obj2.test(match[3])) {
          return null;
        }
        const obj2 = /\D/;
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
const tmp2 = arg1(dependencyMap[6]);
obj.mediaPostLink = {
  order: importDefault(dependencyMap[16]).defaultRules.url.order - 0.5,
  requiredFirstCharacters: [78862721847422450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000],
  match(arg0) {
    const MEDIA_POST_URL_RE = arg1(dependencyMap[14]).MEDIA_POST_URL_RE;
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
const obj1 = {
  order: importDefault(dependencyMap[16]).defaultRules.url.order - 0.5,
  requiredFirstCharacters: [78862721847422450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000],
  match(arg0) {
    const MEDIA_POST_URL_RE = arg1(dependencyMap[14]).MEDIA_POST_URL_RE;
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
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/markup/MarkupChannelMentionRule.tsx");

export default obj;
export { getGuildIdFromChannelId };
export { getChannel };
export { handleUnknownChannel };
export { parseChannel };
