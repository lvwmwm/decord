// Module ID: 15366
// Function ID: 15367
// Name: GameOrganizationInviteEmbed
// Dependencies: [11521, 5041, 10255, 11522, 7978, 8486, 1113, 2530, 13420, 8473, 575, 15367, 13410, 5167, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 15366 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef2530 from "module_2530" /* 2530 */;
import ColorUtils from "ColorUtils" /* 5167 */;
import Constants from "Constants" /* 7978 */;
import react_native from "react-native" /* 8473 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8486 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10255 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11522 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 13410 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 13420 */;
import getGameOrganizationInviteCtaStateDefault from "getGameOrganizationInviteCtaState" /* 15367 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11521 */;
import GuildStore from "GuildStore" /* 5041 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx");

export function createGameOrganizationInviteEmbed(code, theme, id) {
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
  let obj22;
  let obj6;
  let obj7;
  let organization;
  let processColorOrThrow;
  let prop;
  let prop1;
  let str;
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
    ({ titleColor: obj10.titleColor, bodyTextColor: obj10.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj4 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj2);
      const intl6 = intl7.intl;
      ({ resolvingGradientStart: obj9.resolvingGradientStart, resolvingGradientEnd: obj9.resolvingGradientEnd } = colors);
      str = intl6.string(intl7.t["N/g9Z4"]);
      return obj4;
    } else if (invite.state === tmp34.ERROR) {
      const obj5 = { headerText: formatToPlainString(prop, obj6), titleText: intl4.string(_modDef2530["2/aTr2"]), subtitle: formatToPlainString2(prop1, obj7), titleColor: processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), showInvalidIcon: true, embedCanBeTapped: false, canBeAccepted: false };
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
      return obj5;
    } else {
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj8 = { displayNoun };
      const tmp35 = getGameOrganizationDisplayNounDefault(obj8);
      ({ memberCount, maxMembers } = organization);
      const obj11 = { accepted, isInviter: id === inviterId, canGoToGuild: tmpResult2(invite, id, null != GuildStore.getGuild(invite.guildId)), noun: tmp35, isGameOrganizationFull: null != memberCount && null != maxMembers && memberCount >= maxMembers };
      const tmpResult = getGameOrganizationInviteCtaStateDefault;
      tmpResult2 = canGoToGameOrganizationGuildDefault;
      const obj21 = { headerText: intl.formatToPlainString(_modDef2530["jKi+kc"], obj22), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, bodyText: description, gradientColors: items, isCtaLoading: obj.isJoinFlowPending(code) };
      const tmpResultResult = tmpResult(obj11);
      const merged3 = Object.assign(obj2);
      intl = intl7.intl;
      obj22 = { noun: tmp35 };
      ({ name: obj3.titleText, iconUrl } = organization);
      ({ name: obj3.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (null != memberCount && null != maxMembers) {
        const intl2 = tmp14(1113).intl;
        const obj23 = { count: memberCount, max: maxMembers };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(2530).VuENGl, obj23);
      }
      description = organization.description;
      const hexToRgba = ColorUtils.hexToRgba;
      ColorUtils;
      const internal = tmp(575).internal;
      items = [hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const hexToRgba2 = ColorUtils.hexToRgba;
      ColorUtils;
      const internal2 = tmp(575).internal;
      items[1] = hexToRgba2(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      ({ label: obj3.acceptLabelText, actionable: obj3.canBeAccepted, actionable: obj3.embedCanBeTapped } = tmpResultResult);
      return obj21;
    }
  }
}
