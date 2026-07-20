// Module ID: 8756
// Function ID: 69233
// Name: VariantOption
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 8756 (VariantOption)
import "result";
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

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
({ jsx: closure_4, jsxs: closure_5 } = result);
result = {};
result = { "Bool(true)": "badges", "Bool(true)": "message", "Bool(true)": 1, marginTop: require("result").space.PX_16, marginHorizontal: require("result").space.PX_16, gap: require("result").space.PX_8 };
result.container = result;
const obj1 = { -9223372036854775808: true, filter: true, gap: require("result").space.PX_12 };
result.headerRow = obj1;
result.variantsContainer = { gap: require("result").space.PX_12 };
result.text = {};
result = result.createStyles(result);
let closure_7 = result.createStyles((arg0) => {
  let obj = {};
  obj = { disabled: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240315037966, isOwner: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004778309841467123, onPress: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005717829146425413, onLongPress: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003283634378533188, handleMessage: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016578092, nickname: 131072.00146484375, borderRadius: importDefault(dependencyMap[4]).radii.round };
  const colors = importDefault(dependencyMap[4]).colors;
  obj.borderColor = arg0 ? colors.BUTTON_OUTLINE_PRIMARY_TEXT : colors.BORDER_STRONG;
  obj.variantOption = obj;
  obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, borderRadius: importDefault(dependencyMap[4]).radii.round, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
  obj.variantOptionInner = obj;
  return obj;
});
result = result.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetVariants.tsx");

export default function ProductDetailsActionSheetVariants(onVariantSelect) {
  let product;
  let selectedVariantIndex;
  ({ product, selectedVariantIndex } = onVariantSelect);
  const arg1 = selectedVariantIndex;
  const importDefault = onVariantSelect.onVariantSelect;
  const tmp = result();
  let obj = arg1(dependencyMap[10]);
  let tmp3Result = null;
  if (obj.getIsVariantProduct(product)) {
    obj = { style: tmp.container };
    obj = { style: tmp.headerRow };
    const obj1 = { INTEGRATION_CREATE: -833552028, ConstraintReasonCode: -314949303 };
    const intl = arg1(dependencyMap[7]).intl;
    obj1.children = intl.string(arg1(dependencyMap[7]).t.wbgaj6);
    const items = [callback(arg1(dependencyMap[11]).Text, obj1), ];
    let tmp9 = product.variants.length > selectedVariantIndex;
    if (tmp9) {
      const obj2 = { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true, style: tmp.text, children: product.variants[selectedVariantIndex].variantLabel };
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
