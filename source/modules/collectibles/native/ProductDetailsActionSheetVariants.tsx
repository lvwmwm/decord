// Module ID: 8768
// Function ID: 69309
// Name: VariantOption
// Dependencies: [31, 27, 33, 4130, 689, 8713, 4660, 1212, 8733, 5154, 6785, 4126, 2]
// Exports: default

// Module 8768 (VariantOption)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function VariantOption(onSelect) {
  let isSelected;
  let variant;
  ({ variant, isSelected } = onSelect);
  const tmp = callback2(isSelected);
  let obj = require(8713) /* getProductPurchaseState */;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  obj = { accessibilityRole: "button" };
  if (isPurchased) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { variantLabel: variant.name };
    let name = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["SfQB4+"], obj);
  } else {
    name = variant.name;
  }
  obj.accessibilityLabel = name;
  obj.accessibilityState = { selected: isSelected };
  obj.onPress = onSelect.onSelect;
  obj.style = tmp.variantOption;
  const obj1 = { style: items };
  items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    const obj2 = { variant };
    isPurchased = callback(VariantCheckmark, obj2);
  }
  obj1.children = isPurchased;
  obj.children = callback(View, obj1);
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
}
function VariantCheckmark(variant) {
  const obj = {};
  const colors = importDefault(689).colors;
  obj.color = importDefault(8733)(variant.variant) ? colors.BLACK : colors.WHITE;
  obj.size = "md";
  return closure_4(require(5154) /* CheckmarkSmallIcon */.CheckmarkSmallIcon, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, display: "flex", flexDirection: "column", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.headerRow = obj1;
let obj2 = { display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.variantsContainer = obj2;
_createForOfIteratorHelperLoose.text = { flexGrow: 1, flexShrink: 1, minWidth: 28 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { width: 28, height: 28, borderRadius: importDefault(689).radii.round, justifyContent: "center", alignItems: "center", borderWidth: 1 };
  const colors = importDefault(689).colors;
  obj.borderColor = arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG;
  obj.variantOption = obj;
  obj = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: importDefault(689).radii.round, borderWidth: 1, borderColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.variantOptionInner = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default function ProductDetailsActionSheetVariants(onVariantSelect) {
  let product;
  let selectedVariantIndex;
  ({ product, selectedVariantIndex } = onVariantSelect);
  onVariantSelect = onVariantSelect.onVariantSelect;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = selectedVariantIndex(6785);
  let tmp3Result = null;
  if (obj.getIsVariantProduct(product)) {
    obj = { style: tmp.container };
    obj = { style: tmp.headerRow };
    const obj1 = { variant: "text-md/bold", color: "mobile-text-heading-primary" };
    const intl = selectedVariantIndex(1212).intl;
    obj1.children = intl.string(selectedVariantIndex(1212).t.wbgaj6);
    const items = [callback(selectedVariantIndex(4126).Text, obj1), ];
    let tmp9 = product.variants.length > selectedVariantIndex;
    if (tmp9) {
      const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp9 = callback(selectedVariantIndex(4126).Text, obj2);
    }
    items[1] = tmp9;
    obj.children = items;
    const items1 = [closure_5(View, obj), ];
    const obj3 = { style: tmp.variantsContainer };
    const variants = product.variants;
    obj3.children = variants.map((variant) => {
      let closure_0 = arg1;
      return outer1_4(outer1_8, {
        variant,
        isSelected: closure_0 === arg1,
        onSelect() {
          return outer1_1(closure_0);
        }
      }, variant.variantValue);
    });
    items1[1] = callback(View, obj3);
    obj.children = items1;
    tmp3Result = tmp3(View, obj);
    const tmp4 = View;
    const tmp5 = View;
  }
  return tmp3Result;
};
