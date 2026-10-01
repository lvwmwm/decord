// Module ID: 16267
// Function ID: 16268
// Name: VibegrationsStaffAccessNotice
// Dependencies: [19, 17, 1074, 21, 4836, 576, 16268, 1101, 4525, 5919, 4787, 4832, 1115, 3715, 2]
// Exports: default

// Module 16267 (VibegrationsStaffAccessNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import _modDef3715 from "module_3715" /* 3715 */;
import LinkingDefault from "Linking" /* 4525 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const Routes = Constants.Routes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { row: obj2, copy: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStaffAccessNotice.tsx");

export default function VibegrationsStaffAccessNotice() {
  let format;
  let items;
  let obj3;
  let obj6;
  let v4BsHmp;
  let vibegrationsStaffAccessTarget;
  const tmp = closure_8();
  let obj = vibegrationsStaffAccessTarget(16268);
  vibegrationsStaffAccessTarget = obj.useVibegrationsStaffAccessTarget();
  [][0] = vibegrationsStaffAccessTarget;
  let tmp6 = null;
  if (null != vibegrationsStaffAccessTarget) {
    let obj2 = { variant: "primary", children: closure_7(View, obj3) };
    obj3 = { style: tmp.row, children: items };
    const Card = tmp2(5919).Card;
    const obj4 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
    const CircleInformationIcon = tmp2(4787).CircleInformationIcon;
    items = [closure_6(CircleInformationIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-default", style: tmp.copy, children: format(v4BsHmp, obj6) };
    const Text = tmp2(4832).Text;
    const intl = tmp2(1115).intl;
    format = intl.format;
    obj6 = { channel: vibegrationsStaffAccessTarget(16268).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
    v4BsHmp = _modDef3715["4BsHmp"];
    items[1] = closure_6(Text, obj5);
    tmp6 = closure_6(Card, obj2);
  }
  return tmp6;
};
