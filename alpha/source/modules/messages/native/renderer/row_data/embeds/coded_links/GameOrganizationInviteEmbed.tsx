// Module ID: 15471
// Function ID: 15472
// Name: GameOrganizationInviteEmbed
// Dependencies: [12273, 5114, 11825, 12274, 8775, 9103, 1113, 2549, 13968, 9096, 575, 8588, 7790, 15472, 13958, 12443, 7373, 5240, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 15471 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef2549 from "module_2549" /* 2549 */;
import ColorUtils from "ColorUtils" /* 5240 */;
import AssetRegistryDefault from "AssetRegistry" /* 7373 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7790 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8588 */;
import Constants from "Constants" /* 8775 */;
import react_native from "react-native" /* 9096 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 9103 */;
import CodedLinksConstants from "CodedLinksConstants" /* 11825 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12274 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12443 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 13958 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 13968 */;
import getGameOrganizationInviteCtaStateDefault from "getGameOrganizationInviteCtaState" /* 15472 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 12273 */;
import GuildStore from "GuildStore" /* 5114 */;
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
      const obj4 = { headerText: formatToPlainString(prop, obj5), titleText: intl3.string(_modDef2549["2/aTr2"]), subtitle: formatToPlainString2(prop1, obj6), titleColor: processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), showInvalidIcon: true, invalidIconUrl: obj7.getAssetUriForEmbed(AssetRegistryDefault2), embedCanBeTapped: false, canBeAccepted: false };
      const merged2 = Object.assign(obj2);
      const intl2 = intl7.intl;
      formatToPlainString = intl2.formatToPlainString;
      obj5 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      prop = tmp(2549)["jKi+kc"];
      intl3 = intl7.intl;
      const intl4 = intl7.intl;
      formatToPlainString2 = intl4.formatToPlainString;
      obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      prop1 = tmp(2549)["L/fHgw"];
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
      const obj13 = { headerText: intl6.formatToPlainString(_modDef2549["jKi+kc"], obj23), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, memberCountIconUrl: tmp34Result.getAssetUriForEmbed(AssetRegistryDefault), bodyText: description, gradientColors: items, isCtaLoading: obj.isJoinFlowPending(code) };
      const tmpResultResult = tmpResult(obj11);
      const merged3 = Object.assign(obj2);
      intl6 = intl7.intl;
      obj23 = { noun: tmp26 };
      ({ name: obj12.titleText, iconUrl } = organization);
      ({ name: obj12.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = tmp34(1113).intl;
          const obj24 = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(tmp(2549).VuENGl, obj24);
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
