// Module ID: 5555
// Function ID: 47129
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5555 (_isNativeReflectConstruct)
let Platform;
let StyleSheet;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
({ Animated: closure_10, Platform, StyleSheet } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let closure_14 = Object.freeze({ options: {} });
function getInterpolationIndex(arg0, arg1) {
  let diff = arg1 - 1;
  let num = 0;
  let num2 = 0;
  if (diff >= 0) {
    while (true) {
      let tmp3 = arg0[diff];
      let prop;
      if (null != tmp3) {
        prop = tmp3.descriptor.options.cardStyleInterpolator;
      }
      num2 = num;
      if (prop !== tmp) {
        break;
      } else {
        num = num + 1;
        diff = diff - 1;
        num2 = num;
        if (diff < 0) {
          break;
        }
      }
    }
  }
  return num2;
}
function getIsModal(descriptor) {
  if (arg2) {
    return true;
  } else {
    let isModalPresentation = arg1(dependencyMap[9]).getIsModalPresentation(descriptor.descriptor.options.cardStyleInterpolator);
    if (isModalPresentation) {
      isModalPresentation = 0 !== arg1;
    }
    return isModalPresentation;
  }
}
function getHeaderHeights(arr) {
  const arg1 = arr;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let closure_3 = arg3;
  let closure_4 = arg4;
  let closure_5 = arg5;
  return arr.reduce((arg0, descriptor) => {
    const options = descriptor.descriptor.options;
    let headerStatusBarHeight = options.headerStatusBarHeight;
    if (undefined === headerStatusBarHeight) {
      let num = 0;
      if (!arg2) {
        num = descriptor.top;
      }
      headerStatusBarHeight = num;
    }
    let headerStyle = options.headerStyle;
    if (!headerStyle) {
      headerStyle = {};
    }
    const flattenResult = closure_11.flatten(headerStyle);
    if ("height" in flattenResult) {
      if ("number" === typeof flattenResult.height) {
        let height = flattenResult.height;
      }
      if ("number" !== typeof height) {
        height = arg0(arg2[10]).getDefaultHeaderHeight(arg4, tmp10, headerStatusBarHeight);
        const obj2 = arg0(arg2[10]);
      }
      arg0[descriptor.route.key] = height;
      return arg0;
    }
    height = arg5[descriptor.route.key];
  }, {});
}
function getDistanceFromOptions(arg0, options) {
  options = undefined;
  if (null != options) {
    options = options.options;
  }
  if (!options) {
    options = {};
  }
  const gestureDirection = options.gestureDirection;
  if (undefined !== gestureDirection) {
    return importDefault(dependencyMap[12])(arg0, gestureDirection);
  } else if ("modal" === tmp) {
    let gestureDirection2 = options(dependencyMap[11]).ModalTransition.gestureDirection;
  } else {
    gestureDirection2 = options(dependencyMap[11]).DefaultTransition.gestureDirection;
  }
}
function getProgressFromGesture(interpolate, width, options) {
  let obj = { width: Math.max(1, width.width), height: Math.max(1, width.height) };
  const tmp = getDistanceFromOptions(obj, options);
  if (tmp > 0) {
    obj = {};
    const items = [0.229, tmp];
    obj.inputRange = items;
    obj.outputRange = ["<string:3813229678>", "<string:153900714>"];
    let interpolateResult = interpolate.interpolate(obj);
  } else {
    obj = {};
    const items1 = [tmp, 0];
    obj.inputRange = items1;
    obj.outputRange = ["Text", "lc"];
    interpolateResult = interpolate.interpolate(obj);
  }
  return interpolateResult;
}
const tmp4 = arg1(dependencyMap[8]);
const styles = StyleSheet.create({ container: { flex: 1 }, absolute: {}, floating: { zIndex: 1 } });

export default (Component) => {
  class CardStack {
    constructor(arg0) {
      self = this;
      tmp = closure_4(this, CardStack);
      items = [];
      items[0] = Component;
      obj = closure_7(CardStack);
      tmp2 = closure_6;
      if (closure_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      CardStack = tmp2Result;
      tmp2Result.handleLayout = (nativeEvent) => {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        const width = layout.width;
        let closure_2 = { width, height };
        height.setState((layout, insets) => {
          if (height !== layout.layout.height) {
            const obj = { layout: closure_2, headerHeights: callback(layout.scenes, insets.insets, insets.isParentHeaderShown, insets.isParentModal, closure_2, layout.headerHeights) };
            let tmp2 = obj;
          } else {
            tmp2 = null;
          }
          return tmp2;
        });
      };
      tmp2Result.handleHeaderLayout = (arg0) => {
        ({ route: closure_0, height: closure_1 } = arg0);
        tmp2Result.setState((headerHeights) => {
          headerHeights = headerHeights.headerHeights;
          let tmp = null;
          if (headerHeights[closure_0.key] !== closure_1) {
            const obj = {};
            const _Object = Object;
            obj.headerHeights = Object.assign({}, headerHeights, callback({}, key.key, closure_1));
            tmp = obj;
          }
          return tmp;
        });
      };
      tmp2Result.getFocusedRoute = () => {
        const state = tmp2Result.props.state;
        return state.routes[state.index];
      };
      tmp2Result.getPreviousScene = (route) => {
        const scenes = tmp2Result.state.scenes;
        const previousRoute = tmp2Result.props.getPreviousRoute({ route: route.route });
        if (previousRoute) {
          return scenes.find((descriptor) => descriptor.descriptor.route.key === previousRoute.key);
        }
        const obj = { route: route.route };
      };
      obj = { routes: [], scenes: [], gestures: {}, layout: CardStack(closure_2[10]).SafeAreaProviderCompat.initialMetrics.frame, descriptors: tmp2Result.props.descriptors, headerHeights: {} };
      tmp2Result.state = obj;
      return tmp2Result;
    }
  }
  const arg1 = CardStack;
  callback2(CardStack, Component);
  let obj = {
    key: "render",
    value: function render() {
      let detachInactiveScreens;
      let headerHeights;
      let renderHeader;
      let routes;
      let state;
      const self = this;
      const CardStack = this;
      const props = this.props;
      ({ insets: closure_1, state, routes, closingRouteKeys: closure_2, onOpenRoute: closure_3, onCloseRoute: closure_4, renderHeader } = props);
      ({ renderScene: closure_6, isParentHeaderShown: closure_7, isParentModal: closure_8, onTransitionStart: closure_9, onTransitionEnd: closure_10, onGestureStart: closure_11, onGestureEnd: closure_12, onGestureCancel: closure_13, detachInactiveScreens } = props);
      const tmp = undefined === detachInactiveScreens || detachInactiveScreens;
      const state2 = self.state;
      const scenes = state2.scenes;
      const layout = state2.layout;
      ({ gestures: closure_17, headerHeights } = state2);
      const tmp2 = state.routes[state.index];
      const scenes1 = self.state.scenes;
      const substr = scenes1.slice(-2);
      const someResult = substr.some((descriptor) => {
        let options = descriptor.descriptor.options;
        if (null == options) {
          options = {};
        }
        const headerShown = options.headerShown;
        let tmp = !options.headerTransparent;
        if (tmp) {
          tmp = false !== (undefined === headerShown || headerShown);
          const tmp2 = undefined === headerShown || headerShown;
        }
        if (tmp) {
          tmp = "screen" !== options.headerMode;
        }
        return !tmp;
      });
      let num = 1;
      let sum = 1;
      let diff = scenes.length - 1;
      if (diff >= 0) {
        while (true) {
          let options = scenes[diff].descriptor.options;
          let detachPreviousScreen = options.detachPreviousScreen;
          if (undefined === detachPreviousScreen) {
            let tmp5 = "transparentModal" !== options.presentation;
            if (tmp5) {
              let tmp6 = CardStack;
              let tmp7 = closure_2;
              let obj1 = CardStack(closure_2[9]);
              let tmp8 = !obj1.getIsModalPresentation(options.cardStyleInterpolator);
              if (!tmp8) {
                let tmp9 = callback;
                let tmp10 = closure_2;
                tmp8 = diff !== callback(closure_2[13])(scenes, (descriptor) => {
                  const cardStyleInterpolator = descriptor.descriptor.options.cardStyleInterpolator;
                  let tmp = cardStyleInterpolator === self(closure_2[14]).forModalPresentationIOS;
                  if (!tmp) {
                    let name;
                    if (null != cardStyleInterpolator) {
                      name = cardStyleInterpolator.name;
                    }
                    tmp = "forModalPresentationIOS" === name;
                  }
                  return tmp;
                });
              }
              tmp5 = tmp8;
            }
            detachPreviousScreen = tmp5;
          }
          if (false === detachPreviousScreen) {
            sum = num + 1;
            let tmp11 = sum;
            diff = diff - 1;
            num = tmp11;
            if (diff < 0) {
              break;
            }
          } else {
            tmp11 = num;
            if (diff <= scenes.length - 2) {
              break;
            }
          }
          break;
        }
      }
      let obj = {};
      obj = { mode: "float", layout, scenes, getPreviousScene: self.getPreviousScene, getFocusedRoute: self.getFocusedRoute, onContentHeightChange: self.handleHeaderLayout };
      const items = [someResult.floating, ];
      let tmp14 = someResult;
      if (someResult) {
        obj1 = { height: headerHeights[tmp2.key] };
        const items1 = [obj1, someResult.absolute];
        tmp14 = items1;
      }
      items[1] = tmp14;
      obj.style = items;
      obj.children = renderHeader(obj);
      const tmp13Result = callback4(React.Fragment, obj, "header");
      const obj2 = {};
      let tmp18 = null;
      if (!someResult) {
        tmp18 = tmp13Result;
      }
      const items2 = [tmp18, , ];
      const obj3 = {
        enabled: tmp,
        style: someResult.container,
        onLayout: self.handleLayout,
        children: routes.map((key, index) => {
          let bottom;
          let freezeOnBlur;
          let headerStyle;
          let headerTransparent;
          let left;
          let right;
          let top;
          let num = 0;
          if (index >= arg2.length - sum - 1) {
            let num2 = 2;
            if (index !== arg2.length - 1) {
              let num3 = 0;
              if (index >= arg2.length - sum) {
                num3 = 1;
              }
              num2 = num3;
            }
            let num4 = 1;
            if (scenes[arg2.length - 1]) {
              const current = tmp3.progress.current;
              let obj = { inputRange: [] };
              const items = [, , num2];
              obj.outputRange = items;
              obj.extrapolate = "clamp";
              num4 = current.interpolate(obj);
            }
            num = num4;
            const tmp2 = scenes;
          }
          const options = tmp.descriptor.options;
          const headerShown = options.headerShown;
          const headerTintColor = options.headerTintColor;
          let num5 = 0;
          ({ headerTransparent, headerStyle, freezeOnBlur } = options);
          ({ top, right, bottom, left } = callback);
          if (false !== (undefined === headerShown || headerShown)) {
            num5 = headerHeights[key.key];
          }
          let isDarkResult;
          if (undefined === headerShown || headerShown) {
            if ("string" === typeof headerTintColor) {
              isDarkResult = callback(closure_2[16])(headerTintColor).isDark();
              const obj3 = callback(closure_2[16])(headerTintColor);
            } else {
              const flattenResult = closure_11.flatten(headerStyle);
              let tmp10 = flattenResult;
              if (flattenResult) {
                tmp10 = "backgroundColor" in flattenResult;
              }
              if (tmp10) {
                tmp10 = "string" === typeof flattenResult.backgroundColor;
              }
              if (tmp10) {
                isDarkResult = !callback(closure_2[16])(flattenResult.backgroundColor).isDark();
                const obj2 = callback(closure_2[16])(flattenResult.backgroundColor);
              }
            }
          }
          const tmp15 = scenes(scenes, index);
          let presentation;
          if (null != scenes[index + 1]) {
            presentation = tmp17.descriptor.options.presentation;
          }
          let detachPreviousScreen;
          if (null != scenes[index + 1]) {
            detachPreviousScreen = tmp19.descriptor.options.detachPreviousScreen;
          }
          obj = { style: closure_11.absoluteFill, enabled: tmp, active: num, freezeOnBlur, pointerEvents: "box-none" };
          obj = { index, interpolationIndex: tmp15, modal: layout(scenes[index], tmp15, closure_8), active: index === arg2.length - 1, focused: tmp2.key === key.key };
          const tmp16 = layout(scenes[index], tmp15, closure_8);
          obj.closing = closure_2.includes(key.key);
          obj.layout = layout;
          obj.gesture = closure_17[key.key];
          obj.scene = scenes[index];
          obj.safeAreaInsetTop = top;
          obj.safeAreaInsetRight = right;
          obj.safeAreaInsetBottom = bottom;
          obj.safeAreaInsetLeft = left;
          obj.onGestureStart = closure_11;
          obj.onGestureCancel = closure_13;
          obj.onGestureEnd = closure_12;
          obj.headerHeight = num5;
          obj.isParentHeaderShown = closure_7;
          ({ handleHeaderLayout: obj5.onHeaderHeightChange, getPreviousScene: obj5.getPreviousScene, getFocusedRoute: obj5.getFocusedRoute } = self);
          obj.headerDarkContent = isDarkResult;
          let tmp23 = someResult;
          if (someResult) {
            tmp23 = !headerTransparent;
          }
          obj.hasAbsoluteFloatHeader = tmp23;
          obj.renderHeader = renderHeader;
          obj.renderScene = closure_6;
          obj.onOpenRoute = closure_3;
          obj.onCloseRoute = closure_4;
          obj.onTransitionStart = closure_9;
          obj.onTransitionEnd = closure_10;
          obj.isNextScreenTransparent = "transparentModal" === presentation;
          obj.detachCurrentScreen = false !== detachPreviousScreen;
          obj.children = closure_12(callback(closure_2[17]), obj);
          return closure_12(self(closure_2[15]).MaybeScreen, obj, key.key);
        })
      };
      items2[1] = callback4(CardStack(closure_2[15]).MaybeScreenContainer, obj3);
      let tmp19 = null;
      if (someResult) {
        tmp19 = tmp13Result;
      }
      items2[2] = tmp19;
      obj2.children = items2;
      return closure_13(CardStack(closure_2[10]).Background, obj2);
    }
  };
  const items = [obj];
  obj = {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(routes, routes2) {
      const CardStack = routes;
      if (routes.routes === routes2.routes) {
        if (routes.descriptors === routes2.descriptors) {
          return null;
        }
      }
      routes = routes.routes;
      const reduced = routes.reduce((arg0, key) => {
        let options;
        if (null != arg0.descriptors[key.key]) {
          options = tmp.options;
        }
        if (!options) {
          options = {};
        }
        let value = key.gestures[key.key];
        if (!value) {
          const Value = Value.Value;
          const openingRouteKeys = arg0.openingRouteKeys;
          let num = 0;
          if (openingRouteKeys.includes(key.key)) {
            num = 0;
            if (false !== tmp2) {
              num = callback(key.layout, tmp);
            }
          }
          const prototype = Value.prototype;
          value = new Value(num);
        }
        arg0[key.key] = value;
        return arg0;
      }, {});
      const routes1 = routes.routes;
      const mapped = routes1.map((route) => {
        route = tmp3;
        let tmp9 = route.descriptors[route.key];
        if (!tmp9) {
          tmp9 = arg1.descriptors[route.key];
        }
        if (tmp9) {
          let key;
          if (null != tmp2) {
            key = tmp2.key;
          }
          let tmp15 = route.descriptors[key];
          if (!tmp15) {
            let key1;
            if (null != tmp2) {
              key1 = tmp2.key;
            }
            tmp15 = arg1.descriptors[key1];
          }
          let key2;
          if (null != tmp) {
            key2 = tmp.key;
          }
          let tmp20 = route.descriptors[key2];
          if (!tmp20) {
            let key3;
            if (null != tmp) {
              key3 = tmp.key;
            }
            tmp20 = arg1.descriptors[key3];
          }
          if (arg1 !== arg2.length - 1) {
            if (tmp15) {
              if ("transparentModal" !== tmp15.options.presentation) {
                let options = tmp15.options;
              }
              if ("modal" === options.presentation) {
                let DefaultTransition = route(reduced[11]).ModalTransition;
              } else if ("transparentModal" === options.presentation) {
                DefaultTransition = route(reduced[11]).ModalFadeTransition;
              } else {
                DefaultTransition = route(reduced[11]).DefaultTransition;
              }
              const animationEnabled = options.animationEnabled;
              const gestureEnabled = options.gestureEnabled;
              let gestureDirection = options.gestureDirection;
              if (undefined === gestureDirection) {
                gestureDirection = DefaultTransition.gestureDirection;
              }
              let transitionSpec = options.transitionSpec;
              if (undefined === transitionSpec) {
                transitionSpec = DefaultTransition.transitionSpec;
              }
              const cardStyleInterpolator = options.cardStyleInterpolator;
              if (undefined !== cardStyleInterpolator) {
                let headerStyleInterpolator = options.headerStyleInterpolator;
                if (undefined === headerStyleInterpolator) {
                  headerStyleInterpolator = DefaultTransition.headerStyleInterpolator;
                }
                let cardOverlayEnabled = options.cardOverlayEnabled;
                if (undefined === cardOverlayEnabled) {
                  let isModalPresentation = "transparentModal" !== options.presentation;
                  if (!isModalPresentation) {
                    let obj = route(reduced[9]);
                    isModalPresentation = obj.getIsModalPresentation(cardStyleInterpolator);
                  }
                  cardOverlayEnabled = isModalPresentation;
                }
                let str5 = tmp9.options.headerMode;
                if (null == str5) {
                  let tmp37 = "modal" !== options.presentation;
                  if (tmp37) {
                    tmp37 = "transparentModal" !== options.presentation;
                  }
                  if (tmp37) {
                    let presentation;
                    if (null != tmp15) {
                      presentation = tmp15.options.presentation;
                    }
                    tmp37 = "modal" !== presentation;
                  }
                  if (tmp37) {
                    let presentation1;
                    if (null != tmp15) {
                      presentation1 = tmp15.options.presentation;
                    }
                    tmp37 = "transparentModal" !== presentation1;
                  }
                  str5 = "screen";
                  if (tmp37) {
                    let obj1 = route(reduced[9]);
                    const isModalPresentation1 = obj1.getIsModalPresentation(cardStyleInterpolator);
                    str5 = "screen";
                  }
                }
                obj = { route };
                const _Object = Object;
                obj = {};
                const _Object2 = Object;
                obj1 = { animationEnabled: tmp29, cardOverlayEnabled, cardStyleInterpolator, gestureDirection, gestureEnabled: tmp30, headerStyleInterpolator, transitionSpec, headerMode: str5 };
                obj.options = Object.assign({}, tmp9.options, obj1);
                obj.descriptor = Object.assign({}, tmp9, obj);
                const obj2 = { current: callback2(tmp4, arg1.layout, tmp9) };
                let tmp46;
                if (tmp7) {
                  let presentation2;
                  if (null != tmp15) {
                    presentation2 = tmp15.options.presentation;
                  }
                  if ("transparentModal" !== presentation2) {
                    tmp46 = callback2(tmp7, arg1.layout, tmp15);
                  }
                }
                obj2.next = tmp46;
                let tmp50;
                if (tmp5) {
                  tmp50 = callback2(tmp5, arg1.layout, tmp20);
                }
                obj2.previous = tmp50;
                obj.progress = obj2;
                const items = [arg1.layout, tmp9, tmp15, tmp20, tmp4, tmp7, tmp5];
                obj.__memo = items;
                let tmp54 = obj;
                if (tmp3) {
                  const __memo = obj.__memo;
                  tmp54 = obj;
                  if (__memo.every((arg0, arg1) => tmp3.__memo[arg1] === arg0)) {
                    tmp54 = tmp3;
                  }
                }
                return tmp54;
              } else if (false === tmp29) {
                let cardStyleInterpolator2 = route(reduced[14]).forNoAnimation;
              } else {
                cardStyleInterpolator2 = DefaultTransition.cardStyleInterpolator;
              }
              const tmp30 = undefined !== gestureEnabled && gestureEnabled;
            }
          }
          options = tmp9.options;
        }
      });
      return { routes: routes.routes, scenes: mapped, gestures: reduced, descriptors: routes.descriptors, headerHeights: callback5(mapped, routes.insets, routes.isParentHeaderShown, routes.isParentModal, routes2.layout, routes2.headerHeights) };
    }
  };
  const items1 = [obj];
  return callback(CardStack, items, items1);
}(importAllResult.Component);
