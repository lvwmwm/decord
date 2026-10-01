// Module ID: 10507
// Function ID: 10508
// Name: GiftingSKUCardsGrid
// Dependencies: [19, 17, 6967, 1972, 21, 4836, 576, 7623, 4548, 10508, 5435, 8287, 8273, 8258, 4832, 1115, 2]
// Exports: default

// Module 10507 (GiftingSKUCardsGrid)
import nativeDefault from "native" /* 576 */;
import NameplateRecord from "NameplateRecord" /* 1972 */;
import react_native from "react-native" /* 4548 */;
import Text_Text from "Text/Text" /* 4832 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 6967 */;
import useCurrentUser from "useCurrentUser" /* 7623 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8273 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8287 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10508 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let rewardSkuId;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, StyleSheet } = react_native2);
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, previewContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 100, overflow: "hidden" }, preview: obj3, selected: obj4, claimed: { opacity: 0.4 }, checkmark: { position: "absolute", opacity: 1, fontWeight: "bold" }, textContainer: obj5 };
obj2 = { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE, margin: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", justifyContent: "center", alignItems: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let closure_9 = createStyles(obj);
let closure_10 = react.memo((rewardSkuId) => {
  let accessibilityRole;
  let accessibilityState;
  let claimed;
  let closure_129_1;
  let isSelected;
  let items3;
  let items4;
  let items5;
  let tmp8Result;
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: closure_129_1, isSelected } = rewardSkuId);
  const tmp = closure_9();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = react_native;
  const radioA11yNative = obj2.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj3 = useFetchCollectiblesProduct;
  const product = obj3.useFetchCollectiblesProduct(rewardSkuId).product;
  const items = [isSelected, currentUser];
  if (null == product) {
    return null;
  } else {
    let stringResult;
    const first = product.items[0];
    const items1 = [tmp.card, ];
    let selected = isSelected;
    const PressableOpacity = tmp2(5435).PressableOpacity;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj4 = {
      style: items1,
      onPress() {
          return closure_1_1(rewardSkuId);
        },
      activeOpacity: 0.8,
      disabled: claimed,
      accessibilityRole,
      accessibilityState,
      children: items4
    };
    items1[1] = selected;
    const items2 = [tmp.preview, ];
    const obj5 = { style: tmp.previewContainer, children: items3 };
    const obj6 = { style: items2, children: tmp8Result };
    const tmp9 = claimed && tmp.claimed;
    items2[1] = tmp9;
    if (isNameplateRecord(first)) {
      const obj7 = { item: first, animate: isSelected };
      tmp8Result = tmp8(NameplateCardPreviewDefault, obj7);
    } else if (isAvatarDecorationRecord(first)) {
      const obj8 = { item: first, size: 100, animate: isSelected, avatarSource: tmp6 };
      tmp8Result = tmp8(AvatarDecorationSampleV2Default, obj8);
    }
    items3 = [metroImportDefault(React3, obj6), ];
    let tmp8Result2 = claimed;
    if (tmp8Result2) {
      const obj9 = { size: "lg", style: tmp.checkmark };
      tmp8Result2 = tmp8(tmp2(8258).CheckmarkLargeBoldIcon, obj9);
    }
    items3[1] = tmp8Result2;
    items4 = [metroImportAll(React3, obj5), ];
    const obj10 = { style: tmp.textContainer, children: items5 };
    const obj11 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    items5 = [metroImportDefault(Text_Text.Text, obj11), ];
    const Text = tmp2(4832).Text;
    const intl = tmp2(1115).intl;
    const string = intl.string;
    const t = tmp2(1115).t;
    if (claimed) {
      stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items5[1] = metroImportDefault(Text, obj12);
    items4[1] = metroImportAll(React3, obj10);
    return metroImportAll(PressableOpacity, obj4);
  }
});
createStyles = createStyles_mod;
let closure_11 = createStyles.createStyles({ grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(arg0) {
  let onSelect;
  let rewardsToDisplay;
  ({ rewardsToDisplay, claimableRewards: require, onSelect: importDefault, highlightedSkuId: dependencyMap } = arg0);
  let obj = {
    style: closure_11().grid,
    children: rewardsToDisplay.map((rewardSkuId) => {
      require = rewardSkuId;
      const obj = { rewardSkuId, claimed: !require.some((item) => item === closure_0), isSelected: dependencyMap === rewardSkuId, onSelect: importDefault };
      return metroImportDefault(closure_10, obj, rewardSkuId);
    })
  };
  return closure_7(closure_4, obj);
};
