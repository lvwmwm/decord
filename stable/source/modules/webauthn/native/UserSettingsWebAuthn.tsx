// Module ID: 14966
// Function ID: 14967
// Name: UserSettingsWebAuthn
// Dependencies: [19, 14964, 21, 14967, 7277, 2]
// Exports: default

// Module 14966 (UserSettingsWebAuthn)
import Navigator from "Navigator" /* 7277 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14967 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14964).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default function UserSettingsWebAuthn(showNav) {
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
};
