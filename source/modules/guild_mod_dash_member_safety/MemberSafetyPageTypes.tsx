// Module ID: 15344
// Function ID: 116961
// Name: SUBMITTED
// Dependencies: [3950, 2]

// Module 15344 (SUBMITTED)
const obj = { ALL_MEMBERS: "ALL_MEMBERS" };
const SUBMITTED = require("isTermsFormField").GuildJoinRequestApplicationStatuses.SUBMITTED;
obj.PENDING = SUBMITTED;
obj[SUBMITTED] = "PENDING";
const REJECTED = require("isTermsFormField").GuildJoinRequestApplicationStatuses.REJECTED;
obj.REJECTED = REJECTED;
obj[REJECTED] = "REJECTED";
const APPROVED = require("isTermsFormField").GuildJoinRequestApplicationStatuses.APPROVED;
obj.APPROVED = APPROVED;
obj[APPROVED] = "APPROVED";
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx");

export const MemberSafetyPageTab = obj;
