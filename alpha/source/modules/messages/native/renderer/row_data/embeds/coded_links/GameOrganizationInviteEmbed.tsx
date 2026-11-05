// Module ID: 15372
// Function ID: 15373
// Name: GameOrganizationInviteEmbed
// Dependencies: [11559, 10303, 11560, 8024, 1113, 2533, 8540, 13445, 8527, 575, 5140, 13436, 2]
// Exports: createGameOrganizationInviteEmbed

// Module 15372 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1113 */;
import _modDef2533 from "module_2533" /* 2533 */;
import ColorUtils from "ColorUtils" /* 5140 */;
import Constants from "Constants" /* 8024 */;
import react_native from "react-native" /* 8527 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8540 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10303 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11560 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 13436 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 13445 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11559 */;
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
  let obj10;
  let obj29;
  let obj6;
  let obj7;
  let organization;
  let processColorOrThrow;
  let prop;
  let prop1;
  let str;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const invite = GameOrganizationInviteStore.getInvite(code);
  const obj = GameOrganizationInviteStore;
  if (null == invite) {
    return null;
  } else {
    const obj3 = { extendedType: CodedLinkExtendedType.GAME_ORGANIZATION_INVITE, type: InviteTypes.GUILD };
    const merged = Object.assign(baseColors);
    ({ titleColor: obj14.titleColor, bodyTextColor: obj14.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj4 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj3);
      const intl9 = intl10.intl;
      ({ resolvingGradientStart: obj13.resolvingGradientStart, resolvingGradientEnd: obj13.resolvingGradientEnd } = colors);
      str = intl9.string(intl10.t["N/g9Z4"]);
      return obj4;
    } else if (invite.state === tmp38.ERROR) {
      const obj5 = { headerText: formatToPlainString(prop, obj6), titleText: intl7.string(_modDef2533["2/aTr2"]), subtitle: formatToPlainString2(prop1, obj7), titleColor: processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), showInvalidIcon: true, embedCanBeTapped: false, canBeAccepted: false };
      const merged2 = Object.assign(obj3);
      const intl6 = intl10.intl;
      formatToPlainString = intl6.formatToPlainString;
      obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      prop = tmp(2533)["jKi+kc"];
      intl7 = intl10.intl;
      const intl8 = intl10.intl;
      formatToPlainString2 = intl8.formatToPlainString;
      obj7 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      prop1 = tmp(2533)["L/fHgw"];
      processColorOrThrow = react_native.processColorOrThrow;
      react_native;
      internal3 = tmp(575).internal;
      return obj5;
    } else {
      let obj31;
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj8 = { displayNoun };
      const tmp39 = getGameOrganizationDisplayNounDefault(obj8);
      ({ memberCount, maxMembers } = organization);
      let tmp5 = null != memberCount && null != maxMembers;
      const obj9 = { headerText: intl.formatToPlainString(_modDef2533["jKi+kc"], obj10), thumbnailUrl: iconUrl, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, gameIconUrl: iconUrl2, memberCountText: formatToPlainStringResult, bodyText: description, gradientColors: items, isCtaLoading: obj.isJoinFlowPending(code) };
      const merged3 = Object.assign(obj3);
      intl = intl10.intl;
      obj10 = { noun: tmp39 };
      ({ name: obj2.titleText, iconUrl } = organization);
      ({ name: obj2.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (tmp5) {
        const intl2 = tmp9(1113).intl;
        const obj11 = { count: memberCount, max: maxMembers };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(2533).VuENGl, obj11);
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
          stringResult = string(tmp(2533).H1wMHV);
        } else {
          stringResult = string(tmp9(1113).t.cEnaWx);
        }
        obj31 = { acceptLabelText: stringResult, canBeAccepted: tmp14, embedCanBeTapped: tmp14 };
        const obj12 = { acceptLabelText: stringResult, canBeAccepted: tmp14, embedCanBeTapped: tmp14 };
      } else if (tmp5) {
        const obj15 = { acceptLabelText: intl4.formatToPlainString(_modDef2533.rMimTG, obj29), canBeAccepted: false, embedCanBeTapped: false };
        intl4 = tmp9(1113).intl;
        obj31 = obj15;
        obj29 = { noun: tmp39 };
      } else {
        let stringResult1;
        const intl3 = tmp9(1113).intl;
        if (id === inviterId) {
          stringResult1 = intl3.string(tmp(2533).OkMPbI);
        } else {
          const obj30 = { noun: tmp39 };
          stringResult1 = intl3.formatToPlainString(tmp(2533)["Cz/ZUM"], obj30);
        }
        obj31 = { acceptLabelText: stringResult1, canBeAccepted: id !== inviterId, embedCanBeTapped: id !== inviterId };
      }
      const merged4 = Object.assign(obj31);
      return obj9;
    }
  }
}
