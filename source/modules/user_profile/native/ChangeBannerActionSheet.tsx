// Module ID: 13565
// Function ID: 104293
// Name: ChangeBannerColorRow
// Dependencies: [5, 31, 27, 7841, 653, 33, 4130, 689, 5464, 3776, 4098, 4674, 5500, 5186, 1212, 7871, 5503, 5165, 7495, 13566, 566, 7854, 7887, 7884, 665, 7844, 13567, 13569, 4126, 1273, 13574, 2]
// Exports: default

// Module 13565 (ChangeBannerColorRow)
import closure_3 from "jsxProd";
import set from "set";
import { View } from "styles";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function ChangeBannerColorRow(user) {
  user = user.user;
  let _require;
  let num2;
  let dependencyMap;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => outer1_6.getPendingChanges());
  let pendingAccentColor = stateFromStoresObject.pendingAccentColor;
  let obj1 = _require(7854);
  obj = { userId: user.id, image: stateFromStoresObject.pendingAvatar };
  let pendingAvatarSrc = obj1.getPendingAvatarSrc(obj);
  const tmp4 = num2(7887)(user.id);
  if (null == pendingAvatarSrc) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  let obj3 = _require(7884);
  let obj4 = _require(665);
  let obj5 = _require(7884);
  const rgb2intResult = obj4.rgb2int(obj5.useDominantColorFromImage(pendingAvatarSrc, obj3.memoizedImageSource(pendingAvatarSrc)));
  _require = rgb2intResult;
  if (undefined === pendingAccentColor) {
    let primaryColor;
    if (null != tmp4) {
      primaryColor = tmp4.primaryColor;
    }
    pendingAccentColor = primaryColor;
  }
  let tmp8 = rgb2intResult;
  if (null != pendingAccentColor) {
    tmp8 = pendingAccentColor;
  }
  num2 = 0;
  if (null != tmp8) {
    num2 = tmp8;
  }
  const items1 = [rgb2intResult];
  dependencyMap = React.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 === _undefined) {
      tmp = null;
    }
    let obj = _undefined(7844);
    obj = { accentColor: tmp };
    obj.setPendingChanges(obj);
  }, items1);
  obj = {};
  obj1 = { style: tmp.label };
  const intl = _require(1212).intl;
  obj1.text = intl.string(_require(1212).t.xzNfPz);
  obj.label = callback(_require(7495).FormLabel, obj1);
  const obj2 = { style: tmp.selectedColor };
  obj3 = { style: tmp.bannerColor, color: num2 };
  const items2 = [callback(num2(13569), obj3), , ];
  obj4 = { style: tmp.selectedColorHex, variant: "text-md/medium", color: "interactive-text-default" };
  const memoizedImageSourceResult = obj3.memoizedImageSource(pendingAvatarSrc);
  obj4.children = _require(665).int2hex(num2);
  items2[1] = callback(_require(4126).Text, obj4);
  obj5 = { style: tmp.rowArrow, size: _require(1273).Icon.Sizes.CUSTOM, source: num2(13574) };
  items2[2] = callback(_require(1273).Icon, obj5);
  obj2.children = items2;
  obj.trailing = callback2(View, obj2);
  obj.onPress = function handleChangeColor() {
    num2(13567)({ color: num2, onSelect: dependencyMap });
  };
  return callback(_require(5165).TableRow, obj);
}
({ AnalyticsObjects: closure_7, UPLOAD_BANNER_SIZE: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.label = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sublabel = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.nitroWheel = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: 24, minWidth: 24 };
_createForOfIteratorHelperLoose.bannerColor = obj3;
_createForOfIteratorHelperLoose.selectedColor = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.selectedColorHex = { textTransform: "uppercase" };
_createForOfIteratorHelperLoose.rowArrow = { height: 13, width: 8, marginLeft: 10, marginTop: 2 };
let obj2 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.upsellButton = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.remove = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.titleWrapper = { flex: 0 };
_createForOfIteratorHelperLoose.titleContainer = { justifyContent: "flex-start" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default function ChangeBannerActionSheet(isTryItOut) {
  let removeText;
  let require;
  let showRemoveBanner;
  let user;
  ({ user, onBannerChange: require, removeText, showRemoveBanner } = isTryItOut);
  if (showRemoveBanner === undefined) {
    showRemoveBanner = false;
  }
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  function _handleBannerUploadSelect(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  if (!flag) {
    let obj = _handleBannerUploadSelect(3776);
    flag = obj.canUsePremiumProfileCustomization(user);
  }
  obj = { value: _handleBannerUploadSelect(5464)(isTryItOut.analyticsLocations).analyticsLocations };
  obj = {};
  const obj1 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl.string(require(1212) /* getSystemLocale */.t.Vgdusv);
  let tmp7 = flag;
  if (flag) {
    tmp7 = callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, {});
  }
  obj1.trailing = tmp7;
  ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
  const items = [callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj1), ];
  const obj2 = { hasIcons: false };
  let tmp12 = null;
  if (!flag) {
    const obj3 = { user };
    tmp12 = callback(ChangeBannerColorRow, obj3);
  }
  const items1 = [tmp12, , ];
  const obj4 = {};
  const obj5 = { style: tmp.label };
  const obj6 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const string = intl2.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (showRemoveBanner) {
    let stringResult = string(t.N0bC3P);
  } else {
    stringResult = string(t["70CYsY"]);
  }
  obj6.text = stringResult;
  const items2 = [callback(require(7495) /* Form */.FormLabel, obj6), ];
  let tmp20 = !flag;
  if (tmp20) {
    const obj7 = { style: tmp.nitroWheel, size: "sm" };
    tmp20 = callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, obj7);
  }
  items2[1] = tmp20;
  obj5.children = items2;
  obj4.label = closure_10(View, obj5);
  const obj8 = {};
  const obj9 = { style: tmp.sublabel, numberOfLines: 2 };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const string2 = intl3.string;
  const t2 = require(1212) /* getSystemLocale */.t;
  if (flag) {
    let string2Result = string2(t2.IhzZlo);
  } else {
    string2Result = string2(t2.NSTmdO);
  }
  obj9.text = string2Result;
  const items3 = [callback(require(7495) /* Form */.FormSubLabel, obj9), ];
  let tmp28 = !flag;
  if (tmp28) {
    const obj10 = { style: tmp.upsellButton };
    const obj11 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
    obj10.children = callback(_handleBannerUploadSelect(13566), obj11);
    tmp28 = callback(View, obj10);
  }
  items3[1] = tmp28;
  obj8.children = items3;
  obj4.subLabel = closure_10(closure_11, obj8);
  let handleBannerUploadSelect;
  if (flag) {
    handleBannerUploadSelect = function handleBannerUploadSelect() {
      return _handleBannerUploadSelect(...arguments);
    };
  }
  obj4.onPress = handleBannerUploadSelect;
  items1[1] = callback(require(5165) /* TableRowInner */.TableRow, obj4);
  if (showRemoveBanner) {
    const obj12 = {};
    const obj13 = {};
    const items4 = [, ];
    ({ label: arr5[0], remove: arr5[1] } = tmp);
    obj13.style = items4;
    if (null == removeText) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      removeText = intl4.string(require(1212) /* getSystemLocale */.t.tT9n7D);
    }
    obj13.text = removeText;
    obj12.label = callback(require(7495) /* Form */.FormLabel, obj13);
    obj12.onPress = function handleBannerDelete() {
      callback(null);
      _handleBannerUploadSelect(outer1_2[10]).hideActionSheet();
    };
    showRemoveBanner = callback(require(5165) /* TableRowInner */.TableRow, obj12);
    const tmp35 = callback;
    const tmp38 = callback;
  }
  items1[2] = showRemoveBanner;
  obj2.children = items1;
  items[1] = closure_10(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj2);
  obj.children = items;
  obj.children = closure_10(require(5500) /* ActionSheet */.ActionSheet, obj);
  return callback(require(5464) /* mergeLocations */.AnalyticsLocationProvider, obj);
};
