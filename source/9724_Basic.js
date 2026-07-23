// Module ID: 9724
// Function ID: 75593
// Name: Basic
// Dependencies: [27, 31, 33, 9725]
// Exports: Basic

// Module 9724 (Basic)
import { View } from "get ActivityIndicator";
import "result";
import { jsx } from "jsxProd";


export const Basic = function Basic(data) {
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let dotStyle;
  let horizontal;
  let require;
  ({ activeDotStyle: require, dotStyle } = data);
  ({ progress: View, horizontal } = data);
  const jsx = tmp;
  data = data.data;
  const size = data.size;
  ({ renderItem: closure_6, onPress: closure_7, carouselName: closure_8 } = data);
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
        let obj = {};
        const items = [{ justifyContent: "space-between", alignSelf: "center" }, , ];
        obj = {};
        if (tmp) {
          obj.flexDirection = "row";
          let tmp7 = obj;
        } else {
          obj.flexDirection = "column";
          tmp7 = obj;
        }
        items[1] = tmp7;
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
            onPress() {
              let tmp;
              if (null != outer1_7) {
                tmp = outer1_7(closure_0);
              }
              return tmp;
            },
            accessibilityLabel: "Slide " + index + 1 + " of " + data.length + " - " + closure_8
          };
          let tmp2;
          if (null != callback) {
            tmp2 = callback(arg0, index);
          }
          obj.children = tmp2;
          return closure_3(outer1_0(dotStyle[3]).PaginationItem, obj, index);
        });
        return <View />;
      }
    }
  }
  const error = new Error("size/width/height must be a number");
  throw error;
};
