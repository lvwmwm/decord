// Module ID: 9238
// Function ID: 72252
// Name: useFastestListComputedStyles
// Dependencies: []
// Exports: default

// Module 9238 (useFastestListComputedStyles)
let closure_0 = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/fastest_list/useFastestListComputedStyles.android.tsx");

export default function useFastestListComputedStyles(style) {
  style = style.style;
  const React = style;
  const items = [style];
  return React.useMemo(() => {
    if (null != style) {
      if (null != style) {
        let obj = style;
      } else {
        obj = { flex: 1 };
      }
      const items = [obj];
    } else {
      obj = { flex: 1 };
      const tmp2Result = tmp2(obj);
      let marginStart;
      if (null != tmp2Result) {
        marginStart = tmp2Result.marginStart;
      }
      if (null == marginStart) {
        let marginLeft;
        if (null != tmp2Result) {
          marginLeft = tmp2Result.marginLeft;
        }
        marginStart = marginLeft;
      }
      if (null == marginStart) {
        let marginHorizontal;
        if (null != tmp2Result) {
          marginHorizontal = tmp2Result.marginHorizontal;
        }
        marginStart = marginHorizontal;
      }
      if (null == marginStart) {
        let margin;
        if (null != tmp2Result) {
          margin = tmp2Result.margin;
        }
        marginStart = margin;
      }
      let num3 = 0;
      if (null != marginStart) {
        num3 = marginStart;
      }
      let paddingStart;
      if (null != tmp2Result) {
        paddingStart = tmp2Result.paddingStart;
      }
      if (null == paddingStart) {
        let paddingLeft;
        if (null != tmp2Result) {
          paddingLeft = tmp2Result.paddingLeft;
        }
        paddingStart = paddingLeft;
      }
      if (null == paddingStart) {
        let paddingHorizontal;
        if (null != tmp2Result) {
          paddingHorizontal = tmp2Result.paddingHorizontal;
        }
        paddingStart = paddingHorizontal;
      }
      if (null == paddingStart) {
        let padding;
        if (null != tmp2Result) {
          padding = tmp2Result.padding;
        }
        paddingStart = padding;
      }
      let num4 = 0;
      if (null != paddingStart) {
        num4 = paddingStart;
      }
      if ("number" === typeof num3) {
        if ("number" === typeof num4) {
          let marginEnd;
          if (null != tmp2Result) {
            marginEnd = tmp2Result.marginEnd;
          }
          if (null == marginEnd) {
            let marginRight;
            if (null != tmp2Result) {
              marginRight = tmp2Result.marginRight;
            }
            marginEnd = marginRight;
          }
          if (null == marginEnd) {
            let marginHorizontal1;
            if (null != tmp2Result) {
              marginHorizontal1 = tmp2Result.marginHorizontal;
            }
            marginEnd = marginHorizontal1;
          }
          if (null == marginEnd) {
            let margin1;
            if (null != tmp2Result) {
              margin1 = tmp2Result.margin;
            }
            marginEnd = margin1;
          }
          let num5 = 0;
          if (null != marginEnd) {
            num5 = marginEnd;
          }
          let paddingEnd;
          if (null != tmp2Result) {
            paddingEnd = tmp2Result.paddingEnd;
          }
          if (null == paddingEnd) {
            let paddingRight;
            if (null != tmp2Result) {
              paddingRight = tmp2Result.paddingRight;
            }
            paddingEnd = paddingRight;
          }
          if (null == paddingEnd) {
            let paddingHorizontal1;
            if (null != tmp2Result) {
              paddingHorizontal1 = tmp2Result.paddingHorizontal;
            }
            paddingEnd = paddingHorizontal1;
          }
          if (null == paddingEnd) {
            let padding1;
            if (null != tmp2Result) {
              padding1 = tmp2Result.padding;
            }
            paddingEnd = padding1;
          }
          let num6 = 0;
          if (null != paddingEnd) {
            num6 = paddingEnd;
          }
          if ("number" === typeof num5) {
            if ("number" === typeof num6) {
              obj = { style: tmp2Result, marginEnd: num5 + num6, marginStart: num3 + num4 };
              return obj;
            }
          }
          const _Error = Error;
          const error = new Error("FastestList: paddingStart and paddingEnd must be numbers.");
          throw error;
        }
      }
      const _Error2 = Error;
      const error1 = new Error("FastestList: marginStart and marginEnd must be numbers.");
      throw error1;
    }
  }, items);
};
