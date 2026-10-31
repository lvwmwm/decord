// Module ID: 9303
// Function ID: 9304
// Name: GuildBadgeConstants
// Dependencies: [9304, 1113, 9305, 2]
// Exports: getBadgeTooltip

// Module 9303 (GuildBadgeConstants)
import intl16 from "intl" /* 1113 */;
import GuildTraits from "GuildTraits" /* 9304 */;
import BadgeCategory from "BadgeCategory" /* 9305 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export function getBadgeTooltip(badgeCategory, visibility) {
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let stringResult;
  let stringResult1;
  if (visibility === GuildTraits.GuildVisibility.PUBLIC) {
    const intl3 = tmp(1113).intl;
    stringResult = intl3.string(tmp(1113).t.op2cJ6);
  } else if (visibility === GuildTraits.GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = tmp(1113).intl;
    stringResult = intl2.string(tmp(1113).t.YwZfbt);
  } else {
    const intl = tmp(1113).intl;
    stringResult = intl.string(tmp(1113).t.TME4LJ);
  }
  if (visibility === GuildTraits.GuildVisibility.PUBLIC) {
    const intl5 = tmp(1113).intl;
    stringResult1 = intl5.string(tmp(1113).t.SiZQ0N);
  } else {
    const intl4 = tmp(1113).intl;
    stringResult1 = intl4.string(tmp(1113).t.K7iRig);
  }
  if (BadgeCategory.BadgeCategory.STAFF === badgeCategory) {
    const obj2 = { tooltipTitle: intl13.string(intl16.t.lMrv96), tooltipSubtitle: intl14.string(intl16.t.lMrv96), tooltipDescription: intl15.string(intl16.t.lMrv96) };
    intl13 = tmp(1113).intl;
    intl14 = tmp(1113).intl;
    intl15 = tmp(1113).intl;
    return obj2;
  } else if (BadgeCategory.BadgeCategory.VERIFIED === badgeCategory) {
    const obj3 = { tooltipTitle: stringResult1, tooltipSubtitle: intl12.string(intl16.t.iCehw9), tooltipDescription: stringResult };
    intl12 = tmp(1113).intl;
    return obj3;
  } else if (BadgeCategory.BadgeCategory.PARTNERED === badgeCategory) {
    const obj4 = { tooltipTitle: stringResult1, tooltipSubtitle: intl11.string(intl16.t.hfYfEE), tooltipDescription: stringResult };
    intl11 = tmp(1113).intl;
    return obj4;
  } else if (BadgeCategory.BadgeCategory.VERIFIED_AND_PARTNERED === badgeCategory) {
    const obj5 = { tooltipTitle: stringResult1, tooltipSubtitle: intl10.string(intl16.t["TX+iFC"]), tooltipDescription: stringResult };
    intl10 = tmp(1113).intl;
    return obj5;
  } else if (BadgeCategory.BadgeCategory.COMMUNITY === badgeCategory) {
    const obj6 = { tooltipTitle: intl9.string(intl16.t.K7iRig), tooltipDescription: stringResult };
    intl9 = tmp(1113).intl;
    return obj6;
  } else if (BadgeCategory.BadgeCategory.DISCOVERABLE === badgeCategory) {
    const obj7 = { tooltipTitle: intl7.string(intl16.t.SiZQ0N), tooltipDescription: intl8.string(intl16.t.op2cJ6) };
    intl7 = tmp(1113).intl;
    intl8 = tmp(1113).intl;
    return obj7;
  } else {
    const obj = { tooltipTitle: intl6.string(intl16.t["iZRkC/"]) };
    intl6 = tmp(1113).intl;
    return obj;
  }
}
