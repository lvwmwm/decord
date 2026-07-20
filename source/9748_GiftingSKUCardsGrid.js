// Module ID: 9748
// Function ID: 75851
// Name: GiftingSKUCardsGrid
// Dependencies: []
// Exports: default

// Module 9748 (GiftingSKUCardsGrid)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isAvatarDecorationRecord = arg1(dependencyMap[2]).isAvatarDecorationRecord;
const isNameplateRecord = arg1(dependencyMap[3]).isNameplateRecord;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[6]).radii.sm, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, margin: importDefault(dependencyMap[6]).space.PX_4 };
obj.card = obj;
obj.overlayContainer = {};
obj1 = { borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND };
obj.selected = obj1;
obj.claimed = { opacity: 0.4 };
obj.checkmark = {};
obj.checkmarkContainer = {};
const tmp2 = arg1(dependencyMap[4]);
obj.textContainer = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
let closure_9 = obj1.createStyles(obj);
let closure_10 = importAllResult.memo((rewardSkuId) => {
  let accessibilityRole;
  let accessibilityState;
  let claimed;
  let isSelected;
  rewardSkuId = rewardSkuId.rewardSkuId;
  const arg1 = rewardSkuId;
  ({ claimed, onSelect: closure_1, isSelected } = rewardSkuId);
  const dependencyMap = isSelected;
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const currentUser = obj.useCurrentUser();
  let obj1 = arg1(dependencyMap[8]);
  const radioA11yNative = obj1.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  let obj2 = arg1(dependencyMap[9]);
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
      let tmp9 = callback(importDefault(dependencyMap[11]), obj1);
    } else if (isAvatarDecorationRecord(first)) {
      obj2 = { item: first, size: 100, animate: isSelected, avatarSource: tmp4 };
      tmp9 = callback(importDefault(dependencyMap[12]), obj2);
    }
    obj.children = tmp9;
    const items3 = [callback(View, obj), , ];
    let tmp16 = claimed;
    if (claimed) {
      const obj3 = { style: tmp.checkmarkContainer };
      const obj4 = { size: "lg", style: tmp.checkmark };
      obj3.children = callback(arg1(dependencyMap[13]).CheckmarkLargeBoldIcon, obj4);
      tmp16 = callback(View, obj3);
    }
    items3[1] = tmp16;
    const obj5 = { style: tmp.textContainer };
    const obj6 = { 9223372036854775807: "disclaimer_text_localized", 9223372036854775807: "message", 9223372036854775807: 2, 9223372036854775807: "subheader", children: product.name };
    const items4 = [callback(arg1(dependencyMap[14]).Text, obj6), ];
    const obj7 = {};
    const intl = arg1(dependencyMap[15]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[15]).t;
    if (claimed) {
      let stringResult = string(t.6cfuDj);
    } else {
      stringResult = string(t.QQsaCc);
    }
    obj7.children = stringResult;
    items4[1] = callback(arg1(dependencyMap[14]).Text, obj7);
    obj5.children = items4;
    items3[2] = closure_8(View, obj5);
    obj.children = items3;
    return closure_8(arg1(dependencyMap[10]).PressableOpacity, obj);
  }
});
const obj2 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
let closure_11 = arg1(dependencyMap[5]).createStyles({ grid: { TypeError: "Portugu\u00EAs", borderRadius: "Portuguese", variant: "pt-PT" } });
const obj7 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(arg0) {
  let rewardsToDisplay;
  ({ rewardsToDisplay, claimableRewards: closure_0, onSelect: closure_1, highlightedSkuId: closure_2 } = arg0);
  return callback(View, { style: callback3().grid, children: rewardsToDisplay.map((rewardSkuId) => callback(closure_10, { rewardSkuId, claimed: !rewardSkuId.some((arg0) => arg0 === arg0), isSelected: closure_2 === rewardSkuId, onSelect: closure_1 }, rewardSkuId)) });
};
