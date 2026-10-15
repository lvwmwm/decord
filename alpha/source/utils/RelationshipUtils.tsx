// Module ID: 18513
// Function ID: 18514
// Name: RelationshipUtils
// Dependencies: [1085, 16465, 1415, 1126, 18514, 7234, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 18513 (RelationshipUtils)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7234 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 16465 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 18514 */;
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
