// Module ID: 10027
// Function ID: 10028
// Name: GuildBadgeConstants
// Dependencies: [9028, 1115, 9027, 2]
// Exports: getBadgeTooltip

// Module 10027 (GuildBadgeConstants)
import BadgeCategory from "BadgeCategory" /* 9027 */;
import GuildTraits from "GuildTraits" /* 9028 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export const getBadgeTooltip = function getBadgeTooltip(badgeCategory, visibility) {
  if (visibility === GuildTraits.GuildVisibility.PUBLIC) {
    const intl3 = tmp(1115).intl;
    let stringResult = intl3.string(tmp(1115).t.op2cJ6);
  } else if (visibility === tmp(9028).GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = tmp(1115).intl;
    stringResult = intl2.string(tmp(1115).t.YwZfbt);
  } else {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.TME4LJ);
  }
  if (BadgeCategory.BadgeCategory.STAFF === badgeCategory) {
    const obj2 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl14 = tmp(1115).intl;
    obj2.tooltipTitle = intl14.string(tmp(1115).t.lMrv96);
    const intl15 = tmp(1115).intl;
    obj2.tooltipSubtitle = intl15.string(tmp(1115).t.lMrv96);
    const intl16 = tmp(1115).intl;
    obj2.tooltipDescription = intl16.string(tmp(1115).t.lMrv96);
    return obj2;
  } else if (tmp(9027).BadgeCategory.VERIFIED === badgeCategory) {
    const obj3 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl12 = tmp(1115).intl;
    obj3.tooltipTitle = intl12.string(tmp(1115).t.K7iRig);
    const intl13 = tmp(1115).intl;
    obj3.tooltipSubtitle = intl13.string(tmp(1115).t.iCehw9);
    obj3.tooltipDescription = stringResult;
    return obj3;
  } else if (tmp(9027).BadgeCategory.PARTNERED === badgeCategory) {
    const obj4 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl10 = tmp(1115).intl;
    obj4.tooltipTitle = intl10.string(tmp(1115).t.K7iRig);
    const intl11 = tmp(1115).intl;
    obj4.tooltipSubtitle = intl11.string(tmp(1115).t.hfYfEE);
    obj4.tooltipDescription = stringResult;
    return obj4;
  } else if (tmp(9027).BadgeCategory.VERIFIED_AND_PARTNERED === badgeCategory) {
    const obj5 = { tooltipTitle: null, tooltipSubtitle: null, tooltipDescription: null };
    const intl8 = tmp(1115).intl;
    obj5.tooltipTitle = intl8.string(tmp(1115).t.K7iRig);
    const intl9 = tmp(1115).intl;
    obj5.tooltipSubtitle = intl9.string(tmp(1115).t["TX+iFC"]);
    obj5.tooltipDescription = stringResult;
    return obj5;
  } else if (tmp(9027).BadgeCategory.COMMUNITY === badgeCategory) {
    const obj6 = { tooltipTitle: null, tooltipDescription: null };
    const intl7 = tmp(1115).intl;
    obj6.tooltipTitle = intl7.string(tmp(1115).t.K7iRig);
    obj6.tooltipDescription = stringResult;
    return obj6;
  } else if (tmp(9027).BadgeCategory.DISCOVERABLE === badgeCategory) {
    const obj7 = { tooltipTitle: null, tooltipDescription: null };
    const intl5 = tmp(1115).intl;
    obj7.tooltipTitle = intl5.string(tmp(1115).t.K7iRig);
    const intl6 = tmp(1115).intl;
    obj7.tooltipDescription = intl6.string(tmp(1115).t.op2cJ6);
    return obj7;
  } else {
    const obj = { tooltipTitle: null };
    const intl4 = tmp(1115).intl;
    obj.tooltipTitle = intl4.string(tmp(1115).t["iZRkC/"]);
    return obj;
  }
};
