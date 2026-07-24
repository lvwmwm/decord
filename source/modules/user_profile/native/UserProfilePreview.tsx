// Module ID: 8279
// Function ID: 65256
// Name: filterLayer
// Dependencies: [57, 31, 27, 7930, 5510, 33, 4130, 689, 566, 7974, 8280, 8282, 8283, 8284, 7935, 8285, 7943, 8298, 8299, 3842, 8300, 8291, 8304, 8264, 8307, 11936, 11925, 8557, 11914, 8262, 2]
// Exports: default

// Module 8279 (filterLayer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "getStyleConfig";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7, UserProfileThemeTypes: closure_8 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2) => {
  let obj = {};
  obj = { position: "relative", width: "100%" };
  let num = 263;
  if (null != arg2) {
    num = arg2;
  }
  obj.maxWidth = num;
  obj.profileContainer = obj;
  obj = { overflow: "hidden", minHeight: 350, borderWidth: 1 };
  const colors = importDefault(689).colors;
  obj.borderColor = arg1 ? colors.BORDER_MUTED : colors.BACKGROUND_SURFACE_HIGH;
  obj.borderRadius = importDefault(689).radii.lg;
  obj.profileContentContainer = obj;
  obj.profileInnerContent = { flexGrow: 1 };
  obj.aboutMeCard = { marginTop: importDefault(689).space.PX_12 };
  obj.profileEffect = { zIndex: 1 };
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

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
  let set;
  let first;
  let React;
  let obj = guildId(set[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => outer1_6.getPendingChanges(guildId));
  ({ pendingAccentColor, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingGlobalName, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp2 = importDefault(set[9])(user.id, guildId);
  ({ theme, primaryColor, secondaryColor } = importDefault(set[10])({ user, displayProfile: tmp2, pendingThemeColors }));
  const tmp5 = callback2(compact, null != primaryColor, maxWidth);
  const tmp6 = importDefault(set[11])();
  let obj1 = guildId(set[12]);
  const customStatusActivity = obj1.useCustomStatusActivity();
  let tmp8 = null != customStatusActivity && !compact;
  let obj2 = guildId(set[13]);
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
  let obj3 = guildId(set[14]);
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
    let obj5 = guildId(set[14]);
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
  const tmp3 = importDefault(set[10])({ user, displayProfile: tmp2, pendingThemeColors });
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  const tmp17Result = importDefault(set[15])(skuId, "UserProfilePreview");
  importDefault = tmp17Result;
  let obj7 = guildId(set[16]);
  obj1 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj7.getPendingAvatarSrc(obj1);
  const arr2 = importDefault(set[17])(tmp2, pendingLegacyUsernameDisabled);
  let str2 = globalThis;
  set = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp22 = first(React.useState({ width: 0, height: 0 }), 2);
  first = tmp22[0];
  React = tmp22[1];
  const items2 = [tmp17Result, first.width];
  const callback = React.useCallback((nativeEvent) => {
    callback({ width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) });
  }, []);
  const memo = React.useMemo(() => {
    let overflowBottom;
    let overflowHorizontal;
    let overflowTop;
    if (null != _undefined) {
      const obj = {};
      const layers = _undefined.layers;
      ({ overflowTop, overflowBottom, overflowHorizontal } = _undefined(set[18])(_undefined, first.width));
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
      const layers2 = _undefined.layers;
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
  obj3 = { style: null, pointerEvents: "none", accessibilityLabel: null, accessibilityRole: "image", accessible: true };
  const items3 = [tmp5.profileContainer, memo, style];
  obj3.style = items3;
  obj3.accessibilityLabel = accessibilityLabel;
  const obj4 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: { flexShrink: 1 } };
  let tmp29 = null != tmp17Result;
  if (tmp29) {
    obj5 = { frame: tmp17Result, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(set[21]).ProfileFrameLayerOrder.BACK };
    ({ width: obj13.containerWidth, height: obj13.containerHeight } = first);
    tmp29 = callback(importDefault(set[20]), obj5);
    const tmp33 = importDefault(set[20]);
  }
  const items4 = [tmp29, , ];
  const obj6 = { onLayout: callback, style: tmp5.profileContentContainer };
  obj7 = { user, displayProfile: tmp2 };
  const tmp17 = importDefault(set[15]);
  const tmp28 = closure_10;
  const tmp37 = closure_10;
  const tmp38 = View;
  const tmp39 = callback;
  obj7.bannerHeight = guildId(set[23]).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
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
  const items5 = [tmp39(importDefault(set[22]), obj7), , ];
  const obj8 = { style: tmp5.profileInnerContent };
  const items6 = [callback(importDefault(set[24]), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor };
  const items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp6);
  let tmp46 = !tmp8;
  const tmp40 = importDefault(set[22]);
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
    tmp8 = callback(importDefault(set[26]), obj11);
  }
  const items8 = [tmp8, , ];
  const obj12 = { user, themeType: constants.PREVIEW };
  const tmp45 = importDefault(set[25]);
  const tmp52 = callback;
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
  items8[1] = tmp52(importDefault(set[27]), obj12);
  let tmp55 = !compact;
  if (tmp55) {
    const obj13 = { userId: user.id, displayProfile: tmp2, themeType: constants.PREVIEW };
    const items9 = [tmp6.card, tmp5.aboutMeCard, ];
    const obj14 = { backgroundColor: containerBackground };
    items9[2] = obj14;
    obj13.style = items9;
    obj13.bioLineClamp = 1;
    tmp55 = callback(importDefault(set[28]), obj13);
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
      const obj15 = { frame: tmp17Result, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(set[21]).ProfileFrameLayerOrder.FRONT };
      ({ width: obj24.containerWidth, height: obj24.containerHeight } = first);
      tmp66 = callback(importDefault(set[20]), obj15);
      const tmp70 = importDefault(set[20]);
    }
    items4[2] = tmp66;
    obj4.children = items4;
    obj3.children = tmp28(tmp27, obj4);
    obj2.children = tmp26(tmp27, obj3);
    return tmp26(guildId(set[19]).ThemeContextProvider, obj2);
  } else {
    const obj16 = { skuId: str.skuId, style: tmp5.profileEffect };
    if (null != profileEffectRestartKey) {
      str = "";
      str2 = "-";
      skuId = "" + str.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = ``.skuId;
    }
    callback(importDefault(set[29]), obj16, skuId);
    const tmp61 = callback;
    const tmp64 = importDefault(set[29]);
  }
};
