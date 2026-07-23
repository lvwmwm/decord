// Module ID: 12293
// Function ID: 95799
// Name: createGuildTemplateEmbed
// Dependencies: [27, 6693, 5720, 6979, 7633, 1212, 7625, 689, 3976, 10953, 10954, 12294, 2]
// Exports: createGuildTemplateEmbed

// Module 12293 (createGuildTemplateEmbed)
import { Image } from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import { InviteTypes } from "InviteSendStates";

const result = require("GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx");

export const createGuildTemplateEmbed = function createGuildTemplateEmbed(code, closure_2) {
  let baseColors;
  let colors;
  ({ colors, baseColors } = importDefault(7633)(closure_2));
  guildTemplate = guildTemplate.getGuildTemplate(code);
  if (null == guildTemplate) {
    return null;
  } else if (guildTemplate.state === GuildTemplateStates.RESOLVING) {
    let obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.headerText = intl3.string(require(1212) /* getSystemLocale */.t.Xj87Yf).toUpperCase();
    ({ resolvingGradientEnd: obj4.resolvingGradientEnd, resolvingGradientStart: obj4.resolvingGradientStart } = colors);
    obj.type = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj;
  } else if (guildTemplate.state === GuildTemplateStates.EXPIRED) {
    obj = {};
    const merged1 = Object.assign(baseColors);
    const intl = require(1212) /* getSystemLocale */.intl;
    obj["headerText"] = intl.string(require(1212) /* getSystemLocale */.t.C7ZRNw).toUpperCase();
    let obj1 = require(7625) /* processColorOrThrow */;
    obj["titleColor"] = obj1.processColorOrThrow(importDefault(689).unsafe_rawColors.RED_400);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj["titleText"] = intl2.string(require(1212) /* getSystemLocale */.t.A6MwXE);
    const str = intl.string(require(1212) /* getSystemLocale */.t.C7ZRNw);
    if (obj3.isThemeDark(closure_2)) {
      let tmp10Result = tmp10(10953);
    } else {
      tmp10Result = tmp10(10954);
    }
    obj["thumbnailUrl"] = Image.resolveAssetSource(tmp10Result).uri;
    obj["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
    obj["type"] = InviteTypes.GUILD;
    return obj;
  } else {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj = { usageCount: guildTemplate.usageCount.toString() };
    obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainStringResult = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.L8Awgh, obj);
    const str9 = guildTemplate.usageCount;
    obj1["headerText"] = intl5.string(require(1212) /* getSystemLocale */.t.kAvFkO).toUpperCase();
    obj1["headerColor"] = colors.headerColor;
    obj1["titleText"] = guildTemplate.name;
    obj1["titleColor"] = colors.titleColor;
    obj1["subtitle"] = formatToPlainStringResult;
    obj1["subtitleColor"] = colors.subtitleColor;
    obj1["thumbnailUrl"] = Image.resolveAssetSource(importDefault(12294)).uri;
    obj1["acceptLabelColor"] = colors.acceptLabelGreenColor;
    obj1["acceptLabelBackgroundColor"] = colors.acceptLabelGreenBackgroundColor;
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj1["acceptLabelText"] = intl6.string(require(1212) /* getSystemLocale */.t["a3Gl+e"]);
    obj1["embedCanBeTapped"] = true;
    obj1["type"] = InviteTypes.GUILD;
    return obj1;
  }
  const tmp = importDefault(7633)(closure_2);
};
