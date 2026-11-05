// Module ID: 19139
// Function ID: 19140
// Name: getFriendStatusCounts
// Dependencies: [5898, 5085, 1072, 2]
// Exports: default

// Module 19139 (getFriendStatusCounts)
import Constants from "Constants" /* 1072 */;
import PresenceStore from "PresenceStore" /* 5898 */;
import RelationshipStore from "RelationshipStore" /* 5085 */;
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
