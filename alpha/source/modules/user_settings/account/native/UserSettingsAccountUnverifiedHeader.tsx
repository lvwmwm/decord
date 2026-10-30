// Module ID: 7161
// Function ID: 7162
// Name: UserSettingsAccountUnverifiedHeader
// Dependencies: [19, 1384, 21, 5009, 575, 6989, 1114, 504, 6974, 5619, 2]
// Exports: default

// Module 7161 (UserSettingsAccountUnverifiedHeader)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6989 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function handleOpenEmailVerification() {
  const obj = EmailVerificationModalActionCreatorsDefault;
  obj.open();
}
function getBannerText(currentUser) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let tmp = null;
  if (null != currentUser) {
    let tmp4;
    if (null == currentUser.email) {
      const obj2 = { title: intl3.string(intl5.t["/yqgqs"]), button: intl4.string(intl5.t.ydw5nX) };
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      tmp4 = obj2;
    } else {
      tmp4 = null;
      if (!currentUser.verified) {
        const obj = { title: intl.string(intl5.t["3sWbf3"]), button: intl2.string(intl5.t["13ofGu"]) };
        intl = intl5.intl;
        intl2 = intl5.intl;
        tmp4 = obj;
      }
    }
    tmp = tmp4;
  }
  return tmp;
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { accountWarning: obj2, accountWarningText: { flex: 1, lineHeight: 16 }, accountWarningButton: obj3 };
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400, height: 36, alignItems: "center", alignSelf: "stretch", flexDirection: "row", paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx");

export default function UserSettingsAccountUnverifiedHeader() {
  let currentUser;
  let items1;
  const tmp = closure_6();
  const items = [UserStore];
  const obj = get_initialized;
  const tmp4 = getBannerText(obj.useStateFromStores(items, () => currentUser.getCurrentUser()));
  let tmp5 = null;
  if (null != tmp4) {
    const obj2 = { accessibilityRole: "button", style: tmp.accountWarning, onPress: handleOpenEmailVerification, children: items1 };
    const PressableOpacity = tmp2(6974).PressableOpacity;
    const obj3 = { style: tmp.accountWarningText, variant: "text-xs/bold", color: "text-overlay-light", children: tmp4.title };
    items1 = [React3(Text_Text.Text, obj3), ];
    const obj4 = { style: tmp.accountWarningButton, variant: "text-xs/medium", color: "text-overlay-light", children: tmp4.button };
    items1[1] = React3(Text_Text.Text, obj4);
    tmp5 = hasOwnProperty(PressableOpacity, obj2);
  }
  return tmp5;
};
export { getBannerText };
