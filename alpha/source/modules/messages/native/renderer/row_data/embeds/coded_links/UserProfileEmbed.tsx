// Module ID: 14530
// Function ID: 14531
// Name: UserProfileEmbed
// Dependencies: [5776, 12393, 1112, 11982, 11981, 2]
// Exports: createUserProfileEmbed

// Module 14530 (UserProfileEmbed)
import intl9 from "intl" /* 1112 */;
import Constants from "Constants" /* 5776 */;
import UserProfileEmbedCard from "UserProfileEmbedCard" /* 11981 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 11982 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 12393 */;
import size from "module_2" /* 2 */;

const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx");

export function createUserProfileEmbed(code, guild_id, arg2) {
  let avatarUri;
  let avatarUri2;
  let baseColors;
  let colors;
  let displayName;
  let formatToPlainString;
  let intl3;
  let intl5;
  let intl7;
  let isPrivate;
  let obj11;
  let pronouns;
  let prop;
  let speedBumpType;
  let str3;
  let str4;
  let str6;
  let title;
  let username;
  const obj = UserProfileEmbedRenderingMobileExperiment;
  if (obj.getIsUserProfileEmbedRenderingMobileEnabled("UserProfileEmbed")) {
    guild_id = undefined;
    const readUserProfileEmbedCard = UserProfileEmbedCard.readUserProfileEmbedCard;
    UserProfileEmbedCard;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    let id;
    if (guild_id != null) {
      id = guild_id.id;
    }
    const userProfileEmbedCard = readUserProfileEmbedCard(code, guild_id, id);
    const type = userProfileEmbedCard.type;
    if ("loading" === type) {
      const tmp24 = getEmbedThemeColorsDefault(arg2);
      const colors3 = tmp24.colors;
      const baseColors2 = tmp24.baseColors;
      const obj2 = { headerText: str6.toUpperCase(), resolvingGradientEnd: null, resolvingGradientStart: null, type: InviteTypes.GUILD };
      const intl8 = tmp(1112).intl;
      ({ resolvingGradientEnd: obj6.resolvingGradientEnd, resolvingGradientStart: obj6.resolvingGradientStart } = colors3);
      str6 = intl8.string(intl9.t.ZTNur7);
      const merged = Object.assign(baseColors2);
      return obj2;
    } else if ("hidden" === type) {
      return null;
    } else if ("restricted" === type) {
      ({ speedBumpType, displayName, avatarUri: avatarUri2 } = userProfileEmbedCard);
      const tmp18 = getEmbedThemeColorsDefault(arg2);
      const colors2 = tmp18.colors;
      const obj5 = { thumbnailCornerRadius: 25, thumbnailUrl: avatarUri2, headerText: str4.toUpperCase(), titleText: intl5.string(intl9.t.b33pLD), titleColor: colors2.titleColor, subtitle: formatToPlainString(prop, obj11), subtitleColor: colors2.subtitleColor, acceptLabelText: intl7.string(intl9.t.iXAna6), canBeAccepted: true, embedCanBeTapped: true, type: InviteTypes.GUILD };
      const merged1 = Object.assign(tmp18.baseColors);
      const intl4 = tmp(1112).intl;
      str4 = intl4.string(intl9.t.JxM9jQ);
      intl5 = tmp(1112).intl;
      const intl6 = tmp(1112).intl;
      formatToPlainString = intl6.formatToPlainString;
      if ("block" === speedBumpType) {
        prop = tmp(1112).t["8F+WNz"];
      } else {
        prop = tmp(1112).t["/cZp5s"];
      }
      obj11 = { username: displayName };
      intl7 = tmp(1112).intl;
      ({ acceptLabelGreenColor: obj4.acceptLabelColor, acceptLabelGreenBackgroundColor: obj4.acceptLabelBackgroundColor } = colors2);
      return obj5;
    } else if ("card" === type) {
      ({ username, pronouns } = userProfileEmbedCard);
      ({ title, avatarUri, isPrivate } = userProfileEmbedCard);
      ({ colors, baseColors } = getEmbedThemeColorsDefault(arg2));
      let formatToPlainStringResult = username;
      getEmbedThemeColorsDefault(arg2);
      if ("" !== pronouns) {
        const intl = tmp(1112).intl;
        const obj12 = { username, pronouns };
        formatToPlainStringResult = intl.formatToPlainString(tmp(1112).t["lD2bO/"], obj12);
      }
      const obj13 = { thumbnailCornerRadius: 25, thumbnailUrl: avatarUri, headerText: str3.toUpperCase(), titleText: title, titleColor: colors.titleColor, subtitle: formatToPlainStringResult, subtitleColor: colors.subtitleColor, acceptLabelText: intl3.string(intl9.t.iXAna6), canBeAccepted: true, embedCanBeTapped: true, type: InviteTypes.GUILD };
      const merged2 = Object.assign(baseColors);
      const intl2 = tmp(1112).intl;
      const string = intl2.string;
      const t = tmp(1112).t;
      str3 = string(isPrivate ? t.KPnd2O : t.JxM9jQ);
      intl3 = tmp(1112).intl;
      ({ acceptLabelGreenColor: obj3.acceptLabelColor, acceptLabelGreenBackgroundColor: obj3.acceptLabelBackgroundColor } = colors);
      return obj13;
    }
  } else {
    return null;
  }
}
