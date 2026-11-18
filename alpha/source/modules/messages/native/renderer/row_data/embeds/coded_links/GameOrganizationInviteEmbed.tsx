// Module ID: 14246
// Function ID: 14247
// Name: GameOrganizationInviteEmbed
// Dependencies: [11855, 4694, 10373, 11856, 8350, 8592, 1113, 2555, 12019, 8585, 575, 8157, 7369, 14247, 12183, 12018, 12050, 6950, 4820, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 14246 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef2555 from "module_2555" /* 2555 */;
import ColorUtils from "ColorUtils" /* 4820 */;
import AssetRegistryDefault from "AssetRegistry" /* 6950 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7369 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8157 */;
import Constants from "Constants" /* 8350 */;
import react_native from "react-native" /* 8585 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8592 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10373 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11856 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12018 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12019 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 12183 */;
import getGameOrganizationInviteCtaStateDefault from "getGameOrganizationInviteCtaState" /* 14247 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11855 */;
import GuildStore from "GuildStore" /* 4694 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx");

export function createGameOrganizationInviteEmbed(code, theme, id1) {
  let accepted;
  let application;
  let baseColors;
  let colors;
  let description;
  let displayNoun;
  let formatToPlainString;
  let formatToPlainString2;
  let formatToPlainStringResult;
  let iconUrl;
  let iconUrl2;
  let internal3;
  let intl3;
  let intl6;
  let inviterId;
  let items;
  let maxMembers;
  let memberCount;
  let obj23;
  let obj5;
  let obj6;
  let obj7;
  let organization;
  let processColorOrThrow;
  let prop;
  let prop1;
  let str;
  let tmp34Result;
  let tmpResult2;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const invite = GameOrganizationInviteStore.getInvite(code);
  const obj = GameOrganizationInviteStore;
  if (null == invite) {
    return null;
  } else {
    const obj2 = { extendedType: CodedLinkExtendedType.GAME_ORGANIZATION_INVITE, type: InviteTypes.GUILD };
    const merged = Object.assign(baseColors);
    ({ titleColor: obj9.titleColor, bodyTextColor: obj9.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj2);
      const intl5 = intl7.intl;
      ({ resolvingGradientStart: obj8.resolvingGradientStart, resolvingGradientEnd: obj8.resolvingGradientEnd } = colors);
      str = intl5.string(intl7.t["N/g9Z4"]);
      return obj3;
    } else if (invite.state === tmp24.ERROR) {
      const obj4 = { headerText: formatToPlainString(prop, obj5), titleText: intl3.string(_modDef2555["2/aTr2"]), subtitle: formatToPlainString2(prop1, obj6), titleColor: processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), showInvalidIcon: true, invalidIconUrl: obj7.getAssetUriForEmbed(AssetRegistryDefault2), embedCanBeTapped: false, canBeAccepted: false };
      const merged2 = Object.assign(obj2);
      const intl2 = intl7.intl;
      formatToPlainString = intl2.formatToPlainString;
      obj5 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      prop = tmp(2555)["jKi+kc"];
      intl3 = intl7.intl;
      const intl4 = intl7.intl;
      formatToPlainString2 = intl4.formatToPlainString;
      obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      prop1 = tmp(2555)["L/fHgw"];
      processColorOrThrow = react_native.processColorOrThrow;
      react_native;
      internal3 = tmp(575).internal;
      obj7 = renderer_EmbedUtils;
      return obj4;
    } else {
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj10 = { displayNoun };
      const tmp26 = getGameOrganizationDisplayNounDefault(obj10);
      ({ memberCount, maxMembers } = organization);
      const obj11 = { accepted, isInviter: id1 === inviterId, canGoToGuild: tmpResult2(invite, id1, null != GuildStore.getGuild(invite.guildId)), noun: tmp26, isGameOrganizationFull: isGameOrganizationFullDefault(organization) };
      const tmpResult = getGameOrganizationInviteCtaStateDefault;
      tmpResult2 = canGoToGameOrganizationGuildDefault;
      const obj13 = { headerText: intl6.formatToPlainString(_modDef2555["jKi+kc"], obj23), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, memberCountIconUrl: tmp34Result.getAssetUriForEmbed(AssetRegistryDefault), bodyText: description, gradientColors: items, isCtaLoading: obj.isJoinFlowPending(code) };
      const tmpResultResult = tmpResult(obj11);
      const merged3 = Object.assign(obj2);
      intl6 = intl7.intl;
      obj23 = { noun: tmp26 };
      ({ name: obj12.titleText, iconUrl } = organization);
      if (iconUrl == null) {
        iconUrl = tmp(12050);
      }
      ({ name: obj12.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = tmp34(1113).intl;
          const obj24 = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(tmp(2555).VuENGl, obj24);
        }
      }
      description = organization.description;
      tmp34Result = renderer_EmbedUtils;
      const hexToRgba = ColorUtils.hexToRgba;
      ColorUtils;
      const internal = tmp(575).internal;
      items = [hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const hexToRgba2 = ColorUtils.hexToRgba;
      ColorUtils;
      const internal2 = tmp(575).internal;
      items[1] = hexToRgba2(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      ({ label: obj12.acceptLabelText, actionable: obj12.canBeAccepted, actionable: obj12.embedCanBeTapped } = tmpResultResult);
      return obj13;
    }
  }
}
