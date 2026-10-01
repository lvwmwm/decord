// Module ID: 16393
// Function ID: 16394
// Name: VibegrationsStatusLabels
// Dependencies: [3715, 1115, 5371, 2]
// Exports: connectionLabel, isRecallingLine, recallingLine, runesUsedLabels, thinkingLine

// Module 16393 (VibegrationsStatusLabels)
import intl4 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5371 */;
import size from "module_2" /* 2 */;

function thinkingLabel(restoring) {
  let activity;
  let compacting;
  let ivvYHP;
  ({ activity, compacting } = restoring);
  if (compacting === undefined) {
    compacting = false;
  }
  let flag = restoring.restoring;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = restoring.recalling;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = restoring.controlling;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const tmp = null != activity && "end" !== activity.phase;
  if (flag3) {
    ivvYHP = _modDef3715.ivvYHP;
  } else if (flag) {
    ivvYHP = _modDef3715.aFffp2;
  } else if (flag2) {
    ivvYHP = items[0];
  } else {
    const tmp4 = _modDef3715;
    if (compacting) {
      ivvYHP = tmp4["0vH/5G"];
    } else {
      ivvYHP = tmp ? tmp4.Ly7F7x : tmp4.QDGuNS;
    }
  }
  return ivvYHP;
}
const items = [_modDef3715.krnkPq, _modDef3715["8oUm/J"], _modDef3715["6Ea4dF"], _modDef3715.fQx5qC, _modDef3715["phXeK/"]];
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsStatusLabels.tsx");

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
export const connectionLabel = function connectionLabel(stateFromStores6) {
  if ("connecting" === stateFromStores6) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef3715.W7oyuf);
  } else if ("closed" === stateFromStores6) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef3715["yBmS+I"]);
  } else if ("failed" === stateFromStores6) {
    const intl = intl4.intl;
    return intl.string(_modDef3715.eE60xI);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(restoring) {
  const intl = intl4.intl;
  return intl.string(thinkingLabel(restoring));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  let formatToPlainString;
  let intl2;
  let obj3;
  let v4PFO2p;
  const obj = VibegrationsTypes;
  const runesFromUsdResult = obj.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: formatToPlainString(v4PFO2p, obj3), aria: intl2.formatToPlainString(_modDef3715["7SZZvj"], obj4) };
  const intl = intl4.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { runes: runesFromUsdResult.toLocaleString() };
  v4PFO2p = _modDef3715["4PFO2p"];
  intl2 = intl4.intl;
  return obj2;
};
