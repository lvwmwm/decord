// Module ID: 11482
// Function ID: 11483
// Name: ForumPost
// Dependencies: [19, 2045, 4479, 11483, 21, 11484, 11488, 11499, 504, 38, 6722, 7310, 11502, 11503, 7323, 11509, 2055, 2]
// Exports: ForumPostListDisabled

// Module 11482 (ForumPost)
import ForumChannelStore from "ForumChannelStore" /* 11483 */;
import ForumPostGridHeaderDefault from "ForumPostGridHeader" /* 11484 */;
import ForumPostGridBodyDefault from "ForumPostGridBody" /* 11488 */;
import ForumPostGridFooterDefault from "ForumPostGridFooter" /* 11499 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function ForumPostGrid(arg0) {
  let firstMessage;
  let hasUnreads;
  let isNew;
  let items;
  let media;
  let parentChannel;
  let thread;
  ({ hasUnreads, thread } = arg0);
  const obj = { children: items };
  ({ firstMessage, isNew, media, parentChannel } = arg0);
  items = [metroRequire(ForumPostGridHeaderDefault, { thread, hasUnreads, isNew }), metroRequire(ForumPostGridBodyDefault, { thread, hasUnreads, media }), metroRequire(ForumPostGridFooterDefault, { thread, firstMessage, hasUnreads, parentChannel })];
  return metroImportAll(metroImportDefault, obj);
}
function ConnectedForumPost(arg0) {
  let content;
  let hasSpoilerEmbeds;
  let hasUnreads;
  let isNew;
  let obj10;
  let obj12;
  let obj14;
  let require;
  let str;
  let style;
  let tmp13;
  let tmp4Result;
  ({ threadId: require, style } = arg0);
  let parent_id;
  let firstMessage;
  const tmp = require;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(_require));
  parent_id(firstMessage[9])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  parent_id = stateFromStores.parent_id;
  const layoutType = useForumChannelStore(parent_id).layoutType;
  const items1 = [ChannelStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(parent_id));
  const obj3 = require("ForumPostDataLoader");
  const firstForumPostMessage = obj3.useFirstForumPostMessage(stateFromStores);
  firstMessage = firstForumPostMessage.firstMessage;
  const loaded = firstForumPostMessage.loaded;
  const obj4 = require("ForumHooks");
  const forumPostReadStates = obj4.useForumPostReadStates(stateFromStores);
  ({ isNew, hasUnreads } = forumPostReadStates);
  const obj5 = require("ForumHooks");
  const forumPostFirstMessageMarkup = obj5.useForumPostFirstMessageMarkup({ firstMessage, hasUnreads });
  ({ hasSpoilerEmbeds, content } = forumPostFirstMessageMarkup);
  const obj6 = require("ForumPostMediaUtils");
  const forumPostMediaThumbnail = obj6.useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds);
  const obj7 = require("ForumPostMediaUtils");
  const firstMediaIsEmbed = obj7.useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  const items2 = [RelationshipStore];
  const obj8 = require("get initialized");
  const stateFromStoresObject = obj8.useStateFromStoresObject(items2, () => {
    let isIgnoredForMessageResult;
    const obj = { isBlocked: null != firstMessage && RelationshipStore.isBlockedForMessage(tmp), isIgnored: isIgnoredForMessageResult };
    isIgnoredForMessageResult = null != tmp && RelationshipStore.isIgnoredForMessage(tmp);
    return obj;
  });
  const isBlocked = stateFromStoresObject.isBlocked;
  if (loaded) {
    if (!isBlocked) {
      let tmp18Result;
      if (!stateFromStoresObject.isIgnored) {
        if (layoutType === tmp(firstMessage[16]).ForumLayout.GRID) {
          if (forumPostMediaThumbnail.length > 0) {
            const obj9 = { style, threadId: stateFromStores.id, children: closure_6(ForumPostGrid, obj10) };
            obj10 = { thread: stateFromStores, media: forumPostMediaThumbnail, parentChannel: stateFromStores1, firstMessage, hasUnreads, isNew };
            const ForumPostPressableContainer2 = tmp(tmp2[12]).ForumPostPressableContainer;
            tmp18Result = closure_6(ForumPostPressableContainer2, obj9);
          }
        }
        const obj11 = { style, threadId: stateFromStores.id, children: closure_6(parent_id(firstMessage[13]), obj12) };
        const ForumPostPressableContainer = tmp(tmp2[12]).ForumPostPressableContainer;
        obj12 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: content, media: forumPostMediaThumbnail[0], isEmbed: firstMediaIsEmbed, hasUnreads, isNew, firstMessageLoaded: loaded, isLocalDeviceMedia: false };
        tmp18Result = closure_6(ForumPostPressableContainer, obj11);
      }
      tmp13 = tmp18Result;
    }
    const obj13 = { style, threadId: stateFromStores.id, children: closure_6(tmp4Result, obj14) };
    const ForumPostPressableContainer3 = tmp(tmp2[12]).ForumPostPressableContainer;
    obj14 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: null, media: null, hasUnreads, isNew, firstMessageLoaded: true, isLocalDeviceMedia: false, senderModifier: str };
    str = "ignored";
    tmp4Result = parent_id(firstMessage[13]);
    if (isBlocked) {
      str = "blocked";
    }
    tmp18Result = tmp18(ForumPostPressableContainer3, obj13);
  } else {
    tmp13 = closure_6(tmp4(tmp2[15]), {});
  }
  return tmp13;
}
const useForumChannelStore = ForumChannelStore.useForumChannelStore;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const memoResult = react.memo((arg0) => {
  let threadId;
  _require = arg0;
  const items = [ChannelStore];
  let tmp = null;
  const obj = require("get initialized");
  if (null != obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId.threadId))) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp = closure_6(ConnectedForumPost, obj2);
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/forums/native/ForumPost.tsx");

export default memoResult;
export const ForumPostListDisabled = function ForumPostListDisabled(threadId) {
  let firstMessage;
  let loaded;
  let localDeviceMedia;
  let obj5;
  let style;
  threadId = threadId.threadId;
  ({ style, localDeviceMedia } = threadId);
  const items = [ChannelStore];
  const obj = threadId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp5 = null;
  stateFromStores(38)(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const items1 = [ChannelStore];
  const obj2 = threadId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores.parent_id));
  const obj3 = threadId(6722);
  const firstForumPostMessage = obj3.useFirstForumPostMessage(stateFromStores);
  ({ firstMessage, loaded } = firstForumPostMessage);
  threadId(7310);
  const tmp = threadId;
  const tmp4 = stateFromStores;
  if (loaded) {
    const obj4 = { style, children: closure_6(tmp4(11503), obj5) };
    const ForumPostDisabledContainer = tmp(11502).ForumPostDisabledContainer;
    obj5 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: tmp10, media: localDeviceMedia, hasUnreads: true, isNew: false, firstMessageLoaded: loaded, isLocalDeviceMedia: true };
    tmp5 = closure_6(ForumPostDisabledContainer, obj4);
  }
  return tmp5;
};
