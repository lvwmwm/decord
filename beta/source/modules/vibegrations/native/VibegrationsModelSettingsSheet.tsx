// Module ID: 16264
// Function ID: 16265
// Name: VibegrationsModelSettingsSheet
// Dependencies: [19, 17, 12642, 21, 504, 5279, 576, 16244, 4832, 1115, 3715, 6618, 6570, 2]
// Exports: default

// Module 16264 (VibegrationsModelSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import VibegrationsConnectionStore2 from "VibegrationsConnectionStore" /* 12642 */;
import VibegrationsEffortPickerDefault from "VibegrationsEffortPicker" /* 16244 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const VibegrationsConnectionStore = VibegrationsConnectionStore2;

let metroImportAll;
let metroImportDefault;
class VibegrationsModelSettingsContent {
  constructor(projectId) {
    let choices;
    let items7;
    let tierSettings;
    let tiers;
    projectId = projectId.projectId;
    const items = [VibegrationsConnectionStore];
    const items1 = [projectId];
    const obj = projectId(504);
    const stateFromStores = obj.useStateFromStores(items, () => VibegrationsConnectionStore.getModelSettings(projectId), items1);
    const items2 = [VibegrationsConnectionStore];
    const items3 = [projectId];
    const obj2 = projectId(504);
    const stateFromStores1 = obj2.useStateFromStores(items2, () => VibegrationsConnectionStore.getConnState(projectId), items3);
    const items4 = [VibegrationsConnectionStore];
    const items5 = [projectId];
    const obj3 = projectId(504);
    const tmp5 = "open" !== stateFromStores1 || obj3.useStateFromStores(items4, () => VibegrationsConnectionStore.isChatStopped(projectId), items5);
    const items6 = [projectId];
    let tierSettings1;
    const callback = react.useCallback((arg0) => {
      try {
        sendModelSettings(projectId, arg0);
      } catch (err) {
      }
    }, items6);
    if (stateFromStores != null) {
      tierSettings1 = stateFromStores.tierSettings;
    }
    if (null == tierSettings1) {
      return null;
    } else {
      let stringResult;
      ({ tierSettings, tiers, choices } = stateFromStores);
      const obj4 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: items7 };
      const Stack = tmp(5279).Stack;
      const obj5 = { settings: tierSettings, tiers, choices, disabled: tmp5, onChange: callback };
      items7 = [closure_7(VibegrationsEffortPickerDefault, obj5), ];
      const Text = tmp(4832).Text;
      const intl = tmp(1115).intl;
      const string = intl.string;
      const tmp12 = _modDef3715;
      const tmp11 = closure_7;
      const tmp9 = closure_8;
      if (tmp5) {
        stringResult = string(tmp12.t5mTfU);
      } else {
        stringResult = string(tmp12.ICU5aW);
      }
      const obj6 = { variant: "text-xs/normal", color: "text-muted", children: stringResult };
      items7[1] = tmp11(Text, obj6);
      return tmp9(Stack, obj4);
    }
  }
}
const View = react_native.View;
const sendModelSettings = VibegrationsConnectionStore2.sendModelSettings;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  let BottomSheetTitleHeader;
  let intl;
  let obj2;
  let obj3;
  projectId = projectId.projectId;
  const obj = { header: metroImportDefault(BottomSheetTitleHeader, obj2), children: metroImportDefault(View, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3715["2NWMqY"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  obj3 = { children: metroImportDefault(VibegrationsModelSettingsContent, { projectId }) };
  return metroImportDefault(ActionSheet, obj);
};
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";
export { VibegrationsModelSettingsContent };
