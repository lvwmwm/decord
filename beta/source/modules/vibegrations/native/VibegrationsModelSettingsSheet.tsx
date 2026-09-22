// Module ID: 17065
// Function ID: 17066
// Name: VibegrationsModelSettingsSheet
// Dependencies: [19, 17, 13364, 21, 558, 568, 504, 7396, 1119, 3682, 16948, 4754, 7449, 5186, 580, 2]

// Module 17065 (VibegrationsModelSettingsSheet)
import nativeDefault from "native" /* 580 */;
import _modDef3682 from "module_3682" /* 3682 */;
import VibegrationsEffortPickerDefault from "VibegrationsEffortPicker" /* 16948 */;
import noop from "module_19" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 13364 */;

const require = fn;
const View = fn(17).View;
const sendModelSettings = fn(13364).sendModelSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(568).c(27);
  projectId = projectId.projectId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function h() {
      return VibegrationsConnectionStore.getModelSettings(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = projectId(568);
  const stateFromStores = projectId(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [VibegrationsConnectionStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    const fn2 = function f() {
      return VibegrationsConnectionStore.getConnState(projectId);
    };
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult = projectId(504);
  const stateFromStores1 = projectId(504).useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [VibegrationsConnectionStore];
    cResult[8] = items4;
    let tmp14 = items4;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    class T {
      constructor() {
        return closure_5.isChatStopped(projectId);
      }
    }
    const items5 = [projectId];
    cResult[9] = projectId;
    cResult[10] = T;
    cResult[11] = items5;
    let tmp17 = items5;
    const tmp16 = T;
  } else {
    class T {
      constructor() {
        return closure_5.isChatStopped(projectId);
      }
    }
    tmp17 = cResult[11];
  }
  const tmpResult3 = projectId(504);
  const tmp18 = "open" !== stateFromStores1 || projectId(504).useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[12] !== projectId) {
    class T {
      constructor() {
        return closure_5.isChatStopped(projectId);
      }
    }
    cResult[12] = projectId;
    cResult[13] = tmp20;
  } else {
    class T {
      constructor() {
        return closure_5.isChatStopped(projectId);
      }
    }
  }
  if (null == stateFromStores) {
    class T {
      constructor() {
        return closure_5.isChatStopped(projectId);
      }
    }
  } else {
    class T {
      constructor() {
        return closure_5.isChatStopped(projectId);
      }
    }
    const choices = stateFromStores.choices;
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          return closure_5.isChatStopped(projectId);
        }
      }
      const obj2 = { title: null };
      const intl = tmp(1119).intl;
      obj2.title = intl.string(_modDef3682["2NWMqY"]);
      const tmp23 = closure_7(tmp(7396).BottomSheetTitleHeader, obj2);
      cResult[14] = tmp23;
    } else {
      class T {
        constructor() {
          return closure_5.isChatStopped(projectId);
        }
      }
    }
    if (cResult[15] === choices) {
      class T {
        constructor() {
          return closure_5.isChatStopped(projectId);
        }
      }
    }
    const obj3 = { settings: tmp28, choices, disabled: tmp18, onChange: tmp19 };
    const tmp27 = closure_7(VibegrationsEffortPickerDefault, obj3);
    cResult[15] = choices;
    cResult[16] = tmp18;
    cResult[17] = tmp19;
    cResult[18] = tmp28;
    cResult[19] = tmp27;
  }
}) : ((projectId) => {
  projectId = projectId.projectId;
  const items = [VibegrationsConnectionStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => VibegrationsConnectionStore.getModelSettings(projectId), items1);
  const obj = projectId(504);
  const items2 = [VibegrationsConnectionStore];
  const items3 = [projectId];
  const stateFromStores1 = projectId(504).useStateFromStores(items2, () => VibegrationsConnectionStore.getConnState(projectId), items3);
  const obj2 = projectId(504);
  const items4 = [VibegrationsConnectionStore];
  const items5 = [projectId];
  const tmp5 = "open" !== stateFromStores1 || projectId(504).useStateFromStores(items4, () => VibegrationsConnectionStore.isChatStopped(projectId), items5);
  [][0] = projectId;
  if (null == stateFromStores) {
    return null;
  } else {
    ({ settings, choices } = stateFromStores);
    const obj4 = { header: null, children: null };
    const obj5 = { title: null };
    const intl = tmp(1119).intl;
    obj5.title = intl.string(_modDef3682["2NWMqY"]);
    obj4.header = closure_7(tmp(7396).BottomSheetTitleHeader, obj5);
    const obj6 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
    const obj7 = { settings, choices, disabled: tmp5, onChange: tmp6 };
    const items6 = [closure_7(VibegrationsEffortPickerDefault, obj7), ];
    const intl2 = tmp(1119).intl;
    const string = intl2.string;
    const tmp12 = _modDef3682;
    if (tmp5) {
      let stringResult = string(tmp12.t5mTfU);
    } else {
      stringResult = string(tmp12.ICU5aW);
    }
    const obj8 = { children: null };
    const obj9 = { variant: "text-xs/normal", color: "text-muted", children: stringResult };
    items6[1] = closure_7(tmp(4754).Text, obj9);
    obj6.children = items6;
    obj8.children = closure_8(tmp(5186).Stack, obj6);
    obj4.children = closure_7(View, obj8);
    return closure_7(tmp(7449).ActionSheet, obj4);
  }
  const obj3 = projectId(504);
});
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";
