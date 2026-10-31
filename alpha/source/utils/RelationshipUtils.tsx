// Module ID: 19598
// Function ID: 19599
// Name: RelationshipUtils
// Dependencies: [1072, 17500, 1409, 1113, 19599, 7485, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 19598 (RelationshipUtils)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7485 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 17500 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 19599 */;
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
