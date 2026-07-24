// Module ID: 11154
// Function ID: 86852
// Name: ForumPostGrid
// Dependencies: [31, 1348, 3767, 11155, 33, 11156, 11160, 11171, 566, 44, 5681, 9173, 11175, 11176, 8372, 11181, 1358, 2]
// Exports: ForumPostListDisabled

// Module 11154 (ForumPostGrid)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { useForumChannelStore } from "set";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ForumPostGrid(arg0) {
  let firstMessage;
  let hasUnreads;
  let isNew;
  let media;
  let parentChannel;
  let thread;
  ({ hasUnreads, thread } = arg0);
  const obj = {};
  ({ firstMessage, isNew, media, parentChannel } = arg0);
  const items = [callback(importDefault(11156), { thread, hasUnreads, isNew }), callback(importDefault(11160), { thread, hasUnreads, media }), callback(importDefault(11171), { thread, firstMessage, hasUnreads, parentChannel })];
  obj.children = items;
  return callback2(closure_7, obj);
}
function ConnectedForumPost(arg0) {
  let hasUnreads;
  let isNew;
  let require;
  let style;
  ({ threadId: require, style } = arg0);
  let obj = require(firstMessage[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getChannel(closure_0));
  parent_id(firstMessage[9])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  parent_id = stateFromStores.parent_id;
  let obj1 = require(firstMessage[8]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_3.getChannel(parent_id));
  let obj2 = require(firstMessage[10]);
  const firstForumPostMessage = obj2.useFirstForumPostMessage(stateFromStores);
  firstMessage = firstForumPostMessage.firstMessage;
  const loaded = firstForumPostMessage.loaded;
  let obj3 = require(firstMessage[11]);
  const forumPostReadStates = obj3.useForumPostReadStates(stateFromStores);
  ({ isNew, hasUnreads } = forumPostReadStates);
  let obj4 = require(firstMessage[11]);
  const forumPostFirstMessageMarkup = obj4.useForumPostFirstMessageMarkup({ firstMessage, hasUnreads });
  const hasSpoilerEmbeds = forumPostFirstMessageMarkup.hasSpoilerEmbeds;
  const forumPostMediaThumbnail = require(firstMessage[14]).useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds);
  const obj6 = require(firstMessage[14]);
  const firstMediaIsEmbed = require(firstMessage[14]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  const obj7 = require(firstMessage[14]);
  const items2 = [closure_4];
  const stateFromStoresObject = require(firstMessage[8]).useStateFromStoresObject(items2, () => {
    const obj = {};
    let isBlockedForMessageResult = null != firstMessage;
    if (isBlockedForMessageResult) {
      isBlockedForMessageResult = outer1_4.isBlockedForMessage(firstMessage);
    }
    obj.isBlocked = isBlockedForMessageResult;
    let isIgnoredForMessageResult = null != firstMessage;
    if (isIgnoredForMessageResult) {
      isIgnoredForMessageResult = outer1_4.isIgnoredForMessage(firstMessage);
    }
    obj.isIgnored = isIgnoredForMessageResult;
    return obj;
  });
  const isBlocked = stateFromStoresObject.isBlocked;
  if (loaded) {
    if (!isBlocked) {
      if (!stateFromStoresObject.isIgnored) {
        if (useForumChannelStore(parent_id).layoutType === require(firstMessage[16]).ForumLayout.GRID) {
          if (forumPostMediaThumbnail.length > 0) {
            obj = { style, threadId: stateFromStores.id };
            obj = { thread: stateFromStores, media: forumPostMediaThumbnail, parentChannel: stateFromStores1, firstMessage, hasUnreads, isNew };
            obj.children = callback(ForumPostGrid, obj);
            let tmp25Result = callback(require(firstMessage[12]).ForumPostPressableContainer, obj);
          }
        }
        obj1 = { style, threadId: stateFromStores.id };
        obj2 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: forumPostFirstMessageMarkup.content, media: forumPostMediaThumbnail[0], isEmbed: firstMediaIsEmbed, hasUnreads, isNew, firstMessageLoaded: loaded, isLocalDeviceMedia: false };
        obj1.children = callback(parent_id(firstMessage[13]), obj2);
        tmp25Result = callback(require(firstMessage[12]).ForumPostPressableContainer, obj1);
      }
    }
    obj3 = { style, threadId: stateFromStores.id };
    style = parent_id(firstMessage[13]);
    obj4 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: null, media: null, hasUnreads, isNew, firstMessageLoaded: true, isLocalDeviceMedia: false };
    isNew = "ignored";
    if (isBlocked) {
      isNew = "blocked";
    }
    obj4.senderModifier = isNew;
    obj3.children = callback(style, obj4);
    tmp25Result = callback(require(firstMessage[12]).ForumPostPressableContainer, obj3);
    const tmp25 = callback;
    const tmp28 = callback;
  } else {
    return callback(parent_id(firstMessage[15]), {});
  }
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const memoResult = require("result").memo((arg0) => {
  const _require = arg0;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  let tmp = null;
  if (null != obj.useStateFromStores(items, () => outer1_3.getChannel(threadId.threadId))) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = callback(ConnectedForumPost, obj);
  }
  return tmp;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/native/ForumPost.tsx");

export default memoResult;
export const ForumPostListDisabled = function ForumPostListDisabled(threadId) {
  let firstMessage;
  let loaded;
  let localDeviceMedia;
  let style;
  threadId = threadId.threadId;
  ({ style, localDeviceMedia } = threadId);
  let obj = threadId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getChannel(threadId));
  let tmp2 = null;
  stateFromStores(44)(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = threadId(566).useStateFromStores(items1, () => outer1_3.getChannel(stateFromStores.parent_id));
  const obj2 = threadId(566);
  const firstForumPostMessage = threadId(5681).useFirstForumPostMessage(stateFromStores);
  ({ firstMessage, loaded } = firstForumPostMessage);
  threadId(9173);
  if (loaded) {
    obj = { style };
    obj = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: tmp7, media: localDeviceMedia, hasUnreads: true, isNew: false, firstMessageLoaded: loaded, isLocalDeviceMedia: true };
    obj.children = callback(stateFromStores(11176), obj);
    tmp2 = callback(threadId(11175).ForumPostDisabledContainer, obj);
  }
  return tmp2;
};
