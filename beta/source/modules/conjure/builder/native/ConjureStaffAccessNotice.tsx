// Module ID: 13250
// Function ID: 13251
// Name: ConjureStaffAccessNotice
// Dependencies: [19, 1072, 21, 13251, 1099, 5866, 8128, 1113, 4026, 2]
// Exports: default

// Module 13250 (ConjureStaffAccessNotice)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef4026 from "module_4026" /* 4026 */;
import LinkingDefault from "Linking" /* 5866 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  let conjureStaffAccessTarget;
  let obj = conjureStaffAccessTarget(13251);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    const InlineNotice = tmp(8128).InlineNotice;
    const intl = tmp(1113).intl;
    const format = intl.format;
    const obj3 = { channel: conjureStaffAccessTarget(13251).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    const v6anmu1 = _modDef4026["6anmu1"];
    tmp5 = <InlineNotice type="info" role="none" message={format(v6anmu1, obj3)} />;
  }
  return tmp5;
};
