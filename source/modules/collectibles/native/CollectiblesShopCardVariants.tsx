// Module ID: 8771
// Function ID: 69307
// Name: VariantOption
// Dependencies: [31, 27, 33, 4130, 689, 8754, 8772, 5154, 8773, 8705, 6785, 2]

// Module 8771 (VariantOption)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
function VariantOption(variant) {
  variant = variant.variant;
  const tmp = callback3(variant.isSelected);
  let obj = require(8754) /* getProductPurchaseState */;
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  obj = { style: items };
  items = [tmp.variantOption, { zIndex: variant.zIndex }];
  obj = { style: items1 };
  items1 = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    const obj1 = { variant };
    isPurchased = callback(VariantCheckmark, obj1);
  }
  obj.children = isPurchased;
  obj.children = callback(View, obj);
  return callback(View, obj);
}
function VariantCheckmark(variant) {
  const obj = {};
  const colors = importDefault(689).colors;
  obj.color = importDefault(8772)(variant.variant) ? colors.BLACK : colors.WHITE;
  obj.size = "xxs";
  return closure_4(require(5154) /* CheckmarkSmallIcon */.CheckmarkSmallIcon, obj);
}
function VariantOverflowOption(isSelected) {
  const tmp = callback3(isSelected.isSelected);
  let obj = { style: items };
  items = [tmp.variantOption, { zIndex: isSelected.zIndex }];
  obj = { style: items1 };
  items1 = [, ];
  ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp);
  obj = { color: importDefault(689).colors.WHITE, size: "xxs" };
  obj.children = callback(require(8773) /* PlusSmallIcon */.PlusSmallIcon, obj);
  obj.children = callback(View, obj);
  return callback(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { display: "flex", flexDirection: "row", alignItems: "center", paddingStart: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.variantsContainer = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { marginStart: -importDefault(689).space.PX_4, width: 14, height: 14, borderWidth: 1, borderColor: importDefault(689).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(689).radii.round, justifyContent: "center", alignItems: "center" };
  obj.variantOption = obj;
  obj = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: importDefault(689).radii.round };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  obj.borderWidth = num;
  obj.borderColor = importDefault(689).colors.BUTTON_OUTLINE_PRIMARY_TEXT;
  obj.variantOptionInner = obj;
  obj.variantOverflowInner = { backgroundColor: importDefault(689).colors.ICON_MUTED };
  return obj;
});
const memoResult = require("result").memo(function CardProductVariants(product) {
  product = product.product;
  let obj = defaultVariantIndex(8705);
  defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const tmp = callback2();
  if (obj2.getIsVariantProduct(product)) {
    let num3 = 3;
    if (product.variants.length <= 4) {
      num3 = length;
    }
    obj = { style: tmp.variantsContainer };
    const variants = product.variants;
    const substr = variants.slice(0, num3);
    const items = [substr.map((variant) => outer1_4(outer1_8, { variant, isSelected: arg1 === defaultVariantIndex, zIndex: 4 - Math.abs(defaultVariantIndex - arg1) }, variant.variantValue)), ];
    let tmp7Result = num3 !== length;
    if (tmp7Result) {
      obj = { isSelected: defaultVariantIndex >= 3 };
      let num5 = 0;
      if (defaultVariantIndex >= 3) {
        num5 = 4;
      }
      obj.zIndex = num5;
      tmp7Result = closure_4(VariantOverflowOption, obj);
      const tmp7 = closure_4;
      const tmp8 = VariantOverflowOption;
    }
    items[1] = tmp7Result;
    obj.children = items;
    return closure_5(View, obj);
  } else {
    return null;
  }
  obj2 = defaultVariantIndex(6785);
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardVariants.tsx");

export default memoResult;
