// Module ID: 7877
// Function ID: 62700
// Name: useDominantRGBFromImage
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0]

// Module 7877 (useDominantRGBFromImage)
import closure_3 from "__exportStarResult1";
import importAllResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import importDefaultResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function useDominantRGBFromImage(arg0, arg1) {
  arg1 = arg0;
  let importDefault = arg1;
  let tmp = arg1;
  if (Array.isArray(arg1)) {
    const first = arg1[0];
    importDefault = first;
    tmp = first;
  }
  const tmp3 = importDefault(dependencyMap[7])();
  const dependencyMap = tmp3;
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = importDefault(dependencyMap[8]).cachedDominantColors[arg0];
  }
  if (null == hexToRgbResult) {
    hexToRgbResult = arg1(dependencyMap[9]).hexToRgb(importDefault(dependencyMap[10]).unsafe_rawColors.PRIMARY_800);
    const obj = arg1(dependencyMap[9]);
  }
  const tmp11 = callback(importAllResult.useState(hexToRgbResult), 2);
  const callback = tmp11[1];
  const items = [tmp, arg0, tmp3];
  const effect = importAllResult.useEffect(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null != arg0;
    }
    if (tmp) {
      if (null == first(first[8]).cachedDominantColors[closure_0]) {
        if ("number" === typeof first) {
          const ImageManager2 = closure_6.ImageManager;
          let dominantColorsLocalAsset = ImageManager2.getDominantColorsLocalAsset(closure_7.resolveAssetSource(first));
        } else {
          const ImageManager = closure_6.ImageManager;
          dominantColorsLocalAsset = ImageManager.getDominantColors(closure_7.resolveAssetSource(first));
        }
        dominantColorsLocalAsset.then((arg0) => {
          if (callback2()) {
            const tmp3 = callback3(arg0[0], 3);
            const obj = { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
            callback3(obj);
            callback(callback2[8]).cachedDominantColors[closure_0] = obj;
          }
        }).catch(closure_9);
        const nextPromise = dominantColorsLocalAsset.then((arg0) => {
          if (callback2()) {
            const tmp3 = callback3(arg0[0], 3);
            const obj = { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
            callback3(obj);
            callback(callback2[8]).cachedDominantColors[closure_0] = obj;
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
    arg1 = guildId;
    renderVideoDetails = global.renderVideoDetails;
    obj = { y: null, sparkling_heart: null, y: null, commandsDisabled: null, renderEmbeds: null, inlineEmbedMedia: null, inlineAttachmentMedia: null };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    closure_1 = undefined;
    dependencyMap = undefined;
    tmp3 = closure_12();
    tmp4 = f62707(url);
    tmp5 = useDominantColorFromImage(url, tmp4);
    tmp6 = require("__exportStarResult1")("VideoBackground-native");
    closure_1 = tmp6;
    id = undefined;
    if (null != user) {
      id = user.id;
    }
    if (null == id) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    dependencyMap = id;
    tmp8 = require("__exportStarResult1")(id, guildId);
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
    obj2 = require("__exportStarResult1");
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
        const tmp6 = tmp6(id[14])(id, undefined, obj);
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
      tmp24 = arg1;
      tmp25 = dependencyMap;
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
      tmp29 = jsx(require("__exportStarResult1").Avatar, obj2);
      if (null != videoTileGradientColors) {
        tmp33 = jsxs;
        tmp34 = closure_1;
        tmp35 = dependencyMap;
        num3 = 16;
        obj3 = {};
        obj3.colors = videoTileGradientColors;
        obj3.start = { max: -536870861, guildId: -299892737 };
        obj3.end = {};
        obj3.style = items1;
        items3 = [, ];
        items3[0] = tmp29;
        items3[1] = tmp19;
        obj3.children = items3;
        tmp32 = jsxs(closure_1(dependencyMap[16]), obj3);
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
({ View: closure_5, NativeModules: closure_6, Image: closure_7 } = __exportStarResult1);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, NOOP: closure_9 } = __exportStarResult1);
({ jsx: closure_10, jsxs: closure_11 } = __exportStarResult1);
let closure_12 = __exportStarResult1.createStyles({ videoBackground: { alignItems: "center" }, videoDetailsSpacer: { paddingTop: 12 } });
const memoizeResult = require("__exportStarResult1").memoize((uri) => {
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
VideoBackground.AvatarSizes = require("__exportStarResult1").AvatarSizes;
const result = __exportStarResult1.fileFinishedImporting("modules/calls/native/VideoBackground.tsx");

export default importAllResult.memo(VideoBackground);
export const AvatarSizes = require("__exportStarResult1").AvatarSizes;
export const memoizedImageSource = memoizeResult;
export { useDominantRGBFromImage };
export { useDominantColorFromImage };
