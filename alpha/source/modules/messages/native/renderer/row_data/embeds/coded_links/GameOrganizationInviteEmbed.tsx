// Module ID: 15401
// Function ID: 15402
// Name: GameOrganizationInviteEmbed
// Dependencies: [11503, 5011, 10238, 11504, 7956, 8465, 1113, 2530, 13443, 8452, 575, 8467, 7313, 15402, 13433, 8680, 5137, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 15401 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef2530 from "module_2530" /* 2530 */;
import ColorUtils from "ColorUtils" /* 5137 */;
import AssetRegistryDefault from "AssetRegistry" /* 7313 */;
import Constants from "Constants" /* 7956 */;
import react_native from "react-native" /* 8452 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8465 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8467 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8680 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10238 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11504 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 13433 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 13443 */;
import getGameOrganizationInviteCtaStateDefault from "getGameOrganizationInviteCtaState" /* 15402 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11503 */;
import GuildStore from "GuildStore" /* 5011 */;
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
  let intl;
  let intl4;
  let inviterId;
  let items;
  let maxMembers;
  let memberCount;
  let obj10;
  let obj23;
  let obj6;
  let obj7;
  let organization;
  let processColorOrThrow;
  let prop;
  let prop1;
  let str;
  let tmp14Result;
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
    ({ titleColor: obj12.titleColor, bodyTextColor: obj12.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj4 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj2);
      const intl6 = intl7.intl;
      ({ resolvingGradientStart: obj11.resolvingGradientStart, resolvingGradientEnd: obj11.resolvingGradientEnd } = colors);
      str = intl6.string(intl7.t["N/g9Z4"]);
      return obj4;
    } else if (invite.state === tmp34.ERROR) {
      const obj5 = { headerText: formatToPlainString(prop, obj6), titleText: intl4.string(_modDef2530["2/aTr2"]), subtitle: formatToPlainString2(prop1, obj7), titleColor: processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), showInvalidIcon: true, invalidIconUrl: obj10.getAssetUriForEmbed(AssetRegistryDefault), embedCanBeTapped: false, canBeAccepted: false };
      const merged2 = Object.assign(obj2);
      const intl3 = intl7.intl;
      formatToPlainString = intl3.formatToPlainString;
      obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      prop = tmp(2530)["jKi+kc"];
      intl4 = intl7.intl;
      const intl5 = intl7.intl;
      formatToPlainString2 = intl5.formatToPlainString;
      obj7 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      prop1 = tmp(2530)["L/fHgw"];
      processColorOrThrow = react_native.processColorOrThrow;
      react_native;
      internal3 = tmp(575).internal;
      obj10 = renderer_EmbedUtils;
      return obj5;
    } else {
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj8 = { displayNoun };
      const tmp35 = getGameOrganizationDisplayNounDefault(obj8);
      ({ memberCount, maxMembers } = organization);
      const obj9 = { accepted, isInviter: id1 === inviterId, canGoToGuild: tmpResult2(invite, id1, null != GuildStore.getGuild(invite.guildId)), noun: tmp35, isGameOrganizationFull: null != memberCount && null != maxMembers && memberCount >= maxMembers };
      const tmpResult = getGameOrganizationInviteCtaStateDefault;
      tmpResult2 = canGoToGameOrganizationGuildDefault;
      const obj13 = { headerText: intl.formatToPlainString(_modDef2530["jKi+kc"], obj23), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, memberCountIconUrl: tmp14Result.getAssetUriForEmbed(AssetRegistryDefault2), bodyText: description, gradientColors: items, isCtaLoading: obj.isJoinFlowPending(code) };
      const tmpResultResult = tmpResult(obj9);
      const merged3 = Object.assign(obj2);
      intl = intl7.intl;
      obj23 = { noun: tmp35 };
      ({ name: obj3.titleText, iconUrl } = organization);
      ({ name: obj3.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (null != memberCount && null != maxMembers) {
        const intl2 = tmp14(1113).intl;
        const obj24 = { count: memberCount, max: maxMembers };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(2530).VuENGl, obj24);
      }
      description = organization.description;
      tmp14Result = renderer_EmbedUtils;
      const hexToRgba = ColorUtils.hexToRgba;
      ColorUtils;
      const internal = tmp(575).internal;
      items = [hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const hexToRgba2 = ColorUtils.hexToRgba;
      ColorUtils;
      const internal2 = tmp(575).internal;
      items[1] = hexToRgba2(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      ({ label: obj3.acceptLabelText, actionable: obj3.canBeAccepted, actionable: obj3.embedCanBeTapped } = tmpResultResult);
      return obj13;
    }
  }
}
