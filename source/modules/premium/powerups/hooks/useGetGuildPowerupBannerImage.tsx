// Module ID: 11543
// Function ID: 89895
// Name: getGuildPowerupBannerImage
// Dependencies: []
// Exports: default

// Module 11543 (getGuildPowerupBannerImage)
function getGuildPowerupBannerImage(found, closure_4, arg2, arg3) {
  if (null != found) {
    if (!closure_4) {
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
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

export default function useGetGuildPowerupBannerImage(found) {
  const items = [closure_2];
  return getGuildPowerupBannerImage(found, arg1(dependencyMap[1]).useStateFromStores(items, () => useReducedMotion.useReducedMotion), arg1, arg2);
};
export { getGuildPowerupBannerImage };
