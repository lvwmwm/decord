// Module ID: 8762
// Function ID: 69279
// Name: ProductNameAndDescription
// Dependencies: [27, 33, 4130, 689, 8763, 4126, 6786, 8713, 1212, 8764, 8233, 1876, 2]
// Exports: default

// Module 8762 (ProductNameAndDescription)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = callback3();
  let obj = require(8763) /* _createForOfIteratorHelperLoose */;
  obj = { style: tmp.description };
  const productDescription = obj.useProductDescription(product);
  obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: product.name };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { variant: "text-md/medium", color: "text-default", children: productDescription };
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return callback2(View, obj);
}
function ProductPurchaseStatus(product) {
  product = product.product;
  let obj = require(6786) /* getPriceForCollectiblesProduct */;
  const result = obj.isPremiumCollectiblesProduct(product);
  let obj1 = require(8713) /* getProductPurchaseState */;
  const productPurchaseState = obj1.useProductPurchaseState(product);
  obj = {};
  if (productPurchaseState.isPurchased) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.children = intl2.string(require(1212) /* getSystemLocale */.t["6cfuDj"]);
    let tmp6 = callback(require(4126) /* Text */.Text, obj);
  } else if (tmp3) {
    obj1 = { variant: "text-md/semibold", color: "interactive-text-active" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t.BEjTij);
    tmp6 = callback(require(4126) /* Text */.Text, obj1);
  } else {
    tmp6 = !result;
    if (tmp6) {
      const obj2 = { product, onTrackPress: product.onTrackPress };
      tmp6 = callback(importDefault(8764), obj2);
    }
  }
  obj.children = tmp6;
  return callback(View, obj);
}
function BundleProductDetailsActionSheetInfo(onTrackPress) {
  const product = onTrackPress.product;
  const tmp = callback3();
  let obj = require(8233) /* useCollectiblesMobileFlexibleBundlesExperiment */;
  const enabled = obj.useCollectiblesMobileFlexibleBundlesExperiment("BundleProductDetailsActionSheetInfo").enabled;
  obj = {};
  const items = [tmp.body, ];
  let bundleBody = enabled;
  if (enabled) {
    bundleBody = tmp.bundleBody;
  }
  items[1] = bundleBody;
  obj.style = items;
  let tmp4 = !enabled;
  if (tmp4) {
    obj = { product };
    tmp4 = callback(ProductNameAndDescription, obj);
  }
  const items1 = [tmp4, callback(ProductPurchaseStatus, { product, onTrackPress: onTrackPress.onTrackPress })];
  obj.children = items1;
  return closure_5(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = { title: { marginBottom: 2 } };
obj = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "column", gap: 20 };
obj.body = obj;
obj.bundleBody = { marginTop: 0 };
obj.description = { flexDirection: "column", gap: 6 };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default function ProductDetailsActionSheetInfo(arg0) {
  let onTrackPress;
  let product;
  ({ product, onTrackPress } = arg0);
  if (product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE) {
    let obj = { product, onTrackPress };
    let tmp8 = callback(BundleProductDetailsActionSheetInfo, obj);
  } else {
    obj = { style: tmp.body };
    obj = { product };
    const items = [callback(ProductNameAndDescription, obj), ];
    const obj1 = { product, onTrackPress };
    items[1] = callback(ProductPurchaseStatus, obj1);
    obj.children = items;
    tmp8 = callback2(View, obj);
  }
  return tmp8;
};
