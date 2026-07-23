// Module ID: 8256
// Function ID: 65136
// Name: ProfileFrameLayer
// Dependencies: [31, 27, 8243, 8257, 5512, 33, 4130, 8258, 5085, 8255, 8259, 2]
// Exports: default

// Module 8256 (ProfileFrameLayer)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { useFramePreviewOverrideStore as closure_4 } from "_createForOfIteratorHelperLoose";
import PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_3;
let closure_5;
let closure_6;
function ProfileFrameLayer(skuId) {
  let containerHeight;
  let containerWidth;
  const layer = skuId.layer;
  const overflowTop = skuId.overflowTop;
  const overflowBottom = skuId.overflowBottom;
  const overflowHorizontal = skuId.overflowHorizontal;
  ({ containerWidth, containerHeight } = skuId);
  const tmp = _createForOfIteratorHelperLoose();
  const sum = containerWidth + 2 * overflowHorizontal;
  const tmp3 = layer(overflowTop[7])({ skuId: skuId.skuId, layer, width: sum });
  const assetUrl = tmp3.assetUrl;
  const imageHeight = tmp3.imageHeight;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowBottom.useMemo(() => {
    let obj = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: imageHeight[layer.order] };
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
    tmp5 = containerWidth / containerHeight >= assetUrl;
  }
  if (0 !== imageHeight) {
    if (null != assetUrl) {
      if (!tmp5) {
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              const _Math = Math;
              let obj = {};
              const items1 = [tmp.layer, memo];
              obj.style = items1;
              const _Array = Array;
              obj = { length: Math.ceil(containerHeight / imageHeight) };
              obj.children = Array.from(obj, (arg0, arg1) => {
                obj = { source: obj, resizeMode: "cover", width: closure_4, height: imageHeight };
                obj = { uri: assetUrl };
                return outer1_8(layer(overflowTop[8]), obj, arg1);
              });
              return <overflowHorizontal length={Math.ceil(containerHeight / imageHeight)} />;
            }
          }
          return null;
        } else {
          obj = {};
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          let obj1 = {};
          const obj2 = { uri: assetUrl };
          obj1.source = obj2;
          obj1.resizeMode = "cover";
          obj1.width = sum;
          obj1.height = imageHeight;
          obj.children = jsx(layer(overflowTop[8]), {});
          return <overflowHorizontal />;
        }
      }
    }
  }
  return null;
}
function LiveProfileFrame(frame) {
  let c6;
  let c7;
  let c8;
  let result;
  let profileThemeType;
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  ({ containerHeight: result, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  c6 = undefined;
  c7 = undefined;
  let jsx;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = React.useMemo(() => {
    const layers = frame.layers;
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
      ({ overflowTop: c6, overflowBottom: c7, overflowHorizontal: c8 } = frame(containerWidth[9])(frame, containerWidth));
      const obj = { style: tmp.container, children: memo.map((id) => _undefined(outer1_10, { skuId: frame.skuId, layer: id, overflowTop: c6, overflowBottom: c7, overflowHorizontal: _undefined, containerWidth, containerHeight: result }, id.id)) };
      return <profileThemeType style={tmp.container}>{memo.map((id) => _undefined(outer1_10, { skuId: frame.skuId, layer: id, overflowTop: c6, overflowBottom: c7, overflowHorizontal: _undefined, containerWidth, containerHeight: result }, id.id))}</profileThemeType>;
    }
  }
  return null;
}
({ View: closure_3, StyleSheet } = get_ActivityIndicator);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: closure_5, PROFILE_FRAME_Z_INDEX: closure_6 } = PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO);
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
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default function ProfileFrame(arg0) {
  const tmp = callback((override) => override.override);
  if (null != tmp) {
    let obj = { override: tmp };
    const merged = Object.assign(arg0);
    let tmp7 = jsx(importDefault(8259), { override: tmp });
    const tmp11 = importDefault(8259);
  } else {
    obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = <LiveProfileFrame />;
  }
  return tmp7;
};
