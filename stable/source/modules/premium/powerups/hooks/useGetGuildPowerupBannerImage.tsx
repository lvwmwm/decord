// Module ID: 12653
// Function ID: 12654
// Name: useGetGuildPowerupBannerImage
// Dependencies: [4628, 504, 2]
// Exports: default, getGuildPowerupBannerImage

// Module 12653 (useGetGuildPowerupBannerImage)
import initialize from "initialize" /* 504 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

export default function useGetGuildPowerupBannerImage(animatedImageUrl, arg1, arg2) {
  initialize;
  [][0] = AccessibilityStore;
  if (null != animatedImageUrl) {
    if (!tmp2) {
      if (false !== arg1) {
        if (!arg2) {
          let staticImageUrl = animatedImageUrl.animatedImageUrl;
          if (staticImageUrl == null) {
            staticImageUrl = animatedImageUrl.staticImageUrl;
          }
        }
      }
    }
    staticImageUrl = animatedImageUrl.staticImageUrl;
  }
};
export const getGuildPowerupBannerImage = function getGuildPowerupBannerImage(arr, stateFromStores1, arg2, arg3) {
  if (null != arr) {
    if (!stateFromStores1) {
      if (false !== arg2) {
        if (!arg3) {
          let staticImageUrl = arr.animatedImageUrl;
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
