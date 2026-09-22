// Module ID: 7255
// Function ID: 7256
// Name: HeaderContainer
// Dependencies: [19, 17, 21, 5850, 1485, 7256, 7257]
// Exports: HeaderContainer

// Module 7255 (HeaderContainer)
import Link from "Link" /* 1485 */;
import _mod5850 from "module_5850" /* 5850 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const styles = StyleSheet.create({ absolute: { position: "absolute", top: 0, start: 0, end: 0 } });

export const HeaderContainer = function HeaderContainer(getFocusedRoute) {
  ({ mode: require, scenes, layout: dependencyMap, getPreviousScene: noop, contentHeight: closure_3, onContentHeightChange: jsx } = getFocusedRoute);
  const focusedRoute = getFocusedRoute.getFocusedRoute();
  closure_6 = noop.useContext(_mod5850.HeaderBackContext);
  const buildHref = Link.useLinkBuilder().buildHref;
  let obj2 = { pointerEvents: "box-none", style: getFocusedRoute.style, children: null };
  let substr = scenes.slice(-2);
  obj2.children = substr.map((descriptor, index, arr) => {
    if ("screen" !== descriptor) {
      if (descriptor) {
        let options = descriptor.descriptor.options;
        ({ header, headerShown } = options);
        let tmp3 = undefined === headerShown;
        if (!tmp3) {
          tmp3 = headerShown;
        }
        if (options.headerMode === tmp) {
          if (tmp3) {
            const obj = { route: descriptor.descriptor.route };
            const tmp8 = closure_2(obj);
            let tmp9 = closure_6;
            let tmp10 = closure_6;
            if (tmp8) {
              const route = tmp8.descriptor.route;
              if (tmp8) {
                const obj2 = { title: require("module_5850").getHeaderTitle(tmp11, route.name), href: buildHref(route.name, route.params) };
                tmp9 = obj2;
                const obj3 = require("module_5850");
              }
              tmp10 = tmp9;
            }
            descriptor = undefined;
            if (arr[index - 1] != null) {
              descriptor = tmp15.descriptor;
            }
            let descriptor1;
            if (arr[index + 1] != null) {
              descriptor1 = tmp18.descriptor;
            }
            let options1;
            if (descriptor != null) {
              options1 = descriptor.options;
            }
            if (!options1) {
              options1 = {};
            }
            const headerShown2 = options1.headerShown;
            const substr = arr.slice(index + 1);
            const found = substr.find((descriptor) => {
              let options;
              if (descriptor != null) {
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
            let options2;
            if (found != null) {
              options2 = found.descriptor.options;
            }
            if (!options2) {
              options2 = {};
            }
            const gestureDirection = options2.gestureDirection;
            const obj4 = { layout, back: tmp10, progress: descriptor.progress, options: descriptor.descriptor.options, route: descriptor.descriptor.route, navigation: descriptor.descriptor.navigation, styleInterpolator: null };
            if ("float" === tmp) {
              if (!tmp22) {
                let forNoAnimation = tmp5;
              } else {
                if ("vertical" !== gestureDirection) {
                  if ("vertical-inverted" !== gestureDirection) {
                    if ("horizontal-inverted" === gestureDirection) {
                      let forSlideUp = require("module_7256").forSlideRight;
                    } else {
                      forSlideUp = require("module_7256").forSlideLeft;
                    }
                  }
                }
                forSlideUp = require("module_7256").forSlideUp;
              }
            } else {
              forNoAnimation = require("module_7256").forNoAnimation;
            }
            obj4.styleInterpolator = forNoAnimation;
            const obj5 = { route: descriptor.descriptor.route, navigation: descriptor.descriptor.navigation, children: null };
            let str5 = "none";
            if (closure_5.key === descriptor.descriptor.route.key) {
              str5 = "box-none";
            }
            const obj6 = { pointerEvents: str5, "aria-hidden": closure_5.key !== descriptor.descriptor.route.key, style: null, children: null };
            if ("float" !== tmp) {
              let tmp39 = null;
              obj6.style = tmp39;
              let fn;
              if (closure_4) {
                fn = (height) => {
                  jsx({ route: descriptor.descriptor.route, height: height.nativeEvent.layout.height });
                };
              }
              const obj7 = { pointerEvents: "box-none", onLayout: fn, children: null };
              if (undefined !== header) {
                let headerResult = header(obj4);
              } else {
                const obj8 = {};
                const merged = Object.assign(obj4);
                headerResult = tmp35(require("Header").Header, obj8);
              }
              obj7.children = headerResult;
              obj6.children = tmp35(tmp38, obj7);
              obj5.children = tmp35(tmp38, obj6);
              return tmp35(require("Link").NavigationProvider, obj5, descriptor.descriptor.route.key);
            }
            const items = [closure_5.absolute, ];
            let tmp41 = null;
            if (tmp2) {
              const obj9 = { minHeight };
              tmp41 = obj9;
            }
            items[1] = tmp41;
            tmp39 = items;
            const tmp20 = undefined === headerShown2 || headerShown2;
            tmp22 = (false === (undefined === headerShown2 || headerShown2) || "screen" === options1.headerMode) && !descriptor1 || found;
          }
        }
        return null;
      }
    }
    return null;
  });
  return <minHeight pointerEvents="box-none" style={arg0.style}>{null}</minHeight>;
};
