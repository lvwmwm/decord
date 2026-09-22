// Module ID: 17882
// Function ID: 17883
// Name: RelationshipManager
// Dependencies: [1078, 4610, 1119, 17883, 7365, 2]

// Module 17882 (RelationshipManager)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import shared from "shared" /* 4610 */;
import RelationshipUtilsAll from "RelationshipUtils" /* 17883 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;
import size from "module_2" /* 2 */;

function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  if (!tmp) {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    const obj = { username: relationship.user.username };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.zH0kC7, obj));
    const result = RelationshipUtilsAll.showPendingNotification(relationship.user);
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  const intl = util.intl;
  AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t["/+7xky"], { username: user.username }));
  const result = RelationshipUtilsAll.showAcceptedNotification(user);
}
const RelationshipTypes = Constants.RelationshipTypes;
const prototype = function RelationshipManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { RELATIONSHIP_ADD: handleRelationshipAdd, FRIEND_REQUEST_ACCEPTED: handleFriendRequestAccepted };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default prototype1;
