// Module ID: 18533
// Function ID: 18534
// Name: ConjureStaffAccessNotice
// Dependencies: [19, 1071, 21, 18534, 1098, 5473, 7642, 1112, 4091, 2]
// Exports: default

// Module 18533 (ConjureStaffAccessNotice)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import _modDef4091 from "module_4091" /* 4091 */;
import LinkingDefault from "Linking" /* 5473 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  let conjureStaffAccessTarget;
  let obj = conjureStaffAccessTarget(18534);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    const InlineNotice = tmp(7642).InlineNotice;
    const intl = tmp(1112).intl;
    const format = intl.format;
    const obj3 = { channel: conjureStaffAccessTarget(18534).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    const v6anmu1 = _modDef4091["6anmu1"];
    tmp5 = <InlineNotice type="info" role="none" message={format(v6anmu1, obj3)} />;
  }
  return tmp5;
};
