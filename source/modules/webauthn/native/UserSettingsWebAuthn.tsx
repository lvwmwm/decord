// Module ID: 13847
// Function ID: 13848
// Name: UserSettingsWebAuthn
// Dependencies: [19, 13845, 21, 13848, 5650, 2]
// Exports: default

// Module 13847 (UserSettingsWebAuthn)
import noop from "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default function UserSettingsWebAuthn(showNav) {
  let initialRouteName;
  let require;
  ({ navigation: require, initialRouteName } = showNav);
  if (initialRouteName === undefined) {
    initialRouteName = WebAuthnScreens.INIT;
  }
  let flag = showNav.showNav;
  if (flag === undefined) {
    flag = false;
  }
  const screens = require(flag[3]).getScreens({ isModal: false });
  const layoutEffect = React.useLayoutEffect(() => {
    options.setOptions({ headerShown: flag });
  });
  const initialRouteStack = [{ name: initialRouteName }];
  return jsx(require(flag[4]).Navigator, { screens, initialRouteName, initialRouteStack, useContainer: false });
};
