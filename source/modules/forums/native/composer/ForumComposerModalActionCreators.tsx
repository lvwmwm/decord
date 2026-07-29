// Module ID: 9566
// Function ID: 9567
// Name: openCreateForumPostModal
// Dependencies: [6078, 4395, 9567, 1959, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9566 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(6078) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(6078).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(6078);
  }
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9567, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(6078) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(6078) /* trackForumChannelSeenBatch */;
  }
  importDefault(4395).popWithKey(c3);
};
