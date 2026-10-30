// Module ID: 19002
// Function ID: 19003
// Name: useGiftingPromotionAssetsReady
// Dependencies: [32, 19, 10603, 1894, 2]
// Exports: default

// Module 19002 (useGiftingPromotionAssetsReady)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c0;

const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default function useGiftingPromotionAssetsReady(asset, asset2) {
  let closure_1;
  let first;
  let first1;
  let themeAndReducedMotionAwareAssetUrl;
  let themeAndReducedMotionAwareAssetUrl1;
  const f116211 = () => {
    let tmp;
    if (null != c0) {
      c0 = true;
      let tmp3 = closure_1_2;
      const obj2 = { uri: tmp };
      const obj = closure_1(closure_1_2[3]);
      const preloadResult = obj.preload(obj2);
      preloadResult.then((result) => {
        const tmp = c0;
        if (tmp) {
          let tmp4 = null;
          const tmp3 = closure_1;
          if (result) {
            tmp4 = themeAndReducedMotionAwareAssetUrl1;
          }
          tmp3(tmp4);
        }
      });
      return () => {
        c0 = false;
      };
    }
  };
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const tmp2 = themeAndReducedMotionAwareAssetUrl;
  let tmp3 = dependencyMap;
  let obj = themeAndReducedMotionAwareAssetUrl(10603);
  themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(asset);
  let obj2 = react;
  [first, closure_1] = react.useState(null);
  const items = [themeAndReducedMotionAwareAssetUrl];
  const effect = react.useEffect(f116211, items);
  let asset1;
  const obj3 = { isGiftCoachmarkAssetReady: null == themeAndReducedMotionAwareAssetUrl || first === themeAndReducedMotionAwareAssetUrl, isGiftReminderAssetReady: null == themeAndReducedMotionAwareAssetUrl1 || first1 === themeAndReducedMotionAwareAssetUrl1 };
  const tmp5 = _slicedToArray;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const tmp2Result = tmp2(10603);
  themeAndReducedMotionAwareAssetUrl1 = tmp2Result.useThemeAndReducedMotionAwareAssetUrl(asset1);
  const tmp5Result = tmp5(obj2.useState(null), 2);
  closure_1 = tmp5Result[1];
  const items1 = [themeAndReducedMotionAwareAssetUrl1];
  first1 = tmp5Result[0];
  const effect1 = obj2.useEffect(f116211, items1);
  return obj3;
};
