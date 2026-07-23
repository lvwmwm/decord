// Module ID: 11553
// Function ID: 89944
// Name: getGuildPowerupBannerImage
// Dependencies: [4122, 566, 2]
// Exports: default

// Module 11553 (getGuildPowerupBannerImage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getGuildPowerupBannerImage(found, outer1_4, arg2, arg3) {
  if (null != found) {
    if (!outer1_4) {
      if (false !== arg2) {
        if (!arg3) {
          let staticImageUrl = found.animatedImageUrl;
          if (null == staticImageUrl) {
            staticImageUrl = found.staticImageUrl;
          }
        }
        return staticImageUrl;
      }
    }
    staticImageUrl = found.staticImageUrl;
  }
}
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

export default function useGetGuildPowerupBannerImage(found) {
  const items = [_isNativeReflectConstruct];
  return getGuildPowerupBannerImage(found, require(566) /* initialize */.useStateFromStores(items, () => outer1_2.useReducedMotion), arg1, arg2);
};
export { getGuildPowerupBannerImage };
