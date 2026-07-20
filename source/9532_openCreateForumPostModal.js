// Module ID: 9532
// Function ID: 74266
// Name: openCreateForumPostModal
// Dependencies: []
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9532 (openCreateForumPostModal)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(dependencyMap[0]);
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp2) {
    obj = {};
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = require(dependencyMap[0]).trackForumCreateNewPostStarted(obj);
    const obj3 = require(dependencyMap[0]);
  }
  importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), guildId, "create-forum-post");
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(dependencyMap[0]).trackMobileForumComposerDismissed();
    const obj = require(dependencyMap[0]);
  }
  importDefault(dependencyMap[1]).popWithKey("create-forum-post");
};
