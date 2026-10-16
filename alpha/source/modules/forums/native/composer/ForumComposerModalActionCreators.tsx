// Module ID: 9926
// Function ID: 9927
// Name: ForumComposerModalActionCreators
// Dependencies: [8124, 6152, 9927, 2002, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9926 (ForumComposerModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import Tracking from "Tracking" /* 8124 */;
import size from "module_2" /* 2 */;

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  const obj = Tracking;
  const obj2 = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj2);
  const tmp2 = dependencyMap;
  const tmp4 = null != guildId.isEdit && guildId.isEdit;
  if (!tmp4) {
    const obj3 = { guildId: null, channelId: null };
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const tmpResult = Tracking;
    const result1 = tmpResult.trackForumCreateNewPostStarted(obj3);
  }
  const obj5 = ModalActionCreatorsDefault;
  obj5.pushLazy(asyncRequire(9927, tmp2.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const obj = Tracking;
    const result = obj.trackMobileForumComposerDismissed();
  }
  const obj2 = ModalActionCreatorsDefault;
  obj2.popWithKey(c3);
};
