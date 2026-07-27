// Module ID: 11076
// Function ID: 86050
// Name: items
// Dependencies: [3975, 689, 7850, 7851, 1392, 2]
// Exports: getAppGradientColors, getAppIconSrc

// Module 11076 (items)
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";

let items = [hexToRgb.hexToRgba(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_760), ];
items[1] = hexToRgb.hexToRgba(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_760);
const result = require("hasFetchedColors").fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(applicationFromMessage) {
  let primaryColor;
  let secondaryColor;
  if (null == applicationFromMessage) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(applicationFromMessage)) {
      let tmp10Result = tmp10(7851);
      const heroColors = tmp10Result.getHeroColors(applicationFromMessage);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        const items = [require(3975) /* hexToRgb */.hexToRgba(primaryColor), ];
        const obj3 = require(3975) /* hexToRgb */;
        items[1] = require(3975) /* hexToRgb */.hexToRgba(secondaryColor);
        tmp5 = items;
        const obj4 = require(3975) /* hexToRgb */;
      }
      return tmp5;
    } else {
      tmp10Result = tmp10(7850);
      tmp10Result.maybeFetchColors(applicationFromMessage);
      return tmp;
    }
    obj5 = require(7850) /* hasFetchedColors */;
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  let obj = importDefault(1392);
  obj = { id, icon, bot, fallbackAvatar: false };
  const applicationIconURL = obj.getApplicationIconURL(obj);
  let tmp2 = null;
  if (null != applicationIconURL) {
    tmp2 = applicationIconURL;
  }
  return tmp2;
};
