// Module ID: 15428
// Function ID: 15429
// Name: GuildTemplateEmbed
// Dependencies: [17, 7746, 7606, 7989, 8498, 1113, 8485, 575, 5177, 13499, 13500, 15429, 2]
// Exports: createGuildTemplateEmbed

// Module 15428 (GuildTemplateEmbed)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import shared from "shared" /* 5177 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7606 */;
import Constants from "Constants" /* 7989 */;
import react_native2 from "react-native" /* 8485 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8498 */;
import AssetRegistryDefault from "AssetRegistry" /* 15429 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7746 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx");

export function createGuildTemplateEmbed(code, arg1) {
  let baseColors;
  let colors;
  let formatToPlainStringResult;
  let intl2;
  let intl6;
  let obj2;
  let resolveAssetSource;
  let str;
  let str2;
  let str3;
  let str4;
  let tmpResult;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(arg1));
  getEmbedThemeColorsDefault(arg1);
  const guildTemplate = GuildTemplateStore.getGuildTemplate(code);
  if (null == guildTemplate) {
    return null;
  } else if (guildTemplate.state === GuildTemplateStates.RESOLVING) {
    const obj5 = { headerText: str2.toUpperCase(), resolvingGradientEnd: null, resolvingGradientStart: null, type: InviteTypes.GUILD };
    const intl3 = intl7.intl;
    ({ resolvingGradientEnd: obj4.resolvingGradientEnd, resolvingGradientStart: obj4.resolvingGradientStart } = colors);
    str2 = intl3.string(intl7.t.Xj87Yf);
    const merged = Object.assign(baseColors);
    return obj5;
  } else if (guildTemplate.state === tmp17.EXPIRED) {
    const obj = { headerText: str.toUpperCase(), titleColor: obj2.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400), titleText: intl2.string(intl7.t.A6MwXE), thumbnailUrl: resolveAssetSource(tmpResult).uri, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, type: InviteTypes.GUILD };
    const merged1 = Object.assign(baseColors);
    const intl = intl7.intl;
    str = intl.string(intl7.t.C7ZRNw);
    obj2 = react_native2;
    intl2 = intl7.intl;
    resolveAssetSource = Image.resolveAssetSource;
    const obj3 = shared;
    if (obj3.isThemeDark(arg1)) {
      tmpResult = tmp(13499);
    } else {
      tmpResult = tmp(13500);
    }
    return obj;
  } else {
    const intl4 = intl7.intl;
    const formatToPlainString = intl4.formatToPlainString;
    const obj9 = { usageCount: str3.toString() };
    str3 = guildTemplate.usageCount;
    const L8Awgh = intl7.t.L8Awgh;
    const obj10 = { headerText: str4.toUpperCase(), headerColor: colors.headerColor, titleText: guildTemplate.name, titleColor: colors.titleColor, subtitle: formatToPlainStringResult, subtitleColor: colors.subtitleColor, thumbnailUrl: Image.resolveAssetSource(AssetRegistryDefault).uri, acceptLabelText: intl6.string(intl7.t["a3Gl+e"]), embedCanBeTapped: true, canBeAccepted: true, type: InviteTypes.GUILD };
    formatToPlainStringResult = formatToPlainString(L8Awgh, obj9);
    const merged2 = Object.assign(baseColors);
    const intl5 = intl7.intl;
    ({ acceptLabelGreenColor: obj6.acceptLabelColor, acceptLabelGreenBackgroundColor: obj6.acceptLabelBackgroundColor } = colors);
    str4 = intl5.string(intl7.t.kAvFkO);
    intl6 = intl7.intl;
    return obj10;
  }
}
