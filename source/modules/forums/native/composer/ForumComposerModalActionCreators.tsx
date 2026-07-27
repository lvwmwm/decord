// Module ID: 9502
// Function ID: 74145
// Name: openCreateForumPostModal
// Dependencies: [6026, 4338, 9503, 1935, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9502 (openCreateForumPostModal)
let result = require("clearDraft").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(6026) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp2) {
    obj = {};
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = require(6026) /* trackForumChannelSeenBatch */.trackForumCreateNewPostStarted(obj);
    const obj3 = require(6026) /* trackForumChannelSeenBatch */;
  }
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(9503, dependencyMap.paths), guildId, "create-forum-post");
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(6026) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(6026) /* trackForumChannelSeenBatch */;
  }
  importDefault(4338).popWithKey("create-forum-post");
};
