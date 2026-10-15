// Module ID: 14201
// Function ID: 14202
// Name: GameOrganizationInviteEmbed
// Dependencies: [10718, 9828, 10719, 7640, 8106, 1126, 2438, 7967, 587, 14202, 5023, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 14201 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import _modDef2438 from "module_2438" /* 2438 */;
import ColorUtils from "ColorUtils" /* 5023 */;
import Constants from "Constants" /* 7640 */;
import react_native from "react-native" /* 7967 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8106 */;
import CodedLinksConstants from "CodedLinksConstants" /* 9828 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10719 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 14202 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 10718 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx");

export const createGameOrganizationInviteEmbed = function createGameOrganizationInviteEmbed(code, theme) {
  let application;
  let baseColors;
  let colors;
  let description;
  let displayNoun;
  let formatToPlainStringResult;
  let iconUrl;
  let iconUrl2;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let items;
  let maxMembers;
  let memberCount;
  let obj15;
  let obj4;
  let organization;
  let str;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const invite = GameOrganizationInviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const obj2 = { extendedType: CodedLinkExtendedType.GAME_ORGANIZATION_INVITE, type: InviteTypes.GUILD };
    const merged = Object.assign(baseColors);
    ({ titleColor: obj6.titleColor, bodyTextColor: obj6.bodyTextColor, subtitleColor: obj6.subtitleColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj2);
      const intl5 = intl7.intl;
      ({ resolvingGradientStart: obj5.resolvingGradientStart, resolvingGradientEnd: obj5.resolvingGradientEnd } = colors);
      str = intl5.string(intl7.t["N/g9Z4"]);
      return obj3;
    } else if (invite.state === tmp21.ERROR) {
      const obj8 = { headerText: intl3.string(_modDef2438.GLe98U), titleText: intl4.string(_modDef2438["2/aTr2"]), titleColor: obj4.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400), embedCanBeTapped: false, canBeAccepted: false };
      const merged2 = Object.assign(obj2);
      intl3 = intl7.intl;
      intl4 = intl7.intl;
      obj4 = react_native;
      return obj8;
    } else {
      ({ organization, application, displayNoun } = invite);
      const tmp22 = getGameOrganizationDisplayNounDefault(displayNoun);
      ({ memberCount, maxMembers } = organization);
      const obj14 = { headerText: intl6.formatToPlainString(_modDef2438["jKi+kc"], obj15), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, bodyText: description, gradientColors: items, acceptLabelText: intl2.formatToPlainString(_modDef2438["Cz/ZUM"], obj16), canBeAccepted: true, embedCanBeTapped: true };
      const merged3 = Object.assign(obj2);
      intl6 = intl7.intl;
      obj15 = { noun: tmp22 };
      ({ name: obj7.titleText, iconUrl } = organization);
      ({ name: obj7.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = tmp26(1126).intl;
          const obj = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(tmp(2438).VuENGl, obj);
        }
      }
      description = organization.description;
      const hexToRgba = ColorUtils.hexToRgba;
      ColorUtils;
      const internal = tmp(587).internal;
      items = [hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const hexToRgba2 = ColorUtils.hexToRgba;
      ColorUtils;
      const internal2 = tmp(587).internal;
      items[1] = hexToRgba2(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      intl2 = tmp26(1126).intl;
      return obj14;
    }
  }
};
