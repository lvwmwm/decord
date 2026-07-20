// Module ID: 6739
// Function ID: 52433
// Name: Feedback
// Dependencies: []
// Exports: generateFeedbackOptions, getMostImportantRaidResolutionType

// Module 6739 (Feedback)
let obj = { BUG: "BUG", ALLOWED: "ALLOWED", MENTION_RAID_REMOVE_RESTRICTION: "MENTION_RAID_REMOVE_RESTRICTION" };
obj = { LEGITIMATE_ACTIVITY: "LEGITIMATE_ACTIVITY", LEGITIMATE_ACCOUNTS: "LEGITIMATE_ACCOUNTS", LEGITIMATE_DMS: "LEGITIMATE_DMS", DM_SPAM: "DM_SPAM", JOIN_RAID: "JOIN_RAID", OTHER: "OTHER" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_automod/AutomodFeedback.tsx");

export const Feedback = obj;
export const generateFeedbackOptions = function generateFeedbackOptions() {
  let obj = {};
  const intl = require(dependencyMap[0]).intl;
  obj.name = intl.string(require(dependencyMap[0]).t.+MbOX4);
  obj.value = obj.BUG;
  const items = [obj, ];
  obj = {};
  const intl2 = require(dependencyMap[0]).intl;
  obj.name = intl2.string(require(dependencyMap[0]).t.CRsCRC);
  obj.value = obj.ALLOWED;
  items[1] = obj;
  return items;
};
export const RaidAlertType = { JOIN_RAID: "JOIN_RAID", MENTION_RAID: "MENTION_RAID" };
export const RaidResolutionType = obj;
export const getMostImportantRaidResolutionType = function getMostImportantRaidResolutionType(closure_3) {
  if (closure_3.includes(obj.LEGITIMATE_ACTIVITY)) {
    let DM_SPAM = obj.LEGITIMATE_ACTIVITY;
  } else if (closure_3.includes(obj.DM_SPAM)) {
    DM_SPAM = obj.DM_SPAM;
  } else {
    DM_SPAM = closure_3.includes(obj.JOIN_RAID) ? tmp3.JOIN_RAID : tmp3.OTHER;
  }
  return DM_SPAM;
};
export const RaidLockdownFeedbackType = { DM_SPAM: "DM_SPAM", MENTION_SPAM: "MENTION_SPAM", CHANNEL_SPAM: "CHANNEL_SPAM", SUS_NEW_MEMBERS: "SUS_NEW_MEMBERS", CHANGING_SETTINGS: "CHANGING_SETTINGS", OTHER: "OTHER" };
