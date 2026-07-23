// Module ID: 9726
// Function ID: 75600
// Name: Custom
// Dependencies: [31, 27, 33, 9727]
// Exports: Custom

// Module 9726 (Custom)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;

export const Custom = function Custom(activeDotStyle) {
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let horizontal;
  activeDotStyle = activeDotStyle.activeDotStyle;
  const dotStyle = activeDotStyle.dotStyle;
  ({ progress: View, horizontal } = activeDotStyle);
  const jsx = tmp;
  const data = activeDotStyle.data;
  const size = activeDotStyle.size;
  ({ renderItem: closure_6, onPress: closure_7, customReanimatedStyle: closure_8, carouselName: closure_9 } = activeDotStyle);
  if ("string" !== typeof size) {
    let width;
    if (null != dotStyle) {
      width = dotStyle.width;
    }
    if ("string" !== typeof width) {
      let height;
      if (null != dotStyle) {
        height = dotStyle.height;
      }
      if ("string" !== typeof height) {
        let width1;
        if (null != activeDotStyle) {
          width1 = activeDotStyle.width;
        }
        if ("string" !== typeof width1) {
          let height1;
          if (null != activeDotStyle) {
            height1 = activeDotStyle.height;
          }
          if ("string" !== typeof height1) {
            let num = 0;
            if (null != size) {
              num = size;
            }
            let width2;
            if (null != dotStyle) {
              width2 = dotStyle.width;
            }
            let num2 = 0;
            if (null != width2) {
              num2 = width2;
            }
            let width3;
            if (null != activeDotStyle) {
              width3 = activeDotStyle.width;
            }
            let num3 = 0;
            if (null != width3) {
              num3 = width3;
            }
            let num4 = 0;
            const bound = Math.max(num, num2, num3);
            if (null != size) {
              num4 = size;
            }
            let height2;
            if (null != dotStyle) {
              height2 = dotStyle.height;
            }
            let num5 = 0;
            if (null != height2) {
              num5 = height2;
            }
            let height3;
            if (null != activeDotStyle) {
              height3 = activeDotStyle.height;
            }
            let num6 = 0;
            if (null != height3) {
              num6 = height3;
            }
            let obj = {};
            obj = { justifyContent: "space-between", alignSelf: "center", minWidth: bound, minHeight: Math.max(num4, num5, num6) };
            const items = [obj, , ];
            obj = {};
            if (tmp) {
              obj.flexDirection = "row";
              let tmp14 = obj;
            } else {
              obj.flexDirection = "column";
              tmp14 = obj;
            }
            items[1] = tmp14;
            items[2] = tmp2;
            obj.style = items;
            obj.children = data.map((arg0, index) => {
              let closure_0 = index;
              const obj = {
                index,
                size,
                count: data.length,
                dotStyle,
                animValue: closure_2,
                horizontal: !closure_3,
                activeDotStyle: closure_0,
                customReanimatedStyle: closure_8,
                onPress() {
                  let tmp;
                  if (null != outer1_7) {
                    tmp = outer1_7(closure_0);
                  }
                  return tmp;
                },
                accessibilityLabel: "Slide " + index + 1 + " of " + data.length + " - " + closure_9
              };
              let tmp2;
              if (null != callback) {
                tmp2 = callback(arg0, index);
              }
              obj.children = tmp2;
              return closure_3(activeDotStyle(dotStyle[3]).PaginationItem, obj, index);
            });
            return <View />;
          }
        }
      }
    }
  }
  const error = new Error("size/width/height must be a number");
  throw error;
};
