// Module ID: 15846
// Function ID: 15847
// Name: getFriendStatusCounts
// Dependencies: [4390, 3957, 676, 2]
// Exports: default

// Module 15846 (getFriendStatusCounts)
import sortActivity from "sortActivity";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { StatusTypes } from "ME";

const result = require("ME").fileFinishedImporting("modules/friends/getFriendStatusCounts.tsx");

export default function getFriendStatusCounts() {
  let num_friends_online = 0;
  let num_friends_idle = 0;
  let num_friends_dnd = 0;
  friendIDs = friendIDs.getFriendIDs();
  while (tmp2 !== undefined) {
    let tmp4 = status;
    status = status.getStatus(tmp3);
    let tmp6 = StatusTypes;
    if (StatusTypes.ONLINE === status) {
      let tmp9 = num_friends_online;
      num_friends_online = num_friends_online + 1;
    } else if (tmp6.IDLE === status) {
      let tmp8 = num_friends_idle;
      num_friends_idle = num_friends_idle + 1;
    } else if (tmp6.DND === status) {
      let tmp7 = num_friends_dnd;
      num_friends_dnd = num_friends_dnd + 1;
    }
    continue;
  }
  return { num_friends_online, num_friends_idle, num_friends_dnd };
};
