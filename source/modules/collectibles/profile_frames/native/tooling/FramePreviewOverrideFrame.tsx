// Module ID: 8259
// Function ID: 65153
// Name: OverrideProfileFrameLayer
// Dependencies: [31, 27, 8257, 5512, 33, 4130, 5085, 2]
// Exports: default

// Module 8259 (OverrideProfileFrameLayer)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_3;
let closure_4;
let closure_5;
function OverrideProfileFrameLayer(layer) {
  let containerHeight;
  let containerWidth;
  layer = layer.layer;
  const uri = layer.uri;
  const overflowTop = layer.overflowTop;
  const overflowBottom = layer.overflowBottom;
  const overflowHorizontal = layer.overflowHorizontal;
  ({ containerWidth, containerHeight } = layer);
  const tmp = _createForOfIteratorHelperLoose();
  const sum = containerWidth + 2 * overflowHorizontal;
  const result = layer.ratio * sum;
  const UserProfileThemeTypes = result;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowTop.useMemo(() => {
    let obj = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: sum[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      obj = {};
      const merged = Object.assign(obj);
      let tmp14;
      if ("top" === layer.anchor) {
        tmp14 = -overflowTop;
      }
      obj["top"] = tmp14;
      let tmp17;
      if ("bottom" === layer.anchor) {
        tmp17 = -overflowBottom;
      }
      obj["bottom"] = tmp17;
      return obj;
    } else if ("rail" === type) {
      obj = {};
      const merged1 = Object.assign(obj);
      let str3 = "center";
      if ("center" !== layer.anchor) {
        let str4 = "flex-end";
        if ("top" === layer.anchor) {
          str4 = "flex-start";
        }
        str3 = str4;
      }
      obj["justifyContent"] = str3;
      return obj;
    } else {
      const obj1 = {};
      const merged2 = Object.assign(obj);
      obj1["left"] = -overflowHorizontal;
      return obj1;
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
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              const _Math = Math;
              let obj = {};
              const items1 = [tmp.layer, memo];
              obj.style = items1;
              const _Array = Array;
              obj = { length: Math.ceil(containerHeight / result) };
              obj.children = Array.from(obj, (arg0, arg1) => {
                obj = { source: obj, resizeMode: "cover", width: closure_5, height: closure_6 };
                obj = { uri };
                return outer1_7(layer(uri[6]), obj, arg1);
              });
              return <overflowBottom length={Math.ceil(containerHeight / result)} />;
            }
          }
          return null;
        } else {
          obj = {};
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          let obj1 = {};
          const obj2 = { uri };
          obj1.source = obj2;
          obj1.resizeMode = "cover";
          obj1.width = sum;
          obj1.height = result;
          obj.children = jsx(layer(uri[6]), {});
          return <overflowBottom />;
        }
      }
    }
  }
  return null;
}
({ View: closure_3, StyleSheet } = get_ActivityIndicator);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: closure_4, PROFILE_FRAME_Z_INDEX: closure_5 } = PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["pointerEvents"] = "none";
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["alignItems"] = "center";
obj1["overflow"] = "hidden";
_createForOfIteratorHelperLoose.layer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO").fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx");

export default function FramePreviewOverrideFrame(override) {
  let result;
  let profileThemeType;
  override = override.override;
  const containerWidth = override.containerWidth;
  ({ containerHeight: result, profileThemeType } = override);
  const frameOrder = override.frameOrder;
  const filterLayer = override.filterLayer;
  let closure_6;
  let jsx;
  let _createForOfIteratorHelperLoose;
  const items = [override.layers, frameOrder, profileThemeType, filterLayer];
  const memo = React.useMemo(() => {
    const layers = override.layers;
    return layers.filter((order) => {
      let tmp = null == outer1_4;
      if (!tmp) {
        tmp = outer1_4 === order.order;
      }
      if (tmp) {
        let tmp4 = null != outer1_5;
        if (tmp4) {
          tmp4 = !outer1_5(order);
        }
        let tmp6 = !tmp4;
        if (!tmp4) {
          let tmp9 = outer1_3 === constants.PREVIEW;
          if (!tmp9) {
            let tmp10 = "top" === order.anchor;
            if (tmp10) {
              tmp10 = "staple" === order.type;
            }
            tmp9 = tmp10;
          }
          tmp6 = tmp9;
        }
        tmp = tmp6;
      }
      return tmp;
    });
  }, items);
  if (0 !== memo.length) {
    if (0 !== containerWidth) {
      const result = containerWidth / override.innerWidth;
      closure_6 = override.overflowTop * result;
      jsx = override.overflowBottom * result;
      _createForOfIteratorHelperLoose = override.overflowHorizontal * result;
      let obj = {
        style: tmp.container,
        children: memo.map((id) => {
              const obj = { layer: id };
              let uri;
              if (null != override.layerAssetById[id.id]) {
                uri = tmp.uri;
              }
              let tmp5 = null;
              if (null != uri) {
                tmp5 = uri;
              }
              obj.uri = tmp5;
              let ratio;
              if (null != override.layerAssetById[id.id]) {
                ratio = tmp.ratio;
              }
              let num = 0;
              if (null != ratio) {
                num = ratio;
              }
              obj.ratio = num;
              obj.overflowTop = closure_6;
              obj.overflowBottom = closure_7;
              obj.overflowHorizontal = closure_8;
              obj.containerWidth = containerWidth;
              obj.containerHeight = result;
              return closure_7(outer1_9, obj, id.id);
            })
      };
      return <profileThemeType style={tmp.container}>{memo.map((id) => {
        const obj = { layer: id };
        let uri;
        if (null != override.layerAssetById[id.id]) {
          uri = tmp.uri;
        }
        let tmp5 = null;
        if (null != uri) {
          tmp5 = uri;
        }
        obj.uri = tmp5;
        let ratio;
        if (null != override.layerAssetById[id.id]) {
          ratio = tmp.ratio;
        }
        let num = 0;
        if (null != ratio) {
          num = ratio;
        }
        obj.ratio = num;
        obj.overflowTop = closure_6;
        obj.overflowBottom = closure_7;
        obj.overflowHorizontal = closure_8;
        obj.containerWidth = containerWidth;
        obj.containerHeight = result;
        return closure_7(outer1_9, obj, id.id);
      })}</profileThemeType>;
    }
  }
  return null;
};
