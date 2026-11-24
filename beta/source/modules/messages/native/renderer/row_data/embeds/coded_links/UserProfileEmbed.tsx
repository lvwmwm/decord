// Module ID: 14317
// Function ID: 14318
// Name: UserProfileEmbed
// Dependencies: [6956, 1386, 8438, 8680, 1112, 8072, 8245, 5943, 12232, 2]
// Exports: createUserProfileEmbed

// Module 14317 (UserProfileEmbed)
import intl5 from "intl" /* 1112 */;
import useDisplayProfile from "useDisplayProfile" /* 8072 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8245 */;
import Constants from "Constants" /* 8438 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8680 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 12232 */;
import UserProfileStore from "UserProfileStore" /* 6956 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx");

export function createUserProfileEmbed(code, guild_id, arg2) {
  let baseColors;
  let colors;
  let intl3;
  let str3;
  let str4;
  let tmp9Result;
  let tmpResult2;
  const obj = UserProfileEmbedRenderingMobileExperiment;
  if (obj.getIsUserProfileEmbedRenderingMobileEnabled("UserProfileEmbed")) {
    let obj4;
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    const user = UserStore.getUser(code);
    if (null == user) {
      let tmp17 = !UserProfileStore.isFetchingProfile(code, guild_id);
      UserProfileStore.isFetchingProfile(code, guild_id);
      const obj8 = UserProfileStore;
      if (tmp17) {
        const userProfile = obj8.getUserProfile(code);
        let num2;
        if (userProfile != null) {
          num2 = userProfile.fetchEndedAt;
        }
        if (num2 == null) {
          num2 = 0;
        }
        tmp17 = num2 > 0;
      }
      let tmp19 = null;
      if (!tmp17) {
        const tmp21 = getEmbedThemeColorsDefault(arg2);
        const colors2 = tmp21.colors;
        const baseColors2 = tmp21.baseColors;
        const obj2 = { headerText: str4.toUpperCase(), resolvingGradientEnd: null, resolvingGradientStart: null, type: InviteTypes.GUILD };
        const intl4 = tmp(1112).intl;
        ({ resolvingGradientEnd: obj9.resolvingGradientEnd, resolvingGradientStart: obj9.resolvingGradientStart } = colors2);
        str4 = intl4.string(intl5.t.ZTNur7);
        const merged = Object.assign(baseColors2);
        tmp19 = obj2;
      }
      obj4 = tmp19;
    } else {
      let username;
      let id;
      if (guild_id != null) {
        id = guild_id.id;
      }
      ({ colors, baseColors } = getEmbedThemeColorsDefault(arg2));
      getEmbedThemeColorsDefault(arg2);
      const tmpResult = useDisplayProfile;
      const displayProfile = tmpResult.getDisplayProfile(user.id, guild_id);
      let guildId = guild_id;
      const tmp9 = importDefault;
      if (null != displayProfile) {
        guildId = displayProfile.guildId;
      }
      let str;
      if (displayProfile != null) {
        str = displayProfile.pronouns;
      }
      if (str == null) {
        str = "";
      }
      if ("" !== str) {
        const intl = tmp(1112).intl;
        const obj3 = { username: user.username, pronouns: str };
        username = intl.formatToPlainString(tmp(1112).t["lD2bO/"], obj3);
      } else {
        username = user.username;
      }
      obj4 = { thumbnailCornerRadius: 25, thumbnailUrl: tmpResult2.getAssetUriForEmbed(user.getAvatarSource(guildId)), headerText: str3.toUpperCase(), titleText: tmp9Result.getName(guildId, id, user), titleColor: colors.titleColor, subtitle: username, subtitleColor: colors.subtitleColor, acceptLabelText: intl3.string(intl5.t.iXAna6), canBeAccepted: true, embedCanBeTapped: true, type: InviteTypes.GUILD };
      const merged1 = Object.assign(baseColors);
      tmpResult2 = renderer_EmbedUtils;
      const intl2 = tmp(1112).intl;
      str3 = intl2.string(intl5.t.JxM9jQ);
      tmp9Result = tmp9(5943);
      intl3 = tmp(1112).intl;
      ({ acceptLabelGreenColor: obj5.acceptLabelColor, acceptLabelGreenBackgroundColor: obj5.acceptLabelBackgroundColor } = colors);
    }
    return obj4;
  } else {
    return null;
  }
}
