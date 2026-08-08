// Module ID: 9904
// Function ID: 9905
// Name: openCreateForumPostModal
// Dependencies: [7226, 4509, 9905, 1988, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9904 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7226) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7226).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7226);
  }
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(9905, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7226) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7226) /* trackForumChannelSeenBatch */;
  }
  importDefault(4509).popWithKey(c3);
};
