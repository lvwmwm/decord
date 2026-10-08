// Module ID: 8348
// Function ID: 8349
// Name: UserProfileBanner
// Dependencies: [32, 19, 17, 1085, 21, 5090, 558, 576, 2040, 8349, 1414, 8356, 6189, 1126, 8103, 2]

// Module 8348 (UserProfileBanner)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import BannerDefault from "Banner" /* 8356 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const BANNER_HEIGHT = Constants.BANNER_HEIGHT;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ bannerContainer: { position: "relative" }, gifTag: { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileBanner(style) {
  let backgroundColor;
  let bannerHeight;
  let bannerSafeArea;
  let displayProfile;
  let intl;
  let items;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let user;
  let userProfileBannerBackgroundColor;
  let tmp = displayProfile;
  let tmp2 = pendingAccentColor;
  let obj = displayProfile(pendingAccentColor[7]);
  const cResult = obj.c(31);
  ({ user, displayProfile } = style);
  style = style.style;
  ({ bannerSafeArea, bannerHeight, pendingBanner, pendingAvatarSrc, pendingAccentColor } = style);
  const pendingThemeColors = style.pendingThemeColors;
  const disableInteraction = style.disableInteraction;
  let num = 0;
  if (undefined !== bannerSafeArea) {
    num = bannerSafeArea;
  }
  if (undefined === bannerHeight) {
    bannerHeight = backgroundColor;
  }
  const tmp4 = undefined !== disableInteraction && disableInteraction;
  const tmp5 = userProfileBannerBackgroundColor();
  const GifAutoPlay = tmp(tmp2[8]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp7 = pendingThemeColors(num.useState(false), 2);
  backgroundColor = tmp7[0];
  let closure_7 = tmp7[1];
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  if (cResult[0] === displayProfile) {
    if (cResult[1] === pendingAvatarSrc) {
      if (cResult[2] === guildId) {
        let tmp11;
        let source;
        let bannerURL;
        if (cResult[3] === user) {
          tmp11 = cResult[4];
        }
        const tmpResult = tmp(tmp2[9]);
        userProfileBannerBackgroundColor = tmpResult.useUserProfileBannerBackgroundColor(tmp11);
        if (cResult[5] === (setting || backgroundColor)) {
          if (cResult[6] === displayProfile) {
            let tmp14;
            let tmp19;
            if (cResult[7] === pendingBanner) {
              source = cResult[8];
              tmp14 = cResult[9];
            }
            if (tmp14) {
              tmp14 = !setting;
            }
            if (tmp14) {
              tmp14 = !tmp4;
            }
            if (cResult[10] !== backgroundColor) {
              function handleToggleAnimation() {
                closure_7(!first);
              }
              cResult[10] = backgroundColor;
              cResult[11] = handleToggleAnimation;
              tmp19 = handleToggleAnimation;
            } else {
              tmp19 = cResult[11];
            }
            if (cResult[12] === bannerHeight) {
              if (cResult[13] === num) {
                if (cResult[14] === tmp13) {
                  if (cResult[15] === userProfileBannerBackgroundColor) {
                    let banner;
                    const tmp20 = cResult[16];
                    if (displayProfile != null) {
                      banner = displayProfile.banner;
                    }
                    if (tmp20 === banner) {
                      let primaryColor;
                      const tmp22 = cResult[17];
                      if (displayProfile != null) {
                        primaryColor = displayProfile.primaryColor;
                      }
                      if (tmp22 === primaryColor) {
                        if (cResult[18] === pendingAccentColor) {
                          let first1;
                          const tmp24 = cResult[19];
                          if (pendingThemeColors != null) {
                            first1 = pendingThemeColors[0];
                          }
                          if (tmp24 === first1) {
                            let tmp26;
                            let tmp26Result;
                            if (cResult[20] === style) {
                              tmp26 = cResult[21];
                            }
                            if (cResult[22] === (setting || backgroundColor)) {
                              if (cResult[23] === tmp14) {
                                if (cResult[24] === tmp19) {
                                  if (cResult[25] === tmp26) {
                                    let tmp30;
                                    if (cResult[26] === tmp5.gifTag) {
                                      tmp30 = cResult[27];
                                    }
                                    if (cResult[28] === tmp5.bannerContainer) {
                                      let tmp36;
                                      if (cResult[29] === tmp30) {
                                        tmp36 = cResult[30];
                                      }
                                      return tmp36;
                                    }
                                    const obj2 = { style: tmp5.bannerContainer, children: tmp30 };
                                    const tmp39 = closure_7(bannerHeight, obj2);
                                    cResult[28] = tmp5.bannerContainer;
                                    cResult[29] = tmp30;
                                    cResult[30] = tmp39;
                                    tmp36 = tmp39;
                                  }
                                }
                              }
                            }
                            if (tmp14) {
                              const obj3 = { onPress: tmp19, accessibilityRole: "button", accessibilityLabel: intl.string(tmp(tmp2[13]).t["3fzj/l"]), children: items };
                              const PressableOpacity = tmp(tmp2[12]).PressableOpacity;
                              intl = tmp(tmp2[13]).intl;
                              items = [tmp26(), ];
                              let tmp33 = null;
                              const tmp32 = source;
                              if (!(setting || backgroundColor)) {
                                const obj4 = { style: tmp5.gifTag };
                                tmp33 = closure_7(style(tmp2[14]), obj4);
                              }
                              items[1] = tmp33;
                              tmp26Result = tmp32(PressableOpacity, obj3);
                            } else {
                              tmp26Result = tmp26();
                            }
                            cResult[22] = setting || backgroundColor;
                            cResult[23] = tmp14;
                            cResult[24] = tmp19;
                            cResult[25] = tmp26;
                            cResult[26] = tmp5.gifTag;
                            cResult[27] = tmp26Result;
                            tmp30 = tmp26Result;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            cResult[12] = bannerHeight;
            cResult[13] = num;
            cResult[14] = tmp13;
            cResult[15] = userProfileBannerBackgroundColor;
            let banner1;
            if (displayProfile != null) {
              banner1 = displayProfile.banner;
            }
            cResult[16] = banner1;
            let primaryColor1;
            if (displayProfile != null) {
              primaryColor1 = displayProfile.primaryColor;
            }
            cResult[17] = primaryColor1;
            cResult[18] = pendingAccentColor;
            let first2;
            if (pendingThemeColors != null) {
              first2 = pendingThemeColors[0];
            }
            function renderBanner() {
              const obj = { style, bannerSource: source, backgroundColor, bannerSafeArea: num, bannerHeight };
              backgroundColor = undefined;
              const tmp = metroImportDefault;
              const tmp2 = BannerDefault;
              if (pendingThemeColors != null) {
                backgroundColor = pendingThemeColors[0];
              }
              if (backgroundColor == null) {
                backgroundColor = pendingAccentColor;
              }
              if (backgroundColor == null) {
                let primaryColor;
                if (displayProfile != null) {
                  primaryColor = displayProfile.primaryColor;
                }
                backgroundColor = primaryColor;
              }
              if (backgroundColor == null) {
                backgroundColor = userProfileBannerBackgroundColor;
              }
              let banner;
              if (displayProfile != null) {
                banner = displayProfile.banner;
              }
              return tmp(tmp2, obj, banner);
            }
            cResult[19] = first2;
            cResult[20] = style;
            cResult[21] = renderBanner;
            tmp26 = renderBanner;
          }
        }
        if (undefined !== pendingBanner) {
          let previewBanner;
          if (displayProfile != null) {
            previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp9, 600);
          }
          bannerURL = previewBanner;
        } else if (displayProfile != null) {
          const obj5 = { canAnimate: setting || backgroundColor, size: 600 };
          bannerURL = displayProfile.getBannerURL(obj5);
        }
        source = null;
        if (null != bannerURL) {
          const tmpResult3 = tmp(tmp2[10]);
          source = tmpResult3.makeSource(bannerURL);
        }
        const tmpResult4 = tmp(tmp2[10]);
        const isAnimatedImageURLResult = tmpResult4.isAnimatedImageURL(bannerURL);
        cResult[5] = setting || backgroundColor;
        cResult[6] = displayProfile;
        cResult[7] = pendingBanner;
        cResult[8] = source;
        cResult[9] = isAnimatedImageURLResult;
        tmp14 = isAnimatedImageURLResult;
      }
    }
  }
  const obj6 = { user, guildId, pendingAvatarSrc, displayProfile };
  cResult[0] = displayProfile;
  cResult[1] = pendingAvatarSrc;
  cResult[2] = guildId;
  cResult[3] = user;
  cResult[4] = obj6;
  tmp11 = obj6;
}) : (function UserProfileBanner(displayProfile) {
  let backgroundColor;
  let bannerSafeArea;
  let bannerURL;
  let disableInteraction;
  let guildId;
  let intl;
  let items;
  let pendingAvatarSrc;
  let pendingBanner;
  let style;
  displayProfile = displayProfile.displayProfile;
  ({ style: importDefault, bannerSafeArea } = displayProfile);
  const user = displayProfile.user;
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  let bannerHeight = displayProfile.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = backgroundColor;
  }
  ({ pendingBanner, pendingAccentColor: react, pendingThemeColors: View, disableInteraction, pendingAvatarSrc } = displayProfile);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  let closure_8;
  let source;
  let tmp = source();
  let tmp2 = displayProfile;
  const GifAutoPlay = displayProfile(bannerSafeArea[8]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp5 = bannerHeight(react.useState(false), 2);
  backgroundColor = tmp5[0];
  let closure_7 = tmp5[1];
  let obj = { user, guildId, pendingAvatarSrc, displayProfile };
  guildId = undefined;
  const useUserProfileBannerBackgroundColor = tmp2(bannerSafeArea[9]).useUserProfileBannerBackgroundColor;
  tmp2(bannerSafeArea[9]);
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  closure_8 = useUserProfileBannerBackgroundColor(obj);
  if (undefined !== pendingBanner) {
    let previewBanner;
    if (displayProfile != null) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp7, 600);
    }
    bannerURL = previewBanner;
  } else if (displayProfile != null) {
    const obj2 = { canAnimate: setting || backgroundColor, size: 600 };
    bannerURL = displayProfile.getBannerURL(obj2);
  }
  source = null;
  if (null != bannerURL) {
    const tmp2Result3 = tmp2(bannerSafeArea[10]);
    source = tmp2Result3.makeSource(bannerURL);
  }
  function renderBanner() {
    const obj = { style: importDefault, bannerSource: source, backgroundColor, bannerSafeArea, bannerHeight };
    backgroundColor = undefined;
    const tmp = metroImportDefault;
    const tmp2 = BannerDefault;
    if (View != null) {
      backgroundColor = View[0];
    }
    if (backgroundColor == null) {
      backgroundColor = react;
    }
    if (backgroundColor == null) {
      let primaryColor;
      if (displayProfile != null) {
        primaryColor = displayProfile.primaryColor;
      }
      backgroundColor = primaryColor;
    }
    if (backgroundColor == null) {
      backgroundColor = closure_8;
    }
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    return tmp(tmp2, obj, banner);
  }
  const obj3 = { style: tmp.bannerContainer, children: null };
  const tmp2Result4 = tmp2(bannerSafeArea[10]);
  if (tmp2Result4.isAnimatedImageURL(bannerURL)) {
    if (!setting) {
      let renderBannerResult;
      if (!disableInteraction) {
        const obj4 = {
          onPress: function handleToggleAnimation() {
                  closure_7(!first);
                },
          accessibilityRole: "button",
          accessibilityLabel: intl.string(tmp2(bannerSafeArea[13]).t["3fzj/l"]),
          children: items
        };
        const PressableOpacity = tmp2(tmp3[12]).PressableOpacity;
        intl = tmp2(tmp3[13]).intl;
        items = [renderBanner(), ];
        let tmp13Result = null;
        const tmp15 = closure_8;
        if (!(setting || backgroundColor)) {
          const obj5 = { style: tmp.gifTag };
          tmp13Result = tmp13(require("GifTag"), obj5);
        }
        items[1] = tmp13Result;
        renderBannerResult = tmp15(PressableOpacity, obj4);
      }
      obj3.children = renderBannerResult;
      return closure_7(tmp14, obj3);
    }
  }
  renderBannerResult = renderBanner();
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default tmp3;
