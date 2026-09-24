// Module ID: 16971
// Function ID: 16972
// Name: VibegrationsStaffAccessNotice
// Dependencies: [19, 17, 1078, 21, 4790, 580, 558, 568, 16972, 1105, 4487, 4744, 1119, 3714, 4786, 5856, 2]

// Module 16971 (VibegrationsStaffAccessNotice)
import nativeDefault from "native" /* 580 */;
import router_utils from "router_utils" /* 1105 */;
import _modDef3714 from "module_3714" /* 3714 */;
import LinkingDefault from "Linking" /* 4487 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Routes = fn(1078).Routes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, copy: { flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStaffAccessNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = vibegrationsStaffAccessTarget(568).c(11);
  const tmp4 = closure_8();
  let obj = vibegrationsStaffAccessTarget(568);
  vibegrationsStaffAccessTarget = vibegrationsStaffAccessTarget(16972).useVibegrationsStaffAccessTarget();
  if (cResult[0] !== vibegrationsStaffAccessTarget) {
    const fn = function n() {
      if (null != vibegrationsStaffAccessTarget) {
        if ("channel" === tmp.kind) {
          router_utils.transitionTo(Routes.CHANNEL(tmp.guildId, tmp.channelId));
        } else {
          LinkingDefault.openURL(tmp.url);
        }
      }
    };
    cResult[0] = vibegrationsStaffAccessTarget;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (null == vibegrationsStaffAccessTarget) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
      const tmp10 = closure_6(tmp(4744).CircleInformationIcon, obj3);
      cResult[2] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const intl = tmp(1119).intl;
      const obj4 = { channel: tmp(16972).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp6 };
      const formatResult = intl.format(_modDef3714["4BsHmp"], obj4);
      cResult[3] = tmp6;
      cResult[4] = formatResult;
      let tmp11 = formatResult;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.copy) {
      if (cResult[6] === tmp11) {
        let tmp14 = cResult[7];
      }
      if (cResult[8] === tmp4.row) {
        if (cResult[9] === tmp14) {
          let tmp17 = cResult[10];
        }
        return tmp17;
      }
      const obj5 = { variant: "primary", children: null };
      const obj6 = { style: tmp4.row, children: null };
      const items = [tmp7, tmp14];
      obj6.children = items;
      obj5.children = closure_7(View, obj6);
      const tmp21 = closure_6(tmp(5856).Card, obj5);
      cResult[8] = tmp4.row;
      cResult[9] = tmp14;
      cResult[10] = tmp21;
      tmp17 = tmp21;
    }
    const obj7 = { variant: "text-sm/normal", color: "text-default", style: tmp4.copy, children: tmp11 };
    const tmp16 = closure_6(tmp(4786).Text, obj7);
    cResult[5] = tmp4.copy;
    cResult[6] = tmp11;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  }
}) : (() => {
  const tmp = closure_8();
  vibegrationsStaffAccessTarget = vibegrationsStaffAccessTarget(16972).useVibegrationsStaffAccessTarget();
  [][0] = vibegrationsStaffAccessTarget;
  let tmp6 = null;
  if (null != vibegrationsStaffAccessTarget) {
    let obj2 = { variant: "primary", children: null };
    const obj3 = { style: tmp.row, children: null };
    const obj4 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
    const items = [closure_6(tmp2(4744).CircleInformationIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-default", style: tmp.copy, children: null };
    const intl = tmp2(1119).intl;
    const obj6 = { channel: tmp2(16972).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
    obj5.children = intl.format(_modDef3714["4BsHmp"], obj6);
    items[1] = closure_6(tmp2(4786).Text, obj5);
    obj3.children = items;
    obj2.children = closure_7(View, obj3);
    tmp6 = closure_6(tmp2(5856).Card, obj2);
  }
  return tmp6;
});
