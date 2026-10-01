// Module ID: 17244
// Function ID: 17245
// Name: RelationshipManager
// Dependencies: [1074, 4685, 1115, 17245, 6539, 2]

// Module 17244 (RelationshipManager)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import RelationshipUtilsAll from "RelationshipUtils" /* 17245 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
import size from "module_2" /* 2 */;

function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  const tmp = relationship.type !== RelationshipTypes.PENDING_INCOMING || relationship.userIgnored;
  if (!tmp) {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl2.intl;
    const obj = { username: relationship.user.username };
    announce(intl.formatToPlainString(intl2.t.zH0kC7, obj));
    const obj2 = RelationshipUtilsAll;
    const result = obj2.showPendingNotification(relationship.user);
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  const announce = AccessibilityAnnouncer.announce;
  const intl = intl2.intl;
  const obj = { username: user.username };
  announce(intl.formatToPlainString(intl2.t["/+7xky"], obj));
  const obj2 = RelationshipUtilsAll;
  const result = obj2.showAcceptedNotification(user);
}
const RelationshipTypes = Constants.RelationshipTypes;
class RelationshipManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { RELATIONSHIP_ADD: handleRelationshipAdd, FRIEND_REQUEST_ACCEPTED: handleFriendRequestAccepted };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const relationshipManager = new RelationshipManager();
let result = size.fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default relationshipManager;
