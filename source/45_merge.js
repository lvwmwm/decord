// Module ID: 45
// Function ID: 1309
// Name: merge
// Dependencies: [46, 73, 48, 86, 87, 75, 88, 38, 89, 90, 83, 82, 84]

// Module 45 (merge)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function merge(arg0, arg1) {
  let tmp3;
  if (arg1) {
    if (arg0) {
      const keys = Object.keys();
      if (keys !== undefined) {
        let tmp5 = tmp3;
        while (keys[tmp] !== undefined) {
          let tmp12 = tmp6;
          tmp3 = tmp5;
          if (!arg1.hasOwnProperty(tmp6)) {
            continue;
          } else {
            let tmp7 = arg1[tmp6];
            let tmp8 = tmp7;
            if (arg0.hasOwnProperty(tmp6)) {
              let tmp9 = arg0[tmp6];
              let tmp10 = "object" === typeof tmp7 && "object" === typeof tmp9;
              tmp8 = tmp7;
              tmp5 = tmp9;
              if (tmp10) {
                let tmp11 = merge;
                tmp8 = merge(tmp9, tmp7);
                tmp5 = tmp9;
              }
            }
            arg0[tmp6] = tmp8;
            tmp3 = tmp5;
            continue;
          }
          continue;
        }
      }
      return arg0;
    } else {
      return arg1;
    }
  } else {
    return arg0;
  }
}
function getDifferForType(arg0) {
  if ("CATransform3D" === arg0) {
    return require(86) /* matricesDiffer */.default;
  } else {
    if ("CGPoint" !== arg0) {
      if ("Point" !== arg0) {
        if ("CGSize" === arg0) {
          return require(75) /* sizesDiffer */.default;
        } else {
          if ("UIEdgeInsets" !== arg0) {
            if ("EdgeInsets" !== arg0) {
              return null;
            }
          }
          return require(88) /* insetsDiffer */.default;
        }
      }
    }
    return require(87) /* pointsDiffer */.default;
  }
}
function getProcessorForType(arg0) {
  if ("CGColor" !== arg0) {
    if ("UIColor" !== arg0) {
      if ("Color" !== arg0) {
        if ("CGColorArray" !== arg0) {
          if ("UIColorArray" !== arg0) {
            if ("ColorArray" !== arg0) {
              if ("CGImage" !== arg0) {
                if ("UIImage" !== arg0) {
                  if ("RCTImageSource" !== arg0) {
                    if ("ImageSource" !== arg0) {
                      if ("BoxShadowArray" !== arg0) {
                        if ("BoxShadow" !== arg0) {
                          if ("FilterArray" !== arg0) {
                            if ("Filter" !== arg0) {
                              if ("BackgroundImage" === arg0) {
                                return require(84) /* processColorStops */.default;
                              } else {
                                return null;
                              }
                            }
                          }
                          return require(82) /* _getFilterAmount */.default;
                        }
                      }
                      return module(83);
                    }
                  }
                }
              }
              return require(90) /* getSourceCodeScriptURL */.default;
            }
          }
        }
        return require(89) /* processColorElement */.default;
      }
    }
  }
  return require(38) /* processColor */.default;
}
arg5.default = function getNativeComponentAttributes(uiViewClassName) {
  let NativeProps;
  let baseModuleName;
  let bubblingEventTypes;
  let directEventTypes;
  const viewManagerConfig = require(46) /* isFabricReactTag */.default.getViewManagerConfig(uiViewClassName);
  if (null == viewManagerConfig) {
    return null;
  } else {
    ({ baseModuleName, bubblingEventTypes, directEventTypes, NativeProps } = viewManagerConfig);
    if (null == bubblingEventTypes) {
      bubblingEventTypes = {};
    }
    if (null == directEventTypes) {
      directEventTypes = {};
    }
    let tmp3 = directEventTypes;
    let tmp4 = bubblingEventTypes;
    let tmp5 = NativeProps;
    let tmp6 = bubblingEventTypes;
    let tmp7 = directEventTypes;
    let tmp8 = NativeProps;
    while (baseModuleName) {
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let _default2 = require(46) /* isFabricReactTag */.default;
      let viewManagerConfig1 = _default2.getViewManagerConfig(baseModuleName);
      baseModuleName = null;
      let merged = tmp4;
      let merged1 = tmp3;
      let merged2 = tmp5;
      if (viewManagerConfig1) {
        let _Object = Object;
        merged = Object.assign({}, viewManagerConfig1.bubblingEventTypes, tmp4);
        let _Object2 = Object;
        merged1 = Object.assign({}, viewManagerConfig1.directEventTypes, tmp3);
        let _Object3 = Object;
        merged2 = Object.assign({}, viewManagerConfig1.NativeProps, tmp5);
        baseModuleName = viewManagerConfig1.baseModuleName;
      }
      tmp4 = merged;
      tmp3 = merged1;
      tmp5 = merged2;
      tmp6 = merged;
      tmp7 = merged1;
      tmp8 = merged2;
    }
    let obj = {};
    for (const key10046 in tmp8) {
      let tmp27 = key10046;
      let tmp28 = tmp8[key10046];
      let tmp29 = getDifferForType;
      let tmp30 = getDifferForType(tmp28);
      let tmp31 = getProcessorForType;
      let tmp32 = getProcessorForType(tmp28);
      if (null == tmp30) {
        let tmp16 = null == tmp32;
        if (!tmp16) {
          obj = { process: tmp32 };
          tmp16 = obj;
        }
        let obj1 = tmp16;
      } else if (null == tmp32) {
        obj = { diff: tmp30 };
        obj1 = obj;
      } else {
        obj1 = { diff: tmp30, process: tmp32 };
      }
      obj[key10046] = obj1;
      continue;
    }
    obj.style = require(73).default;
    const _Object4 = Object;
    const obj2 = { uiViewClassName, validAttributes: obj, bubblingEventTypes: tmp6, directEventTypes: tmp7 };
    const merged3 = Object.assign(viewManagerConfig, obj2);
    const constants = require(46) /* isFabricReactTag */.default.getConstants();
    if (!constants.ViewManagerNames) {
      if (!constants.LazyViewManagersEnabled) {
        viewManagerConfig.bubblingEventTypes = merge(viewManagerConfig.bubblingEventTypes, constants.genericBubblingEventTypes);
        viewManagerConfig.directEventTypes = merge(viewManagerConfig.directEventTypes, constants.genericDirectEventTypes);
      }
      return viewManagerConfig;
    }
    const _default3 = require(46) /* isFabricReactTag */.default;
    merge(viewManagerConfig, require(48) /* nullthrows */(require(46) /* isFabricReactTag */.default.getDefaultEventTypes)());
    const tmp25 = require(48) /* nullthrows */;
  }
};
