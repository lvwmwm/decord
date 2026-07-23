// Module ID: 8586
// Function ID: 68184
// Name: getBadgeTooltip
// Dependencies: [5704, 1212, 5703, 2]
// Exports: getBadgeTooltip

// Module 8586 (getBadgeTooltip)
const result = require("BadgeCategory").fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export const getBadgeTooltip = function getBadgeTooltip(arg0, arg1) {
  if (arg1 === require(5704) /* isPremiumGuild */.GuildVisibility.PUBLIC) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.op2cJ6);
  } else if (arg1 === require(5704) /* isPremiumGuild */.GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t.YwZfbt);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.TME4LJ);
  }
  if (require(5703) /* BadgeCategory */.BadgeCategory.STAFF === arg0) {
    let obj = {};
    const intl14 = require(1212) /* getSystemLocale */.intl;
    obj.tooltipTitle = intl14.string(require(1212) /* getSystemLocale */.t.lMrv96);
    const intl15 = require(1212) /* getSystemLocale */.intl;
    obj.tooltipSubtitle = intl15.string(require(1212) /* getSystemLocale */.t.lMrv96);
    const intl16 = require(1212) /* getSystemLocale */.intl;
    obj.tooltipDescription = intl16.string(require(1212) /* getSystemLocale */.t.lMrv96);
    return obj;
  } else if (require(5703) /* BadgeCategory */.BadgeCategory.VERIFIED === arg0) {
    obj = {};
    const intl12 = require(1212) /* getSystemLocale */.intl;
    obj.tooltipTitle = intl12.string(require(1212) /* getSystemLocale */.t.K7iRig);
    const intl13 = require(1212) /* getSystemLocale */.intl;
    obj.tooltipSubtitle = intl13.string(require(1212) /* getSystemLocale */.t.iCehw9);
    obj.tooltipDescription = stringResult;
    return obj;
  } else if (require(5703) /* BadgeCategory */.BadgeCategory.PARTNERED === arg0) {
    const obj1 = {};
    const intl10 = require(1212) /* getSystemLocale */.intl;
    obj1.tooltipTitle = intl10.string(require(1212) /* getSystemLocale */.t.K7iRig);
    const intl11 = require(1212) /* getSystemLocale */.intl;
    obj1.tooltipSubtitle = intl11.string(require(1212) /* getSystemLocale */.t.hfYfEE);
    obj1.tooltipDescription = stringResult;
    return obj1;
  } else if (require(5703) /* BadgeCategory */.BadgeCategory.VERIFIED_AND_PARTNERED === arg0) {
    const obj2 = {};
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj2.tooltipTitle = intl8.string(require(1212) /* getSystemLocale */.t.K7iRig);
    const intl9 = require(1212) /* getSystemLocale */.intl;
    obj2.tooltipSubtitle = intl9.string(require(1212) /* getSystemLocale */.t["TX+iFC"]);
    obj2.tooltipDescription = stringResult;
    return obj2;
  } else if (require(5703) /* BadgeCategory */.BadgeCategory.COMMUNITY === arg0) {
    const obj3 = {};
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj3.tooltipTitle = intl7.string(require(1212) /* getSystemLocale */.t.K7iRig);
    obj3.tooltipDescription = stringResult;
    return obj3;
  } else if (require(5703) /* BadgeCategory */.BadgeCategory.DISCOVERABLE === arg0) {
    const obj4 = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj4.tooltipTitle = intl5.string(require(1212) /* getSystemLocale */.t.K7iRig);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj4.tooltipDescription = intl6.string(require(1212) /* getSystemLocale */.t.op2cJ6);
    return obj4;
  } else {
    obj = {};
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.tooltipTitle = intl4.string(require(1212) /* getSystemLocale */.t["iZRkC/"]);
    return obj;
  }
};
