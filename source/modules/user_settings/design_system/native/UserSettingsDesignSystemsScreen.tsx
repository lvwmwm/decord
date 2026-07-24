// Module ID: 13600
// Function ID: 104465
// Name: SettingsDesignSystemsScreen
// Dependencies: [31, 7751, 33, 10127, 13601, 2]
// Exports: default

// Module 13600 (SettingsDesignSystemsScreen)
import result from "result";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx");

export default function SettingsDesignSystemsScreen() {
  const node = React.useMemo(() => {
    const items = [, , , , , , , , , , , , , , , ];
    ({ DESIGN_SYSTEMS_TEXT: arr[0], DESIGN_SYSTEMS_BUTTON: arr[1], DESIGN_SYSTEMS_BUTTON_GROUP: arr[2], DESIGN_SYSTEMS_ROW_BUTTON: arr[3], DESIGN_SYSTEMS_TABLE_ROW: arr[4], DESIGN_SYSTEMS_ALERT_MODAL: arr[5], DESIGN_SYSTEMS_SHADOWS: arr[6], DESIGN_SYSTEM_SEGMENTED_CONTROL: arr[7], DESIGN_SYSTEMS_TABS: arr[8], DESIGN_SYSTEM_BACKDROP: arr[9], DESIGN_SYSTEMS_TOOLTIP: arr[10], DESIGN_SYSTEMS_COACHMARK: arr[11], DESIGN_SYSTEM_FORM_PRIMITIVES: arr[12], DESIGN_SYSTEMS_TEXT_INPUT: arr[13], DESIGN_SYSTEM_PILE: arr[14], DESIGN_SYSTEM_HAPTICS: arr[15] } = outer1_4);
    const sections = [{ label: "Components", settings: items }, , , ];
    const items2 = [, , , , ];
    ({ DESIGN_SYSTEM_SHEETS: arr3[0], DESIGN_SYSTEM_STACK: arr3[1], DESIGN_SYSTEMS_CONTEXT_MENU: arr3[2], DESIGN_SYSTEMS_TOAST: arr3[3], DESIGN_SYSTEMS_MODAL: arr3[4] } = outer1_4);
    sections[1] = { label: "In Progress", settings: items2 };
    const items3 = [, ];
    ({ DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW: arr4[0], DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS: arr4[1] } = outer1_4);
    sections[2] = { label: "Experimental", settings: items3 };
    const items4 = [outer1_4.DESIGN_SYSTEMS_LEGACY_BUTTON];
    sections[3] = { label: "Legacy Audit", settings: items4 };
    return outer1_0(outer1_2[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13601), { node });
};
