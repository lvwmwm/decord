// Module ID: 17390
// Function ID: 17391
// Name: SuspendedUserPage
// Dependencies: [19, 17, 8739, 8728, 21, 4790, 580, 558, 568, 504, 6864, 4487, 8210, 1119, 7270, 4786, 15041, 7403, 2]

// Module 17390 (SuspendedUserPage)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import LinkingDefault from "Linking" /* 4487 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6864 */;
import _modDef7270 from "module_7270" /* 7270 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7403 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 15041 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8739 */;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8728);
({ AgeCheckStatus: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" }, header: null, text: null, link: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
obj2.header = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
obj2.text = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
obj2.link = { textDecorationLine: "underline" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(13);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function s() {
      return ageCheckStatus.getAgeCheckStatus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[10]);
        closeSuspendedUserResult = obj.closeSuspendedUser();
        return;
      }
    }
    cResult[2] = S;
    const tmp9 = S;
  } else {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[10]);
        closeSuspendedUserResult = obj.closeSuspendedUser();
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[10]);
        closeSuspendedUserResult = obj.closeSuspendedUser();
        return;
      }
    }
    cResult[3] = tmp11;
    const tmp10 = tmp11;
  } else {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[10]);
        closeSuspendedUserResult = obj.closeSuspendedUser();
        return;
      }
    }
  }
  if (cResult[4] === stateFromStores !== constants.VERIFIED) {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[10]);
        closeSuspendedUserResult = obj.closeSuspendedUser();
        return;
      }
    }
  }
  let tmp13 = tmp12;
  if (stateFromStores !== constants.VERIFIED) {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[10]);
        closeSuspendedUserResult = obj.closeSuspendedUser();
        return;
      }
    }
    const obj2 = { style: tmp4.header, children: null };
    const obj3 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
    const intl = tmp(1119).intl;
    obj3.accessibilityLabel = intl.string(tmp(1119).t.cpT0Cq);
    obj3.onPress = tmp9;
    obj3.icon = _modDef7270;
    const items1 = [React5(tmp(8210).IconButton, obj3), ];
    const obj4 = { style: tmp4.text, onPress: tmp10, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
    const intl2 = tmp(1119).intl;
    const items2 = [intl2.string(tmp(1119).t["MG+Bzb"]), " ", ];
    const obj5 = { style: tmp4.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
    const intl3 = tmp(1119).intl;
    obj5.children = intl3.string(tmp(1119).t["9JceHN"]);
    items2[2] = React5(tmp(4786).Text, obj5);
    obj4.children = items2;
    items1[1] = closure_1_8(tmp(4786).Text, obj4);
    obj2.children = items1;
    tmp13 = closure_1_8(View, obj2);
  }
  cResult[4] = stateFromStores !== constants.VERIFIED;
  cResult[5] = tmp4.header;
  cResult[6] = tmp4.link;
  cResult[7] = tmp4.text;
  cResult[8] = tmp13;
}) : (() => {
  const tmp = closure_9();
  const items = [SafetyHubStore];
  let tmp6Result = initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== constants.VERIFIED;
  const obj2 = { style: tmp.container, children: null };
  if (tmp6Result) {
    const obj3 = { style: tmp.header, children: null };
    const obj4 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
    const intl = tmp2(1119).intl;
    obj4.accessibilityLabel = intl.string(tmp2(1119).t.cpT0Cq);
    obj4.onPress = function onPress() {
      AuthenticationActionCreatorsDefault.closeSuspendedUser();
    };
    obj4.icon = _modDef7270;
    const items1 = [tmp5(tmp2(8210).IconButton, obj4), ];
    const obj5 = {
      style: tmp.text,
      onPress() {
          LinkingDefault.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
        },
      variant: "text-xs/medium",
      color: "control-critical-primary-text-default",
      children: null
    };
    const intl2 = tmp2(1119).intl;
    const items2 = [intl2.string(tmp2(1119).t["MG+Bzb"]), " ", ];
    const obj6 = { style: tmp.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
    const intl3 = tmp2(1119).intl;
    obj6.children = intl3.string(tmp2(1119).t["9JceHN"]);
    items2[2] = tmp5(tmp2(4786).Text, obj6);
    obj5.children = items2;
    items1[1] = tmp6(tmp2(4786).Text, obj5);
    obj3.children = items1;
    tmp6Result = tmp6(tmp7, obj3);
  }
  const rect = { top: true, right: true, left: true, children: null };
  const items3 = [tmp6Result, React5(SafetyHubPageDefault, { visible: true })];
  obj2.children = items3;
  rect.children = closure_1_8(View, obj2);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
});
