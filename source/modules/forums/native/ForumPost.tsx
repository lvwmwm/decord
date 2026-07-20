// Module ID: 11107
// Function ID: 86485
// Name: ForumPostGrid
// Dependencies: []
// Exports: ForumPostListDisabled

// Module 11107 (ForumPostGrid)
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
  const items = [callback(importDefault(dependencyMap[5]), { thread, hasUnreads, isNew }), callback(importDefault(dependencyMap[6]), { thread, hasUnreads, media }), callback(importDefault(dependencyMap[7]), { thread, firstMessage, hasUnreads, parentChannel })];
  obj.children = items;
  return callback2(closure_7, obj);
}
function ConnectedForumPost(arg0) {
  let hasUnreads;
  let isNew;
  let style;
  ({ threadId: closure_0, style } = arg0);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => store.getChannel(closure_0));
  importDefault(dependencyMap[9])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const parent_id = stateFromStores.parent_id;
  const importDefault = parent_id;
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_3];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.getChannel(parent_id));
  let obj2 = arg1(dependencyMap[10]);
  const firstForumPostMessage = obj2.useFirstForumPostMessage(stateFromStores);
  const firstMessage = firstForumPostMessage.firstMessage;
  const dependencyMap = firstMessage;
  const loaded = firstForumPostMessage.loaded;
  let obj3 = arg1(dependencyMap[11]);
  const forumPostReadStates = obj3.useForumPostReadStates(stateFromStores);
  ({ isNew, hasUnreads } = forumPostReadStates);
  let obj4 = arg1(dependencyMap[11]);
  const forumPostFirstMessageMarkup = obj4.useForumPostFirstMessageMarkup({ firstMessage, hasUnreads });
  const hasSpoilerEmbeds = forumPostFirstMessageMarkup.hasSpoilerEmbeds;
  const forumPostMediaThumbnail = arg1(dependencyMap[14]).useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds);
  const obj6 = arg1(dependencyMap[14]);
  const firstMediaIsEmbed = arg1(dependencyMap[14]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  const obj7 = arg1(dependencyMap[14]);
  const items2 = [closure_4];
  const stateFromStoresObject = arg1(dependencyMap[8]).useStateFromStoresObject(items2, () => {
    const obj = {};
    let isBlockedForMessageResult = null != firstMessage;
    if (isBlockedForMessageResult) {
      isBlockedForMessageResult = closure_4.isBlockedForMessage(firstMessage);
    }
    obj.isBlocked = isBlockedForMessageResult;
    let isIgnoredForMessageResult = null != firstMessage;
    if (isIgnoredForMessageResult) {
      isIgnoredForMessageResult = closure_4.isIgnoredForMessage(firstMessage);
    }
    obj.isIgnored = isIgnoredForMessageResult;
    return obj;
  });
  const isBlocked = stateFromStoresObject.isBlocked;
  if (loaded) {
    if (!isBlocked) {
      if (!stateFromStoresObject.isIgnored) {
        if (useForumChannelStore(parent_id).layoutType === arg1(dependencyMap[16]).ForumLayout.GRID) {
          if (forumPostMediaThumbnail.length > 0) {
            obj = { style, threadId: stateFromStores.id };
            obj = { thread: stateFromStores, media: forumPostMediaThumbnail, parentChannel: stateFromStores1, firstMessage, hasUnreads, isNew };
            obj.children = callback(ForumPostGrid, obj);
            let tmp25Result = callback(arg1(dependencyMap[12]).ForumPostPressableContainer, obj);
          }
        }
        obj1 = { style, threadId: stateFromStores.id };
        obj2 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: forumPostFirstMessageMarkup.content, media: forumPostMediaThumbnail[0], isEmbed: firstMediaIsEmbed, hasUnreads, isNew, firstMessageLoaded: loaded, isLocalDeviceMedia: false };
        obj1.children = callback(importDefault(dependencyMap[13]), obj2);
        tmp25Result = callback(arg1(dependencyMap[12]).ForumPostPressableContainer, obj1);
      }
    }
    obj3 = { style, threadId: stateFromStores.id };
    style = importDefault(dependencyMap[13]);
    obj4 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: null, media: null, hasUnreads, isNew, firstMessageLoaded: true, isLocalDeviceMedia: false };
    isNew = "ignored";
    if (isBlocked) {
      isNew = "blocked";
    }
    obj4.senderModifier = isNew;
    obj3.children = callback(style, obj4);
    tmp25Result = callback(arg1(dependencyMap[12]).ForumPostPressableContainer, obj3);
    const tmp25 = callback;
    const tmp28 = callback;
  } else {
    return callback(importDefault(dependencyMap[15]), {});
  }
}
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const useForumChannelStore = arg1(dependencyMap[3]).useForumChannelStore;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((arg0) => {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_3];
  let tmp = null;
  if (null != obj.useStateFromStores(items, () => channel.getChannel(arg0.threadId))) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = callback(ConnectedForumPost, obj);
  }
  return tmp;
});
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/forums/native/ForumPost.tsx");

export default memoResult;
export const ForumPostListDisabled = function ForumPostListDisabled(threadId) {
  let firstMessage;
  let loaded;
  let localDeviceMedia;
  let style;
  const arg1 = threadId.threadId;
  ({ style, localDeviceMedia } = threadId);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => store.getChannel(threadId));
  const importDefault = stateFromStores;
  let tmp2 = null;
  importDefault(dependencyMap[9])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => store.getChannel(stateFromStores.parent_id));
  const obj2 = arg1(dependencyMap[8]);
  const firstForumPostMessage = arg1(dependencyMap[10]).useFirstForumPostMessage(stateFromStores);
  ({ firstMessage, loaded } = firstForumPostMessage);
  arg1(dependencyMap[11]);
  if (loaded) {
    obj = { style };
    obj = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: tmp7, media: localDeviceMedia, hasUnreads: true, isNew: false, firstMessageLoaded: loaded, isLocalDeviceMedia: true };
    obj.children = callback(importDefault(dependencyMap[13]), obj);
    tmp2 = callback(arg1(dependencyMap[12]).ForumPostDisabledContainer, obj);
  }
  return tmp2;
};
