// Module ID: 18630
// Function ID: 18631
// Name: RelationshipManager
// Dependencies: [1087, 5065, 1128, 18631, 7085, 2]

// Module 18630 (RelationshipManager)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import shared from "shared" /* 5065 */;
import RelationshipUtilsAll from "RelationshipUtils" /* 18631 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
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
