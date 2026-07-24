// Module ID: 16210
// Function ID: 125688
// Name: showNotification
// Dependencies: [653, 14399, 1392, 1212, 16211, 4140, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 16210 (showNotification)
import { FriendsSections } from "ME";

function showNotification(id, arg1, onClick) {
  let obj = importDefault(14399);
  obj = { omitViewTracking: true, omitClickTracking: true, tag: id.id, onClick, isUserAvatar: true };
  obj.showNotification(importDefault(1392).getUserAvatarURL(id), id.username, arg1, {}, obj);
}
const result = require("getAvatarURL").fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = require(1212) /* getSystemLocale */.intl;
  showNotification(user, intl.string(require(1212) /* getSystemLocale */.t["t3+Af3"]), () => {
    outer1_1(outer1_2[4]).transitionToSection(outer1_3.PENDING, { explicit: true });
  });
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  const _require = user;
  const intl = _require(1212).intl;
  showNotification(user, intl.string(_require(1212).t.MYr3Ka), () => {
    let obj = outer1_1(outer1_2[5]);
    obj = { recipientIds: user.id };
    obj.openPrivateChannel(obj);
  });
};
