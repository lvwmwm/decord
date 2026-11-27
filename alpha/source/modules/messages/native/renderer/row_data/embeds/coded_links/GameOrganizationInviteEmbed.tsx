// Module ID: 14532
// Function ID: 14533
// Name: GameOrganizationInviteEmbed
// Dependencies: [11924, 4914, 12943, 11925, 5776, 12393, 1112, 2651, 8228, 575, 8822, 7437, 14533, 12330, 12105, 12137, 7102, 5040, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 14532 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1112 */;
import _modDef2651 from "module_2651" /* 2651 */;
import ColorUtils from "ColorUtils" /* 5040 */;
import Constants from "Constants" /* 5776 */;
import AssetRegistryDefault from "AssetRegistry" /* 7102 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7437 */;
import react_native from "react-native" /* 8228 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8822 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11925 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12105 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 12330 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 12393 */;
import CodedLinksConstants from "CodedLinksConstants" /* 12943 */;
import getGameOrganizationInviteCtaStateDefault from "getGameOrganizationInviteCtaState" /* 14533 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11924 */;
import GuildStore from "GuildStore" /* 4914 */;
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
  let formatToPlainStringResult;
  let iconUrl;
  let iconUrl2;
  let internal3;
  let intl2;
  let intl3;
  let intl4;
  let inviterId;
  let items;
  let maxMembers;
  let memberCount;
  let obj17;
  let obj6;
  let organization;
  let processColorOrThrow;
  let prop;
  let str;
  let tmp31Result;
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
    ({ titleColor: obj8.titleColor, bodyTextColor: obj8.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj2);
      const intl5 = intl7.intl;
      ({ resolvingGradientStart: obj7.resolvingGradientStart, resolvingGradientEnd: obj7.resolvingGradientEnd } = colors);
      str = intl5.string(intl7.t["N/g9Z4"]);
      return obj3;
    } else if (invite.state === tmp22.ERROR) {
      const obj4 = { headerText: intl2.formatToPlainString(_modDef2651["jKi+kc"], { displayNoun: "other" }), titleText: intl3.string(_modDef2651["2/aTr2"]), subtitle: intl4.formatToPlainString(_modDef2651["L/fHgw"], { displayNoun: "other" }), titleColor: processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), showInvalidIcon: true, invalidIconUrl: obj6.getAssetUriForEmbed(AssetRegistryDefault2), embedCanBeTapped: false, canBeAccepted: false };
      const merged2 = Object.assign(obj2);
      intl2 = intl7.intl;
      intl3 = intl7.intl;
      intl4 = intl7.intl;
      processColorOrThrow = react_native.processColorOrThrow;
      react_native;
      internal3 = tmp(575).internal;
      obj6 = renderer_EmbedUtils;
      return obj4;
    } else {
      ({ organization, application, displayNoun } = invite);
      ({ memberCount, maxMembers } = organization);
      ({ accepted, inviterId } = invite);
      const obj5 = { accepted, isInviter: id1 === inviterId, canGoToGuild: tmpResult2(invite, id1, null != GuildStore.getGuild(invite.guildId)), displayNoun, isGameOrganizationFull: isGameOrganizationFullDefault(organization) };
      const tmpResult = getGameOrganizationInviteCtaStateDefault;
      tmpResult2 = canGoToGameOrganizationGuildDefault;
      const obj9 = { headerText: formatToPlainString(prop, obj17), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, memberCountIconUrl: tmp31Result.getAssetUriForEmbed(AssetRegistryDefault), bodyText: description, gradientColors: items, isCtaLoading: obj.isJoinFlowPending(code) };
      const tmpResultResult = tmpResult(obj5);
      const merged3 = Object.assign(obj2);
      const intl6 = intl7.intl;
      formatToPlainString = intl6.formatToPlainString;
      prop = tmp(2651)["jKi+kc"];
      if (displayNoun == null) {
        displayNoun = "other";
      }
      obj17 = { displayNoun };
      ({ name: obj10.titleText, iconUrl } = organization);
      if (iconUrl == null) {
        iconUrl = tmp(12137);
      }
      ({ name: obj10.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = tmp31(1112).intl;
          const obj18 = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(tmp(2651).VuENGl, obj18);
        }
      }
      description = organization.description;
      tmp31Result = renderer_EmbedUtils;
      const hexToRgba = ColorUtils.hexToRgba;
      ColorUtils;
      const internal = tmp(575).internal;
      items = [hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const hexToRgba2 = ColorUtils.hexToRgba;
      ColorUtils;
      const internal2 = tmp(575).internal;
      items[1] = hexToRgba2(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      ({ label: obj10.acceptLabelText, actionable: obj10.canBeAccepted, actionable: obj10.embedCanBeTapped } = tmpResultResult);
      return obj9;
    }
  }
}
