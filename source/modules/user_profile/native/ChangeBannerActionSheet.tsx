// Module ID: 13442
// Function ID: 102082
// Name: ChangeBannerColorRow
// Dependencies: []
// Exports: default

// Module 13442 (ChangeBannerColorRow)
function ChangeBannerColorRow(user) {
  user = user.user;
  let arg1;
  let importDefault;
  let closure_2;
  const tmp = callback3();
  let obj = arg1(closure_2[20]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => pendingChanges.getPendingChanges());
  let pendingAccentColor = stateFromStoresObject.pendingAccentColor;
  let obj1 = arg1(closure_2[21]);
  obj = { userId: user.id, image: stateFromStoresObject.pendingAvatar };
  let pendingAvatarSrc = obj1.getPendingAvatarSrc(obj);
  const tmp4 = importDefault(closure_2[22])(user.id);
  if (null == pendingAvatarSrc) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  let obj3 = arg1(closure_2[23]);
  let obj4 = arg1(closure_2[24]);
  let obj5 = arg1(closure_2[23]);
  const rgb2intResult = obj4.rgb2int(obj5.useDominantColorFromImage(pendingAvatarSrc, obj3.memoizedImageSource(pendingAvatarSrc)));
  arg1 = rgb2intResult;
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
  let num2 = 0;
  if (null != tmp8) {
    num2 = tmp8;
  }
  importDefault = num2;
  const items1 = [rgb2intResult];
  closure_2 = React.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 === rgb2intResult) {
      tmp = null;
    }
    let obj = rgb2intResult(closure_2[25]);
    obj = { accentColor: tmp };
    obj.setPendingChanges(obj);
  }, items1);
  obj = {};
  obj1 = { style: tmp.label };
  const intl = arg1(closure_2[14]).intl;
  obj1.text = intl.string(arg1(closure_2[14]).t.xzNfPz);
  obj.label = callback(arg1(closure_2[18]).FormLabel, obj1);
  const obj2 = { style: tmp.selectedColor };
  obj3 = { style: tmp.bannerColor, color: num2 };
  const items2 = [callback(importDefault(closure_2[27]), obj3), , ];
  obj4 = { "Null": 0, "Null": 1929379840, "Null": 0, style: tmp.selectedColorHex };
  const memoizedImageSourceResult = obj3.memoizedImageSource(pendingAvatarSrc);
  obj4.children = arg1(closure_2[24]).int2hex(num2);
  items2[1] = callback(arg1(closure_2[28]).Text, obj4);
  obj5 = { style: tmp.rowArrow, size: arg1(closure_2[29]).Icon.Sizes.CUSTOM, source: importDefault(closure_2[30]) };
  items2[2] = callback(arg1(closure_2[29]).Icon, obj5);
  obj2.children = items2;
  obj.trailing = callback2(View, obj2);
  obj.onPress = function handleChangeColor() {
    num2(closure_2[26])({ color: num2, onSelect: closure_2 });
  };
  return callback(arg1(closure_2[17]).TableRow, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticsObjects: closure_7, UPLOAD_BANNER_SIZE: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { <string:1446732684>: "spriteIndex", <string:2075742646>: "y", <string:81929042>: "isArray", color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.label = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.sublabel = { color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
const obj1 = { color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
obj.nitroWheel = { marginLeft: importDefault(dependencyMap[7]).space.PX_8 };
const obj3 = { giftPlanSelectionCardBanner: "spriteIndex", %Uint8ClampedArrayPrototype%: "y", initiateEmojiInteraction: "isArray", blockedIgnoredRedirect: "constructor", pt-CH: "apply", borderColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.bannerColor = obj3;
obj.selectedColor = {};
obj.selectedColorHex = { textTransform: "uppercase" };
obj.rowArrow = { 0: "trackAverageRenderTimeForOffsetProjection", 9223372036854775807: "LL", -9223372036854775808: "<string:316948736>", 9223372036854775807: "<string:3211266>" };
const obj2 = { marginLeft: importDefault(dependencyMap[7]).space.PX_8 };
obj.upsellButton = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
const obj4 = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.remove = { color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_CRITICAL };
obj.titleWrapper = { flex: 0 };
obj.titleContainer = { justifyContent: "flex-start" };
let closure_12 = obj.createStyles(obj);
const obj5 = { color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_CRITICAL };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default function ChangeBannerActionSheet(isTryItOut) {
  let removeText;
  let showRemoveBanner;
  let user;
  ({ user, onBannerChange: closure_0, removeText, showRemoveBanner } = isTryItOut);
  if (showRemoveBanner === undefined) {
    showRemoveBanner = false;
  }
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  function _handleBannerUploadSelect(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback2(tmp);
    const _handleBannerUploadSelect = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  if (!flag) {
    let obj = _handleBannerUploadSelect(dependencyMap[9]);
    flag = obj.canUsePremiumProfileCustomization(user);
  }
  obj = { value: _handleBannerUploadSelect(dependencyMap[8])(isTryItOut.analyticsLocations).analyticsLocations };
  obj = {};
  const obj1 = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj1.title = intl.string(arg1(dependencyMap[14]).t.Vgdusv);
  let tmp7 = flag;
  if (flag) {
    tmp7 = callback(arg1(dependencyMap[15]).NitroWheelIcon, {});
  }
  obj1.trailing = tmp7;
  ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
  const items = [callback(arg1(dependencyMap[13]).BottomSheetTitleHeader, obj1), ];
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
  const intl2 = arg1(dependencyMap[14]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[14]).t;
  if (showRemoveBanner) {
    let stringResult = string(t.N0bC3P);
  } else {
    stringResult = string(t.70CYsY);
  }
  obj6.text = stringResult;
  const items2 = [callback(arg1(dependencyMap[18]).FormLabel, obj6), ];
  let tmp20 = !flag;
  if (tmp20) {
    const obj7 = { style: tmp.nitroWheel, size: "sm" };
    tmp20 = callback(arg1(dependencyMap[15]).NitroWheelIcon, obj7);
  }
  items2[1] = tmp20;
  obj5.children = items2;
  obj4.label = closure_10(View, obj5);
  const obj8 = {};
  const obj9 = { style: tmp.sublabel, numberOfLines: 2 };
  const intl3 = arg1(dependencyMap[14]).intl;
  const string2 = intl3.string;
  const t2 = arg1(dependencyMap[14]).t;
  if (flag) {
    let string2Result = string2(t2.IhzZlo);
  } else {
    string2Result = string2(t2.NSTmdO);
  }
  obj9.text = string2Result;
  const items3 = [callback(arg1(dependencyMap[18]).FormSubLabel, obj9), ];
  let tmp28 = !flag;
  if (tmp28) {
    const obj10 = { style: tmp.upsellButton };
    const obj11 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
    obj10.children = callback(_handleBannerUploadSelect(dependencyMap[19]), obj11);
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
  items1[1] = callback(arg1(dependencyMap[17]).TableRow, obj4);
  if (showRemoveBanner) {
    const obj12 = {};
    const obj13 = {};
    const items4 = [, ];
    ({ label: arr5[0], remove: arr5[1] } = tmp);
    obj13.style = items4;
    if (null == removeText) {
      const intl4 = arg1(dependencyMap[14]).intl;
      removeText = intl4.string(arg1(dependencyMap[14]).t.tT9n7D);
    }
    obj13.text = removeText;
    obj12.label = callback(arg1(dependencyMap[18]).FormLabel, obj13);
    obj12.onPress = function handleBannerDelete() {
      callback(null);
      _handleBannerUploadSelect(closure_2[10]).hideActionSheet();
    };
    showRemoveBanner = callback(arg1(dependencyMap[17]).TableRow, obj12);
    const tmp35 = callback;
    const tmp38 = callback;
  }
  items1[2] = showRemoveBanner;
  obj2.children = items1;
  items[1] = closure_10(arg1(dependencyMap[16]).TableRowGroup, obj2);
  obj.children = items;
  obj.children = closure_10(arg1(dependencyMap[12]).ActionSheet, obj);
  return callback(arg1(dependencyMap[8]).AnalyticsLocationProvider, obj);
};
