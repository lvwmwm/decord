// Module ID: 14856
// Function ID: 14857
// Name: UserProfileEditBannerButton
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 7409, 8464, 8453, 1119, 4754, 5341, 10626, 8504, 8520, 2]

// Module 14856 (UserProfileEditBannerButton)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import Pressables from "Pressables" /* 5341 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8453 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8504 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8520 */;
import PencilIcon from "PencilIcon" /* 10626 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { position: "relative" }, editButton: null, previewButton: null };
let size = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round };
obj2.editButton = size;
const rect = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
obj2.previewButton = rect;
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(context[6]).c(9);
  userId = userId.userId;
  let tmp4 = closure_7();
  analyticsLocations = analyticsLocations(context[7])().analyticsLocations;
  let obj = userId(context[6]);
  context = userId(context[8]).useUserProfileAnalyticsContext().context;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === context) {
      if (cResult[2] === userId) {
        let tmp5 = cResult[3];
      }
      if (null == userId) {
        return null;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[10]).intl;
          const stringResult = intl.string(tmp(tmp2[10]).t["3Qcx6K"]);
          cResult[4] = stringResult;
          let tmp7 = stringResult;
        } else {
          tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
          const intl2 = tmp(tmp2[10]).intl;
          obj3.children = intl2.string(tmp(tmp2[10]).t["3Qcx6K"]);
          const tmp11 = closure_5(tmp(tmp2[11]).Text, obj3);
          cResult[5] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          if (cResult[7] === tmp4.previewButton) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
        const obj4 = { style: tmp4.previewButton, onPress: tmp5, accessibilityRole: "button", accessibilityLabel: tmp7, children: tmp9 };
        const tmp14 = closure_5(tmp(tmp2[12]).PressableOpacity, obj4);
        cResult[6] = tmp5;
        cResult[7] = tmp4.previewButton;
        cResult[8] = tmp14;
        tmp12 = tmp14;
      }
    }
  }
  const fn = function t() {
    if (null != userId) {
      const obj = {};
      const merged = Object.assign(context);
      obj.userId = tmp;
      obj.isPreviewingChanges = true;
      obj.sourceAnalyticsLocations = analyticsLocations;
      showUserProfileActionSheetDefault(obj);
    }
  };
  cResult[0] = analyticsLocations;
  cResult[1] = context;
  cResult[2] = userId;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((userId) => {
  userId = userId.userId;
  let analyticsLocations;
  let context;
  analyticsLocations = analyticsLocations(context[7])().analyticsLocations;
  const tmp = closure_7();
  context = userId(context[8]).useUserProfileAnalyticsContext().context;
  const items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    const obj2 = { style: tmp.previewButton, onPress: tmp4, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp3(tmp2[10]).intl;
    obj2.accessibilityLabel = intl.string(tmp3(tmp2[10]).t["3Qcx6K"]);
    const obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl2 = tmp3(tmp2[10]).intl;
    obj3.children = intl2.string(tmp3(tmp2[10]).t["3Qcx6K"]);
    obj2.children = closure_5(tmp3(tmp2[11]).Text, obj3);
    tmp5 = closure_5(tmp3(tmp2[12]).PressableOpacity, obj2);
  }
  return tmp5;
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ onPress, accessibilityLabel, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
    const tmp9 = hasOwnProperty(tmp(10626).PencilIcon, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === accessibilityLabel) {
    if (cResult[2] === tmp4) {
      if (cResult[3] === onPress) {
        if (cResult[4] === tmp5.editButton) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = hasOwnProperty(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel, onPress, disabled: undefined !== disabled && disabled, style: tmp5.editButton, children: first });
  cResult[1] = accessibilityLabel;
  cResult[2] = undefined !== disabled && disabled;
  cResult[3] = onPress;
  cResult[4] = tmp5.editButton;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((disabled) => {
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: closure_7().editButton, children: null };
  const tmp = closure_7();
  obj.children = hasOwnProperty(PencilIcon.PencilIcon, { size: "xs", color: nativeDefault.colors.WHITE });
  return hasOwnProperty(Pressables.PressableOpacity, obj);
});
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(22);
  ({ user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea, showProfilePreviewButton, showEditButton, onPressEdit, editButtonAccessibilityLabel, editDisabled } = arg0);
  const tmp5 = closure_7();
  const tmp7 = useUserProfileBannerHeightDefault();
  if (cResult[0] === tmp7) {
    if (cResult[1] === bannerSafeArea) {
      if (cResult[2] === displayProfile) {
        if (cResult[3] === pendingAccentColor) {
          if (cResult[4] === pendingAvatarSrc) {
            if (cResult[5] === pendingBanner) {
              if (cResult[6] === pendingThemeColors) {
                if (cResult[7] === user) {
                  let tmp8 = cResult[8];
                }
                if (cResult[9] === showProfilePreviewButton) {
                  if (cResult[10] === user) {
                    let tmp10 = cResult[11];
                  }
                  if (cResult[12] === editButtonAccessibilityLabel) {
                    if (cResult[13] === tmp4) {
                      if (cResult[14] === onPressEdit) {
                        if (cResult[15] === tmp3) {
                          let tmp14 = cResult[16];
                        }
                        if (cResult[17] === tmp5.container) {
                          if (cResult[18] === tmp8) {
                            if (cResult[19] === tmp10) {
                              if (cResult[20] === tmp14) {
                                let tmp18 = cResult[21];
                              }
                              return tmp18;
                            }
                          }
                        }
                        const obj2 = { style: tmp5.container, children: null };
                        const items = [tmp8, tmp10, tmp14];
                        obj2.children = items;
                        const tmp21 = timestampProducer(View, obj2);
                        cResult[17] = tmp5.container;
                        cResult[18] = tmp8;
                        cResult[19] = tmp10;
                        cResult[20] = tmp14;
                        cResult[21] = tmp21;
                        tmp18 = tmp21;
                      }
                    }
                  }
                  let tmp15 = tmp3;
                  if (tmp3) {
                    const obj3 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: tmp4 };
                    tmp15 = hasOwnProperty(closure_9, obj3);
                  }
                  cResult[12] = editButtonAccessibilityLabel;
                  cResult[13] = tmp4;
                  cResult[14] = onPressEdit;
                  cResult[15] = tmp3;
                  cResult[16] = tmp15;
                  tmp14 = tmp15;
                }
                let tmp11 = showProfilePreviewButton;
                if (showProfilePreviewButton) {
                  const obj4 = { userId: user.id };
                  tmp11 = hasOwnProperty(closure_8, obj4);
                }
                cResult[9] = showProfilePreviewButton;
                cResult[10] = user;
                cResult[11] = tmp11;
                tmp10 = tmp11;
              }
            }
          }
        }
      }
    }
  }
  const tmp9 = hasOwnProperty(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: tmp7, bannerSafeArea });
  cResult[0] = tmp7;
  cResult[1] = bannerSafeArea;
  cResult[2] = displayProfile;
  cResult[3] = pendingAccentColor;
  cResult[4] = pendingAvatarSrc;
  cResult[5] = pendingBanner;
  cResult[6] = pendingThemeColors;
  cResult[7] = user;
  cResult[8] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  ({ user, showProfilePreviewButton, showEditButton } = arg0);
  ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } = arg0);
  if (showEditButton === undefined) {
    showEditButton = true;
  }
  ({ editDisabled, onPressEdit, editButtonAccessibilityLabel } = arg0);
  if (editDisabled === undefined) {
    editDisabled = false;
  }
  const obj = { style: closure_7().container, children: null };
  const tmp = closure_7();
  const items = [hasOwnProperty(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: useUserProfileBannerHeightDefault(), bannerSafeArea }), , ];
  if (showProfilePreviewButton) {
    const obj2 = { userId: user.id };
    showProfilePreviewButton = tmp5(closure_8, obj2);
  }
  items[1] = showProfilePreviewButton;
  if (showEditButton) {
    const obj3 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
    showEditButton = tmp5(closure_9, obj3);
  }
  items[2] = showEditButton;
  obj.children = items;
  return timestampProducer(View, obj);
});
