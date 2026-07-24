// Module ID: 9581
// Function ID: 74557
// Name: openCreateForumPostModal
// Dependencies: [7008, 4337, 9582, 1934, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9581 (openCreateForumPostModal)
let result = require("clearDraft").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7008) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp2) {
    obj = {};
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = require(7008) /* trackForumChannelSeenBatch */.trackForumCreateNewPostStarted(obj);
    const obj3 = require(7008) /* trackForumChannelSeenBatch */;
  }
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(9582, dependencyMap.paths), guildId, "create-forum-post");
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7008) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7008) /* trackForumChannelSeenBatch */;
  }
  importDefault(4337).popWithKey("create-forum-post");
};
