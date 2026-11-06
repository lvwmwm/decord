// Module ID: 13195
// Function ID: 13196
// Name: ConjureStaffAccessNotice
// Dependencies: [19, 1072, 21, 13196, 1099, 5864, 8116, 1113, 4024, 2]
// Exports: default

// Module 13195 (ConjureStaffAccessNotice)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef4024 from "module_4024" /* 4024 */;
import LinkingDefault from "Linking" /* 5864 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  let conjureStaffAccessTarget;
  let obj = conjureStaffAccessTarget(13196);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    const InlineNotice = tmp(8116).InlineNotice;
    const intl = tmp(1113).intl;
    const format = intl.format;
    const obj3 = { channel: conjureStaffAccessTarget(13196).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    const v6anmu1 = _modDef4024["6anmu1"];
    tmp5 = <InlineNotice type="info" role="none" message={format(v6anmu1, obj3)} />;
  }
  return tmp5;
};
