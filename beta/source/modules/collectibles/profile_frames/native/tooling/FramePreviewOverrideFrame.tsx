// Module ID: 7671
// Function ID: 7672
// Name: FramePreviewOverrideFrame
// Dependencies: [19, 17, 7667, 6629, 21, 4836, 5899, 2]
// Exports: default

// Module 7671 (FramePreviewOverrideFrame)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import Constants from "Constants" /* 6629 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 7667 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function OverrideProfileFrameLayer(layer) {
  let containerHeight;
  let containerWidth;
  let height;
  let width;
  layer = layer.layer;
  const uri = layer.uri;
  const overflowTop = layer.overflowTop;
  const overflowBottom = layer.overflowBottom;
  const overflowHorizontal = layer.overflowHorizontal;
  ({ containerWidth, containerHeight } = layer);
  const ratio = layer.ratio;
  const tmp = closure_8();
  const sum = containerWidth + 2 * overflowHorizontal;
  let c5 = sum;
  const result = ratio * sum;
  let c6 = result;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowTop.useMemo(() => {
    let str2;
    let tmp12;
    let tmp14;
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: hasOwnProperty[layer.order] };
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
  let tmp5 = true === layer.responsive;
  if (tmp5) {
    tmp5 = "rail" === layer.type;
  }
  if (tmp5) {
    tmp5 = null != containerHeight;
  }
  if (tmp5) {
    tmp5 = containerWidth / containerHeight >= overflowHorizontal;
  }
  if (0 !== result) {
    if (null != uri) {
      if (!tmp5) {
        let str2 = "border";
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              let tmp12 = globalThis;
              const _Math = Math;
              let tmp14 = overflowBottom;
              const items1 = [tmp.layer, memo];
              const _Array = Array;
              let obj3 = { length: Math.ceil(containerHeight / result) };
              return <overflowBottom style={items1}>{Array.from(obj3, (arg0, arg1) => {
                const obj = { uri };
                return jsx(FastImageDefault, { source: obj, resizeMode: "cover", width, height }, arg1);
              })}</overflowBottom>;
            }
          }
          return null;
        } else {
          const items2 = [tmp.layer, memo];
          size = { source: obj4, resizeMode: "cover", width: sum, height: result };
          return <overflowBottom style={items2}>{null}</overflowBottom>;
        }
      }
    }
  }
  return null;
}
({ View: c3, StyleSheet } = react_native);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: closure_4, PROFILE_FRAME_Z_INDEX: hasOwnProperty } = ProfileFrameConstants);
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
let jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, layer: obj3 };
obj2 = { pointerEvents: "none" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { alignItems: "center", overflow: "hidden" };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx");

export default function FramePreviewOverrideFrame(override) {
  let containerHeight;
  let overflowBottom;
  let profileThemeType;
  override = override.override;
  const containerWidth = override.containerWidth;
  ({ containerHeight: react, profileThemeType } = override);
  const frameOrder = override.frameOrder;
  const filterLayer = override.filterLayer;
  let overflowTop;
  jsx = undefined;
  let overflowHorizontal;
  const items = [override.layers, frameOrder, profileThemeType, filterLayer];
  const tmp = overflowHorizontal();
  const memo = react.useMemo(() => {
    const layers = override.layers;
    return layers.filter((order) => {
      let tmp2 = null == frameOrder || tmp === order.order;
      if (tmp2) {
        let tmp5 = !(null != filterLayer && !tmp3(order));
        const tmp4 = null != filterLayer && !tmp3(order);
        if (tmp5) {
          let tmp8 = profileThemeType === constants.PREVIEW;
          if (!tmp8) {
            tmp8 = "top" === order.anchor && "staple" === order.type;
            const tmp9 = "top" === order.anchor && "staple" === order.type;
          }
          tmp5 = tmp8;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    });
  }, items);
  if (0 !== memo.length) {
    if (0 !== containerWidth) {
      const result = containerWidth / override.innerWidth;
      overflowTop = override.overflowTop * result;
      jsx = override.overflowBottom * result;
      overflowHorizontal = override.overflowHorizontal * result;
      let tmp3 = jsx;
      let tmp4 = profileThemeType;
      return <profileThemeType style={tmp.container}>{memo.map((layer) => {
        let num;
        let uri;
        const obj = { layer, uri, ratio: num, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight: react };
        uri = undefined;
        const tmp2 = jsx;
        const tmp3 = OverrideProfileFrameLayer;
        if (override.layerAssetById[layer.id] != null) {
          uri = tmp.uri;
        }
        if (uri == null) {
          uri = null;
        }
        num = undefined;
        if (override.layerAssetById[layer.id] != null) {
          num = tmp.ratio;
        }
        if (num == null) {
          num = 0;
        }
        return tmp2(tmp3, obj, layer.id);
      })}</profileThemeType>;
    }
  }
  return null;
};
