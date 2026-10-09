// Module ID: 13379
// Function ID: 13380
// Name: ProductDetailsActionSheetVariants
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 9025, 1126, 6191, 9060, 6819, 7268, 5087, 2]

// Module 13379 (ProductDetailsActionSheetVariants)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Pressables from "Pressables" /* 6191 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9025 */;
import useIsVariantColorLightDefault from "useIsVariantColorLight" /* 9060 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp;
const CheckmarkSmallIcon2 = tmp(6819);
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
  size1 = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: tmp(587).radii.round, borderWidth: 1, borderColor: tmp(587).colors.BACKGROUND_BASE_LOW };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function VariantOption(arg0) {
  let disabled;
  let isSelected;
  let name;
  let onSelect;
  let variant;
  const obj = react2;
  const cResult = obj.c(21);
  ({ variant, isSelected, disabled, onSelect } = arg0);
  const tmp4 = closure_7(isSelected);
  const obj2 = useProductPurchaseState;
  const isPurchased = obj2.useProductPurchaseState(variant).isPurchased;
  if (cResult[0] === isPurchased) {
    let tmp5;
    let tmp6;
    if (cResult[1] === variant.name) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== variant.variantValue) {
      const obj3 = { backgroundColor: variant.variantValue };
      cResult[3] = variant.variantValue;
      cResult[4] = obj3;
      tmp6 = obj3;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.variantOptionInner) {
      let tmp7;
      if (cResult[6] === tmp6) {
        tmp7 = cResult[7];
      }
      if (cResult[8] === isPurchased) {
        let tmp8;
        if (cResult[9] === variant) {
          tmp8 = cResult[10];
        }
        if (cResult[11] === tmp7) {
          let tmp12;
          if (cResult[12] === tmp8) {
            tmp12 = cResult[13];
          }
          if (cResult[14] === disabled) {
            if (cResult[15] === isSelected) {
              if (cResult[16] === onSelect) {
                if (cResult[17] === tmp4.variantOption) {
                  if (cResult[18] === tmp5) {
                    let tmp16;
                    if (cResult[19] === tmp12) {
                      tmp16 = cResult[20];
                    }
                    return tmp16;
                  }
                }
              }
            }
          }
          const obj4 = { role: "radio", "aria-checked": isSelected, accessibilityLabel: tmp5, disabled, onPress: onSelect, style: tmp4.variantOption, children: tmp12 };
          const tmp18 = React3(Pressables.PressableOpacity, obj4);
          cResult[14] = disabled;
          cResult[15] = isSelected;
          cResult[16] = onSelect;
          cResult[17] = tmp4.variantOption;
          cResult[18] = tmp5;
          cResult[19] = tmp12;
          cResult[20] = tmp18;
          tmp16 = tmp18;
        }
        const obj5 = { style: tmp7, children: tmp8 };
        const tmp15 = React3(View, obj5);
        cResult[11] = tmp7;
        cResult[12] = tmp8;
        cResult[13] = tmp15;
        tmp12 = tmp15;
      }
      let tmp9 = isPurchased;
      if (tmp9) {
        const obj6 = { variant };
        tmp9 = React3(closure_9, obj6);
      }
      cResult[8] = isPurchased;
      cResult[9] = variant;
      cResult[10] = tmp9;
      tmp8 = tmp9;
    }
    const items = [tmp4.variantOptionInner, tmp6];
    cResult[5] = tmp4.variantOptionInner;
    cResult[6] = tmp6;
    cResult[7] = items;
    tmp7 = items;
  }
  if (isPurchased) {
    const intl = tmp(1126).intl;
    const obj7 = { variantLabel: variant.name };
    name = intl.formatToPlainString(tmp(1126).t["SfQB4+"], obj7);
  } else {
    name = variant.name;
  }
  cResult[0] = isPurchased;
  cResult[1] = variant.name;
  cResult[2] = name;
  tmp5 = name;
}) : (function VariantOption(arg0) {
  let disabled;
  let isSelected;
  let items;
  let name;
  let obj4;
  let onSelect;
  let tmp5;
  let variant;
  ({ variant, isSelected } = arg0);
  ({ disabled, onSelect } = arg0);
  const tmp = closure_7(isSelected);
  const obj = useProductPurchaseState;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  const obj2 = { role: "radio", "aria-checked": isSelected, accessibilityLabel: name, disabled, onPress: onSelect, style: tmp.variantOption, children: React3(tmp5, obj4) };
  const PressableOpacity = Pressables.PressableOpacity;
  if (isPurchased) {
    const intl = tmp2(1126).intl;
    const obj3 = { variantLabel: variant.name };
    name = intl.formatToPlainString(tmp2(1126).t["SfQB4+"], obj3);
  } else {
    name = variant.name;
  }
  obj4 = { style: items, children: isPurchased };
  items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  tmp5 = View;
  if (isPurchased) {
    const obj5 = { variant };
    isPurchased = tmp4(closure_9, obj5);
  }
  return React3(PressableOpacity, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function VariantCheckmark(variant) {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = useIsVariantColorLightDefault(variant.variant);
  const colors = nativeDefault.colors;
  const tmp5 = tmp4 ? colors.BLACK : colors.WHITE;
  if (cResult[0] !== tmp5) {
    const obj2 = { color: tmp5, size: "md" };
    const tmp8 = React3(CheckmarkSmallIcon2.CheckmarkSmallIcon, obj2);
    cResult[0] = tmp5;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function VariantCheckmark(variant) {
  const tmp = useIsVariantColorLightDefault(variant.variant);
  const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
  const colors = nativeDefault.colors;
  const obj = { color: tmp ? colors.BLACK : colors.WHITE, size: "md" };
  return React3(CheckmarkSmallIcon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductDetailsActionSheetVariants(arg0) {
  let disabled;
  let intl;
  let items;
  let items1;
  let onVariantSelect;
  let product;
  let selectedVariantIndex;
  let tmp12;
  let obj = selectedVariantIndex(576);
  const cResult = obj.c(25);
  ({ product, selectedVariantIndex } = arg0);
  ({ disabled, onVariantSelect } = arg0);
  dependencyMap = tmp4;
  const tmp5 = closure_6();
  const tmpResult = selectedVariantIndex(7268);
  if (tmpResult.getIsVariantProduct(product)) {
    const _Symbol = Symbol;
    const container = tmp5.container;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: intl.string(selectedVariantIndex(1126).t.wbgaj6) };
      const Text = tmp(5087).Text;
      intl = tmp(1126).intl;
      const tmp10 = closure_4(Text, obj2);
      cResult[0] = tmp10;
      let first = tmp10;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === product.variants) {
      if (cResult[2] === selectedVariantIndex) {
        let tmp11;
        if (cResult[3] === tmp5.text) {
          tmp11 = cResult[4];
        }
        if (cResult[5] === tmp5.headerRow) {
          let tmp14;
          let tmp18;
          let tmp20;
          if (cResult[6] === tmp11) {
            tmp14 = cResult[7];
          }
          const _Symbol2 = Symbol;
          const variantsContainer = tmp5.variantsContainer;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(selectedVariantIndex(1126).t.lLFi5U);
            cResult[8] = stringResult;
            tmp18 = stringResult;
          } else {
            tmp18 = cResult[8];
          }
          if (cResult[9] === (undefined !== disabled && disabled)) {
            if (cResult[10] === onVariantSelect) {
              if (cResult[11] === product.variants) {
                if (cResult[12] === selectedVariantIndex) {
                  tmp20 = cResult[13];
                }
                if (cResult[18] === tmp5.variantsContainer) {
                  let tmp23;
                  if (cResult[19] === tmp20) {
                    tmp23 = cResult[20];
                  }
                  if (cResult[21] === tmp5.container) {
                    if (cResult[22] === tmp14) {
                      let tmp27;
                      if (cResult[23] === tmp23) {
                        tmp27 = cResult[24];
                      }
                      return tmp27;
                    }
                  }
                  const obj3 = { style: container, children: items };
                  items = [, ];
                  class V {
                    constructor(arg0, arg1) {
                      closure_0 = arg1;
                      obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F145122 */ } };
                      return closure_1_4(closure_1_8, obj, arg0.variantValue);
                    }
                  }
                  items[1] = tmp23;
                  const tmp30 = closure_5(View, obj3);
                  cResult[21] = tmp5.container;
                  cResult[22] = tmp14;
                  cResult[23] = tmp23;
                  cResult[24] = tmp30;
                  tmp27 = tmp30;
                }
                const obj4 = { style: variantsContainer, role: "radiogroup", "aria-label": tmp18, children: null };
                class V {
                  constructor(arg0, arg1) {
                    closure_0 = arg1;
                    obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F145122 */ } };
                    return closure_1_4(closure_1_8, obj, arg0.variantValue);
                  }
                }
                const tmp26 = closure_4(View, obj4);
                cResult[18] = tmp5.variantsContainer;
                cResult[19] = tmp20;
                cResult[20] = tmp26;
                tmp23 = tmp26;
              }
            }
          }
          if (cResult[14] === (undefined !== disabled && disabled)) {
            if (cResult[15] === onVariantSelect) {
              let tmp21;
              if (cResult[16] === selectedVariantIndex) {
                tmp21 = cResult[17];
              }
              const variants = product.variants;
              const mapped = variants.map(tmp21);
              cResult[9] = undefined !== disabled && disabled;
              cResult[10] = onVariantSelect;
              class V {
                constructor(arg0, arg1) {
                  closure_0 = arg1;
                  obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F145122 */ } };
                  return closure_1_4(closure_1_8, obj, arg0.variantValue);
                }
              }
              cResult[11] = product.variants;
              cResult[12] = selectedVariantIndex;
              cResult[13] = mapped;
              tmp20 = mapped;
            }
          }
          class V {
            constructor(arg0, arg1) {
              closure_0 = arg1;
              obj = { variant: arg0, isSelected: closure_0 === arg1, disabled, onSelect() { /* body not rendered: F145122 */ } };
              return closure_1_4(closure_1_8, obj, arg0.variantValue);
            }
          }
          cResult[14] = undefined !== disabled && disabled;
          cResult[15] = onVariantSelect;
          cResult[16] = selectedVariantIndex;
          cResult[17] = V;
          tmp21 = V;
        }
        const obj5 = { style: tmp5.headerRow, children: items1 };
        items1 = [, tmp11];
        const tmp17 = closure_5(View, obj5);
        cResult[5] = tmp5.headerRow;
        cResult[6] = tmp11;
        cResult[7] = tmp17;
        tmp14 = tmp17;
      }
    }
    if (tmp12) {
      const obj6 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp5.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp12 = closure_4(selectedVariantIndex(5087).Text, obj6);
    }
    cResult[1] = product.variants;
    cResult[2] = selectedVariantIndex;
    cResult[3] = tmp5.text;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    return null;
  }
}) : (function ProductDetailsActionSheetVariants(disabled) {
  let intl;
  let intl2;
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
  let obj = selectedVariantIndex(onVariantSelect[12]);
  let tmp5Result = null;
  if (obj.getIsVariantProduct(product)) {
    const obj2 = { style: tmp.container, children: items1 };
    const obj3 = { style: tmp.headerRow, children: items };
    const obj4 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: intl.string(selectedVariantIndex(onVariantSelect[8]).t.wbgaj6) };
    const Text = tmp2(tmp3[13]).Text;
    intl = tmp2(tmp3[8]).intl;
    items = [closure_4(Text, obj4), ];
    let tmp7Result = product.variants.length > selectedVariantIndex;
    if (tmp7Result) {
      const obj5 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp7Result = tmp7(tmp2(tmp3[13]).Text, obj5);
    }
    items[1] = tmp7Result;
    items1 = [closure_5(View, obj3), ];
    const obj6 = {
      style: tmp.variantsContainer,
      role: "radiogroup",
      "aria-label": intl2.string(selectedVariantIndex(onVariantSelect[8]).t.lLFi5U),
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
          return closure_1_4(closure_1_8, obj, variant.variantValue);
        })
    };
    intl2 = tmp2(tmp3[8]).intl;
    variants = product.variants;
    items1[1] = closure_4(View, obj6);
    tmp5Result = tmp5(tmp6, obj2);
  }
  return tmp5Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default tmp5;
