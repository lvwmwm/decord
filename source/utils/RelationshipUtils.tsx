// Module ID: 16396
// Function ID: 16397
// Name: showPendingNotification
// Dependencies: [676, 14563, 1416, 1236, 16397, 4265, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 16396 (showPendingNotification)
import { FriendsSections } from "ME";

const result = require("getAvatarURL").fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = require(1236) /* getSystemLocale */.intl;
  let obj = importDefault(14563);
  const stringResult = intl.string(require(1236) /* getSystemLocale */.t["t3+Af3"]);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      callback(table[4]).transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  };
  obj.showNotification(importDefault(1416).getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  const _require = user;
  const intl = _require(1236).intl;
  let obj = importDefault(14563);
  const stringResult = intl.string(_require(1236).t.MYr3Ka);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      let obj = outer1_1(outer1_2[5]);
      obj = { recipientIds: user.id };
      obj.openPrivateChannel(obj);
    },
    isUserAvatar: true
  };
  obj.showNotification(importDefault(1416).getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
