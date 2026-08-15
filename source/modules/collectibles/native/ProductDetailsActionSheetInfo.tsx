// Module ID: 9578
// Function ID: 9579
// Name: ProductNameAndDescription
// Dependencies: [17, 21, 4661, 712, 9579, 4734, 5313, 9243, 1236, 9580, 1949, 2]
// Exports: default

// Module 9578 (ProductNameAndDescription)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = callback3();
  let obj = require(9579) /* getBundleDescription */;
  obj = { style: tmp.description, children: null };
  const productDescription = obj.useProductDescription(product);
  obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: product.name };
  const items = [callback(require(4734) /* Text */.Text, obj), callback(require(4734) /* Text */.Text, { variant: "text-md/medium", color: "text-default", children: productDescription })];
  obj[1] = items;
  return callback2(View, obj);
}
function ProductPurchaseStatus(product) {
  product = product.product;
  let obj = require(5313) /* getItemRecordsFromPurchases */;
  const result = obj.isPremiumCollectiblesProduct(product);
  let obj1 = require(9243) /* getProductPurchaseState */;
  const productPurchaseState = obj1.useProductPurchaseState(product);
  if (productPurchaseState.isPurchased) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl2 = tmp(1236).intl;
    obj[2] = intl2.string(tmp(1236).t["6cfuDj"]);
    let children = tmp6(tmp(4734).Text, obj);
  } else if (tmp5) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t.BEjTij);
    children = tmp6(tmp(4734).Text, obj);
  } else {
    children = !result;
    if (!result) {
      obj1 = { product: null, onTrackPress: null };
      obj1[0] = product;
      obj1[1] = product.onTrackPress;
      children = tmp6(importDefault(9580), obj1);
    }
  }
  return closure_4(View, { children });
}
function BundleProductDetailsActionSheetInfo(arg0) {
  let onTrackPress;
  let product;
  ({ product, onTrackPress } = arg0);
  const tmp = callback3();
  const items = [, ];
  ({ body: arr[0], bundleBody: arr[1] } = tmp);
  return callback(View, { style: items, children: callback(ProductPurchaseStatus, { product, onTrackPress }) });
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { title: { marginBottom: 2 }, body: null, bundleBody: null, description: null };
obj = { marginTop: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_16, flexDirection: "column", gap: 20 };
obj[1] = obj;
obj[2] = { marginTop: 0 };
obj[3] = { flexDirection: "column", gap: 6 };
let closure_6 = createCacheKey.createStyles(obj);
let result = require("createCacheKey").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default function ProductDetailsActionSheetInfo(arg0) {
  let onTrackPress;
  let product;
  ({ product, onTrackPress } = arg0);
  if (product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE) {
    let obj = { product: null, onTrackPress: null };
    obj[0] = product;
    obj[1] = onTrackPress;
    let tmp7 = callback(BundleProductDetailsActionSheetInfo, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.body;
    obj = { product: null };
    obj[0] = product;
    const items = [callback(ProductNameAndDescription, obj), ];
    const obj1 = { product: null, onTrackPress: null };
    obj1[0] = product;
    obj1[1] = onTrackPress;
    items[1] = callback(ProductPurchaseStatus, obj1);
    obj[1] = items;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
};
