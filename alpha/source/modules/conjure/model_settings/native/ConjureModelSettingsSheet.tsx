// Module ID: 11847
// Function ID: 11848
// Name: ConjureModelSettingsSheet
// Dependencies: [32, 19, 17, 10698, 10712, 21, 558, 576, 504, 10738, 11848, 11770, 1128, 3830, 5234, 5977, 587, 7248, 7298, 2]

// Module 11847 (ConjureModelSettingsSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7248 */;
import ActionSheet2 from "ActionSheet" /* 7298 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 10738 */;
import ConjureEffortPickerDefault from "ConjureEffortPicker" /* 11770 */;
import useConjureModelSettingsDraftDefault from "useConjureModelSettingsDraft" /* 11848 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10712 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureModelSettingsContent(projectId) {
  let first;
  let tmp6;
  let tmp7;
  const obj = projectId(576);
  const cResult = obj.c(7);
  const tmp = projectId;
  projectId = projectId.projectId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureModelSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function o() {
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  let tierSettings;
  if (stateFromStores != null) {
    tierSettings = stateFromStores.tierSettings;
  }
  let tmp10 = null;
  if (null != tierSettings) {
    if (cResult[4] === stateFromStores) {
      let tmp11;
      if (cResult[5] === projectId) {
        tmp11 = cResult[6];
      }
      tmp10 = tmp11;
    }
    const obj2 = { projectId, modelSettings: stateFromStores, tierSettings: stateFromStores.tierSettings };
    const tmp14 = closure_8(closure_11, obj2);
    cResult[4] = stateFromStores;
    cResult[5] = projectId;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  return tmp10;
}) : (function ConjureModelSettingsContent(projectId) {
  projectId = projectId.projectId;
  const items = [ConjureModelSettingsStore];
  const items1 = [projectId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureModelSettingsStore.getModelSettings(projectId), items1);
  let tierSettings;
  if (stateFromStores != null) {
    tierSettings = stateFromStores.tierSettings;
  }
  let tmp3 = null;
  if (null != tierSettings) {
    const obj2 = { projectId, modelSettings: stateFromStores, tierSettings: stateFromStores.tierSettings };
    tmp3 = closure_8(closure_11, obj2);
  }
  return tmp3;
});
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ModelSettingsPicker(projectId) {
  let first;
  let items2;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = projectId(576);
  const cResult = obj.c(19);
  projectId = projectId.projectId;
  const modelSettings = projectId.modelSettings;
  const tierSettings = projectId.tierSettings;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureConnectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function c() {
      return ConjureConnectionStore.getConnState(projectId);
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
  if (cResult[4] !== projectId) {
    const fn2 = function _(arg0) {
      const obj = conjureModelSettingsConnection;
      return obj.sendModelSettings(projectId, arg0);
    };
    cResult[4] = projectId;
    cResult[5] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  [tmp13, tmp14] = useConjureModelSettingsDraftDefault(tierSettings, tmp9);
  _slicedToArray(useConjureModelSettingsDraftDefault(tierSettings, tmp9), 2);
  if (cResult[6] === tmp13) {
    if (cResult[7] === "open" !== stateFromStores) {
      if (cResult[8] === modelSettings.choices) {
        if (cResult[9] === modelSettings.tiers) {
          let tmp15;
          let tmp17;
          let tmp20;
          if (cResult[10] === tmp14) {
            tmp15 = cResult[11];
          }
          if (cResult[12] !== ("open" !== stateFromStores)) {
            let stringResult;
            const intl = tmp(1128).intl;
            const string = intl.string;
            const tmp11Result = _modDef3830;
            if ("open" !== stateFromStores) {
              stringResult = string(tmp11Result.GxpdUR);
            } else {
              stringResult = string(tmp11Result["/rJzr6"]);
            }
            cResult[12] = "open" !== stateFromStores;
            cResult[13] = stringResult;
            tmp17 = stringResult;
          } else {
            tmp17 = cResult[13];
          }
          if (cResult[14] !== tmp17) {
            const obj2 = { variant: "text-xs/normal", color: "text-muted", children: tmp17 };
            const tmp22 = closure_8(projectId(5234).Text, obj2);
            cResult[14] = tmp17;
            cResult[15] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[15];
          }
          if (cResult[16] === tmp15) {
            let tmp23;
            if (cResult[17] === tmp20) {
              tmp23 = cResult[18];
            }
            return tmp23;
          }
          const obj3 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: items2 };
          const Stack = tmp(5977).Stack;
          items2 = [tmp15, tmp20];
          const tmp25 = closure_9(Stack, obj3);
          cResult[16] = tmp15;
          cResult[17] = tmp20;
          cResult[18] = tmp25;
          tmp23 = tmp25;
        }
      }
    }
  }
  const obj4 = { settings: tmp13, tiers: modelSettings.tiers, choices: modelSettings.choices, disabled: "open" !== stateFromStores, onChange: tmp14 };
  const tmp16 = closure_8(ConjureEffortPickerDefault, obj4);
  cResult[6] = tmp13;
  cResult[7] = "open" !== stateFromStores;
  cResult[8] = modelSettings.choices;
  cResult[9] = modelSettings.tiers;
  cResult[10] = tmp14;
  cResult[11] = tmp16;
  tmp15 = tmp16;
}) : (function ModelSettingsPicker(projectId) {
  let items3;
  let stringResult;
  let tmp4;
  let tmp5;
  projectId = projectId.projectId;
  const modelSettings = projectId.modelSettings;
  const tierSettings = projectId.tierSettings;
  let obj = projectId(504);
  const items = [ConjureConnectionStore];
  const items1 = [projectId];
  const tmp = "open" !== obj.useStateFromStores(items, () => ConjureConnectionStore.getConnState(projectId), items1);
  const items2 = [projectId];
  const callback = react.useCallback((arg0) => {
    const obj = conjureModelSettingsConnection;
    return obj.sendModelSettings(projectId, arg0);
  }, items2);
  [tmp4, tmp5] = useConjureModelSettingsDraftDefault(tierSettings, callback);
  const obj2 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: items3 };
  _slicedToArray(useConjureModelSettingsDraftDefault(tierSettings, callback), 2);
  const Stack = projectId(5977).Stack;
  items3 = [, ];
  const obj3 = { settings: tmp4, tiers: modelSettings.tiers, choices: modelSettings.choices, disabled: tmp, onChange: tmp5 };
  items3[0] = closure_8(ConjureEffortPickerDefault, obj3);
  const Text = projectId(5234).Text;
  const intl = projectId(1128).intl;
  const string = intl.string;
  const tmp8 = _modDef3830;
  const tmp6 = closure_9;
  const tmp7 = closure_8;
  if (tmp) {
    stringResult = string(tmp8.GxpdUR);
  } else {
    stringResult = string(tmp8["/rJzr6"]);
  }
  items3[1] = tmp7(Text, { variant: "text-xs/normal", color: "text-muted", children: stringResult });
  return tmp6(Stack, obj2);
});
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
    const obj2 = { title: intl.string(_modDef3830["3E7Yc0"]) };
    const BottomSheetTitleHeader = tmp(7248).BottomSheetTitleHeader;
    intl = tmp(1128).intl;
    const tmp7 = metroImportAll(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const obj3 = { header: first, children: metroImportAll(View, obj4) };
    obj4 = { children: metroImportAll(closure_10, obj5) };
    obj5 = { projectId };
    const ActionSheet = tmp(7298).ActionSheet;
    const tmp12 = metroImportAll(ActionSheet, obj3);
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
  const obj = { header: metroImportAll(BottomSheetTitleHeader, obj2), children: metroImportAll(View, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3830["3E7Yc0"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  obj3 = { children: metroImportAll(closure_10, { projectId }) };
  return metroImportAll(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx");

export default tmp4;
export const CONJURE_MODEL_SETTINGS_SHEET_KEY = "ConjureModelSettingsSheet";
export const ConjureModelSettingsContent = tmp3;
