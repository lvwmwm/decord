// Module ID: 19520
// Function ID: 19521
// Name: RelationshipUtils
// Dependencies: [1071, 16799, 1412, 1112, 19521, 7617, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 19520 (RelationshipUtils)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7617 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 16799 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 19521 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export function showPendingNotification(user) {
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
}
export function showAcceptedNotification(user) {
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
}
