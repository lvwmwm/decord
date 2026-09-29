// Module ID: 15118
// Function ID: 15119
// Name: ModerationUtils
// Dependencies: [1074, 2021, 575, 15119, 1115, 1186, 2]
// Exports: generateContentFilterHighlightedOptions, generateContentFilterOptions, generateDmSpamOptions, generateExplicitImageOptions, generateVerificationLevelOptions, mapOptionToHighlightedRowOptions

// Module 15118 (ModerationUtils)
import shims from "shims" /* 575 */;
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import DMSafetyConstants from "DMSafetyConstants" /* 2021 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function mapColorToHighlightColor(arg0) {
  if (obj.unsafe_getRawColor("PRIMARY_400") === arg0) {
    return tmp(15119).HighlightColors.ACCENT;
  } else {
    if (tmpResult.unsafe_getRawColor("GREEN_360") === arg0) {
      return tmp(15119).HighlightColors.GREEN;
    } else {
      if (tmpResult4.unsafe_getRawColor("YELLOW_360") === arg0) {
        return tmp(15119).HighlightColors.YELLOW;
      } else {
        if (tmpResult5.unsafe_getRawColor("ORANGE_345") === arg0) {
          return tmp(15119).HighlightColors.ORANGE;
        } else {
          if (tmpResult6.unsafe_getRawColor("RED_400") === arg0) {
            return tmp(15119).HighlightColors.RED;
          } else {
            return tmp(15119).HighlightColors.NONE;
          }
          tmpResult6 = tmp(575);
        }
        tmpResult5 = tmp(575);
      }
      tmpResult4 = tmp(575);
    }
    tmpResult = tmp(575);
  }
  obj = shims;
}
({ VerificationLevels: c2, VerificationCriteria: c3, GuildExplicitContentFilterTypes: closure_4 } = Constants);
const constants4 = DMSafetyConstants.ExplicitContentFilterTypes;
const result = size.fileFinishedImporting("utils/ModerationUtils.tsx");

export { mapColorToHighlightColor };
export const mapOptionToHighlightedRowOptions = function mapOptionToHighlightedRowOptions(arr) {
  return arr.map((name) => ({ title: name.name, description: name.desc, highlightColor: mapColorToHighlightColor(name.color), value: name.value, disabled: name.disabled }));
};
export const generateVerificationLevelOptions = function generateVerificationLevelOptions(features) {
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  const obj = { name: null, desc: null, value: null, disabled: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.PEzffq);
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t.nDQy0p);
  }
  obj.desc = stringResult;
  obj.value = constants.NONE;
  obj.disabled = flag;
  const items = [obj, , , , ];
  const obj2 = { name: null, desc: null, value: null, color: null };
  const intl3 = tmp(1115).intl;
  obj2.name = intl3.string(util.t.SsCK8I);
  const intl4 = tmp(1115).intl;
  obj2.desc = intl4.string(util.t["8GCOX6"]);
  obj2.value = constants.LOW;
  let unsafe_getRawColorResult;
  if (!flag2) {
    unsafe_getRawColorResult = tmp(575).unsafe_getRawColor("GREEN_360");
    const tmpResult = tmp(575);
  }
  obj2.color = unsafe_getRawColorResult;
  items[1] = obj2;
  const obj3 = { name: null, desc: null, value: null, color: null };
  const intl5 = tmp(1115).intl;
  obj3.name = intl5.string(util.t.WwNoR4);
  const intl6 = tmp(1115).intl;
  obj3.desc = intl6.formatToPlainString(util.t.VS14ga, { min: constants2.ACCOUNT_AGE });
  obj3.value = constants.MEDIUM;
  let unsafe_getRawColorResult1;
  if (!flag2) {
    unsafe_getRawColorResult1 = tmp(575).unsafe_getRawColor("YELLOW_360");
    const tmpResult4 = tmp(575);
  }
  obj3.color = unsafe_getRawColorResult1;
  items[2] = obj3;
  const obj5 = { name: null, desc: null, value: null, color: null };
  const intl7 = tmp(1115).intl;
  obj5.name = intl7.string(util.t.I2jMUF);
  const intl8 = tmp(1115).intl;
  obj5.desc = intl8.formatToPlainString(util.t["r+b3I4"], { min: constants2.MEMBER_AGE });
  obj5.value = constants.HIGH;
  let unsafe_getRawColorResult2;
  if (!flag2) {
    unsafe_getRawColorResult2 = tmp(575).unsafe_getRawColor("ORANGE_345");
    const tmpResult5 = tmp(575);
  }
  obj5.color = unsafe_getRawColorResult2;
  items[3] = obj5;
  const obj7 = { name: null, desc: null, value: null, color: null };
  const intl9 = tmp(1115).intl;
  obj7.name = intl9.string(util.t.cJY8w9);
  const intl10 = tmp(1115).intl;
  obj7.desc = intl10.string(util.t.PWaKme);
  obj7.value = constants.VERY_HIGH;
  let unsafe_getRawColorResult3;
  if (!flag2) {
    unsafe_getRawColorResult3 = tmp(575).unsafe_getRawColor("RED_400");
    const tmpResult6 = tmp(575);
  }
  obj7.color = unsafe_getRawColorResult3;
  items[4] = obj7;
  return items;
};
export const generateContentFilterHighlightedOptions = function generateContentFilterHighlightedOptions() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const obj = { name: null, desc: null, value: null, color: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.iHuPE6);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t["Z+yUWF"]);
  obj.value = constants3.ALL_MEMBERS;
  obj.color = shims.unsafe_getRawColor("RED_400");
  const items = [obj, , ];
  const obj3 = { name: null, desc: null, value: null, disabled: null, color: null };
  const intl3 = util.intl;
  obj3.name = intl3.string(util.t.ynfFaI);
  const intl4 = util.intl;
  const string = intl4.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t["3fRIN4"]);
  }
  obj3.desc = stringResult;
  obj3.value = constants3.MEMBERS_WITHOUT_ROLES;
  obj3.disabled = flag;
  obj3.color = shims.unsafe_getRawColor("YELLOW_360");
  items[1] = obj3;
  const obj4 = { name: null, desc: null, value: null, disabled: null, color: null };
  const intl5 = tmp(1115).intl;
  obj4.name = intl5.string(util.t.VbSyAx);
  const intl6 = tmp(1115).intl;
  const string2 = intl6.string;
  const t2 = tmp(1115).t;
  if (flag) {
    let string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  obj4.desc = string2Result;
  obj4.value = constants3.DISABLED;
  obj4.disabled = flag;
  const tmpResult = shims;
  obj4.color = shims.unsafe_getRawColor("PRIMARY_400");
  items[2] = obj4;
  return items;
};
export const generateContentFilterOptions = function generateContentFilterOptions(features) {
  let flag = features;
  if (features === undefined) {
    flag = false;
  }
  const obj = { name: null, desc: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.iHuPE6);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t["Z+yUWF"]);
  obj.value = constants3.ALL_MEMBERS;
  const items = [obj, , ];
  const obj2 = { name: null, desc: null, value: null, disabled: null };
  const intl3 = util.intl;
  obj2.name = intl3.string(util.t.ynfFaI);
  const intl4 = util.intl;
  const string = intl4.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t.j9WtHx);
  } else {
    stringResult = string(t["3fRIN4"]);
  }
  obj2.desc = stringResult;
  obj2.value = constants3.MEMBERS_WITHOUT_ROLES;
  obj2.disabled = flag;
  items[1] = obj2;
  const obj3 = { name: null, desc: null, value: null, disabled: null };
  const intl5 = tmp(1115).intl;
  obj3.name = intl5.string(util.t.VbSyAx);
  const intl6 = tmp(1115).intl;
  const string2 = intl6.string;
  const t2 = tmp(1115).t;
  if (flag) {
    let string2Result = string2(t2.j9WtHx);
  } else {
    string2Result = string2(t2.M6GNsJ);
  }
  obj3.desc = string2Result;
  obj3.value = constants3.DISABLED;
  obj3.disabled = flag;
  items[2] = obj3;
  return items;
};
export const generateDmSpamOptions = function generateDmSpamOptions() {
  const obj = { name: null, desc: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t["4IaoCI"]);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t.TgipjE);
  obj.value = preloaded_user_settings.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  const items = [obj, , ];
  const obj2 = { name: null, desc: null, value: null };
  const intl3 = util.intl;
  obj2.name = intl3.string(util.t["6NnX6F"]);
  const intl4 = util.intl;
  obj2.desc = intl4.string(util.t["+dw1qu"]);
  obj2.value = preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS;
  items[1] = obj2;
  const obj3 = { name: null, desc: null, value: null };
  const intl5 = util.intl;
  obj3.name = intl5.string(util.t["1tiAFz"]);
  const intl6 = util.intl;
  obj3.desc = intl6.string(util.t.LKTyeA);
  obj3.value = preloaded_user_settings.DmSpamFilterV2.DISABLED;
  items[2] = obj3;
  return items;
};
export const generateExplicitImageOptions = function generateExplicitImageOptions() {
  const obj = { name: null, desc: null, value: null, color: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.PhNlhz);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t["Fw+Lvp"]);
  obj.value = constants4.FRIENDS_AND_NON_FRIENDS;
  obj.color = shims.unsafe_getRawColor("GREEN_360");
  const items = [obj, , ];
  const obj3 = { name: null, desc: null, value: null, color: null };
  const intl3 = util.intl;
  obj3.name = intl3.string(util.t["8ioJ4S"]);
  const intl4 = util.intl;
  obj3.desc = intl4.string(util.t.z4l4Cr);
  obj3.value = constants4.NON_FRIENDS;
  obj3.color = shims.unsafe_getRawColor("YELLOW_360");
  items[1] = obj3;
  const obj5 = { name: null, desc: null, value: null, color: null };
  const intl5 = util.intl;
  obj5.name = intl5.string(util.t.FLfuhL);
  const intl6 = util.intl;
  obj5.desc = intl6.string(util.t.MoZlaD);
  obj5.value = constants4.DISABLED;
  obj5.color = shims.unsafe_getRawColor("RED_400");
  items[2] = obj5;
  return items;
};
