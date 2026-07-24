// Module ID: 15315
// Function ID: 116809
// Name: TruncatedText
// Dependencies: [57, 31, 27, 3781, 33, 4130, 689, 4126, 1212, 4660, 1273, 15316, 7433, 14166, 624, 7434, 5616, 2]
// Exports: ArrowButton, TruncatedText, useFormattedSubscriptionPlan

// Module 15315 (TruncatedText)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ TouchableOpacity: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, marginTop: 2 };
_createForOfIteratorHelperLoose.toggleTruncateButton = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.arrowButton = obj1;
_createForOfIteratorHelperLoose.arrowButtonText = { flexGrow: 1, flexShrink: 1 };
_createForOfIteratorHelperLoose.arrowButtonIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export const TruncatedText = function TruncatedText(lineClamp) {
  let num = lineClamp.lineClamp;
  if (num === undefined) {
    num = 8;
  }
  let obj = Object.create(null);
  obj.lineClamp = 0;
  const merged = Object.assign(lineClamp, obj);
  let closure_1;
  let first1;
  let dependencyMap;
  let callback;
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  let num2 = 1;
  closure_1 = tmp4[1];
  const tmp6 = callback(React.useState(false), 2);
  first1 = tmp6[0];
  dependencyMap = tmp6[1];
  callback = React.useRef(false);
  if (!first1) {
    obj = {
      onPress() {
          let tmp = first1;
          if (first1) {
            tmp = callback((arg0) => !arg0);
          }
          return tmp;
        },
      accessibilityRole: "togglebutton"
    };
    if (first1) {
      num2 = 0.8;
    }
    obj.activeOpacity = num2;
    const obj1 = {};
    const merged1 = Object.assign(merged);
    let tmp24;
    if (first1) {
      if (!first) {
        tmp24 = num;
      }
    }
    obj1["lineClamp"] = tmp24;
    obj1["onTextLayout"] = function onTextLayout(nativeEvent) {
      if (!ref.current) {
        ref.current = true;
        callback2(nativeEvent.nativeEvent.lines.length > num);
      }
    };
    const items = [closure_9(num(4126).Text, obj1), first1];
    obj.children = items;
    return closure_10(closure_6, obj);
  } else {
    obj = { style: tmp3.toggleTruncateButton };
    let obj2 = { variant: "text-sm/medium", color: "text-default" };
    const intl = num(1212).intl;
    const string = intl.string;
    JQX_Pb = num(1212).t;
    if (first) {
      JQX_Pb = JQX_Pb["JQX/Pb"];
      let stringResult = string(JQX_Pb);
    } else {
      stringResult = string(JQX_Pb.Fbrd8J);
    }
    obj2.children = stringResult;
    obj2 = tmp8(num(4126).Text, obj2);
    obj.children = obj2;
    closure_9(closure_7, obj);
    const tmp9 = closure_7;
  }
};
export const ArrowButton = function ArrowButton(arg0) {
  let onPress;
  let text;
  ({ text, onPress } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.arrowButtonText, children: text };
  const items = [callback2(require(4126) /* Text */.Text, obj), ];
  obj = { size: require(1273) /* Button */.Icon.Sizes.SMALL, source: importDefault(15316), style: tmp.arrowButtonIcon };
  items[1] = callback2(require(1273) /* Button */.Icon, obj);
  obj.children = items;
  return callback3(require(4660) /* PressableBase */.PressableOpacity, obj);
};
export const useFormattedSubscriptionPlan = function useFormattedSubscriptionPlan(listingId) {
  const obj = importDefault(7433);
  const _require = callback(importAll(14166).useSubscriptionPlan(listingId), 1)[0];
  const obj2 = importAll(14166);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_8.get(id.id));
  const price = importDefault(7434)(stateFromStores, obj.useNativeIAPPayments().storeFront).price;
  let str = "No Price Available";
  if (null != price) {
    const _HermesInternal = HermesInternal;
    str = "" + _require(5616).formatPrice(price.amount, price.currency) + "/mo.";
    const obj4 = _require(5616);
  }
  return str;
};
