// Module ID: 9949
// Function ID: 9950
// Name: openCreateForumPostModal
// Dependencies: [7271, 4550, 9950, 2007, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9949 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7271) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7271).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7271);
  }
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(9950, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7271) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7271) /* trackForumChannelSeenBatch */;
  }
  importDefault(4550).popWithKey(c3);
};
