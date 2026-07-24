// Module ID: 7520
// Function ID: 59966
// Name: BuyNitroPurchaseButtonCrossfadeLayer
// Dependencies: [57, 31, 27, 33, 3991, 4131, 4134, 4543, 2]
// Exports: default, useBuyNitroButtonCrossfade

// Module 7520 (BuyNitroPurchaseButtonCrossfadeLayer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_7 = { code: "function BuyNitroPurchaseButtonCrossfadeLayerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_8 = { code: "function BuyNitroPurchaseButtonCrossfadeLayerTsx2(finished){const{runOnJS,onDone}=this.__closure;if(finished===true){runOnJS(onDone)();}}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonCrossfadeLayer.tsx");

export default function BuyNitroPurchaseButtonCrossfadeLayer(arg0) {
  let onDone;
  let snapshot;
  ({ snapshot, onDone } = arg0);
  let obj = onDone(3991);
  const sharedValue = obj.useSharedValue(1);
  let fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10244393639035;
  fn.__initData = closure_7;
  const items = [sharedValue, onDone];
  const animatedStyle = onDone(3991).useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    let obj = onDone(outer1_2[5]);
    const fn = function t(arg0) {
      if (true === arg0) {
        onDone(outer2_2[4]).runOnJS(outer1_0)();
        const obj = onDone(outer2_2[4]);
      }
    };
    obj = { runOnJS: onDone(outer1_2[4]).runOnJS, onDone };
    fn.__closure = obj;
    fn.__workletHash = 12882875362433;
    fn.__initData = outer1_8;
    const result = sharedValue.set(obj.withTiming(0, onDone(outer1_2[6]).timingStandard, "respect-motion-settings", fn));
  }, items);
  obj = { style: items1, pointerEvents: "none" };
  items1 = [StyleSheet.absoluteFill, animatedStyle];
  obj = { text: snapshot.ctaText, variant: snapshot.variant, size: "lg", grow: true, onPress: undefined };
  obj.children = jsx(onDone(4543).Button, { text: snapshot.ctaText, variant: snapshot.variant, size: "lg", grow: true, onPress: undefined });
  return jsx(sharedValue(3991).View, { text: snapshot.ctaText, variant: snapshot.variant, size: "lg", grow: true, onPress: undefined });
};
export const useBuyNitroButtonCrossfade = function useBuyNitroButtonCrossfade(variant, stringResult) {
  let obj = { variant, ctaText: stringResult };
  const tmp = callback(React.useState(obj), 2);
  const first = tmp[0];
  const tmp3 = callback(React.useState(null), 2);
  const importDefault = tmp4;
  let tmp5 = first.variant === variant;
  if (tmp5) {
    tmp5 = first.ctaText === stringResult;
  }
  if (!tmp5) {
    if (first.variant !== variant) {
      tmp4((key) => {
        const obj = { snapshot: first };
        key = undefined;
        if (null != key) {
          key = key.key;
        }
        let num = 0;
        if (null != key) {
          num = key;
        }
        obj.key = num + 1;
        return obj;
      });
    }
    obj = { variant, ctaText: stringResult };
    tmp[1](obj);
  }
  obj = { outgoing: tmp3[0], onOutgoingDone: React.useCallback(() => tmp4(null), []) };
  return obj;
};
