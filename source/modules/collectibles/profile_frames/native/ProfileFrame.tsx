// Module ID: 8249
// Function ID: 65087
// Name: ProfileFrameLayer
// Dependencies: []
// Exports: default

// Module 8249 (ProfileFrameLayer)
let StyleSheet;
function ProfileFrameLayer(skuId) {
  let containerHeight;
  let containerWidth;
  const layer = skuId.layer;
  const importDefault = layer;
  const overflowTop = skuId.overflowTop;
  const dependencyMap = overflowTop;
  const overflowBottom = skuId.overflowBottom;
  const React = overflowBottom;
  const overflowHorizontal = skuId.overflowHorizontal;
  ({ containerWidth, containerHeight } = skuId);
  const tmp = callback2();
  const sum = containerWidth + 2 * overflowHorizontal;
  let closure_4 = sum;
  const tmp3 = importDefault(dependencyMap[7])({ skuId: skuId.skuId, layer, width: sum });
  const assetUrl = tmp3.assetUrl;
  const imageHeight = tmp3.imageHeight;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = React.useMemo(() => {
    let obj = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: imageHeight[closure_0.order] };
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
                let obj = { source: obj, resizeMode: "cover", width: sum, height: imageHeight };
                obj = { uri: assetUrl };
                return callback(layer(overflowTop[8]), obj, arg1);
              });
              return <overflowHorizontal {...obj} />;
            }
          }
          return null;
        } else {
          obj = {};
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          const obj1 = {};
          const obj2 = { uri: assetUrl };
          obj1.source = obj2;
          obj1.resizeMode = "cover";
          obj1.width = sum;
          obj1.height = imageHeight;
          obj.children = jsx(importDefault(dependencyMap[8]), obj1);
          return <overflowHorizontal {...obj} />;
        }
      }
    }
  }
  return null;
}
function LiveProfileFrame(frame) {
  let profileThemeType;
  frame = frame.frame;
  const importDefault = frame;
  const containerWidth = frame.containerWidth;
  const dependencyMap = containerWidth;
  ({ containerHeight: closure_2, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  let closure_4 = frameOrder;
  const filterLayer = frame.filterLayer;
  let closure_6;
  let closure_7;
  let jsx;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = React.useMemo(() => {
    const layers = frame.layers;
    return layers.filter((order) => {
      let tmp = null == closure_4;
      if (!tmp) {
        tmp = closure_4 === order.order;
      }
      if (tmp) {
        let tmp4 = null != callback;
        if (tmp4) {
          tmp4 = !callback(order);
        }
        let tmp6 = !tmp4;
        if (!tmp4) {
          let tmp9 = closure_3 === constants.PREVIEW;
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
      ({ overflowTop: closure_6, overflowBottom: closure_7, overflowHorizontal: closure_8 } = importDefault(dependencyMap[9])(frame, containerWidth));
      const obj = { style: tmp.container, children: memo.map((id) => _undefined(closure_10, { skuId: frame.skuId, layer: id, overflowTop: closure_6, overflowBottom: closure_7, overflowHorizontal: _undefined, containerWidth, containerHeight: closure_2 }, id.id)) };
      return <profileThemeType {...obj} />;
    }
  }
  return null;
}
let closure_2 = importAll(dependencyMap[0]);
({ View: closure_3, StyleSheet } = arg1(dependencyMap[1]));
let closure_4 = arg1(dependencyMap[2]).useFramePreviewOverrideStore;
const tmp2 = arg1(dependencyMap[1]);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: closure_5, PROFILE_FRAME_Z_INDEX: closure_6 } = arg1(dependencyMap[3]));
const UserProfileThemeTypes = arg1(dependencyMap[4]).UserProfileThemeTypes;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["pointerEvents"] = "none";
obj.container = obj;
const obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["alignItems"] = "center";
obj1["overflow"] = "hidden";
obj.layer = obj1;
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default function ProfileFrame(arg0) {
  const tmp = callback((override) => override.override);
  if (null != tmp) {
    let obj = { override: tmp };
    const merged = Object.assign(arg0);
    let tmp7 = jsx(importDefault(dependencyMap[10]), obj);
    const tmp11 = importDefault(dependencyMap[10]);
  } else {
    obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = <LiveProfileFrame {...obj} />;
  }
  return tmp7;
};
