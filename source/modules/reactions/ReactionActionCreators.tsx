// Module ID: 6999
// Function ID: 55973
// Name: checkReactionResponse
// Dependencies: []
// Exports: getReactors, playBurstReaction

// Module 6999 (checkReactionResponse)
function checkReactionResponse(arg0, arg1, isRetry) {
  let body;
  let status;
  ({ status, body } = arg0);
  if (429 === status) {
    if (isRetry.isRetry) {
      return true;
    } else {
      const _parseInt = parseInt;
      const parsed = parseInt(tmp.retry-after);
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(arg1, parsed * importDefault(dependencyMap[5]).Millis.SECOND);
      }
      return false;
    }
  } else {
    if (403 === status) {
      let code = body;
      if (body) {
        code = body.code;
      }
      if (constants.TOO_MANY_REACTIONS === code) {
        let obj = importDefault(dependencyMap[6]);
        obj = {};
        const intl = arg1(dependencyMap[7]).intl;
        obj.title = intl.string(arg1(dependencyMap[7]).t.lFddsR);
        const intl2 = arg1(dependencyMap[7]).intl;
        obj.body = intl2.string(arg1(dependencyMap[7]).t.h27eIm);
        const intl3 = arg1(dependencyMap[7]).intl;
        obj.confirmText = intl3.string(arg1(dependencyMap[7]).t.BddRzS);
        obj.show(obj);
      } else if (constants.REACTION_BLOCKED === code) {
        const ComponentDispatch = arg1(dependencyMap[8]).ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SHAKE_APP, {});
      }
    } else if (!isRetry.isRetry) {
      arg1();
      return false;
    }
    return true;
  }
}
function optimisticDispatch(type, channelId, messageId, emoji, userId) {
  let obj = importDefault(dependencyMap[9]);
  obj = { type, channelId, messageId };
  userId = undefined;
  if (null != userId) {
    userId = userId.userId;
  }
  if (null == userId) {
    userId = id.getId();
  }
  obj.userId = userId;
  obj.emoji = emoji;
  obj.optimistic = true;
  let colors;
  if (null != userId) {
    colors = userId.colors;
  }
  if (null == colors) {
    colors = [];
  }
  obj.colors = colors;
  if (null != userId) {
    if (userId.burst) {
      let NORMAL = channelId(dependencyMap[10]).ReactionTypes.BURST;
    }
    obj.reactionType = NORMAL;
    obj.dispatch(obj);
  }
  NORMAL = channelId(dependencyMap[10]).ReactionTypes.NORMAL;
}
function makeURL(type) {
  let channelId;
  let emoji;
  let messageId;
  let useTypeEndpoint;
  let userId;
  ({ channelId, messageId, emoji, userId, useTypeEndpoint } = type);
  if (useTypeEndpoint === undefined) {
    useTypeEndpoint = false;
  }
  let NORMAL = type.type;
  if (NORMAL === undefined) {
    NORMAL = arg1(dependencyMap[10]).ReactionTypes.NORMAL;
  }
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    let name = "" + emoji.name + ":" + emoji.id;
  } else {
    name = emoji.name;
  }
  if (null == userId) {
    let REACTIONSResult = closure_10.REACTIONS(channelId, messageId, name);
  } else if (useTypeEndpoint) {
    REACTIONSResult = obj.REACTION_WITH_TYPE(channelId, messageId, name, userId, NORMAL);
  } else {
    REACTIONSResult = obj.REACTION(channelId, messageId, name, userId);
  }
  return REACTIONSResult;
}
async function _getReactors(arg0, arg1) {
  const fn = function*(arg0) {
    let after;
    let channelId;
    let emoji;
    let limit;
    let messageId;
    let type;
    ({ channelId, messageId, emoji, type, limit, after } = arg0);
    yield undefined;
    if (type === callback(closure_2[10]).ReactionTypes.VOTE) {
      let name = emoji.id;
      if (null == name) {
        name = emoji.name;
      }
      let POLL_ANSWER_VOTERSResult = closure_10.POLL_ANSWER_VOTERS(channelId, messageId, name);
    } else {
      let obj = { channelId, messageId, emoji };
      POLL_ANSWER_VOTERSResult = callback3(obj);
    }
    const HTTP = callback(closure_2[11]).HTTP;
    obj = { url: POLL_ANSWER_VOTERSResult, query: { limit, after, type }, oldFormErrors: true, rejectWithError: callback(closure_2[11]).rejectWithMigratedError() };
    const tmp6 = yield HTTP.get(obj);
    if (type === callback(closure_2[10]).ReactionTypes.VOTE) {
      let body = tmp6.body.users;
    } else {
      body = tmp6.body;
    }
    const obj3 = callback(closure_2[11]);
    obj = { type: "MESSAGE_REACTION_ADD_USERS", channelId, messageId, users: body, emoji, reactionType: type };
    callback2(closure_2[9]).dispatch(obj);
    return body;
  };
  fn.next();
  return fn;
}
function addReaction(id, id2, colors, reactionType, arg4) {
  return _addReaction(...arguments);
}
async function _addReaction(arg0, arg1, arg2, arg3) {
  const fn = function*(channelId, messageId, emoji, arg3, burst) {
    let MESSAGE = arg3;
    if (MESSAGE === undefined) {
      MESSAGE = constants.MESSAGE;
    }
    let tmp3;
    let tmp4;
    yield undefined;
    tmp3 = null != burst && burst.burst;
    tmp4 = null != burst && burst.isRetry;
    if (!tmp4) {
      if (callback3(channelId, messageId, emoji, tmp3)) {
        let obj = messageId(emoji[6]);
        obj = {};
        const intl = channelId(emoji[7]).intl;
        obj.title = intl.string(channelId(emoji[7]).t.uaUU/g);
        const intl2 = channelId(emoji[7]).intl;
        obj.body = intl2.string(channelId(emoji[7]).t.psMorl);
        const intl3 = channelId(emoji[7]).intl;
        obj.confirmText = intl3.string(channelId(emoji[7]).t.NX+WJN);
        obj.show(obj);
      }
    }
    obj = { burst: tmp3, colors: yield closure_24(emoji, tmp3) };
    callback("MESSAGE_REACTION_ADD", channelId, messageId, emoji, obj);
    let obj3 = messageId(emoji[12]);
    yield obj3.unarchiveThreadIfNecessary(channelId);
    const HTTP = channelId(emoji[11]).HTTP;
    const obj1 = { url: callback2(obj2) };
    obj3 = { location: MESSAGE };
    const ReactionTypes = channelId(emoji[10]).ReactionTypes;
    obj3.type = tmp3 ? ReactionTypes.BURST : ReactionTypes.NORMAL;
    obj1.query = obj3;
    obj1.oldFormErrors = true;
    obj1.rejectWithError = channelId(emoji[11]).rejectWithMigratedError();
    const obj2 = { channelId, messageId, emoji, userId: "@me" };
    const obj8 = channelId(emoji[11]);
    const putResult = HTTP.put(obj1);
    return HTTP.put(obj1).then((arg0, arg1, self) => {
      if ("Message Shortcut" === MESSAGE) {
        const channel = tmp4.getChannel(arg0);
        let obj = { channel_id: arg0 };
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.original_message_id = arg1;
        let name = self.id;
        if (null == name) {
          name = self.name;
        }
        obj.emoji_id = name;
        obj.action = "react";
        obj = arg0(self[14]);
        let guild_id1;
        if (null != channel) {
          guild_id1 = channel.guild_id;
        }
        const merged = Object.assign(obj.collectGuildAnalyticsMetadata(guild_id1));
        let obj1 = arg0(self[14]);
        const merged1 = Object.assign(obj1.collectChannelAnalyticsMetadata(channel));
        arg1(self[13]).track(constants.MESSAGE_SHORTCUT_ACTION_SENT, obj);
        const obj8 = arg1(self[13]);
        const tmp3 = self;
      }
      const AccessibilityAnnouncer = arg0(self[15]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = arg0(self[7]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = arg0(self[7]).t;
      if (tmp3) {
        obj = { name: self.name };
        announce(formatToPlainString(t.RJlG+R, obj));
        obj1 = { channelId: arg0, messageId: arg1 };
        const obj2 = {};
        const merged2 = Object.assign(self);
        obj2["animated"] = false;
        obj1.emoji = obj2;
        const result = arg1(self[16]).triggerFullscreenAnimation(obj1);
        const obj5 = arg1(self[16]);
      } else {
        const obj3 = { name: self.name };
        announce(formatToPlainString(t.ol4acF, obj3));
      }
    }).catch((arg0) => {
      let obj = { isRetry: tmp4 };
      if (callback(arg0, () => callback(closure_0, closure_1, closure_2, closure_3, { burst: closure_4, isRetry: true }), obj)) {
        obj = { burst: arg1 };
        callback2("MESSAGE_REACTION_REMOVE", arg0, arg1, arg2, obj);
        const AccessibilityAnnouncer = arg0(arg2[15]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = arg0(arg2[7]).intl;
        const formatToPlainString = intl.formatToPlainString;
        const t = arg0(arg2[7]).t;
        if (arg1) {
          obj = { name: arg2.name };
          announce(formatToPlainString(t.fJeu87, obj));
        } else {
          const obj1 = { name: arg2.name };
          announce(formatToPlainString(t.UUn5V+, obj1));
        }
        const tmp4 = arg2;
      }
    });
  };
  fn.next();
  return fn;
}
function removeAllReactions(arg0, arg1) {
  return _removeAllReactions(...arguments);
}
async function _removeAllReactions(id, arg1, isRetry, arg3) {
  let closure_2;
  closure_2 = null != isRetry && isRetry.isRetry;
  let obj = arg1(closure_2[12]);
  yield obj.unarchiveThreadIfNecessary(id);
  const HTTP = id(closure_2[11]).HTTP;
  obj = { url: closure_10.REMOVE_REACTIONS(id, arg1), oldFormErrors: true, rejectWithError: id(closure_2[11]).rejectWithMigratedError() };
  const obj3 = id(closure_2[11]);
  HTTP.del(obj).catch((arg0) => {
    callback(arg0, () => callback(closure_0, closure_1, { isRetry: true }), { isRetry: closure_2 });
  });
}
function removeEmojiReactions(channelId, messageId, emoji) {
  return _removeEmojiReactions(...arguments);
}
async function _removeEmojiReactions(id, arg1, id, isRetry, arg4) {
  let closure_3;
  closure_3 = null != isRetry && isRetry.isRetry;
  let obj = arg1(id[12]);
  yield obj.unarchiveThreadIfNecessary(id);
  if (null === id.id) {
    let name = id.name;
  } else {
    const _HermesInternal = HermesInternal;
    name = "" + id.name + ":" + id.id;
  }
  const HTTP = id(id[11]).HTTP;
  obj = { url: closure_10.REMOVE_EMOJI_REACTIONS(id, arg1, name), oldFormErrors: true, rejectWithError: id(id[11]).rejectWithMigratedError() };
  const obj3 = id(id[11]);
  HTTP.del(obj).catch((arg0) => {
    callback(arg0, () => callback(closure_0, closure_1, closure_2, { isRetry: true }), { isRetry: closure_3 });
  });
}
function removeReaction(emoji, closure_3, reactionType) {
  return _removeReaction(...arguments);
}
async function _removeReaction(arg0, arg1) {
  const fn = function*(channelId) {
    channelId = channelId.channelId;
    const messageId = channelId.messageId;
    const emoji = channelId.emoji;
    let MESSAGE = channelId.location;
    if (MESSAGE === undefined) {
      MESSAGE = constants.MESSAGE;
    }
    const userId = channelId.userId;
    const options = channelId.options;
    let tmp3;
    let closure_7;
    yield undefined;
    tmp3 = null != options && options.burst;
    closure_7 = null != options && options.isRetry;
    let obj = { userId, burst: tmp3 };
    callback("MESSAGE_REACTION_REMOVE", channelId, messageId, emoji, obj);
    let obj1 = messageId(emoji[12]);
    yield obj1.unarchiveThreadIfNecessary(channelId);
    const HTTP = channelId(emoji[11]).HTTP;
    obj = {};
    obj = { channelId, messageId, emoji };
    let str = "@me";
    if (null != userId) {
      str = userId;
    }
    obj.userId = str;
    const ReactionTypes = channelId(emoji[10]).ReactionTypes;
    obj.type = tmp3 ? ReactionTypes.BURST : ReactionTypes.NORMAL;
    obj.useTypeEndpoint = true;
    obj.url = closure_14(obj);
    obj1 = { location: MESSAGE, burst: tmp3 };
    obj.query = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = channelId(emoji[11]).rejectWithMigratedError();
    const obj6 = channelId(emoji[11]);
    const tmp6 = closure_14;
    const delResult = HTTP.del(obj);
    HTTP.del(obj).then(() => {
      if (null != options) {
        if (options.burst) {
          const AccessibilityAnnouncer2 = channelId(emoji[15]).AccessibilityAnnouncer;
          const intl2 = channelId(emoji[7]).intl;
          let obj = { name: emoji.name };
          AccessibilityAnnouncer2.announce(intl2.formatToPlainString(channelId(emoji[7]).t.3l9f6u, obj));
        }
      }
      const AccessibilityAnnouncer = channelId(emoji[15]).AccessibilityAnnouncer;
      const intl = channelId(emoji[7]).intl;
      obj = { name: emoji.name };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(channelId(emoji[7]).t.DQxi+7, obj));
    }).catch(() => {
      let closure_0 = MESSAGE(async (arg0) => {
        let obj = { isRetry: closure_7 };
        if (callback2(arg0, () => {
          let obj = { channelId: closure_0, messageId: closure_1, emoji: closure_2, location: closure_3, userId: closure_4, options: obj };
          obj = { burst: closure_6, isRetry: true };
          return callback(obj);
        }, obj)) {
          obj = { userId: closure_4, burst: closure_6, colors: yield closure_24(closure_2, closure_6) };
          callback3("MESSAGE_REACTION_ADD", callback, closure_1, user, obj);
          if (null != burst) {
            if (burst.burst) {
              const AccessibilityAnnouncer2 = callback(user[15]).AccessibilityAnnouncer;
              const intl2 = callback(user[7]).intl;
              obj = { name: user.name };
              AccessibilityAnnouncer2.announce(intl2.formatToPlainString(callback(user[7]).t.OamVbV, obj));
            }
          }
          const AccessibilityAnnouncer = callback(user[15]).AccessibilityAnnouncer;
          const intl = callback(user[7]).intl;
          const obj1 = { name: user.name };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(callback(user[7]).t.tD9+b+, obj1));
        }
      });
      return function() {
        return callback(...arguments);
      };
    }());
  };
  fn.next();
  return fn;
}
function getOptimisticEmojiColors() {
  return _getOptimisticEmojiColors(...arguments);
}
async function _getOptimisticEmojiColors(arg0, arg1, arg2) {
  if (arg1) {
    yield callback(closure_2[17]).getEmojiColors(arg0);
    const obj = callback(closure_2[17]);
  }
}
function hasUserAlreadyReacted(arg0, arg1, arg2, arg3) {
  const message = message.getMessage(arg0, arg1);
  let result = null != message;
  if (result) {
    result = message.userHasReactedWithEmoji(arg2, arg3);
  }
  return result;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ AbortCodes: closure_7, AnalyticEvents: closure_8, ComponentActions: closure_9, Endpoints: closure_10 } = arg1(dependencyMap[4]));
const obj = { MESSAGE: "Message", FORUM_TOOLBAR: "Forum Toolbar", MOBILE_MEDIA_VIEWER: "Mobile Media Viewer", MESSAGE_HOVER_BAR: "Message Hover Bar", MESSAGE_INLINE_BUTTON: "Message Inline Button", MESSAGE_CONTEXT_MENU: "Message Context Menu", MESSAGE_REACTION_PICKER: "Message Reaction Picker", MESSAGE_SHORTCUT: "Message Shortcut", DOUBLE_TAP: "Double Tap", IN_APP_NOTIFICATION: "In App Notification" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/reactions/ReactionActionCreators.tsx");

export const ReactionLocations = obj;
export const getReactors = function getReactors(arg0) {
  return _getReactors(...arguments);
};
export { addReaction };
export const playBurstReaction = function playBurstReaction(arg0) {
  let channelId;
  let emoji;
  let key;
  let messageId;
  ({ channelId, messageId, emoji, key } = arg0);
  importDefault(dependencyMap[9]).dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId, messageId, emoji, key });
};
export { removeAllReactions };
export { removeEmojiReactions };
export { removeReaction };
export { hasUserAlreadyReacted };
