// Module ID: 9563
// Function ID: 9564
// Name: openCreateForumPostModal
// Dependencies: [6076, 4395, 9564, 1959, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9563 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(6076) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(6076).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(6076);
  }
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9564, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(6076) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(6076) /* trackForumChannelSeenBatch */;
  }
  importDefault(4395).popWithKey(c3);
};
