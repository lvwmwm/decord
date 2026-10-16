// Module ID: 11599
// Function ID: 11600
// Name: ConjureStaffAccessNotice
// Dependencies: [19, 1087, 21, 558, 576, 11600, 1114, 4865, 1128, 3865, 7791, 2]

// Module 11599 (ConjureStaffAccessNotice)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1087 */;
import router_utils from "router_utils" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import LinkingDefault from "Linking" /* 4865 */;
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
  let obj2 = conjureStaffAccessTarget(11600);
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
      const intl = tmp(1128).intl;
      const format = intl.format;
      const obj3 = { channel: conjureStaffAccessTarget(11600).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
      const v6anmu1 = _modDef3865["6anmu1"];
      const formatResult = format(v6anmu1, obj3);
      cResult[2] = tmp5;
      cResult[3] = formatResult;
      tmp7 = formatResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp7) {
      const tmp13 = jsx(conjureStaffAccessTarget(7791).NewInlineNotice, { type: "info", role: "none", message: tmp7 });
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
  let obj = conjureStaffAccessTarget(11600);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp5 = null;
  if (null != conjureStaffAccessTarget) {
    const NewInlineNotice = tmp(7791).NewInlineNotice;
    const intl = tmp(1128).intl;
    const format = intl.format;
    const obj3 = { channel: conjureStaffAccessTarget(11600).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp4 };
    const v6anmu1 = _modDef3865["6anmu1"];
    tmp5 = <NewInlineNotice type="info" role="none" message={format(v6anmu1, obj3)} />;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default tmp2;
