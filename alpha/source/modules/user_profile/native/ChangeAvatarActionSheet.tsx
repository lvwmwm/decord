// Module ID: 16059
// Function ID: 16060
// Name: ChangeAvatarActionSheet
// Dependencies: [19, 17, 1387, 1071, 21, 5043, 575, 504, 2174, 16040, 1112, 7546, 7507, 9638, 6140, 6144, 8088, 16042, 6379, 16044, 16043, 2]
// Exports: default

// Module 16059 (ChangeAvatarActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import ProfileEditSheetNitroUpdatesExperiment from "ProfileEditSheetNitroUpdatesExperiment" /* 16040 */;
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton" /* 16042 */;
import ProfileEditNitroSubLabelDefault from "ProfileEditNitroSubLabel" /* 16043 */;
import ProfileEditNitroUpsellRowDefault from "ProfileEditNitroUpsellRow" /* 16044 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
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
const TableRowGroup3 = tmp2(6140);
const TableRow9 = tmp2(6144);
const useAnalyticsLocations = tmp2(6379);
const BottomSheetTitleHeader3 = tmp2(7507);
const ActionSheet3 = tmp2(7546);
const _mod8088 = tmp2(8088);
const NitroWheelIcon = tmp2(9638);
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
  let analyticsLocations;
  let currentUser;
  let enabled;
  let guildId;
  let handleEditAvatarDecorationSelect;
  let handleRemoveAvatarSelect;
  let handleUploadAvatarSelect;
  let handleUploadGIFAvatarSelect;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
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
  ({ analyticsLocations, guildId } = showRemoveAvatar);
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
  let tmp23Result = null != handleUploadGIFAvatarSelect;
  ({ enabled, skipRoadblock } = profileEditSheetNitroUpdatesConfig);
  if (tmp23Result) {
    tmp23Result = !showAnimatedAvatarUpsell;
  }
  if (null != guildId) {
    let stringResult;
    let tmp23Result4;
    let avatar;
    if (stateFromStores != null) {
      avatar = stateFromStores.avatar;
    }
    if (null != avatar) {
      const intl2 = intl18.intl;
      stringResult = intl2.string(intl18.t.TDjKDm);
    }
    if (enabled) {
      const obj5 = { value: analyticsLocations, children: metroImportDefault(ActionSheet2, obj13) };
      const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
      ActionSheet2 = ActionSheet3.ActionSheet;
      const obj6 = { title: intl11.string(intl18.t.lqaIxI) };
      const BottomSheetTitleHeader2 = BottomSheetTitleHeader3.BottomSheetTitleHeader;
      intl11 = intl18.intl;
      const items1 = [metroRequire(BottomSheetTitleHeader2, obj6), ];
      const TableRowGroup2 = TableRowGroup3.TableRowGroup;
      const obj7 = { label: intl12.string(intl18.t["MsUY/S"]), onPress: handleUploadAvatarSelect };
      const TableRow6 = TableRow9.TableRow;
      intl12 = intl18.intl;
      const items2 = [metroRequire(TableRow6, obj7), , , , ];
      if (showAnimatedAvatarUpsell) {
        const obj8 = { label: intl13.string(intl18.t["xsC+/y"]), subLabel: intl14.string(intl18.t.IsWCZP), analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, skipRoadblock };
        const tmp5Result = ProfileEditNitroUpsellRowDefault;
        intl13 = intl18.intl;
        intl14 = intl18.intl;
        showAnimatedAvatarUpsell = tmp23(tmp5Result, obj8);
      }
      items2[1] = showAnimatedAvatarUpsell;
      if (tmp23Result) {
        const obj9 = { label: intl15.string(intl18.t["xsC+/y"]), subLabel: metroRequire(tmp5Result3, obj10), onPress: handleUploadGIFAvatarSelect };
        const TableRow7 = TableRow9.TableRow;
        intl15 = intl18.intl;
        obj10 = { text: intl16.string(intl18.t.TiLCgw) };
        tmp5Result3 = ProfileEditNitroSubLabelDefault;
        intl16 = intl18.intl;
        tmp23Result = tmp23(TableRow7, obj9);
      }
      items2[2] = tmp23Result;
      let tmp23Result3 = null != handleEditAvatarDecorationSelect;
      if (tmp23Result3) {
        const obj11 = { label: intl17.string(intl18.t.BVcYCx), onPress: handleEditAvatarDecorationSelect };
        const TableRow8 = TableRow9.TableRow;
        intl17 = intl18.intl;
        tmp23Result3 = tmp23(TableRow8, obj11);
      }
      items2[3] = tmp23Result3;
      if (flag) {
        const obj12 = { label: stringResult, variant: "danger", onPress: handleRemoveAvatarSelect };
        flag = tmp23(TableRow9.TableRow, obj12);
      }
      obj13 = { children: items1 };
      const obj14 = { hasIcons: false, children: items2 };
      items2[4] = flag;
      items1[1] = metroImportDefault(TableRowGroup2, obj14);
      tmp23Result4 = tmp23(AnalyticsLocationProvider, obj5);
    } else {
      const ActionSheet = ActionSheet3.ActionSheet;
      const obj15 = { title: intl3.string(intl18.t.lqaIxI), trailing: isPremiumResult, titleWrapperStyle: null, titleContainerStyle: null };
      const BottomSheetTitleHeader = BottomSheetTitleHeader3.BottomSheetTitleHeader;
      intl3 = intl18.intl;
      if (isPremiumResult) {
        isPremiumResult = tmp12(NitroWheelIcon.NitroWheelIcon, {});
      }
      ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
      const items3 = [metroRequire(BottomSheetTitleHeader, obj15), ];
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      const obj16 = { label: intl4.string(intl18.t["MsUY/S"]), subLabel: intl5.string(intl18.t.r5hKOy), onPress: handleUploadAvatarSelect };
      const TableRow = TableRow9.TableRow;
      intl4 = intl18.intl;
      intl5 = intl18.intl;
      const items4 = [metroRequire(TableRow, obj16), , , , ];
      let tmp12Result = tmp23Result;
      if (tmp12Result) {
        const obj17 = { label: intl6.string(intl18.t["xsC+/y"]), onPress: handleUploadGIFAvatarSelect };
        const TableRow2 = TableRow9.TableRow;
        intl6 = intl18.intl;
        tmp12Result = tmp12(TableRow2, obj17);
      }
      items4[1] = tmp12Result;
      let tmp12Result4 = showAnimatedAvatarUpsell;
      if (tmp12Result4) {
        const obj18 = { label: metroImportDefault(View, obj19), subLabel: metroImportDefault(metroImportAll, obj22) };
        obj19 = { style: tmp.upsellTitleContainer, children: items5 };
        const TableRow3 = TableRow9.TableRow;
        const obj20 = { text: intl7.string(intl18.t.xZ0Wot) };
        const FormLabel = _mod8088.FormLabel;
        intl7 = intl18.intl;
        items5 = [metroRequire(FormLabel, obj20), ];
        const obj21 = { style: tmp.nitroWheel, size: "sm" };
        items5[1] = metroRequire(NitroWheelIcon.NitroWheelIcon, obj21);
        obj22 = { children: items6 };
        const obj23 = { style: tmp.sublabel, numberOfLines: 3, text: intl8.string(intl18.t.L3UPqR) };
        const FormSubLabel = _mod8088.FormSubLabel;
        intl8 = intl18.intl;
        items6 = [metroRequire(FormSubLabel, obj23), ];
        const obj24 = { style: tmp.upsellButton, children: metroRequire(tmp5Result4, obj25) };
        obj25 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: intl9.string(intl18.t.mr4K7D) };
        tmp5Result4 = UserProfileUpsellButtonDefault;
        intl9 = intl18.intl;
        items6[1] = metroRequire(View, obj24);
        tmp12Result4 = tmp12(TableRow3, obj18);
      }
      items4[2] = tmp12Result4;
      let tmp12Result5 = null != handleEditAvatarDecorationSelect;
      if (tmp12Result5) {
        const obj26 = { label: metroRequire(View, obj27), onPress: handleEditAvatarDecorationSelect };
        obj27 = { style: tmp.upsellTitleContainer, children: metroRequire(FormLabel2, obj28) };
        const TableRow4 = TableRow9.TableRow;
        obj28 = { text: intl10.string(intl18.t.BVcYCx) };
        FormLabel2 = _mod8088.FormLabel;
        intl10 = intl18.intl;
        tmp12Result5 = tmp12(TableRow4, obj26);
      }
      items4[3] = tmp12Result5;
      let tmp12Result6 = flag;
      if (tmp12Result6) {
        const obj29 = { label: metroRequire(_mod8088.FormLabel, obj30), onPress: handleRemoveAvatarSelect };
        const TableRow5 = TableRow9.TableRow;
        obj30 = { style: items7, text: stringResult };
        items7 = [, ];
        ({ label: arr6[0], remove: arr6[1] } = tmp);
        tmp12Result6 = tmp12(TableRow5, obj29);
      }
      const obj31 = { children: items3 };
      const obj59 = { hasIcons: false, children: items4 };
      items4[4] = tmp12Result6;
      items3[1] = metroImportDefault(TableRowGroup, obj59);
      tmp23Result4 = tmp11(ActionSheet, obj31);
    }
    return tmp23Result4;
  }
  const intl = intl18.intl;
  stringResult = intl.string(intl18.t.twB3fz);
};
