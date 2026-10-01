// Module ID: 16308
// Function ID: 16309
// Name: VibegrationsRestorePanelOp
// Dependencies: [1115, 3715, 2]
// Exports: restoreEnvironmentLabel, restorePanelEnvironments, restorePanelStatusForEnvironment, restorePointOriginLabel

// Module 16308 (VibegrationsRestorePanelOp)
import intl4 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsRestorePanelOp.tsx");

export const RESTORE_WINDOW_DAYS = 30;
export const restorePointOriginLabel = function restorePointOriginLabel(origin) {
  if ("auto_deploy" === origin) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef3715.h4zhWL);
  } else if ("undo" === origin) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef3715["c/tNny"]);
  } else {
    const intl = intl4.intl;
    return intl.string(_modDef3715["jViU+0"]);
  }
};
export const restoreEnvironmentLabel = function restoreEnvironmentLabel(id) {
  let prop;
  const intl = intl4.intl;
  const string = intl.string;
  if ("preview" === id) {
    prop = _modDef3715["/kYdZe"];
  } else {
    prop = _modDef3715["1/CVzo"];
  }
  return string(prop);
};
export function restorePanelEnvironments(installScope) {
  return "user" === installScope ? ["stable"] : ["preview", "stable"];
}
export const restorePanelStatusForEnvironment = function restorePanelStatusForEnvironment(phase, arg1) {
  let obj;
  if ("busy" === phase.phase) {
    if ("restore" === phase.kind) {
      let obj3;
      if (phase.environment === arg1) {
        obj3 = { kind: "pending" };
      }
      obj = obj3;
    }
    obj3 = { kind: "none" };
  } else {
    if ("settled" === phase.phase) {
      if (phase.environment === arg1) {
        const obj5 = { kind: "notice", tone: null, text: null };
        ({ tone: obj2.tone, text: obj2.text } = phase);
        obj = obj5;
      }
    }
    obj = { kind: "none" };
  }
  return obj;
};
