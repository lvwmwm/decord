// Module ID: 14736
// Function ID: 112283
// Name: DevToolsShopScreen
// Dependencies: [31, 27, 4129, 33, 4130, 689, 5160, 566, 14635, 1334, 4541, 5501, 5165, 5503, 14709, 5502, 2]
// Exports: default

// Module 14736 (DevToolsShopScreen)
import "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default function DevToolsShopScreen() {
  let handleToggleDismissState;
  let isDismissed;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.get("shop_disable_cache"));
  let obj1 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_4.get("shop_include_unpublished"));
  let obj2 = require(566) /* initialize */;
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_4.get("shop_show_debug_overlay"));
  let obj3 = require(566) /* initialize */;
  const items3 = [_isNativeReflectConstruct];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => outer1_4.get("bypass_google_sku_sync"));
  const tmp = _createForOfIteratorHelperLoose();
  const tmp6 = importDefault(14635);
  obj = { style: tmp.wrap };
  obj = { paddingVertical: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_16 + importDefault(5160)({ includeKeyboardHeight: true }).insets.bottom };
  ({ isDismissed, handleToggleDismissState } = importDefault(14635)(require(1334) /* DismissibleContent */.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING));
  obj.contentContainerStyle = obj;
  obj1 = { spacing: 16 };
  obj2 = { title: "Shop Toggles", hasIcons: false };
  obj3 = {
    label: "Disable collectibles shop cache",
    subLabel: "shop_disable_cache",
    subLabelLineClamp: 1,
    trailing: callback(require(5503) /* FormSwitch */.FormSwitch, {
      value: stateFromStores,
      onValueChange(arg0) {
        return outer1_0(outer1_2[14]).toggle("shop_disable_cache", arg0);
      }
    })
  };
  const items4 = [callback(require(5165) /* TableRowInner */.TableRow, obj3), , , , ];
  const obj5 = {
    label: "Show unpublished items in collectibles shop",
    subLabel: "shop_include_unpublished",
    subLabelLineClamp: 1,
    trailing: callback(require(5503) /* FormSwitch */.FormSwitch, {
      value: stateFromStores1,
      onValueChange(arg0) {
        return outer1_0(outer1_2[14]).toggle("shop_include_unpublished", arg0);
      }
    })
  };
  items4[1] = callback(require(5165) /* TableRowInner */.TableRow, obj5);
  const obj7 = { label: "Collectibles Marketing", subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING", subLabelLineClamp: 1, value: isDismissed, onValueChange: handleToggleDismissState };
  items4[2] = callback(require(5502) /* TableSwitchRow */.TableSwitchRow, obj7);
  const obj8 = {
    label: "Show debug log overlay in collectibles shop",
    subLabel: "shop_show_debug_overlay",
    subLabelLineClamp: 1,
    trailing: callback(require(5503) /* FormSwitch */.FormSwitch, {
      value: stateFromStores2,
      onValueChange(arg0) {
        return outer1_0(outer1_2[14]).toggle("shop_show_debug_overlay", arg0);
      }
    })
  };
  items4[3] = callback(require(5165) /* TableRowInner */.TableRow, obj8);
  const obj10 = {
    label: "[Android] Bypass Google SKU sync in collectibles shop",
    subLabel: "bypass_google_sku_sync",
    subLabelLineClamp: 1,
    trailing: callback(require(5503) /* FormSwitch */.FormSwitch, {
      value: stateFromStores3,
      onValueChange(arg0) {
        return outer1_0(outer1_2[14]).toggle("bypass_google_sku_sync", arg0);
      }
    })
  };
  items4[4] = callback(require(5165) /* TableRowInner */.TableRow, obj10);
  obj2.children = items4;
  obj1.children = callback2(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj2);
  obj.children = callback(require(4541) /* Stack */.Stack, obj1);
  return callback(ScrollView, obj);
};
