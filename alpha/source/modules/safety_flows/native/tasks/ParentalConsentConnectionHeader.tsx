// Module ID: 20297
// Function ID: 20298
// Name: ParentalConsentConnectionHeader
// Dependencies: [19, 17, 1386, 21, 5012, 5566, 575, 1628, 504, 5603, 6808, 1112, 3174, 2]
// Exports: ParentalConsentConnectionNavbar

// Module 20297 (ParentalConsentConnectionHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import _modDef3174 from "module_3174" /* 3174 */;
import NavigatorConstants from "NavigatorConstants" /* 5566 */;
import Text_Text from "Text/Text" /* 5603 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6808 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
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

export function ParentalConsentConnectionNavbar() {
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
    variant: "body-md/medium",
    color: "text-link",
    style: tmp.logOut,
    onPress() {
      const obj = AuthenticationActionCreatorsDefault;
      return obj.logout("safety_flows_parental_consent_connection");
    },
    children: intl.string(_modDef3174["3HuGuY"])
  };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj4), ];
  let tmp5Result = null != stateFromStores;
  tmp7 = metroRequire;
  if (tmp5Result) {
    const obj5 = { accessibilityRole: "header", variant: "body-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores };
    tmp5Result = tmp5(Text_Text.Text, obj5);
  }
  items1[1] = tmp5Result;
  return hasOwnProperty(View, obj2);
}
