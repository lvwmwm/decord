// Module ID: 10572
// Function ID: 10573
// Name: UserProfilePreview
// Dependencies: [32, 19, 17, 7605, 6629, 21, 4836, 576, 504, 7631, 7673, 7687, 8819, 7684, 7611, 7646, 7614, 7688, 7670, 4540, 7666, 7652, 7692, 8266, 7702, 10573, 10574, 10614, 10777, 8264, 2]
// Exports: default

// Module 10572 (UserProfilePreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 7670 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import Constants from "Constants" /* 6629 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
let react = react_mod;
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
  const obj = { profileContainer: { position: "relative", width: "100%", maxWidth: num }, profileContentContainer: obj2, profileInnerContent: { flexGrow: 1 }, aboutMeCard: { marginTop: tmp4(576).space.PX_12 }, profileEffect: { zIndex: 1 } };
  obj2 = { overflow: "hidden", minHeight: 350, borderWidth: 1, borderColor: BACKGROUND_SURFACE_HIGH, borderRadius: tmp4(576).radii.lg };
  const colors = nativeDefault.colors;
  if (arg1) {
    BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  ({ marginTop: tmp4(576).space.PX_12 });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default function UserProfilePreview(hideFrame) {
  let accessibilityLabel;
  let additionalBadges;
  let avatarBackground;
  let avatarDecorationOverride;
  let closure_1;
  let closure_4;
  let compact;
  let containerBackground;
  let displayName;
  let displayNameStylesOverride;
  let gradientFallbackBackground;
  let guildId;
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
  let tmp38;
  let tmp39;
  let user;
  ({ user, displayName, guildId } = hideFrame);
  ({ avatarDecorationOverride, profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, compact } = hideFrame);
  ({ accessibilityLabel, style } = hideFrame);
  if (compact === undefined) {
    compact = false;
  }
  let flag = hideFrame.hideFrame;
  if (flag === undefined) {
    flag = false;
  }
  ({ additionalBadges, maxWidth } = hideFrame);
  if (additionalBadges === undefined) {
    additionalBadges = [];
  }
  importDefault = undefined;
  set = undefined;
  let first;
  react = undefined;
  let tmp = guildId;
  let obj = guildId(set[8]);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => UserProfileSettingsStore.getPendingChanges(guildId));
  ({ pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingGlobalName, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp5 = require("useDisplayProfile")(user.id, guildId);
  ({ theme, primaryColor, secondaryColor } = require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors }));
  require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors });
  const tmp8 = closure_12(compact, null != primaryColor, maxWidth);
  const tmp9 = require("UserProfileSharedStyles")();
  const obj2 = guildId(set[12]);
  const customStatusActivity = obj2.useCustomStatusActivity();
  let tmp30Result5 = null != customStatusActivity && !compact;
  const tmpResult = tmp(set[13]);
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
  const obj3 = { pendingValue: pendingProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId };
  profileEffect = undefined;
  const getProfilePreviewValue = tmp(tmp2[14]).getProfilePreviewValue;
  tmp(set[14]);
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
  if (!flag) {
    const obj4 = { pendingValue: pendingProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
    profileFrame = undefined;
    const getProfilePreviewValue2 = tmp(tmp2[14]).getProfilePreviewValue;
    tmp(set[14]);
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
  const tmp4Result = require("useMaybeFetchProfileFrame");
  if (profilePreviewValue2 != null) {
    skuId1 = profilePreviewValue2.skuId;
  }
  const tmp4ResultResult = tmp4Result(skuId1);
  importDefault = tmp4ResultResult;
  const obj5 = { userId: user.id, image: pendingAvatar };
  const tmpResult6 = tmp(set[16]);
  const pendingAvatarSrc = tmpResult6.getPendingAvatarSrc(obj5);
  const arr2 = require("useBadges")(tmp5, pendingLegacyUsernameDisabled);
  set = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp26 = first(react.useState({ width: 0, height: 0 }), 2);
  first = tmp26[0];
  react = tmp26[1];
  const items2 = [tmp4ResultResult, first.width];
  const callback = react.useCallback((nativeEvent) => {
    size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
    closure_4(size);
  }, []);
  const memo = react.useMemo(() => {
    let num2;
    let overflowBottom;
    let overflowHorizontal;
    let overflowTop;
    const tmp = closure_1;
    if (null != closure_1) {
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
  const obj6 = { theme, primaryColor, secondaryColor, children: closure_9(View, obj7) };
  obj7 = { style: items3, pointerEvents: "none", accessibilityLabel, accessibilityRole: "image", accessible: true, children: closure_10(View, obj8) };
  items3 = [tmp8.profileContainer, memo, style];
  let tmp30Result = null != tmp4ResultResult;
  obj8 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: { flexShrink: 1 }, children: items4 };
  const ThemeContextProvider = tmp(tmp2[19]).ThemeContextProvider;
  if (tmp30Result) {
    const obj9 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: tmp(set[21]).ProfileFrameLayerOrder.BACK, containerWidth: null, containerHeight: null };
    ({ width: obj11.containerWidth, height: obj11.containerHeight } = first);
    const tmp4Result7 = require("ProfileFrame");
    tmp30Result = tmp30(tmp4Result7, obj9);
  }
  items4 = [tmp30Result, , ];
  const obj10 = { onLayout: callback, style: tmp8.profileContentContainer, children: items5 };
  const obj12 = { user, displayProfile: tmp5, bannerHeight: tmp(set[23]).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT, pendingBanner, pendingAvatarSrc, pendingAccentColor: tmp38, pendingThemeColors: tmp39, disableInteraction: true };
  tmp38 = undefined;
  const tmp4Result8 = require("UserProfileBanner");
  if (null != pendingAccentColor) {
    tmp38 = pendingAccentColor;
  }
  tmp39 = undefined;
  if (null != pendingThemeColors) {
    tmp39 = pendingThemeColors;
  }
  items5 = [closure_9(tmp4Result8, obj12), , ];
  const obj13 = { style: tmp8.profileInnerContent, children: items6 };
  items6 = [closure_9(tmp4(tmp2[24]), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items7, children: items8 };
  items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp41 = !tmp30Result5;
  const tmp4Result9 = require("UserProfileGradientContainer");
  if (!tmp30Result5) {
    tmp41 = { paddingTop };
    const obj15 = { paddingTop };
  }
  items7[2] = tmp41;
  if (tmp30Result5) {
    const obj16 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null };
    ({ customStatusBubble: obj17.style, emojiOnlyCustomStatusBubble: obj17.emojiOnlyStyle } = tmp9);
    tmp30Result5 = tmp30(tmp4(tmp2[26]), obj16);
  }
  items8 = [tmp30Result5, , ];
  const obj18 = { user, themeType: constants.PREVIEW, displayName, pronouns: pendingPronouns, badges: items1, badgeContainerBackground: containerBackground, showBadgeToastOnPress: false, pendingDisplayNameStyles, guildId };
  const tmp4Result10 = require("UserProfilePrimaryInfo");
  if (displayName == null) {
    displayName = pendingGlobalName;
  }
  if (pendingPronouns == null) {
    let pronouns;
    if (tmp5 != null) {
      pronouns = tmp5.pronouns;
    }
    pendingPronouns = pronouns;
  }
  items8[1] = closure_9(tmp4Result10, obj18);
  let tmp30Result6 = !compact;
  if (tmp30Result6) {
    const obj19 = { userId: user.id, displayProfile: tmp5, themeType: constants.PREVIEW, style: items9, bioLineClamp: 1 };
    items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj20 = { backgroundColor: containerBackground };
    items9[2] = obj20;
    tmp30Result6 = tmp30(tmp4(tmp2[28]), obj19);
  }
  items8[2] = tmp30Result6;
  items6[1] = closure_10(tmp4Result9, obj14);
  items5[1] = closure_10(View, obj13);
  let tmp30Result7 = null != profilePreviewValue;
  if (tmp30Result7) {
    let skuId;
    const obj21 = { skuId: profilePreviewValue.skuId, style: tmp8.profileEffect };
    const tmp4Result11 = require("ProfileEffect");
    if (null != profileEffectRestartKey) {
      const _HermesInternal = HermesInternal;
      skuId = "" + profilePreviewValue.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = profilePreviewValue.skuId;
    }
    tmp30Result7 = tmp30(tmp4Result11, obj21, skuId);
  }
  items5[2] = tmp30Result7;
  items4[1] = closure_10(View, obj10);
  let tmp30Result8 = null != tmp4ResultResult;
  if (tmp30Result8) {
    const obj40 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: tmp(set[21]).ProfileFrameLayerOrder.FRONT, containerWidth: null, containerHeight: null };
    ({ width: obj22.containerWidth, height: obj22.containerHeight } = first);
    const tmp4Result12 = require("ProfileFrame");
    tmp30Result8 = tmp30(tmp4Result12, obj40);
  }
  items4[2] = tmp30Result8;
  return closure_9(ThemeContextProvider, obj6);
};
