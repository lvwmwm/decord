// Module ID: 13222
// Function ID: 13223
// Name: ConjureStaffAccessNotice
// Dependencies: [19, 1072, 21, 13223, 1099, 5843, 8165, 1113, 3995, 2]
// Exports: default

// Module 13222 (ConjureStaffAccessNotice)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef3995 from "module_3995" /* 3995 */;
import LinkingDefault from "Linking" /* 5843 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  let conjureStaffAccessTarget;
  let obj = conjureStaffAccessTarget(13223);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    const InlineNotice = tmp(8165).InlineNotice;
    const intl = tmp(1113).intl;
    const format = intl.format;
    const obj3 = { channel: conjureStaffAccessTarget(13223).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    const v6anmu1 = _modDef3995["6anmu1"];
    tmp5 = <InlineNotice type="info" role="none" message={format(v6anmu1, obj3)} />;
  }
  return tmp5;
};
