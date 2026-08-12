// Module ID: 9951
// Function ID: 9952
// Name: openCreateForumPostModal
// Dependencies: [7266, 4549, 9952, 2007, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9951 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7266) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7266).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7266);
  }
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(9952, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7266) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7266) /* trackForumChannelSeenBatch */;
  }
  importDefault(4549).popWithKey(c3);
};
