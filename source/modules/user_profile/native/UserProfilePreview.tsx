// Module ID: 8227
// Function ID: 64966
// Name: filterLayer
// Dependencies: []
// Exports: default

// Module 8227 (filterLayer)
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7, UserProfileThemeTypes: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles((arg0, arg1, arg2) => {
  let obj = {};
  obj = { et: null, eu: "900d6a1aeefc6f4c571ad9d81203dc5c" };
  let num = 263;
  if (null != arg2) {
    num = arg2;
  }
  obj.maxWidth = num;
  obj.profileContainer = obj;
  obj = { overflow: "hidden", minHeight: 350, borderWidth: 1 };
  const colors = importDefault(dependencyMap[7]).colors;
  obj.borderColor = arg1 ? colors.BORDER_MUTED : colors.BACKGROUND_SURFACE_HIGH;
  obj.borderRadius = importDefault(dependencyMap[7]).radii.lg;
  obj.profileContentContainer = obj;
  obj.profileInnerContent = { flexGrow: 1 };
  obj.aboutMeCard = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
  obj.profileEffect = { zIndex: 1 };
  return obj;
});
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default function UserProfilePreview(hideFrame) {
  let accessibilityLabel;
  let additionalBadges;
  let avatarBackground;
  let compact;
  let containerBackground;
  let displayName;
  let displayNameStylesOverride;
  let gradientFallbackBackground;
  let guildId;
  let maxWidth;
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
  let profileEffectOverride;
  let profileEffectRestartKey;
  let profileFrameOverride;
  let secondaryColor;
  let style;
  let theme;
  let user;
  ({ user, displayName, guildId } = hideFrame);
  const arg1 = guildId;
  ({ profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, compact } = hideFrame);
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
  let importDefault;
  let dependencyMap;
  let callback;
  let React;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => pendingChanges.getPendingChanges(guildId));
  ({ pendingAccentColor, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingGlobalName, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp2 = importDefault(dependencyMap[9])(user.id, guildId);
  ({ theme, primaryColor, secondaryColor } = importDefault(dependencyMap[10])({ user, displayProfile: tmp2, pendingThemeColors }));
  const tmp5 = callback3(compact, null != primaryColor, maxWidth);
  const tmp6 = importDefault(dependencyMap[11])();
  let obj1 = arg1(dependencyMap[12]);
  const customStatusActivity = obj1.useCustomStatusActivity();
  let tmp8 = null != customStatusActivity && !compact;
  let obj2 = arg1(dependencyMap[13]);
  const userProfileColors = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBackground, gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (undefined !== profileEffectOverride) {
    pendingProfileEffect = profileEffectOverride;
  }
  if (undefined !== profileFrameOverride) {
    pendingProfileFrame = profileFrameOverride;
  }
  if (undefined !== displayNameStylesOverride) {
    pendingDisplayNameStyles = displayNameStylesOverride;
  }
  let obj3 = arg1(dependencyMap[14]);
  obj = { pendingValue: pendingProfileEffect };
  let profileEffect;
  if (null != tmp2) {
    profileEffect = tmp2.profileEffect;
  }
  obj.userValue = profileEffect;
  let profileEffect1;
  if (null != tmp2) {
    const _guildMemberProfile = tmp2._guildMemberProfile;
    if (null != _guildMemberProfile) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj.guildValue = profileEffect1;
  obj.guildId = guildId;
  let str = obj3.getProfilePreviewValue(obj);
  let profilePreviewValue;
  if (!flag) {
    let obj5 = arg1(dependencyMap[14]);
    obj = { pendingValue: pendingProfileFrame };
    let profileFrame;
    if (null != tmp2) {
      profileFrame = tmp2.profileFrame;
    }
    obj.userValue = profileFrame;
    let profileFrame1;
    if (null != tmp2) {
      const _guildMemberProfile2 = tmp2._guildMemberProfile;
      if (null != _guildMemberProfile2) {
        profileFrame1 = _guildMemberProfile2.profileFrame;
      }
    }
    obj.guildValue = profileFrame1;
    obj.guildId = guildId;
    profilePreviewValue = obj5.getProfilePreviewValue(obj);
  }
  let skuId;
  const tmp3 = importDefault(dependencyMap[10])({ user, displayProfile: tmp2, pendingThemeColors });
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  const tmp17Result = importDefault(dependencyMap[15])(skuId, "UserProfilePreview");
  importDefault = tmp17Result;
  let obj7 = arg1(dependencyMap[16]);
  obj1 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj7.getPendingAvatarSrc(obj1);
  const arr2 = importDefault(dependencyMap[17])(tmp2, pendingLegacyUsernameDisabled);
  let str2 = globalThis;
  const tmp17 = importDefault(dependencyMap[15]);
  dependencyMap = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp22 = callback(React.useState({ bhk: -536870861, bic: -299892737 }), 2);
  const first = tmp22[0];
  callback = first;
  React = tmp22[1];
  const items2 = [tmp17Result, first.width];
  callback = React.useCallback((nativeEvent) => {
    callback({ width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) });
  }, []);
  const memo = React.useMemo(() => {
    let overflowBottom;
    let overflowHorizontal;
    let overflowTop;
    if (null != tmp17Result) {
      const obj = {};
      const layers = tmp17Result.layers;
      ({ overflowTop, overflowBottom, overflowHorizontal } = tmp17Result(set[18])(tmp17Result, first.width));
      let num2 = 0;
      if (layers.some((type) => {
        let tmp = "staple" === type.type;
        if (tmp) {
          tmp = "top" === type.anchor;
        }
        return tmp;
      })) {
        num2 = overflowTop;
      }
      obj.marginTop = num2;
      const layers2 = tmp17Result.layers;
      let num3 = 0;
      if (layers2.some((type) => {
        let tmp = "staple" === type.type;
        if (tmp) {
          tmp = "bottom" === type.anchor;
        }
        return tmp;
      })) {
        num3 = overflowBottom;
      }
      obj.marginBottom = num3;
      obj.marginHorizontal = overflowHorizontal;
      return obj;
    }
  }, items2);
  obj2 = { theme, primaryColor, secondaryColor };
  obj3 = { style: items3, accessibilityLabel };
  const items3 = [tmp5.profileContainer, memo, style];
  const obj4 = { style: { flexShrink: 1 } };
  let tmp29 = null != tmp17Result;
  if (tmp29) {
    obj5 = { frame: tmp17Result, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: arg1(dependencyMap[21]).ProfileFrameLayerOrder.BACK };
    ({ width: obj13.containerWidth, height: obj13.containerHeight } = first);
    tmp29 = callback2(importDefault(dependencyMap[20]), obj5);
    const tmp33 = importDefault(dependencyMap[20]);
  }
  const items4 = [tmp29, , ];
  const obj6 = { onLayout: callback, style: tmp5.profileContentContainer };
  obj7 = { user, displayProfile: tmp2 };
  const set = new Set(arr2.map((id) => id.id));
  const tmp28 = closure_10;
  const tmp37 = closure_10;
  const tmp38 = View;
  const tmp39 = callback2;
  obj7.bannerHeight = arg1(dependencyMap[23]).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
  obj7.pendingBanner = pendingBanner;
  obj7.pendingAvatarSrc = pendingAvatarSrc;
  let tmp41;
  if (null != pendingAccentColor) {
    tmp41 = pendingAccentColor;
  }
  obj7.pendingAccentColor = tmp41;
  let tmp42;
  if (null != pendingThemeColors) {
    tmp42 = pendingThemeColors;
  }
  obj7.pendingThemeColors = tmp42;
  obj7.disableInteraction = true;
  const items5 = [tmp39(importDefault(dependencyMap[22]), obj7), , ];
  const obj8 = { style: tmp5.profileInnerContent };
  const items6 = [callback2(importDefault(dependencyMap[24]), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor };
  const items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp6);
  let tmp46 = !tmp8;
  const tmp40 = importDefault(dependencyMap[22]);
  const tmp44 = View;
  if (!tmp8) {
    const obj10 = { paddingTop: closure_7 };
    tmp46 = obj10;
  }
  items7[2] = tmp46;
  obj9.containerStyle = items7;
  if (tmp8) {
    const obj11 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: tmp4 };
    ({ customStatusBubble: obj19.style, emojiOnlyCustomStatusBubble: obj19.emojiOnlyStyle } = tmp6);
    tmp8 = callback2(importDefault(dependencyMap[26]), obj11);
  }
  const items8 = [tmp8, , ];
  const obj12 = { user, themeType: constants.PREVIEW };
  const tmp45 = importDefault(dependencyMap[25]);
  const tmp52 = callback2;
  if (null != displayName) {
    pendingGlobalName = displayName;
  }
  obj12.displayName = pendingGlobalName;
  if (null == pendingPronouns) {
    let pronouns;
    if (null != tmp2) {
      pronouns = tmp2.pronouns;
    }
    pendingPronouns = pronouns;
  }
  obj12.pronouns = pendingPronouns;
  obj12.badges = items1;
  obj12.badgeContainerBackground = containerBackground;
  obj12.showBadgeToastOnPress = false;
  obj12.pendingDisplayNameStyles = pendingDisplayNameStyles;
  obj12.guildId = guildId;
  items8[1] = tmp52(importDefault(dependencyMap[27]), obj12);
  let tmp55 = !compact;
  if (tmp55) {
    const obj13 = { userId: user.id, displayProfile: tmp2, themeType: constants.PREVIEW };
    const items9 = [tmp6.card, tmp5.aboutMeCard, ];
    const obj14 = { backgroundColor: containerBackground };
    items9[2] = obj14;
    obj13.style = items9;
    obj13.bioLineClamp = 1;
    tmp55 = callback2(importDefault(dependencyMap[28]), obj13);
  }
  items8[2] = tmp55;
  obj9.children = items8;
  items6[1] = closure_10(tmp45, obj9);
  obj8.children = items6;
  items5[1] = closure_10(tmp44, obj8);
  if (null == str) {
    items5[2] = tmp60;
    obj6.children = items5;
    items4[1] = tmp37(tmp38, obj6);
    let tmp66 = null != tmp17Result;
    if (tmp66) {
      const obj15 = { frame: tmp17Result, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: arg1(dependencyMap[21]).ProfileFrameLayerOrder.FRONT };
      ({ width: obj24.containerWidth, height: obj24.containerHeight } = first);
      tmp66 = callback2(importDefault(dependencyMap[20]), obj15);
      const tmp70 = importDefault(dependencyMap[20]);
    }
    items4[2] = tmp66;
    obj4.children = items4;
    obj3.children = tmp28(tmp27, obj4);
    obj2.children = tmp26(tmp27, obj3);
    return tmp26(arg1(dependencyMap[19]).ThemeContextProvider, obj2);
  } else {
    const obj16 = { skuId: str.skuId, style: tmp5.profileEffect };
    if (null != profileEffectRestartKey) {
      str = "";
      str2 = "-";
      skuId = "" + str.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = ``.skuId;
    }
    callback2(importDefault(dependencyMap[29]), obj16, skuId);
    const tmp61 = callback2;
    const tmp64 = importDefault(dependencyMap[29]);
  }
};
