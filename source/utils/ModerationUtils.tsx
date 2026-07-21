// Module ID: 13619
// Function ID: 103195
// Name: mapColorToHighlightColor
// Dependencies: []
// Exports: generateContentFilterHighlightedOptions, generateContentFilterOptions, generateDmSpamOptions, generateExplicitImageOptions, generateVerificationLevelOptions, mapOptionToHighlightedRowOptions

// Module 13619 (mapColorToHighlightColor)
function mapColorToHighlightColor(arg0) {
  if (obj.unsafe_getRawColor("PRIMARY_400") === arg0) {
    return require(dependencyMap[3]).HighlightColors.ACCENT;
  } else {
    if (obj3.unsafe_getRawColor("GREEN_360") === arg0) {
      return require(dependencyMap[3]).HighlightColors.GREEN;
    } else {
      if (obj4.unsafe_getRawColor("YELLOW_360") === arg0) {
        return require(dependencyMap[3]).HighlightColors.YELLOW;
      } else {
        if (obj5.unsafe_getRawColor("ORANGE_345") === arg0) {
          return require(dependencyMap[3]).HighlightColors.ORANGE;
        } else {
          if (obj2.unsafe_getRawColor("RED_400") === arg0) {
            return require(dependencyMap[3]).HighlightColors.RED;
          } else {
            return require(dependencyMap[3]).HighlightColors.NONE;
          }
          const obj2 = require(dependencyMap[2]);
        }
        const obj5 = require(dependencyMap[2]);
      }
      const obj4 = require(dependencyMap[2]);
    }
    const obj3 = require(dependencyMap[2]);
  }
  const obj = require(dependencyMap[2]);
}
const _module = require(dependencyMap[0]);
({ VerificationLevels: closure_2, VerificationCriteria: closure_3, GuildExplicitContentFilterTypes: closure_4 } = _module);
let closure_5 = require(dependencyMap[1]).ExplicitContentFilterTypes;
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("utils/ModerationUtils.tsx");

export { mapColorToHighlightColor };
export const mapOptionToHighlightedRowOptions = function mapOptionToHighlightedRowOptions(arr) {
  return arr.map((name) => ({ title: name.name, description: name.desc, highlightColor: callback(name.color), value: name.value, disabled: name.disabled }));
};
export const generateVerificationLevelOptions = function generateVerificationLevelOptions(features) {
  let flag = features;
  let flag2 = arg1;
  if (features === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = {};
  const intl = require(dependencyMap[4]).intl;
  obj.name = intl.string(require(dependencyMap[4]).t.PEzffq);
  const intl2 = require(dependencyMap[4]).intl;
  const string = intl2.string;
  const t = require(dependencyMap[4]).t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t.nDQy0p);
  }
  obj.desc = stringResult;
  obj.value = constants.NONE;
  obj.disabled = flag;
  const items = [obj, , , , ];
  obj = {};
  const intl3 = require(dependencyMap[4]).intl;
  obj.name = intl3.string(require(dependencyMap[4]).t.SsCK8I);
  const intl4 = require(dependencyMap[4]).intl;
  obj.desc = intl4.string(require(dependencyMap[4]).t.8GCOX6);
  obj.value = constants.LOW;
  let unsafe_getRawColorResult;
  if (!flag2) {
    let obj2 = require(dependencyMap[2]);
    unsafe_getRawColorResult = obj2.unsafe_getRawColor("GREEN_360");
  }
  obj.color = unsafe_getRawColorResult;
  items[1] = obj;
  obj = {};
  const intl5 = require(dependencyMap[4]).intl;
  obj.name = intl5.string(require(dependencyMap[4]).t.WwNoR4);
  const intl6 = require(dependencyMap[4]).intl;
  obj.desc = intl6.formatToPlainString(require(dependencyMap[4]).t.VS14ga, { min: constants2.ACCOUNT_AGE });
  obj.value = constants.MEDIUM;
  let unsafe_getRawColorResult1;
  if (!flag2) {
    unsafe_getRawColorResult1 = require(dependencyMap[2]).unsafe_getRawColor("YELLOW_360");
    const obj6 = require(dependencyMap[2]);
  }
  obj.color = unsafe_getRawColorResult1;
  items[2] = obj;
  obj2 = {};
  const intl7 = require(dependencyMap[4]).intl;
  obj2.name = intl7.string(require(dependencyMap[4]).t.I2jMUF);
  const intl8 = require(dependencyMap[4]).intl;
  obj2.desc = intl8.formatToPlainString(require(dependencyMap[4]).t.r+b3I4, { min: constants2.MEMBER_AGE });
  obj2.value = constants.HIGH;
  let unsafe_getRawColorResult2;
  if (!flag2) {
    unsafe_getRawColorResult2 = require(dependencyMap[2]).unsafe_getRawColor("ORANGE_345");
    const obj9 = require(dependencyMap[2]);
  }
  obj2.color = unsafe_getRawColorResult2;
  items[3] = obj2;
  const obj4 = {};
  const intl9 = require(dependencyMap[4]).intl;
  obj4.name = intl9.string(require(dependencyMap[4]).t.cJY8w9);
  const intl10 = require(dependencyMap[4]).intl;
  obj4.desc = intl10.string(require(dependencyMap[4]).t.PWaKme);
  obj4.value = constants.VERY_HIGH;
  let unsafe_getRawColorResult3;
  if (!flag2) {
    unsafe_getRawColorResult3 = require(dependencyMap[2]).unsafe_getRawColor("RED_400");
    const obj11 = require(dependencyMap[2]);
  }
  obj4.color = unsafe_getRawColorResult3;
  items[4] = obj4;
  return items;
};
export const generateContentFilterHighlightedOptions = function generateContentFilterHighlightedOptions() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  const intl = require(dependencyMap[4]).intl;
  obj.name = intl.string(require(dependencyMap[4]).t.iHuPE6);
  const intl2 = require(dependencyMap[4]).intl;
  obj.desc = intl2.string(require(dependencyMap[4]).t.Z+yUWF);
  obj.value = constants3.ALL_MEMBERS;
  obj.color = require(dependencyMap[2]).unsafe_getRawColor("RED_400");
  const items = [obj, , ];
  obj = {};
  const intl3 = require(dependencyMap[4]).intl;
  obj.name = intl3.string(require(dependencyMap[4]).t.ynfFaI);
  const intl4 = require(dependencyMap[4]).intl;
  const string = intl4.string;
  const t = require(dependencyMap[4]).t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t.3fRIN4);
  }
  obj.desc = stringResult;
  obj.value = constants3.MEMBERS_WITHOUT_ROLES;
  obj.disabled = flag;
  const obj2 = require(dependencyMap[2]);
  obj.color = require(dependencyMap[2]).unsafe_getRawColor("YELLOW_360");
  items[1] = obj;
  obj = {};
  const intl5 = require(dependencyMap[4]).intl;
  obj.name = intl5.string(require(dependencyMap[4]).t.VbSyAx);
  const intl6 = require(dependencyMap[4]).intl;
  const string2 = intl6.string;
  const t2 = require(dependencyMap[4]).t;
  if (flag) {
    let string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  obj.desc = string2Result;
  obj.value = constants3.DISABLED;
  obj.disabled = flag;
  const obj4 = require(dependencyMap[2]);
  obj.color = require(dependencyMap[2]).unsafe_getRawColor("PRIMARY_400");
  items[2] = obj;
  return items;
};
export const generateContentFilterOptions = function generateContentFilterOptions(features) {
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  let obj = {};
  const intl = require(dependencyMap[4]).intl;
  obj.name = intl.string(require(dependencyMap[4]).t.iHuPE6);
  const intl2 = require(dependencyMap[4]).intl;
  obj.desc = intl2.string(require(dependencyMap[4]).t.Z+yUWF);
  obj.value = constants3.ALL_MEMBERS;
  const items = [obj, , ];
  obj = {};
  const intl3 = require(dependencyMap[4]).intl;
  obj.name = intl3.string(require(dependencyMap[4]).t.ynfFaI);
  const intl4 = require(dependencyMap[4]).intl;
  const string = intl4.string;
  const t = require(dependencyMap[4]).t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t.3fRIN4);
  }
  obj.desc = stringResult;
  obj.value = constants3.MEMBERS_WITHOUT_ROLES;
  obj.disabled = flag;
  items[1] = obj;
  obj = {};
  const intl5 = require(dependencyMap[4]).intl;
  obj.name = intl5.string(require(dependencyMap[4]).t.VbSyAx);
  const intl6 = require(dependencyMap[4]).intl;
  const string2 = intl6.string;
  const t2 = require(dependencyMap[4]).t;
  if (flag) {
    let string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  obj.desc = string2Result;
  obj.value = constants3.DISABLED;
  obj.disabled = flag;
  items[2] = obj;
  return items;
};
export const generateDmSpamOptions = function generateDmSpamOptions() {
  let obj = {};
  const intl = require(dependencyMap[4]).intl;
  obj.name = intl.string(require(dependencyMap[4]).t.4IaoCI);
  const intl2 = require(dependencyMap[4]).intl;
  obj.desc = intl2.string(require(dependencyMap[4]).t.TgipjE);
  obj.value = require(dependencyMap[5]).DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  const items = [obj, , ];
  obj = {};
  const intl3 = require(dependencyMap[4]).intl;
  obj.name = intl3.string(require(dependencyMap[4]).t.6NnX6F);
  const intl4 = require(dependencyMap[4]).intl;
  obj.desc = intl4.string(require(dependencyMap[4]).t.+dw1qu);
  obj.value = require(dependencyMap[5]).DmSpamFilterV2.NON_FRIENDS;
  items[1] = obj;
  obj = {};
  const intl5 = require(dependencyMap[4]).intl;
  obj.name = intl5.string(require(dependencyMap[4]).t.1tiAFz);
  const intl6 = require(dependencyMap[4]).intl;
  obj.desc = intl6.string(require(dependencyMap[4]).t.LKTyeA);
  obj.value = require(dependencyMap[5]).DmSpamFilterV2.DISABLED;
  items[2] = obj;
  return items;
};
export const generateExplicitImageOptions = function generateExplicitImageOptions() {
  let obj = {};
  const intl = require(dependencyMap[4]).intl;
  obj.name = intl.string(require(dependencyMap[4]).t.PhNlhz);
  const intl2 = require(dependencyMap[4]).intl;
  obj.desc = intl2.string(require(dependencyMap[4]).t.Fw+Lvp);
  obj.value = constants4.FRIENDS_AND_NON_FRIENDS;
  obj.color = require(dependencyMap[2]).unsafe_getRawColor("GREEN_360");
  const items = [obj, , ];
  obj = {};
  const intl3 = require(dependencyMap[4]).intl;
  obj.name = intl3.string(require(dependencyMap[4]).t.8ioJ4S);
  const intl4 = require(dependencyMap[4]).intl;
  obj.desc = intl4.string(require(dependencyMap[4]).t.z4l4Cr);
  obj.value = constants4.NON_FRIENDS;
  const obj2 = require(dependencyMap[2]);
  obj.color = require(dependencyMap[2]).unsafe_getRawColor("YELLOW_360");
  items[1] = obj;
  obj = {};
  const intl5 = require(dependencyMap[4]).intl;
  obj.name = intl5.string(require(dependencyMap[4]).t.FLfuhL);
  const intl6 = require(dependencyMap[4]).intl;
  obj.desc = intl6.string(require(dependencyMap[4]).t.MoZlaD);
  obj.value = constants4.DISABLED;
  const obj4 = require(dependencyMap[2]);
  obj.color = require(dependencyMap[2]).unsafe_getRawColor("RED_400");
  items[2] = obj;
  return items;
};
