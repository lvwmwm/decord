// Module ID: 8890
// Function ID: 8891
// Name: ZoomLayout
// Dependencies: [19, 17, 21, 8891, 2]

// Module 8890 (ZoomLayout)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ZoomLayoutNativeComponentDefault from "ZoomLayoutNativeComponent" /* 8891 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((arg0, ref) => {
  ref = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(ref, () => {
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
          const Commands = ref(dependencyMap[3]).Commands;
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
          const Commands = ref(dependencyMap[3]).Commands;
          Commands.unzoom(tmp.current, flag);
        }
      }
    };
    return obj;
  });
  ZoomLayoutNativeComponentDefault;
  const merged = Object.assign(arg0);
  return <tmp3 ref={ref} />;
});
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default forwardRefResult;
