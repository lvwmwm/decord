// Module ID: 14167
// Function ID: 14168
// Name: ChangeAvatarActionSheet
// Dependencies: [19, 17, 1372, 1074, 21, 4836, 576, 504, 4488, 6618, 6570, 1115, 8122, 5999, 5917, 8053, 14151, 2]
// Exports: default

// Module 14167 (ChangeAvatarActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl10 from "intl" /* 1115 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp5;
const UserProfileUpsellButtonDefault = tmp5(14151);
const View = react_native.View;
const AnalyticsObjects = Constants.AnalyticsObjects;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { nitroWheel: obj2, sublabel: obj3, label: obj4, remove: obj5, upsellButton: obj6, upsellTitleContainer: { flexDirection: "row", alignItems: "flex-end" }, titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" } };
obj2 = { marginLeft: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { marginBottom: 4, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
obj5 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj6 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

export default function ChangeAvatarActionSheet(showRemoveAvatar) {
  let FormLabel2;
  let FormLabel3;
  let currentUser;
  let handleEditAvatarDecorationSelect;
  let handleRemoveAvatarSelect;
  let handleUploadAvatarSelect;
  let handleUploadGIFAvatarSelect;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items3;
  let items4;
  let items5;
  let obj11;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj8;
  let showAnimatedAvatarUpsell;
  let tmp5Result;
  ({ handleUploadGIFAvatarSelect, handleEditAvatarDecorationSelect, showAnimatedAvatarUpsell } = showRemoveAvatar);
  ({ handleUploadAvatarSelect, handleRemoveAvatarSelect } = showRemoveAvatar);
  if (showAnimatedAvatarUpsell === undefined) {
    showAnimatedAvatarUpsell = false;
  }
  let flag = showRemoveAvatar.showRemoveAvatar;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = PremiumUtilsDefault;
  let isPremiumResult = obj2.isPremium(stateFromStores);
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj4 = { title: intl.string(intl10.t.lqaIxI), trailing: isPremiumResult, titleWrapperStyle: null, titleContainerStyle: null };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl10.intl;
  if (isPremiumResult) {
    isPremiumResult = tmp8(tmp2(8122).NitroWheelIcon, {});
  }
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  const items1 = [metroRequire(BottomSheetTitleHeader, obj4), ];
  const TableRowGroup = tmp2(5999).TableRowGroup;
  const obj5 = { label: intl2.string(intl10.t["MsUY/S"]), subLabel: intl3.string(intl10.t.r5hKOy), onPress: handleUploadAvatarSelect };
  const TableRow = tmp2(5917).TableRow;
  intl2 = tmp2(1115).intl;
  intl3 = tmp2(1115).intl;
  const items2 = [metroRequire(TableRow, obj5), , , , ];
  let tmp8Result = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp8Result) {
    const obj6 = { label: intl4.string(intl10.t["xsC+/y"]), onPress: handleUploadGIFAvatarSelect };
    const TableRow2 = tmp2(5917).TableRow;
    intl4 = tmp2(1115).intl;
    tmp8Result = tmp8(TableRow2, obj6);
  }
  items2[1] = tmp8Result;
  if (showAnimatedAvatarUpsell) {
    const obj7 = { label: metroImportDefault(View, obj8), subLabel: metroImportDefault(metroImportAll, obj11) };
    obj8 = { style: tmp.upsellTitleContainer, children: items3 };
    const TableRow3 = tmp2(5917).TableRow;
    const obj9 = { text: intl5.string(intl10.t.xZ0Wot) };
    const FormLabel = tmp2(8053).FormLabel;
    intl5 = tmp2(1115).intl;
    items3 = [metroRequire(FormLabel, obj9), ];
    const obj10 = { style: tmp.nitroWheel, size: "sm" };
    items3[1] = metroRequire(NitroWheelIcon.NitroWheelIcon, obj10);
    obj11 = { children: items4 };
    const obj12 = { style: tmp.sublabel, numberOfLines: 3, text: intl6.string(intl10.t.L3UPqR) };
    const FormSubLabel = tmp2(8053).FormSubLabel;
    intl6 = tmp2(1115).intl;
    items4 = [metroRequire(FormSubLabel, obj12), ];
    const obj13 = { style: tmp.upsellButton, children: metroRequire(tmp5Result, obj14) };
    obj14 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: intl7.string(intl10.t.mr4K7D) };
    tmp5Result = UserProfileUpsellButtonDefault;
    intl7 = tmp2(1115).intl;
    items4[1] = metroRequire(View, obj13);
    showAnimatedAvatarUpsell = tmp8(TableRow3, obj7);
  }
  items2[2] = showAnimatedAvatarUpsell;
  let tmp8Result2 = null != handleEditAvatarDecorationSelect;
  if (tmp8Result2) {
    const obj15 = { label: metroRequire(View, obj16), onPress: handleEditAvatarDecorationSelect };
    obj16 = { style: tmp.upsellTitleContainer, children: metroRequire(FormLabel2, obj17) };
    const TableRow4 = tmp2(5917).TableRow;
    obj17 = { text: intl8.string(intl10.t.BVcYCx) };
    FormLabel2 = tmp2(8053).FormLabel;
    intl8 = tmp2(1115).intl;
    tmp8Result2 = tmp8(TableRow4, obj15);
  }
  items2[3] = tmp8Result2;
  if (flag) {
    const obj18 = { label: metroRequire(FormLabel3, obj19), onPress: handleRemoveAvatarSelect };
    const TableRow5 = tmp2(5917).TableRow;
    obj19 = { style: items5, text: intl9.string(intl10.t.twB3fz) };
    items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    FormLabel3 = tmp2(8053).FormLabel;
    intl9 = tmp2(1115).intl;
    flag = tmp8(TableRow5, obj18);
  }
  const obj36 = { children: items1 };
  items2[4] = flag;
  items1[1] = metroImportDefault(TableRowGroup, { hasIcons: false, children: items2 });
  return metroImportDefault(ActionSheet, obj36);
};
