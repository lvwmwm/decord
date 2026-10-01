// Module ID: 7644
// Function ID: 7645
// Name: useUserProfileAnalyticsProperties
// Dependencies: [19, 7628, 2]
// Exports: default

// Module 7644 (useUserProfileAnalyticsProperties)
import Constants from "Constants" /* 7628 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const UserProfileAnalyticsTypes = Constants.UserProfileAnalyticsTypes;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx");

export default function useUserProfileAnalyticsProperties(userId) {
  userId = userId.userId;
  const user = userId.user;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  const displayProfile = userId.displayProfile;
  const guildMember = userId.guildMember;
  const profileEffectSkuId = userId.profileEffectSkuId;
  const type = userId.type;
  let memo;
  let memo1;
  let obj = userId;
  const items = [userId, channelId, guildId, displayProfile, , , , ];
  let avatarDecoration;
  const useMemo = userId.useMemo;
  if (guildMember != null) {
    avatarDecoration = guildMember.avatarDecoration;
  }
  items[4] = avatarDecoration;
  let avatarDecoration1;
  if (user != null) {
    avatarDecoration1 = user.avatarDecoration;
  }
  items[5] = avatarDecoration1;
  items[6] = profileEffectSkuId;
  items[7] = type;
  memo = useMemo(() => {
    let _BooleanResult;
    let prop;
    let tmp2;
    let USER_SHEET = type;
    if (type == null) {
      USER_SHEET = UserProfileAnalyticsTypes.USER_SHEET;
    }
    const obj = { type: USER_SHEET, other_user_id: userId, channel_id: channelId, guild_id: guildId, profile_has_nitro_customization: tmp2, profile_has_theme_color_customized: null != displayProfile && displayProfile.hasThemeColors(), profile_has_theme_animation: null != prop, has_avatar_decoration: _BooleanResult, has_profile_effect: null != profileEffectSkuId };
    tmp2 = null != displayProfile;
    if (tmp2) {
      let result;
      if (displayProfile != null) {
        result = obj2.hasPremiumCustomization();
      }
      tmp2 = result;
    }
    prop = undefined;
    null != displayProfile && displayProfile.hasThemeColors();
    if (displayProfile != null) {
      prop = obj2.popoutAnimationParticleType;
    }
    let avatarDecoration;
    const _Boolean = Boolean;
    if (guildMember != null) {
      avatarDecoration = guildMember.avatarDecoration;
    }
    _BooleanResult = _Boolean(avatarDecoration);
    if (!_BooleanResult) {
      let avatarDecoration1;
      const _Boolean2 = Boolean;
      if (user != null) {
        avatarDecoration1 = user.avatarDecoration;
      }
      _BooleanResult = _Boolean2(avatarDecoration1);
    }
    return obj;
  }, items);
  const items1 = [displayProfile, guildMember];
  memo1 = obj.useMemo(() => {
    let _Boolean2;
    let avatar;
    let result;
    let result1;
    let nick;
    const _Boolean = Boolean;
    if (guildMember != null) {
      nick = tmp.nick;
    }
    const obj = { has_nickname: _Boolean(nick), has_guild_member_avatar: _Boolean2(avatar), has_guild_member_banner: result, has_guild_member_bio: result1 };
    avatar = undefined;
    _Boolean2 = Boolean;
    if (guildMember != null) {
      avatar = tmp.avatar;
    }
    result = undefined;
    if (displayProfile != null) {
      result = obj2.isUsingGuildMemberBanner();
    }
    result1 = undefined;
    if (displayProfile != null) {
      result1 = obj2.isUsingGuildMemberBio();
    }
    return obj;
  }, items1);
  const items2 = [guildId, memo, memo1];
  return obj.useMemo(() => {
    let obj;
    if (null == guildId) {
      obj = memo;
    } else {
      obj = {};
      const merged = Object.assign(memo);
      const merged1 = Object.assign(memo1);
    }
    return obj;
  }, items2);
};
