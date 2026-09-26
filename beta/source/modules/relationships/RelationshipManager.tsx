// Module ID: 17883
// Function ID: 17884
// Name: RelationshipManager
// Dependencies: [1074, 4639, 1115, 17884, 7395, 2]

// Module 17883 (RelationshipManager)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import shared from "shared" /* 4639 */;
import RelationshipUtilsAll from "RelationshipUtils" /* 17884 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;
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
