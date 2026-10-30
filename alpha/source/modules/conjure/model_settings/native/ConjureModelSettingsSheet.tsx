// Module ID: 12470
// Function ID: 12471
// Name: ConjureModelSettingsSheet
// Dependencies: [32, 19, 17, 10830, 10845, 21, 504, 10873, 12471, 6022, 575, 12472, 5619, 1114, 3865, 7360, 7315, 2]
// Exports: default

// Module 12470 (ConjureModelSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7315 */;
import ActionSheet2 from "ActionSheet" /* 7360 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 10873 */;
import useConjureModelSettingsDraftDefault from "useConjureModelSettingsDraft" /* 12471 */;
import ConjureEffortPickerDefault from "ConjureEffortPicker" /* 12472 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10845 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
class ConjureModelSettingsContent {
  constructor(projectId) {
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
      tmp3 = closure_8(ModelSettingsPicker, obj2);
    }
    return tmp3;
  }
}
function ModelSettingsPicker(projectId) {
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
  const Stack = projectId(6022).Stack;
  items3 = [, ];
  const obj3 = { settings: tmp4, tiers: modelSettings.tiers, choices: modelSettings.choices, disabled: tmp, onChange: tmp5 };
  items3[0] = closure_8(ConjureEffortPickerDefault, obj3);
  const Text = projectId(5619).Text;
  const intl = projectId(1114).intl;
  const string = intl.string;
  const tmp8 = _modDef3865;
  const tmp6 = closure_9;
  const tmp7 = closure_8;
  if (tmp) {
    stringResult = string(tmp8.GxpdUR);
  } else {
    stringResult = string(tmp8["/rJzr6"]);
  }
  items3[1] = tmp7(Text, { variant: "text-xs/normal", color: "text-muted", children: stringResult });
  return tmp6(Stack, obj2);
}
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureModelSettingsSheet.tsx");

export default function ConjureModelSettingsSheet(projectId) {
  let BottomSheetTitleHeader;
  let intl;
  let obj2;
  let obj3;
  projectId = projectId.projectId;
  const obj = { header: metroImportAll(BottomSheetTitleHeader, obj2), children: metroImportAll(View, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3865["3E7Yc0"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  obj3 = { children: metroImportAll(ConjureModelSettingsContent, { projectId }) };
  return metroImportAll(ActionSheet, obj);
};
export const CONJURE_MODEL_SETTINGS_SHEET_KEY = "ConjureModelSettingsSheet";
export { ConjureModelSettingsContent };
