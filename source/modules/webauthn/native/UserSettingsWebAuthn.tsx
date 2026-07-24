// Module ID: 13677
// Function ID: 105003
// Name: UserSettingsWebAuthn
// Dependencies: [31, 13675, 33, 13678, 5517, 2]
// Exports: default

// Module 13677 (UserSettingsWebAuthn)
import result from "result";
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
  let obj = require(flag[3]);
  const screens = obj.getScreens({ isModal: false });
  const layoutEffect = React.useLayoutEffect(() => {
    options.setOptions({ headerShown: flag });
  });
  obj = { screens, initialRouteName };
  obj = { name: initialRouteName };
  const items = [obj];
  obj.initialRouteStack = items;
  obj.useContainer = false;
  return jsx(require(flag[4]).Navigator, { name: initialRouteName });
};
