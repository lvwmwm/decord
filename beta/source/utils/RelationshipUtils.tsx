// Module ID: 17882
// Function ID: 17883
// Name: RelationshipUtils
// Dependencies: [1078, 15781, 1401, 1119, 17883, 4771, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 17882 (RelationshipUtils)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4771 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15781 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 17883 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = util.intl;
  const stringResult = intl.string(util.t["t3+Af3"]);
  const obj = NotificationActionCreatorsDefault;
  obj.showNotification(AvatarUtilsDefault.getUserAvatarURL(user), user.username, stringResult, {}, {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      FriendsActionCreatorsDefault.transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  });
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  _require = user;
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.MYr3Ka);
  const obj = NotificationActionCreatorsDefault;
  obj.showNotification(AvatarUtilsDefault.getUserAvatarURL(user), user.username, stringResult, {}, {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
    },
    isUserAvatar: true
  });
};
