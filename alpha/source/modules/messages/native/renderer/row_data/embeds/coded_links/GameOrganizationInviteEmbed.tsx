// Module ID: 15126
// Function ID: 15127
// Name: GameOrganizationInviteEmbed
// Dependencies: [11362, 10117, 11363, 7879, 1113, 2404, 8394, 13189, 8381, 575, 5011, 13180, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 15126 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1113 */;
import _modDef2404 from "module_2404" /* 2404 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import Constants from "Constants" /* 7879 */;
import react_native from "react-native" /* 8381 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8394 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10117 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11363 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 13180 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 13189 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11362 */;
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
  let intl7;
  let inviterId;
  let items;
  let maxMembers;
  let memberCount;
  let obj14;
  let obj5;
  let obj6;
  let obj8;
  let organization;
  let processColorOrThrow;
  let prop;
  let prop1;
  let str;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const invite = GameOrganizationInviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const obj2 = { extendedType: CodedLinkExtendedType.GAME_ORGANIZATION_INVITE, type: InviteTypes.GUILD };
    const merged = Object.assign(baseColors);
    ({ titleColor: obj13.titleColor, bodyTextColor: obj13.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj2);
      const intl9 = intl10.intl;
      ({ resolvingGradientStart: obj12.resolvingGradientStart, resolvingGradientEnd: obj12.resolvingGradientEnd } = colors);
      str = intl9.string(intl10.t["N/g9Z4"]);
      return obj3;
    } else if (invite.state === tmp38.ERROR) {
      const obj4 = { headerText: formatToPlainString(prop, obj5), titleText: intl7.string(_modDef2404["2/aTr2"]), subtitle: formatToPlainString2(prop1, obj6), titleColor: processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), showInvalidIcon: true, embedCanBeTapped: false, canBeAccepted: false };
      const merged2 = Object.assign(obj2);
      const intl6 = intl10.intl;
      formatToPlainString = intl6.formatToPlainString;
      obj5 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      prop = tmp(2404)["jKi+kc"];
      intl7 = intl10.intl;
      const intl8 = intl10.intl;
      formatToPlainString2 = intl8.formatToPlainString;
      obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      prop1 = tmp(2404)["L/fHgw"];
      processColorOrThrow = react_native.processColorOrThrow;
      react_native;
      internal3 = tmp(575).internal;
      return obj4;
    } else {
      let obj28;
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj7 = { displayNoun };
      const tmp39 = getGameOrganizationDisplayNounDefault(obj7);
      ({ memberCount, maxMembers } = organization);
      let tmp5 = null != memberCount && null != maxMembers;
      const obj = { headerText: intl.formatToPlainString(_modDef2404["jKi+kc"], obj8), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, bodyText: description, gradientColors: items };
      const merged3 = Object.assign(obj2);
      intl = intl10.intl;
      obj8 = { noun: tmp39 };
      ({ name: obj.titleText, iconUrl } = organization);
      ({ name: obj.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (tmp5) {
        const intl2 = tmp9(1113).intl;
        const obj9 = { count: memberCount, max: maxMembers };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(2404).VuENGl, obj9);
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
      const tmp14 = canGoToGameOrganizationGuildDefault(invite, id);
      if (tmp5) {
        tmp5 = memberCount >= maxMembers;
      }
      if (accepted) {
        let stringResult;
        const intl5 = tmp9(1113).intl;
        const string = intl5.string;
        if (tmp14) {
          stringResult = string(tmp(2404).H1wMHV);
        } else {
          stringResult = string(tmp9(1113).t.cEnaWx);
        }
        obj28 = { acceptLabelText: stringResult, canBeAccepted: tmp14, embedCanBeTapped: tmp14 };
        const obj10 = { acceptLabelText: stringResult, canBeAccepted: tmp14, embedCanBeTapped: tmp14 };
      } else if (tmp5) {
        const obj11 = { acceptLabelText: intl4.formatToPlainString(_modDef2404.rMimTG, obj14), canBeAccepted: false, embedCanBeTapped: false };
        intl4 = tmp9(1113).intl;
        obj28 = obj11;
        obj14 = { noun: tmp39 };
      } else {
        let stringResult1;
        const intl3 = tmp9(1113).intl;
        if (id === inviterId) {
          stringResult1 = intl3.string(tmp(2404).OkMPbI);
        } else {
          const obj27 = { noun: tmp39 };
          stringResult1 = intl3.formatToPlainString(tmp(2404)["Cz/ZUM"], obj27);
        }
        obj28 = { acceptLabelText: stringResult1, canBeAccepted: id !== inviterId, embedCanBeTapped: id !== inviterId };
      }
      const merged4 = Object.assign(obj28);
      return obj;
    }
  }
}
