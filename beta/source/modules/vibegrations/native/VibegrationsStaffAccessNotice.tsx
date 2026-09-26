// Module ID: 16961
// Function ID: 16962
// Name: VibegrationsStaffAccessNotice
// Dependencies: [19, 17, 1074, 21, 4788, 576, 16962, 1101, 4483, 5856, 4742, 4784, 1115, 3710, 2]
// Exports: default

// Module 16961 (VibegrationsStaffAccessNotice)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import _modDef3710 from "module_3710" /* 3710 */;
import LinkingDefault from "Linking" /* 4483 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Routes = fn(1074).Routes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, copy: { flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStaffAccessNotice.tsx");

export default function VibegrationsStaffAccessNotice() {
  const tmp = closure_8();
  vibegrationsStaffAccessTarget = vibegrationsStaffAccessTarget(16962).useVibegrationsStaffAccessTarget();
  [][0] = vibegrationsStaffAccessTarget;
  let tmp6 = null;
  if (null != vibegrationsStaffAccessTarget) {
    let obj2 = { variant: "primary", children: null };
    const obj3 = { style: tmp.row, children: null };
    const obj4 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
    const items = [closure_6(tmp2(4742).CircleInformationIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-default", style: tmp.copy, children: null };
    const intl = tmp2(1115).intl;
    const obj6 = { channel: tmp2(16962).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
    obj5.children = intl.format(_modDef3710["4BsHmp"], obj6);
    items[1] = closure_6(tmp2(4784).Text, obj5);
    obj3.children = items;
    obj2.children = closure_7(View, obj3);
    tmp6 = closure_6(tmp2(5856).Card, obj2);
  }
  return tmp6;
};
