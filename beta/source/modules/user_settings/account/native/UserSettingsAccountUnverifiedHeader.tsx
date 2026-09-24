// Module ID: 7276
// Function ID: 7277
// Name: UserSettingsAccountUnverifiedHeader
// Dependencies: [19, 1376, 21, 4790, 580, 5868, 1119, 558, 568, 504, 4786, 5373, 2]

// Module 7276 (UserSettingsAccountUnverifiedHeader)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5868 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

const initialize = PressableOpacity(504);
const Text_Text = PressableOpacity(4786);
const Pressables = PressableOpacity(5373);
require = fn;
function handleOpenEmailVerification() {
  EmailVerificationModalActionCreatorsDefault.open();
}
function getBannerText(stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else if (null == stateFromStores.email) {
    const obj2 = { title: null, button: null };
    const intl3 = util.intl;
    obj2.title = intl3.string(util.t["/yqgqs"]);
    const intl4 = util.intl;
    obj2.button = intl4.string(util.t.ydw5nX);
  } else if (!stateFromStores.verified) {
    const obj = { title: null, button: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["3sWbf3"]);
    const intl2 = util.intl;
    obj.button = intl2.string(util.t["13ofGu"]);
  }
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4790);
let obj2 = { accountWarning: { backgroundColor: nativeDefault.unsafe_rawColors.RED_400, height: 36, alignItems: "center", alignSelf: "stretch", flexDirection: "row", paddingHorizontal: 16 }, accountWarningText: { flex: 1, lineHeight: 16 }, accountWarningButton: null };
let obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400, height: 36, alignItems: "center", alignSelf: "stretch", flexDirection: "row", paddingHorizontal: 16 };
obj2.accountWarningButton = { borderWidth: 1, borderColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 4 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderWidth: 1, borderColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let PressableOpacity = require;
  let tmp = dependencyMap;
  const cResult = c.c(14);
  let accountWarning = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  if (cResult[2] !== stateFromStores) {
    const tmp9 = getBannerText(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (null == tmp7) {
    return null;
  } else {
    if (cResult[4] === tmp7.title) {
      if (cResult[5] === accountWarning.accountWarningText) {
        let tmp10 = cResult[6];
      }
      if (cResult[7] === tmp7.button) {
        if (cResult[8] === accountWarning.accountWarningButton) {
          let tmp13 = cResult[9];
        }
        if (cResult[10] === accountWarning.accountWarning) {
          if (cResult[11] === tmp10) {
          }
        }
        PressableOpacity = Pressables.PressableOpacity;
        const obj2 = { accessibilityRole: "button", style: accountWarning.accountWarning, onPress: handleOpenEmailVerification, children: null };
        const items1 = [tmp10, tmp13];
        obj2.children = items1;
        tmp = hasOwnProperty(PressableOpacity, obj2);
        accountWarning = accountWarning.accountWarning;
        cResult[10] = accountWarning;
        cResult[11] = tmp10;
        cResult[12] = tmp13;
        cResult[13] = tmp;
      }
      const obj3 = { style: accountWarning.accountWarningButton, variant: "text-xs/medium", color: "text-overlay-light", children: tmp7.button };
      const tmp15 = React4(Text_Text.Text, obj3);
      cResult[7] = tmp7.button;
      cResult[8] = accountWarning.accountWarningButton;
      cResult[9] = tmp15;
      tmp13 = tmp15;
    }
    const obj4 = { style: accountWarning.accountWarningText, variant: "text-xs/bold", color: "text-overlay-light", children: tmp7.title };
    const tmp12 = React4(Text_Text.Text, obj4);
    cResult[4] = tmp7.title;
    cResult[5] = accountWarning.accountWarningText;
    cResult[6] = tmp12;
    tmp10 = tmp12;
  }
}) : (() => {
  const tmp = closure_6();
  const items = [UserStore];
  const tmp4 = getBannerText(initialize.useStateFromStores(items, () => currentUser.getCurrentUser()));
  let tmp5 = null;
  if (null != tmp4) {
    const obj2 = { accessibilityRole: "button", style: tmp.accountWarning, onPress: handleOpenEmailVerification, children: null };
    const obj3 = { style: tmp.accountWarningText, variant: "text-xs/bold", color: "text-overlay-light", children: tmp4.title };
    const items1 = [React4(tmp2(4786).Text, obj3), ];
    const obj4 = { style: tmp.accountWarningButton, variant: "text-xs/medium", color: "text-overlay-light", children: tmp4.button };
    items1[1] = React4(tmp2(4786).Text, obj4);
    obj2.children = items1;
    tmp5 = hasOwnProperty(tmp2(5373).PressableOpacity, obj2);
  }
  return tmp5;
});
export { getBannerText };
