// Module ID: 10165
// Function ID: 10166
// Name: openCreateForumPostModal
// Dependencies: [7514, 5260, 10166, 2007, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 10165 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7514) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7514).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7514);
  }
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(10166, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7514) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7514) /* trackForumChannelSeenBatch */;
  }
  importDefault(5260).popWithKey(c3);
};
