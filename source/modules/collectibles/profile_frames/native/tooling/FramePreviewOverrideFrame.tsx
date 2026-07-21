// Module ID: 8251
// Function ID: 65091
// Name: OverrideProfileFrameLayer
// Dependencies: []
// Exports: default

// Module 8251 (OverrideProfileFrameLayer)
let StyleSheet;
function OverrideProfileFrameLayer(layer) {
  let containerHeight;
  let containerWidth;
  layer = layer.layer;
  const importDefault = layer;
  const uri = layer.uri;
  const dependencyMap = uri;
  const overflowTop = layer.overflowTop;
  const React = overflowTop;
  const overflowBottom = layer.overflowBottom;
  const overflowHorizontal = layer.overflowHorizontal;
  ({ containerWidth, containerHeight } = layer);
  const tmp = callback();
  const sum = containerWidth + 2 * overflowHorizontal;
  const result = layer.ratio * sum;
  const UserProfileThemeTypes = result;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = React.useMemo(() => {
    let obj = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: sum[closure_0.order] };
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
                let obj = { source: obj, resizeMode: "cover", width: sum, height: result };
                obj = { uri };
                return callback(layer(uri[6]), obj, arg1);
              });
              return <overflowBottom {...obj} />;
            }
          }
          return null;
        } else {
          obj = {};
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          const obj1 = {};
          const obj2 = { uri };
          obj1.source = obj2;
          obj1.resizeMode = "cover";
          obj1.width = sum;
          obj1.height = result;
          obj.children = jsx(importDefault(dependencyMap[6]), obj1);
          return <overflowBottom {...obj} />;
        }
      }
    }
  }
  return null;
}
let closure_2 = importAll(dependencyMap[0]);
({ View: closure_3, StyleSheet } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: closure_4, PROFILE_FRAME_Z_INDEX: closure_5 } = arg1(dependencyMap[2]));
const UserProfileThemeTypes = arg1(dependencyMap[3]).UserProfileThemeTypes;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
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
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx");

export default function FramePreviewOverrideFrame(override) {
  let profileThemeType;
  override = override.override;
  const importDefault = override;
  const containerWidth = override.containerWidth;
  const dependencyMap = containerWidth;
  ({ containerHeight: closure_2, profileThemeType } = override);
  const frameOrder = override.frameOrder;
  const filterLayer = override.filterLayer;
  let closure_6;
  let jsx;
  let callback;
  const items = [override.layers, frameOrder, profileThemeType, filterLayer];
  const memo = React.useMemo(() => {
    const layers = override.layers;
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
      const result = containerWidth / override.innerWidth;
      closure_6 = override.overflowTop * result;
      jsx = override.overflowBottom * result;
      callback = override.overflowHorizontal * result;
      const obj = {
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
              obj.containerHeight = closure_2;
              return closure_7(closure_9, obj, id.id);
            })
      };
      return <profileThemeType {...obj} />;
    }
  }
  return null;
};
