// Module ID: 17074
// Function ID: 17075
// Name: ConjureStaffAccessNotice
// Dependencies: [19, 1085, 21, 558, 576, 17075, 1112, 4806, 1126, 3849, 7570, 2]

// Module 17074 (ConjureStaffAccessNotice)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import _modDef3849 from "module_3849" /* 3849 */;
import LinkingDefault from "Linking" /* 4806 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureStaffAccessNotice() {
  let conjureStaffAccessTarget;
  let tmp5;
  let obj = conjureStaffAccessTarget(576);
  const cResult = obj.c(6);
  let obj2 = conjureStaffAccessTarget(17075);
  conjureStaffAccessTarget = obj2.useConjureStaffAccessTarget();
  if (cResult[0] !== conjureStaffAccessTarget) {
    const fn = function n() {
      if (null != conjureStaffAccessTarget) {
        if ("channel" === conjureStaffAccessTarget.kind) {
          const obj2 = router_utils;
          obj2.transitionTo(Routes.CHANNEL(conjureStaffAccessTarget.guildId, conjureStaffAccessTarget.channelId));
        } else {
          const obj = LinkingDefault;
          obj.openURL(conjureStaffAccessTarget.url);
        }
      }
    };
    cResult[0] = conjureStaffAccessTarget;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let tmp6 = null;
  if (null != conjureStaffAccessTarget) {
    let tmp7;
    let tmp11;
    if (cResult[2] !== tmp5) {
      const intl = tmp(1126).intl;
      const format = intl.format;
      const obj3 = { channel: conjureStaffAccessTarget(17075).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
      const v6anmu1 = _modDef3849["6anmu1"];
      const formatResult = format(v6anmu1, obj3);
      cResult[2] = tmp5;
      cResult[3] = formatResult;
      tmp7 = formatResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp7) {
      const tmp13 = jsx(conjureStaffAccessTarget(7570).NewInlineNotice, { type: "info", role: "static", message: tmp7 });
      cResult[4] = tmp7;
      cResult[5] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    tmp6 = tmp11;
  }
  return tmp6;
}) : (function ConjureStaffAccessNotice() {
  let conjureStaffAccessTarget;
  let obj = conjureStaffAccessTarget(17075);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    const NewInlineNotice = tmp(7570).NewInlineNotice;
    const intl = tmp(1126).intl;
    const format = intl.format;
    const obj3 = { channel: conjureStaffAccessTarget(17075).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    const v6anmu1 = _modDef3849["6anmu1"];
    tmp5 = <NewInlineNotice type="info" role="static" message={format(v6anmu1, obj3)} />;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default tmp2;
