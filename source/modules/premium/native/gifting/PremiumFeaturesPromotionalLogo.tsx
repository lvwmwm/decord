// Module ID: 9692
// Function ID: 75417
// Name: PremiumFeaturesPromotionalLogo
// Dependencies: [57, 31, 4122, 33, 566, 7956, 477, 7197, 5085, 2]
// Exports: default

// Module 9692 (PremiumFeaturesPromotionalLogo)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gifting/PremiumFeaturesPromotionalLogo.tsx");

export default function PremiumFeaturesPromotionalLogo(arg0) {
  let promoRotatingStyle;
  let rotatingAvatarImageUrl;
  let shouldAnimate;
  ({ rotatingAvatarImageUrl, promoRotatingStyle, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  let stateFromStores;
  let aPNGPlayerControls;
  let first;
  let React;
  let obj = shouldAnimate(aPNGPlayerControls[4]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  let num = null;
  const ref = React.useRef(null);
  aPNGPlayerControls = shouldAnimate(aPNGPlayerControls[5]).useAPNGPlayerControls(ref);
  const tmp4 = first(React.useState(false), 2);
  first = tmp4[0];
  React = tmp4[1];
  const items1 = [shouldAnimate, aPNGPlayerControls, stateFromStores];
  const effect = React.useEffect(() => {
    let isAndroidResult = shouldAnimate(aPNGPlayerControls[6]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = !stateFromStores;
    }
    if (isAndroidResult) {
      if (shouldAnimate) {
        aPNGPlayerControls.seek(0);
        callback(true);
      } else {
        callback(false);
        aPNGPlayerControls.stop();
      }
    }
  }, items1);
  const obj2 = shouldAnimate(aPNGPlayerControls[5]);
  if (first) {
    num = 100;
  }
  stateFromStores(aPNGPlayerControls[7])(() => {
    if (first) {
      aPNGPlayerControls.play();
    }
  }, num);
  const tmp7 = stateFromStores(aPNGPlayerControls[7]);
  if (obj3.isAndroid()) {
    if (!stateFromStores) {
      obj = { ref, url: rotatingAvatarImageUrl, autoplay: false, style: promoRotatingStyle };
      let tmp12 = jsx(shouldAnimate(aPNGPlayerControls[5]).APNGPlayer, { ref, url: rotatingAvatarImageUrl, autoplay: false, style: promoRotatingStyle });
    }
    return tmp12;
  }
  tmp12 = jsx(stateFromStores(aPNGPlayerControls[8]), { style: promoRotatingStyle, resizeMode: "contain", source: { uri: rotatingAvatarImageUrl } });
};
