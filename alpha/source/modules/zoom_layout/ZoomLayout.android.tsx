// Module ID: 11770
// Function ID: 11771
// Name: ZoomLayout
// Dependencies: [19, 17, 21, 11771, 2]
// Exports: default

// Module 11770 (ZoomLayout)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ZoomLayoutNativeComponentDefault from "ZoomLayoutNativeComponent" /* 11771 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default function ZoomLayout(ref) {
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
          const Commands = ref1(dependencyMap[3]).Commands;
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
          const Commands = ref1(dependencyMap[3]).Commands;
          Commands.unzoom(tmp.current, flag);
        }
      }
    };
    return obj;
  });
  ZoomLayoutNativeComponentDefault;
  const merged1 = Object.assign(merged);
  return <tmp4 ref={ref1} />;
};
