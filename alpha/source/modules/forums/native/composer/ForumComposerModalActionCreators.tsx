// Module ID: 9915
// Function ID: 9916
// Name: ForumComposerModalActionCreators
// Dependencies: [7381, 5069, 9916, 1981, 2]
// Exports: closeCreateForumPostModal, openCreateForumPostModal

// Module 9915 (ForumComposerModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import tracking_Tracking from "tracking/Tracking" /* 7381 */;
import size from "module_2" /* 2 */;

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  const result = tracking_Tracking.trackMobileForumComposerOpened({ guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject });
  if (!tmp4) {
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = tmp(7381).trackForumCreateNewPostStarted({ guildId: null, channelId: null });
    const obj3 = { guildId: null, channelId: null };
    const tmpResult = tmp(7381);
  }
  const obj2 = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const tmp2 = dependencyMap;
  tmp4 = null != guildId.isEdit && guildId.isEdit;
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9916, tmp2.paths), guildId, c3);
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
