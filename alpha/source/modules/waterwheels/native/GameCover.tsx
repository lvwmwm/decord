// Module ID: 18036
// Function ID: 18037
// Name: GameCover
// Dependencies: [32, 19, 17, 18037, 21, 575, 5635, 5043, 18038, 5730, 18039, 18040, 2]
// Exports: GameCoverFromURLs, default

// Module 18036 (GameCover)
import nativeDefault from "native" /* 575 */;
import TextVariants from "TextVariants" /* 5635 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18037 */;
import useCoverColor from "useCoverColor" /* 18038 */;
import InterestPickerPerformance from "InterestPickerPerformance" /* 18040 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_7;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let rect1;
function NoCover(arg0) {
  let PX_32;
  let aspectRatio;
  let compact;
  let game;
  let gameId;
  let imageWidth;
  let items2;
  let items3;
  let items4;
  let name;
  let num3;
  let obj11;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let onReady;
  let tmp4;
  let tmp4Result;
  let width;
  ({ game, width, compact, onReady } = arg0);
  let iconURL;
  let closure_2;
  let closure_3;
  let tmp = importDefault;
  const tmp2 = dependencyMap;
  ({ gameId, name, imageWidth, aspectRatio } = arg0);
  const _Math = Math;
  const space = nativeDefault.space;
  if (compact) {
    PX_32 = space.PX_24;
    tmp4 = tmp;
  } else {
    PX_32 = space.PX_32;
    tmp4 = tmp;
  }
  const minResult = min(PX_32, Math.max(0, width - tmp4(575).space.PX_16));
  const tmp6 = closure_11();
  iconURL = undefined;
  if (game != null) {
    const _Math2 = Math;
    iconURL = game.getIconURL(Math.min(1024 / hasOwnProperty.get(), imageWidth));
  }
  if (iconURL == null) {
    iconURL = null;
  }
  let iconURL1;
  if (game != null) {
    iconURL1 = game.getIconURL(16);
  }
  if (iconURL1 == null) {
    iconURL1 = null;
  }
  const tmp10 = _slicedToArray(react.useState(null), 2);
  closure_2 = tmp10[1];
  let tmp11 = null != iconURL && iconURL !== tmp10[0];
  closure_3 = tmp11;
  const items = [tmp11, onReady];
  const effect = react.useEffect(() => {
    const tmp = closure_3;
    if (!tmp) {
      if (onReady != null) {
        tmp2();
      }
    }
  }, items);
  const tmp13 = tmp4(18038)(gameId, iconURL1);
  const tmp15 = closure_12(width, minResult, Math.max(width / aspectRatio - width, c10), tmp13);
  const items1 = [tmp6.fallback, , ];
  let titleOnly = tmp18;
  const tmp16 = React4;
  if (!tmp11) {
    titleOnly = tmp6.titleOnly;
  }
  items1[1] = titleOnly;
  let background = tmp19;
  if (!(!compact && tmp11)) {
    background = tmp15.background;
  }
  const obj2 = { style: items1, children: items2 };
  items1[2] = background;
  let tmp20 = tmp11 && null != tmp13 && tmp19;
  if (tmp20) {
    const obj3 = { accessible: false, source: obj4, style: tmp6.texture, blurRadius: 32, resizeMode: "cover", fadeDuration: 0 };
    obj4 = { uri: iconURL };
    tmp20 = metroImportAll(tmp4(5730), obj3);
  }
  items2 = [tmp20, , , ];
  let tmp22 = tmp14;
  if (tmp22) {
    const obj5 = { style: items3, children: metroImportAll(tmp4(5730), obj6) };
    items3 = [tmp6.art, tmp15.art];
    obj6 = {
      source: obj7,
      style: tmp15.image,
      resizeMode: "contain",
      fadeDuration: 0,
      onLoad: onReady,
      onError() {
          return closure_2(iconURL);
        }
    };
    obj7 = { uri: iconURL };
    tmp22 = metroImportAll(tmp17, obj5);
  }
  items2[1] = tmp22;
  if (tmp11) {
    tmp11 = tmp19;
  }
  if (tmp11) {
    const obj8 = {
      source: obj9,
      style: items4,
      resizeMode: "contain",
      onLoad: onReady,
      onError() {
          return closure_2(iconURL);
        }
    };
    items4 = [tmp6.icon, tmp15.icon];
    obj9 = { uri: iconURL };
    tmp11 = metroImportAll(tmp4(5730), obj8);
  }
  items2[2] = tmp11;
  let tmp26Result = !compact;
  if (compact) {
    tmp26Result = tmp18;
  }
  if (tmp26Result) {
    let tmp27;
    if (!compact && tmp11) {
      const items5 = [tmp6.banner, , ];
      ({ banner: arr6[1], background: arr6[2] } = tmp15);
      tmp27 = items5;
    }
    const obj10 = { style: tmp27, children: metroImportAll(tmp4Result, obj11) };
    const _Math3 = Math;
    obj11 = { name, width: Math.max(0, width - tmp4(575).space.PX_16), maxLines: num3 };
    num3 = undefined;
    tmp4Result = tmp4(18039);
    if (!compact && tmp11) {
      num3 = 2;
    }
    tmp26Result = tmp26(tmp17, obj10);
  }
  items2[3] = tmp26Result;
  return tmp16(metroRequire, obj2);
}
function GameCoverImage(gameId) {
  let closure_4;
  let compact;
  let iconGame;
  let items1;
  let name;
  let obj4;
  let width;
  gameId = gameId.gameId;
  const coverUrl = gameId.coverUrl;
  ({ width, compact } = gameId);
  ({ name, iconGame } = gameId);
  if (compact === undefined) {
    compact = false;
  }
  let aspectRatio = gameId.aspectRatio;
  if (aspectRatio === undefined) {
    aspectRatio = closure_7;
  }
  let imageWidth = gameId.imageWidth;
  if (imageWidth === undefined) {
    imageWidth = width;
  }
  const pickerInstrumentation = gameId.pickerInstrumentation;
  const onReady = gameId.onReady;
  react = undefined;
  let tmp = closure_11();
  let obj = react;
  const tmp2 = onReady(react.useState(null), 2);
  react = tmp2[1];
  let tmp3 = null == coverUrl || coverUrl === tmp2[0];
  let closure_5 = tmp3;
  let closure_6 = tmp4;
  const items = [coverUrl, tmp4];
  closure_7 = obj.useMemo(function() {
    let interestCoverLoad = null;
    if (closure_6) {
      const self = this;
      const self2 = this;
      interestCoverLoad = new InterestPickerPerformance.InterestCoverLoad(coverUrl);
    }
    return interestCoverLoad;
  }, items);
  const effect = obj.useEffect(() => {
    let num;
    const tmp = closure_5;
    if (tmp) {
      let str = "error";
      if (null == coverUrl) {
        str = "fallback";
      }
      let finishResult;
      const obj = closure_7;
      if (closure_7 != null) {
        finishResult = obj.finish(str);
      }
      if (null != finishResult) {
        if (pickerInstrumentation != null) {
          const performanceTracker = tmp5.performanceTracker;
          if (performanceTracker != null) {
            const obj2 = { game_id: gameId, grid_position: num };
            num = tmp5.gridPosition;
            const settle = performanceTracker.settle;
            if (num == null) {
              num = 0;
            }
            const merged = Object.assign(finishResult);
            settle(obj2);
          }
        }
      }
    }
  });
  let obj2 = { accessible: false, pointerEvents: "none", style: tmp.cover, children: items1 };
  let tmp8 = !tmp3;
  const tmp6 = closure_9;
  const tmp7 = closure_6;
  if (!tmp3) {
    const obj3 = {
      source: obj4,
      style: tmp.image,
      resizeMode: "cover",
      fadeDuration: 0,
      onLoadStart() {
          let startResult;
          const obj = closure_7;
          if (closure_7 != null) {
            startResult = obj.start();
          }
          return startResult;
        },
      onLoad() {
          let num;
          let finishResult;
          const obj = closure_7;
          if (closure_7 != null) {
            finishResult = obj.finish("loaded");
          }
          if (null != finishResult) {
            if (pickerInstrumentation != null) {
              const performanceTracker = tmp2.performanceTracker;
              if (performanceTracker != null) {
                const obj2 = { game_id: gameId, grid_position: num };
                num = tmp2.gridPosition;
                const settle = performanceTracker.settle;
                if (num == null) {
                  num = 0;
                }
                const merged = Object.assign(finishResult);
                settle(obj2);
              }
            }
          }
          if (onReady != null) {
            onReady();
          }
        },
      onError() {
          let num;
          let finishResult;
          const obj = closure_7;
          if (closure_7 != null) {
            finishResult = obj.finish("error");
          }
          if (null != finishResult) {
            if (pickerInstrumentation != null) {
              const performanceTracker = tmp2.performanceTracker;
              if (performanceTracker != null) {
                const obj2 = { game_id: gameId, grid_position: num };
                num = tmp2.gridPosition;
                const settle = performanceTracker.settle;
                if (num == null) {
                  num = 0;
                }
                const merged = Object.assign(finishResult);
                settle(obj2);
              }
            }
          }
          closure_4(coverUrl);
        }
    };
    obj4 = { uri: coverUrl };
    tmp8 = closure_8(coverUrl(pickerInstrumentation[9]), obj3, coverUrl);
  }
  items1 = [tmp8, ];
  if (tmp3) {
    const obj5 = { game: iconGame, gameId, name, width, compact, imageWidth, aspectRatio, onReady };
    tmp3 = closure_8(NoCover, obj5);
  }
  items1[1] = tmp3;
  return tmp6(tmp7, obj2);
}
let react = react_mod;
({ PixelRatio: hasOwnProperty, StyleSheet, View: metroRequire } = react_native);
const TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_6 = nativeDefault.space.PX_6;
const PX_8 = nativeDefault.space.PX_8;
const TextVariantsFlat = TextVariants.TextVariantsFlat;
const found = TextVariantsFlat.find((name) => "body-xs/semibold" === name.name);
let num;
if (found != null) {
  num = found.lineHeight;
}
if (num == null) {
  num = 16;
}
const sum = 2 * num + PX_6 + PX_8;
let c10 = sum;
let createStyles = createStyles_mod;
let obj = { cover: obj2, image: StyleSheet.absoluteFillObject, fallback: obj3, titleOnly: { paddingBottom: 0 }, icon: obj4, texture: obj5, art: rect, banner: rect1 };
obj2 = { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flex: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
obj4 = { borderRadius: nativeDefault.radii.xs };
obj5 = { opacity: useCoverColor.COVER_TEXTURE_OPACITY };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingTop: PX_6, paddingBottom: PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
let closure_11 = createStyles(obj);
createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles((height, width, minHeight, backgroundColor) => {
  let obj;
  let obj3;
  let obj4;
  let obj5;
  if (null == backgroundColor) {
    obj = {};
  } else {
    obj = { backgroundColor };
  }
  const obj2 = { background: obj, art: obj3, image: { width: height, height }, icon: { width, height: width }, banner: { minHeight } };
  obj3 = { height };
  if (null == backgroundColor) {
    obj4 = {};
  } else {
    obj4 = { backgroundColor: obj5.coverArtColor(backgroundColor) };
    obj5 = useCoverColor;
  }
  const merged = Object.assign(obj4);
  return obj2;
});
const result = size.fileFinishedImporting("modules/waterwheels/native/GameCover.tsx");

export default function GameCover(arg0) {
  let game;
  let gridPosition;
  let imageWidth;
  let performanceTracker;
  let rounded;
  let width;
  ({ game, width, imageWidth } = arg0);
  if (imageWidth === undefined) {
    imageWidth = width;
  }
  ({ performanceTracker, gridPosition } = arg0);
  const merged = Object.assign(arg0, Object.assign({ game: 0, width: 0, imageWidth: 0, performanceTracker: 0, gridPosition: 0 }));
  const obj = { pickerInstrumentation: { performanceTracker, gridPosition }, coverUrl: game.getCoverURL(rounded), iconGame: game, width, imageWidth };
  rounded = Math.ceil(imageWidth * hasOwnProperty.get());
  const merged1 = Object.assign(merged);
  ({ id: obj.gameId, name: obj.name } = game);
  return metroImportAll(GameCoverImage, obj);
};
export const BIG_ICON_BANNER_PADDING_TOP = PX_6;
export const BIG_ICON_BANNER_PADDING_BOTTOM = PX_8;
export const BIG_ICON_TITLE_LINES = 2;
export const BIG_ICON_TITLE_AREA_HEIGHT = sum;
export const COVER_TEXTURE_BLUR_RADIUS = 32;
export function GameCoverFromURLs(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroImportAll(GameCoverImage, obj);
}
