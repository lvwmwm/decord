// Module ID: 18175
// Function ID: 18176
// Name: RelationshipManager
// Dependencies: [1085, 4969, 1126, 18176, 6807, 2]

// Module 18175 (RelationshipManager)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import shared from "shared" /* 4969 */;
import RelationshipUtilsAll from "RelationshipUtils" /* 18176 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
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
