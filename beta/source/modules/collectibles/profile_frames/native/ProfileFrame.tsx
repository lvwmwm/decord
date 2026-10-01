// Module ID: 7666
// Function ID: 7667
// Name: ProfileFrame
// Dependencies: [19, 17, 7648, 7667, 21, 4566, 4836, 7668, 5899, 7669, 4837, 7670, 7671, 2]
// Exports: default

// Module 7666 (ProfileFrame)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import FastImageDefault from "FastImage" /* 5899 */;
import FramePreviewOverrideStore from "FramePreviewOverrideStore" /* 7648 */;
import FramePreviewOverrideFrameDefault from "FramePreviewOverrideFrame" /* 7671 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 7667 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set;

let Easing;
let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
function ProfileFrameLayer(layer) {
  let containerHeight;
  let containerWidth;
  let fade;
  let width;
  layer = layer.layer;
  const overflowTop = layer.overflowTop;
  const overflowBottom = layer.overflowBottom;
  const overflowHorizontal = layer.overflowHorizontal;
  ({ containerWidth, containerHeight, fade } = layer);
  const skuId = layer.skuId;
  const tmp = closure_10();
  const sum = containerWidth + 2 * overflowHorizontal;
  let c5 = sum;
  const tmp5 = overflowTop(overflowBottom[7])({ skuId, layer, width: sum });
  const assetUrl = tmp5.assetUrl;
  const imageHeight = tmp5.imageHeight;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowHorizontal.useMemo(() => {
    let str2;
    let tmp12;
    let tmp14;
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: metroImportDefault[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      const obj = { top: tmp12, bottom: tmp14 };
      const merged = Object.assign(rect);
      tmp12 = undefined;
      if ("top" === layer.anchor) {
        tmp12 = -overflowTop;
      }
      tmp14 = undefined;
      if ("bottom" === layer.anchor) {
        tmp14 = -overflowBottom;
      }
      return obj;
    } else if ("rail" === type) {
      const obj2 = { justifyContent: str2 };
      const merged1 = Object.assign(rect);
      str2 = "center";
      if ("center" !== layer.anchor) {
        let str3 = "flex-end";
        if ("top" === layer.anchor) {
          str3 = "flex-start";
        }
        str2 = str3;
      }
      return obj2;
    } else {
      const obj3 = { left: -tmp };
      const merged2 = Object.assign(rect);
      return obj3;
    }
  }, items);
  let tmp7 = true === layer.responsive;
  if (tmp7) {
    tmp7 = "rail" === layer.type;
  }
  if (tmp7) {
    tmp7 = null != containerHeight;
  }
  if (tmp7) {
    tmp7 = containerWidth / containerHeight >= assetUrl;
  }
  if (0 !== imageHeight) {
    if (null != assetUrl) {
      if (!tmp7) {
        let str2 = "border";
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              let tmp12 = globalThis;
              const _Math = Math;
              let tmp14 = fade;
              const items1 = [tmp.layer, memo];
              const _Array = Array;
              let obj3 = { length: Math.ceil(containerHeight / imageHeight) };
              return <fade style={items1}>{Array.from(obj3, (arg0, arg1) => {
                source = { uri: assetUrl };
                return jsx(FastImageDefault, { source, resizeMode: "cover", width, height: imageHeight, fade }, arg1);
              })}</fade>;
            }
          }
          return null;
        } else {
          const items2 = [tmp.layer, memo];
          size = { source: obj4, resizeMode: "cover", width: sum, height: imageHeight, fade };
          return <fade style={items2}>{null}</fade>;
        }
      }
    }
  }
  return null;
}
function LiveProfileFrame(frame) {
  let c10;
  let c11;
  let c9;
  let containerHeight;
  let items2;
  let overflowBottom;
  let overflowHorizontal;
  let overflowTop;
  let profileThemeType;
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  ({ containerHeight: dependencyMap, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  let sharedValue;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  const tmp = c10();
  let obj = frame(7669);
  let closure_6 = obj.useIsProfileFrameLayerPreloadEnabled("ProfileFrame");
  const obj2 = frame(7668);
  const settled = obj2.usePreloadLayerImages({ frame, containerWidth, profileThemeType, filterLayer }).settled;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = profileThemeType.useMemo(() => {
    const layers = frame.layers;
    return layers.filter((order) => {
      let result = null == frameOrder || tmp === order.order;
      if (result) {
        const obj = frame(dependencyMap[7]);
        result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
      }
      return result;
    });
  }, items);
  let num = 0;
  const useSharedValue = frame(4566).useSharedValue;
  const obj3 = profileThemeType;
  const tmp3 = frame(4566);
  if (settled) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items1 = [settled, sharedValue];
  const effect = obj3.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (settled) {
      const obj = timing;
      num = obj.withTiming(1, obj);
    }
    const result = set(num);
  }, items1);
  if (0 !== memo.length) {
    if (0 !== containerWidth) {
      if (settled) {
        ({ overflowTop: c9, overflowBottom: c10, overflowHorizontal: c11 } = containerWidth(7670)(frame, containerWidth));
        const obj4 = { style: items2, children: memo.map((layer) => <ProfileFrameLayer key={arg0.id} skuId={frame.skuId} layer={arg0} overflowTop={c9} overflowBottom={c10} overflowHorizontal={c11} containerWidth={containerWidth} containerHeight={dependencyMap} fade={!closure_6} />) };
        items2 = [tmp.container, ];
        const obj5 = { opacity: sharedValue };
        items2[1] = obj5;
        containerWidth(7670)(frame, containerWidth);
        const View = containerWidth(4566).View;
        return sharedValue(View, obj4);
      }
    }
  }
  return null;
}
({ View: closure_4, StyleSheet } = react_native);
let closure_5 = FramePreviewOverrideStore.useFramePreviewOverrideStore;
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: metroRequire, PROFILE_FRAME_Z_INDEX: metroImportDefault } = ProfileFrameConstants);
const jsx = Fragment.jsx;
let source = { duration: 150, easing: Easing.in(ReanimatedRexport.Easing.ease) };
Easing = ReanimatedRexport.Easing;
let createStyles = createStyles_mod;
let obj2 = { container: obj3, layer: obj4 };
obj3 = { pointerEvents: "none" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { alignItems: "center", overflow: "hidden" };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj2);
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default function ProfileFrame(arg0) {
  let tmp7;
  const tmp = closure_5((override) => override.override);
  if (null != tmp) {
    FramePreviewOverrideFrameDefault;
    const merged = Object.assign(arg0);
    tmp7 = <tmp11 override={tmp} />;
  } else {
    const merged1 = Object.assign(arg0);
    tmp7 = <LiveProfileFrame />;
  }
  return tmp7;
};
