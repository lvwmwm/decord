// Module ID: 12725
// Function ID: 12726
// Name: ProductDetailsActionSheetVariants
// Dependencies: [19, 17, 21, 4836, 576, 8303, 5435, 1115, 8331, 6554, 6973, 4832, 2]
// Exports: default

// Module 12725 (ProductDetailsActionSheetVariants)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Pressables from "Pressables" /* 5435 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 6554 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8303 */;
import useIsVariantColorLightDefault from "useIsVariantColorLight" /* 8331 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
function VariantOption(onSelect) {
  let disabled;
  let isSelected;
  let items;
  let name;
  let obj4;
  let tmp5;
  let variant;
  ({ variant, isSelected, disabled } = onSelect);
  onSelect = onSelect.onSelect;
  const tmp = closure_7(isSelected);
  const obj = useProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  const PressableOpacity = Pressables.PressableOpacity;
  if (isPurchased) {
    const intl = tmp2(1115).intl;
    const obj2 = { variantLabel: variant.name };
    name = intl.formatToPlainString(tmp2(1115).t["SfQB4+"], obj2);
  } else {
    name = variant.name;
  }
  const obj3 = { accessibilityRole: "button", accessibilityLabel: name, accessibilityState: { selected: isSelected, disabled }, disabled, onPress: onSelect, style: tmp.variantOption, children: React3(tmp5, obj4) };
  obj4 = { style: items, children: isPurchased };
  items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  tmp5 = View;
  if (isPurchased) {
    const obj5 = { variant };
    isPurchased = tmp4(VariantCheckmark, obj5);
  }
  return React3(PressableOpacity, obj3);
}
function VariantCheckmark(variant) {
  const tmp = useIsVariantColorLightDefault(variant.variant);
  const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
  const colors = nativeDefault.colors;
  const obj = { color: tmp ? colors.BLACK : colors.WHITE, size: "md" };
  return React3(CheckmarkSmallIcon, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerRow: obj3, variantsContainer: obj4, text: { flexGrow: 1, flexShrink: 1, minWidth: 28 } };
obj2 = { flex: 1, display: "flex", flexDirection: "column", marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj4 = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles(obj);
createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles((arg0) => {
  let colors;
  let size1;
  size = { width: 28, height: 28, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG };
  colors = nativeDefault.colors;
  const obj = { variantOption: size, variantOptionInner: size1 };
  size1 = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: tmp(576).radii.round, borderWidth: 1, borderColor: tmp(576).colors.BACKGROUND_BASE_LOW };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default function ProductDetailsActionSheetVariants(disabled) {
  let intl;
  let items;
  let items1;
  let product;
  let selectedVariantIndex;
  let variants;
  ({ product, selectedVariantIndex } = disabled);
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onVariantSelect = disabled.onVariantSelect;
  const tmp = closure_6();
  let obj = selectedVariantIndex(onVariantSelect[10]);
  let tmp5Result = null;
  if (obj.getIsVariantProduct(product)) {
    const obj2 = { style: tmp.container, children: items1 };
    const obj3 = { style: tmp.headerRow, children: items };
    const obj4 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: intl.string(selectedVariantIndex(onVariantSelect[7]).t.wbgaj6) };
    const Text = tmp2(tmp3[11]).Text;
    intl = tmp2(tmp3[7]).intl;
    items = [closure_4(Text, obj4), ];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj5 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp7Result = tmp7(tmp2(tmp3[11]).Text, obj5);
    }
    items[1] = tmp7Result;
    items1 = [closure_5(View, obj3), ];
    const obj6 = {
      style: tmp.variantsContainer,
      children: variants.map((variant, index) => {
          let closure_0 = index;
          const obj = {
            variant,
            isSelected: closure_0 === index,
            disabled: flag,
            onSelect() {
              return onVariantSelect(index);
            }
          };
          return closure_1_4(VariantOption, obj, variant.variantValue);
        })
    };
    variants = product.variants;
    items1[1] = closure_4(View, obj6);
    tmp5Result = tmp5(tmp6, obj2);
  }
  return tmp5Result;
};
