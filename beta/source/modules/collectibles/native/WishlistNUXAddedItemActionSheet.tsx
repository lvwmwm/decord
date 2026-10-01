// Module ID: 8233
// Function ID: 8234
// Name: WishlistNUXAddedItemActionSheet
// Dependencies: [32, 19, 17, 1372, 7628, 21, 4836, 576, 504, 1974, 4800, 7624, 6603, 8234, 6571, 8235, 4832, 1115, 5745, 5281, 2]
// Exports: default

// Module 8233 (WishlistNUXAddedItemActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import Constants from "Constants" /* 7628 */;
import SKUPreview from "SKUPreview" /* 8234 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let obj2;
let obj3;
const View = react_native.View;
const UserProfileSections = Constants.UserProfileSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, subtitle: { textAlign: "center" } };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx");

export default function WishlistNUXAddedItemActionSheet(product) {
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let obj3;
  product = product.product;
  require = product;
  let memo;
  const tmp = closure_10();
  let obj = require("get initialized");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  const items1 = [product];
  memo = react.useMemo(() => {
    if (require.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      const obj3 = { type: "bundle", items: null, previewAssets: null };
      ({ items: obj2.items, previewAssets: obj2.previewAssets } = require);
      return obj3;
    } else {
      const first = _slicedToArray(tmp.items, 1)[0];
      let tmp5;
      if (null != first) {
        tmp5 = { type: "single", item: first };
        const obj = { type: "single", item: first };
      }
      return tmp5;
    }
  }, items1);
  const items2 = [stateFromStores];
  const callback = react.useCallback(() => {
    const obj = stateFromStores(memo[10]);
    obj.hideActionSheet();
  }, []);
  const items3 = [memo];
  const callback1 = react.useCallback(() => {
    let items;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (null != stateFromStores) {
      const obj2 = { userId: tmp4.id, sourceAnalyticsLocations: items, initialSection: UserProfileSections.WISHLIST };
      items = [];
      const tmpResult = showUserProfileActionSheetDefault;
      items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      tmpResult(obj2);
    }
  }, items2);
  const callback2 = react.useCallback(() => {
    let tmp2 = null;
    if (null != memo) {
      const obj = { collectiblesItemData: tmp };
      tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
    }
    return tmp2;
  }, items3);
  let obj2 = { children: closure_9(View, obj3) };
  obj3 = { style: tmp.container, children: items4 };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  items4 = [closure_8(stateFromStores(memo[15]), { renderPreview: callback2 }), , ];
  const obj4 = { style: tmp.textContainer, children: items5 };
  const obj5 = { variant: "heading-lg/extrabold", color: "text-strong", accessibilityRole: "header", children: intl.string(require("intl").t["3T2jbf"]) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items5 = [closure_8(Text, obj5), ];
  const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: intl2.string(require("intl").t.SXb73A) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items5[1] = closure_8(Text2, obj6);
  items4[1] = closure_9(View, obj4);
  const obj7 = { direction: "horizontal", children: items6 };
  const ButtonGroup = require("ButtonGroup").ButtonGroup;
  const obj8 = { text: intl3.string(require("intl").t.tM4PUv), onPress: callback, size: "lg", variant: "primary", grow: true };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items6 = [closure_8(Button, obj8), ];
  const obj9 = { text: intl4.string(require("intl").t.TxBQzD), onPress: callback1, variant: "secondary", size: "lg", grow: true };
  const Button2 = require("components/Button/Button").Button;
  intl4 = require("intl").intl;
  items6[1] = closure_8(Button2, obj9);
  items4[2] = closure_9(ButtonGroup, obj7);
  return closure_8(BottomSheet, obj2);
};
