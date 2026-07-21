// Module ID: 7883
// Function ID: 62748
// Name: preloadUserBannerImage
// Dependencies: []
// Exports: default

// Module 7883 (preloadUserBannerImage)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_profile/preloadUserBannerImage.tsx");

export default function preloadUserBannerImage(user, guildId) {
  if ("undefined" !== typeof globalThis.Image) {
    user = user.user;
    let id;
    if (null != user) {
      id = user.id;
    }
    if (null != id) {
      if ("" !== id) {
        let tmp3 = null != guildId;
        if (tmp3) {
          const guild_member_profile = user.guild_member_profile;
          let banner;
          if (null != guild_member_profile) {
            banner = guild_member_profile.banner;
          }
          tmp3 = null != banner;
        }
        let guildMemberBannerURL;
        if (tmp3) {
          let obj = require(dependencyMap[0]);
          obj = { id, guildId, banner: user.guild_member_profile.banner };
          const GifAutoPlay = require(dependencyMap[1]).GifAutoPlay;
          obj.canAnimate = GifAutoPlay.getSetting();
          obj.size = 600;
          guildMemberBannerURL = obj.getGuildMemberBannerURL(obj);
        }
        let banner1;
        if (null != user) {
          const user_profile = user.user_profile;
          if (null != user_profile) {
            banner1 = user_profile.banner;
          }
        }
        if (null != banner1) {
          obj = { id, banner: user.user_profile.banner };
          const GifAutoPlay2 = require(dependencyMap[1]).GifAutoPlay;
          obj.canAnimate = GifAutoPlay2.getSetting();
          obj.size = 600;
          guildMemberBannerURL = require(dependencyMap[0]).getUserBannerURL(obj);
          const obj3 = require(dependencyMap[0]);
        }
        if (null != guildMemberBannerURL) {
          const prototype = globalThis.Image.prototype;
          const image = new globalThis.Image();
          image.src = guildMemberBannerURL;
        }
      }
    }
  }
};
