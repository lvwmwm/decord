// Module ID: 16269
// Function ID: 16270
// Name: VibegrationsStaffAccessNotice
// Dependencies: [19, 17, 1086, 21, 4837, 588, 558, 576, 16270, 1113, 4528, 4788, 1127, 3718, 4833, 5918, 2]

// Module 16269 (VibegrationsStaffAccessNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import router_utils from "router_utils" /* 1113 */;
import _modDef3718 from "module_3718" /* 3718 */;
import LinkingDefault from "Linking" /* 4528 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const Routes = Constants.Routes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { row: obj2, copy: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let obj6;
  let tmp6;
  let vibegrationsStaffAccessTarget;
  let obj = vibegrationsStaffAccessTarget(576);
  const cResult = obj.c(11);
  const tmp4 = closure_8();
  let obj2 = vibegrationsStaffAccessTarget(16270);
  vibegrationsStaffAccessTarget = obj2.useVibegrationsStaffAccessTarget();
  if (cResult[0] !== vibegrationsStaffAccessTarget) {
    const fn = function n() {
      if (null != vibegrationsStaffAccessTarget) {
        if ("channel" === vibegrationsStaffAccessTarget.kind) {
          const obj2 = router_utils;
          obj2.transitionTo(Routes.CHANNEL(vibegrationsStaffAccessTarget.guildId, vibegrationsStaffAccessTarget.channelId));
        } else {
          const obj = LinkingDefault;
          obj.openURL(vibegrationsStaffAccessTarget.url);
        }
      }
    };
    cResult[0] = vibegrationsStaffAccessTarget;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (null == vibegrationsStaffAccessTarget) {
    return null;
  } else {
    let tmp7;
    let tmp11;
    const _Symbol = Symbol;
    const row = tmp4.row;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
      const CircleInformationIcon = tmp(4788).CircleInformationIcon;
      const tmp10 = closure_6(CircleInformationIcon, obj3);
      cResult[2] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[2];
    }
    const copy = tmp4.copy;
    if (cResult[3] !== tmp6) {
      const intl = tmp(1127).intl;
      const format = intl.format;
      const obj4 = { channel: vibegrationsStaffAccessTarget(16270).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp6 };
      const v4BsHmp = _modDef3718["4BsHmp"];
      const formatResult = format(v4BsHmp, obj4);
      cResult[3] = tmp6;
      cResult[4] = formatResult;
      tmp11 = formatResult;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.copy) {
      let tmp15;
      if (cResult[6] === tmp11) {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp4.row) {
        let tmp18;
        if (cResult[9] === tmp15) {
          tmp18 = cResult[10];
        }
        return tmp18;
      }
      const obj5 = { variant: "primary", children: closure_7(View, obj6) };
      obj6 = { style: row, children: items };
      items = [tmp7, tmp15];
      const Card = tmp(5918).Card;
      const tmp22 = closure_6(Card, obj5);
      cResult[8] = tmp4.row;
      cResult[9] = tmp15;
      cResult[10] = tmp22;
      tmp18 = tmp22;
    }
    const obj7 = { variant: "text-sm/normal", color: "text-default", style: copy, children: tmp11 };
    const tmp17 = closure_6(vibegrationsStaffAccessTarget(4833).Text, obj7);
    cResult[5] = tmp4.copy;
    cResult[6] = tmp11;
    cResult[7] = tmp17;
    tmp15 = tmp17;
  }
}) : (() => {
  let format;
  let items;
  let obj3;
  let obj6;
  let v4BsHmp;
  let vibegrationsStaffAccessTarget;
  const tmp = closure_8();
  let obj = vibegrationsStaffAccessTarget(16270);
  vibegrationsStaffAccessTarget = obj.useVibegrationsStaffAccessTarget();
  [][0] = vibegrationsStaffAccessTarget;
  let tmp6 = null;
  if (null != vibegrationsStaffAccessTarget) {
    let obj2 = { variant: "primary", children: closure_7(View, obj3) };
    obj3 = { style: tmp.row, children: items };
    const Card = tmp2(5918).Card;
    const obj4 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
    const CircleInformationIcon = tmp2(4788).CircleInformationIcon;
    items = [closure_6(CircleInformationIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-default", style: tmp.copy, children: format(v4BsHmp, obj6) };
    const Text = tmp2(4833).Text;
    const intl = tmp2(1127).intl;
    format = intl.format;
    obj6 = { channel: vibegrationsStaffAccessTarget(16270).VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
    v4BsHmp = _modDef3718["4BsHmp"];
    items[1] = closure_6(Text, obj5);
    tmp6 = closure_6(Card, obj2);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStaffAccessNotice.tsx");

export default tmp3;
