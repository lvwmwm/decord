// Module ID: 8488
// Function ID: 67766
// Name: useUserProfileAnalyticsProperties
// Dependencies: []
// Exports: default

// Module 8488 (useUserProfileAnalyticsProperties)
let closure_0 = importAll(dependencyMap[0]);
const UserProfileAnalyticsTypes = arg1(dependencyMap[1]).UserProfileAnalyticsTypes;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx");

export default function useUserProfileAnalyticsProperties(userId) {
  userId = userId.userId;
  const React = userId;
  const user = userId.user;
  const UserProfileAnalyticsTypes = user;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  const displayProfile = userId.displayProfile;
  const guildMember = userId.guildMember;
  const profileEffectSkuId = userId.profileEffectSkuId;
  const type = userId.type;
  let memo;
  let memo1;
  const items = [userId, channelId, guildId, displayProfile, , , , ];
  let avatarDecoration;
  if (null != guildMember) {
    avatarDecoration = guildMember.avatarDecoration;
  }
  items[4] = avatarDecoration;
  let avatarDecoration1;
  if (null != user) {
    avatarDecoration1 = user.avatarDecoration;
  }
  items[5] = avatarDecoration1;
  items[6] = profileEffectSkuId;
  items[7] = type;
  memo = React.useMemo(() => {
    const obj = {};
    if (null != type) {
      let USER_SHEET = type;
    } else {
      USER_SHEET = user.USER_SHEET;
    }
    obj.type = USER_SHEET;
    obj.other_user_id = userId;
    obj.channel_id = channelId;
    obj.guild_id = guildId;
    let tmp2 = null != displayProfile;
    if (tmp2) {
      let result;
      if (null != displayProfile) {
        result = displayProfile.hasPremiumCustomization();
      }
      tmp2 = result;
    }
    obj.profile_has_nitro_customization = tmp2;
    let hasThemeColorsResult = null != displayProfile;
    if (hasThemeColorsResult) {
      hasThemeColorsResult = displayProfile.hasThemeColors();
    }
    obj.profile_has_theme_color_customized = hasThemeColorsResult;
    let prop;
    if (null != displayProfile) {
      prop = displayProfile.popoutAnimationParticleType;
    }
    obj.profile_has_theme_animation = null != prop;
    let avatarDecoration;
    if (null != guildMember) {
      avatarDecoration = guildMember.avatarDecoration;
    }
    let BooleanResult = Boolean(avatarDecoration);
    if (!BooleanResult) {
      let avatarDecoration1;
      if (null != user) {
        avatarDecoration1 = user.avatarDecoration;
      }
      BooleanResult = Boolean(avatarDecoration1);
    }
    obj.has_avatar_decoration = BooleanResult;
    obj.has_profile_effect = null != profileEffectSkuId;
    return obj;
  }, items);
  const items1 = [displayProfile, guildMember];
  memo1 = React.useMemo(() => {
    const obj = {};
    let nick;
    if (null != guildMember) {
      nick = guildMember.nick;
    }
    obj.has_nickname = Boolean(nick);
    let avatar;
    if (null != guildMember) {
      avatar = guildMember.avatar;
    }
    obj.has_guild_member_avatar = Boolean(avatar);
    let result;
    if (null != displayProfile) {
      result = displayProfile.isUsingGuildMemberBanner();
    }
    obj.has_guild_member_banner = result;
    let result1;
    if (null != displayProfile) {
      result1 = displayProfile.isUsingGuildMemberBio();
    }
    obj.has_guild_member_bio = result1;
    return obj;
  }, items1);
  const items2 = [guildId, memo, memo1];
  return React.useMemo(() => {
    if (null == guildId) {
      let obj = memo;
    } else {
      obj = {};
      const merged = Object.assign(memo);
      const merged1 = Object.assign(memo1);
    }
    return obj;
  }, items2);
};
