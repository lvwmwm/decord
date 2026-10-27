// Module ID: 18982
// Function ID: 18983
// Name: RelationshipUtils
// Dependencies: [1084, 16918, 1414, 1125, 18983, 7413, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 18982 (RelationshipUtils)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7413 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 16918 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 18983 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t["t3+Af3"]);
  const showNotification = NotificationActionCreatorsDefault.showNotification;
  NotificationActionCreatorsDefault;
  let obj = AvatarUtilsDefault;
  const obj2 = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      const obj = FriendsActionCreatorsDefault;
      obj.transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  };
  showNotification(obj.getUserAvatarURL(user), user.username, stringResult, {}, obj2);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  _require = user;
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.MYr3Ka);
  const showNotification = NotificationActionCreatorsDefault.showNotification;
  NotificationActionCreatorsDefault;
  let obj = AvatarUtilsDefault;
  let obj2 = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      const obj = ChannelActionCreatorsDefault;
      const obj2 = { recipientIds: user.id };
      obj.openPrivateChannel(obj2);
    },
    isUserAvatar: true
  };
  showNotification(obj.getUserAvatarURL(user), user.username, stringResult, {}, obj2);
};
