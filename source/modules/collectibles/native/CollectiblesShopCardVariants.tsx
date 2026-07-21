// Module ID: 8724
// Function ID: 69028
// Name: VariantOption
// Dependencies: []

// Module 8724 (VariantOption)
function VariantOption(variant) {
  variant = variant.variant;
  const tmp = callback3(variant.isSelected);
  let obj = arg1(dependencyMap[5]);
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  obj = { style: items };
  const items = [tmp.variantOption, { zIndex: variant.zIndex }];
  obj = { style: items1 };
  const items1 = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
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
  const colors = importDefault(dependencyMap[4]).colors;
  obj.color = importDefault(dependencyMap[6])(variant.variant) ? colors.BLACK : colors.WHITE;
  obj.size = "xxs";
  return closure_4(arg1(dependencyMap[7]).CheckmarkSmallIcon, obj);
}
function VariantOverflowOption(isSelected) {
  const tmp = callback3(isSelected.isSelected);
  let obj = { style: items };
  const items = [tmp.variantOption, { zIndex: isSelected.zIndex }];
  obj = { style: items1 };
  const items1 = [, ];
  ({ variantOptionInner: arr2[0], variantOverflowInner: arr2[1] } = tmp);
  obj = { color: importDefault(dependencyMap[4]).colors.WHITE, size: "xxs" };
  obj.children = callback(arg1(dependencyMap[8]).PlusSmallIcon, obj);
  obj.children = callback(View, obj);
  return callback(View, obj);
}
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { paddingStart: importDefault(dependencyMap[4]).space.PX_4 };
obj.variantsContainer = obj;
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = { 9223372036854775807: "/assets/modules/premium/native/images/perks", 9223372036854775807: 300.5, 0: 175, 9223372036854775807: null, 0: "034593f3dac51b7d85899e7191ac5a9f", 9223372036854775807: "client_theme", -9223372036854775808: "png", 9223372036854775807: true, marginStart: -importDefault(dependencyMap[4]).space.PX_4, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[4]).radii.round };
  obj.variantOption = obj;
  obj = { borderRadius: importDefault(dependencyMap[4]).radii.round };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  obj.borderWidth = num;
  obj.borderColor = importDefault(dependencyMap[4]).colors.BUTTON_OUTLINE_PRIMARY_TEXT;
  obj.variantOptionInner = obj;
  obj.variantOverflowInner = { backgroundColor: importDefault(dependencyMap[4]).colors.ICON_MUTED };
  return obj;
});
const obj5 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function CardProductVariants(product) {
  product = product.product;
  let obj = arg1(dependencyMap[9]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const arg1 = defaultVariantIndex;
  const tmp = callback2();
  if (obj2.getIsVariantProduct(product)) {
    let num3 = 3;
    if (product.variants.length <= 4) {
      num3 = length;
    }
    obj = { style: tmp.variantsContainer };
    const variants = product.variants;
    const substr = variants.slice(0, num3);
    const items = [substr.map((variant) => callback(closure_8, { variant, isSelected: arg1 === defaultVariantIndex, zIndex: 4 - Math.abs(defaultVariantIndex - arg1) }, variant.variantValue)), ];
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
  const obj2 = arg1(dependencyMap[10]);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardVariants.tsx");

export default memoResult;
