// Module ID: 14148
// Function ID: 14149
// Name: UserSettingsWebAuthn
// Dependencies: [19, 14146, 21, 14149, 6343, 2]
// Exports: default

// Module 14148 (UserSettingsWebAuthn)
import closure_2 from "noop" /* 19 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14146 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default function UserSettingsWebAuthn(showNav) {
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
