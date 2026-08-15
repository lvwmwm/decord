// Module ID: 11131
// Function ID: 11132
// Name: items
// Dependencies: [4223, 712, 8345, 8346, 1435, 2]
// Exports: getAppGradientColors, getAppIconSrc

// Module 11131 (items)
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";

let c3 = "#000000";
let items = [hexToRgba.hexToRgba(require("Themes").unsafe_rawColors.PRIMARY_760), ];
items[1] = hexToRgba.hexToRgba(require("Themes").unsafe_rawColors.PRIMARY_760);
const result = require("hasFetchedColors").fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(id2) {
  let primaryColor;
  let secondaryColor;
  if (null == id2) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(id2)) {
      let tmp6Result = tmp6(8346);
      const heroColors = tmp6Result.getHeroColors(id2);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        tmp6Result = tmp6(4223);
        const items = [tmp6Result.hexToRgba(primaryColor), tmp6(4223).hexToRgba(secondaryColor)];
        tmp5 = items;
        const tmp6Result1 = tmp6(4223);
      }
      return tmp5;
    } else {
      tmp6(8345).maybeFetchColors(id2);
      return tmp;
    }
    obj5 = require(8345) /* hasFetchedColors */;
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  let obj = importDefault(1435);
  obj = { id, icon, bot, fallbackAvatar: false };
  let applicationIconURL = obj.getApplicationIconURL(obj);
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
};
