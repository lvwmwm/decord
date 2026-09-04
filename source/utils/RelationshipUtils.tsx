// Module ID: 17394
// Function ID: 17395
// Name: showPendingNotification
// Dependencies: [673, 15439, 1431, 1233, 17395, 4494, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 17394 (showPendingNotification)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getAvatarURLDefault from "getAvatarURL" /* 1431 */;
import _modDef15439 from "module_15439" /* 15439 */;

const FriendsSections = ME.FriendsSections;
const result = set.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = getSystemLocale.intl;
  let obj = _modDef15439;
  const stringResult = intl.string(getSystemLocale.t["t3+Af3"]);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      callback(table[4]).transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  };
  obj.showNotification(getAvatarURLDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  const _require = user;
  const intl = _require(1233).intl;
  let obj = _modDef15439;
  const stringResult = intl.string(_require(1233).t.MYr3Ka);
  obj = {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      let obj = closure_1_1(closure_1_2[5]);
      obj = { recipientIds: user.id };
      obj.openPrivateChannel(obj);
    },
    isUserAvatar: true
  };
  obj.showNotification(getAvatarURLDefault.getUserAvatarURL(user), user.username, stringResult, {}, obj);
};
