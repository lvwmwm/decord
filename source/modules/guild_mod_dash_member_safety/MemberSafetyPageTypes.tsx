// Module ID: 15895
// Function ID: 15896
// Name: SUBMITTED
// Dependencies: [4204, 2]

// Module 15895 (SUBMITTED)
import set from "set" /* 2 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4204 */;

const obj = { ALL_MEMBERS: "ALL_MEMBERS" };
const SUBMITTED = MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED;
obj.PENDING = SUBMITTED;
obj[SUBMITTED] = "PENDING";
const REJECTED = MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.REJECTED;
obj.REJECTED = REJECTED;
obj[REJECTED] = "REJECTED";
const APPROVED = MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.APPROVED;
obj.APPROVED = APPROVED;
obj[APPROVED] = "APPROVED";
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx");

export const MemberSafetyPageTab = obj;
