// Module ID: 12842
// Function ID: 98182
// Name: COMMUNITY_PORTAL_SERVER_SAFETY_PAGE
// Dependencies: []
// Exports: getReportRaidTypeLabel

// Module 12842 (COMMUNITY_PORTAL_SERVER_SAFETY_PAGE)
const obj = { DM_SPAM: "DM_SPAM", MESSAGE_SPAM: "MESSAGE_SPAM", MENTION_SPAM: "MENTION_SPAM", SUSPICIOUS_USERS: "SUSPICIOUS_USERS", SETTINGS_SPAM: "SETTINGS_SPAM" };
const items = [, , , , ];
({ MESSAGE_SPAM: arr[0], DM_SPAM: arr[1], MENTION_SPAM: arr[2], SUSPICIOUS_USERS: arr[3], SETTINGS_SPAM: arr[4] } = obj);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_antiraid/GuildReportRaidModalConstants.tsx");

export const COMMUNITY_PORTAL_SERVER_SAFETY_PAGE = "https://discord.com/community/securing-your-server";
export const ReportRaidTypes = obj;
export const REPORT_RAID_OPTIONS = items;
export const getReportRaidTypeLabel = function getReportRaidTypeLabel(arg0) {
  if (obj.DM_SPAM === arg0) {
    const intl5 = require(dependencyMap[0]).intl;
    return intl5.string(require(dependencyMap[0]).t.9CYNmS);
  } else if (obj.MENTION_SPAM === arg0) {
    const intl4 = require(dependencyMap[0]).intl;
    return intl4.string(require(dependencyMap[0]).t.hR/IdO);
  } else if (obj.MESSAGE_SPAM === arg0) {
    const intl3 = require(dependencyMap[0]).intl;
    return intl3.string(require(dependencyMap[0]).t.fwloj2);
  } else if (obj.SETTINGS_SPAM === arg0) {
    const intl2 = require(dependencyMap[0]).intl;
    return intl2.string(require(dependencyMap[0]).t.ETFVFw);
  } else if (obj.SUSPICIOUS_USERS === arg0) {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.lKXu+n);
  } else {
    return null;
  }
};
