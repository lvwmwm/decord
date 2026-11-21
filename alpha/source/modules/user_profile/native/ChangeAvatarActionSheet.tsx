// Module ID: 15937
// Function ID: 15938
// Name: ChangeAvatarActionSheet
// Dependencies: [19, 17, 1386, 1071, 21, 4913, 575, 504, 2173, 15835, 7553, 7515, 1112, 8952, 7348, 7045, 7709, 15837, 7520, 15839, 15838, 2]
// Exports: default

// Module 15937 (ChangeAvatarActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2173 */;
import ProfileEditSheetNitroUpdatesExperiment from "ProfileEditSheetNitroUpdatesExperiment" /* 15835 */;
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton" /* 15837 */;
import ProfileEditNitroSubLabelDefault from "ProfileEditNitroSubLabel" /* 15838 */;
import ProfileEditNitroUpsellRowDefault from "ProfileEditNitroUpsellRow" /* 15839 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp2;
const intl18 = tmp2(1112);
const TableRow10 = tmp2(7045);
const TableRowGroup3 = tmp2(7348);
const BottomSheetTitleHeader3 = tmp2(7515);
const useAnalyticsLocations = tmp2(7520);
const ActionSheet3 = tmp2(7553);
const _mod7709 = tmp2(7709);
const NitroWheelIcon = tmp2(8952);
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
let closure_10 = [];
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

export default function ChangeAvatarActionSheet(showRemoveAvatar) {
  let ActionSheet2;
  let FormLabel2;
  let FormLabel3;
  let currentUser;
  let enabled;
  let handleEditAvatarDecorationSelect;
  let handleRemoveAvatarSelect;
  let handleUploadAvatarSelect;
  let handleUploadGIFAvatarSelect;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj13;
  let obj19;
  let obj22;
  let obj25;
  let obj27;
  let obj28;
  let obj30;
  let showAnimatedAvatarUpsell;
  let skipRoadblock;
  let tmp21Result4;
  let tmp5Result3;
  let tmp5Result4;
  ({ handleUploadAvatarSelect, handleRemoveAvatarSelect, handleUploadGIFAvatarSelect, handleEditAvatarDecorationSelect, showAnimatedAvatarUpsell } = showRemoveAvatar);
  if (showAnimatedAvatarUpsell === undefined) {
    showAnimatedAvatarUpsell = false;
  }
  let flag = showRemoveAvatar.showRemoveAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let analyticsLocations = showRemoveAvatar.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = closure_10;
  }
  const tmp = closure_9();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = PremiumUtilsDefault;
  let isPremiumResult = obj2.isPremium(stateFromStores);
  const obj3 = ProfileEditSheetNitroUpdatesExperiment;
  const profileEditSheetNitroUpdatesConfig = obj3.useProfileEditSheetNitroUpdatesConfig("change_avatar_action_sheet_native");
  let tmp21Result = null != handleUploadGIFAvatarSelect;
  ({ enabled, skipRoadblock } = profileEditSheetNitroUpdatesConfig);
  if (tmp21Result) {
    tmp21Result = !showAnimatedAvatarUpsell;
  }
  if (enabled) {
    const obj5 = { value: analyticsLocations, children: metroImportDefault(ActionSheet2, obj13) };
    const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    ActionSheet2 = ActionSheet3.ActionSheet;
    const obj6 = { title: intl10.string(intl18.t.lqaIxI) };
    const BottomSheetTitleHeader2 = BottomSheetTitleHeader3.BottomSheetTitleHeader;
    intl10 = intl18.intl;
    const items1 = [metroRequire(BottomSheetTitleHeader2, obj6), ];
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    const obj7 = { label: intl11.string(intl18.t["MsUY/S"]), onPress: handleUploadAvatarSelect };
    const TableRow6 = TableRow10.TableRow;
    intl11 = intl18.intl;
    const items2 = [metroRequire(TableRow6, obj7), , , , ];
    if (showAnimatedAvatarUpsell) {
      const obj8 = { label: intl12.string(intl18.t["xsC+/y"]), subLabel: intl13.string(intl18.t.IsWCZP), analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, skipRoadblock };
      const tmp5Result = ProfileEditNitroUpsellRowDefault;
      intl12 = intl18.intl;
      intl13 = intl18.intl;
      showAnimatedAvatarUpsell = tmp21(tmp5Result, obj8);
    }
    items2[1] = showAnimatedAvatarUpsell;
    if (tmp21Result) {
      const obj9 = { label: intl14.string(intl18.t["xsC+/y"]), subLabel: metroRequire(tmp5Result3, obj10), onPress: handleUploadGIFAvatarSelect };
      const TableRow7 = TableRow10.TableRow;
      intl14 = intl18.intl;
      obj10 = { text: intl15.string(intl18.t.TiLCgw) };
      tmp5Result3 = ProfileEditNitroSubLabelDefault;
      intl15 = intl18.intl;
      tmp21Result = tmp21(TableRow7, obj9);
    }
    items2[2] = tmp21Result;
    let tmp21Result3 = null != handleEditAvatarDecorationSelect;
    if (tmp21Result3) {
      const obj11 = { label: intl16.string(intl18.t.BVcYCx), onPress: handleEditAvatarDecorationSelect };
      const TableRow8 = TableRow10.TableRow;
      intl16 = intl18.intl;
      tmp21Result3 = tmp21(TableRow8, obj11);
    }
    items2[3] = tmp21Result3;
    if (flag) {
      const obj12 = { label: intl17.string(intl18.t.twB3fz), variant: "danger", onPress: handleRemoveAvatarSelect };
      const TableRow9 = TableRow10.TableRow;
      intl17 = intl18.intl;
      flag = tmp21(TableRow9, obj12);
    }
    obj13 = { children: items1 };
    const obj14 = { hasIcons: false, children: items2 };
    items2[4] = flag;
    items1[1] = metroImportDefault(TableRowGroup2, obj14);
    tmp21Result4 = tmp21(AnalyticsLocationProvider, obj5);
  } else {
    const ActionSheet = ActionSheet3.ActionSheet;
    const obj15 = { title: intl.string(intl18.t.lqaIxI), trailing: isPremiumResult, titleWrapperStyle: null, titleContainerStyle: null };
    const BottomSheetTitleHeader = BottomSheetTitleHeader3.BottomSheetTitleHeader;
    intl = intl18.intl;
    if (isPremiumResult) {
      isPremiumResult = tmp10(NitroWheelIcon.NitroWheelIcon, {});
    }
    ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
    const items3 = [metroRequire(BottomSheetTitleHeader, obj15), ];
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    const obj16 = { label: intl2.string(intl18.t["MsUY/S"]), subLabel: intl3.string(intl18.t.r5hKOy), onPress: handleUploadAvatarSelect };
    const TableRow = TableRow10.TableRow;
    intl2 = intl18.intl;
    intl3 = intl18.intl;
    const items4 = [metroRequire(TableRow, obj16), , , , ];
    let tmp10Result = tmp21Result;
    if (tmp10Result) {
      const obj17 = { label: intl4.string(intl18.t["xsC+/y"]), onPress: handleUploadGIFAvatarSelect };
      const TableRow2 = TableRow10.TableRow;
      intl4 = intl18.intl;
      tmp10Result = tmp10(TableRow2, obj17);
    }
    items4[1] = tmp10Result;
    let tmp10Result4 = showAnimatedAvatarUpsell;
    if (tmp10Result4) {
      const obj18 = { label: metroImportDefault(View, obj19), subLabel: metroImportDefault(metroImportAll, obj22) };
      obj19 = { style: tmp.upsellTitleContainer, children: items5 };
      const TableRow3 = TableRow10.TableRow;
      const obj20 = { text: intl5.string(intl18.t.xZ0Wot) };
      const FormLabel = _mod7709.FormLabel;
      intl5 = intl18.intl;
      items5 = [metroRequire(FormLabel, obj20), ];
      const obj21 = { style: tmp.nitroWheel, size: "sm" };
      items5[1] = metroRequire(NitroWheelIcon.NitroWheelIcon, obj21);
      obj22 = { children: items6 };
      const obj23 = { style: tmp.sublabel, numberOfLines: 3, text: intl6.string(intl18.t.L3UPqR) };
      const FormSubLabel = _mod7709.FormSubLabel;
      intl6 = intl18.intl;
      items6 = [metroRequire(FormSubLabel, obj23), ];
      const obj24 = { style: tmp.upsellButton, children: metroRequire(tmp5Result4, obj25) };
      obj25 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: intl7.string(intl18.t.mr4K7D) };
      tmp5Result4 = UserProfileUpsellButtonDefault;
      intl7 = intl18.intl;
      items6[1] = metroRequire(View, obj24);
      tmp10Result4 = tmp10(TableRow3, obj18);
    }
    items4[2] = tmp10Result4;
    let tmp10Result5 = null != handleEditAvatarDecorationSelect;
    if (tmp10Result5) {
      const obj26 = { label: metroRequire(View, obj27), onPress: handleEditAvatarDecorationSelect };
      obj27 = { style: tmp.upsellTitleContainer, children: metroRequire(FormLabel2, obj28) };
      const TableRow4 = TableRow10.TableRow;
      obj28 = { text: intl8.string(intl18.t.BVcYCx) };
      FormLabel2 = _mod7709.FormLabel;
      intl8 = intl18.intl;
      tmp10Result5 = tmp10(TableRow4, obj26);
    }
    items4[3] = tmp10Result5;
    let tmp10Result6 = flag;
    if (tmp10Result6) {
      const obj29 = { label: metroRequire(FormLabel3, obj30), onPress: handleRemoveAvatarSelect };
      const TableRow5 = TableRow10.TableRow;
      obj30 = { style: items7, text: intl9.string(intl18.t.twB3fz) };
      items7 = [, ];
      ({ label: arr6[0], remove: arr6[1] } = tmp);
      FormLabel3 = _mod7709.FormLabel;
      intl9 = intl18.intl;
      tmp10Result6 = tmp10(TableRow5, obj29);
    }
    const obj31 = { children: items3 };
    const obj59 = { hasIcons: false, children: items4 };
    items4[4] = tmp10Result6;
    items3[1] = metroImportDefault(TableRowGroup, obj59);
    tmp21Result4 = tmp9(ActionSheet, obj31);
  }
  return tmp21Result4;
};
