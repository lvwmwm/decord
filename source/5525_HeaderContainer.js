// Module ID: 5525
// Function ID: 47055
// Name: HeaderContainer
// Dependencies: []
// Exports: default

// Module 5525 (HeaderContainer)
let StyleSheet;
let closure_3 = importAll(dependencyMap[0]);
({ Animated: closure_4, StyleSheet, View: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const styles = StyleSheet.create({ header: { color: "<string:3082955202>", fontFamily: "<string:103629460>", fontSize: "<string:3630497793>", lineHeight: "<string:961609729>" } });

export default function HeaderContainer(getFocusedRoute) {
  let scenes;
  ({ mode: closure_0, scenes, layout: closure_1, getPreviousScene: closure_2, onContentHeightChange: closure_3 } = getFocusedRoute);
  const RN = getFocusedRoute.getFocusedRoute();
  let closure_5 = React.useContext(arg1(dependencyMap[3]).HeaderBackContext);
  const obj = { pointerEvents: "box-none", style: getFocusedRoute.style };
  const substr = scenes.slice(-3);
  obj.children = substr.map((descriptor, arg1, arr) => {
    let header;
    let headerShown;
    if ("screen" !== descriptor) {
      if (descriptor) {
        let options = descriptor.descriptor.options;
        ({ header, headerShown } = options);
        let tmp = undefined === headerShown;
        if (!tmp) {
          tmp = headerShown;
        }
        if (options.headerMode === descriptor) {
          if (tmp) {
            let obj = { route: descriptor.descriptor.route };
            const tmp8 = callback2(obj);
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
              obj = { layout: callback, back: tmp9, progress: descriptor.progress, options: descriptor.descriptor.options, route: descriptor.descriptor.route, navigation: descriptor.descriptor.navigation };
              if ("float" === descriptor) {
                if (!tmp22) {
                  let forNoAnimation = tmp3;
                } else {
                  if ("vertical" !== gestureDirection) {
                    if ("vertical-inverted" !== gestureDirection) {
                      if ("horizontal-inverted" === gestureDirection) {
                        let forSlideUp = descriptor(callback2[4]).forSlideRight;
                      } else {
                        forSlideUp = descriptor(callback2[4]).forSlideLeft;
                      }
                    }
                  }
                  forSlideUp = descriptor(callback2[4]).forSlideUp;
                }
              } else {
                forNoAnimation = descriptor(callback2[4]).forNoAnimation;
              }
              obj.styleInterpolator = forNoAnimation;
              obj = { value: descriptor.descriptor.navigation };
              const obj1 = { value: descriptor.descriptor.route };
              let obj2 = {};
              let fn;
              if (closure_3) {
                fn = (height) => {
                  callback({ route: height.descriptor.route, height: height.nativeEvent.layout.height });
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
              if ("float" !== descriptor) {
                header = null;
                obj2.style = header;
                if (undefined !== header) {
                  let headerResult = header(obj);
                } else {
                  const _Object = Object;
                  headerResult = callback3(callback(callback2[6]), Object.assign({}, obj));
                  const tmp45 = callback(callback2[6]);
                }
                obj2.children = headerResult;
                obj1.children = tmp34(tmp37, obj2);
                obj.children = tmp34(descriptor(callback2[5]).NavigationRouteContext.Provider, obj1);
                return tmp34(descriptor(callback2[5]).NavigationContext.Provider, obj, descriptor.descriptor.route.key);
              }
              header = header.header;
              const tmp20 = undefined === headerShown2 || headerShown2;
              const tmp22 = (false === (undefined === headerShown2 || headerShown2) || "screen" === options.headerMode) && !descriptor1 || found;
              const tmp37 = closure_5;
            } else {
              let route = tmp8.descriptor.route;
              if (tmp8) {
                const obj3 = {};
                obj2 = descriptor(callback2[3]);
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
  return <RN.View {...obj} />;
};
