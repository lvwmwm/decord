// Module ID: 9744
// Function ID: 9745
// Name: ZoomLayout
// Dependencies: [19, 17, 21, 9745, 2]

// Module 9744 (ZoomLayout)
import ZoomLayoutNativeComponentDefault from "ZoomLayoutNativeComponent" /* 9745 */;
import noop from "module_19" /* 19 */;

const require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default noop.forwardRef((arg0, ref) => {
  ref = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    zoomTo(scale) {
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
        value = PixelRatio.get();
        const result = x * value;
        const result1 = y * value;
        const Commands = ref(9745).Commands;
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
        const Commands = ref(9745).Commands;
        Commands.unzoom(tmp.current, flag);
      }
    }
  }));
  let obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return jsx(ZoomLayoutNativeComponentDefault, {});
});
