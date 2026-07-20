// Module ID: 8750
// Function ID: 69203
// Name: ProductNameAndDescription
// Dependencies: [305070080, 79429632, 571539456, 355139584, 443940864, 270270464, 131072, 964362240, 520093696, 3271557120, 3791650830, 553648129, 0]
// Exports: default

// Module 8750 (ProductNameAndDescription)
import result from "result";

function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = callback3();
  let obj = require(dependencyMap[4]);
  obj = { style: tmp.description };
  const productDescription = obj.useProductDescription(product);
  obj = { style: tmp.title, children: product.name };
  const items = [callback(require(dependencyMap[5]).Text, obj), callback(require(dependencyMap[5]).Text, { children: productDescription })];
  obj.children = items;
  return callback2(View, obj);
}
function ProductPurchaseStatus(product) {
  product = product.product;
  let obj = require(dependencyMap[6]);
  const result = obj.isPremiumCollectiblesProduct(product);
  let obj1 = require(dependencyMap[7]);
  const productPurchaseState = obj1.useProductPurchaseState(product);
  obj = {};
  if (productPurchaseState.isPurchased) {
    obj = {};
    const intl2 = require(dependencyMap[8]).intl;
    obj.children = intl2.string(require(dependencyMap[8]).t.6cfuDj);
    let tmp6 = callback(require(dependencyMap[5]).Text, obj);
  } else if (tmp3) {
    obj1 = {};
    const intl = require(dependencyMap[8]).intl;
    obj1.children = intl.string(require(dependencyMap[8]).t.BEjTij);
    tmp6 = callback(require(dependencyMap[5]).Text, obj1);
  } else {
    tmp6 = !result;
    if (tmp6) {
      const obj2 = { product, onTrackPress: product.onTrackPress };
      tmp6 = callback(importDefault(dependencyMap[9]), obj2);
    }
  }
  obj.children = tmp6;
  return callback(View, obj);
}
function BundleProductDetailsActionSheetInfo(onTrackPress) {
  const product = onTrackPress.product;
  const tmp = callback3();
  let obj = require(dependencyMap[10]);
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
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = { title: { marginBottom: 2 } };
obj = { marginTop: importDefault(dependencyMap[3]).space.PX_24, marginHorizontal: importDefault(dependencyMap[3]).space.PX_16, flexDirection: "column", gap: 20 };
obj.body = obj;
obj.bundleBody = { marginTop: 0 };
obj.description = { 0: 0, 9223372036854775807: null };
let closure_6 = _module1.createStyles(obj);
result = result.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default function ProductDetailsActionSheetInfo(arg0) {
  let onTrackPress;
  let product;
  ({ product, onTrackPress } = arg0);
  if (product.type === require(dependencyMap[11]).CollectiblesItemType.BUNDLE) {
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
