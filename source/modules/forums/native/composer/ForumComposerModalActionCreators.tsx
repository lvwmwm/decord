// Module ID: 9910
// Function ID: 9911
// Name: openCreateForumPostModal
// Dependencies: [7227, 4509, 9911, 2007, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9910 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7227) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7227).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7227);
  }
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(9911, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7227) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7227) /* trackForumChannelSeenBatch */;
  }
  importDefault(4509).popWithKey(c3);
};
