// Module ID: 16209
// Function ID: 125680
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 653, 3976, 1212, 16210, 5078, 2]

// Module 16209 (_isNativeReflectConstruct)
import getSystemLocale from "getSystemLocale";
import AccessibilityAnnouncer from "AccessibilityAnnouncer";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { RelationshipTypes } from "ME";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  if (!tmp) {
    const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { username: relationship.user.username };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(require(1212) /* getSystemLocale */.t.zH0kC7, obj));
    const result = importAll(16210).showPendingNotification(relationship.user);
    const obj2 = importAll(16210);
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
  const intl = require(1212) /* getSystemLocale */.intl;
  AccessibilityAnnouncer.announce(intl.formatToPlainString(require(1212) /* getSystemLocale */.t["/+7xky"], { username: user.username }));
  const result = importAll(16210).showAcceptedNotification(user);
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default tmp2;
