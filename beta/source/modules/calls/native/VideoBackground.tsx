// Module ID: 7694
// Function ID: 7695
// Name: VideoBackground
// Dependencies: [32, 19, 17, 1074, 21, 4836, 12, 7695, 7696, 4683, 576, 7697, 1177, 5293, 2]
// Exports: useDominantColorFromImage

// Module 7694 (VideoBackground)
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import VideoBackgroundManagerDefault from "VideoBackgroundManager" /* 7696 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 7697 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp6;
const LinearGradientDefault = tmp6(5293);
function useDominantRGBFromImage(arg0, arg1) {
  let closure_0;
  let closure_2;
  let closure_3;
  let first1;
  _require = arg0;
  let first = arg1;
  let tmp = arg1;
  if (Array.isArray(arg1)) {
    first = arg1[0];
    tmp = first;
  }
  let tmp3 = first;
  let tmp4 = dependencyMap;
  const tmp5 = first(7695)();
  dependencyMap = tmp5;
  let obj = react;
  let hexToRgbResult;
  const useState = react.useState;
  if (null != arg0) {
    hexToRgbResult = tmp3(7696).cachedDominantColors[arg0];
  }
  if (hexToRgbResult == null) {
    const obj2 = require("ColorUtils");
    hexToRgbResult = obj2.hexToRgb(tmp3(576).unsafe_rawColors.PRIMARY_800);
  }
  [first1, _slicedToArray] = useState(hexToRgbResult);
  const items = [tmp, arg0, tmp5];
  const effect = obj.useEffect(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      const tmp4 = importDefault;
      if (null == VideoBackgroundManagerDefault.cachedDominantColors[closure_0]) {
        let dominantColorsLocalAsset;
        if (typeof first === "number") {
          const ImageManager = metroRequire.ImageManager;
          dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(metroImportDefault.resolveAssetSource(tmp));
        } else {
          const ImageManager2 = metroRequire.ImageManager;
          dominantColorsLocalAsset = ImageManager2.getDominantColors(metroImportDefault.resolveAssetSource(tmp));
        }
        const nextPromise = dominantColorsLocalAsset.then((result) => {
          if (closure_1_2()) {
            const obj = { r: null, g: null, b: null };
            [obj.r, obj.g, obj.b] = closure_3(result[0], 3);
            closure_3(result[0], 3);
            closure_1_3(obj);
            first(closure_2[8]).cachedDominantColors[closure_1_0] = obj;
          }
        });
        nextPromise.catch(NOOP);
      } else {
        closure_3(tmp4(7696).cachedDominantColors[tmp6]);
      }
    }
  }, items);
  return first1;
}
class VideoBackground {
  constructor(style) {
    let avatarStyle;
    let guildId;
    let isStageCall;
    let items1;
    let items2;
    let items3;
    let renderVideoDetails;
    let url;
    let user;
    ({ url, isStageCall } = style);
    style = style.style;
    if (isStageCall === undefined) {
      isStageCall = false;
    }
    ({ user, renderVideoDetails } = style);
    ({ avatarStyle, guildId } = style);
    const merged = Object.assign(style, Object.assign({ style: 0, url: 0, isStageCall: 0, avatarStyle: 0, user: 0, guildId: 0, renderVideoDetails: 0 }));
    const tmp2 = closure_11();
    const tmp3 = memoizeResult(url);
    const tmp4 = useDominantRGBFromImage(url, tmp3);
    const combined = "rgb(" + tmp4.r + ", " + tmp4.g + ", " + tmp4.b + ")";
    let id;
    const tmp8 = useProfileTileGradientDefault;
    if (user != null) {
      id = user.id;
    }
    const tmp8Result = tmp8({ userId: id, guildId, location: "VideoBackground-native" });
    if (null == tmp3) {
      return null;
    } else {
      let tmp24;
      let renderVideoDetailsResult;
      if (renderVideoDetails != null) {
        renderVideoDetailsResult = renderVideoDetails();
      }
      if (renderVideoDetailsResult == null) {
        renderVideoDetailsResult = null;
      }
      const items = [style, tmp2.videoBackground, , ];
      let tmp13 = null;
      if (null == tmp8Result) {
        tmp13 = { backgroundColor: combined };
        const obj = { backgroundColor: combined };
      }
      items[2] = tmp13;
      let videoDetailsSpacer = null;
      if (null != renderVideoDetailsResult) {
        videoDetailsSpacer = tmp2.videoDetailsSpacer;
      }
      items[3] = videoDetailsSpacer;
      let tmp15 = null;
      if (isStageCall) {
        tmp15 = null;
        if (null == tmp8Result) {
          tmp15 = { backgroundColor: combined };
          const obj2 = { backgroundColor: combined };
        }
      }
      const obj3 = { source: tmp3, avatarStyle: items1, isStageCall };
      const Avatar = native.Avatar;
      const merged1 = Object.assign(merged);
      items1 = [avatarStyle, tmp15];
      const tmp21 = React4(Avatar, obj3);
      if (null != tmp8Result) {
        const obj4 = { colors: tmp8Result, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: items, children: items2 };
        items2 = [tmp21, renderVideoDetailsResult];
        tmp24 = authStore(LinearGradientDefault, obj4);
      } else {
        const obj5 = { style: items, children: items3 };
        items3 = [tmp21, renderVideoDetailsResult];
        tmp24 = authStore(hasOwnProperty, obj5);
      }
      return tmp24;
    }
  }
}
({ View: hasOwnProperty, NativeModules: metroRequire, Image: metroImportDefault } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c9, jsxs: c10 } = Fragment);
const unpackModuleId = createStyles.createStyles({ videoBackground: { alignItems: "center" }, videoDetailsSpacer: { paddingTop: 12 } });
const memoizeResult = module_12.memoize((uri) => {
  let tmp = null;
  if (null != uri) {
    tmp = null;
    if ("" !== uri) {
      let tmp2 = uri;
      if (typeof uri !== "number") {
        tmp2 = { uri };
        const obj = { uri };
      }
      tmp = tmp2;
    }
  }
  return tmp;
});
VideoBackground.AvatarSizes = native.AvatarSizes;
const memoResult = react.memo(VideoBackground);
const result = size.fileFinishedImporting("modules/calls/native/VideoBackground.tsx");

export default memoResult;
export const AvatarSizes = native.AvatarSizes;
export const memoizedImageSource = memoizeResult;
export { useDominantRGBFromImage };
export const useDominantColorFromImage = function useDominantColorFromImage(arg0, arg1) {
  const tmp = useDominantRGBFromImage(arg0, arg1);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
};
