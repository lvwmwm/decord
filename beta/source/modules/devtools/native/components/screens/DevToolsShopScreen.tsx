// Module ID: 15318
// Function ID: 15319
// Name: DevToolsShopScreen
// Dependencies: [19, 17, 4835, 21, 4836, 576, 6402, 504, 15172, 2029, 5279, 5999, 5917, 6622, 15292, 6621, 2]
// Exports: default

// Module 15318 (DevToolsShopScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRow5 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import TableSwitchRow from "TableSwitchRow" /* 6621 */;
import FormSwitch from "FormSwitch" /* 6622 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15172 */;
import DevSettingsActions from "DevSettingsActions" /* 15292 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { wrap: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default function DevToolsShopScreen() {
  let Stack;
  let TableRowGroup;
  let handleToggleDismissState;
  let isDismissed;
  let items4;
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj7;
  let obj8;
  const tmp = closure_7();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj = get_initialized;
  const items = [DevSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("shop_disable_cache"));
  const items1 = [DevSettingsStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => DevSettingsStore.get("shop_include_unpublished"));
  const items2 = [DevSettingsStore];
  const obj3 = get_initialized;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => DevSettingsStore.get("shop_show_debug_overlay"));
  const items3 = [DevSettingsStore];
  const obj4 = get_initialized;
  const stateFromStores3 = obj4.useStateFromStores(items3, () => DevSettingsStore.get("bypass_google_sku_sync"));
  const tmp6 = toggleDismissibleContentDismissStateDefault;
  const obj5 = { style: tmp.wrap, contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + insets.bottom }, children: hasOwnProperty(Stack, obj7) };
  ({ isDismissed, handleToggleDismissState } = tmp6(dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING));
  const tmp6Result = tmp6(dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING);
  obj7 = { spacing: 16, children: metroRequire(TableRowGroup, obj8) };
  ({ paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + insets.bottom });
  Stack = Stack_Stack.Stack;
  obj8 = { title: "Shop Toggles", hasIcons: false, children: items4 };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj9 = { label: "Disable collectibles shop cache", subLabel: "shop_disable_cache", subLabelLineClamp: 1, trailing: hasOwnProperty(FormSwitch.FormSwitch, obj10) };
  const TableRow = TableRow5.TableRow;
  obj10 = {
    value: stateFromStores,
    onValueChange(arg0) {
      const obj = DevSettingsActions;
      return obj.toggle("shop_disable_cache", arg0);
    }
  };
  items4 = [hasOwnProperty(TableRow, obj9), , , , ];
  const obj11 = { label: "Show unpublished items in collectibles shop", subLabel: "shop_include_unpublished", subLabelLineClamp: 1, trailing: hasOwnProperty(FormSwitch.FormSwitch, obj12) };
  const TableRow2 = TableRow5.TableRow;
  obj12 = {
    value: stateFromStores1,
    onValueChange(arg0) {
      const obj = DevSettingsActions;
      return obj.toggle("shop_include_unpublished", arg0);
    }
  };
  items4[1] = hasOwnProperty(TableRow2, obj11);
  items4[2] = hasOwnProperty(TableSwitchRow.TableSwitchRow, { label: "Collectibles Marketing", subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING", subLabelLineClamp: 1, value: isDismissed, onValueChange: handleToggleDismissState });
  const obj13 = { label: "Show debug log overlay in collectibles shop", subLabel: "shop_show_debug_overlay", subLabelLineClamp: 1, trailing: hasOwnProperty(FormSwitch.FormSwitch, obj14) };
  const TableRow3 = TableRow5.TableRow;
  obj14 = {
    value: stateFromStores2,
    onValueChange(arg0) {
      const obj = DevSettingsActions;
      return obj.toggle("shop_show_debug_overlay", arg0);
    }
  };
  items4[3] = hasOwnProperty(TableRow3, obj13);
  const obj15 = { label: "[Android] Bypass Google SKU sync in collectibles shop", subLabel: "bypass_google_sku_sync", subLabelLineClamp: 1, trailing: hasOwnProperty(FormSwitch.FormSwitch, obj16) };
  const TableRow4 = TableRow5.TableRow;
  obj16 = {
    value: stateFromStores3,
    onValueChange(arg0) {
      const obj = DevSettingsActions;
      return obj.toggle("bypass_google_sku_sync", arg0);
    }
  };
  items4[4] = hasOwnProperty(TableRow4, obj15);
  return hasOwnProperty(ScrollView, obj5);
};
