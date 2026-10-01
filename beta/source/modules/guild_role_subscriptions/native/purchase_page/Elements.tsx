// Module ID: 16192
// Function ID: 16193
// Name: Elements
// Dependencies: [32, 19, 17, 4493, 21, 4836, 576, 4832, 1115, 5435, 1177, 16193, 8667, 14772, 563, 8670, 6655, 2]
// Exports: ArrowButton, TruncatedText, useFormattedSubscriptionPlan

// Module 16192 (Elements)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 8667 */;
import useStoreFrontPriceDefault from "useStoreFrontPrice" /* 8670 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import AssetRegistryDefault from "AssetRegistry" /* 16193 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ TouchableOpacity: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { toggleTruncateButton: obj2, arrowButton: obj3, arrowButtonText: { flexGrow: 1, flexShrink: 1 }, arrowButtonIcon: obj4 };
obj2 = { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: nativeDefault.colors.TEXT_DEFAULT, marginTop: 2 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export const TruncatedText = function TruncatedText(lineClamp) {
  let Text;
  let c1;
  let closure_3;
  let first;
  let items;
  let num2;
  let obj2;
  let tmp17;
  let tmp4;
  let num = lineClamp.lineClamp;
  if (num === undefined) {
    num = 8;
  }
  const merged = Object.assign(lineClamp, Object.assign({ lineClamp: 0 }));
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  const tmp2 = closure_11();
  [tmp4, c1] = _slicedToArray(react.useState(false), 2);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [first, closure_3] = react.useState(false);
  let closure_4 = react.useRef(false);
  let tmp8Result = first;
  if (tmp8Result) {
    let stringResult;
    const obj = { style: tmp2.toggleTruncateButton, children: React4(Text, obj2) };
    Text = Text_Text.Text;
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    const tmp9 = metroImportDefault;
    if (tmp4) {
      stringResult = string(t["JQX/Pb"]);
    } else {
      stringResult = string(t.Fbrd8J);
    }
    obj2 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
    tmp8Result = tmp8(tmp9, obj);
  }
  const obj3 = {
    onPress() {
      const tmp = first && _undefined((arg0) => !arg0);
      return tmp;
    },
    accessibilityRole: "togglebutton",
    activeOpacity: num2,
    children: items
  };
  num2 = 1;
  const tmp13 = authStore;
  const tmp14 = metroRequire;
  if (first) {
    num2 = 0.8;
  }
  const obj4 = {
    lineClamp: tmp17,
    onTextLayout(nativeEvent) {
      if (!ref.current) {
        tmp.current = true;
        closure_3(nativeEvent.nativeEvent.lines.length > num);
      }
    }
  };
  const Text2 = Text_Text.Text;
  const merged1 = Object.assign(merged);
  tmp17 = undefined;
  const tmp15 = React4;
  if (first) {
    if (!tmp4) {
      tmp17 = num;
    }
  }
  items = [tmp15(Text2, obj4), tmp8Result];
  return tmp13(tmp14, obj3);
};
export const ArrowButton = function ArrowButton(arg0) {
  let items;
  let onPress;
  let text;
  ({ text, onPress } = arg0);
  const tmp = closure_11();
  const obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress, children: items };
  const PressableOpacity = Pressables.PressableOpacity;
  items = [, ];
  const obj2 = { variant: "text-md/semibold", color: "text-default", style: tmp.arrowButtonText, children: text };
  items[0] = React4(Text_Text.Text, obj2);
  const obj3 = { size: native.Icon.Sizes.SMALL, source: AssetRegistryDefault, style: tmp.arrowButtonIcon };
  const Icon = native.Icon;
  items[1] = React4(Icon, obj3);
  return authStore(PressableOpacity, obj);
};
export const useFormattedSubscriptionPlan = function useFormattedSubscriptionPlan(listingId) {
  let id;
  const obj = NativePaymentHooksDefault;
  const mobileStoreFront = obj.useMobileStoreFront();
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  _require = _slicedToArray(obj2.useSubscriptionPlan(listingId), 1)[0];
  const items = [SubscriptionPlanStore];
  const obj3 = require("useStateFromStores");
  const stateFromStores = obj3.useStateFromStores(items, () => SubscriptionPlanStore.get(id.id));
  const price = useStoreFrontPriceDefault(stateFromStores, mobileStoreFront).price;
  let str = "No Price Available";
  const tmp3 = _require;
  if (null != price) {
    const _HermesInternal = HermesInternal;
    const tmp3Result = tmp3(6655);
    str = "" + tmp3Result.formatPrice(price.amount, price.currency) + "/mo.";
  }
  return str;
};
