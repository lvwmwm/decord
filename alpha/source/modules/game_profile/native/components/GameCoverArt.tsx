// Module ID: 9341
// Function ID: 9342
// Name: GameCoverArt
// Dependencies: [109, 19, 17, 21, 5005, 587, 558, 576, 9342, 1125, 5707, 5271, 2]

// Module 9341 (GameCoverArt)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1125 */;
import Text_Text from "Text/Text" /* 5271 */;
import FastImageDefault from "FastImage" /* 5707 */;
import useGameArtworkDefault from "useGameArtwork" /* 9342 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let items;
let metroImportDefault;
let metroRequire;
let obj10;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let closure_3 = ["game", "imageSize"];
({ StyleSheet, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const GameCoverArtSize = { SMALL: 0, [0]: "SMALL", LARGE: 1, [1]: "LARGE", COMPACT: 2, [2]: "COMPACT" };
let closure_9 = { [GameCoverArtSize.SMALL]: { nameVariant: "text-xs/medium", nameLineClamp: 3, releaseYearVariant: "text-xxs/normal" }, [GameCoverArtSize.LARGE]: { nameVariant: "text-md/medium", nameLineClamp: 4, releaseYearVariant: "text-sm/normal" } };
let createStyles = createStyles_mod;
let obj2 = { container: obj3, image: size, iconContainer: obj4, backdropContainer: obj5, backdrop: obj6, icon: obj7, fallback: obj8, compactFallback: obj9, fallbackText: { textAlign: "center" }, spacer: { flex: 1 }, placeholder: obj10 };
obj3 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
obj4 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { transform: items };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
items = [{ scale: 1.2 }];
obj7 = { width: "85%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm };
obj8 = { alignItems: "center", padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj9 = { justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj10 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameCoverArt(arg0) {
  let game;
  let imageSize;
  let obj2;
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(16);
  if (cResult[0] !== arg0) {
    ({ game, imageSize } = arg0);
    const tmp6 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = game;
    cResult[2] = imageSize;
    cResult[3] = tmp6;
    tmp3 = tmp6;
    tmp2 = imageSize;
    obj2 = game;
  } else {
    obj2 = cResult[1];
    tmp2 = cResult[2];
    tmp3 = cResult[3];
  }
  if (cResult[4] === obj2) {
    let tmp7;
    if (cResult[5] === tmp2) {
      tmp7 = cResult[6];
    }
    if (cResult[7] === obj2) {
      let tmp9;
      if (cResult[8] === tmp2) {
        tmp9 = cResult[9];
      }
      if (cResult[10] === obj2.firstReleaseDate) {
        if (cResult[11] === obj2.name) {
          if (cResult[12] === tmp3) {
            if (cResult[13] === tmp7) {
              let tmp12;
              if (cResult[14] === tmp9) {
                tmp12 = cResult[15];
              }
              return tmp12;
            }
          }
        }
      }
      const obj4 = { coverUrl: tmp7, iconUrl: tmp9 };
      const merged = Object.assign(tmp3);
      ({ name: obj3.gameName, firstReleaseDate: obj3.firstReleaseDate } = obj2);
      const tmp18 = metroRequire(closure_11, obj4);
      cResult[10] = obj2.firstReleaseDate;
      cResult[11] = obj2.name;
      cResult[12] = tmp3;
      cResult[13] = tmp7;
      cResult[14] = tmp9;
      cResult[15] = tmp18;
      tmp12 = tmp18;
    }
    let num5 = tmp2;
    const getIconURL = obj2.getIconURL;
    if (tmp2 == null) {
      num5 = 256;
    }
    const iconURL = getIconURL(num5);
    cResult[7] = obj2;
    cResult[8] = tmp2;
    cResult[9] = iconURL;
    tmp9 = iconURL;
  }
  const coverURL = obj2.getCoverURL(tmp2);
  cResult[4] = obj2;
  cResult[5] = tmp2;
  cResult[6] = coverURL;
  tmp7 = coverURL;
}) : (function GameCoverArt(arg0) {
  let game;
  let getIconURL;
  let imageSize;
  ({ game, imageSize } = arg0);
  const obj = { coverUrl: game.getCoverURL(imageSize), iconUrl: getIconURL(imageSize) };
  const merged = Object.assign(Object.assign(arg0, Object.assign({ game: 0, imageSize: 0 })));
  getIconURL = game.getIconURL;
  const tmp = metroRequire;
  const tmp2 = closure_11;
  if (imageSize == null) {
    imageSize = 256;
  }
  ({ name: obj.gameName, firstReleaseDate: obj.firstReleaseDate } = game);
  return tmp(tmp2, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameCoverArtFromURLs(arg0) {
  let accessible;
  let coverUrl;
  let firstReleaseDate;
  let gameName;
  let handleError;
  let handleLoad;
  let iconUrl;
  let imageUrl;
  let isCover;
  let isLoading;
  let items;
  let loadingPlaceholder;
  let obj8;
  let obj9;
  let style;
  const obj = react2;
  const cResult = obj.c(38);
  ({ gameName, firstReleaseDate, size, style, accessible, loadingPlaceholder } = arg0);
  let tmp4 = undefined === accessible;
  ({ coverUrl, iconUrl } = arg0);
  if (!tmp4) {
    tmp4 = accessible;
  }
  const tmp5 = closure_10();
  ({ imageUrl, isCover, isLoading, handleLoad, handleError } = useGameArtworkDefault(coverUrl, iconUrl));
  useGameArtworkDefault(coverUrl, iconUrl);
  if (null == imageUrl) {
    if (cResult[0] === tmp4) {
      if (cResult[1] === firstReleaseDate) {
        if (cResult[2] === gameName) {
          if (cResult[3] === size) {
            let tmp30;
            if (cResult[4] === style) {
              tmp30 = cResult[5];
            }
            return tmp30;
          }
        }
      }
    }
    const obj2 = { gameName, firstReleaseDate, size, style, accessible: tmp4 };
    const tmp33 = metroRequire(closure_12, obj2);
    cResult[0] = tmp4;
    cResult[1] = firstReleaseDate;
    cResult[2] = gameName;
    cResult[3] = size;
    cResult[4] = style;
    cResult[5] = tmp33;
    tmp30 = tmp33;
  } else {
    if (cResult[6] === gameName) {
      let tmp8;
      if (cResult[7] === size) {
        tmp8 = cResult[8];
      }
      if (cResult[9] === style) {
        if (cResult[10] === tmp5.container) {
          let tmp12;
          if (cResult[11] === (!isCover && tmp5.iconContainer)) {
            tmp12 = cResult[12];
          }
          if (cResult[13] === imageUrl) {
            if (cResult[14] === isCover) {
              if (cResult[15] === tmp5.backdrop) {
                let tmp13;
                let tmp17;
                if (cResult[16] === tmp5.backdropContainer) {
                  tmp13 = cResult[17];
                }
                if (cResult[18] !== imageUrl) {
                  const obj3 = { uri: imageUrl };
                  cResult[18] = imageUrl;
                  cResult[19] = obj3;
                  tmp17 = obj3;
                } else {
                  tmp17 = cResult[19];
                }
                const tmp18 = isCover ? tmp5.image : tmp5.icon;
                let str = "cover";
                if (isCover) {
                  str = "stretch";
                }
                if (cResult[20] === handleError) {
                  if (cResult[21] === handleLoad) {
                    if (cResult[22] === imageUrl) {
                      if (cResult[23] === tmp17) {
                        if (cResult[24] === tmp18) {
                          let tmp19;
                          if (cResult[25] === str) {
                            tmp19 = cResult[26];
                          }
                          if (cResult[27] === isLoading) {
                            if (cResult[28] === loadingPlaceholder) {
                              let tmp22;
                              if (cResult[29] === tmp5.placeholder) {
                                tmp22 = cResult[30];
                              }
                              if (cResult[31] === tmp4) {
                                if (cResult[32] === tmp8) {
                                  if (cResult[33] === tmp22) {
                                    if (cResult[34] === tmp12) {
                                      if (cResult[35] === tmp13) {
                                        let tmp26;
                                        if (cResult[36] === tmp19) {
                                          tmp26 = cResult[37];
                                        }
                                        return tmp26;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj4 = { style: tmp12, accessible: tmp4, accessibilityRole: "image", accessibilityLabel: tmp8, children: items };
                              items = [tmp13, tmp19, tmp22];
                              const tmp29 = metroImportDefault(hasOwnProperty, obj4);
                              cResult[31] = tmp4;
                              cResult[32] = tmp8;
                              cResult[33] = tmp22;
                              cResult[34] = tmp12;
                              cResult[35] = tmp13;
                              cResult[36] = tmp19;
                              cResult[37] = tmp29;
                              tmp26 = tmp29;
                            }
                          }
                          let tmp23 = isLoading && null != loadingPlaceholder;
                          if (tmp23) {
                            const obj5 = { style: tmp5.placeholder, children: loadingPlaceholder };
                            tmp23 = metroRequire(hasOwnProperty, obj5);
                          }
                          cResult[27] = isLoading;
                          cResult[28] = loadingPlaceholder;
                          cResult[29] = tmp5.placeholder;
                          cResult[30] = tmp23;
                          tmp22 = tmp23;
                        }
                      }
                    }
                  }
                }
                const obj6 = { source: tmp17, accessible: false, style: tmp18, resizeMode: str, onError: handleError, onLoad: handleLoad };
                const tmp21 = metroRequire(FastImageDefault, obj6, imageUrl);
                cResult[20] = handleError;
                cResult[21] = handleLoad;
                cResult[22] = imageUrl;
                cResult[23] = tmp17;
                cResult[24] = tmp18;
                cResult[25] = str;
                cResult[26] = tmp21;
                tmp19 = tmp21;
              }
            }
          }
          let tmp14 = !isCover;
          if (tmp14) {
            const obj7 = { style: tmp5.backdropContainer, pointerEvents: "none", children: metroRequire(FastImageDefault, obj8) };
            obj8 = { source: obj9, style: tmp5.backdrop, resizeMode: "cover", blurRadius: 24, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
            obj9 = { uri: imageUrl };
            tmp14 = metroRequire(hasOwnProperty, obj7);
          }
          cResult[13] = imageUrl;
          cResult[14] = isCover;
          cResult[15] = tmp5.backdrop;
          cResult[16] = tmp5.backdropContainer;
          cResult[17] = tmp14;
          tmp13 = tmp14;
        }
      }
      const items1 = [tmp5.container, !isCover && tmp5.iconContainer, style];
      cResult[9] = style;
      cResult[10] = tmp5.container;
      cResult[11] = !isCover && tmp5.iconContainer;
      cResult[12] = items1;
      tmp12 = items1;
    }
    let formatToPlainStringResult = gameName;
    if (size !== obj.COMPACT) {
      const intl = tmp(1125).intl;
      const obj10 = { game: gameName };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1125).t["3ev90U"], obj10);
    }
    cResult[6] = gameName;
    cResult[7] = size;
    cResult[8] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  }
}) : (function GameCoverArtFromURLs(loadingPlaceholder) {
  let accessible;
  let coverUrl;
  let firstReleaseDate;
  let gameName;
  let iconUrl;
  let imageUrl;
  let isCover;
  let isLoading;
  let items1;
  let obj;
  let obj5;
  let obj6;
  let obj8;
  let str;
  let style;
  ({ gameName, size, style, accessible } = loadingPlaceholder);
  ({ coverUrl, iconUrl, firstReleaseDate } = loadingPlaceholder);
  if (accessible === undefined) {
    accessible = true;
  }
  loadingPlaceholder = loadingPlaceholder.loadingPlaceholder;
  const tmp = closure_10();
  ({ imageUrl, isCover, isLoading } = useGameArtworkDefault(coverUrl, iconUrl));
  useGameArtworkDefault(coverUrl, iconUrl);
  if (null == imageUrl) {
    const obj2 = { gameName, firstReleaseDate, size, style, accessible };
    return metroRequire(closure_12, obj2);
  } else {
    let formatToPlainStringResult = gameName;
    if (size !== obj.COMPACT) {
      const intl = intl2.intl;
      obj = { game: gameName };
      formatToPlainStringResult = intl.formatToPlainString(intl2.t["3ev90U"], obj);
    }
    const items = [tmp.container, , ];
    let iconContainer = !isCover;
    const tmp9 = metroImportDefault;
    if (!isCover) {
      iconContainer = tmp.iconContainer;
    }
    const obj3 = { style: items, accessible, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, children: items1 };
    items[1] = iconContainer;
    items[2] = style;
    let tmp11 = !isCover;
    if (tmp11) {
      const obj4 = { style: tmp.backdropContainer, pointerEvents: "none", children: metroRequire(FastImageDefault, obj5) };
      obj5 = { source: obj6, style: tmp.backdrop, resizeMode: "cover", blurRadius: 24, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      obj6 = { uri: imageUrl };
      tmp11 = metroRequire(tmp10, obj4);
    }
    items1 = [tmp11, , ];
    const obj7 = { source: obj8, accessible: false, style: isCover ? tmp.image : tmp.icon, resizeMode: str, onError: tmp6, onLoad: tmp5 };
    str = "cover";
    obj8 = { uri: imageUrl };
    const tmp2Result = FastImageDefault;
    if (isCover) {
      str = "stretch";
    }
    items1[1] = metroRequire(tmp2Result, obj7, imageUrl);
    if (isLoading) {
      isLoading = null != loadingPlaceholder;
    }
    if (isLoading) {
      const obj9 = { style: tmp.placeholder, children: loadingPlaceholder };
      isLoading = tmp13(tmp10, obj9);
    }
    items1[2] = isLoading;
    return tmp9(hasOwnProperty, obj3);
  }
});
let closure_11 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameCoverArtFallback(arg0) {
  let accessible;
  let firstReleaseDate;
  let gameName;
  let items1;
  let nameLineClamp;
  let nameVariant;
  let releaseYearVariant;
  let style;
  const obj = react2;
  const cResult = obj.c(38);
  ({ gameName, firstReleaseDate, size, style, accessible } = arg0);
  const tmp4 = closure_10();
  if (size === obj.COMPACT) {
    if (cResult[0] === style) {
      if (cResult[1] === tmp4.compactFallback) {
        let tmp34;
        if (cResult[2] === tmp4.container) {
          tmp34 = cResult[3];
        }
        if (cResult[4] === gameName) {
          let tmp35;
          if (cResult[5] === tmp4.fallbackText) {
            tmp35 = cResult[6];
          }
          if (cResult[7] === accessible) {
            if (cResult[8] === gameName) {
              if (cResult[9] === tmp34) {
                let tmp38;
                if (cResult[10] === tmp35) {
                  tmp38 = cResult[11];
                }
                return tmp38;
              }
            }
          }
          const obj2 = { style: tmp34, accessible, accessibilityRole: "image", accessibilityLabel: gameName, children: tmp35 };
          const tmp41 = metroRequire(hasOwnProperty, obj2);
          cResult[7] = accessible;
          cResult[8] = gameName;
          cResult[9] = tmp34;
          cResult[10] = tmp35;
          cResult[11] = tmp41;
          tmp38 = tmp41;
        }
        const obj3 = { variant: "text-xxs/medium", lineClamp: 3, style: tmp4.fallbackText, accessible: false, children: gameName };
        const tmp37 = metroRequire(Text_Text.Text, obj3);
        cResult[4] = gameName;
        cResult[5] = tmp4.fallbackText;
        cResult[6] = tmp37;
        tmp35 = tmp37;
      }
    }
    const items = [tmp4.container, style, tmp4.compactFallback];
    cResult[0] = style;
    cResult[1] = tmp4.compactFallback;
    cResult[2] = tmp4.container;
    cResult[3] = items;
    tmp34 = items;
  } else {
    let tmp5;
    ({ nameVariant, nameLineClamp, releaseYearVariant } = closure_9[size]);
    if (cResult[12] !== firstReleaseDate) {
      let date = null;
      if (null != firstReleaseDate) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(firstReleaseDate);
      }
      let combined = null;
      if (null != date) {
        const _HermesInternal = HermesInternal;
        combined = "(" + date.getFullYear() + ")";
      }
      cResult[12] = firstReleaseDate;
      cResult[13] = combined;
      tmp5 = combined;
    } else {
      tmp5 = cResult[13];
    }
    if (cResult[14] === style) {
      if (cResult[15] === tmp4.container) {
        let tmp12;
        let tmp16;
        if (cResult[16] === tmp4.fallback) {
          tmp12 = cResult[17];
        }
        let combined1 = gameName;
        if (null != tmp5) {
          const _HermesInternal2 = HermesInternal;
          combined1 = "" + gameName + " " + tmp5;
        }
        if (cResult[18] !== tmp4.spacer) {
          const obj4 = { style: tmp4.spacer };
          const tmp19 = metroRequire(hasOwnProperty, obj4);
          cResult[18] = tmp4.spacer;
          cResult[19] = tmp19;
          tmp16 = tmp19;
        } else {
          tmp16 = cResult[19];
        }
        if (cResult[20] === gameName) {
          if (cResult[21] === nameLineClamp) {
            if (cResult[22] === nameVariant) {
              let tmp20;
              let tmp23;
              if (cResult[23] === tmp4.fallbackText) {
                tmp20 = cResult[24];
              }
              if (cResult[25] !== tmp4.spacer) {
                const obj5 = { style: tmp4.spacer };
                const tmp26 = metroRequire(hasOwnProperty, obj5);
                cResult[25] = tmp4.spacer;
                cResult[26] = tmp26;
                tmp23 = tmp26;
              } else {
                tmp23 = cResult[26];
              }
              if (cResult[27] === tmp5) {
                let tmp27;
                if (cResult[28] === releaseYearVariant) {
                  tmp27 = cResult[29];
                }
                if (cResult[30] === accessible) {
                  if (cResult[31] === tmp12) {
                    if (cResult[32] === combined1) {
                      if (cResult[33] === tmp16) {
                        if (cResult[34] === tmp20) {
                          if (cResult[35] === tmp23) {
                            let tmp30;
                            if (cResult[36] === tmp27) {
                              tmp30 = cResult[37];
                            }
                            return tmp30;
                          }
                        }
                      }
                    }
                  }
                }
                const obj6 = { style: tmp12, accessible, accessibilityRole: "image", accessibilityLabel: combined1, children: items1 };
                items1 = [tmp16, tmp20, tmp23, tmp27];
                const tmp33 = metroImportDefault(hasOwnProperty, obj6);
                cResult[30] = accessible;
                cResult[31] = tmp12;
                cResult[32] = combined1;
                cResult[33] = tmp16;
                cResult[34] = tmp20;
                cResult[35] = tmp23;
                cResult[36] = tmp27;
                cResult[37] = tmp33;
                tmp30 = tmp33;
              }
              const obj7 = { variant: releaseYearVariant, color: "text-default", accessible: false, children: tmp5 };
              const tmp29 = metroRequire(Text_Text.Text, obj7);
              cResult[27] = tmp5;
              cResult[28] = releaseYearVariant;
              cResult[29] = tmp29;
              tmp27 = tmp29;
            }
          }
        }
        const obj8 = { variant: nameVariant, color: "text-default", lineClamp: nameLineClamp, style: tmp4.fallbackText, accessible: false, children: gameName };
        const tmp22 = metroRequire(Text_Text.Text, obj8);
        cResult[20] = gameName;
        cResult[21] = nameLineClamp;
        cResult[22] = nameVariant;
        cResult[23] = tmp4.fallbackText;
        cResult[24] = tmp22;
        tmp20 = tmp22;
      }
    }
    const items2 = [tmp4.container, style, tmp4.fallback];
    cResult[14] = style;
    cResult[15] = tmp4.container;
    cResult[16] = tmp4.fallback;
    cResult[17] = items2;
    tmp12 = items2;
  }
}) : (function GameCoverArtFallback(arg0) {
  let accessible;
  let combined1;
  let firstReleaseDate;
  let gameName;
  let items;
  let items1;
  let items2;
  let nameLineClamp;
  let nameVariant;
  let obj;
  let obj3;
  let releaseYearVariant;
  let style;
  ({ gameName, firstReleaseDate, size, style, accessible } = arg0);
  const tmp = closure_10();
  if (size === obj.COMPACT) {
    const obj2 = { style: items, accessible, accessibilityRole: "image", accessibilityLabel: gameName, children: metroRequire(Text_Text.Text, obj3) };
    items = [tmp.container, style, tmp.compactFallback];
    obj3 = { variant: "text-xxs/medium", lineClamp: 3, style: tmp.fallbackText, accessible: false, children: gameName };
    return metroRequire(hasOwnProperty, obj2);
  } else {
    let date = null;
    ({ nameVariant, nameLineClamp, releaseYearVariant } = closure_9[size]);
    if (null != firstReleaseDate) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(firstReleaseDate);
    }
    let combined = null;
    if (null != date) {
      const _HermesInternal = HermesInternal;
      combined = "(" + date.getFullYear() + ")";
    }
    obj = { style: items1, accessible, accessibilityRole: "image", accessibilityLabel: combined1, children: items2 };
    items1 = [tmp.container, style, tmp.fallback];
    combined1 = gameName;
    const tmp7 = metroImportDefault;
    if (null != combined) {
      const _HermesInternal2 = HermesInternal;
      combined1 = "" + gameName + " " + combined;
    }
    const obj4 = { style: tmp.spacer };
    items2 = [metroRequire(hasOwnProperty, obj4), , , ];
    const obj5 = { variant: nameVariant, color: "text-default", lineClamp: nameLineClamp, style: tmp.fallbackText, accessible: false, children: gameName };
    items2[1] = metroRequire(Text_Text.Text, obj5);
    const obj6 = { style: tmp.spacer };
    items2[2] = metroRequire(hasOwnProperty, obj6);
    const obj7 = { variant: releaseYearVariant, color: "text-default", accessible: false, children: combined };
    items2[3] = metroRequire(Text_Text.Text, obj7);
    return tmp7(hasOwnProperty, obj);
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameCoverArt.tsx");

export default tmp9;
export { GameCoverArtSize };
export const GameCoverArtFromURLs = tmp10;
