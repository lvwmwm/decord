// Module ID: 14217
// Function ID: 14218
// Name: UserSettingsWebAuthn
// Dependencies: [19, 14215, 21, 14218, 6421, 2]
// Exports: default

// Module 14217 (UserSettingsWebAuthn)
import Fragment from "Fragment" /* 21 */;
import Navigator from "Navigator" /* 6421 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14215 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14218 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default function UserSettingsWebAuthn(showNav) {
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
};
