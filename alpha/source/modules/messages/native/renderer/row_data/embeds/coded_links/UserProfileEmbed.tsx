// Module ID: 15471
// Function ID: 15472
// Name: UserProfileEmbed
// Dependencies: [7288, 1385, 8776, 9104, 1113, 15472, 2]
// Exports: createUserProfileEmbed

// Module 15471 (UserProfileEmbed)
import intl2 from "intl" /* 1113 */;
import Constants from "Constants" /* 8776 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 9104 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 15472 */;
import UserProfileStore from "UserProfileStore" /* 7288 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx");

export function createUserProfileEmbed(code, guild_id, arg2) {
  let str;
  let tmp3 = null;
  const obj = UserProfileEmbedRenderingMobileExperiment;
  if (obj.getIsUserProfileEmbedRenderingMobileEnabled("UserProfileEmbed")) {
    let tmp10;
    if (null != UserStore.getUser(code)) {
      const tmp13 = getEmbedThemeColorsDefault(arg2);
      const colors = tmp13.colors;
      const baseColors = tmp13.baseColors;
      const obj4 = { headerText: str.toUpperCase(), resolvingGradientEnd: null, resolvingGradientStart: null, type: InviteTypes.GUILD };
      const intl = tmp(1113).intl;
      ({ resolvingGradientEnd: obj3.resolvingGradientEnd, resolvingGradientStart: obj3.resolvingGradientStart } = colors);
      str = intl.string(intl2.t.ZTNur7);
      const merged = Object.assign(baseColors);
      tmp10 = obj4;
    } else {
      let tmp8 = !UserProfileStore.isFetchingProfile(code, guild_id);
      UserProfileStore.isFetchingProfile(code, guild_id);
      const obj2 = UserProfileStore;
      if (tmp8) {
        const userProfile = obj2.getUserProfile(code);
        let num;
        if (userProfile != null) {
          num = userProfile.fetchEndedAt;
        }
        if (num == null) {
          num = 0;
        }
        tmp8 = num > 0;
      }
      tmp10 = null;
    }
    tmp3 = tmp10;
  }
  return tmp3;
}
