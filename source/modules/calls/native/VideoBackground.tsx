// Module ID: 7884
// Function ID: 62760
// Name: useDominantRGBFromImage
// Dependencies: [57, 31, 27, 653, 33, 4130, 22, 7885, 7886, 3974, 689, 1324, 7887, 7892, 7888, 1273, 4554, 2]

// Module 7884 (useDominantRGBFromImage)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "apply";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function useDominantRGBFromImage(arg0, arg1) {
  const _require = arg0;
  let first = arg1;
  let tmp = arg1;
  if (Array.isArray(arg1)) {
    first = arg1[0];
    tmp = first;
  }
  let tmp3 = first(7885)();
  const dependencyMap = tmp3;
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = first(7886).cachedDominantColors[arg0];
  }
  if (null == hexToRgbResult) {
    hexToRgbResult = _require(3974).hexToRgb(first(689).unsafe_rawColors.PRIMARY_800);
    let obj = _require(3974);
  }
  const tmp11 = callback(importAllResult.useState(hexToRgbResult), 2);
  callback = tmp11[1];
  const items = [tmp, arg0, tmp3];
  const effect = importAllResult.useEffect(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null != closure_0;
    }
    if (tmp) {
      if (null == first(first[8]).cachedDominantColors[closure_0]) {
        if ("number" === typeof first) {
          const ImageManager2 = outer1_6.ImageManager;
          let dominantColorsLocalAsset = ImageManager2.getDominantColorsLocalAsset(outer1_7.resolveAssetSource(first));
        } else {
          const ImageManager = outer1_6.ImageManager;
          dominantColorsLocalAsset = ImageManager.getDominantColors(outer1_7.resolveAssetSource(first));
        }
        dominantColorsLocalAsset.then((arg0) => {
          if (outer1_2()) {
            const tmp3 = callback(arg0[0], 3);
            const obj = { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
            outer1_3(obj);
            first(table[8]).cachedDominantColors[outer1_0] = obj;
          }
        }).catch(outer1_9);
        const nextPromise = dominantColorsLocalAsset.then((arg0) => {
          if (outer1_2()) {
            const tmp3 = callback(arg0[0], 3);
            const obj = { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
            outer1_3(obj);
            first(table[8]).cachedDominantColors[outer1_0] = obj;
          }
        });
      } else {
        callback(first(tmp3[8]).cachedDominantColors[closure_0]);
      }
    }
  }, items);
  return tmp11[0];
}
function useDominantColorFromImage(arg0, arg1) {
  const tmp = useDominantRGBFromImage(arg0, arg1);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
}
class VideoBackground {
  constructor(arg0) {
    ({ url, isStageCall } = global);
    if (isStageCall === undefined) {
      isStageCall = false;
    }
    ({ user, guildId } = global);
    renderVideoDetails = global.renderVideoDetails;
    obj = { style: 0, url: 0, isStageCall: 0, avatarStyle: 0, user: 0, guildId: 0, renderVideoDetails: 0 };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    c1 = undefined;
    id = undefined;
    tmp3 = c12();
    tmp4 = f62767(url);
    tmp5 = useDominantColorFromImage(url, tmp4);
    tmp6 = require("useIsMobileVisualRefreshExperimentEnabled")("VideoBackground-native");
    c1 = tmp6;
    id = undefined;
    if (null != user) {
      id = user.id;
    }
    if (null == id) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp8 = require("useDisplayProfile")(id, guildId);
    first = undefined;
    if (null != tmp8) {
      themeColors = tmp8.themeColors;
      if (null != themeColors) {
        first = themeColors[0];
      }
    }
    tmp10 = null;
    if (null != first) {
      tmp10 = first;
    }
    tmp11 = undefined;
    if (null != tmp8) {
      themeColors2 = tmp8.themeColors;
      if (null != themeColors2) {
        num = 1;
        tmp11 = themeColors2[1];
      }
    }
    tmp12 = null;
    if (null != tmp11) {
      tmp12 = tmp11;
    }
    tmp13 = tmp6;
    if (tmp6) {
      tmp13 = null != tmp10;
    }
    if (tmp13) {
      tmp13 = null != tmp12;
    }
    obj2 = require("rgbToHex");
    tmp14 = null;
    if (tmp13) {
      tmp14 = tmp10;
    }
    tmp15 = null;
    if (tmp13) {
      tmp15 = tmp12;
    }
    videoTileGradientColors = obj2.useVideoTileGradientColors(tmp14, tmp15);
    items = [, , ];
    items[0] = tmp6;
    items[1] = id;
    items[2] = guildId;
    effect = defineProperty.useEffect(() => {
      if (tmp) {
        const obj = { guildId, dispatchWait: true };
        _undefined(id[14])(id, undefined, obj);
      }
    }, items);
    if (null == tmp4) {
      return null;
    } else {
      renderVideoDetailsResult = undefined;
      if (null != renderVideoDetails) {
        renderVideoDetailsResult = renderVideoDetails();
      }
      tmp19 = null;
      if (null != renderVideoDetailsResult) {
        tmp19 = renderVideoDetailsResult;
      }
      items1 = [, , , ];
      items1[0] = global.style;
      items1[1] = tmp3.videoBackground;
      tmp20 = null;
      if (!tmp13) {
        obj = {};
        obj.backgroundColor = tmp5;
        tmp20 = obj;
      }
      items1[2] = tmp20;
      videoDetailsSpacer = null;
      if (null != tmp19) {
        videoDetailsSpacer = tmp3.videoDetailsSpacer;
      }
      items1[3] = videoDetailsSpacer;
      tmp22 = null;
      if (isStageCall) {
        tmp22 = null;
        if (!tmp13) {
          obj1 = {};
          obj1.backgroundColor = tmp5;
          tmp22 = obj1;
        }
      }
      tmp23 = jsx;
      tmp24 = guildId;
      tmp25 = id;
      num2 = 15;
      obj2 = {};
      obj2.source = tmp4;
      tmp26 = obj2;
      tmp27 = merged;
      merged1 = Object.assign(merged);
      items2 = [, ];
      items2[0] = global.avatarStyle;
      items2[1] = tmp22;
      str = "avatarStyle";
      obj2["avatarStyle"] = items2;
      str2 = "isStageCall";
      obj2["isStageCall"] = isStageCall;
      tmp29 = jsx(require("Button").Avatar, obj2);
      if (null != videoTileGradientColors) {
        tmp33 = jsxs;
        tmp34 = c1;
        tmp35 = id;
        num3 = 16;
        obj3 = {};
        obj3.colors = videoTileGradientColors;
        obj3.start = { x: 0, y: 0 };
        obj3.end = { x: 0, y: 1 };
        obj3.style = items1;
        items3 = [, ];
        items3[0] = tmp29;
        items3[1] = tmp19;
        obj3.children = items3;
        tmp32 = jsxs(require("LinearGradient"), obj3);
      } else {
        tmp30 = jsxs;
        tmp31 = View;
        obj4 = {};
        obj4.style = items1;
        items4 = [, ];
        items4[0] = tmp29;
        items4[1] = tmp19;
        obj4.children = items4;
        tmp32 = jsxs(View, obj4);
      }
      return tmp32;
    }
  }
}
({ View: closure_5, NativeModules: closure_6, Image: closure_7 } = get_ActivityIndicator);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, NOOP: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ videoBackground: { alignItems: "center" }, videoDetailsSpacer: { paddingTop: 12 } });
const memoizeResult = require("apply").memoize((uri) => {
  let tmp = null;
  if (null != uri) {
    tmp = null;
    if ("" !== uri) {
      let tmp2 = uri;
      if ("number" !== typeof uri) {
        const obj = { uri };
        tmp2 = obj;
      }
      tmp = tmp2;
    }
  }
  return tmp;
});
VideoBackground.AvatarSizes = require("Button").AvatarSizes;
const memoResult = importAllResult.memo(VideoBackground);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/calls/native/VideoBackground.tsx");

export default memoResult;
export const AvatarSizes = require("Button").AvatarSizes;
export const memoizedImageSource = memoizeResult;
export { useDominantRGBFromImage };
export { useDominantColorFromImage };
