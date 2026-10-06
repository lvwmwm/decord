// Module ID: 14205
// Function ID: 14206
// Name: UserSettingsWebAuthn
// Dependencies: [19, 14203, 21, 558, 576, 14206, 6421, 2]

// Module 14205 (UserSettingsWebAuthn)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Navigator from "Navigator" /* 6421 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14203 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14206 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let initialRouteName;
  let showNav;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(9);
  navigation = navigation.navigation;
  ({ initialRouteName, showNav } = navigation);
  if (undefined === initialRouteName) {
    initialRouteName = WebAuthnScreens.INIT;
  }
  let closure_1 = tmp5;
  if (cResult[0] !== initialRouteName) {
    const items = [{ name: initialRouteName }];
    const obj2 = { name: initialRouteName };
    cResult[0] = initialRouteName;
    cResult[1] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = WebAuthnScreens2;
    const screens = tmpResult.getScreens({ isModal: false });
    cResult[2] = screens;
    tmp7 = screens;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === navigation) {
    let tmp9;
    if (cResult[4] === (undefined !== showNav && showNav)) {
      tmp9 = cResult[5];
    }
    const layoutEffect = react.useLayoutEffect(tmp9);
    if (cResult[6] === initialRouteName) {
      let tmp12;
      if (cResult[7] === tmp6) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    const tmp14 = jsx(Navigator.Navigator, { screens: tmp7, initialRouteName, initialRouteStack: tmp6, useContainer: false });
    cResult[6] = initialRouteName;
    cResult[7] = tmp6;
    cResult[8] = tmp14;
    tmp12 = tmp14;
  }
  const fn = function b() {
    const obj = { headerShown };
    navigation.setOptions(obj);
  };
  cResult[3] = navigation;
  cResult[4] = undefined !== showNav && showNav;
  cResult[5] = fn;
  tmp9 = fn;
}) : ((showNav) => {
  let closure_129_0;
  let initialRouteName;
  ({ navigation: closure_129_0, initialRouteName } = showNav);
  if (initialRouteName === undefined) {
    initialRouteName = WebAuthnScreens.INIT;
  }
  let flag = showNav.showNav;
  if (flag === undefined) {
    flag = false;
  }
  let obj = WebAuthnScreens2;
  const screens = obj.getScreens({ isModal: false });
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = { headerShown: flag };
    options.setOptions(obj);
  });
  const items = [{ name: initialRouteName }];
  return jsx(Navigator.Navigator, { screens, initialRouteName, initialRouteStack: items, useContainer: false });
});
const result = size.fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default tmp2;
