// Module ID: 8330
// Function ID: 8331
// Name: CollectiblesShopCardVariants
// Dependencies: [19, 17, 21, 4836, 576, 8303, 8331, 6554, 8332, 8227, 6973, 2]

// Module 8330 (CollectiblesShopCardVariants)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 6554 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8303 */;
import useIsVariantColorLightDefault from "useIsVariantColorLight" /* 8331 */;
import PlusSmallIcon2 from "PlusSmallIcon" /* 8332 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
function VariantOption(variant) {
  let items;
  let items1;
  let obj3;
  variant = variant.variant;
  const zIndex = variant.zIndex;
  const tmp = closure_7(variant.isSelected);
  const obj = useProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  const obj2 = { style: items, children: React3(View, obj3) };
  items = [tmp.variantOption, { zIndex }];
  obj3 = { style: items1, children: isPurchased };
  items1 = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    const obj4 = { variant };
    isPurchased = tmp2(VariantCheckmark, obj4);
  }
  return React3(View, obj2);
}
function VariantCheckmark(variant) {
  const tmp = useIsVariantColorLightDefault(variant.variant);
  const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
  const colors = nativeDefault.colors;
  const obj = { color: tmp ? colors.BLACK : colors.WHITE, size: "xxs" };
  return React3(CheckmarkSmallIcon, obj);
}
function VariantOverflowOption(zIndex) {
  let PlusSmallIcon;
  let items;
  let items1;
  let obj2;
  let obj3;
  zIndex = zIndex.zIndex;
  const tmp = closure_7(zIndex.isSelected);
  const obj = { style: items, children: React3(View, obj2) };
  items = [tmp.variantOption, { zIndex }];
  obj2 = { style: items1, children: React3(PlusSmallIcon, obj3) };
  items1 = [, ];
  ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp);
  obj3 = { color: nativeDefault.colors.WHITE, size: "xxs" };
  PlusSmallIcon = PlusSmallIcon2.PlusSmallIcon;
  return React3(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { variantsContainer: obj2 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", paddingStart: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles((arg0) => {
  let num;
  let size1;
  const obj = { variantOption: size, variantOptionInner: size1, variantOverflowInner: { backgroundColor: nativeDefault.colors.ICON_MUTED } };
  size = { marginStart: -nativeDefault.space.PX_4, width: 14, height: 14, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center" };
  size1 = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, borderWidth: num, borderColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  num = 0;
  if (arg0) {
    num = 1;
  }
  ({ backgroundColor: nativeDefault.colors.ICON_MUTED });
  return obj;
});
const memoResult = react.memo(function CardProductVariants(product) {
  let items;
  let num5;
  product = product.product;
  let defaultVariantIndex;
  const tmp = closure_6();
  let obj = defaultVariantIndex(8227);
  defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const obj2 = defaultVariantIndex(6973);
  if (obj2.getIsVariantProduct(product)) {
    let num3 = 3;
    if (product.variants.length <= 4) {
      num3 = length;
    }
    const variants = product.variants;
    const obj3 = { style: tmp.variantsContainer, children: items };
    const substr = variants.slice(0, num3);
    items = [
      substr.map((variant, index) => {
          const obj = { variant, isSelected: index === defaultVariantIndex, zIndex: 4 - Math.abs(defaultVariantIndex - index) };
          return React3(VariantOption, obj, variant.variantValue);
        }),

    ];
    let tmp7Result = num3 !== length;
    const tmp4 = closure_5;
    const tmp5 = View;
    if (tmp7Result) {
      const obj4 = { isSelected: defaultVariantIndex >= 3, zIndex: num5 };
      num5 = 0;
      const tmp7 = closure_4;
      const tmp8 = VariantOverflowOption;
      if (defaultVariantIndex >= 3) {
        num5 = 4;
      }
      tmp7Result = tmp7(tmp8, obj4);
    }
    items[1] = tmp7Result;
    return tmp4(tmp5, obj3);
  } else {
    return null;
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardVariants.tsx");

export default memoResult;
