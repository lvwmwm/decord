// Module ID: 5521
// Function ID: 46988
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5521 (_isNativeReflectConstruct)
let StyleSheet;
let View;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["gray", 0];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const importAllResult = importAll(dependencyMap[7]);
({ StyleSheet, View } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
if (null != arg1(dependencyMap[10]).GestureHandlerRootView) {
  View = arg1(dependencyMap[10]).GestureHandlerRootView;
}
const tmp3 = arg1(dependencyMap[8]);
const styles = StyleSheet.create({ container: { flex: 1 } });

export default (Component) => {
  class StackView {
    constructor() {
      self = this;
      tmp = closure_6(this, StackView);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_9(StackView);
      tmp3 = closure_8;
      if (closure_14()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_9;
        constructResult = Reflect.construct(obj, combined, closure_9(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      StackView = tmp3Result;
      tmp3Result.state = { routes: [], previousRoutes: [], previousDescriptors: {}, openingRouteKeys: [], closingRouteKeys: [], replacingRouteKeys: [], descriptors: {} };
      tmp3Result.getPreviousRoute = (route) => {
        ({ closingRouteKeys: closure_1, replacingRouteKeys: closure_2 } = route.route.state);
        const routes = tmp3Result.state.routes;
        const found = routes.filter((key) => {
          let tmp = key.key === route.key;
          if (!tmp) {
            let tmp3 = !closure_1.includes(key.key);
            if (tmp3) {
              tmp3 = !closure_2.includes(key.key);
            }
            tmp = tmp3;
          }
          return tmp;
        });
        return found[found.findIndex(found, (key) => key.key === route.key) - 1];
      };
      tmp3Result.renderScene = (route) => {
        route = route.route;
        let obj = tmp3Result.state.descriptors[route.key];
        if (!obj) {
          obj = tmp3Result.props.descriptors[route.key];
        }
        let renderResult = null;
        if (obj) {
          renderResult = obj.render();
        }
        return renderResult;
      };
      tmp3Result.renderHeader = (arg0) => callback2(callback(closure_2[11]), Object.assign({}, arg0));
      tmp3Result.handleOpenRoute = (route) => {
        let closingRouteKeys;
        let navigation;
        let replacingRouteKeys;
        let state;
        route = route.route;
        ({ state, navigation } = route.props);
        ({ closingRouteKeys, replacingRouteKeys } = route.state);
        if (closingRouteKeys.some((arg0) => arg0 === route.key)) {
          if (replacingRouteKeys.every((arg0) => arg0 !== route.key)) {
            const routeNames = state.routeNames;
            if (routeNames.includes(route.name)) {
              const routes = state.routes;
              if (!routes.some((key) => key.key === route.key)) {
                navigation.navigate(route);
              }
            }
          }
        }
        route.setState((routes) => {
          const route = routes;
          const obj = {};
          routes = routes.routes;
          if (routes.replacingRouteKeys.length) {
            let found = routes.filter((key) => {
              const replacingRouteKeys = key.replacingRouteKeys;
              return !replacingRouteKeys.includes(key.key);
            });
          } else {
            found = routes;
          }
          obj.routes = found;
          const openingRouteKeys = routes.openingRouteKeys;
          obj.openingRouteKeys = openingRouteKeys.filter((arg0) => arg0 !== arg0.key);
          const closingRouteKeys = routes.closingRouteKeys;
          obj.closingRouteKeys = closingRouteKeys.filter((arg0) => arg0 !== arg0.key);
          obj.replacingRouteKeys = [];
          return obj;
        });
      };
      tmp3Result.handleCloseRoute = (route) => {
        let navigation;
        let state;
        route = route.route;
        ({ state, navigation } = route.props);
        const routes = state.routes;
        if (routes.some((key) => key.key === route.key)) {
          const _Object = Object;
          const StackActions = tmp3Result(closure_2[12]).StackActions;
          const obj = { source: route.key, target: state.key };
          navigation.dispatch(Object.assign({}, StackActions.pop(), obj));
        } else {
          tmp3Result.setState((arg0) => {
            let closingRouteKeys;
            let openingRouteKeys;
            let routes;
            ({ routes, openingRouteKeys, closingRouteKeys } = arg0);
            return { routes: routes.filter((key) => key.key !== closure_0.key), openingRouteKeys: openingRouteKeys.filter((arg0) => arg0 !== closure_0.key), closingRouteKeys: closingRouteKeys.filter((arg0) => arg0 !== closure_0.key) };
          });
        }
      };
      tmp3Result.handleTransitionStart = (route, closing) => {
        const navigation = tmp3Result.props.navigation;
        let obj = { type: "transitionStart", data: obj, target: route.route.key };
        obj = { closing };
        return navigation.emit(obj);
      };
      tmp3Result.handleTransitionEnd = (route, closing) => {
        const navigation = tmp3Result.props.navigation;
        let obj = { type: "transitionEnd", data: obj, target: route.route.key };
        obj = { closing };
        return navigation.emit(obj);
      };
      tmp3Result.handleGestureStart = (route) => {
        const navigation = tmp3Result.props.navigation;
        navigation.emit({ type: "gestureStart", target: route.route.key });
      };
      tmp3Result.handleGestureEnd = (route) => {
        const navigation = tmp3Result.props.navigation;
        navigation.emit({ type: "gestureEnd", target: route.route.key });
      };
      tmp3Result.handleGestureCancel = (route) => {
        const navigation = tmp3Result.props.navigation;
        navigation.emit({ type: "gestureCancel", target: route.route.key });
      };
      return tmp3Result;
    }
  }
  const arg1 = StackView;
  callback2(StackView, Component);
  let obj = {
    key: "render",
    value: function render() {
      let descriptors;
      const StackView = this;
      const props = this.props;
      ({ state: closure_1, descriptors } = props);
      let closure_2 = callback(props, closure_3);
      ({ routes: closure_3, descriptors: closure_4, openingRouteKeys: closure_5, closingRouteKeys: closure_6 } = this.state);
      let obj = { style: container.container };
      obj = {};
      obj = {
        children(arg0) {
          const self = arg0;
          return callback2(callback(closure_2[15]).Consumer, {
            children(arg0) {
              return callback(arg0(closure_2[13]).HeaderShownContext.Consumer, {
                children(isParentHeaderShown) {
                  return callback2(callback(closure_2[16]), Object.assign({ insets: isParentHeaderShown, isParentHeaderShown, isParentModal: isParentHeaderShown, getPreviousRoute: isParentHeaderShown.getPreviousRoute, routes: closure_3, openingRouteKeys: closure_5, closingRouteKeys: closure_6, onOpenRoute: isParentHeaderShown.handleOpenRoute, onCloseRoute: isParentHeaderShown.handleCloseRoute, onTransitionStart: isParentHeaderShown.handleTransitionStart, onTransitionEnd: isParentHeaderShown.handleTransitionEnd, renderHeader: isParentHeaderShown.renderHeader, renderScene: isParentHeaderShown.renderScene, state: callback, descriptors: closure_4, onGestureStart: isParentHeaderShown.handleGestureStart, onGestureEnd: isParentHeaderShown.handleGestureEnd, onGestureCancel: isParentHeaderShown.handleGestureCancel }, closure_2));
                }
              });
            }
          });
        }
      };
      obj.children = callback4(StackView(closure_2[14]).SafeAreaInsetsContext.Consumer, obj);
      obj.children = callback4(StackView(closure_2[13]).SafeAreaProviderCompat, obj);
      return callback4(closure_12, obj);
    }
  };
  const items = [obj];
  obj = {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(state, previousRoutes) {
      let closingRouteKeys;
      let openingRouteKeys;
      let routes;
      const StackView = state;
      if (state.state.routes === previousRoutes.previousRoutes) {
        if (previousRoutes.routes.length) {
          ({ routes, previousRoutes } = previousRoutes);
          let descriptors = state.descriptors;
          let descriptors2 = previousRoutes.previousDescriptors;
          if (state.descriptors !== previousRoutes.previousDescriptors) {
            routes = previousRoutes.routes;
            descriptors = routes.reduce((arg0, key) => {
              let tmp = arg0.descriptors[key.key];
              if (!tmp) {
                tmp = key.descriptors[key.key];
              }
              arg0[key.key] = tmp;
              return arg0;
            }, {});
            descriptors2 = state.descriptors;
          }
          if (state.state.routes !== previousRoutes.previousRoutes) {
            const routes1 = state.state.routes;
            let closure_2 = routes1.reduce((arg0, key) => {
              arg0[key.key] = key;
              return arg0;
            }, {});
            const routes2 = previousRoutes.routes;
            routes = routes2.map((arg0) => closure_2[arg0.key] || arg0);
            previousRoutes = state.state.routes;
          }
          let obj = { routes, previousRoutes, descriptors, previousDescriptors: descriptors2 };
          return obj;
        }
      } else {
        const routes3 = state.state.routes;
        previousRoutes = previousRoutes.previousRoutes;
        const mapped = routes3.map((key) => key.key);
      }
      if (state.state.index < state.state.routes.length - 1) {
        const routes4 = state.state.routes;
        let substr = routes4.slice(0, state.state.index + 1);
      } else {
        substr = state.state.routes;
      }
      ({ openingRouteKeys, closingRouteKeys } = previousRoutes);
      let found6 = closingRouteKeys;
      const replacingRouteKeys = previousRoutes.replacingRouteKeys;
      let combined4 = replacingRouteKeys;
      const previousRoutes1 = previousRoutes.previousRoutes;
      const tmp2 = previousRoutes1[previousRoutes1.length - 1];
      const tmp3 = substr[substr.length - 1];
      function isAnimationEnabled(key) {
        let tmp = key.descriptors[key];
        if (!tmp) {
          tmp = arg1.descriptors[key];
        }
        let tmp3 = !tmp;
        if (!tmp3) {
          tmp3 = false !== tmp.options.animationEnabled;
        }
        return tmp3;
      }
      if (tmp2) {
        if (tmp2.key !== tmp3.key) {
          if (previousRoutes1.some((key) => key.key === tmp3.key)) {
            let arr7 = substr;
            let tmp4 = openingRouteKeys;
            let tmp5 = closingRouteKeys;
            let tmp6 = replacingRouteKeys;
            if (!substr.some((key) => key.key === tmp2.key)) {
              let combined1 = substr;
              let found = openingRouteKeys;
              let tmp33 = closingRouteKeys;
              let tmp34 = replacingRouteKeys;
              if (tmp30) {
                const items = [];
                const items1 = [tmp2.key];
                const combined = items.concat(combined4(closingRouteKeys), items1);
                found6 = combined;
                found = openingRouteKeys.filter((arg0) => arg0 !== tmp2.key);
                const found1 = replacingRouteKeys.filter((arg0) => arg0 !== tmp2.key);
                combined4 = found1;
                const items2 = [];
                const items3 = [tmp2];
                combined1 = items2.concat(combined4(substr), items3);
                tmp33 = combined;
                tmp34 = found1;
              }
              arr7 = combined1;
              tmp4 = found;
              tmp5 = tmp33;
              tmp6 = tmp34;
              const tmp30 = isAnimationEnabled(tmp2.key) && !closingRouteKeys.includes(tmp2.key);
            }
          } else {
            arr7 = substr;
            tmp4 = openingRouteKeys;
            tmp5 = closingRouteKeys;
            tmp6 = replacingRouteKeys;
            if (tmp10) {
              const items4 = [];
              const items5 = [tmp3.key];
              const combined2 = items4.concat(combined4(openingRouteKeys), items5);
              let found2 = closingRouteKeys.filter((arg0) => arg0 !== tmp3.key);
              found6 = found2;
              const found3 = replacingRouteKeys.filter((arg0) => arg0 !== tmp3.key);
              combined4 = found3;
              if (substr.some((key) => key.key === tmp2.key)) {
                arr7 = substr;
                tmp4 = combined2;
                tmp5 = found2;
                tmp6 = found3;
              } else {
                let found4 = combined2.filter((arg0) => arg0 !== tmp2.key);
                const animationTypeForReplace = state.descriptors[tmp3.key] || previousRoutes.descriptors[tmp3.key].options.animationTypeForReplace;
                let str = "push";
                if (null != animationTypeForReplace) {
                  str = animationTypeForReplace;
                }
                if ("pop" === str) {
                  const items6 = [];
                  const items7 = [tmp2.key];
                  found2 = items6.concat(combined4(found2), items7);
                  found6 = found2;
                  let found5 = found4.filter((arg0) => arg0 !== tmp3.key);
                  found4 = [];
                  const items8 = [tmp2];
                  let combined3 = found4.concat(combined4(substr), items8);
                  found6 = found2;
                  combined4 = found3;
                  const tmp9 = combined4(substr);
                } else {
                  const items9 = [];
                  const items10 = [tmp2.key];
                  combined4 = items9.concat(combined4(found3), items10);
                  found6 = found2.filter((arg0) => arg0 !== tmp2.key);
                  const substr1 = substr.slice();
                  substr1.splice(substr1.length - 1, 0, tmp2);
                  combined3 = substr1;
                  found5 = found4;
                }
                const tmp17 = state.descriptors[tmp3.key] || previousRoutes.descriptors[tmp3.key];
              }
            }
            const tmp10 = isAnimationEnabled(tmp3.key) && !openingRouteKeys.includes(tmp3.key);
          }
        }
        if (arr7.length) {
          obj = {
            routes: arr7,
            previousRoutes: state.state.routes,
            previousDescriptors: state.descriptors,
            openingRouteKeys: tmp4,
            closingRouteKeys: tmp5,
            replacingRouteKeys: tmp6,
            descriptors: arr7.reduce((arg0, key) => {
                  let tmp = arg0.descriptors[key.key];
                  if (!tmp) {
                    tmp = key.descriptors[key.key];
                  }
                  arg0[key.key] = tmp;
                  return arg0;
                }, {})
          };
          return obj;
        } else {
          const _Error = Error;
          const error = new Error("There should always be at least one route in the navigation state.");
          throw error;
        }
      }
      if (replacingRouteKeys.length) {
        const substr2 = substr.slice();
        const splice = substr2.splice;
        const items11 = [substr2.length - 1, 0];
        const routes5 = previousRoutes.routes;
        splice.apply(substr2, items11.concat(combined4(routes5.filter((key) => {
          const tmp = !isAnimationEnabled(key.key);
          let tmp2 = !tmp;
          if (!tmp) {
            let hasItem = combined4.includes(key);
            if (!hasItem) {
              hasItem = found6.includes(key);
            }
            tmp2 = hasItem;
          }
          return tmp2;
        }))));
        arr7 = substr2;
        tmp4 = openingRouteKeys;
        tmp5 = closingRouteKeys;
        tmp6 = replacingRouteKeys;
      } else {
        arr7 = substr;
        tmp4 = openingRouteKeys;
        tmp5 = closingRouteKeys;
        tmp6 = replacingRouteKeys;
      }
    }
  };
  const items1 = [obj];
  return callback(StackView, items, items1);
}(importAllResult.Component);
