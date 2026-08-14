// Module ID: 15776
// Function ID: 15777
// Name: SUBMITTED
// Dependencies: [4168, 2]

// Module 15776 (SUBMITTED)
const obj = { ALL_MEMBERS: "ALL_MEMBERS" };
const SUBMITTED = require("MAX_RESULTS_PER_PAGE").GuildJoinRequestApplicationStatuses.SUBMITTED;
obj.PENDING = SUBMITTED;
obj[SUBMITTED] = "PENDING";
const REJECTED = require("MAX_RESULTS_PER_PAGE").GuildJoinRequestApplicationStatuses.REJECTED;
obj.REJECTED = REJECTED;
obj[REJECTED] = "REJECTED";
const APPROVED = require("MAX_RESULTS_PER_PAGE").GuildJoinRequestApplicationStatuses.APPROVED;
obj.APPROVED = APPROVED;
obj[APPROVED] = "APPROVED";
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx");

export const MemberSafetyPageTab = obj;
