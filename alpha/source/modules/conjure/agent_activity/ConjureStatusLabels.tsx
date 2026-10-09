// Module ID: 17192
// Function ID: 17193
// Name: ConjureStatusLabels
// Dependencies: [3827, 1126, 6940, 2]
// Exports: connectionLabel, isRecallingLine, recallingLine, runesUsedLabels, thinkingLine

// Module 17192 (ConjureStatusLabels)
import intl4 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureTypes from "ConjureTypes" /* 6940 */;
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
  let flag3 = saving.recalling;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = saving.controlling;
  if (flag4 === undefined) {
    flag4 = false;
  }
  const tmp = null != activity && "end" !== activity.phase;
  if (flag4) {
    xnCAaP = _modDef3827["1jqaAc"];
  } else if (flag2) {
    xnCAaP = _modDef3827.M4KI5F;
  } else if (flag3) {
    xnCAaP = items[0];
  } else {
    const tmp4 = _modDef3827;
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
const items = [_modDef3827["AX+5lk"], _modDef3827.VAU6A7, _modDef3827["1emysd"], _modDef3827.EXHX3L, _modDef3827.ChslmX];
const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureStatusLabels.tsx");

export const INDICATOR_PASS_MS = 1000;
export const INDICATOR_PASS_STAGGER_MS = 1800;
export const RECALLING_LINES = items;
export const recallingLine = function recallingLine(current) {
  const intl = intl4.intl;
  return intl.string(items[current % items.length]);
};
export const isRecallingLine = function isRecallingLine(current) {
  let closure_0 = current;
  return items.some((item) => {
    const intl = intl4.intl;
    return intl.string(item) === current;
  });
};
export const connectionLabel = function connectionLabel(stateFromStores8) {
  if ("connecting" === stateFromStores8) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef3827["ECl+Dx"]);
  } else if ("closed" === stateFromStores8) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef3827.mQZSp1);
  } else if ("failed" === stateFromStores8) {
    const intl = intl4.intl;
    return intl.string(_modDef3827.xzJSZ6);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(saving) {
  const intl = intl4.intl;
  return intl.string(thinkingLabel(saving));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  let formatToPlainString;
  let gMuw5d;
  let intl2;
  let obj3;
  const obj = ConjureTypes;
  const runesFromUsdResult = obj.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: formatToPlainString(gMuw5d, obj3), aria: intl2.formatToPlainString(_modDef3827.Z4LvGa, obj4) };
  const intl = intl4.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { runes: runesFromUsdResult.toLocaleString() };
  gMuw5d = _modDef3827.gMuw5d;
  intl2 = intl4.intl;
  return obj2;
};
