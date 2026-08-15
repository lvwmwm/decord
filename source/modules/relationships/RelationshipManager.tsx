// Module ID: 16691
// Function ID: 16692
// Name: handleRelationshipAdd
// Dependencies: [676, 1363, 1236, 16692, 5038, 2]

// Module 16691 (handleRelationshipAdd)
import { RelationshipTypes } from "ME";
import "initialize";

function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  if (!tmp) {
    const AccessibilityAnnouncer = require(1363) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { username: null };
    obj[0] = relationship.user.username;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(require(1236) /* getSystemLocale */.t.zH0kC7, obj));
    const result = importAll(16692).showPendingNotification(relationship.user);
    const obj2 = importAll(16692);
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = require(1363) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
  const intl = require(1236) /* getSystemLocale */.intl;
  AccessibilityAnnouncer.announce(intl.formatToPlainString(require(1236) /* getSystemLocale */.t["/+7xky"], { username: user.username }));
  const result = importAll(16692).showAcceptedNotification(user);
}
let prototype = function RelationshipManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { RELATIONSHIP_ADD: handleRelationshipAdd, FRIEND_REQUEST_ACCEPTED: handleFriendRequestAccepted };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("getSystemLocale").fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default prototype;
