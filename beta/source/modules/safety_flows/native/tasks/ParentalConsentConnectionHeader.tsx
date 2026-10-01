// Module ID: 17706
// Function ID: 17707
// Name: ParentalConsentConnectionHeader
// Dependencies: [19, 17, 1372, 21, 4836, 5994, 576, 1613, 504, 4832, 6010, 1115, 2781, 2]
// Exports: ParentalConsentConnectionNavbar

// Module 17706 (ParentalConsentConnectionHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import _modDef2781 from "module_2781" /* 2781 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let currentUser;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, logOut: obj3 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", left: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = function ParentalConsentConnectionNavbar() {
  let intl;
  let items1;
  let obj3;
  let tmp7;
  const tmp = closure_7();
  const top = useSafeAreaInsetsDefault().top;
  let obj = get_initialized;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let username;
    if (currentUser != null) {
      username = currentUser.username;
    }
    return username;
  });
  const obj2 = { style: { paddingTop: top }, children: tmp7(View, obj3) };
  obj3 = { style: tmp.row, children: items1 };
  const obj4 = {
    accessibilityRole: "button",
    variant: "text-md/medium",
    color: "text-link",
    style: tmp.logOut,
    onPress() {
      const obj = AuthenticationActionCreatorsDefault;
      return obj.logout("safety_flows_parental_consent_connection");
    },
    children: intl.string(_modDef2781["3HuGuY"])
  };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj4), ];
  let tmp5Result = null != stateFromStores;
  tmp7 = metroRequire;
  if (tmp5Result) {
    const obj5 = { accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores };
    tmp5Result = tmp5(Text_Text.Text, obj5);
  }
  items1[1] = tmp5Result;
  return hasOwnProperty(View, obj2);
};
