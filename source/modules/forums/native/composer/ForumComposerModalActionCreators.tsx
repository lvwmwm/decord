// Module ID: 9542
// Function ID: 74274
// Name: openCreateForumPostModal
// Dependencies: [6060, 4372, 9543, 1935, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9542 (openCreateForumPostModal)
let result = require("clearDraft").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(6060) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp2) {
    obj = {};
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = require(6060) /* trackForumChannelSeenBatch */.trackForumCreateNewPostStarted(obj);
    const obj3 = require(6060) /* trackForumChannelSeenBatch */;
  }
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(9543, dependencyMap.paths), guildId, "create-forum-post");
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(6060) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(6060) /* trackForumChannelSeenBatch */;
  }
  importDefault(4372).popWithKey("create-forum-post");
};
