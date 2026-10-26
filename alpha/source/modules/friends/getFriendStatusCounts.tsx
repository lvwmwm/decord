// Module ID: 18206
// Function ID: 18207
// Name: getFriendStatusCounts
// Dependencies: [5712, 4913, 1087, 2]
// Exports: default

// Module 18206 (getFriendStatusCounts)
import Constants from "Constants" /* 1087 */;
import PresenceStore from "PresenceStore" /* 5712 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import size from "module_2" /* 2 */;

const StatusTypes = Constants.StatusTypes;
const result = size.fileFinishedImporting("modules/friends/getFriendStatusCounts.tsx");

export default function getFriendStatusCounts() {
  let num_friends_online = 0;
  let num_friends_idle = 0;
  let num_friends_dnd = 0;
  const friendIDs = RelationshipStore.getFriendIDs();
  const tmp2 = friendIDs[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let status = PresenceStore.getStatus(tmp3);
    let tmp6 = StatusTypes;
    if (StatusTypes.ONLINE === status) {
      num_friends_online = num_friends_online + 1;
    } else if (tmp6.IDLE === status) {
      num_friends_idle = num_friends_idle + 1;
    } else if (tmp6.DND === status) {
      num_friends_dnd = num_friends_dnd + 1;
    }
    continue;
  }
  return { num_friends_online, num_friends_idle, num_friends_dnd };
};
