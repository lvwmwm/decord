// Module ID: 12324
// Function ID: 12325
// Name: ConjureStatusLabels
// Dependencies: [3830, 1128, 10706, 2]
// Exports: connectionLabel, isPublishLineSwitch, isRecallingLine, recallingLine, runesUsedLabels, thinkingLine

// Module 12324 (ConjureStatusLabels)
import intl5 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 10706 */;
import size from "module_2" /* 2 */;

function thinkingLabel(saving) {
  let activity;
  let compacting;
  let xnCAaP;
  ({ activity, compacting } = saving);
  if (compacting === undefined) {
    compacting = false;
  }
  let flag = saving.saving;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = saving.restoring;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = saving.remixing;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = saving.recalling;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = saving.controlling;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = saving.publishPending;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = saving.publishing;
  if (flag7 === undefined) {
    flag7 = false;
  }
  const tmp = null != activity && "end" !== activity.phase;
  if (flag5) {
    xnCAaP = _modDef3830["1jqaAc"];
  } else if (flag6) {
    xnCAaP = _modDef3830.xCdlEF;
  } else if (flag7) {
    xnCAaP = _modDef3830.Rhx0rn;
  } else if (flag2) {
    xnCAaP = _modDef3830.M4KI5F;
  } else if (flag3) {
    xnCAaP = _modDef3830.j8tmjK;
  } else if (flag4) {
    xnCAaP = items[0];
  } else {
    const tmp4 = _modDef3830;
    if (flag) {
      xnCAaP = tmp4.mKK6wB;
    } else if (compacting) {
      xnCAaP = tmp4.xnCAaP;
    } else {
      xnCAaP = tmp ? tmp4.izrt52 : tmp4.L9EDub;
    }
  }
  return xnCAaP;
}
const items = [_modDef3830["AX+5lk"], _modDef3830.VAU6A7, _modDef3830["1emysd"], _modDef3830.EXHX3L, _modDef3830.ChslmX];
const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureStatusLabels.tsx");

export const INDICATOR_PASS_MS = 1000;
export const INDICATOR_PASS_STAGGER_MS = 1800;
export const RECALLING_LINES = items;
export const isPublishLineSwitch = function isPublishLineSwitch(line, arg1) {
  const intl = intl5.intl;
  let tmp4 = line === intl.string(_modDef3830.xCdlEF);
  if (!tmp4) {
    const intl2 = tmp(1128).intl;
    tmp4 = line === intl2.string(tmp3(3830).Rhx0rn);
  }
  const intl3 = tmp(1128).intl;
  let tmp5 = arg1 === intl3.string(tmp3(3830).xCdlEF);
  if (!tmp5) {
    const intl4 = tmp(1128).intl;
    tmp5 = arg1 === intl4.string(tmp3(3830).Rhx0rn);
  }
  return tmp4 !== tmp5;
};
export const recallingLine = function recallingLine(current) {
  const intl = intl5.intl;
  return intl.string(items[current % items.length]);
};
export const isRecallingLine = function isRecallingLine(current) {
  let closure_0 = current;
  return items.some((item) => {
    const intl = intl5.intl;
    return intl.string(item) === current;
  });
};
export const connectionLabel = function connectionLabel(stateFromStores8) {
  if ("connecting" === stateFromStores8) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef3830["ECl+Dx"]);
  } else if ("closed" === stateFromStores8) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef3830.mQZSp1);
  } else if ("failed" === stateFromStores8) {
    const intl = intl5.intl;
    return intl.string(_modDef3830.xzJSZ6);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(saving) {
  const intl = intl5.intl;
  return intl.string(thinkingLabel(saving));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  let formatToPlainString;
  let gMuw5d;
  let intl2;
  let obj3;
  const obj = ConjureUsageTypes;
  const runesFromUsdResult = obj.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: formatToPlainString(gMuw5d, obj3), aria: intl2.formatToPlainString(_modDef3830.Z4LvGa, obj4) };
  const intl = intl5.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { runes: runesFromUsdResult.toLocaleString() };
  gMuw5d = _modDef3830.gMuw5d;
  intl2 = intl5.intl;
  return obj2;
};
