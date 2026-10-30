// Module ID: 14408
// Function ID: 14409
// Name: GiftingSKUCardsGrid
// Dependencies: [19, 17, 7718, 1986, 7719, 7720, 1072, 9472, 21, 575, 5009, 8741, 9498, 9484, 5712, 9497, 9475, 9496, 5591, 5006, 5582, 9266, 5077, 11349, 6974, 5619, 1114, 1492, 12, 2]
// Exports: default

// Module 14408 (GiftingSKUCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import NameplateRecord from "NameplateRecord" /* 1986 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import react_native from "react-native" /* 5077 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7718 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7719 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7720 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 9266 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 9472 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11349 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c10;
let closure_12;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let rect1;
let unpackModuleId;
function GiftingSKUCardItemPreview(arg0) {
  let isSelected;
  let item;
  let items1;
  let obj6;
  let obj9;
  let tmp12;
  let tmp8;
  ({ item, isSelected } = arg0);
  const tmp = closure_18();
  const obj = isSelected(8741);
  const currentUser = obj.useCurrentUser();
  const items = [isSelected, currentUser];
  const memo = react.useMemo(() => {
    let avatarSource;
    if (isSelected) {
      avatarSource = currentUser.getAvatarSource(null, true, c13);
    }
    return avatarSource;
  }, items);
  if (isNameplateRecord(item)) {
    const obj2 = { item, animate: isSelected };
    tmp8 = closure_10(currentUser(9498), obj2);
  } else if (isAvatarDecorationRecord(item)) {
    const obj3 = { item, size, animate: isSelected, avatarSource: memo };
    tmp8 = closure_10(currentUser(9484), obj3);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: tmp.profileEffect, children: items1 };
    const obj5 = { source: obj6, style: tmp.sampleProfile, resizeMode: "cover" };
    obj6 = { uri: currentUser(9497) };
    const tmp19 = currentUser(5712);
    items1 = [closure_10(tmp19, obj5), ];
    const obj7 = { skuId: item.skuId, useThumbnail: !isSelected };
    items1[1] = closure_10(currentUser(9475), obj7);
    tmp8 = closure_11(closure_4, obj4);
  } else {
    tmp8 = null;
    if (isProfileFrameRecord(item)) {
      const obj8 = { style: tmp.profileFrame, children: closure_10(tmp12, obj9) };
      obj9 = { profileFrame: item, previewWidth, previewHeight, profileBackgroundColor: currentUser(575).colors.BACKGROUND_BASE_LOW };
      tmp12 = currentUser(9496);
      tmp8 = closure_10(closure_4, obj8);
    }
  }
  return tmp8;
}
function CollectibleTextFade() {
  let items;
  const tmp = closure_18();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const hexToRgbaString = ColorUtils.hexToRgbaString;
  ColorUtils;
  const obj2 = ColorUtils;
  const hexToRgbaStringResult = hexToRgbaString(obj2.hexWithOpacity(token, 0.9));
  const hexToRgbaString2 = ColorUtils.hexToRgbaString;
  ColorUtils;
  const obj3 = ColorUtils;
  const obj4 = { style: tmp.collectibleTextFade, colors: items, locations: [0, 0.4, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  items = [hexToRgbaString2(obj3.hexWithOpacity(token, 0)), hexToRgbaStringResult, token];
  hexToRgbaString2(obj3.hexWithOpacity(token, 0));
  return authStore(LinearGradientDefault, obj4);
}
function GiftingSKUCardPreview(isSelected) {
  let claimed;
  let item;
  let items2;
  ({ item, claimed } = isSelected);
  isSelected = isSelected.isSelected;
  const tmp = closure_18();
  let tmp7Result = isProfileEffectRecord(item);
  const tmp3 = isProfileFrameRecord(item);
  const items = [tmp.previewContainer, ];
  let expandedPreviewContainer = tmp7Result;
  const tmp5 = authStore2;
  if (!tmp7Result) {
    expandedPreviewContainer = tmp3;
  }
  if (expandedPreviewContainer) {
    expandedPreviewContainer = tmp.expandedPreviewContainer;
  }
  const obj = { style: items, children: items2 };
  items[1] = expandedPreviewContainer;
  const items1 = [tmp.preview, ];
  const tmp8 = claimed && tmp.claimed;
  items1[1] = tmp8;
  items2 = [, ];
  const obj2 = { style: items1, children: authStore(GiftingSKUCardItemPreview, { item, isSelected }) };
  items2[0] = authStore(React3, obj2);
  if (claimed) {
    const obj3 = { size: "lg", style: tmp.checkmark };
    claimed = tmp7(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj3);
  }
  items2[1] = claimed;
  const children = [unpackModuleId(React3, obj), ];
  if (!tmp7Result) {
    tmp7Result = tmp3;
  }
  if (tmp7Result) {
    tmp7Result = tmp7(CollectibleTextFade, {});
  }
  children[1] = tmp7Result;
  return unpackModuleId(tmp5, { children });
}
({ View: closure_4, StyleSheet } = react_native2);
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const VerticalGradient = Constants.VerticalGradient;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let c13 = 100;
const PX_12 = nativeDefault.space.PX_12;
const previewWidth = 150 - nativeDefault.space.PX_32;
const sum = 100 + nativeDefault.space.PX_40;
const PX_122 = nativeDefault.space.PX_12;
let closure_17 = 2 * nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { card: obj2, previewContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 100, overflow: "hidden" }, expandedPreviewContainer: { overflow: "visible" }, preview: obj3, selected: obj4, claimed: { opacity: 0.4 }, checkmark: { position: "absolute", opacity: 1, fontWeight: "bold" }, profileEffect: rect, sampleProfile: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" }, profileFrame: { position: "absolute", top: 0, left: 0, right: 0, height: sum, alignItems: "center" }, collectibleTextFade: rect1, textContainer: obj5 };
obj2 = { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", justifyContent: "center", alignItems: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
rect = { position: "absolute", top: -PX_12, left: 0, right: 0, overflow: "hidden", height: sum + PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj5 = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let closure_18 = createStyles(obj);
let closure_22 = react.memo(function GiftingSKUCard(rewardSkuId) {
  let accessibilityRole;
  let accessibilityState;
  let claimed;
  let closure_129_1;
  let isSelected;
  let items1;
  let items2;
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: closure_129_1, isSelected } = rewardSkuId);
  const tmp = closure_18();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = useFetchCollectiblesProduct;
  const product = obj2.useFetchCollectiblesProduct(rewardSkuId).product;
  if (null == product) {
    return null;
  } else {
    let stringResult;
    const first = product.items[0];
    const items = [tmp.card, ];
    let selected = isSelected;
    const PressableOpacity = tmp2(6974).PressableOpacity;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj3 = {
      style: items,
      onPress() {
          return closure_1_1(rewardSkuId);
        },
      activeOpacity: 0.8,
      disabled: claimed,
      accessibilityRole,
      accessibilityState,
      children: items1
    };
    items[1] = selected;
    let tmp5 = null != first;
    if (tmp5) {
      const obj4 = { item: first, isSelected, claimed };
      tmp5 = authStore(GiftingSKUCardPreview, obj4);
    }
    items1 = [tmp5, ];
    const obj5 = { style: tmp.textContainer, children: items2 };
    const obj6 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    items2 = [authStore(Text_Text.Text, obj6), ];
    const Text = tmp2(5619).Text;
    const intl = tmp2(1114).intl;
    const string = intl.string;
    const t = tmp2(1114).t;
    const tmp8 = React3;
    const tmp9 = authStore;
    if (claimed) {
      stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj7 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items2[1] = tmp9(Text, obj7);
    items1[1] = unpackModuleId(tmp8, obj5);
    return unpackModuleId(PressableOpacity, obj3);
  }
});
createStyles = createStyles_mod;
let obj6 = { grid: { flexDirection: "column", alignSelf: "center", gap: PX_122 }, row: { flexDirection: "row", gap: PX_122 } };
let closure_23 = createStyles.createStyles(obj6);
let result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(rewardsToDisplay) {
  let items1;
  rewardsToDisplay = rewardsToDisplay.rewardsToDisplay;
  ({ claimableRewards: importDefault, onSelect: dependencyMap, highlightedSkuId: react } = rewardsToDisplay);
  const tmp = closure_23();
  const row = tmp;
  let length = Math.max(1, Math.floor((useWindowDimensionsDefault().width - closure_17 + PX_122) / (150 + PX_122)));
  const items = [rewardsToDisplay, length];
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.chunk(rewardsToDisplay, length);
  }, items);
  if (memo.length <= 1) {
    length = rewardsToDisplay.length;
  }
  const result = 150 * length;
  let obj = {
    style: items1,
    children: memo.map((arr, index) => {
      let onSelect;
      let obj = {
        style: row.row,
        children: arr.map((rewardSkuId) => {
          let closure_0 = rewardSkuId;
          const obj = { rewardSkuId, claimed: !closure_1_1.some((item) => item === closure_0), isSelected: closure_1_3 === rewardSkuId, onSelect };
          return closure_2_10(closure_2_22, obj, rewardSkuId);
        })
      };
      return authStore(React3, obj, index);
    })
  };
  items1 = [tmp.grid, { width: result + Math.max(0, length - 1) * tmp2 }];
  ({ width: result + Math.max(0, length - 1) * PX_122 });
  return closure_10(row, obj);
};
