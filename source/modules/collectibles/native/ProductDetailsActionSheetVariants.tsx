// Module ID: 8761
// Function ID: 69268
// Name: VariantOption
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 8761 (VariantOption)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function VariantOption(onSelect) {
  let isSelected;
  let variant;
  ({ variant, isSelected } = onSelect);
  const tmp = callback2(isSelected);
  let obj = arg1(dependencyMap[5]);
  let isPurchased = obj.useProductPurchaseState(variant).isPurchased;
  obj = { accessibilityRole: "button" };
  if (isPurchased) {
    const intl = arg1(dependencyMap[7]).intl;
    obj = { variantLabel: variant.name };
    let name = intl.formatToPlainString(arg1(dependencyMap[7]).t.SfQB4+, obj);
  } else {
    name = variant.name;
  }
  obj.accessibilityLabel = name;
  obj.accessibilityState = { selected: isSelected };
  obj.onPress = onSelect.onSelect;
  obj.style = tmp.variantOption;
  const obj1 = { style: items };
  const items = [tmp.variantOptionInner, { backgroundColor: variant.variantValue }];
  if (isPurchased) {
    const obj2 = { variant };
    isPurchased = callback(VariantCheckmark, obj2);
  }
  obj1.children = isPurchased;
  obj.children = callback(View, obj1);
  return callback(arg1(dependencyMap[6]).PressableOpacity, obj);
}
function VariantCheckmark(variant) {
  const obj = {};
  const colors = importDefault(dependencyMap[4]).colors;
  obj.color = importDefault(dependencyMap[8])(variant.variant) ? colors.BLACK : colors.WHITE;
  obj.size = "md";
  return closure_4(arg1(dependencyMap[9]).CheckmarkSmallIcon, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { borderRadius: true, display: null, flexDirection: 12, marginTop: require("__exportStarResult1").space.PX_16, marginHorizontal: require("__exportStarResult1").space.PX_16, gap: require("__exportStarResult1").space.PX_8 };
__exportStarResult1.container = __exportStarResult1;
const obj1 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: require("__exportStarResult1").space.PX_12 };
__exportStarResult1.headerRow = obj1;
const obj2 = { 0: null, 9223372036854775807: null, 0: null, -9223372036854775808: null, gap: require("__exportStarResult1").space.PX_12 };
__exportStarResult1.variantsContainer = obj2;
__exportStarResult1.text = { display: null, flexShrink: "Group 3", type: 4 };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
let closure_7 = __exportStarResult1.createStyles((arg0) => {
  let obj = {};
  obj = { borderRadius: importDefault(dependencyMap[4]).radii.round };
  const colors = importDefault(dependencyMap[4]).colors;
  obj.borderColor = arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG;
  obj.variantOption = obj;
  obj = { borderRadius: importDefault(dependencyMap[4]).radii.round, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
  obj.variantOptionInner = obj;
  return obj;
});
const result = __exportStarResult1.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default function ProductDetailsActionSheetVariants(onVariantSelect) {
  let product;
  let selectedVariantIndex;
  ({ product, selectedVariantIndex } = onVariantSelect);
  const arg1 = selectedVariantIndex;
  const importDefault = onVariantSelect.onVariantSelect;
  const tmp = __exportStarResult1();
  let obj = arg1(dependencyMap[10]);
  let tmp3Result = null;
  if (obj.getIsVariantProduct(product)) {
    obj = { style: tmp.container };
    obj = { style: tmp.headerRow };
    const obj1 = { cachedAt: 1231704321, edpbxy: 32296513 };
    const intl = arg1(dependencyMap[7]).intl;
    obj1.children = intl.string(arg1(dependencyMap[7]).t.wbgaj6);
    const items = [callback(arg1(dependencyMap[11]).Text, obj1), ];
    let tmp9 = product.variants.length > selectedVariantIndex;
    if (tmp9) {
      const obj2 = { 803799044: true, 1269170180: true, 711589892: true, style: tmp.text, children: product.variants[selectedVariantIndex].variantLabel };
      tmp9 = callback(arg1(dependencyMap[11]).Text, obj2);
    }
    items[1] = tmp9;
    obj.children = items;
    const items1 = [closure_5(View, obj), ];
    const obj3 = { style: tmp.variantsContainer };
    const variants = product.variants;
    obj3.children = variants.map((variant) => {
      const selectedVariantIndex = arg1;
      return callback(closure_8, {
        variant,
        isSelected: selectedVariantIndex === arg1,
        onSelect() {
          return callback(arg1);
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
