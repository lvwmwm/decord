// Module ID: 11352
// Function ID: 11353
// Name: ConjureModelSettingsSheet
// Dependencies: [19, 17, 10663, 10676, 21, 558, 576, 504, 10694, 11296, 1126, 3849, 5092, 5382, 587, 6844, 6904, 2]

// Module 11352 (ConjureModelSettingsSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6844 */;
import ActionSheet2 from "ActionSheet" /* 6904 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 10694 */;
import ConjureEffortPickerDefault from "ConjureEffortPicker" /* 11296 */;
import react from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10663 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10676 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureModelSettingsContent(projectId) {
  let choices;
  let first;
  let items4;
  let tierSettings;
  let tiers;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = projectId(576);
  const cResult = obj.c(23);
  projectId = projectId.projectId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureModelSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function c() {
      return ConjureModelSettingsStore.getModelSettings(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = projectId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureConnectionStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    const fn2 = function j() {
      return ConjureConnectionStore.getConnState(projectId);
    };
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult2 = projectId(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[8] !== projectId) {
    const fn3 = function f(arg0) {
      try {
        const obj = conjureModelSettingsConnection;
        obj.sendModelSettings(projectId, arg0);
      } catch (err) {
      }
    };
    cResult[8] = projectId;
    cResult[9] = fn3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[9];
  }
  let tierSettings1;
  if (stateFromStores != null) {
    tierSettings1 = stateFromStores.tierSettings;
  }
  if (null == tierSettings1) {
    return null;
  } else {
    ({ tierSettings, tiers, choices } = stateFromStores);
    if (cResult[10] === choices) {
      if (cResult[11] === "open" !== stateFromStores1) {
        if (cResult[12] === tmp14) {
          if (cResult[13] === tierSettings) {
            let tmp16;
            let tmp20;
            let tmp24;
            if (cResult[14] === tiers) {
              tmp16 = cResult[15];
            }
            if (cResult[16] !== ("open" !== stateFromStores1)) {
              let stringResult;
              const intl = tmp(1126).intl;
              const string = intl.string;
              const tmp22 = _modDef3849;
              if ("open" !== stateFromStores1) {
                stringResult = string(tmp22.GxpdUR);
              } else {
                stringResult = string(tmp22["/rJzr6"]);
              }
              cResult[16] = "open" !== stateFromStores1;
              cResult[17] = stringResult;
              tmp20 = stringResult;
            } else {
              tmp20 = cResult[17];
            }
            if (cResult[18] !== tmp20) {
              const obj2 = { variant: "text-xs/normal", color: "text-muted", children: tmp20 };
              const tmp26 = closure_7(projectId(5092).Text, obj2);
              cResult[18] = tmp20;
              cResult[19] = tmp26;
              tmp24 = tmp26;
            } else {
              tmp24 = cResult[19];
            }
            if (cResult[20] === tmp24) {
              let tmp27;
              if (cResult[21] === tmp16) {
                tmp27 = cResult[22];
              }
              return tmp27;
            }
            const obj3 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: items4 };
            const Stack = tmp(5382).Stack;
            items4 = [tmp16, tmp24];
            const tmp30 = closure_8(Stack, obj3);
            cResult[20] = tmp24;
            cResult[21] = tmp16;
            cResult[22] = tmp30;
            tmp27 = tmp30;
          }
        }
      }
    }
    const obj4 = { settings: tierSettings, tiers, choices, disabled: "open" !== stateFromStores1, onChange: tmp14 };
    const tmp19 = closure_7(ConjureEffortPickerDefault, obj4);
    cResult[10] = choices;
    cResult[11] = "open" !== stateFromStores1;
    cResult[12] = tmp14;
    cResult[13] = tierSettings;
    cResult[14] = tiers;
    cResult[15] = tmp19;
    tmp16 = tmp19;
  }
}) : (function ConjureModelSettingsContent(projectId) {
  let choices;
  let items5;
  let tierSettings;
  let tiers;
  projectId = projectId.projectId;
  let obj = projectId(504);
  const items = [ConjureModelSettingsStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureModelSettingsStore.getModelSettings(projectId), items1);
  const items2 = [ConjureConnectionStore];
  const items3 = [projectId];
  const items4 = [projectId];
  const obj2 = projectId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ConjureConnectionStore.getConnState(projectId), items3);
  let tierSettings1;
  const callback = react.useCallback((arg0) => {
    try {
      const obj = conjureModelSettingsConnection;
      obj.sendModelSettings(projectId, arg0);
    } catch (err) {
    }
  }, items4);
  if (stateFromStores != null) {
    tierSettings1 = stateFromStores.tierSettings;
  }
  if (null == tierSettings1) {
    return null;
  } else {
    let stringResult;
    ({ tierSettings, tiers, choices } = stateFromStores);
    const obj3 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: items5 };
    const Stack = tmp(5382).Stack;
    const obj4 = { settings: tierSettings, tiers, choices, disabled: "open" !== stateFromStores1, onChange: callback };
    items5 = [closure_7(ConjureEffortPickerDefault, obj4), ];
    const Text = tmp(5092).Text;
    const intl = tmp(1126).intl;
    const string = intl.string;
    const tmp12 = _modDef3849;
    const tmp11 = closure_7;
    const tmp9 = closure_8;
    if ("open" !== stateFromStores1) {
      stringResult = string(tmp12.GxpdUR);
    } else {
      stringResult = string(tmp12["/rJzr6"]);
    }
    const obj5 = { variant: "text-xs/normal", color: "text-muted", children: stringResult };
    items5[1] = tmp11(Text, obj5);
    return tmp9(Stack, obj3);
  }
});
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureModelSettingsSheet(projectId) {
  let first;
  let intl;
  let obj4;
  let obj5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  projectId = projectId.projectId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(_modDef3849["3E7Yc0"]) };
    const BottomSheetTitleHeader = tmp(6844).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
    const tmp7 = metroImportDefault(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const obj3 = { header: first, children: metroImportDefault(View, obj4) };
    obj4 = { children: metroImportDefault(closure_9, obj5) };
    obj5 = { projectId };
    const ActionSheet = tmp(6904).ActionSheet;
    const tmp12 = metroImportDefault(ActionSheet, obj3);
    cResult[1] = projectId;
    cResult[2] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function ConjureModelSettingsSheet(projectId) {
  let BottomSheetTitleHeader;
  let intl;
  let obj2;
  let obj3;
  projectId = projectId.projectId;
  const obj = { header: metroImportDefault(BottomSheetTitleHeader, obj2), children: metroImportDefault(View, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3849["3E7Yc0"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  obj3 = { children: metroImportDefault(closure_9, { projectId }) };
  return metroImportDefault(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx");

export default tmp4;
export const CONJURE_MODEL_SETTINGS_SHEET_KEY = "ConjureModelSettingsSheet";
export const ConjureModelSettingsContent = tmp3;
