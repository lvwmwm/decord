// Module ID: 16039
// Function ID: 16040
// Name: ChangeBannerActionSheet
// Dependencies: [5, 19, 17, 6376, 1071, 21, 5043, 575, 6379, 2174, 1112, 16040, 5257, 8137, 16041, 7346, 7546, 7507, 9638, 6140, 6144, 8088, 16042, 16043, 16044, 504, 9503, 6162, 9513, 1089, 11954, 16045, 16047, 5634, 1186, 16052, 2]
// Exports: default

// Module 16039 (ChangeBannerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl13 from "intl" /* 1112 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 11954 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16045 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6376 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp4;
let unpackModuleId;
const TableRowGroup3 = tmp4(6140);
const TableRow6 = tmp4(6144);
const useAnalyticsLocations = tmp4(6379);
const BottomSheetTitleHeader3 = tmp4(7507);
const ActionSheet3 = tmp4(7546);
const _mod8088 = tmp4(8088);
const NitroWheelIcon = tmp4(9638);
const ProfileEditSheetNitroUpdatesExperiment = tmp4(16040);
function ChangeBannerColorRow(arg0) {
  let FormLabel;
  let c0;
  let intl;
  let intl2;
  let items2;
  let obj10;
  let obj11;
  let obj12;
  let obj5;
  let obj6;
  let onSelect;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingChanges;
  let showHexValue;
  let tmp2Result7;
  let tmp2Result8;
  let user;
  ({ user, showHexValue } = arg0);
  if (showHexValue === undefined) {
    showHexValue = true;
  }
  _require = undefined;
  pendingAccentColor = undefined;
  dependencyMap = undefined;
  let tmp = closure_12();
  let obj = require("get initialized");
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => pendingChanges.getPendingChanges());
  ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
  const obj2 = require("RecentAvatarUtils");
  const obj3 = { userId: user.id, image: pendingAvatar };
  let pendingAvatarSrc = obj2.getPendingAvatarSrc(obj3);
  const tmp7 = pendingAccentColor(6162)(user.id);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  const tmp2Result = require("VideoBackground");
  const memoizedImageSourceResult = tmp2Result.memoizedImageSource(pendingAvatarSrc);
  const rgb2int = require("utils/ColorUtils").rgb2int;
  require("utils/ColorUtils");
  const tmp2Result6 = require("VideoBackground");
  const rgb2intResult = rgb2int(tmp2Result6.useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult));
  _require = rgb2intResult;
  if (undefined === pendingAccentColor) {
    let primaryColor;
    if (tmp7 != null) {
      primaryColor = tmp7.primaryColor;
    }
    pendingAccentColor = primaryColor;
  }
  if (pendingAccentColor == null) {
    pendingAccentColor = rgb2intResult;
  }
  if (pendingAccentColor == null) {
    pendingAccentColor = 0;
  }
  function handleChangeColor() {
    const obj = { color: pendingAccentColor, onSelect };
    showCustomColorPickerActionSheetDefault(obj);
  }
  const items1 = [rgb2intResult];
  dependencyMap = react.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 === c0) {
      tmp = null;
    }
    const obj = UserProfileSettingsActionCreators;
    obj.setPendingChanges({ accentColor: tmp });
  }, items1);
  const TableRow = tmp2(6144).TableRow;
  if (showHexValue) {
    const obj4 = { label: closure_9(FormLabel, obj5), trailing: closure_10(View, obj6), onPress: handleChangeColor };
    obj5 = { style: tmp.label, text: intl2.string(require("intl").t.xzNfPz) };
    FormLabel = tmp2(8088).FormLabel;
    intl2 = tmp2(1112).intl;
    obj6 = { style: tmp.selectedColor, children: items2 };
    const obj7 = { style: tmp.bannerColor, color: pendingAccentColor };
    items2 = [closure_9(pendingAccentColor(16047), obj7), , ];
    const obj8 = { style: tmp.selectedColorHex, variant: "body-md/medium", color: "interactive-text-default", children: tmp2Result7.int2hex(pendingAccentColor) };
    const Text = tmp2(5634).Text;
    tmp2Result7 = require("utils/ColorUtils");
    items2[1] = closure_9(Text, obj8);
    const obj9 = { style: tmp.rowArrow, size: require("native").Icon.Sizes.CUSTOM, source: pendingAccentColor(16052) };
    const Icon = tmp2(1186).Icon;
    items2[2] = closure_9(Icon, obj9);
    obj10 = obj4;
  } else {
    obj10 = { label: intl.string(require("intl").t.xzNfPz), trailing: closure_9(pendingAccentColor(16047), obj11), arrow: true, accessibilityValue: obj12, onPress: handleChangeColor };
    intl = tmp2(1112).intl;
    obj11 = { style: tmp.bannerColor, color: pendingAccentColor };
    obj12 = { text: tmp2Result8.int2hex(pendingAccentColor) };
    tmp2Result8 = require("utils/ColorUtils");
  }
  return closure_9(TableRow, obj10);
}
const View = react_native.View;
({ AnalyticsObjects: metroImportDefault, UPLOAD_BANNER_SIZE: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { label: obj2, sublabel: obj3, nitroWheel: obj4, bannerColor: obj5, selectedColor: { flexDirection: "row", alignItems: "center" }, selectedColorHex: { textTransform: "uppercase" }, rowArrow: { height: 13, width: 8, marginLeft: 10, marginTop: 2 }, upsellButton: obj6, remove: obj7, titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { marginLeft: nativeDefault.space.PX_8 };
obj5 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderWidth: 1, borderRadius: nativeDefault.radii.xs, height: 24, minWidth: 24 };
obj6 = { marginTop: nativeDefault.space.PX_8 };
obj7 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default function ChangeBannerActionSheet(isTryItOut) {
  let ActionSheet;
  let ActionSheet2;
  let analyticsLocations;
  let guildId;
  let intl10;
  let intl11;
  let intl12;
  let intl3;
  let intl6;
  let intl7;
  let intl8;
  let items4;
  let items6;
  let obj10;
  let obj21;
  let obj22;
  let obj25;
  let obj26;
  let onGifBannerSelect;
  let require;
  let showRemoveBanner;
  let string2Result;
  let tmp12;
  let tmp18;
  let tmp22;
  let user;
  ({ user, onBannerChange: require, onGifBannerSelect, showRemoveBanner } = isTryItOut);
  ({ analyticsLocations, guildId } = isTryItOut);
  if (showRemoveBanner === undefined) {
    showRemoveBanner = false;
  }
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = function _handleBannerUploadSelect() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp;
          let base64;
          let originalMd5;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              tmp = undefined;
              base64 = undefined;
              originalMd5 = undefined;
              const obj3 = tmp4(c2[12]);
              obj3.hideActionSheet();
              const obj4 = tmp4(c2[13]);
              c2 = 1;
              c3 = 1;
              const obj6 = { value: obj4.openImagePicker(closure_1_8), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            base64 = tmp.base64;
            originalMd5 = tmp.originalMd5;
            if (null != base64) {
              obj = { assetOrigin: tmp(c2[15]).AssetOriginTypes.NEW_ASSET, imageUri: base64, description: "", originalAsset: "Array", originalMd5 };
              const createPendingImage = tmp(c2[14]).createPendingImage;
              const tmp10 = tmp(c2[14]);
              closure_129_0(createPendingImage(obj));
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c3 = 3;
          throw tmp20;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_12();
  const tmp3 = dependencyMap;
  const analyticsLocations2 = obj(6379)(analyticsLocations).analyticsLocations;
  if (!flag) {
    const tmp2Result = obj(2174);
    flag = tmp2Result.canUsePremiumProfileCustomization(user);
  }
  if (null != guildId) {
    let stringResult;
    let tmp4;
    if (null != user.banner) {
      const intl2 = intl13.intl;
      stringResult = intl2.string(intl13.t.jHlJNS);
      tmp4 = require;
    }
    function handleBannerUploadSelect() {
      return obj(...arguments);
    }
    function handleBannerDelete() {
      _require(null);
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
    const tmp4Result = ProfileEditSheetNitroUpdatesExperiment;
    const profileEditSheetNitroUpdatesConfig = tmp4Result.useProfileEditSheetNitroUpdatesConfig("change_banner_action_sheet_native");
    let tmp10 = tmp4;
    if (profileEditSheetNitroUpdatesConfig.enabled) {
      obj = { text: intl7.string(intl13.t.TiLCgw) };
      const tmp2Result3 = obj(16043);
      intl7 = intl13.intl;
      const tmp9Result = closure_9(tmp2Result3, obj);
      let obj2 = { value: analyticsLocations2, children: tmp27(ActionSheet2, obj10) };
      const AnalyticsLocationProvider2 = useAnalyticsLocations.AnalyticsLocationProvider;
      ActionSheet2 = ActionSheet3.ActionSheet;
      let obj3 = { title: intl8.string(intl13.t.tLLYUw) };
      const BottomSheetTitleHeader2 = BottomSheetTitleHeader3.BottomSheetTitleHeader;
      intl8 = intl13.intl;
      const items = [tmp9(BottomSheetTitleHeader2, obj3), ];
      let tmp9Result9 = !flag;
      const TableRowGroup2 = TableRowGroup3.TableRowGroup;
      if (!flag) {
        let obj5 = { user, showHexValue: false };
        tmp9Result9 = tmp9(ChangeBannerColorRow, obj5);
      }
      const items1 = [tmp9Result9, , , , ];
      let tmp9Result10 = !flag;
      if (tmp9Result10) {
        let string3Result;
        const tmp2Result4 = obj(16044);
        const intl9 = intl13.intl;
        const string3 = intl9.string;
        const t3 = intl13.t;
        if (showRemoveBanner) {
          string3Result = string3(t3.N0bC3P);
        } else {
          string3Result = string3(t3["70CYsY"]);
        }
        let obj6 = { label: string3Result, subLabel: intl10.string(intl13.t.OFNrmu), analyticsObject: constants.EDIT_PROFILE_BANNER, skipRoadblock: tmp8 };
        intl10 = intl13.intl;
        tmp9Result10 = tmp9(tmp2Result4, obj6);
      }
      items1[1] = tmp9Result10;
      let tmp9Result11 = flag;
      if (tmp9Result11) {
        let obj7 = { label: intl11.string(intl13.t["MsUY/S"]), subLabel: tmp9Result, onPress: handleBannerUploadSelect };
        const TableRow4 = TableRow6.TableRow;
        intl11 = intl13.intl;
        tmp9Result11 = tmp9(TableRow4, obj7);
      }
      items1[2] = tmp9Result11;
      if (flag) {
        flag = null != onGifBannerSelect;
      }
      if (flag) {
        const obj8 = { label: intl12.string(intl13.t["xsC+/y"]), subLabel: tmp9Result, onPress: onGifBannerSelect };
        const TableRow5 = TableRow6.TableRow;
        intl12 = intl13.intl;
        flag = tmp9(TableRow5, obj8);
      }
      items1[3] = flag;
      if (showRemoveBanner) {
        const obj9 = { label: stringResult, variant: "danger", onPress: handleBannerDelete };
        showRemoveBanner = tmp9(TableRow6.TableRow, obj9);
      }
      obj10 = { children: items };
      const obj11 = { hasIcons: false, children: items1 };
      items1[4] = showRemoveBanner;
      items[1] = closure_10(TableRowGroup2, obj11);
      return closure_9(AnalyticsLocationProvider2, obj2);
    } else {
      let stringResult1;
      const obj12 = { value: analyticsLocations2, children: tmp11(ActionSheet, obj26) };
      const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
      ActionSheet = ActionSheet3.ActionSheet;
      const obj13 = { title: intl3.string(intl13.t.Vgdusv), trailing: tmp12, titleWrapperStyle: null, titleContainerStyle: null };
      const BottomSheetTitleHeader = BottomSheetTitleHeader3.BottomSheetTitleHeader;
      intl3 = intl13.intl;
      ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
      tmp12 = flag && closure_9(NitroWheelIcon.NitroWheelIcon, {});
      const items2 = [tmp9(BottomSheetTitleHeader, obj13), ];
      let tmp9Result12 = null;
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      if (!flag) {
        const obj14 = { user };
        tmp9Result12 = tmp9(ChangeBannerColorRow, obj14);
      }
      const items3 = [tmp9Result12, , , ];
      const obj15 = { style: tmp.label, children: items4 };
      const TableRow = TableRow6.TableRow;
      const FormLabel = _mod8088.FormLabel;
      const intl4 = intl13.intl;
      const string = intl4.string;
      const t = intl13.t;
      if (showRemoveBanner) {
        stringResult1 = string(t.N0bC3P);
      } else {
        stringResult1 = string(t["70CYsY"]);
      }
      const obj16 = { text: stringResult1 };
      items4 = [tmp9(FormLabel, obj16), ];
      let tmp9Result13 = !flag;
      if (tmp9Result13) {
        const obj17 = { style: tmp.nitroWheel, size: "sm" };
        tmp9Result13 = tmp9(NitroWheelIcon.NitroWheelIcon, obj17);
      }
      items4[1] = tmp9Result13;
      const obj18 = { label: closure_10(View, obj15), subLabel: closure_10(tmp18, obj22), onPress: tmp22 };
      const obj19 = { style: tmp.sublabel, numberOfLines: 2, text: string2Result };
      const FormSubLabel = _mod8088.FormSubLabel;
      const intl5 = intl13.intl;
      const string2 = intl5.string;
      const t2 = intl13.t;
      tmp18 = closure_11;
      if (flag) {
        string2Result = string2(t2.IhzZlo);
      } else {
        string2Result = string2(t2.NSTmdO);
      }
      const items5 = [tmp9(FormSubLabel, obj19), ];
      let tmp9Result14 = !flag;
      if (tmp9Result14) {
        const obj20 = { style: tmp.upsellButton, children: closure_9(obj(16042), obj21) };
        obj21 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
        tmp9Result14 = tmp9(tmp15, obj20);
      }
      obj22 = { children: items5 };
      items5[1] = tmp9Result14;
      tmp22 = undefined;
      if (flag) {
        tmp22 = handleBannerUploadSelect;
      }
      items3[1] = closure_9(TableRow, obj18);
      let tmp9Result15 = flag && null != onGifBannerSelect;
      if (tmp9Result15) {
        const obj23 = { label: intl6.string(intl13.t["xsC+/y"]), onPress: onGifBannerSelect };
        const TableRow2 = TableRow6.TableRow;
        intl6 = intl13.intl;
        tmp9Result15 = tmp9(TableRow2, obj23);
      }
      items3[2] = tmp9Result15;
      let tmp9Result16 = showRemoveBanner;
      if (tmp9Result16) {
        const obj24 = { label: closure_9(_mod8088.FormLabel, obj25), onPress: handleBannerDelete };
        const TableRow3 = TableRow6.TableRow;
        obj25 = { style: items6, text: stringResult };
        items6 = [, ];
        ({ label: arr5[0], remove: arr5[1] } = tmp);
        tmp9Result16 = tmp9(TableRow3, obj24);
      }
      obj26 = { children: items2 };
      const obj27 = { hasIcons: false, children: items3 };
      items3[3] = tmp9Result16;
      items2[1] = closure_10(TableRowGroup, obj27);
      return closure_9(AnalyticsLocationProvider, obj12);
    }
  }
  tmp4 = require;
  const intl = intl13.intl;
  stringResult = intl.string(intl13.t.tT9n7D);
};
