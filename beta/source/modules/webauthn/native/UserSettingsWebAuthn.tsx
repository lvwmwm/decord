// Module ID: 14962
// Function ID: 14963
// Name: UserSettingsWebAuthn
// Dependencies: [19, 14960, 21, 558, 568, 14963, 7278, 2]

// Module 14962 (UserSettingsWebAuthn)
import c from "c" /* 568 */;
import Navigator from "Navigator" /* 7278 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14963 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14960).WebAuthnScreens;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = c.c(9);
  navigation = navigation.navigation;
  ({ initialRouteName, showNav } = navigation);
  if (undefined === initialRouteName) {
    initialRouteName = WebAuthnScreens.INIT;
  }
  const headerShown = tmp5;
  if (cResult[0] !== initialRouteName) {
    const obj2 = { name: initialRouteName };
    const items = [obj2];
    cResult[0] = initialRouteName;
    cResult[1] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const screens = tmp(14963).getScreens({ isModal: false });
    cResult[2] = screens;
    let tmp7 = screens;
    const tmpResult = tmp(14963);
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === navigation) {
    if (cResult[4] === tmp5) {
      let tmp9 = cResult[5];
    }
    const layoutEffect = noop.useLayoutEffect(tmp9);
    if (cResult[6] === initialRouteName) {
      if (cResult[7] === tmp6) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { screens: tmp7, initialRouteName, initialRouteStack: tmp6, useContainer: false };
    const tmp14 = jsx(tmp(7278).Navigator, { screens: tmp7, initialRouteName, initialRouteStack: tmp6, useContainer: false });
    cResult[6] = initialRouteName;
    cResult[7] = tmp6;
    cResult[8] = tmp14;
    tmp12 = tmp14;
  }
  const fn = function b() {
    navigation.setOptions({ headerShown });
  };
  cResult[3] = navigation;
  cResult[4] = undefined !== showNav && showNav;
  cResult[5] = fn;
  tmp9 = fn;
}) : ((showNav) => {
  ({ navigation: require, initialRouteName } = showNav);
  if (initialRouteName === undefined) {
    initialRouteName = WebAuthnScreens.INIT;
  }
  let flag = showNav.showNav;
  if (flag === undefined) {
    flag = false;
  }
  const screens = WebAuthnScreens2.getScreens({ isModal: false });
  const layoutEffect = noop.useLayoutEffect(() => {
    options.setOptions({ headerShown: flag });
  });
  const obj2 = { screens, initialRouteName, initialRouteStack: null, useContainer: false };
  const items = [{ name: initialRouteName }];
  obj2.initialRouteStack = items;
  return jsx(Navigator.Navigator, { screens, initialRouteName, initialRouteStack: null, useContainer: false });
});
