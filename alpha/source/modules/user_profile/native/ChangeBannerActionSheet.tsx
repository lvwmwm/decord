// Module ID: 15881
// Function ID: 15882
// Name: ChangeBannerActionSheet
// Dependencies: [5, 19, 17, 6250, 1071, 21, 4917, 575, 6253, 2173, 15882, 5131, 7995, 15883, 7220, 7420, 7381, 1112, 9496, 6014, 6018, 7947, 15884, 15885, 15886, 504, 9361, 6036, 9371, 1089, 11799, 15887, 15889, 5508, 1186, 15894, 2]
// Exports: default

// Module 15881 (ChangeBannerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 11799 */;
import ProfileEditSheetNitroUpdatesExperiment from "ProfileEditSheetNitroUpdatesExperiment" /* 15882 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 15887 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6250 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
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
const intl13 = tmp4(1112);
const TableRowGroup3 = tmp4(6014);
const TableRow7 = tmp4(6018);
const useAnalyticsLocations = tmp4(6253);
const BottomSheetTitleHeader3 = tmp4(7381);
const ActionSheet3 = tmp4(7420);
const _mod7947 = tmp4(7947);
const NitroWheelIcon = tmp4(9496);
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
  const tmp7 = pendingAccentColor(6036)(user.id);
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
  const TableRow = tmp2(6018).TableRow;
  if (showHexValue) {
    const obj4 = { label: closure_9(FormLabel, obj5), trailing: closure_10(View, obj6), onPress: handleChangeColor };
    obj5 = { style: tmp.label, text: intl2.string(require("intl").t.xzNfPz) };
    FormLabel = tmp2(7947).FormLabel;
    intl2 = tmp2(1112).intl;
    obj6 = { style: tmp.selectedColor, children: items2 };
    const obj7 = { style: tmp.bannerColor, color: pendingAccentColor };
    items2 = [closure_9(pendingAccentColor(15889), obj7), , ];
    const obj8 = { style: tmp.selectedColorHex, variant: "body-md/medium", color: "interactive-text-default", children: tmp2Result7.int2hex(pendingAccentColor) };
    const Text = tmp2(5508).Text;
    tmp2Result7 = require("utils/ColorUtils");
    items2[1] = closure_9(Text, obj8);
    const obj9 = { style: tmp.rowArrow, size: require("native").Icon.Sizes.CUSTOM, source: pendingAccentColor(15894) };
    const Icon = tmp2(1186).Icon;
    items2[2] = closure_9(Icon, obj9);
    obj10 = obj4;
  } else {
    obj10 = { label: intl.string(require("intl").t.xzNfPz), trailing: closure_9(pendingAccentColor(15889), obj11), arrow: true, accessibilityValue: obj12, onPress: handleChangeColor };
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

export default function ChangeBannerActionSheet(analyticsLocations) {
  let ActionSheet;
  let ActionSheet2;
  let intl;
  let intl10;
  let intl11;
  let intl4;
  let intl6;
  let intl7;
  let intl9;
  let items4;
  let items6;
  let obj11;
  let obj22;
  let obj23;
  let obj27;
  let onGifBannerSelect;
  let removeText;
  let require;
  let showRemoveBanner;
  let string2Result;
  let stringResult1;
  let tmp16;
  let tmp20;
  let tmp9;
  let user;
  ({ user, onBannerChange: require, onGifBannerSelect, removeText, showRemoveBanner } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (showRemoveBanner === undefined) {
    showRemoveBanner = false;
  }
  let flag = analyticsLocations.isTryItOut;
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
              const obj3 = tmp4(c2[11]);
              obj3.hideActionSheet();
              const obj4 = tmp4(c2[12]);
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
              obj = { assetOrigin: tmp(c2[14]).AssetOriginTypes.NEW_ASSET, imageUri: base64, description: "", originalAsset: "Array", originalMd5 };
              const createPendingImage = tmp(c2[13]).createPendingImage;
              const tmp10 = tmp(c2[13]);
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
  const analyticsLocations2 = obj(6253)(analyticsLocations).analyticsLocations;
  if (!flag) {
    const tmp2Result = obj(2173);
    flag = tmp2Result.canUsePremiumProfileCustomization(user);
  }
  function handleBannerUploadSelect() {
    return obj(...arguments);
  }
  function handleBannerDelete() {
    _require(null);
    obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }
  const tmp4 = require;
  let obj2 = ProfileEditSheetNitroUpdatesExperiment;
  const profileEditSheetNitroUpdatesConfig = obj2.useProfileEditSheetNitroUpdatesConfig("change_banner_action_sheet_native");
  if (profileEditSheetNitroUpdatesConfig.enabled) {
    obj = { text: intl6.string(intl13.t.TiLCgw) };
    const tmp2Result3 = obj(15885);
    intl6 = intl13.intl;
    const tmp7Result = closure_9(tmp2Result3, obj);
    let obj3 = { value: analyticsLocations2, children: tmp26(ActionSheet2, obj11) };
    const AnalyticsLocationProvider2 = useAnalyticsLocations.AnalyticsLocationProvider;
    ActionSheet2 = ActionSheet3.ActionSheet;
    let obj5 = { title: intl7.string(intl13.t.tLLYUw) };
    const BottomSheetTitleHeader2 = BottomSheetTitleHeader3.BottomSheetTitleHeader;
    intl7 = intl13.intl;
    const items = [tmp7(BottomSheetTitleHeader2, obj5), ];
    let tmp7Result9 = !flag;
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    if (!flag) {
      let obj6 = { user, showHexValue: false };
      tmp7Result9 = tmp7(ChangeBannerColorRow, obj6);
    }
    const items1 = [tmp7Result9, , , , ];
    let tmp7Result10 = !flag;
    if (tmp7Result10) {
      let string3Result;
      const tmp2Result4 = obj(15886);
      const intl8 = intl13.intl;
      const string3 = intl8.string;
      const t3 = intl13.t;
      if (showRemoveBanner) {
        string3Result = string3(t3.N0bC3P);
      } else {
        string3Result = string3(t3["70CYsY"]);
      }
      let obj7 = { label: string3Result, subLabel: intl9.string(intl13.t.OFNrmu), analyticsObject: constants.EDIT_PROFILE_BANNER, skipRoadblock: tmp6 };
      intl9 = intl13.intl;
      tmp7Result10 = tmp7(tmp2Result4, obj7);
    }
    items1[1] = tmp7Result10;
    let tmp7Result11 = flag;
    if (tmp7Result11) {
      const obj8 = { label: intl10.string(intl13.t["MsUY/S"]), subLabel: tmp7Result, onPress: handleBannerUploadSelect };
      const TableRow4 = TableRow7.TableRow;
      intl10 = intl13.intl;
      tmp7Result11 = tmp7(TableRow4, obj8);
    }
    items1[2] = tmp7Result11;
    if (flag) {
      flag = null != onGifBannerSelect;
    }
    if (flag) {
      const obj9 = { label: intl11.string(intl13.t["xsC+/y"]), subLabel: tmp7Result, onPress: onGifBannerSelect };
      const TableRow5 = TableRow7.TableRow;
      intl11 = intl13.intl;
      flag = tmp7(TableRow5, obj9);
    }
    items1[3] = flag;
    if (showRemoveBanner) {
      const TableRow6 = TableRow7.TableRow;
      if (removeText == null) {
        const intl12 = intl13.intl;
        removeText = intl12.string(intl13.t.tT9n7D);
      }
      const obj10 = { label: removeText, variant: "danger", onPress: handleBannerDelete };
      showRemoveBanner = tmp7(TableRow6, obj10);
    }
    obj11 = { children: items };
    const obj12 = { hasIcons: false, children: items1 };
    items1[4] = showRemoveBanner;
    items[1] = closure_10(TableRowGroup2, obj12);
    return closure_9(AnalyticsLocationProvider2, obj3);
  } else {
    let stringResult;
    const obj13 = { value: analyticsLocations2, children: tmp8(ActionSheet, obj27) };
    const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    ActionSheet = ActionSheet3.ActionSheet;
    const obj14 = { title: intl.string(intl13.t.Vgdusv), trailing: tmp9, titleWrapperStyle: null, titleContainerStyle: null };
    const BottomSheetTitleHeader = BottomSheetTitleHeader3.BottomSheetTitleHeader;
    intl = intl13.intl;
    ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
    tmp9 = flag && closure_9(NitroWheelIcon.NitroWheelIcon, {});
    const items2 = [tmp7(BottomSheetTitleHeader, obj14), ];
    let tmp10 = null;
    let tmp7Result12 = null;
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    if (!flag) {
      const obj15 = { user };
      tmp7Result12 = tmp7(ChangeBannerColorRow, obj15);
    }
    const items3 = [tmp7Result12, , , ];
    const obj16 = { style: tmp.label, children: items4 };
    const TableRow = TableRow7.TableRow;
    const FormLabel = _mod7947.FormLabel;
    const intl2 = intl13.intl;
    const string = intl2.string;
    const t = intl13.t;
    if (showRemoveBanner) {
      stringResult = string(t.N0bC3P);
    } else {
      stringResult = string(t["70CYsY"]);
    }
    const obj17 = { text: stringResult };
    items4 = [tmp7(FormLabel, obj17), ];
    let tmp7Result13 = !flag;
    if (tmp7Result13) {
      const obj18 = { style: tmp.nitroWheel, size: "sm" };
      tmp7Result13 = tmp7(NitroWheelIcon.NitroWheelIcon, obj18);
    }
    items4[1] = tmp7Result13;
    const obj19 = { label: closure_10(View, obj16), subLabel: closure_10(tmp16, obj23), onPress: tmp20 };
    const obj20 = { style: tmp.sublabel, numberOfLines: 2, text: string2Result };
    const FormSubLabel = _mod7947.FormSubLabel;
    const intl3 = intl13.intl;
    const string2 = intl3.string;
    const t2 = intl13.t;
    tmp16 = closure_11;
    if (flag) {
      string2Result = string2(t2.IhzZlo);
    } else {
      string2Result = string2(t2.NSTmdO);
    }
    const items5 = [tmp7(FormSubLabel, obj20), ];
    let tmp7Result14 = !flag;
    if (tmp7Result14) {
      const obj21 = { style: tmp.upsellButton, children: closure_9(obj(15884), obj22) };
      obj22 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
      tmp7Result14 = tmp7(tmp13, obj21);
    }
    obj23 = { children: items5 };
    items5[1] = tmp7Result14;
    tmp20 = undefined;
    if (flag) {
      tmp20 = handleBannerUploadSelect;
    }
    items3[1] = closure_9(TableRow, obj19);
    let tmp7Result15 = flag && null != onGifBannerSelect;
    if (tmp7Result15) {
      const obj24 = { label: intl4.string(intl13.t["xsC+/y"]), onPress: onGifBannerSelect };
      const TableRow2 = TableRow7.TableRow;
      intl4 = intl13.intl;
      tmp7Result15 = tmp7(TableRow2, obj24);
    }
    items3[2] = tmp7Result15;
    let tmp7Result16 = showRemoveBanner;
    if (tmp7Result16) {
      const TableRow3 = TableRow7.TableRow;
      const obj25 = { style: items6, text: stringResult1 };
      items6 = [, ];
      ({ label: arr5[0], remove: arr5[1] } = tmp);
      stringResult1 = removeText;
      const FormLabel2 = _mod7947.FormLabel;
      if (removeText == null) {
        const intl5 = intl13.intl;
        stringResult1 = intl5.string(intl13.t.tT9n7D);
      }
      const obj26 = { label: closure_9(FormLabel2, obj25), onPress: handleBannerDelete };
      tmp7Result16 = tmp7(TableRow3, obj26);
    }
    obj27 = { children: items2 };
    const obj28 = { hasIcons: false, children: items3 };
    items3[3] = tmp7Result16;
    items2[1] = closure_10(TableRowGroup, obj28);
    return closure_9(AnalyticsLocationProvider, obj13);
  }
};
