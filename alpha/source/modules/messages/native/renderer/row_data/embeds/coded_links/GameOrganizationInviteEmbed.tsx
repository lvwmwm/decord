// Module ID: 14587
// Function ID: 14588
// Name: GameOrganizationInviteEmbed
// Dependencies: [11032, 10006, 11033, 7810, 1125, 2403, 8273, 8135, 587, 12737, 4969, 12730, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 14587 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1125 */;
import _modDef2403 from "module_2403" /* 2403 */;
import ColorUtils from "ColorUtils" /* 4969 */;
import Constants from "Constants" /* 7810 */;
import react_native from "react-native" /* 8135 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8273 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10006 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11033 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 12730 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12737 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11032 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx");

export const createGameOrganizationInviteEmbed = function createGameOrganizationInviteEmbed(code, theme, id) {
  let accepted;
  let application;
  let baseColors;
  let colors;
  let description;
  let displayNoun;
  let formatToPlainStringResult;
  let iconUrl;
  let iconUrl2;
  let intl3;
  let intl4;
  let intl6;
  let inviterId;
  let items;
  let maxMembers;
  let memberCount;
  let obj18;
  let obj5;
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
    ({ titleColor: obj7.titleColor, bodyTextColor: obj7.bodyTextColor, subtitleColor: obj7.subtitleColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj2);
      const intl5 = intl7.intl;
      ({ resolvingGradientStart: obj6.resolvingGradientStart, resolvingGradientEnd: obj6.resolvingGradientEnd } = colors);
      str = intl5.string(intl7.t["N/g9Z4"]);
      return obj3;
    } else if (invite.state === tmp31.ERROR) {
      const obj4 = { headerText: intl3.string(_modDef2403.GLe98U), titleText: intl4.string(_modDef2403["2/aTr2"]), titleColor: obj5.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400), embedCanBeTapped: false, canBeAccepted: false };
      const merged2 = Object.assign(obj2);
      intl3 = intl7.intl;
      intl4 = intl7.intl;
      obj5 = react_native;
      return obj4;
    } else {
      let tmp13;
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj8 = { displayNoun };
      const tmp32 = getGameOrganizationDisplayNounDefault(obj8);
      ({ memberCount, maxMembers } = organization);
      const obj10 = { headerText: intl6.formatToPlainString(_modDef2403["jKi+kc"], obj18), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, bodyText: description, gradientColors: items };
      const merged3 = Object.assign(obj2);
      intl6 = intl7.intl;
      obj18 = { noun: tmp32 };
      ({ name: obj9.titleText, iconUrl } = organization);
      ({ name: obj9.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = tmp36(1125).intl;
          const obj = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(tmp(2403).VuENGl, obj);
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
      const tmp9 = canGoToGameOrganizationGuildDefault(invite, id);
      const obj19 = { acceptLabelText: null, canBeAccepted: null, embedCanBeTapped: null };
      const intl2 = tmp36(1125).intl;
      if (accepted) {
        let stringResult;
        const string = intl2.string;
        if (tmp9) {
          stringResult = string(tmp(2403).H1wMHV);
        } else {
          stringResult = string(tmp36(1125).t.cEnaWx);
        }
        obj19.acceptLabelText = stringResult;
        obj19.canBeAccepted = tmp9;
        obj19.embedCanBeTapped = tmp9;
        tmp13 = obj19;
      } else {
        let stringResult1;
        if (id === inviterId) {
          stringResult1 = intl2.string(tmp(2403).OkMPbI);
        } else {
          const obj20 = { noun: tmp32 };
          stringResult1 = intl2.formatToPlainString(tmp(2403)["Cz/ZUM"], obj20);
        }
        obj19.acceptLabelText = stringResult1;
        obj19.canBeAccepted = id !== inviterId;
        obj19.embedCanBeTapped = id !== inviterId;
        tmp13 = obj19;
      }
      const merged4 = Object.assign(tmp13);
      return obj10;
    }
  }
};
