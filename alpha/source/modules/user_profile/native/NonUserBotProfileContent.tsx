// Module ID: 8342
// Function ID: 8343
// Name: NonUserBotProfileContent
// Dependencies: [19, 17, 6891, 6830, 21, 558, 576, 8343, 8290, 5405, 4922, 8344, 8332, 8345, 1630, 8329, 8340, 6872, 4765, 8346, 8357, 1126, 10507, 11223, 4810, 2]

// Module 8342 (NonUserBotProfileContent)
import react_native from "react-native" /* 17 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5405 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6830 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import useProfileThemeDefault from "useProfileTheme" /* 8329 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8332 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8343 */;
import useBadgesDefault from "useBadges" /* 8344 */;
import useUserProfileOverscrollStylesDefault from "useUserProfileOverscrollStyles" /* 8345 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10507 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11223 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6891 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let View = react_native.View;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty } = Constants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function NonUserBotProfileContent(arg0) {
  let avatarBackground;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let channel;
  let containerBackground;
  let contentAnimatedStyle;
  let displayProfile;
  let items;
  let items1;
  let items2;
  let primaryColor;
  let scrollPosition;
  let secondaryColor;
  let showBlur;
  let theme;
  let trackUserProfileAction;
  let user;
  let userTag;
  let obj = trackUserProfileAction(576);
  const cResult = obj.c(70);
  ({ user, channel, displayProfile, scrollPosition } = arg0);
  const tmp5 = userTag(8343)();
  let obj2 = trackUserProfileAction(8290);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let guild_id;
  const useName = userTag(5405).useName;
  userTag(5405);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guild_id, id, user);
  const tmp4Result = userTag(4922);
  userTag = tmp4Result.useUserTag(user);
  const tmp11 = userTag(8344)(displayProfile);
  const tmp12 = userTag(8332)(ACTION_SHEET_MAX_WIDTH);
  if (cResult[0] === tmp12) {
    let tmp13;
    if (cResult[1] === scrollPosition) {
      tmp13 = cResult[2];
    }
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = userTag(8345)(tmp13));
    userTag(8345)(tmp13);
    if (cResult[3] === displayProfile) {
      let tmp16;
      if (cResult[4] === user) {
        tmp16 = cResult[5];
      }
      ({ theme, primaryColor, secondaryColor } = userTag(8329)(tmp16));
      userTag(8329)(tmp16);
      if (cResult[6] === primaryColor) {
        if (cResult[7] === secondaryColor) {
          let tmp18;
          if (cResult[8] === theme) {
            tmp18 = cResult[9];
          }
          const tmpResult = trackUserProfileAction(8340);
          const userProfileColors = tmpResult.useUserProfileColors(tmp18);
          ({ avatarBackground, containerBackground } = userProfileColors);
          if (null == user) {
            return null;
          } else {
            if (cResult[10] === trackUserProfileAction) {
              let tmp20;
              let tmp21;
              if (cResult[11] === userTag) {
                tmp20 = cResult[12];
              }
              if (cResult[13] !== trackUserProfileAction) {
                function handlePressPronouns() {
                  trackUserProfileAction({ action: "PRESS_PRONOUNS" });
                  const obj = ToastUtils;
                  obj.presentUserPronouns();
                }
                cResult[13] = trackUserProfileAction;
                cResult[14] = handlePressPronouns;
                tmp21 = handlePressPronouns;
              } else {
                tmp21 = cResult[14];
              }
              if (cResult[15] === bannerAnimatedStyle) {
                if (cResult[16] === tmp12) {
                  if (cResult[17] === bannerImageAnimatedStyle) {
                    if (cResult[18] === blurAnimatedProps) {
                      if (cResult[19] === displayProfile) {
                        if (cResult[20] === showBlur) {
                          let tmp22;
                          if (cResult[21] === user) {
                            tmp22 = cResult[22];
                          }
                          let guildId;
                          if (displayProfile != null) {
                            guildId = displayProfile.guildId;
                          }
                          if (cResult[23] === avatarBackground) {
                            if (cResult[24] === guildId) {
                              let tmp26;
                              let tmp31;
                              if (cResult[25] === user) {
                                tmp26 = cResult[26];
                              }
                              const sum = tmp15 + closure_4;
                              if (cResult[27] !== sum) {
                                const obj3 = { paddingTop, paddingBottom: sum };
                                cResult[27] = sum;
                                cResult[28] = obj3;
                                tmp31 = obj3;
                              } else {
                                tmp31 = cResult[28];
                              }
                              if (cResult[29] === tmp5.profileContent) {
                                if (cResult[30] === tmp5.profileContentWrapper) {
                                  let tmp33;
                                  let tmp37;
                                  if (cResult[31] === tmp31) {
                                    tmp33 = cResult[32];
                                  }
                                  let guild_id1;
                                  const primaryInfo = tmp5.primaryInfo;
                                  if (channel != null) {
                                    guild_id1 = channel.guild_id;
                                  }
                                  let pronouns;
                                  if (displayProfile != null) {
                                    pronouns = displayProfile.pronouns;
                                  }
                                  const _Symbol = Symbol;
                                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl = tmp(1126).intl;
                                    const stringResult = intl.string(trackUserProfileAction(1126).t.y5MwJy);
                                    cResult[33] = stringResult;
                                    tmp37 = stringResult;
                                  } else {
                                    tmp37 = cResult[33];
                                  }
                                  if (cResult[34] === tmp11) {
                                    if (cResult[35] === containerBackground) {
                                      if (cResult[36] === name) {
                                        if (cResult[37] === tmp20) {
                                          if (cResult[38] === tmp21) {
                                            if (cResult[39] === guild_id1) {
                                              if (cResult[40] === pronouns) {
                                                let tmp39;
                                                if (cResult[41] === user) {
                                                  tmp39 = cResult[42];
                                                }
                                                if (cResult[43] === tmp5.primaryInfo) {
                                                  let tmp42;
                                                  let tmp46;
                                                  if (cResult[44] === tmp39) {
                                                    tmp42 = cResult[45];
                                                  }
                                                  if (cResult[46] !== containerBackground) {
                                                    const obj4 = { backgroundColor: containerBackground };
                                                    cResult[46] = containerBackground;
                                                    cResult[47] = obj4;
                                                    tmp46 = obj4;
                                                  } else {
                                                    tmp46 = cResult[47];
                                                  }
                                                  if (cResult[48] === tmp5.card) {
                                                    let tmp47;
                                                    if (cResult[49] === tmp46) {
                                                      tmp47 = cResult[50];
                                                    }
                                                    if (cResult[51] === channel) {
                                                      if (cResult[52] === displayProfile) {
                                                        if (cResult[53] === tmp47) {
                                                          let tmp48;
                                                          if (cResult[54] === user.id) {
                                                            tmp48 = cResult[55];
                                                          }
                                                          if (cResult[56] === tmp5.cards) {
                                                            let tmp51;
                                                            if (cResult[57] === tmp48) {
                                                              tmp51 = cResult[58];
                                                            }
                                                            if (cResult[59] === tmp33) {
                                                              if (cResult[60] === tmp42) {
                                                                let tmp55;
                                                                if (cResult[61] === tmp51) {
                                                                  tmp55 = cResult[62];
                                                                }
                                                                if (cResult[63] === contentAnimatedStyle) {
                                                                  if (cResult[64] === tmp55) {
                                                                    let tmp59;
                                                                    if (cResult[65] === tmp26) {
                                                                      tmp59 = cResult[66];
                                                                    }
                                                                    if (cResult[67] === tmp59) {
                                                                      let tmp62;
                                                                      if (cResult[68] === tmp22) {
                                                                        tmp62 = cResult[69];
                                                                      }
                                                                      return tmp62;
                                                                    }
                                                                    const obj5 = { children: items };
                                                                    items = [tmp22, tmp59];
                                                                    const tmp65 = closure_8(closure_9, obj5);
                                                                    cResult[67] = tmp59;
                                                                    cResult[68] = tmp22;
                                                                    cResult[69] = tmp65;
                                                                    tmp62 = tmp65;
                                                                  }
                                                                }
                                                                const obj6 = { style: contentAnimatedStyle, children: items1 };
                                                                items1 = [tmp26, tmp55];
                                                                const tmp61 = closure_8(userTag(4810).View, obj6);
                                                                cResult[63] = contentAnimatedStyle;
                                                                cResult[64] = tmp55;
                                                                cResult[65] = tmp26;
                                                                cResult[66] = tmp61;
                                                                tmp59 = tmp61;
                                                              }
                                                            }
                                                            const obj7 = { style: tmp33, children: items2 };
                                                            items2 = [tmp42, tmp51];
                                                            const tmp58 = closure_8(View, obj7);
                                                            cResult[59] = tmp33;
                                                            cResult[60] = tmp42;
                                                            cResult[61] = tmp51;
                                                            cResult[62] = tmp58;
                                                            tmp55 = tmp58;
                                                          }
                                                          const obj8 = { style: tmp5.cards, children: tmp48 };
                                                          const tmp54 = closure_7(View, obj8);
                                                          cResult[56] = tmp5.cards;
                                                          cResult[57] = tmp48;
                                                          cResult[58] = tmp54;
                                                          tmp51 = tmp54;
                                                        }
                                                      }
                                                    }
                                                    const obj9 = { userId: user.id, displayProfile, channel, style: tmp47 };
                                                    const tmp50 = closure_7(userTag(11223), obj9);
                                                    cResult[51] = channel;
                                                    cResult[52] = displayProfile;
                                                    cResult[53] = tmp47;
                                                    cResult[54] = user.id;
                                                    cResult[55] = tmp50;
                                                    tmp48 = tmp50;
                                                  }
                                                  const items3 = [tmp5.card, tmp46];
                                                  cResult[48] = tmp5.card;
                                                  cResult[49] = tmp46;
                                                  cResult[50] = items3;
                                                  tmp47 = items3;
                                                }
                                                const obj10 = { style: primaryInfo, children: tmp39 };
                                                const tmp45 = closure_7(View, obj10);
                                                cResult[43] = tmp5.primaryInfo;
                                                cResult[44] = tmp39;
                                                cResult[45] = tmp45;
                                                tmp42 = tmp45;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj11 = { user, guildId: guild_id1, displayName: name, pronouns, badges: tmp11, badgeContainerBackground: containerBackground, displayNameAccessibilityHint: tmp37, onPressDisplayName: tmp20, onPressUserTag: tmp20, onPressPronouns: tmp21, showBadgeToastOnPress: true };
                                  const tmp41 = closure_7(userTag(10507), obj11);
                                  cResult[34] = tmp11;
                                  cResult[35] = containerBackground;
                                  cResult[36] = name;
                                  cResult[37] = tmp20;
                                  cResult[38] = tmp21;
                                  cResult[39] = guild_id1;
                                  cResult[40] = pronouns;
                                  cResult[41] = user;
                                  cResult[42] = tmp41;
                                  tmp39 = tmp41;
                                }
                              }
                              const items4 = [, , ];
                              ({ profileContentWrapper: arr[0], profileContent: arr[1] } = tmp5);
                              items4[2] = tmp31;
                              cResult[29] = tmp5.profileContent;
                              cResult[30] = tmp5.profileContentWrapper;
                              cResult[31] = tmp31;
                              cResult[32] = items4;
                              tmp33 = items4;
                            }
                          }
                          const obj12 = { user, guildId, backgroundColor: avatarBackground, disableStatus: true };
                          const tmp28 = closure_7(trackUserProfileAction(8357).OpenableUserProfileAvatar, obj12);
                          cResult[23] = avatarBackground;
                          cResult[24] = guildId;
                          cResult[25] = user;
                          cResult[26] = tmp28;
                          tmp26 = tmp28;
                        }
                      }
                    }
                  }
                }
              }
              const obj13 = { user, displayProfile, bannerHeight: tmp12, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
              const tmp24 = closure_7(userTag(8346), obj13);
              cResult[15] = bannerAnimatedStyle;
              cResult[16] = tmp12;
              cResult[17] = bannerImageAnimatedStyle;
              cResult[18] = blurAnimatedProps;
              cResult[19] = displayProfile;
              cResult[20] = showBlur;
              cResult[21] = user;
              cResult[22] = tmp24;
              tmp22 = tmp24;
            }
            function handleCopyUsername() {
              trackUserProfileAction({ action: "COPY_USERNAME" });
              const obj = ClipboardUtils;
              obj.copy(userTag);
              const obj2 = ToastUtils;
              const result = obj2.presentUsernameCopied();
            }
            cResult[10] = trackUserProfileAction;
            cResult[11] = userTag;
            cResult[12] = handleCopyUsername;
            tmp20 = handleCopyUsername;
          }
        }
      }
      const obj14 = { theme, primaryColor, secondaryColor };
      cResult[6] = primaryColor;
      cResult[7] = secondaryColor;
      cResult[8] = theme;
      cResult[9] = obj14;
      tmp18 = obj14;
    }
    const obj15 = { user, displayProfile };
    cResult[3] = displayProfile;
    cResult[4] = user;
    cResult[5] = obj15;
    tmp16 = obj15;
  }
  const obj16 = { scrollPosition, bannerHeight: tmp12 };
  cResult[0] = tmp12;
  cResult[1] = scrollPosition;
  cResult[2] = obj16;
  tmp13 = obj16;
}) : (function NonUserBotProfileContent(scrollPosition) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let channel;
  let closure_1;
  let contentAnimatedStyle;
  let displayProfile;
  let guildId;
  let guild_id1;
  let handleCopyUsername;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj8;
  let primaryColor;
  let pronouns;
  let secondaryColor;
  let showBlur;
  let theme;
  let tmpResult2;
  let user;
  ({ user, channel, displayProfile } = scrollPosition);
  let trackUserProfileAction;
  importDefault = undefined;
  scrollPosition = scrollPosition.scrollPosition;
  const tmp3 = UserProfileSharedStylesDefault();
  let obj = trackUserProfileAction(8290);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let guild_id;
  const useName = NicknameUtilsDefault.useName;
  NicknameUtilsDefault;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guild_id, id, user);
  const tmpResult = UserUtilsDefault;
  importDefault = tmpResult.useUserTag(user);
  const tmp9 = useBadgesDefault(displayProfile);
  const tmp10 = useUserProfileBannerHeightDefault(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = useUserProfileOverscrollStylesDefault({ scrollPosition, bannerHeight: tmp10 }));
  useUserProfileOverscrollStylesDefault({ scrollPosition, bannerHeight: tmp10 });
  const bottom = tmp(1630)().bottom;
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user, displayProfile }));
  useProfileThemeDefault({ user, displayProfile });
  const tmp4Result = trackUserProfileAction(8340);
  const userProfileColors = tmp4Result.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    let obj2 = { user, displayProfile, bannerHeight: tmp10, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
    const items = [closure_7(tmp(8346), obj2), ];
    const obj3 = { style: contentAnimatedStyle, children: items1 };
    View = tmp(4810).View;
    const obj4 = { user, guildId, backgroundColor: tmp14, disableStatus: true };
    guildId = undefined;
    const OpenableUserProfileAvatar = tmp4(8357).OpenableUserProfileAvatar;
    const tmp23 = closure_9;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    items1 = [closure_7(OpenableUserProfileAvatar, obj4), ];
    const obj5 = { style: items2, children: items3 };
    items2 = [, , ];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp3);
    const obj6 = { paddingTop, paddingBottom: bottom + closure_4 };
    items2[2] = obj6;
    const obj7 = { style: tmp3.primaryInfo, children: closure_7(tmpResult2, obj8) };
    obj8 = {
      user,
      guildId: guild_id1,
      displayName: name,
      pronouns,
      badges: tmp9,
      badgeContainerBackground: containerBackground,
      displayNameAccessibilityHint: intl.string(trackUserProfileAction(1126).t.y5MwJy),
      onPressDisplayName: handleCopyUsername,
      onPressUserTag: handleCopyUsername,
      onPressPronouns: function handlePressPronouns() {
          trackUserProfileAction({ action: "PRESS_PRONOUNS" });
          const obj = ToastUtils;
          obj.presentUserPronouns();
        },
      showBadgeToastOnPress: true
    };
    guild_id1 = undefined;
    tmpResult2 = UserProfilePrimaryInfoDefault;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    pronouns = undefined;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    handleCopyUsername = function handleCopyUsername() {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      const obj = ClipboardUtils;
      obj.copy(closure_1);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    };
    const obj9 = { children: items };
    intl = tmp4(1126).intl;
    items3 = [closure_7(View, obj7), ];
    const obj10 = { style: tmp3.cards, children: closure_7(UserProfileAboutMeCardDefault, obj11) };
    obj11 = { userId: user.id, displayProfile, channel, style: items4 };
    items4 = [tmp3.card, ];
    const obj12 = { backgroundColor: containerBackground };
    items4[1] = obj12;
    items3[1] = closure_7(View, obj10);
    items1[1] = closure_8(View, obj5);
    items[1] = closure_8(View, obj3);
    return closure_8(tmp23, obj9);
  }
}));
let result = size.fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default memoResult;
