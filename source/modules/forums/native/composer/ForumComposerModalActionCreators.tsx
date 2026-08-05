// Module ID: 9791
// Function ID: 9792
// Name: openCreateForumPostModal
// Dependencies: [7120, 4460, 9792, 1959, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9791 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7120) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7120).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7120);
  }
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(9792, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7120) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7120) /* trackForumChannelSeenBatch */;
  }
  importDefault(4460).popWithKey(c3);
};
