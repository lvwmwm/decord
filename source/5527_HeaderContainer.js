// Module ID: 5527
// Function ID: 47086
// Name: HeaderContainer
// Dependencies: [31, 27, 33, 5528, 5551, 1457, 5552]
// Exports: default

// Module 5527 (HeaderContainer)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let closure_4;
let closure_5;
const require = arg1;
({ Animated: closure_4, StyleSheet, View: closure_5 } = get_ActivityIndicator);
const styles = StyleSheet.create({ header: { position: "absolute", top: 0, left: 0, right: 0 } });

export default function HeaderContainer(getFocusedRoute) {
  let result;
  let dependencyMap;
  let importDefault;
  let require;
  let scenes;
  ({ mode: require, scenes, layout: importDefault, getPreviousScene: dependencyMap, onContentHeightChange: result } = getFocusedRoute);
  const RN = getFocusedRoute.getFocusedRoute();
  let closure_5 = React.useContext(require(5528) /* Background */.HeaderBackContext);
  let obj = { pointerEvents: "box-none", style: getFocusedRoute.style };
  let substr = scenes.slice(-3);
  obj.children = substr.map((descriptor, arg1, arr) => {
    let header;
    let headerShown;
    let closure_0 = descriptor;
    if ("screen" !== closure_0) {
      if (descriptor) {
        let options = descriptor.descriptor.options;
        ({ header, headerShown } = options);
        let tmp = undefined === headerShown;
        if (!tmp) {
          tmp = headerShown;
        }
        if (options.headerMode === closure_0) {
          if (tmp) {
            let obj = { route: descriptor.descriptor.route };
            const tmp8 = callback(obj);
            if (!tmp8) {
              descriptor = undefined;
              if (null != arr[arg1 - 1]) {
                descriptor = tmp15.descriptor;
              }
              let descriptor1;
              if (null != arr[arg1 + 1]) {
                descriptor1 = tmp18.descriptor;
              }
              options = undefined;
              if (null != descriptor) {
                options = descriptor.options;
              }
              if (!options) {
                options = {};
              }
              const headerShown2 = options.headerShown;
              const substr = arr.slice(arg1 + 1);
              const found = substr.find((descriptor) => {
                let options;
                if (null != descriptor) {
                  options = descriptor.descriptor.options;
                }
                if (!options) {
                  options = {};
                }
                const headerShown = options.headerShown;
                let tmp3 = false === (undefined === headerShown || headerShown);
                if (!tmp3) {
                  tmp3 = "screen" === tmp2;
                }
                return tmp3;
              });
              let options1;
              if (null != found) {
                options1 = found.descriptor.options;
              }
              if (!options1) {
                options1 = {};
              }
              const gestureDirection = options1.gestureDirection;
              obj = { layout: closure_1, back: tmp9, progress: descriptor.progress, options: descriptor.descriptor.options, route: descriptor.descriptor.route, navigation: descriptor.descriptor.navigation };
              if ("float" === closure_0) {
                if (!tmp22) {
                  let forNoAnimation = tmp3;
                } else {
                  if ("vertical" !== gestureDirection) {
                    if ("vertical-inverted" !== gestureDirection) {
                      if ("horizontal-inverted" === gestureDirection) {
                        let forSlideUp = outer1_0(outer1_2[4]).forSlideRight;
                      } else {
                        forSlideUp = outer1_0(outer1_2[4]).forSlideLeft;
                      }
                    }
                  }
                  forSlideUp = outer1_0(outer1_2[4]).forSlideUp;
                }
              } else {
                forNoAnimation = outer1_0(outer1_2[4]).forNoAnimation;
              }
              obj.styleInterpolator = forNoAnimation;
              obj = { value: descriptor.descriptor.navigation };
              const obj1 = { value: descriptor.descriptor.route };
              let obj2 = {};
              let fn;
              if (result) {
                fn = (height) => {
                  outer1_3({ route: descriptor.descriptor.route, height: height.nativeEvent.layout.height });
                };
              }
              obj2.onLayout = fn;
              let str5 = "none";
              if (tmp6) {
                str5 = "box-none";
              }
              obj2.pointerEvents = str5;
              obj2.accessibilityElementsHidden = !tmp6;
              let str6 = "no-hide-descendants";
              if (tmp6) {
                str6 = "auto";
              }
              obj2.importantForAccessibility = str6;
              if ("float" !== closure_0) {
                header = null;
                obj2.style = header;
                if (undefined !== header) {
                  let headerResult = header(obj);
                } else {
                  const _Object = Object;
                  headerResult = outer1_6(outer1_1(outer1_2[6]), Object.assign({}, obj));
                  const tmp45 = outer1_1(outer1_2[6]);
                }
                obj2.children = headerResult;
                obj1.children = tmp34(tmp37, obj2);
                obj.children = tmp34(outer1_0(outer1_2[5]).NavigationRouteContext.Provider, obj1);
                return tmp34(outer1_0(outer1_2[5]).NavigationContext.Provider, obj, descriptor.descriptor.route.key);
              }
              header = outer1_7.header;
              const tmp20 = undefined === headerShown2 || headerShown2;
              tmp22 = (false === (undefined === headerShown2 || headerShown2) || "screen" === options.headerMode) && !descriptor1 || found;
              tmp37 = closure_5;
            } else {
              let route = tmp8.descriptor.route;
              if (tmp8) {
                const obj3 = {};
                obj2 = outer1_0(outer1_2[3]);
                route = obj2.getHeaderTitle(tmp10, route.name);
                obj3.title = route;
                let tmp11 = obj3;
              } else {
                tmp11 = closure_5;
              }
            }
          }
        }
        return null;
      }
    }
    return null;
  });
  return <RN.View pointerEvents="box-none" style={arg0.style} />;
};
