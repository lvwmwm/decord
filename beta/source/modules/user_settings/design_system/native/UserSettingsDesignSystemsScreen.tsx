// Module ID: 15170
// Function ID: 15171
// Name: UserSettingsDesignSystemsScreen
// Dependencies: [19, 7417, 21, 11006, 14247, 2]
// Exports: default

// Module 15170 (UserSettingsDesignSystemsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx");

export default function SettingsDesignSystemsScreen() {
  const node = react.useMemo(() => {
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    const obj3 = { label: "Components", settings: items };
    items = [, , , , , , , , , , , , , , , , ];
    const obj2 = { sections: items1 };
    ({ DESIGN_SYSTEMS_TEXT: arr[0], DESIGN_SYSTEMS_BUTTON: arr[1], DESIGN_SYSTEMS_BUTTON_GROUP: arr[2], DESIGN_SYSTEMS_ROW_BUTTON: arr[3], DESIGN_SYSTEMS_TABLE_ROW: arr[4], DESIGN_SYSTEMS_ALERT_MODAL: arr[5], DESIGN_SYSTEMS_SHADOWS: arr[6], DESIGN_SYSTEM_SEGMENTED_CONTROL: arr[7], DESIGN_SYSTEMS_TABS: arr[8], DESIGN_SYSTEM_BACKDROP: arr[9], DESIGN_SYSTEMS_TOOLTIP: arr[10], DESIGN_SYSTEMS_COACHMARK: arr[11], DESIGN_SYSTEM_FORM_PRIMITIVES: arr[12], DESIGN_SYSTEMS_TEXT_INPUT: arr[13], DESIGN_SYSTEM_PILE: arr[14], DESIGN_SYSTEM_TAG_GROUP: arr[15], DESIGN_SYSTEM_HAPTICS: arr[16] } = constants);
    items1 = [obj3, , , , ];
    const obj4 = { label: "AI Visual Identity", settings: items2 };
    items2 = [, ];
    ({ DESIGN_SYSTEM_AI_LOADER: arr3[0], DESIGN_SYSTEM_AI_SHIMMER: arr3[1] } = constants);
    items1[1] = obj4;
    const obj5 = { label: "In Progress", settings: items3 };
    items3 = [, , , , ];
    ({ DESIGN_SYSTEM_SHEETS: arr4[0], DESIGN_SYSTEM_STACK: arr4[1], DESIGN_SYSTEMS_CONTEXT_MENU: arr4[2], DESIGN_SYSTEMS_TOAST: arr4[3], DESIGN_SYSTEMS_MODAL: arr4[4] } = constants);
    items1[2] = obj5;
    const obj6 = { label: "Experimental", settings: items4 };
    items4 = [, ];
    ({ DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW: arr5[0], DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS: arr5[1] } = constants);
    items1[3] = obj6;
    const obj7 = { label: "Legacy Audit", settings: items5 };
    items5 = [constants.DESIGN_SYSTEMS_LEGACY_BUTTON];
    items1[4] = obj7;
    const obj = SettingBuilders;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};
