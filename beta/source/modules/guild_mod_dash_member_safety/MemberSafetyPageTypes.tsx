// Module ID: 16922
// Function ID: 16923
// Name: MemberSafetyPageTypes
// Dependencies: [4583, 2]

// Module 16922 (MemberSafetyPageTypes)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4583 */;
import size from "module_2" /* 2 */;

const obj = { ALL_MEMBERS: "ALL_MEMBERS" };
const SUBMITTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
obj.PENDING = SUBMITTED;
obj[SUBMITTED] = "PENDING";
const REJECTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
obj.REJECTED = REJECTED;
obj[REJECTED] = "REJECTED";
const APPROVED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED;
obj.APPROVED = APPROVED;
obj[APPROVED] = "APPROVED";
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx");

export const MemberSafetyPageTab = obj;
