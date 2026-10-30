// Module ID: 11356
// Function ID: 11357
// Name: UserProfilePreview
// Dependencies: [32, 19, 17, 8723, 7371, 21, 5009, 575, 504, 8749, 8792, 8806, 11357, 8803, 8729, 8766, 8732, 8728, 8807, 8789, 5075, 8785, 8772, 8811, 9477, 8820, 11358, 11359, 11376, 11457, 9475, 2]
// Exports: default

// Module 11356 (UserProfilePreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8789 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import Constants from "Constants" /* 7371 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
const View = react_native.View;
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: metroImportDefault, UserProfileThemeTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_12 = createStyles.createStyles((arg0, arg1, arg2) => {
  let BACKGROUND_SURFACE_HIGH;
  let obj2;
  let tmp4;
  let num = arg2;
  if (arg2 == null) {
    num = 263;
  }
  const obj = { profileContainer: { position: "relative", width: "100%", maxWidth: num }, profileContentContainer: obj2, profileInnerContent: { flexGrow: 1 }, aboutMeCard: { marginTop: tmp4(575).space.PX_12 }, profileEffect: { zIndex: 1 } };
  obj2 = { overflow: "hidden", minHeight: 350, borderWidth: 1, borderColor: BACKGROUND_SURFACE_HIGH, borderRadius: tmp4(575).radii.lg };
  const colors = nativeDefault.colors;
  if (arg1) {
    BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  ({ marginTop: tmp4(575).space.PX_12 });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default function UserProfilePreview(compact) {
  let accessibilityLabel;
  let additionalBadges;
  let avatarBackground;
  let avatarDecorationOverride;
  let closure_2;
  let containerBackground;
  let displayName;
  let displayNameStylesOverride;
  let gradientFallbackBackground;
  let guildId;
  let isPremiumTryItOut;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let maxWidth;
  let obj7;
  let obj8;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingPrimaryGuildId;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let profileEffect;
  let profileEffect1;
  let profileEffectOverride;
  let profileEffectRestartKey;
  let profileFrame;
  let profileFrame1;
  let profileFrameOverride;
  let secondaryColor;
  let style;
  let theme;
  let tmp39;
  let tmp40;
  let tmp47;
  let tmp49;
  let user;
  ({ user, displayName, guildId } = compact);
  ({ avatarDecorationOverride, profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, isPremiumTryItOut } = compact);
  ({ accessibilityLabel, style } = compact);
  if (isPremiumTryItOut === undefined) {
    isPremiumTryItOut = false;
  }
  let flag = compact.compact;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = compact.hideFrame;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = compact.hideBadges;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = compact.hidePronouns;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = compact.hideGuildTag;
  if (flag5 === undefined) {
    flag5 = false;
  }
  ({ additionalBadges, maxWidth } = compact);
  if (additionalBadges === undefined) {
    additionalBadges = [];
  }
  dependencyMap = undefined;
  set = undefined;
  let first;
  let closure_5;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(504);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
    const obj = UserProfileSettingsStore;
    const tmp2 = isPremiumTryItOut;
    if (tmp2) {
      const tryItOutChanges = obj.getTryItOutChanges();
      const obj3 = {};
      const merged = Object.assign(pendingChanges);
      ({ tryItOutAvatar: obj2.pendingAvatar, tryItOutBanner: obj2.pendingBanner, tryItOutThemeColors: obj2.pendingThemeColors, tryItOutAvatarDecoration: obj2.pendingAvatarDecoration, tryItOutProfileEffect: obj2.pendingProfileEffect, tryItOutDisplayNameStyles: obj2.pendingDisplayNameStyles } = tryItOutChanges);
      return obj3;
    } else {
      return pendingChanges;
    }
  });
  ({ pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingGlobalName, pendingLegacyUsernameDisabled, pendingPrimaryGuildId } = stateFromStoresObject);
  const tmp5 = isPremiumTryItOut(8749)(user.id, guildId);
  ({ theme, primaryColor, secondaryColor } = isPremiumTryItOut(8792)({ user, displayProfile: tmp5, pendingThemeColors, isPreview: isPremiumTryItOut }));
  isPremiumTryItOut(8792)({ user, displayProfile: tmp5, pendingThemeColors, isPreview: isPremiumTryItOut });
  const tmp8 = closure_12(flag, null != primaryColor, maxWidth);
  const tmp9 = isPremiumTryItOut(8806)();
  const obj2 = guildId(11357);
  const customStatusActivity = obj2.useCustomStatusActivity();
  let tmp31Result5 = null != customStatusActivity && !flag;
  const tmpResult = tmp(8803);
  const userProfileColors = tmpResult.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBackground, gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (undefined !== avatarDecorationOverride) {
    pendingAvatarDecoration = avatarDecorationOverride;
  }
  if (undefined !== profileEffectOverride) {
    pendingProfileEffect = profileEffectOverride;
  }
  if (undefined !== profileFrameOverride) {
    pendingProfileFrame = profileFrameOverride;
  }
  if (undefined !== displayNameStylesOverride) {
    pendingDisplayNameStyles = displayNameStylesOverride;
  }
  let obj3 = { pendingValue: pendingProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId };
  profileEffect = undefined;
  const getProfilePreviewValue = tmp(8729).getProfilePreviewValue;
  tmp(8729);
  if (tmp5 != null) {
    profileEffect = tmp5.profileEffect;
  }
  profileEffect1 = undefined;
  if (tmp5 != null) {
    const _guildMemberProfile = tmp5._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj3);
  let profilePreviewValue2;
  if (!flag2) {
    const obj4 = { pendingValue: pendingProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
    profileFrame = undefined;
    const getProfilePreviewValue2 = tmp(8729).getProfilePreviewValue;
    tmp(8729);
    if (tmp5 != null) {
      profileFrame = tmp5.profileFrame;
    }
    profileFrame1 = undefined;
    if (tmp5 != null) {
      const _guildMemberProfile2 = tmp5._guildMemberProfile;
      if (_guildMemberProfile2 != null) {
        profileFrame1 = _guildMemberProfile2.profileFrame;
      }
    }
    profilePreviewValue2 = getProfilePreviewValue2(obj4);
  }
  let skuId1;
  const tmp4Result = isPremiumTryItOut(8766);
  if (profilePreviewValue2 != null) {
    skuId1 = profilePreviewValue2.skuId;
  }
  const tmp4ResultResult = tmp4Result(skuId1);
  dependencyMap = tmp4ResultResult;
  const obj5 = { userId: user.id, image: pendingAvatar };
  const tmpResult7 = tmp(8732);
  const pendingAvatarSrc = tmpResult7.getPendingAvatarSrc(obj5);
  const tmpResult8 = tmp(8728);
  const userPrimaryGuild = tmpResult8.useUserPrimaryGuild(pendingPrimaryGuildId);
  const arr2 = isPremiumTryItOut(8807)(tmp5, pendingLegacyUsernameDisabled);
  set = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp27 = set(first.useState({ width: 0, height: 0 }), 2);
  first = tmp27[0];
  closure_5 = tmp27[1];
  const items2 = [tmp4ResultResult, first.width];
  const callback = first.useCallback((nativeEvent) => {
    size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
    closure_5(size);
  }, []);
  const memo = first.useMemo(() => {
    let num2;
    let overflowBottom;
    let overflowHorizontal;
    let overflowTop;
    const tmp = closure_2;
    if (null != closure_2) {
      const layers = tmp.layers;
      ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(tmp, first.width));
      let num = 0;
      scaleProfileFrameDefault(tmp, first.width);
      if (layers.some((type) => "staple" === type.type && "top" === type.anchor)) {
        num = overflowTop;
      }
      const layers2 = tmp.layers;
      const obj = { marginTop: num, marginBottom: num2, marginHorizontal: overflowHorizontal };
      num2 = 0;
      if (layers2.some((type) => "staple" === type.type && "bottom" === type.anchor)) {
        num2 = overflowBottom;
      }
      return obj;
    }
  }, items2);
  const obj6 = { theme, primaryColor, secondaryColor, children: closure_9(closure_5, obj7) };
  obj7 = { style: items3, pointerEvents: "none", accessibilityLabel, accessibilityRole: "image", accessible: true, children: closure_10(closure_5, obj8) };
  items3 = [tmp8.profileContainer, memo, style];
  let tmp31Result = null != tmp4ResultResult;
  obj8 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: { flexShrink: 1 }, children: items4 };
  const ThemeContextProvider = tmp(5075).ThemeContextProvider;
  if (tmp31Result) {
    const obj9 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: tmp(8772).ProfileFrameLayerOrder.BACK, containerWidth: null, containerHeight: null };
    ({ width: obj12.containerWidth, height: obj12.containerHeight } = first);
    const tmp4Result7 = isPremiumTryItOut(8785);
    tmp31Result = tmp31(tmp4Result7, obj9);
  }
  items4 = [tmp31Result, , ];
  const obj10 = { onLayout: callback, style: tmp8.profileContentContainer, children: items5 };
  const obj11 = { user, displayProfile: tmp5, bannerHeight: tmp(9477).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT, pendingBanner, pendingAvatarSrc, pendingAccentColor: tmp39, pendingThemeColors: tmp40, disableInteraction: true };
  tmp39 = undefined;
  const tmp4Result8 = isPremiumTryItOut(8811);
  if (null != pendingAccentColor) {
    tmp39 = pendingAccentColor;
  }
  tmp40 = undefined;
  if (null != pendingThemeColors) {
    tmp40 = pendingThemeColors;
  }
  items5 = [closure_9(tmp4Result8, obj11), , ];
  const obj13 = { style: tmp8.profileInnerContent, children: items6 };
  items6 = [closure_9(tmp4(8820), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items7, children: items8 };
  items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp42 = !tmp31Result5;
  const tmp4Result9 = isPremiumTryItOut(11358);
  if (!tmp31Result5) {
    tmp42 = { paddingTop };
    const obj15 = { paddingTop };
  }
  items7[2] = tmp42;
  if (tmp31Result5) {
    const obj16 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null };
    ({ customStatusBubble: obj18.style, emojiOnlyCustomStatusBubble: obj18.emojiOnlyStyle } = tmp9);
    tmp31Result5 = tmp31(tmp4(11359), obj16);
  }
  items8 = [tmp31Result5, , ];
  const obj17 = { user, themeType: constants.PREVIEW, displayName, pronouns: tmp47, badges: items1, badgeContainerBackground: containerBackground, showBadgeToastOnPress: false, pendingDisplayNameStyles, primaryGuildOverride: tmp49, guildId, hideBadges: flag3 };
  const tmp4Result10 = isPremiumTryItOut(11376);
  if (displayName == null) {
    displayName = pendingGlobalName;
  }
  tmp47 = null;
  if (!flag4) {
    if (pendingPronouns == null) {
      let pronouns;
      if (tmp5 != null) {
        pronouns = tmp5.pronouns;
      }
      pendingPronouns = pronouns;
    }
    tmp47 = pendingPronouns;
  }
  tmp49 = null;
  if (!flag5) {
    tmp49 = userPrimaryGuild;
  }
  items8[1] = closure_9(tmp4Result10, obj17);
  let tmp31Result6 = !flag;
  if (tmp31Result6) {
    const obj19 = { userId: user.id, displayProfile: tmp5, themeType: constants.PREVIEW, style: items9, bioLineClamp: 1 };
    items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj20 = { backgroundColor: containerBackground };
    items9[2] = obj20;
    tmp31Result6 = tmp31(tmp4(11457), obj19);
  }
  items8[2] = tmp31Result6;
  items6[1] = closure_10(tmp4Result9, obj14);
  items5[1] = closure_10(closure_5, obj13);
  let tmp31Result7 = null != profilePreviewValue;
  if (tmp31Result7) {
    let skuId;
    const obj21 = { skuId: profilePreviewValue.skuId, style: tmp8.profileEffect };
    const tmp4Result11 = isPremiumTryItOut(9475);
    if (null != profileEffectRestartKey) {
      const _HermesInternal = HermesInternal;
      skuId = "" + profilePreviewValue.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = profilePreviewValue.skuId;
    }
    tmp31Result7 = tmp31(tmp4Result11, obj21, skuId);
  }
  items5[2] = tmp31Result7;
  items4[1] = closure_10(closure_5, obj10);
  let tmp31Result8 = null != tmp4ResultResult;
  if (tmp31Result8) {
    const obj22 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: tmp(8772).ProfileFrameLayerOrder.FRONT, containerWidth: null, containerHeight: null };
    ({ width: obj23.containerWidth, height: obj23.containerHeight } = first);
    const tmp4Result12 = isPremiumTryItOut(8785);
    tmp31Result8 = tmp31(tmp4Result12, obj22);
  }
  items4[2] = tmp31Result8;
  return closure_9(ThemeContextProvider, obj6);
};
