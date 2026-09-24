// Module ID: 12109
// Function ID: 12110
// Name: nativeAppMessageEmbedUtil
// Dependencies: [4640, 580, 8438, 8439, 1401, 2]
// Exports: getAppGradientColors, getAppIconSrc

// Module 12109 (nativeAppMessageEmbedUtil)
import nativeDefault from "native" /* 580 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import useAvatarColor from "useAvatarColor" /* 8438 */;
import ColorUtils_mod from "ColorUtils" /* 4640 */;
import size from "module_2" /* 2 */;

let c3 = "#000000";
let ColorUtils = ColorUtils_mod;
let items = [ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760), ];
let ColorUtils = ColorUtils_mod;
items[1] = ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760);
const result = size.fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(appIconSrc) {
  if (null == appIconSrc) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(appIconSrc)) {
      const heroColors = tmp6(8439).getHeroColors(appIconSrc);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        items = [tmp6(4640).hexToRgba(primaryColor), ];
        const tmp6Result4 = tmp6(4640);
        items[1] = tmp6(4640).hexToRgba(secondaryColor);
        tmp5 = items;
        const tmp6Result5 = tmp6(4640);
      }
      return tmp5;
    } else {
      tmp6(8438).maybeFetchColors(appIconSrc);
      return tmp;
    }
    obj5 = useAvatarColor;
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  let applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id, icon, bot, fallbackAvatar: false });
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
};
