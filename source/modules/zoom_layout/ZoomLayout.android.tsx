// Module ID: 10572
// Function ID: 82530
// Dependencies: []

// Module 10572
const importAllResult = importAll(dependencyMap[0]);
const PixelRatio = arg1(dependencyMap[1]).PixelRatio;
const jsx = arg1(dependencyMap[2]).jsx;
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  const ref = importAllResult.useRef(null);
  arg1 = ref;
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
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
      if (null != lib.current) {
        const value = closure_4.get();
        const result = x * value;
        const result1 = y * value;
        const Commands = lib(closure_2[3]).Commands;
        Commands.zoomTo(lib.current, result / num - result, result1 / num - result1, num, flag);
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
      if (null != lib.current) {
        const Commands = lib(closure_2[3]).Commands;
        Commands.unzoom(lib.current, flag);
      }
    }
  }));
  const obj = {};
  const merged = Object.assign(arg0);
  obj["ref"] = ref;
  return jsx(importDefault(dependencyMap[3]), obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default forwardRefResult;
