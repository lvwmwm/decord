// Module ID: 8712
// Function ID: 68827
// Name: WishlistNUXAddedItemActionSheet
// Dependencies: [57, 31, 27, 1849, 8308, 33, 4130, 689, 566, 1876, 4098, 8537, 5482, 8713, 5187, 8714, 4126, 1212, 4965, 4543, 2]
// Exports: default

// Module 8712 (WishlistNUXAddedItemActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
let require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textContainer = { alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx");

export default function WishlistNUXAddedItemActionSheet(product) {
  product = product.product;
  const require = product;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = require(memo[8]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCurrentUser(), []);
  const items1 = [product];
  memo = React.useMemo(() => {
    if (product.type === product(memo[9]).CollectiblesItemType.BUNDLE) {
      let obj = { type: "bundle" };
      ({ items: obj2.items, previewAssets: obj2.previewAssets } = product);
      return obj;
    } else {
      const first = outer1_3(product.items, 1)[0];
      let tmp5;
      if (null != first) {
        obj = { type: "single", item: first };
        tmp5 = obj;
      }
      return tmp5;
    }
  }, items1);
  const items2 = [stateFromStores];
  const callback = React.useCallback(() => {
    stateFromStores(memo[10]).hideActionSheet();
  }, []);
  const items3 = [memo];
  const callback1 = React.useCallback(() => {
    let obj = stateFromStores(memo[10]);
    obj.hideAllActionSheets();
    if (null != stateFromStores) {
      obj = { userId: stateFromStores.id };
      const items = [stateFromStores(memo[12]).COLLECTIBLES_SHOP];
      obj.sourceAnalyticsLocations = items;
      obj.initialSection = outer1_7.WISHLIST;
      stateFromStores(memo[11])(obj);
      const tmp4 = stateFromStores(memo[11]);
    }
  }, items2);
  const callback2 = React.useCallback(() => {
    let tmp = null;
    if (null != memo) {
      const obj = { collectiblesItemData: memo };
      tmp = outer1_8(product(memo[13]).CollectiblesPreview, obj);
    }
    return tmp;
  }, items3);
  obj = {};
  obj = { style: tmp.container };
  const items4 = [callback(stateFromStores(memo[15]), { renderPreview: callback2 }), , ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = { variant: "heading-lg/extrabold", color: "text-strong", accessibilityRole: "header" };
  const intl = require(memo[17]).intl;
  obj2.children = intl.string(require(memo[17]).t["3T2jbf"]);
  const items5 = [callback(require(memo[16]).Text, obj2), ];
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle };
  const intl2 = require(memo[17]).intl;
  obj3.children = intl2.string(require(memo[17]).t.SXb73A);
  items5[1] = callback(require(memo[16]).Text, obj3);
  obj1.children = items5;
  items4[1] = callback2(View, obj1);
  const obj4 = { direction: "horizontal" };
  const obj5 = { text: null, onPress: null, size: "lg", variant: "primary", grow: true };
  const intl3 = require(memo[17]).intl;
  obj5.text = intl3.string(require(memo[17]).t.tM4PUv);
  obj5.onPress = callback;
  const items6 = [callback(require(memo[19]).Button, obj5), ];
  const obj6 = { text: null, onPress: null, variant: "secondary", size: "lg", grow: true };
  const intl4 = require(memo[17]).intl;
  obj6.text = intl4.string(require(memo[17]).t.TxBQzD);
  obj6.onPress = callback1;
  items6[1] = callback(require(memo[19]).Button, obj6);
  obj4.children = items6;
  items4[2] = callback2(require(memo[18]).ButtonGroup, obj4);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(require(memo[14]).BottomSheet, obj);
};
