// Module ID: 10717
// Function ID: 10718
// Name: ZoomLayout
// Dependencies: [109, 19, 17, 21, 558, 576, 10718, 2]

// Module 10717 (ZoomLayout)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ZoomLayoutNativeComponentDefault from "ZoomLayoutNativeComponent" /* 10718 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["ref"];
const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ZoomLayout(ref) {
  let ref1;
  let tmp11;
  let tmp3;
  let tmp4;
  let tmp9;
  let tmp = dependencyMap;
  let obj = ref1(576);
  const cResult = obj.c(6);
  if (cResult[0] !== ref) {
    ref = ref.ref;
    const tmp7 = _objectWithoutProperties(ref, closure_3);
    let num = 0;
    cResult[0] = ref;
    cResult[1] = tmp7;
    cResult[2] = ref;
    tmp4 = ref;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  ref1 = react.useRef(null);
  const obj2 = react;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function z() {
      let ref;
      let obj = {
        zoomTo(arg0) {
          let animated;
          let scale;
          let x;
          let y;
          ({ scale, animated } = arg0);
          let num = 2;
          ({ x, y } = arg0);
          if (undefined !== scale) {
            num = scale;
          }
          if (null != ref.current) {
            const value = PixelRatio.get();
            const result = x * value;
            const result1 = y * value;
            const Commands = ref1(dependencyMap[6]).Commands;
            Commands.zoomTo(tmp2.current, result / num - result, result1 / num - result1, num, undefined === animated || animated);
          }
        },
        unzoom(arg0) {
          let obj = arg0;
          if (undefined === arg0) {
            obj = {};
          }
          const animated = obj.animated;
          const tmp = undefined === animated || animated;
          if (null != ref.current) {
            const Commands = ref1(dependencyMap[6]).Commands;
            Commands.unzoom(tmp2.current, tmp);
          }
        }
      };
      return obj;
    };
    cResult[3] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  const imperativeHandle = obj2.useImperativeHandle(tmp4, tmp9);
  if (cResult[4] !== tmp3) {
    ZoomLayoutNativeComponentDefault;
    const merged = Object.assign(tmp3);
    const tmp18 = <tmp14 ref={ref1} />;
    cResult[4] = tmp3;
    cResult[5] = tmp18;
    tmp11 = tmp18;
  } else {
    tmp11 = cResult[5];
  }
  return tmp11;
}) : (function ZoomLayout(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const ref1 = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(ref, () => {
    let ref;
    let obj = {
      zoomTo(scale) {
        let x;
        let y;
        let num = scale.scale;
        ({ x, y } = scale);
        if (num === undefined) {
          num = 2;
        }
        let flag = scale.animated;
        if (flag === undefined) {
          flag = true;
        }
        if (null != ref.current) {
          const value = PixelRatio.get();
          const result = x * value;
          const result1 = y * value;
          const Commands = ref1(dependencyMap[6]).Commands;
          Commands.zoomTo(tmp.current, result / num - result, result1 / num - result1, num, flag);
        }
      },
      unzoom() {
        let obj = arg0;
        if (arg0 === undefined) {
          obj = {};
        }
        let flag = obj.animated;
        if (flag === undefined) {
          flag = true;
        }
        if (null != ref.current) {
          const Commands = ref1(dependencyMap[6]).Commands;
          Commands.unzoom(tmp.current, flag);
        }
      }
    };
    return obj;
  });
  ZoomLayoutNativeComponentDefault;
  const merged1 = Object.assign(merged);
  return <tmp4 ref={ref1} />;
});
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default tmp2;
