// Module ID: 17236
// Function ID: 17237
// Name: getFriendStatusCounts
// Dependencies: [5106, 4717, 1085, 2]
// Exports: default

// Module 17236 (getFriendStatusCounts)
import Constants from "Constants" /* 1085 */;
import PresenceStore from "PresenceStore" /* 5106 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
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
