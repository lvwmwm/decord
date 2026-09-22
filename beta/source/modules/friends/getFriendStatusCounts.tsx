// Module ID: 17230
// Function ID: 17231
// Name: getFriendStatusCounts
// Dependencies: [4798, 4409, 1078, 2]
// Exports: default

// Module 17230 (getFriendStatusCounts)
import PresenceStore from "PresenceStore" /* 4798 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;

const StatusTypes = fn(1078).StatusTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/friends/getFriendStatusCounts.tsx");

export default function getFriendStatusCounts() {
  let num_friends_online = 0;
  let num_friends_idle = 0;
  let num_friends_dnd = 0;
  const friendIDs = RelationshipStore.getFriendIDs();
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
