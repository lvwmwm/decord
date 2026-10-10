// Module ID: 8312
// Function ID: 8313
// Name: preloadUserBannerImage
// Dependencies: [1415, 2041, 2]
// Exports: default

// Module 8312 (preloadUserBannerImage)
import AvatarUtils from "AvatarUtils" /* 1415 */;
import UserSettings from "UserSettings" /* 2041 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/preloadUserBannerImage.tsx");

export default function preloadUserBannerImage(user, guildId) {
  let GifAutoPlay;
  let GifAutoPlay2;
  if (typeof globalThis.Image !== "undefined") {
    user = user.user;
    let id;
    if (user != null) {
      id = user.id;
    }
    if (null != id) {
      if ("" !== id) {
        let tmp3 = null != guildId;
        if (tmp3) {
          const guild_member_profile = user.guild_member_profile;
          let banner;
          if (guild_member_profile != null) {
            banner = guild_member_profile.banner;
          }
          tmp3 = null != banner;
        }
        let guildMemberBannerURL;
        if (tmp3) {
          const obj = { id, guildId, banner: user.guild_member_profile.banner, canAnimate: GifAutoPlay.getSetting(), size: 600 };
          const getGuildMemberBannerURL = AvatarUtils.getGuildMemberBannerURL;
          AvatarUtils;
          GifAutoPlay = UserSettings.GifAutoPlay;
          guildMemberBannerURL = getGuildMemberBannerURL(obj);
        }
        let banner1;
        if (user != null) {
          const user_profile = user.user_profile;
          if (user_profile != null) {
            banner1 = user_profile.banner;
          }
        }
        if (null != banner1) {
          const obj2 = { id, banner: user.user_profile.banner, canAnimate: GifAutoPlay2.getSetting(), size: 600 };
          const getUserBannerURL = AvatarUtils.getUserBannerURL;
          AvatarUtils;
          GifAutoPlay2 = UserSettings.GifAutoPlay;
          guildMemberBannerURL = getUserBannerURL(obj2);
        }
        if (null != guildMemberBannerURL) {
          const self = this;
          const self2 = this;
          const image = new globalThis.Image();
          image.src = guildMemberBannerURL;
        }
      }
    }
  }
};
