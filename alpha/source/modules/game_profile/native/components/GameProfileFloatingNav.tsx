// Module ID: 9118
// Function ID: 9119
// Name: GameProfileFloatingNav
// Dependencies: [109, 32, 19, 17, 21, 587, 4850, 5092, 9119, 558, 576, 13001, 5088, 8541, 1631, 13007, 4818, 683, 5093, 8914, 9211, 1126, 8216, 5391, 2]

// Module 9118 (GameProfileFloatingNav)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import Text_Text from "Text/Text" /* 5088 */;
import timing from "timing" /* 5093 */;
import native from "native" /* 8541 */;
import YouBannerDecorations from "YouBannerDecorations" /* 9119 */;
import YouScreenNavIconMeasurer2 from "YouScreenNavIconMeasurer" /* 13001 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["game"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportDefault, StyleSheet: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_4 = nativeDefault.space.PX_4;
const PX_8 = nativeDefault.space.PX_8;
const PX_48 = nativeDefault.space.PX_48;
const PX_6 = nativeDefault.space.PX_6;
let c15 = 320;
const Easing = ReanimatedRexport.Easing;
const easing = Easing.inOut(ReanimatedRexport.Easing.cubic);
let closure_17 = createStyles.createStyles((bottom) => {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let rect;
  const obj = { wrap: obj2, scrim: obj3, pill: obj4, pillBlur: obj6, pillRow: obj7, selection: rect, item: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: PX_48, padding: PX_6 }, label: { marginTop: nativeDefault.space.PX_4, textAlign: "center" } };
  obj2 = { top: undefined, alignItems: "center" };
  const merged = Object.assign(metroImportAll.absoluteFillObject);
  obj3 = {};
  const merged1 = Object.assign(metroImportAll.absoluteFillObject);
  obj4 = { marginBottom: obj5.getFloatingNavBottomMargin(bottom), padding: PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, flexDirection: "row", alignItems: "center" };
  obj5 = YouBannerDecorations;
  const merged2 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj6 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  const merged3 = Object.assign(metroImportAll.absoluteFillObject);
  obj7 = { flexDirection: "row", alignItems: "center", gap: PX_8 };
  rect = { position: "absolute", top: 0, bottom: 0, insetInlineStart: 0, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  ({ borderRadius: nativeDefault.modules.button.BORDER_RADIUS, flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: PX_48, padding: PX_6 });
  ({ marginTop: nativeDefault.space.PX_4, textAlign: "center" });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavItem(arg0) {
  let IconComponent;
  let containerRef;
  let items;
  let label;
  let labelStyle;
  let onLayout;
  let onPress;
  let selected;
  let style;
  let tmp5;
  let tmp6;
  let width;
  let obj = react2;
  const cResult = obj.c(23);
  ({ IconComponent, label, selected, onPress, onLayout } = arg0);
  ({ style, labelStyle } = arg0);
  const obj2 = YouScreenNavIconMeasurer2;
  const youScreenNavIconMeasurement = obj2.useYouScreenNavIconMeasurement();
  ({ containerRef, width } = youScreenNavIconMeasurement);
  if (cResult[0] !== onLayout) {
    const fn = function l(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      const obj = { x: layout.x, width: layout.width };
      onLayout(obj);
    };
    cResult[0] = onLayout;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== width) {
    const obj3 = { width };
    cResult[2] = width;
    cResult[3] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === style) {
    let tmp7;
    let tmp8;
    let tmp9;
    if (cResult[5] === tmp6) {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== selected) {
      const obj4 = { selected };
      cResult[7] = selected;
      cResult[8] = obj4;
      tmp8 = obj4;
    } else {
      tmp8 = cResult[8];
    }
    if (cResult[9] !== IconComponent) {
      const obj5 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
      const tmp12 = React4(IconComponent, obj5);
      cResult[9] = IconComponent;
      cResult[10] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[10];
    }
    if (cResult[11] === label) {
      let tmp13;
      if (cResult[12] === labelStyle) {
        tmp13 = cResult[13];
      }
      if (cResult[14] === containerRef) {
        if (cResult[15] === tmp5) {
          if (cResult[16] === label) {
            if (cResult[17] === onPress) {
              if (cResult[18] === tmp7) {
                if (cResult[19] === tmp8) {
                  if (cResult[20] === tmp9) {
                    let tmp16;
                    if (cResult[21] === tmp13) {
                      tmp16 = cResult[22];
                    }
                    return tmp16;
                  }
                }
              }
            }
          }
        }
      }
      const obj6 = { ref: containerRef, style: tmp7, accessibilityRole: "tab", accessibilityLabel: label, accessibilityState: tmp8, onPress, onLayout: tmp5, hitSlop: nativeDefault.space.PX_8, children: items };
      const PressableScale = tmp(8541).PressableScale;
      items = [tmp9, tmp13];
      const tmp19 = authStore(PressableScale, obj6);
      cResult[14] = containerRef;
      cResult[15] = tmp5;
      cResult[16] = label;
      cResult[17] = onPress;
      cResult[18] = tmp7;
      cResult[19] = tmp8;
      cResult[20] = tmp9;
      cResult[21] = tmp13;
      cResult[22] = tmp19;
      tmp16 = tmp19;
    }
    const obj7 = { style: labelStyle, variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 2, children: label };
    const tmp15 = React4(Text_Text.Text, obj7);
    cResult[11] = label;
    cResult[12] = labelStyle;
    cResult[13] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [style, tmp6];
  cResult[4] = style;
  cResult[5] = tmp6;
  cResult[6] = items1;
  tmp7 = items1;
}) : (function NavItem(arg0) {
  let IconComponent;
  let containerRef;
  let items1;
  let items2;
  let label;
  let labelStyle;
  let onLayout;
  let onPress;
  let selected;
  let style;
  let width;
  ({ label, onLayout } = arg0);
  ({ IconComponent, selected, onPress, style, labelStyle } = arg0);
  let obj = YouScreenNavIconMeasurer2;
  const youScreenNavIconMeasurement = obj.useYouScreenNavIconMeasurement();
  const items = [onLayout];
  ({ containerRef, width } = youScreenNavIconMeasurement);
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const obj = { x: layout.x, width: layout.width };
    onLayout(obj);
  }, items);
  const obj2 = { ref: containerRef, style: items1, accessibilityRole: "tab", accessibilityLabel: label, accessibilityState: { selected }, onPress, onLayout: callback, hitSlop: nativeDefault.space.PX_8, children: items2 };
  items1 = [style, { width }];
  const PressableScale = native.PressableScale;
  items2 = [, ];
  const obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
  items2[0] = React4(IconComponent, obj3);
  items2[1] = React4(Text_Text.Text, { style: labelStyle, variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 2, children: label });
  return authStore(PressableScale, obj2);
});
const __initData = { code: "function GameProfileFloatingNavTsx1(){const{selectedLayout,withTiming,SELECTION_MS,SELECTION_EASE}=this.__closure;if(selectedLayout==null){return{opacity:0};}return{opacity:1,width:withTiming(selectedLayout.width,{duration:SELECTION_MS,easing:SELECTION_EASE}),transform:[{translateX:withTiming(selectedLayout.x,{duration:SELECTION_MS,easing:SELECTION_EASE})}]};}" };
const __initData2 = { code: "function GameProfileFloatingNavTsx2(){const{selectedLayout,withTiming,SELECTION_MS,SELECTION_EASE}=this.__closure;if(selectedLayout==null){return{opacity:0};}return{opacity:1,width:withTiming(selectedLayout.width,{duration:SELECTION_MS,easing:SELECTION_EASE}),transform:[{translateX:withTiming(selectedLayout.x,{duration:SELECTION_MS,easing:SELECTION_EASE})}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function FloatingNav(arg0) {
  let closure_2;
  let first;
  let first1;
  let intl2;
  let items;
  let onLayout;
  let selectedTab;
  let styles;
  let tmp9;
  let tmp = selectedTab;
  const tmp2 = dependencyMap;
  let obj = selectedTab(576);
  const cResult = obj.c(37);
  ({ navigation, onLayout } = arg0);
  selectedTab = navigation.selectedTab;
  const selectTab = navigation.selectTab;
  const tmp5 = closure_17(selectTab(1631)().bottom);
  dependencyMap = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "GameProfileFloatingNav" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(13007);
  const isGameProfileCommunitiesMobileEnabled = tmpResult.useIsGameProfileCommunitiesMobileEnabled(first);
  const tmpResult3 = tmp(4818);
  const token = tmpResult3.useToken(tmp4(587).colors.BACKGROUND_BASE_LOWEST);
  if (cResult[1] !== token) {
    let obj5 = tmp4(683)(token);
    const alphaResult = obj5.alpha(0);
    const hexResult = alphaResult.hex();
    cResult[1] = token;
    cResult[2] = hexResult;
    tmp9 = hexResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === token) {
    let tmp11;
    let tmp12;
    let tmp17;
    if (cResult[4] === tmp9) {
      tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = {};
      cResult[6] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[6];
    }
    [first1, closure_3] = react.useState(tmp12);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let tmp = closure_3((arg0) => {
            let tmp6;
            let x;
            const tmp = closure_0;
            if (arg0[closure_0] != null) {
              x = tmp2.x;
            }
            if (x !== x.x) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[tmp] = x;
              tmp6 = obj;
            } else {
              let width;
              if (arg0[closure_0] != null) {
                width = tmp2.width;
              }
              tmp6 = arg0;
            }
            return tmp6;
          });
        }
      }
      cResult[7] = P;
      tmp17 = P;
    } else {
      class P {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let tmp = closure_3((arg0) => {
            let tmp6;
            let x;
            const tmp = closure_0;
            if (arg0[closure_0] != null) {
              x = tmp2.x;
            }
            if (x !== x.x) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[tmp] = x;
              tmp6 = obj;
            } else {
              let width;
              if (arg0[closure_0] != null) {
                width = tmp2.width;
              }
              tmp6 = arg0;
            }
            return tmp6;
          });
        }
      }
    }
    P = tmp17;
    _slicedToArray = tmp18;
    const tmpResult4 = tmp(4850);
    class A {
      constructor() {
        let items;
        let obj;
        let obj2;
        let obj3;
        let obj5;
        let obj6;
        if (null == styles) {
          obj = { opacity: 0 };
        } else {
          obj = { opacity: 1, width: obj2.withTiming(styles.width, obj3), transform: items };
          obj3 = { duration, easing };
          obj2 = timing;
          const obj4 = { translateX: obj5.withTiming(styles.x, obj6) };
          obj6 = { duration, easing };
          items = [obj4];
          obj5 = timing;
        }
        return obj;
      }
    }
    let obj4 = { selectedLayout: first1[selectedTab], withTiming: tmp(5093).withTiming, SELECTION_MS: v320, SELECTION_EASE: easing };
    const useAnimatedStyle = tmpResult4.useAnimatedStyle;
    A.__closure = obj4;
    A.__workletHash = 14859052305644;
    A.__initData = __initData;
    const animatedStyle = useAnimatedStyle(A);
    if (isGameProfileCommunitiesMobileEnabled) {
      let tmp24;
      let arr2;
      class P {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let tmp = closure_3((arg0) => {
            let tmp6;
            let x;
            const tmp = closure_0;
            if (arg0[closure_0] != null) {
              x = tmp2.x;
            }
            if (x !== x.x) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[tmp] = x;
              tmp6 = obj;
            } else {
              let width;
              if (arg0[closure_0] != null) {
                width = tmp2.width;
              }
              tmp6 = arg0;
            }
            return tmp6;
          });
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            let tmp = closure_3((arg0) => {
              let tmp6;
              let x;
              const tmp = closure_0;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[tmp] = x;
                tmp6 = obj;
              } else {
                let width;
                if (arg0[closure_0] != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
          }
        }
        tmp25[0] = tmp(8914).GameProfileNavTab.OVERVIEW;
        tmp25[1] = tmp(9211).GameControllerIcon;
        const intl = tmp(1126).intl;
        tmp25[2] = intl.string(tmp(1126).t.qHmbyh);
        cResult[8] = tmp25;
        tmp24 = tmp25;
      } else {
        class P {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            let tmp = closure_3((arg0) => {
              let tmp6;
              let x;
              const tmp = closure_0;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[tmp] = x;
                tmp6 = obj;
              } else {
                let width;
                if (arg0[closure_0] != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            let tmp = closure_3((arg0) => {
              let tmp6;
              let x;
              const tmp = closure_0;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[tmp] = x;
                tmp6 = obj;
              } else {
                let width;
                if (arg0[closure_0] != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
          }
        }
        tmp26[0] = tmp24;
        let obj6 = { tab: tmp(8914).GameProfileNavTab.COMMUNITIES, IconComponent: tmp(8216).GroupIcon, label: intl2.string(tmp(1126).t["3xFZEo"]) };
        intl2 = tmp(1126).intl;
        tmp26[1] = obj6;
        cResult[9] = tmp26;
        arr2 = tmp26;
      } else {
        class P {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            let tmp = closure_3((arg0) => {
              let tmp6;
              let x;
              const tmp = closure_0;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[tmp] = x;
                tmp6 = obj;
              } else {
                let width;
                if (arg0[closure_0] != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
          }
        }
      }
      if (cResult[10] === tmp11) {
        let tmp30;
        class P {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            let tmp = closure_3((arg0) => {
              let tmp6;
              let x;
              const tmp = closure_0;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[tmp] = x;
                tmp6 = obj;
              } else {
                let width;
                if (arg0[closure_0] != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              let tmp = closure_3((arg0) => {
                let tmp6;
                let x;
                const tmp = closure_0;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[tmp] = x;
                  tmp6 = obj;
                } else {
                  let width;
                  if (arg0[closure_0] != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
            }
          }
          const tmp31 = closure_9(tmp(8541).BackgroundBlurFill, {});
          cResult[13] = tmp31;
          tmp30 = tmp31;
        } else {
          class P {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              let tmp = closure_3((arg0) => {
                let tmp6;
                let x;
                const tmp = closure_0;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[tmp] = x;
                  tmp6 = obj;
                } else {
                  let width;
                  if (arg0[closure_0] != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
            }
          }
        }
        if (cResult[14] !== tmp5.pillBlur) {
          class P {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              let tmp = closure_3((arg0) => {
                let tmp6;
                let x;
                const tmp = closure_0;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[tmp] = x;
                  tmp6 = obj;
                } else {
                  let width;
                  if (arg0[closure_0] != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
            }
          }
          const obj7 = { style: tmp5.pillBlur, pointerEvents: "none", children: tmp30 };
          cResult[14] = tmp5.pillBlur;
          cResult[15] = closure_9(closure_7, obj7);
          const tmp34 = closure_9(closure_7, obj7);
        } else {
          class P {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              let tmp = closure_3((arg0) => {
                let tmp6;
                let x;
                const tmp = closure_0;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[tmp] = x;
                  tmp6 = obj;
                } else {
                  let width;
                  if (arg0[closure_0] != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
            }
          }
        }
        if (cResult[16] === animatedStyle) {
          class P {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              let tmp = closure_3((arg0) => {
                let tmp6;
                let x;
                const tmp = closure_0;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[tmp] = x;
                  tmp6 = obj;
                } else {
                  let width;
                  if (arg0[closure_0] != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
            }
          }
          if (cResult[19] === selectTab) {
            class P {
              constructor(arg0, arg1) {
                let closure_0 = arg0;
                let closure_1 = arg1;
                let tmp = closure_3((arg0) => {
                  let tmp6;
                  let x;
                  const tmp = closure_0;
                  if (arg0[closure_0] != null) {
                    x = tmp2.x;
                  }
                  if (x !== x.x) {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj[tmp] = x;
                    tmp6 = obj;
                  } else {
                    let width;
                    if (arg0[closure_0] != null) {
                      width = tmp2.width;
                    }
                    tmp6 = arg0;
                  }
                  return tmp6;
                });
              }
            }
          }
          const obj8 = {
            children: arr2.map((IconComponent) => {
                      const tab = IconComponent.tab;
                      const obj = {
                        IconComponent: IconComponent.IconComponent,
                        label: IconComponent.label,
                        selected: tab === tab,
                        onPress() {
                          return selectTab(tab);
                        },
                        onLayout(arg0) {
                          return P(tab, arg0);
                        },
                        style: closure_2.item,
                        labelStyle: closure_2.label
                      };
                      return closure_1_9(closure_1_18, obj, tab);
                    })
          };
          const YouScreenNavIconMeasurer = tmp(13001).YouScreenNavIconMeasurer;
          cResult[19] = selectTab;
          cResult[20] = selectedTab;
          cResult[21] = tmp5.item;
          cResult[22] = tmp5.label;
          cResult[23] = closure_9(YouScreenNavIconMeasurer, obj8);
          closure_9(YouScreenNavIconMeasurer, obj8);
          class A {
            constructor() {
              let items;
              let obj;
              let obj2;
              let obj3;
              let obj5;
              let obj6;
              if (null == styles) {
                obj = { opacity: 0 };
              } else {
                obj = { opacity: 1, width: obj2.withTiming(styles.width, obj3), transform: items };
                obj3 = { duration, easing };
                obj2 = timing;
                const obj4 = { translateX: obj5.withTiming(styles.x, obj6) };
                obj6 = { duration, easing };
                items = [obj4];
                obj5 = timing;
              }
              return obj;
            }
          }
        }
        const obj9 = { style: items, pointerEvents: "none" };
        items = [tmp5.selection, animatedStyle];
        cResult[16] = animatedStyle;
        cResult[17] = tmp5.selection;
        const tmp37 = closure_9(selectTab(4850).View, obj9);
        class A {
          constructor() {
            let items;
            let obj;
            let obj2;
            let obj3;
            let obj5;
            let obj6;
            if (null == styles) {
              obj = { opacity: 0 };
            } else {
              obj = { opacity: 1, width: obj2.withTiming(styles.width, obj3), transform: items };
              obj3 = { duration, easing };
              obj2 = timing;
              const obj4 = { translateX: obj5.withTiming(styles.x, obj6) };
              obj6 = { duration, easing };
              items = [obj4];
              obj5 = timing;
            }
            return obj;
          }
        }
        cResult[18] = tmp37;
      }
      const obj10 = { colors: tmp11, style: tmp5.scrim, pointerEvents: "none" };
      cResult[10] = tmp11;
      cResult[11] = tmp5.scrim;
      closure_9(selectTab(5391), obj10);
      class A {
        constructor() {
          let items;
          let obj;
          let obj2;
          let obj3;
          let obj5;
          let obj6;
          if (null == styles) {
            obj = { opacity: 0 };
          } else {
            obj = { opacity: 1, width: obj2.withTiming(styles.width, obj3), transform: items };
            obj3 = { duration, easing };
            obj2 = timing;
            const obj4 = { translateX: obj5.withTiming(styles.x, obj6) };
            obj6 = { duration, easing };
            items = [obj4];
            obj5 = timing;
          }
          return obj;
        }
      }
    } else {
      class P {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let tmp = closure_3((arg0) => {
            let tmp6;
            let x;
            const tmp = closure_0;
            if (arg0[closure_0] != null) {
              x = tmp2.x;
            }
            if (x !== x.x) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[tmp] = x;
              tmp6 = obj;
            } else {
              let width;
              if (arg0[closure_0] != null) {
                width = tmp2.width;
              }
              tmp6 = arg0;
            }
            return tmp6;
          });
        }
      }
      return null;
    }
  }
  const items1 = [tmp9, token];
  cResult[3] = token;
  cResult[4] = tmp9;
  cResult[5] = items1;
  tmp11 = items1;
}) : (function FloatingNav(navigation) {
  let _undefined;
  let c4;
  let closure_2;
  let closure_5;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let styles;
  let tmp9;
  navigation = navigation.navigation;
  dependencyMap = undefined;
  c4 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const selectedTab = navigation.selectedTab;
  const selectTab = navigation.selectTab;
  let tmp = selectTab;
  const tmp2 = dependencyMap;
  const onLayout = navigation.onLayout;
  const tmp3 = closure_17(selectTab(1631)().bottom);
  dependencyMap = tmp3;
  let obj = selectedTab(13007);
  const isGameProfileCommunitiesMobileEnabled = obj.useIsGameProfileCommunitiesMobileEnabled({ location: "GameProfileFloatingNav" });
  let obj2 = selectedTab(4818);
  const token = obj2.useToken(selectTab(587).colors.BACKGROUND_BASE_LOWEST);
  let items = [token];
  const memo = react.useMemo(() => {
    const items = [, ];
    const obj = _modDef683(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = token;
    return items;
  }, items);
  [tmp9, c4] = _slicedToArray(react.useState({}), 2);
  const tmp8 = _slicedToArray(react.useState({}), 2);
  _slicedToArray = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = _undefined((arg0) => {
      let tmp6;
      let x;
      const tmp = closure_0;
      if (arg0[closure_0] != null) {
        x = tmp2.x;
      }
      if (x !== x.x) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[tmp] = x;
        tmp6 = obj;
      } else {
        let width;
        if (arg0[closure_0] != null) {
          width = tmp2.width;
        }
        tmp6 = arg0;
      }
      return tmp6;
    });
  }, []);
  react = tmp10;
  selectedTab(4850);
  const fn = function s() {
    let items;
    let obj;
    let obj2;
    let obj3;
    let obj5;
    let obj6;
    if (null == styles) {
      obj = { opacity: 0 };
    } else {
      obj = { opacity: 1, width: obj2.withTiming(styles.width, obj3), transform: items };
      obj3 = { duration, easing };
      obj2 = timing;
      const obj4 = { translateX: obj5.withTiming(styles.x, obj6) };
      obj6 = { duration, easing };
      items = [obj4];
      obj5 = timing;
    }
    return obj;
  };
  let obj3 = { selectedLayout: tmp10, withTiming: selectedTab(5093).withTiming, SELECTION_MS: v320, SELECTION_EASE: easing };
  fn.__closure = obj3;
  fn.__workletHash = 5966559078959;
  fn.__initData = __initData2;
  if (isGameProfileCommunitiesMobileEnabled) {
    let obj4 = { tab: tmp4(8914).GameProfileNavTab.OVERVIEW, IconComponent: tmp4(9211).GameControllerIcon, label: intl.string(tmp4(1126).t.qHmbyh) };
    intl = tmp4(1126).intl;
    const items1 = [obj4, ];
    let obj5 = { tab: tmp4(8914).GameProfileNavTab.COMMUNITIES, IconComponent: tmp4(8216).GroupIcon, label: intl2.string(tmp4(1126).t["3xFZEo"]) };
    intl2 = tmp4(1126).intl;
    items1[1] = obj5;
    let obj6 = { style: tmp3.wrap, pointerEvents: "box-none", onLayout, children: items2 };
    const obj7 = { colors: memo, style: tmp3.scrim, pointerEvents: "none" };
    items2 = [closure_9(tmp(5391), obj7), ];
    const obj8 = { style: tmp3.pill, accessibilityRole: "tablist", children: items3 };
    const obj9 = { style: tmp3.pillBlur, pointerEvents: "none", children: closure_9(selectedTab(8541).BackgroundBlurFill, {}) };
    items3 = [closure_9(closure_7, obj9), ];
    const obj11 = { style: items4, pointerEvents: "none" };
    items4 = [tmp3.selection, tmp12];
    const obj10 = { style: tmp3.pillRow, children: items5 };
    items5 = [closure_9(tmp(4850).View, obj11), ];
    const obj12 = {
      children: items1.map((IconComponent) => {
          const tab = IconComponent.tab;
          const obj = {
            IconComponent: IconComponent.IconComponent,
            label: IconComponent.label,
            selected: tab === tab,
            onPress() {
              return selectTab(tab);
            },
            onLayout(arg0) {
              return closure_5(tab, arg0);
            },
            style: closure_2.item,
            labelStyle: closure_2.label
          };
          return closure_1_9(closure_1_18, obj, tab);
        })
    };
    const YouScreenNavIconMeasurer = tmp4(13001).YouScreenNavIconMeasurer;
    items5[1] = closure_9(YouScreenNavIconMeasurer, obj12);
    items3[1] = closure_10(closure_7, obj10);
    items2[1] = closure_10(closure_7, obj8);
    return closure_10(closure_7, obj6);
  } else {
    return null;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileFloatingNav(game) {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== game) {
    game = game.game;
    const tmp6 = _objectWithoutProperties(game, closure_3);
    cResult[0] = game;
    cResult[1] = game;
    cResult[2] = tmp6;
    tmp3 = tmp6;
    tmp2 = game;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const communityGuildIds = tmp2.communityGuildIds;
  let num4;
  if (communityGuildIds != null) {
    num4 = communityGuildIds.length;
  }
  if (num4 == null) {
    num4 = 0;
  }
  let tmp7 = null;
  if (num4 >= 3) {
    let tmp8;
    if (cResult[3] !== tmp3) {
      const obj2 = {};
      const merged = Object.assign(tmp3);
      const tmp14 = React4(closure_21, obj2);
      cResult[3] = tmp3;
      cResult[4] = tmp14;
      tmp8 = tmp14;
    } else {
      tmp8 = cResult[4];
    }
    tmp7 = tmp8;
  }
  return tmp7;
}) : (function GameProfileFloatingNav(game) {
  game = game.game;
  const merged = Object.assign(game, Object.assign({ game: 0 }));
  const communityGuildIds = game.communityGuildIds;
  let num;
  if (communityGuildIds != null) {
    num = communityGuildIds.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp2 = null;
  if (num >= 3) {
    const obj = {};
    const merged1 = Object.assign(merged);
    tmp2 = React4(closure_21, obj);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileFloatingNav.tsx");

export default tmp4;
