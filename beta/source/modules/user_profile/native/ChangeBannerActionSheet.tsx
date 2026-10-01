// Module ID: 14149
// Function ID: 14150
// Name: ChangeBannerActionSheet
// Dependencies: [5, 19, 17, 7605, 1074, 21, 4836, 576, 6583, 4488, 4800, 5450, 14150, 6410, 6618, 6570, 1115, 8122, 5999, 5917, 8053, 14151, 504, 7614, 7631, 7694, 1092, 7609, 14152, 14154, 4832, 1177, 14159, 2]
// Exports: default

// Module 14149 (ChangeBannerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6583 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14152 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
let unpackModuleId;
function ChangeBannerColorRow(user) {
  let FormLabel;
  let c0;
  let intl;
  let items2;
  let obj5;
  let obj6;
  let onSelect;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingChanges;
  let tmp2Result6;
  user = user.user;
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
  const tmp7 = pendingAccentColor(7631)(user.id);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  const tmp2Result = require("VideoBackground");
  const memoizedImageSourceResult = tmp2Result.memoizedImageSource(pendingAvatarSrc);
  const rgb2int = require("utils/ColorUtils").rgb2int;
  require("utils/ColorUtils");
  const tmp2Result5 = require("VideoBackground");
  const rgb2intResult = rgb2int(tmp2Result5.useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult));
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
  const items1 = [rgb2intResult];
  dependencyMap = react.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 === c0) {
      tmp = null;
    }
    const obj = UserProfileSettingsActionCreators;
    obj.setPendingChanges({ accentColor: tmp });
  }, items1);
  const obj4 = {
    label: closure_9(FormLabel, obj5),
    trailing: closure_10(View, obj6),
    onPress: function handleChangeColor() {
      const obj = { color: pendingAccentColor, onSelect };
      showCustomColorPickerActionSheetDefault(obj);
    }
  };
  const TableRow = tmp2(5917).TableRow;
  obj5 = { style: tmp.label, text: intl.string(require("intl").t.xzNfPz) };
  FormLabel = tmp2(8053).FormLabel;
  intl = tmp2(1115).intl;
  obj6 = { style: tmp.selectedColor, children: items2 };
  items2 = [, , ];
  const obj7 = { style: tmp.bannerColor, color: pendingAccentColor };
  items2[0] = closure_9(pendingAccentColor(14154), obj7);
  const obj8 = { style: tmp.selectedColorHex, variant: "text-md/medium", color: "interactive-text-default", children: tmp2Result6.int2hex(pendingAccentColor) };
  const Text = tmp2(4832).Text;
  tmp2Result6 = require("utils/ColorUtils");
  items2[1] = closure_9(Text, obj8);
  const obj9 = { style: tmp.rowArrow, size: require("native").Icon.Sizes.CUSTOM, source: pendingAccentColor(14159) };
  const Icon = tmp2(1177).Icon;
  items2[2] = closure_9(Icon, obj9);
  return closure_9(TableRow, obj4);
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
  let handleBannerUploadSelect;
  let intl;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj13;
  let removeText;
  let require;
  let showRemoveBanner;
  let string2Result;
  let stringResult;
  let tmp13;
  let tmp7;
  let user;
  ({ user, onBannerChange: require, removeText, showRemoveBanner } = analyticsLocations);
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
              const obj3 = tmp4(c2[10]);
              obj3.hideActionSheet();
              const obj4 = tmp4(c2[11]);
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
              obj = { assetOrigin: tmp(c2[13]).AssetOriginTypes.NEW_ASSET, imageUri: base64, description: "", originalAsset: "Array", originalMd5 };
              const createPendingImage = tmp(c2[12]).createPendingImage;
              const tmp10 = tmp(c2[12]);
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
  const analyticsLocations2 = obj(6583)(analyticsLocations).analyticsLocations;
  if (!flag) {
    const tmp2Result = obj(4488);
    flag = tmp2Result.canUsePremiumProfileCustomization(user);
  }
  const tmp4 = closure_9;
  obj = { value: analyticsLocations2, children: tmp6(ActionSheet, obj13) };
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  ActionSheet = ActionSheet2.ActionSheet;
  let obj2 = { title: intl.string(intl5.t.Vgdusv), trailing: tmp7, titleWrapperStyle: null, titleContainerStyle: null };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl5.intl;
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  tmp7 = flag && tmp4(NitroWheelIcon.NitroWheelIcon, {});
  const items = [tmp4(BottomSheetTitleHeader, obj2), ];
  let tmp4Result = null;
  const TableRowGroup = tmp5(5999).TableRowGroup;
  if (!flag) {
    let obj4 = { user };
    tmp4Result = tmp4(ChangeBannerColorRow, obj4);
  }
  const items1 = [tmp4Result, , ];
  let tmp10 = View;
  let obj5 = { style: tmp.label, children: items2 };
  const TableRow = tmp5(5917).TableRow;
  const FormLabel = tmp5(8053).FormLabel;
  const intl2 = tmp5(1115).intl;
  const string = intl2.string;
  const t = tmp5(1115).t;
  if (showRemoveBanner) {
    stringResult = string(t.N0bC3P);
  } else {
    stringResult = string(t["70CYsY"]);
  }
  items2 = [tmp4(FormLabel, { text: stringResult }), ];
  let tmp4Result3 = !flag;
  if (tmp4Result3) {
    let obj6 = { style: tmp.nitroWheel, size: "sm" };
    tmp4Result3 = tmp4(tmp5(8122).NitroWheelIcon, obj6);
  }
  let obj7 = { label: tmp6(tmp10, obj5), subLabel: tmp6(tmp13, { children: items3 }), onPress: handleBannerUploadSelect };
  items2[1] = tmp4Result3;
  const obj8 = { style: tmp.sublabel, numberOfLines: 2, text: string2Result };
  const FormSubLabel = tmp5(8053).FormSubLabel;
  const intl3 = tmp5(1115).intl;
  const string2 = intl3.string;
  const t2 = tmp5(1115).t;
  tmp13 = closure_11;
  if (flag) {
    string2Result = string2(t2.IhzZlo);
  } else {
    string2Result = string2(t2.NSTmdO);
  }
  items3 = [tmp4(FormSubLabel, obj8), ];
  let tmp4Result4 = !flag;
  if (tmp4Result4) {
    const obj9 = { style: tmp.upsellButton, children: tmp4(obj(14151), obj10) };
    obj10 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
    tmp4Result4 = tmp4(tmp10, obj9);
  }
  items3[1] = tmp4Result4;
  handleBannerUploadSelect = undefined;
  if (flag) {
    handleBannerUploadSelect = function handleBannerUploadSelect() {
      return obj(...arguments);
    };
  }
  items1[1] = tmp4(TableRow, obj7);
  if (showRemoveBanner) {
    const TableRow2 = tmp5(5917).TableRow;
    const obj11 = { style: items4, text: removeText };
    items4 = [, ];
    ({ label: arr5[0], remove: arr5[1] } = tmp);
    const FormLabel2 = tmp5(8053).FormLabel;
    if (removeText == null) {
      const intl4 = tmp5(1115).intl;
      removeText = intl4.string(tmp5(1115).t.tT9n7D);
    }
    const obj12 = {
      label: tmp4(FormLabel2, obj11),
      onPress: function handleBannerDelete() {
          _require(null);
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
    };
    showRemoveBanner = tmp4(TableRow2, obj12);
  }
  obj13 = { children: items };
  items1[2] = showRemoveBanner;
  items[1] = closure_10(TableRowGroup, { hasIcons: false, children: items1 });
  return tmp4(AnalyticsLocationProvider, obj);
};
