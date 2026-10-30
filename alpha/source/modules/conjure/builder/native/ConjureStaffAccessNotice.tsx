// Module ID: 12961
// Function ID: 12962
// Name: ConjureStaffAccessNotice
// Dependencies: [19, 1072, 21, 12962, 1100, 5704, 8017, 1114, 3865, 2]
// Exports: default

// Module 12961 (ConjureStaffAccessNotice)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import _modDef3865 from "module_3865" /* 3865 */;
import LinkingDefault from "Linking" /* 5704 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  let conjureStaffAccessTarget;
  let obj = conjureStaffAccessTarget(12962);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    const InlineNotice = tmp(8017).InlineNotice;
    const intl = tmp(1114).intl;
    const format = intl.format;
    const obj3 = { channel: conjureStaffAccessTarget(12962).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    const v6anmu1 = _modDef3865["6anmu1"];
    tmp5 = <InlineNotice type="info" role="none" message={format(v6anmu1, obj3)} />;
  }
  return tmp5;
};
