// Module ID: 13496
// Function ID: 102445
// Name: UserSettingsWebAuthn
// Dependencies: []
// Exports: default

// Module 13496 (UserSettingsWebAuthn)
let closure_2 = importAll(dependencyMap[0]);
const WebAuthnScreens = arg1(dependencyMap[1]).WebAuthnScreens;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default function UserSettingsWebAuthn(showNav) {
  let initialRouteName;
  ({ navigation: closure_0, initialRouteName } = showNav);
  if (initialRouteName === undefined) {
    initialRouteName = WebAuthnScreens.INIT;
  }
  let flag = showNav.showNav;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let obj = arg1(dependencyMap[3]);
  const screens = obj.getScreens({ isModal: false });
  const layoutEffect = React.useLayoutEffect(() => {
    options.setOptions({ headerShown: flag });
  });
  obj = { screens, initialRouteName };
  obj = { name: initialRouteName };
  const items = [obj];
  obj.initialRouteStack = items;
  obj.useContainer = false;
  return jsx(arg1(dependencyMap[4]).Navigator, obj);
};
