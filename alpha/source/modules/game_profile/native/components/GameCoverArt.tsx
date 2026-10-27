// Module ID: 9305
// Function ID: 9306
// Name: GameCoverArt
// Dependencies: [19, 17, 21, 4972, 587, 558, 576, 9306, 5235, 5670, 2]

// Module 9305 (GameCoverArt)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useGameArtworkDefault from "useGameArtwork" /* 9306 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp;
let tmp4;
const Text_Text = tmp(5235);
const FastImageDefault = tmp4(5670);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { image: { width: "100%", height: "100%" }, iconContainer: { justifyContent: "center", alignItems: "center" }, icon: obj2, fallback: obj3, placeholder: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 } };
obj2 = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameCoverArt(arg0) {
  let coverContainerStyle;
  let coverImageSize;
  let game;
  let handleError;
  let handleLoad;
  let iconContainerStyle;
  let iconImageSize;
  let imageUrl;
  let isCover;
  let isLoading;
  let items1;
  let loadingPlaceholder;
  const obj = react2;
  const cResult = obj.c(35);
  ({ game, coverImageSize, iconImageSize, coverContainerStyle, iconContainerStyle, loadingPlaceholder } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === coverImageSize) {
    let tmp5;
    if (cResult[1] === game) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === game) {
      let tmp7;
      if (cResult[4] === iconImageSize) {
        tmp7 = cResult[5];
      }
      ({ imageUrl, isCover, isLoading, handleLoad, handleError } = useGameArtworkDefault(tmp5, tmp7));
      useGameArtworkDefault(tmp5, tmp7);
      const tmp9 = importDefault;
      if (null == imageUrl) {
        if (cResult[6] === coverContainerStyle) {
          let tmp27;
          let tmp28;
          if (cResult[7] === tmp4.fallback) {
            tmp27 = cResult[8];
          }
          if (cResult[9] !== game.name) {
            const obj2 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: game.name };
            const tmp30 = React3(Text_Text.Text, obj2);
            cResult[9] = game.name;
            cResult[10] = tmp30;
            tmp28 = tmp30;
          } else {
            tmp28 = cResult[10];
          }
          if (cResult[11] === tmp27) {
            let tmp31;
            if (cResult[12] === tmp28) {
              tmp31 = cResult[13];
            }
            return tmp31;
          }
          const obj3 = { style: tmp27, children: tmp28 };
          const tmp34 = React3(View, obj3);
          cResult[11] = tmp27;
          cResult[12] = tmp28;
          cResult[13] = tmp34;
          tmp31 = tmp34;
        }
        const items = [coverContainerStyle, tmp4.fallback];
        cResult[6] = coverContainerStyle;
        cResult[7] = tmp4.fallback;
        cResult[8] = items;
        tmp27 = items;
      } else {
        if (cResult[14] === coverContainerStyle) {
          if (cResult[15] === iconContainerStyle) {
            if (cResult[16] === isCover) {
              let tmp12;
              let tmp14;
              if (cResult[17] === tmp4.iconContainer) {
                tmp12 = cResult[18];
              }
              if (cResult[19] !== imageUrl) {
                const obj4 = { uri: imageUrl };
                cResult[19] = imageUrl;
                cResult[20] = obj4;
                tmp14 = obj4;
              } else {
                tmp14 = cResult[20];
              }
              const tmp15 = isCover ? tmp4.image : tmp4.icon;
              if (cResult[21] === handleError) {
                if (cResult[22] === handleLoad) {
                  if (cResult[23] === imageUrl) {
                    if (cResult[24] === tmp14) {
                      let tmp16;
                      if (cResult[25] === tmp15) {
                        tmp16 = cResult[26];
                      }
                      if (cResult[27] === isLoading) {
                        if (cResult[28] === loadingPlaceholder) {
                          let tmp19;
                          if (cResult[29] === tmp4.placeholder) {
                            tmp19 = cResult[30];
                          }
                          if (cResult[31] === tmp12) {
                            if (cResult[32] === tmp16) {
                              let tmp23;
                              if (cResult[33] === tmp19) {
                                tmp23 = cResult[34];
                              }
                              return tmp23;
                            }
                          }
                          const obj5 = { style: tmp12, children: items1 };
                          items1 = [tmp16, tmp19];
                          const tmp26 = hasOwnProperty(View, obj5);
                          cResult[31] = tmp12;
                          cResult[32] = tmp16;
                          cResult[33] = tmp19;
                          cResult[34] = tmp26;
                          tmp23 = tmp26;
                        }
                      }
                      let tmp20 = isLoading && null != loadingPlaceholder;
                      if (tmp20) {
                        const obj6 = { style: tmp4.placeholder, children: loadingPlaceholder };
                        tmp20 = React3(View, obj6);
                      }
                      cResult[27] = isLoading;
                      cResult[28] = loadingPlaceholder;
                      cResult[29] = tmp4.placeholder;
                      cResult[30] = tmp20;
                      tmp19 = tmp20;
                    }
                  }
                }
              }
              const obj7 = { source: tmp14, accessible: false, style: tmp15, onError: handleError, onLoad: handleLoad };
              const tmp18 = React3(tmp9(5670), obj7, imageUrl);
              cResult[21] = handleError;
              cResult[22] = handleLoad;
              cResult[23] = imageUrl;
              cResult[24] = tmp14;
              cResult[25] = tmp15;
              cResult[26] = tmp18;
              tmp16 = tmp18;
            }
          }
        }
        let tmp13 = coverContainerStyle;
        if (!isCover) {
          const items2 = [iconContainerStyle, tmp4.iconContainer];
          tmp13 = items2;
        }
        cResult[14] = coverContainerStyle;
        cResult[15] = iconContainerStyle;
        cResult[16] = isCover;
        cResult[17] = tmp4.iconContainer;
        cResult[18] = tmp13;
        tmp12 = tmp13;
      }
    }
    const iconURL = game.getIconURL(iconImageSize);
    cResult[3] = game;
    cResult[4] = iconImageSize;
    cResult[5] = iconURL;
    tmp7 = iconURL;
  }
  const coverURL = game.getCoverURL(coverImageSize);
  cResult[0] = coverImageSize;
  cResult[1] = game;
  cResult[2] = coverURL;
  tmp5 = coverURL;
}) : (function GameCoverArt(arg0) {
  let coverContainerStyle;
  let coverImageSize;
  let game;
  let iconContainerStyle;
  let iconImageSize;
  let imageUrl;
  let isCover;
  let isLoading;
  let items;
  let items2;
  let loadingPlaceholder;
  let obj3;
  let obj5;
  let tmp15Result;
  ({ game, coverContainerStyle, loadingPlaceholder } = arg0);
  ({ coverImageSize, iconImageSize, iconContainerStyle } = arg0);
  const tmp = closure_6();
  const coverURL = game.getCoverURL(coverImageSize);
  const iconURL = game.getIconURL(iconImageSize);
  ({ imageUrl, isCover, isLoading } = useGameArtworkDefault(coverURL, iconURL));
  useGameArtworkDefault(coverURL, iconURL);
  if (null == imageUrl) {
    const obj2 = { style: items, children: React3(Text_Text.Text, obj3) };
    items = [coverContainerStyle, tmp.fallback];
    obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: game.name };
    tmp15Result = React3(View, obj2);
  } else {
    let tmp9 = coverContainerStyle;
    const tmp15 = hasOwnProperty;
    if (!isCover) {
      const items1 = [iconContainerStyle, tmp.iconContainer];
      tmp9 = items1;
    }
    const obj4 = { source: obj5, accessible: false, style: isCover ? tmp.image : tmp.icon, onError: tmp8, onLoad: tmp7 };
    const obj = { style: tmp9, children: items2 };
    obj5 = { uri: imageUrl };
    items2 = [React3(FastImageDefault, obj4, imageUrl), ];
    if (isLoading) {
      isLoading = null != loadingPlaceholder;
    }
    if (isLoading) {
      const obj6 = { style: tmp.placeholder, children: loadingPlaceholder };
      isLoading = tmp10(tmp16, obj6);
    }
    items2[1] = isLoading;
    tmp15Result = tmp15(tmp16, obj);
  }
  return tmp15Result;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameCoverArt.tsx");

export default tmp5;
