// Module ID: 9761
// Function ID: 75932
// Name: GiftingSKUCardsGrid
// Dependencies: [31, 27, 6779, 1874, 33, 4130, 689, 8667, 3848, 8206, 4660, 8699, 8226, 8694, 4126, 1212, 2]
// Exports: default

// Module 9761 (GiftingSKUCardsGrid)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { height: 178, width: 150, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, margin: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.card = obj;
obj.overlayContainer = { position: "absolute", top: 10, zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
_createForOfIteratorHelperLoose = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.selected = _createForOfIteratorHelperLoose;
obj.claimed = { opacity: 0.4 };
obj.checkmark = { position: "absolute", opacity: 1, fontWeight: "bold" };
obj.checkmarkContainer = { position: "absolute", top: 10, zIndex: 3, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
let obj2 = { position: "absolute", bottom: 20, left: 0, right: 0, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "flex-start" };
obj.textContainer = obj2;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = importAllResult.memo((rewardSkuId) => {
  let accessibilityRole;
  let accessibilityState;
  let claimed;
  let importDefault;
  let isSelected;
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  const tmp = callback2();
  let obj = rewardSkuId(isSelected[7]);
  const currentUser = obj.useCurrentUser();
  let obj1 = rewardSkuId(isSelected[8]);
  const radioA11yNative = obj1.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  let obj2 = rewardSkuId(isSelected[9]);
  const product = obj2.useFetchCollectiblesProduct(rewardSkuId).product;
  const items = [isSelected, currentUser];
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    obj = {};
    const items1 = [tmp.card, ];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp.selected;
    }
    items1[1] = selected;
    obj.style = items1;
    obj.onPress = function onPress() {
      return callback(rewardSkuId);
    };
    obj.activeOpacity = 0.8;
    obj.disabled = claimed;
    obj.accessibilityRole = accessibilityRole;
    obj.accessibilityState = accessibilityState;
    obj = {};
    const items2 = [tmp.overlayContainer, ];
    let claimed2 = claimed;
    if (claimed) {
      claimed2 = tmp.claimed;
    }
    items2[1] = claimed2;
    obj.style = items2;
    if (isNameplateRecord(first)) {
      obj1 = { item: first, animate: isSelected };
      let tmp9 = callback(importDefault(isSelected[11]), obj1);
    } else if (isAvatarDecorationRecord(first)) {
      obj2 = { item: first, size: 100, animate: isSelected, avatarSource: tmp4 };
      tmp9 = callback(importDefault(isSelected[12]), obj2);
    }
    obj.children = tmp9;
    const items3 = [callback(View, obj), , ];
    let tmp16 = claimed;
    if (claimed) {
      const obj3 = { style: tmp.checkmarkContainer };
      const obj4 = { size: "lg", style: tmp.checkmark };
      obj3.children = callback(rewardSkuId(isSelected[13]).CheckmarkLargeBoldIcon, obj4);
      tmp16 = callback(View, obj3);
    }
    items3[1] = tmp16;
    const obj5 = { style: tmp.textContainer };
    const obj6 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    const items4 = [callback(rewardSkuId(isSelected[14]).Text, obj6), ];
    const obj7 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
    const intl = rewardSkuId(isSelected[15]).intl;
    const string = intl.string;
    const t = rewardSkuId(isSelected[15]).t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    obj7.children = stringResult;
    items4[1] = callback(rewardSkuId(isSelected[14]).Text, obj7);
    obj5.children = items4;
    items3[2] = closure_8(View, obj5);
    obj.children = items3;
    return closure_8(rewardSkuId(isSelected[10]).PressableOpacity, obj);
  }
});
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  let rewardsToDisplay;
  ({ rewardsToDisplay, claimableRewards: require, onSelect: importDefault, highlightedSkuId: dependencyMap } = arg0);
  return callback(View, {
    style: callback3().grid,
    children: rewardsToDisplay.map((rewardSkuId) => {
      let closure_0 = rewardSkuId;
      return outer1_7(outer1_10, { rewardSkuId, claimed: !closure_0.some((arg0) => arg0 === closure_0), isSelected: closure_2 === rewardSkuId, onSelect: closure_1 }, rewardSkuId);
    })
  });
};
