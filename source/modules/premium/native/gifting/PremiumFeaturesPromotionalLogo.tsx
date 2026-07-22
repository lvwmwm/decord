// Module ID: 9685
// Function ID: 75376
// Name: PremiumFeaturesPromotionalLogo
// Dependencies: []
// Exports: default

// Module 9685 (PremiumFeaturesPromotionalLogo)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/native/gifting/PremiumFeaturesPromotionalLogo.tsx");

export default function PremiumFeaturesPromotionalLogo(arg0) {
  let promoRotatingStyle;
  let rotatingAvatarImageUrl;
  let shouldAnimate;
  ({ rotatingAvatarImageUrl, promoRotatingStyle, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  const arg1 = shouldAnimate;
  let importDefault;
  let dependencyMap;
  let callback;
  let React;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  importDefault = stateFromStores;
  let num = null;
  const ref = React.useRef(null);
  const aPNGPlayerControls = arg1(dependencyMap[5]).useAPNGPlayerControls(ref);
  dependencyMap = aPNGPlayerControls;
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  callback = first;
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
  const obj2 = arg1(dependencyMap[5]);
  if (first) {
    num = 100;
  }
  importDefault(dependencyMap[7])(() => {
    if (first) {
      aPNGPlayerControls.play();
    }
  }, num);
  const tmp7 = importDefault(dependencyMap[7]);
  if (obj3.isAndroid()) {
    if (!stateFromStores) {
      obj = { ref, url: rotatingAvatarImageUrl, autoplay: false, style: promoRotatingStyle };
      let tmp12 = jsx(arg1(dependencyMap[5]).APNGPlayer, obj);
    }
    return tmp12;
  }
  tmp12 = jsx(importDefault(dependencyMap[8]), { style: promoRotatingStyle, resizeMode: "contain", source: { uri: rotatingAvatarImageUrl } });
};
