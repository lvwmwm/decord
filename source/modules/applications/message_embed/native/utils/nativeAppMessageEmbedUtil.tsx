// Module ID: 11071
// Function ID: 86120
// Name: items
// Dependencies: []
// Exports: getAppGradientColors, getAppIconSrc

// Module 11071 (items)
const _module = require(dependencyMap[0]);
const items = [_module.hexToRgba(importDefault(dependencyMap[1]).unsafe_rawColors.PRIMARY_760), ];
const _module1 = require(dependencyMap[0]);
items[1] = _module1.hexToRgba(importDefault(dependencyMap[1]).unsafe_rawColors.PRIMARY_760);
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(applicationFromMessage) {
  let primaryColor;
  let secondaryColor;
  if (null == applicationFromMessage) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(applicationFromMessage)) {
      let tmp10Result = tmp10(tmp11[3]);
      const heroColors = tmp10Result.getHeroColors(applicationFromMessage);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        const items = [require(dependencyMap[0]).hexToRgba(primaryColor), ];
        const obj3 = require(dependencyMap[0]);
        items[1] = require(dependencyMap[0]).hexToRgba(secondaryColor);
        tmp5 = items;
        const obj4 = require(dependencyMap[0]);
      }
      return tmp5;
    } else {
      tmp10Result = tmp10(tmp11[2]);
      tmp10Result.maybeFetchColors(applicationFromMessage);
      return tmp;
    }
    const obj5 = require(dependencyMap[2]);
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  let obj = importDefault(dependencyMap[4]);
  obj = { id, icon, bot, fallbackAvatar: false };
  const applicationIconURL = obj.getApplicationIconURL(obj);
  let tmp2 = null;
  if (null != applicationIconURL) {
    tmp2 = applicationIconURL;
  }
  return tmp2;
};
