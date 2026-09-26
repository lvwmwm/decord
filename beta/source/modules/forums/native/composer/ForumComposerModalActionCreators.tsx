// Module ID: 10548
// Function ID: 10549
// Name: ForumComposerModalActionCreators
// Dependencies: [8041, 4991, 10549, 1980, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 10548 (ForumComposerModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import tracking_Tracking from "tracking/Tracking" /* 8041 */;
import size from "module_2" /* 2 */;

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  const result = tracking_Tracking.trackMobileForumComposerOpened({ guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject });
  if (!tmp4) {
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = tmp(8041).trackForumCreateNewPostStarted({ guildId: null, channelId: null });
    const obj3 = { guildId: null, channelId: null };
    const tmpResult = tmp(8041);
  }
  const obj2 = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const tmp2 = dependencyMap;
  tmp4 = null != guildId.isEdit && guildId.isEdit;
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10549, tmp2.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = tracking_Tracking.trackMobileForumComposerDismissed();
  }
  ModalActionCreatorsDefault.popWithKey(c3);
};
