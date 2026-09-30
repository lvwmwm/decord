// Module ID: 16799
// Function ID: 16800
// Name: getFriendStatusCounts
// Dependencies: [4906, 4509, 1074, 2]
// Exports: default

// Module 16799 (getFriendStatusCounts)
import PresenceStore from "PresenceStore" /* 4906 */;
import RelationshipStore from "RelationshipStore" /* 4509 */;

const StatusTypes = fn(1074).StatusTypes;
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
