// Module ID: 12716
// Function ID: 12717
// Name: ProductDetailsActionSheetInfo
// Dependencies: [17, 21, 4836, 576, 12717, 4832, 6974, 8303, 1115, 12718, 1974, 2]
// Exports: default

// Module 12716 (ProductDetailsActionSheetInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import Text_Text from "Text/Text" /* 4832 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8303 */;
import useProductDescription from "useProductDescription" /* 12717 */;
import InlinePriceTagDefault from "InlinePriceTag" /* 12718 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
function ProductNameAndDescription(product) {
  let items;
  product = product.product;
  const tmp = closure_6();
  const obj2 = { style: tmp.description, children: items };
  const obj = useProductDescription;
  const productDescription = obj.useProductDescription(product);
  items = [, ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: product.name };
  items[0] = React3(Text_Text.Text, obj3);
  items[1] = React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: productDescription });
  return hasOwnProperty(View, obj2);
}
function ProductPurchaseStatus(product) {
  let children;
  let intl;
  let intl2;
  product = product.product;
  const onTrackPress = product.onTrackPress;
  const obj = CollectiblesUtils;
  const result = obj.isPremiumCollectiblesProduct(product);
  const obj2 = useProductPurchaseState;
  const productPurchaseState = obj2.useProductPurchaseState(product);
  const tmp7 = View;
  if (productPurchaseState.isPurchased) {
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl2.string(intl3.t["6cfuDj"]) };
    const Text2 = tmp(4832).Text;
    intl2 = tmp(1115).intl;
    children = tmp6(Text2, obj3);
  } else if (tmp5) {
    const obj4 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl.string(intl3.t.BEjTij) };
    const Text = tmp(4832).Text;
    intl = tmp(1115).intl;
    children = tmp6(Text, obj4);
  } else {
    children = !result;
    if (children) {
      const obj5 = { product, onTrackPress };
      children = tmp6(InlinePriceTagDefault, obj5);
    }
  }
  return React3(tmp7, { children });
}
function BundleProductDetailsActionSheetInfo(arg0) {
  let items;
  let onTrackPress;
  let product;
  ({ product, onTrackPress } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: React3(ProductPurchaseStatus, { product, onTrackPress }) };
  items = [, ];
  ({ body: arr[0], bundleBody: arr[1] } = tmp);
  return React3(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { title: { marginBottom: 2 }, body: obj2, bundleBody: { marginTop: 0 }, description: { flexDirection: "column", gap: 6 } };
obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", gap: 20 };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default function ProductDetailsActionSheetInfo(arg0) {
  let items;
  let onTrackPress;
  let product;
  let tmp7;
  ({ product, onTrackPress } = arg0);
  const tmp = closure_6();
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const obj2 = { product, onTrackPress };
    tmp7 = React3(BundleProductDetailsActionSheetInfo, obj2);
  } else {
    const obj = { style: tmp.body, children: items };
    const obj3 = { product };
    items = [React3(ProductNameAndDescription, obj3), ];
    const obj4 = { product, onTrackPress };
    items[1] = React3(ProductPurchaseStatus, obj4);
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
};
