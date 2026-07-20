// Module ID: 8574
// Function ID: 68109
// Name: getBadgeTooltip
// Dependencies: []
// Exports: getBadgeTooltip

// Module 8574 (getBadgeTooltip)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_badge/GuildBadgeConstants.tsx");

export const getBadgeTooltip = function getBadgeTooltip(arg0, arg1) {
  if (arg1 === require(dependencyMap[0]).GuildVisibility.PUBLIC) {
    const intl3 = require(dependencyMap[1]).intl;
    let stringResult = intl3.string(require(dependencyMap[1]).t.op2cJ6);
  } else if (arg1 === require(dependencyMap[0]).GuildVisibility.APPLY_TO_JOIN) {
    const intl2 = require(dependencyMap[1]).intl;
    stringResult = intl2.string(require(dependencyMap[1]).t.YwZfbt);
  } else {
    const intl = require(dependencyMap[1]).intl;
    stringResult = intl.string(require(dependencyMap[1]).t.TME4LJ);
  }
  if (require(dependencyMap[2]).BadgeCategory.STAFF === arg0) {
    let obj = {};
    const intl14 = require(dependencyMap[1]).intl;
    obj.tooltipTitle = intl14.string(require(dependencyMap[1]).t.lMrv96);
    const intl15 = require(dependencyMap[1]).intl;
    obj.tooltipSubtitle = intl15.string(require(dependencyMap[1]).t.lMrv96);
    const intl16 = require(dependencyMap[1]).intl;
    obj.tooltipDescription = intl16.string(require(dependencyMap[1]).t.lMrv96);
    return obj;
  } else if (require(dependencyMap[2]).BadgeCategory.VERIFIED === arg0) {
    obj = {};
    const intl12 = require(dependencyMap[1]).intl;
    obj.tooltipTitle = intl12.string(require(dependencyMap[1]).t.K7iRig);
    const intl13 = require(dependencyMap[1]).intl;
    obj.tooltipSubtitle = intl13.string(require(dependencyMap[1]).t.iCehw9);
    obj.tooltipDescription = stringResult;
    return obj;
  } else if (require(dependencyMap[2]).BadgeCategory.PARTNERED === arg0) {
    const obj1 = {};
    const intl10 = require(dependencyMap[1]).intl;
    obj1.tooltipTitle = intl10.string(require(dependencyMap[1]).t.K7iRig);
    const intl11 = require(dependencyMap[1]).intl;
    obj1.tooltipSubtitle = intl11.string(require(dependencyMap[1]).t.hfYfEE);
    obj1.tooltipDescription = stringResult;
    return obj1;
  } else if (require(dependencyMap[2]).BadgeCategory.VERIFIED_AND_PARTNERED === arg0) {
    const obj2 = {};
    const intl8 = require(dependencyMap[1]).intl;
    obj2.tooltipTitle = intl8.string(require(dependencyMap[1]).t.K7iRig);
    const intl9 = require(dependencyMap[1]).intl;
    obj2.tooltipSubtitle = intl9.string(require(dependencyMap[1]).t.TX+iFC);
    obj2.tooltipDescription = stringResult;
    return obj2;
  } else if (require(dependencyMap[2]).BadgeCategory.COMMUNITY === arg0) {
    const obj3 = {};
    const intl7 = require(dependencyMap[1]).intl;
    obj3.tooltipTitle = intl7.string(require(dependencyMap[1]).t.K7iRig);
    obj3.tooltipDescription = stringResult;
    return obj3;
  } else if (require(dependencyMap[2]).BadgeCategory.DISCOVERABLE === arg0) {
    const obj4 = {};
    const intl5 = require(dependencyMap[1]).intl;
    obj4.tooltipTitle = intl5.string(require(dependencyMap[1]).t.K7iRig);
    const intl6 = require(dependencyMap[1]).intl;
    obj4.tooltipDescription = intl6.string(require(dependencyMap[1]).t.op2cJ6);
    return obj4;
  } else {
    obj = {};
    const intl4 = require(dependencyMap[1]).intl;
    obj.tooltipTitle = intl4.string(require(dependencyMap[1]).t.iZRkC/);
    return obj;
  }
};
