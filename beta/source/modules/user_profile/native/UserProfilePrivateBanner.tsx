// Module ID: 12687
// Function ID: 12688
// Name: UserProfilePrivateBanner
// Dependencies: [19, 17, 6629, 21, 4836, 576, 1092, 5409, 4832, 1115, 2]
// Exports: default

// Module 12687 (UserProfilePrivateBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import LockIcon2 from "LockIcon" /* 5409 */;
import Constants from "Constants" /* 6629 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const PROFILE_TOP_LAYER_Z_INDEX = Constants.PROFILE_TOP_LAYER_Z_INDEX;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { banner: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingTop: 18, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: PROFILE_TOP_LAYER_Z_INDEX };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default function UserProfilePrivateBanner(primaryColor) {
  let intl;
  let items1;
  let obj2;
  primaryColor = primaryColor.primaryColor;
  const items = [closure_6().banner, ];
  let tmp3 = null != primaryColor;
  const tmp = hasOwnProperty;
  const tmp2 = View;
  if (tmp3) {
    const obj = { backgroundColor: obj2.int2hex(primaryColor) };
    tmp3 = obj;
    obj2 = utils_ColorUtils;
  }
  const obj3 = { style: items, children: items1 };
  items[1] = tmp3;
  const obj4 = { size: "xs", color: nativeDefault.colors.TEXT_DEFAULT };
  const LockIcon = LockIcon2.LockIcon;
  items1 = [React3(LockIcon, obj4), ];
  const obj5 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl2.t.KPnd2O) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = React3(Text, obj5);
  return tmp(tmp2, obj3);
};
