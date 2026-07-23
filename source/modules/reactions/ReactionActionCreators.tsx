// Module ID: 7005
// Function ID: 56030
// Name: checkReactionResponse
// Dependencies: [5, 1194, 1348, 4349, 653, 664, 4470, 1212, 1207, 686, 7006, 507, 7007, 675, 4324, 3976, 7025, 3775, 2]
// Exports: getReactors, playBurstReaction

// Module 7005 (checkReactionResponse)
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function checkReactionResponse(arg0, arg1, isRetry) {
  let body;
  let status;
  ({ status, body } = arg0);
  if (429 === status) {
    if (isRetry.isRetry) {
      return true;
    } else {
      const _parseInt = parseInt;
      const parsed = parseInt(tmp["retry-after"]);
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(arg1, parsed * importDefault(664).Millis.SECOND);
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
        let obj = importDefault(4470);
        obj = {};
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.title = intl.string(require(1212) /* getSystemLocale */.t.lFddsR);
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj.body = intl2.string(require(1212) /* getSystemLocale */.t.h27eIm);
        const intl3 = require(1212) /* getSystemLocale */.intl;
        obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t.BddRzS);
        obj.show(obj);
      } else if (constants.REACTION_BLOCKED === code) {
        const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SHAKE_APP, { duration: 200, intensity: 2 });
      }
    } else if (!isRetry.isRetry) {
      arg1();
      return false;
    }
    return true;
  }
}
function optimisticDispatch(type, channelId, messageId, emoji, userId) {
  let obj = importDefault(686);
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
      let NORMAL = require(7006) /* ReactionTypes */.ReactionTypes.BURST;
    }
    obj.reactionType = NORMAL;
    obj.dispatch(obj);
  }
  NORMAL = require(7006) /* ReactionTypes */.ReactionTypes.NORMAL;
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
    NORMAL = require(7006) /* ReactionTypes */.ReactionTypes.NORMAL;
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
  let iter = (function*(arg0) {
    let after;
    let channelId;
    let emoji;
    let limit;
    let messageId;
    let type;
    ({ channelId, messageId, emoji, type, limit, after } = arg0);
    yield undefined;
    if (type === outer2_0(outer2_2[10]).ReactionTypes.VOTE) {
      let name = emoji.id;
      if (null == name) {
        name = emoji.name;
      }
      let POLL_ANSWER_VOTERSResult = outer2_10.POLL_ANSWER_VOTERS(channelId, messageId, name);
    } else {
      let obj = { channelId, messageId, emoji };
      POLL_ANSWER_VOTERSResult = outer2_14(obj);
    }
    const HTTP = outer2_0(outer2_2[11]).HTTP;
    obj = { url: POLL_ANSWER_VOTERSResult, query: { limit, after, type }, oldFormErrors: true, rejectWithError: outer2_0(outer2_2[11]).rejectWithMigratedError() };
    const tmp6 = yield HTTP.get(obj);
    if (type === outer2_0(outer2_2[10]).ReactionTypes.VOTE) {
      let body = tmp6.body.users;
    } else {
      body = tmp6.body;
    }
    const obj3 = outer2_0(outer2_2[11]);
    obj = { type: "MESSAGE_REACTION_ADD_USERS", channelId, messageId, users: body, emoji, reactionType: type };
    outer2_1(outer2_2[9]).dispatch(obj);
    return body;
  })();
  iter.next();
  return iter;
}
function addReaction(id, id2, colors, reactionType, arg4) {
  return _addReaction(...arguments);
}
async function _addReaction(arg0, arg1, arg2, arg3) {
  let iter = (function*(channelId, messageId, emoji, arg3, burst) {
    let MESSAGE = arg3;
    let closure_0 = channelId;
    let closure_1 = messageId;
    let closure_2 = emoji;
    if (MESSAGE === undefined) {
      MESSAGE = outer2_11.MESSAGE;
    }
    let c4;
    let c5;
    yield undefined;
    c4 = tmp3;
    c5 = tmp4;
    if (!(null != burst && burst.isRetry)) {
      if (outer2_26(channelId, messageId, emoji, tmp3)) {
        let obj = outer2_1(outer2_2[6]);
        obj = {};
        let intl = outer2_0(outer2_2[7]).intl;
        obj.title = intl.string(outer2_0(outer2_2[7]).t["uaUU/g"]);
        const intl2 = outer2_0(outer2_2[7]).intl;
        obj.body = intl2.string(outer2_0(outer2_2[7]).t.psMorl);
        const intl3 = outer2_0(outer2_2[7]).intl;
        obj.confirmText = intl3.string(outer2_0(outer2_2[7]).t["NX+WJN"]);
        obj.show(obj);
      }
    }
    obj = { burst: tmp3, colors: yield outer2_24(emoji, tmp3) };
    outer2_13("MESSAGE_REACTION_ADD", channelId, messageId, emoji, obj);
    let obj3 = outer2_1(outer2_2[12]);
    yield obj3.unarchiveThreadIfNecessary(channelId);
    const HTTP = outer2_0(outer2_2[11]).HTTP;
    let obj1 = { url: outer2_14(obj2) };
    obj3 = { location: MESSAGE };
    const ReactionTypes = outer2_0(outer2_2[10]).ReactionTypes;
    obj3.type = null != burst && burst.burst ? ReactionTypes.BURST : ReactionTypes.NORMAL;
    obj1.query = obj3;
    obj1.oldFormErrors = true;
    obj1.rejectWithError = outer2_0(outer2_2[11]).rejectWithMigratedError();
    obj2 = { channelId, messageId, emoji, userId: "@me" };
    let obj8 = outer2_0(outer2_2[11]);
    const putResult = HTTP.put(obj1);
    return HTTP.put(obj1).then(() => {
      if ("Message Shortcut" === MESSAGE) {
        const channel = outer3_5.getChannel(closure_0);
        let obj = { channel_id: closure_0 };
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.original_message_id = closure_1;
        let name = emoji.id;
        if (null == name) {
          name = emoji.name;
        }
        obj.emoji_id = name;
        obj.action = "react";
        obj = outer3_0(outer3_2[14]);
        let guild_id1;
        if (null != channel) {
          guild_id1 = channel.guild_id;
        }
        const merged = Object.assign(obj.collectGuildAnalyticsMetadata(guild_id1));
        let obj1 = outer3_0(outer3_2[14]);
        const merged1 = Object.assign(obj1.collectChannelAnalyticsMetadata(channel));
        outer3_1(outer3_2[13]).track(outer3_8.MESSAGE_SHORTCUT_ACTION_SENT, obj);
        const obj8 = outer3_1(outer3_2[13]);
      }
      const AccessibilityAnnouncer = outer3_0(outer3_2[15]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = outer3_0(outer3_2[7]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = outer3_0(outer3_2[7]).t;
      if (c4) {
        obj = { name: emoji.name };
        announce(formatToPlainString(t["RJlG+R"], obj));
        obj1 = { channelId: closure_0, messageId: closure_1 };
        const obj2 = {};
        const merged2 = Object.assign(emoji);
        obj2["animated"] = false;
        obj1.emoji = obj2;
        const result = outer3_1(outer3_2[16]).triggerFullscreenAnimation(obj1);
        const obj5 = outer3_1(outer3_2[16]);
      } else {
        const obj3 = { name: emoji.name };
        announce(formatToPlainString(t.ol4acF, obj3));
      }
    }).catch((arg0) => {
      let obj = { isRetry: c5 };
      if (outer3_12(arg0, () => outer4_16(outer1_0, outer1_1, outer1_2, outer1_3, { burst: outer1_4, isRetry: true }), obj)) {
        obj = { burst: c4 };
        outer3_13("MESSAGE_REACTION_REMOVE", closure_0, closure_1, emoji, obj);
        const AccessibilityAnnouncer = outer3_0(outer3_2[15]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = outer3_0(outer3_2[7]).intl;
        const formatToPlainString = intl.formatToPlainString;
        const t = outer3_0(outer3_2[7]).t;
        if (c4) {
          obj = { name: emoji.name };
          announce(formatToPlainString(t.fJeu87, obj));
        } else {
          const obj1 = { name: emoji.name };
          announce(formatToPlainString(t["UUn5V+"], obj1));
        }
      }
    });
  })();
  iter.next();
  return iter;
}
function removeAllReactions(closure_0, closure_1) {
  return _removeAllReactions(...arguments);
}
async function _removeAllReactions(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2;
  closure_2 = null != arg2 && arg2.isRetry;
  let obj = outer2_1(outer2_2[12]);
  yield obj.unarchiveThreadIfNecessary(arg0);
  const HTTP = outer2_0(outer2_2[11]).HTTP;
  obj = { url: outer2_10.REMOVE_REACTIONS(arg0, arg1), oldFormErrors: true, rejectWithError: outer2_0(outer2_2[11]).rejectWithMigratedError() };
  const obj3 = outer2_0(outer2_2[11]);
  HTTP.del(obj).catch((arg0) => {
    outer3_12(arg0, () => outer4_18(outer1_0, outer1_1, { isRetry: true }), { isRetry: closure_2 });
  });
}
function removeEmojiReactions(channelId, messageId, emoji) {
  return _removeEmojiReactions(...arguments);
}
async function _removeEmojiReactions(arg0, arg1, arg2, arg3, arg4) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let set;
  set = null != arg3 && arg3.isRetry;
  let obj = outer2_1(outer2_2[12]);
  yield obj.unarchiveThreadIfNecessary(arg0);
  if (null === arg2.id) {
    let name = arg2.name;
  } else {
    const _HermesInternal = HermesInternal;
    name = "" + arg2.name + ":" + arg2.id;
  }
  const HTTP = outer2_0(outer2_2[11]).HTTP;
  obj = { url: outer2_10.REMOVE_EMOJI_REACTIONS(arg0, arg1, name), oldFormErrors: true, rejectWithError: outer2_0(outer2_2[11]).rejectWithMigratedError() };
  const obj3 = outer2_0(outer2_2[11]);
  HTTP.del(obj).catch((arg0) => {
    outer3_12(arg0, () => outer4_20(outer1_0, outer1_1, outer1_2, { isRetry: true }), { isRetry: set });
  });
}
function removeReaction(emoji, set, reactionType) {
  return _removeReaction(...arguments);
}
async function _removeReaction(arg0, arg1) {
  let iter = (function*(channelId) {
    channelId = channelId.channelId;
    const messageId = channelId.messageId;
    const emoji = channelId.emoji;
    let MESSAGE = channelId.location;
    if (MESSAGE === undefined) {
      MESSAGE = outer2_11.MESSAGE;
    }
    const userId = channelId.userId;
    const options = channelId.options;
    let c6;
    let closure_7;
    yield undefined;
    c6 = tmp3;
    closure_7 = null != options && options.isRetry;
    let obj = { userId, burst: tmp3 };
    outer2_13("MESSAGE_REACTION_REMOVE", channelId, messageId, emoji, obj);
    let obj1 = outer2_1(outer2_2[12]);
    yield obj1.unarchiveThreadIfNecessary(channelId);
    const HTTP = outer2_0(outer2_2[11]).HTTP;
    obj = {};
    obj = { channelId, messageId, emoji };
    let str = "@me";
    if (null != userId) {
      str = userId;
    }
    obj.userId = str;
    const ReactionTypes = outer2_0(outer2_2[10]).ReactionTypes;
    obj.type = null != options && options.burst ? ReactionTypes.BURST : ReactionTypes.NORMAL;
    obj.useTypeEndpoint = true;
    obj.url = outer2_14(obj);
    obj1 = { location: MESSAGE, burst: null != options && options.burst };
    obj.query = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = outer2_0(outer2_2[11]).rejectWithMigratedError();
    const obj6 = outer2_0(outer2_2[11]);
    const tmp6 = outer2_14;
    const delResult = HTTP.del(obj);
    HTTP.del(obj).then(() => {
      if (null != options) {
        if (options.burst) {
          const AccessibilityAnnouncer2 = outer3_0(outer3_2[15]).AccessibilityAnnouncer;
          const intl2 = outer3_0(outer3_2[7]).intl;
          let obj = { name: emoji.name };
          AccessibilityAnnouncer2.announce(intl2.formatToPlainString(outer3_0(outer3_2[7]).t["3l9f6u"], obj));
        }
      }
      const AccessibilityAnnouncer = outer3_0(outer3_2[15]).AccessibilityAnnouncer;
      const intl = outer3_0(outer3_2[7]).intl;
      obj = { name: emoji.name };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(outer3_0(outer3_2[7]).t["DQxi+7"], obj));
    }).catch((() => {
      let closure_0 = outer3_3(async (arg0) => {
        let obj = { isRetry: outer2_7 };
        if (outer5_12(arg0, () => {
          obj = { channelId: closure_0, messageId: outer3_1, emoji: outer3_2, location: outer3_3, userId: outer3_4, options: obj };
          obj = { burst: outer3_6, isRetry: true };
          return outer6_22(obj);
        }, obj)) {
          obj = { userId: outer2_4, burst: outer2_6, colors: yield outer5_24(outer2_2, outer2_6) };
          outer5_13("MESSAGE_REACTION_ADD", closure_0, outer2_1, outer2_2, obj);
          if (null != outer2_5) {
            if (outer2_5.burst) {
              const AccessibilityAnnouncer2 = outer5_0(outer5_2[15]).AccessibilityAnnouncer;
              const intl2 = outer5_0(outer5_2[7]).intl;
              obj = { name: outer2_2.name };
              AccessibilityAnnouncer2.announce(intl2.formatToPlainString(outer5_0(outer5_2[7]).t.OamVbV, obj));
            }
          }
          const AccessibilityAnnouncer = outer5_0(outer5_2[15]).AccessibilityAnnouncer;
          const intl = outer5_0(outer5_2[7]).intl;
          const obj1 = { name: outer2_2.name };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(outer5_0(outer5_2[7]).t["tD9+b+"], obj1));
        }
      });
      return function() {
        return callback(...arguments);
      };
    })());
  })();
  iter.next();
  return iter;
}
function getOptimisticEmojiColors() {
  return _getOptimisticEmojiColors(...arguments);
}
async function _getOptimisticEmojiColors(arg0, arg1, arg2) {
  if (arg1) {
    yield outer2_0(outer2_2[17]).getEmojiColors(arg0);
    const obj = outer2_0(outer2_2[17]);
  }
}
function hasUserAlreadyReacted(arg0, arg1, arg2, arg3) {
  message = message.getMessage(arg0, arg1);
  let result = null != message;
  if (result) {
    result = message.userHasReactedWithEmoji(arg2, arg3);
  }
  return result;
}
({ AbortCodes: closure_7, AnalyticEvents: closure_8, ComponentActions: closure_9, Endpoints: closure_10 } = ME);
let obj = { MESSAGE: "Message", FORUM_TOOLBAR: "Forum Toolbar", MOBILE_MEDIA_VIEWER: "Mobile Media Viewer", MESSAGE_HOVER_BAR: "Message Hover Bar", MESSAGE_INLINE_BUTTON: "Message Inline Button", MESSAGE_CONTEXT_MENU: "Message Context Menu", MESSAGE_REACTION_PICKER: "Message Reaction Picker", MESSAGE_SHORTCUT: "Message Shortcut", DOUBLE_TAP: "Double Tap", IN_APP_NOTIFICATION: "In App Notification" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/reactions/ReactionActionCreators.tsx");

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
  importDefault(686).dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId, messageId, emoji, key });
};
export { removeAllReactions };
export { removeEmojiReactions };
export { removeReaction };
export { hasUserAlreadyReacted };
