// Module ID: 15582
// Function ID: 15583
// Name: UserProfileEmbed
// Dependencies: [7352, 1388, 8842, 9170, 1113, 15583, 2]
// Exports: createUserProfileEmbed

// Module 15582 (UserProfileEmbed)
import intl2 from "intl" /* 1113 */;
import Constants from "Constants" /* 8842 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 9170 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 15583 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import UserStore from "UserStore" /* 1388 */;
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
