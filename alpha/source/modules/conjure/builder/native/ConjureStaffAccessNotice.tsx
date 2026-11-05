// Module ID: 13230
// Function ID: 13231
// Name: ConjureStaffAccessNotice
// Dependencies: [19, 1072, 21, 13231, 1099, 5846, 8170, 1113, 3995, 2]
// Exports: default

// Module 13230 (ConjureStaffAccessNotice)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef3995 from "module_3995" /* 3995 */;
import LinkingDefault from "Linking" /* 5846 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default function ConjureStaffAccessNotice() {
  let conjureStaffAccessTarget;
  let obj = conjureStaffAccessTarget(13231);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    const InlineNotice = tmp(8170).InlineNotice;
    const intl = tmp(1113).intl;
    const format = intl.format;
    const obj3 = { channel: conjureStaffAccessTarget(13231).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    const v6anmu1 = _modDef3995["6anmu1"];
    tmp5 = <InlineNotice type="info" role="none" message={format(v6anmu1, obj3)} />;
  }
  return tmp5;
};
