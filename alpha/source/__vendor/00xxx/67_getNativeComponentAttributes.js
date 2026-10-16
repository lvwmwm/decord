// Module ID: 67
// Function ID: 68
// Name: getNativeComponentAttributes
// Dependencies: [68, 26, 70, 77, 78, 64, 79, 50, 80, 81, 55, 54, 56, 58, 59, 57]
// Exports: default

// Module 67 (getNativeComponentAttributes)
import _mod26 from "module_26" /* 26 */;
import processColor from "processColor" /* 50 */;
import processFilter from "processFilter" /* 54 */;
import processBoxShadowDefault from "processBoxShadow" /* 55 */;
import processBackgroundImage from "processBackgroundImage" /* 56 */;
import processBackgroundSize from "processBackgroundSize" /* 57 */;
import processBackgroundPosition from "processBackgroundPosition" /* 58 */;
import processBackgroundRepeat from "processBackgroundRepeat" /* 59 */;
import sizesDiffer from "sizesDiffer" /* 64 */;
import _mod68 from "module_68" /* 68 */;
import nullthrows from "nullthrows" /* 70 */;
import matricesDiffer from "matricesDiffer" /* 77 */;
import pointsDiffer from "pointsDiffer" /* 78 */;
import insetsDiffer from "insetsDiffer" /* 79 */;
import processColorArray from "processColorArray" /* 80 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;

let constants;

function merge(arg0, obj) {
  const tmp = obj;
  if (tmp) {
    if (arg0) {
      for (const key10005 in obj) {
        if (!obj.hasOwnProperty(key10005)) {
          continue;
        } else {
          let tmp3 = obj[key10005];
          let tmp4 = tmp3;
          if (arg0.hasOwnProperty(key10005)) {
            let tmp5 = arg0[key10005];
            let tmp6 = typeof tmp3 === "object" && typeof tmp5 === "object";
            tmp4 = tmp3;
            if (tmp6) {
              tmp4 = merge(tmp5, tmp3);
            }
          }
          arg0[key10005] = tmp4;
          continue;
        }
        continue;
      }
      return arg0;
    } else {
      return obj;
    }
  } else {
    return arg0;
  }
}
let num = global.RN$discordUiManagerOptimization;
if (num == null) {
  num = 0;
}
let closure_4 = 2 === num;

export default function getNativeComponentAttributes(uiViewClassName) {
  let NativeProps;
  let baseModuleName;
  let baseModuleName1;
  let bubblingEventTypes;
  let directEventTypes;
  const _default = _mod68.default;
  const viewManagerConfig = _default.getViewManagerConfig(uiViewClassName);
  if (null == viewManagerConfig) {
    return null;
  } else {
    ({ baseModuleName, bubblingEventTypes, directEventTypes, NativeProps } = viewManagerConfig);
    if (bubblingEventTypes == null) {
      bubblingEventTypes = {};
    }
    if (directEventTypes == null) {
      directEventTypes = {};
    }
    let tmp3 = directEventTypes;
    let tmp4 = NativeProps;
    let tmp5 = bubblingEventTypes;
    let tmp6 = NativeProps;
    let tmp7 = directEventTypes;
    let tmp8 = bubblingEventTypes;
    if (baseModuleName) {
      do {
        let _default2 = _mod68.default;
        let viewManagerConfig1 = _default2.getViewManagerConfig(baseModuleName);
        let tmp15 = tmp4;
        let tmp16 = tmp3;
        let tmp17 = tmp5;
        baseModuleName1 = null;
        if (viewManagerConfig1) {
          let obj = {};
          let merged = Object.assign(viewManagerConfig1.bubblingEventTypes);
          let merged1 = Object.assign(tmp14);
          let obj2 = {};
          let merged2 = Object.assign(viewManagerConfig1.directEventTypes);
          let merged3 = Object.assign(tmp13);
          let obj3 = {};
          let merged4 = Object.assign(viewManagerConfig1.NativeProps);
          let merged5 = Object.assign(tmp12);
          baseModuleName1 = viewManagerConfig1.baseModuleName;
          tmp15 = obj3;
          tmp16 = obj2;
          tmp17 = obj;
        }
        tmp4 = tmp15;
        tmp3 = tmp16;
        tmp5 = tmp17;
        baseModuleName = baseModuleName1;
        tmp6 = tmp15;
        tmp7 = tmp16;
        tmp8 = tmp17;
      } while (baseModuleName1);
    }
    const obj4 = { style: _mod26.default };
    for (const key10063 in tmp6) {
      let _default1;
      let tmp66;
      let tmp67;
      let obj5;
      let obj7;
      let obj6;
      let tmp63;
      let tmp60;
      let tmp55;
      let tmp131 = tmp6[key10063];
      if ("CATransform3D" === tmp131) {
        _default1 = matricesDiffer.default;
      } else {
        if ("CGPoint" !== tmp131) {
          if ("Point" !== tmp131) {
            if ("CGSize" === tmp131) {
              _default1 = sizesDiffer.default;
            } else if ("UIEdgeInsets" === tmp131) {
              _default1 = insetsDiffer.default;
            } else {
              _default1 = null;
            }
          }
        }
        _default1 = pointsDiffer.default;
      }
      let _default5 = null;
      switch (tmp131) {
        case "CGColor":
        {
          tmp66 = processColor;
          _default5 = tmp66.default;
          if (null == _default1) {
            tmp67 = null == _default5;
            if (!tmp67) {
              obj5 = { process: _default5 };
              tmp67 = obj5;
            }
            obj7 = tmp67;
          } else if (null == _default5) {
            obj6 = { diff: _default1 };
            obj7 = obj6;
          } else {
            obj7 = { diff: _default1, process: _default5 };
          }
          obj4[key10063] = obj7;
          continue;
          break;
        }
        case "UIColor":
        {
          tmp66 = processColor;
          _default5 = tmp66.default;
          if (null == _default1) {
            tmp67 = null == _default5;
            if (!tmp67) {
              obj5 = { process: _default5 };
              tmp67 = obj5;
            }
            obj7 = tmp67;
          } else if (null == _default5) {
            obj6 = { diff: _default1 };
            obj7 = obj6;
          } else {
            obj7 = { diff: _default1, process: _default5 };
          }
          obj4[key10063] = obj7;
          continue;
          break;
        }
        case "Color":
        {
          tmp66 = processColor;
          _default5 = tmp66.default;
          if (null == _default1) {
            tmp67 = null == _default5;
            if (!tmp67) {
              obj5 = { process: _default5 };
              tmp67 = obj5;
            }
            obj7 = tmp67;
          } else if (null == _default5) {
            obj6 = { diff: _default1 };
            obj7 = obj6;
          } else {
            obj7 = { diff: _default1, process: _default5 };
          }
          obj4[key10063] = obj7;
          continue;
          break;
        }
        case "CGColorArray":
        {
          tmp63 = processColorArray;
          _default5 = tmp63.default;
          break;
        }
        case "UIColorArray":
        {
          tmp63 = processColorArray;
          _default5 = tmp63.default;
          break;
        }
        case "ColorArray":
        {
          tmp63 = processColorArray;
          _default5 = tmp63.default;
          break;
        }
        case "CGImage":
        {
          tmp60 = resolveAssetSource;
          _default5 = tmp60.default;
          break;
        }
        case "UIImage":
        {
          tmp60 = resolveAssetSource;
          _default5 = tmp60.default;
          break;
        }
        case "RCTImageSource":
        {
          tmp60 = resolveAssetSource;
          _default5 = tmp60.default;
          break;
        }
        case "ImageSource":
        {
          tmp60 = resolveAssetSource;
          _default5 = tmp60.default;
          break;
        }
        case "BoxShadowArray":
        {
          _default5 = processBoxShadowDefault;
          break;
        }
        case "BoxShadow":
        {
          _default5 = processBoxShadowDefault;
          break;
        }
        case "FilterArray":
        {
          tmp55 = processFilter;
          _default5 = tmp55.default;
          break;
        }
        case "Filter":
        {
          tmp55 = processFilter;
          _default5 = tmp55.default;
          break;
        }
        case "BackgroundImage":
        {
          _default5 = processBackgroundImage.default;
          break;
        }
        case "BackgroundPosition":
        {
          _default5 = processBackgroundPosition.default;
          break;
        }
        case "BackgroundRepeat":
        {
          _default5 = processBackgroundRepeat.default;
          break;
        }
        case "BackgroundSize":
        {
          _default5 = processBackgroundSize.default;
          break;
        }
      }
    }
    const _Object = Object;
    const obj8 = { uiViewClassName, validAttributes: obj4, bubblingEventTypes: tmp8, directEventTypes: tmp7 };
    const merged6 = Object.assign(viewManagerConfig, obj8);
    if (true === global.RN$Bridgeless) {
      const tmp73 = closure_4;
      if (tmp73) {
        if (null != _mod68.default.getDefaultEventTypes) {
          const _default4 = _mod68.default;
          const defaultEventTypes = _default4.getDefaultEventTypes();
          if (defaultEventTypes) {
            if (viewManagerConfig) {
              for (const key10231 in defaultEventTypes) {
                if (!defaultEventTypes.hasOwnProperty(key10231)) {
                  continue;
                } else {
                  let obj18 = defaultEventTypes[key10231];
                  let tmp119 = obj18;
                  if (viewManagerConfig.hasOwnProperty(key10231)) {
                    let obj19 = viewManagerConfig[key10231];
                    let tmp120 = typeof obj18 === "object" && typeof obj19 === "object";
                    tmp119 = obj18;
                    if (tmp120) {
                      let tmp121 = obj19;
                      if (obj18) {
                        tmp121 = obj18;
                        if (obj19) {
                          tmp121 = obj19;
                          let keys = Object.keys();
                          if (keys !== undefined) {
                            tmp121 = obj19;
                            let tmp124 = keys[tmp];
                            while (tmp124 !== undefined) {
                              if (!obj18.hasOwnProperty(tmp124)) {
                                continue;
                              } else {
                                let tmp125 = obj18[tmp124];
                                let tmp126 = tmp125;
                                if (obj19.hasOwnProperty(tmp124)) {
                                  let tmp127 = obj19[tmp124];
                                  let tmp128 = typeof tmp125 === "object" && typeof tmp127 === "object";
                                  tmp126 = tmp125;
                                  if (tmp128) {
                                    tmp126 = merge(tmp127, tmp125);
                                  }
                                }
                                obj19[tmp124] = tmp126;
                                continue;
                              }
                              continue;
                            }
                          }
                        }
                      }
                      tmp119 = tmp121;
                    }
                  }
                  viewManagerConfig[key10231] = tmp119;
                  continue;
                }
                continue;
              }
            }
          }
        }
        return viewManagerConfig;
      }
    }
    const _default3 = _mod68.default;
    constants = _default3.getConstants();
    if (!constants.ViewManagerNames) {
      if (!constants.LazyViewManagersEnabled) {
        const bubblingEventTypes2 = viewManagerConfig.bubblingEventTypes;
        const genericBubblingEventTypes = constants.genericBubblingEventTypes;
        let tmp75 = bubblingEventTypes2;
        if (genericBubblingEventTypes) {
          tmp75 = genericBubblingEventTypes;
          if (bubblingEventTypes2) {
            tmp75 = bubblingEventTypes2;
            const keys1 = Object.keys();
            if (keys1 !== undefined) {
              tmp75 = bubblingEventTypes2;
              while (keys1[tmp2] !== undefined) {
                if (!genericBubblingEventTypes.hasOwnProperty(tmp78)) {
                  continue;
                } else {
                  let obj10 = genericBubblingEventTypes[tmp78];
                  let tmp79 = obj10;
                  if (bubblingEventTypes2.hasOwnProperty(tmp78)) {
                    let obj11 = bubblingEventTypes2[tmp78];
                    let tmp80 = typeof obj10 === "object";
                    if (typeof obj10 === "object") {
                      tmp80 = typeof obj11 === "object";
                    }
                    tmp79 = obj10;
                    if (tmp80) {
                      let tmp81 = obj11;
                      if (obj10) {
                        tmp81 = obj10;
                        if (obj11) {
                          tmp81 = obj11;
                          let keys2 = Object.keys();
                          if (keys2 !== undefined) {
                            tmp81 = obj11;
                            let tmp84 = keys2[tmp];
                            while (tmp84 !== undefined) {
                              if (!obj10.hasOwnProperty(tmp84)) {
                                continue;
                              } else {
                                let tmp85 = obj10[tmp84];
                                let tmp86 = tmp85;
                                if (obj11.hasOwnProperty(tmp84)) {
                                  let tmp87 = obj11[tmp84];
                                  let tmp88 = typeof tmp85 === "object";
                                  if (typeof tmp85 === "object") {
                                    tmp88 = typeof tmp87 === "object";
                                  }
                                  tmp86 = tmp85;
                                  if (tmp88) {
                                    tmp86 = merge(tmp87, tmp85);
                                  }
                                }
                                obj11[tmp84] = tmp86;
                                continue;
                              }
                              continue;
                            }
                          }
                        }
                      }
                      tmp79 = tmp81;
                    }
                  }
                  bubblingEventTypes2[tmp78] = tmp79;
                  continue;
                }
                continue;
              }
            }
          }
        }
        viewManagerConfig.bubblingEventTypes = tmp75;
        const directEventTypes2 = viewManagerConfig.directEventTypes;
        const genericDirectEventTypes = constants.genericDirectEventTypes;
        let tmp90 = directEventTypes2;
        if (genericDirectEventTypes) {
          tmp90 = genericDirectEventTypes;
          if (directEventTypes2) {
            tmp90 = directEventTypes2;
            const keys3 = Object.keys();
            if (keys3 !== undefined) {
              tmp90 = directEventTypes2;
              while (keys3[tmp2] !== undefined) {
                if (!genericDirectEventTypes.hasOwnProperty(tmp93)) {
                  continue;
                } else {
                  let obj12 = genericDirectEventTypes[tmp93];
                  let tmp94 = obj12;
                  if (directEventTypes2.hasOwnProperty(tmp93)) {
                    let obj13 = directEventTypes2[tmp93];
                    let tmp95 = typeof obj12 === "object";
                    if (typeof obj12 === "object") {
                      tmp95 = typeof obj13 === "object";
                    }
                    tmp94 = obj12;
                    if (tmp95) {
                      let tmp96 = obj13;
                      if (obj12) {
                        tmp96 = obj12;
                        if (obj13) {
                          tmp96 = obj13;
                          let keys4 = Object.keys();
                          if (keys4 !== undefined) {
                            tmp96 = obj13;
                            let tmp99 = keys4[tmp];
                            while (tmp99 !== undefined) {
                              if (!obj12.hasOwnProperty(tmp99)) {
                                continue;
                              } else {
                                let tmp100 = obj12[tmp99];
                                let tmp101 = tmp100;
                                if (obj13.hasOwnProperty(tmp99)) {
                                  let tmp102 = obj13[tmp99];
                                  let tmp103 = typeof tmp100 === "object";
                                  if (typeof tmp100 === "object") {
                                    tmp103 = typeof tmp102 === "object";
                                  }
                                  tmp101 = tmp100;
                                  if (tmp103) {
                                    tmp101 = merge(tmp102, tmp100);
                                  }
                                }
                                obj13[tmp99] = tmp101;
                                continue;
                              }
                              continue;
                            }
                          }
                        }
                      }
                      tmp94 = tmp96;
                    }
                  }
                  directEventTypes2[tmp93] = tmp94;
                  continue;
                }
                continue;
              }
            }
          }
        }
        viewManagerConfig.directEventTypes = tmp90;
      }
    }
    const tmp68Result = nullthrows;
    const obj14 = tmp68Result(_mod68.default.getDefaultEventTypes)();
    if (obj14) {
      if (viewManagerConfig) {
        for (const key10205 in obj14) {
          if (!obj14.hasOwnProperty(key10205)) {
            continue;
          } else {
            let obj15 = obj14[key10205];
            let tmp107 = obj15;
            if (viewManagerConfig.hasOwnProperty(key10205)) {
              let obj16 = viewManagerConfig[key10205];
              let tmp108 = typeof obj15 === "object" && typeof obj16 === "object";
              tmp107 = obj15;
              if (tmp108) {
                let tmp109 = obj16;
                if (obj15) {
                  tmp109 = obj15;
                  if (obj16) {
                    tmp109 = obj16;
                    let keys5 = Object.keys();
                    if (keys5 !== undefined) {
                      tmp109 = obj16;
                      let tmp112 = keys5[tmp];
                      while (tmp112 !== undefined) {
                        if (!obj15.hasOwnProperty(tmp112)) {
                          continue;
                        } else {
                          let tmp113 = obj15[tmp112];
                          let tmp114 = tmp113;
                          if (obj16.hasOwnProperty(tmp112)) {
                            let tmp115 = obj16[tmp112];
                            let tmp116 = typeof tmp113 === "object" && typeof tmp115 === "object";
                            tmp114 = tmp113;
                            if (tmp116) {
                              tmp114 = merge(tmp115, tmp113);
                            }
                          }
                          obj16[tmp112] = tmp114;
                          continue;
                        }
                        continue;
                      }
                    }
                  }
                }
                tmp107 = tmp109;
              }
            }
            viewManagerConfig[key10205] = tmp107;
            continue;
          }
          continue;
        }
      }
    }
  }
};
