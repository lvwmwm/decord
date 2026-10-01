// Module ID: 12016
// Function ID: 12017
// Name: useGetGuildPowerupBannerImage
// Dependencies: [4825, 504, 2]
// Exports: default, getGuildPowerupBannerImage

// Module 12016 (useGetGuildPowerupBannerImage)
import get_initialized from "get initialized" /* 504 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

export default function useGetGuildPowerupBannerImage(animatedImageUrl, arg1, arg2) {
  let useReducedMotion;
  const items = [AccessibilityStore];
  let tmp;
  const obj = get_initialized;
  if (null != animatedImageUrl) {
    if (!obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
      if (false !== arg1) {
        let staticImageUrl;
        const tmp3 = arg2;
        if (!tmp3) {
          staticImageUrl = animatedImageUrl.animatedImageUrl;
          if (staticImageUrl == null) {
            staticImageUrl = animatedImageUrl.staticImageUrl;
          }
        }
        tmp = staticImageUrl;
      }
    }
    staticImageUrl = animatedImageUrl.staticImageUrl;
  }
  return tmp;
};
export const getGuildPowerupBannerImage = function getGuildPowerupBannerImage(arr, stateFromStores1, arg2, arg3) {
  if (null != arr) {
    const tmp = stateFromStores1;
    if (!tmp) {
      if (false !== arg2) {
        let staticImageUrl;
        const tmp3 = arg3;
        if (!tmp3) {
          staticImageUrl = arr.animatedImageUrl;
          if (staticImageUrl == null) {
            staticImageUrl = arr.staticImageUrl;
          }
        }
        return staticImageUrl;
      }
    }
    staticImageUrl = arr.staticImageUrl;
  }
};
