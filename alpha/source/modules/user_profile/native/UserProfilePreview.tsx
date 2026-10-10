// Module ID: 10511
// Function ID: 10512
// Name: UserProfilePreview
// Dependencies: [32, 19, 17, 8284, 6904, 21, 5092, 587, 558, 576, 504, 8310, 8353, 8367, 10512, 8364, 8290, 8327, 8293, 8289, 8368, 8350, 8346, 8333, 8372, 9006, 8381, 10513, 10612, 9004, 4827, 10530, 10531, 2]

// Module 10511 (UserProfilePreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8350 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
import Constants from "Constants" /* 6904 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
  const obj = { profileContainer: { position: "relative", width: "100%", maxWidth: num }, profileContentContainer: obj2, profileInnerContent: { flexGrow: 1 }, aboutMeCard: { marginTop: tmp4(587).space.PX_12 }, profileEffect: { zIndex: 1 } };
  obj2 = { overflow: "hidden", minHeight: 350, borderWidth: 1, borderColor: BACKGROUND_SURFACE_HIGH, borderRadius: tmp4(587).radii.lg };
  const colors = nativeDefault.colors;
  if (arg1) {
    BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  ({ marginTop: tmp4(587).space.PX_12 });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePreview(arg0) {
  let accessibilityLabel;
  let additionalBadges;
  let avatarBackground;
  let avatarDecorationOverride;
  let compact;
  let containerBackground;
  let displayName;
  let displayNameStylesOverride;
  let first;
  let gradientFallbackBackground;
  let guildId;
  let hideFrame;
  let isPremiumTryItOut;
  let maxWidth;
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
  let profileEffectOverride;
  let profileEffectRestartKey;
  let profileFrameOverride;
  let secondaryColor;
  let style;
  let theme;
  let tmp61;
  let user;
  const tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(90);
  ({ user, displayName, guildId } = arg0);
  ({ avatarDecorationOverride, profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, style, isPremiumTryItOut, compact, hideFrame, additionalBadges } = arg0);
  let tmp4 = undefined !== isPremiumTryItOut;
  ({ accessibilityLabel, maxWidth } = arg0);
  if (tmp4) {
    tmp4 = isPremiumTryItOut;
  }
  isPremiumTryItOut = tmp4;
  const tmp5 = undefined !== compact && compact;
  if (undefined === additionalBadges) {
    additionalBadges = [];
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp9;
    if (cResult[2] === tmp4) {
      tmp9 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp9);
    ({ pendingAvatar, pendingBanner, pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
    ({ pendingGlobalName, pendingLegacyUsernameDisabled, pendingPrimaryGuildId } = stateFromStoresObject);
    const tmp12 = isPremiumTryItOut(8310)(user.id, guildId);
    if (cResult[4] === tmp12) {
      if (cResult[5] === tmp4) {
        if (cResult[6] === pendingThemeColors) {
          let tmp13;
          if (cResult[7] === user) {
            tmp13 = cResult[8];
          }
          ({ theme, primaryColor, secondaryColor } = isPremiumTryItOut(8353)(tmp13));
          isPremiumTryItOut(8353)(tmp13);
          const tmp16 = null != primaryColor;
          const tmp18 = closure_12(tmp5, tmp16, maxWidth);
          isPremiumTryItOut(8367)();
          const tmpResult6 = tmp(10512);
          const customStatusActivity = tmpResult6.useCustomStatusActivity();
          if (cResult[9] === primaryColor) {
            if (cResult[10] === secondaryColor) {
              let tmp22;
              if (cResult[11] === theme) {
                tmp22 = cResult[12];
              }
              const tmpResult7 = tmp(8364);
              const userProfileColors = tmpResult7.useUserProfileColors(tmp22);
              ({ avatarBackground, containerBackground, gradientFallbackBackground } = userProfileColors);
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
              let profileEffect;
              if (tmp12 != null) {
                profileEffect = tmp12.profileEffect;
              }
              let profileEffect1;
              if (tmp12 != null) {
                const _guildMemberProfile = tmp12._guildMemberProfile;
                if (_guildMemberProfile != null) {
                  profileEffect1 = _guildMemberProfile.profileEffect;
                }
              }
              if (cResult[13] === pendingProfileEffect) {
                if (cResult[14] === guildId) {
                  if (cResult[15] === profileEffect1) {
                    let profileFrame;
                    const tmp28 = cResult[18];
                    if (tmp12 != null) {
                      const _guildMemberProfile2 = tmp12._guildMemberProfile;
                      if (_guildMemberProfile2 != null) {
                        profileFrame = _guildMemberProfile2.profileFrame;
                      }
                    }
                    if (tmp28 === profileFrame) {
                      let profileFrame1;
                      const tmp30 = cResult[19];
                      if (tmp12 != null) {
                        profileFrame1 = tmp12.profileFrame;
                      }
                      if (tmp30 === profileFrame1) {
                        if (cResult[20] === pendingProfileFrame) {
                          if (cResult[21] === guildId) {
                            let tmp32;
                            if (cResult[22] === (undefined !== hideFrame && hideFrame)) {
                              tmp32 = cResult[23];
                            }
                            let skuId;
                            const tmp11Result = isPremiumTryItOut(8327);
                            if (tmp32 != null) {
                              skuId = tmp32.skuId;
                            }
                            const tmp11ResultResult = tmp11Result(skuId);
                            if (cResult[24] === pendingAvatar) {
                              let tmp47;
                              let tmp51;
                              let tmp57;
                              const tmpResult8 = tmp(8289);
                              const userPrimaryGuild = tmpResult8.useUserPrimaryGuild(pendingPrimaryGuildId);
                              const arr2 = isPremiumTryItOut(8368)(tmp12, pendingLegacyUsernameDisabled);
                              if (cResult[27] !== arr2) {
                                let tmp48;
                                const _Symbol = Symbol;
                                if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                                  function we(id) {
                                    return id.id;
                                  }
                                  cResult[29] = we;
                                  tmp48 = we;
                                } else {
                                  tmp48 = cResult[29];
                                }
                                const _Set = Set;
                                const self = this;
                                const self2 = this;
                                set = new Set(arr2.map(tmp48));
                                cResult[27] = arr2;
                                cResult[28] = set;
                                tmp47 = set;
                              } else {
                                tmp47 = cResult[28];
                              }
                              dependencyMap = tmp47;
                              if (cResult[30] !== tmp47) {
                                function ke(id) {
                                  return !set.has(id.id);
                                }
                                cResult[30] = tmp47;
                                cResult[31] = ke;
                                tmp51 = ke;
                              } else {
                                tmp51 = cResult[31];
                              }
                              const items1 = [];
                              const arraySpreadResult = HermesBuiltin.arraySpread(items1, arr2, 0);
                              HermesBuiltin.arraySpread(items1, additionalBadges.filter(tmp51), arraySpreadResult);
                              const _Symbol2 = Symbol;
                              if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                                size = { width: 0, height: 0 };
                                cResult[32] = size;
                                tmp57 = size;
                              } else {
                                tmp57 = cResult[32];
                              }
                              const tmp60 = _slicedToArray(react.useState(tmp57), 2);
                              [tmp61, _slicedToArray] = tmp60;
                              const _Symbol3 = Symbol;
                              if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                class Le {
                                  constructor(nativeEvent) {
                                    size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                                    _slicedToArray(size);
                                  }
                                }
                                cResult[33] = Le;
                              } else {
                                class Le {
                                  constructor(nativeEvent) {
                                    size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                                    _slicedToArray(size);
                                  }
                                }
                              }
                              if (null != tmp11ResultResult) {
                                class Le {
                                  constructor(nativeEvent) {
                                    size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                                    _slicedToArray(size);
                                  }
                                }
                                cResult[34] = tmp61.width;
                                cResult[35] = tmp11ResultResult;
                                cResult[36] = isPremiumTryItOut(8350)(tmp11ResultResult, tmp61.width);
                                const tmp65 = isPremiumTryItOut(8350)(tmp11ResultResult, tmp61.width);
                              }
                              if (cResult[41] === undefined) {
                                class Le {
                                  constructor(nativeEvent) {
                                    size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                                    _slicedToArray(size);
                                  }
                                }
                              }
                              const items2 = [tmp18.profileContainer, undefined, style];
                              cResult[41] = undefined;
                              cResult[42] = style;
                              cResult[43] = tmp18.profileContainer;
                              cResult[44] = items2;
                            }
                            const obj2 = { userId: user.id, image: pendingAvatar };
                            const tmpResult9 = tmp(8293);
                            const pendingAvatarSrc = tmpResult9.getPendingAvatarSrc(obj2);
                            cResult[24] = pendingAvatar;
                            cResult[25] = user.id;
                            cResult[26] = pendingAvatarSrc;
                          }
                        }
                      }
                    }
                    let profilePreviewValue;
                    if (!(undefined !== hideFrame && hideFrame)) {
                      class Le {
                        constructor(nativeEvent) {
                          size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                          _slicedToArray(size);
                        }
                      }
                      let obj3 = { pendingValue: pendingProfileFrame, userValue: undefined, guildValue: undefined, guildId };
                      const getProfilePreviewValue = tmp34.getProfilePreviewValue;
                      if (tmp12 != null) {
                        class Le {
                          constructor(nativeEvent) {
                            size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                            _slicedToArray(size);
                          }
                        }
                      }
                      if (tmp12 != null) {
                        class Le {
                          constructor(nativeEvent) {
                            size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                            _slicedToArray(size);
                          }
                        }
                        if (tmp37 != null) {
                          class Le {
                            constructor(nativeEvent) {
                              size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                              _slicedToArray(size);
                            }
                          }
                        }
                      }
                      profilePreviewValue = getProfilePreviewValue(obj3);
                    }
                    if (tmp12 != null) {
                      class Le {
                        constructor(nativeEvent) {
                          size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                          _slicedToArray(size);
                        }
                      }
                      if (tmp39 != null) {
                        class Le {
                          constructor(nativeEvent) {
                            size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                            _slicedToArray(size);
                          }
                        }
                      }
                    }
                    cResult[18] = undefined;
                    if (tmp12 != null) {
                      class Le {
                        constructor(nativeEvent) {
                          size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
                          _slicedToArray(size);
                        }
                      }
                    }
                    cResult[19] = undefined;
                    cResult[20] = pendingProfileFrame;
                    cResult[21] = guildId;
                    cResult[22] = undefined !== hideFrame && hideFrame;
                    cResult[23] = profilePreviewValue;
                    tmp32 = profilePreviewValue;
                  }
                }
              }
              const obj4 = { pendingValue: pendingProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId };
              const tmpResult10 = tmp(8290);
              const profilePreviewValue1 = tmpResult10.getProfilePreviewValue(obj4);
              cResult[13] = pendingProfileEffect;
              cResult[14] = guildId;
              cResult[15] = profileEffect1;
              cResult[16] = profileEffect;
              cResult[17] = profilePreviewValue1;
            }
          }
          const obj5 = { theme, primaryColor, secondaryColor };
          cResult[9] = primaryColor;
          cResult[10] = secondaryColor;
          cResult[11] = theme;
          cResult[12] = obj5;
          tmp22 = obj5;
        }
      }
    }
    const obj6 = { user, displayProfile: tmp12, pendingThemeColors, isPreview: tmp4 };
    cResult[4] = tmp12;
    cResult[5] = tmp4;
    cResult[6] = pendingThemeColors;
    cResult[7] = user;
    cResult[8] = obj6;
    tmp13 = obj6;
  }
  const fn = function v() {
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
  };
  cResult[1] = guildId;
  cResult[2] = tmp4;
  cResult[3] = fn;
  tmp9 = fn;
}) : (function UserProfilePreview(compact) {
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
  const tmp5 = isPremiumTryItOut(8310)(user.id, guildId);
  ({ theme, primaryColor, secondaryColor } = isPremiumTryItOut(8353)({ user, displayProfile: tmp5, pendingThemeColors, isPreview: isPremiumTryItOut }));
  isPremiumTryItOut(8353)({ user, displayProfile: tmp5, pendingThemeColors, isPreview: isPremiumTryItOut });
  const tmp8 = closure_12(flag, null != primaryColor, maxWidth);
  const tmp9 = isPremiumTryItOut(8367)();
  const obj2 = guildId(10512);
  const customStatusActivity = obj2.useCustomStatusActivity();
  let tmp31Result5 = null != customStatusActivity && !flag;
  const tmpResult = tmp(8364);
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
  const getProfilePreviewValue = tmp(8290).getProfilePreviewValue;
  tmp(8290);
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
    const getProfilePreviewValue2 = tmp(8290).getProfilePreviewValue;
    tmp(8290);
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
  const tmp4Result = isPremiumTryItOut(8327);
  if (profilePreviewValue2 != null) {
    skuId1 = profilePreviewValue2.skuId;
  }
  const tmp4ResultResult = tmp4Result(skuId1);
  dependencyMap = tmp4ResultResult;
  const obj5 = { userId: user.id, image: pendingAvatar };
  const tmpResult7 = tmp(8293);
  const pendingAvatarSrc = tmpResult7.getPendingAvatarSrc(obj5);
  const tmpResult8 = tmp(8289);
  const userPrimaryGuild = tmpResult8.useUserPrimaryGuild(pendingPrimaryGuildId);
  const arr2 = isPremiumTryItOut(8368)(tmp5, pendingLegacyUsernameDisabled);
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
  const ThemeContextProvider = tmp(4827).ThemeContextProvider;
  if (tmp31Result) {
    const obj9 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: tmp(8333).ProfileFrameLayerOrder.BACK, containerWidth: null, containerHeight: null };
    ({ width: obj12.containerWidth, height: obj12.containerHeight } = first);
    const tmp4Result7 = isPremiumTryItOut(8346);
    tmp31Result = tmp31(tmp4Result7, obj9);
  }
  items4 = [tmp31Result, , ];
  const obj10 = { onLayout: callback, style: tmp8.profileContentContainer, children: items5 };
  const obj11 = { user, displayProfile: tmp5, bannerHeight: tmp(9006).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT, pendingBanner, pendingAvatarSrc, pendingAccentColor: tmp39, pendingThemeColors: tmp40, disableInteraction: true };
  tmp39 = undefined;
  const tmp4Result8 = isPremiumTryItOut(8372);
  if (null != pendingAccentColor) {
    tmp39 = pendingAccentColor;
  }
  tmp40 = undefined;
  if (null != pendingThemeColors) {
    tmp40 = pendingThemeColors;
  }
  items5 = [closure_9(tmp4Result8, obj11), , ];
  const obj13 = { style: tmp8.profileInnerContent, children: items6 };
  items6 = [closure_9(tmp4(8381), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items7, children: items8 };
  items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp42 = !tmp31Result5;
  const tmp4Result9 = isPremiumTryItOut(10530);
  if (!tmp31Result5) {
    tmp42 = { paddingTop };
    const obj15 = { paddingTop };
  }
  items7[2] = tmp42;
  if (tmp31Result5) {
    const obj16 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null };
    ({ customStatusBubble: obj18.style, emojiOnlyCustomStatusBubble: obj18.emojiOnlyStyle } = tmp9);
    tmp31Result5 = tmp31(tmp4(10513), obj16);
  }
  items8 = [tmp31Result5, , ];
  const obj17 = { user, themeType: constants.PREVIEW, displayName, pronouns: pendingPronouns, badges: items1, badgeContainerBackground: containerBackground, showBadgeToastOnPress: false, pendingDisplayNameStyles, primaryGuildOverride: userPrimaryGuild, guildId };
  const tmp4Result10 = isPremiumTryItOut(10531);
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
  items8[1] = closure_9(tmp4Result10, obj17);
  let tmp31Result6 = !flag;
  if (tmp31Result6) {
    const obj19 = { userId: user.id, displayProfile: tmp5, themeType: constants.PREVIEW, style: items9, bioLineClamp: 1 };
    items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj20 = { backgroundColor: containerBackground };
    items9[2] = obj20;
    tmp31Result6 = tmp31(tmp4(10612), obj19);
  }
  items8[2] = tmp31Result6;
  items6[1] = closure_10(tmp4Result9, obj14);
  items5[1] = closure_10(closure_5, obj13);
  let tmp31Result7 = null != profilePreviewValue;
  if (tmp31Result7) {
    let skuId;
    const obj21 = { skuId: profilePreviewValue.skuId, style: tmp8.profileEffect };
    const tmp4Result11 = isPremiumTryItOut(9004);
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
    const obj22 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: tmp(8333).ProfileFrameLayerOrder.FRONT, containerWidth: null, containerHeight: null };
    ({ width: obj23.containerWidth, height: obj23.containerHeight } = first);
    const tmp4Result12 = isPremiumTryItOut(8346);
    tmp31Result8 = tmp31(tmp4Result12, obj22);
  }
  items4[2] = tmp31Result8;
  return closure_9(ThemeContextProvider, obj6);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default tmp4;
