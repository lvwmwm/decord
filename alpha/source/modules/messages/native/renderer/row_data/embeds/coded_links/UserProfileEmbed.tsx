// Module ID: 14348
// Function ID: 14349
// Name: UserProfileEmbed
// Dependencies: [5650, 12236, 1112, 11827, 11826, 2]
// Exports: createUserProfileEmbed

// Module 14348 (UserProfileEmbed)
import intl5 from "intl" /* 1112 */;
import Constants from "Constants" /* 5650 */;
import UserProfileEmbedCard from "UserProfileEmbedCard" /* 11826 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 11827 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 12236 */;
import size from "module_2" /* 2 */;

const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx");

export function createUserProfileEmbed(code, guild_id, arg2) {
  let avatarUri;
  let baseColors;
  let colors;
  let intl3;
  let pronouns;
  let str3;
  let str4;
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
      const tmp18 = getEmbedThemeColorsDefault(arg2);
      const colors2 = tmp18.colors;
      const baseColors2 = tmp18.baseColors;
      const obj2 = { headerText: str4.toUpperCase(), resolvingGradientEnd: null, resolvingGradientStart: null, type: InviteTypes.GUILD };
      const intl4 = tmp(1112).intl;
      ({ resolvingGradientEnd: obj4.resolvingGradientEnd, resolvingGradientStart: obj4.resolvingGradientStart } = colors2);
      str4 = intl4.string(intl5.t.ZTNur7);
      const merged = Object.assign(baseColors2);
      return obj2;
    } else if ("hidden" === type) {
      return null;
    } else if ("card" === type) {
      ({ username, pronouns } = userProfileEmbedCard);
      ({ title, avatarUri } = userProfileEmbedCard);
      ({ colors, baseColors } = getEmbedThemeColorsDefault(arg2));
      let formatToPlainStringResult = username;
      getEmbedThemeColorsDefault(arg2);
      if ("" !== pronouns) {
        const intl = tmp(1112).intl;
        const obj7 = { username, pronouns };
        formatToPlainStringResult = intl.formatToPlainString(tmp(1112).t["lD2bO/"], obj7);
      }
      const obj8 = { thumbnailCornerRadius: 25, thumbnailUrl: avatarUri, headerText: str3.toUpperCase(), titleText: title, titleColor: colors.titleColor, subtitle: formatToPlainStringResult, subtitleColor: colors.subtitleColor, acceptLabelText: intl3.string(intl5.t.iXAna6), canBeAccepted: true, embedCanBeTapped: true, type: InviteTypes.GUILD };
      const merged1 = Object.assign(baseColors);
      const intl2 = tmp(1112).intl;
      str3 = intl2.string(intl5.t.JxM9jQ);
      intl3 = tmp(1112).intl;
      ({ acceptLabelGreenColor: obj3.acceptLabelColor, acceptLabelGreenBackgroundColor: obj3.acceptLabelBackgroundColor } = colors);
      return obj8;
    }
  } else {
    return null;
  }
}
