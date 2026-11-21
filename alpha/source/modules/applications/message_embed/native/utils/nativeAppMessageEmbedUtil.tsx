// Module ID: 12807
// Function ID: 12808
// Name: nativeAppMessageEmbedUtil
// Dependencies: [4910, 575, 8128, 11958, 1412, 2]
// Exports: getAppGradientColors, getAppIconSrc

// Module 12807 (nativeAppMessageEmbedUtil)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import useAvatarColor from "useAvatarColor" /* 8128 */;
import useHeroColors from "useHeroColors" /* 11958 */;
import ColorUtils_mod from "ColorUtils" /* 4910 */;
import size from "module_2" /* 2 */;

let c3 = "#000000";
let ColorUtils = ColorUtils_mod;
let items = [ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760), ];
ColorUtils = ColorUtils_mod;
items[1] = ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760);
const result = size.fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export function getAppGradientColors(appIconSrc) {
  let primaryColor;
  let secondaryColor;
  if (null == appIconSrc) {
    return items;
  } else {
    const obj5 = useAvatarColor;
    if (obj5.hasFetchedColors(appIconSrc)) {
      const tmp6Result = useHeroColors;
      const heroColors = tmp6Result.getHeroColors(appIconSrc);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      const tmp4 = primaryColor === c3 && secondaryColor === c3;
      if (false === tmp4) {
        items = [, ];
        const tmp6Result4 = ColorUtils;
        items[0] = tmp6Result4.hexToRgba(primaryColor);
        const tmp6Result5 = ColorUtils;
        items[1] = tmp6Result5.hexToRgba(secondaryColor);
        tmp5 = items;
      }
      return tmp5;
    } else {
      const tmp6Result6 = useAvatarColor;
      tmp6Result6.maybeFetchColors(appIconSrc);
      return items;
    }
  }
}
export function getAppIconSrc(id, icon, bot) {
  const obj = AvatarUtilsDefault;
  const obj2 = { id, icon, bot, fallbackAvatar: false };
  let applicationIconURL = obj.getApplicationIconURL(obj2);
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
}
