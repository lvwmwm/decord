// Module ID: 9716
// Function ID: 75528
// Name: Basic
// Dependencies: [131072, 108593152, 117440512, 251658240]
// Exports: Basic

// Module 9716 (Basic)
const View = require(dependencyMap[0]).View;
importDefault(dependencyMap[1]);
const jsx = require(dependencyMap[2]).jsx;

export const Basic = function Basic(data) {
  let dotStyle;
  let horizontal;
  ({ activeDotStyle: closure_0, dotStyle } = data);
  const dependencyMap = dotStyle;
  ({ progress: closure_2, horizontal } = data);
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
        const items = [{ cel-gaulish: "<string:1900025036>", ces: "form" }, , ];
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
          const obj = {
            index,
            size,
            count: data.length,
            dotStyle,
            animValue: closure_2,
            horizontal: !tmp,
            activeDotStyle: index,
            onPress() {
              let tmp;
              if (null != callback) {
                tmp = callback(arg1);
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
          return tmp(index(dotStyle[3]).PaginationItem, obj, index);
        });
        return <View {...obj} />;
      }
    }
  }
  const error = new Error("size/width/height must be a number");
  throw error;
};
