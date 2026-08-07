// Module ID: 9838
// Function ID: 9839
// Name: openCreateForumPostModal
// Dependencies: [7166, 4507, 9839, 1988, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9838 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7166) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7166).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7166);
  }
  importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(9839, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7166) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7166) /* trackForumChannelSeenBatch */;
  }
  importDefault(4507).popWithKey(c3);
};
