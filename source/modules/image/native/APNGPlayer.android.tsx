// Module ID: 7956
// Function ID: 63465
// Name: useAPNGPlayerControls
// Dependencies: [31, 33, 7876, 2]
// Exports: useAPNGPlayerControls

// Module 7956 (useAPNGPlayerControls)
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const forwardRefResult = importAllResult.forwardRef((onLoad) => {
  onLoad = onLoad.onLoad;
  let obj = Object.create(null);
  obj.onLoad = 0;
  const merged = Object.assign(onLoad, obj);
  const ref = importAllResult.useRef(null);
  const items = [onLoad];
  const callback = importAllResult.useCallback((nativeEvent) => {
    if (null != onLoad) {
      onLoad(nativeEvent.nativeEvent.url);
    }
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    play() {
      if (null != outer1_1.current) {
        const Commands = onLoad(outer2_2[2]).Commands;
        Commands.play(outer1_1.current);
      }
    },
    pause() {
      if (null != outer1_1.current) {
        const Commands = onLoad(outer2_2[2]).Commands;
        Commands.pause(outer1_1.current);
      }
    },
    stop() {
      if (null != outer1_1.current) {
        const Commands = onLoad(outer2_2[2]).Commands;
        Commands.seek(outer1_1.current, 0);
        const Commands2 = onLoad(outer2_2[2]).Commands;
        Commands2.pause(outer1_1.current);
      }
    },
    seek(arg0) {
      if (null != outer1_1.current) {
        const Commands = onLoad(outer2_2[2]).Commands;
        Commands.seek(outer1_1.current, arg0);
      }
    }
  }));
  obj = { ref, onLoad: callback };
  const merged1 = Object.assign(merged);
  return jsx(ref(7876), { ref, onLoad: callback });
});
const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/image/native/APNGPlayer.android.tsx");

export const useAPNGPlayerControls = function useAPNGPlayerControls(ref) {
  let closure_0 = ref;
  let closure_1 = importAllResult.useRef(false);
  const items = [ref];
  return importAllResult.useMemo(() => ({
    play() {
      let current = null == outer1_0.current;
      if (!current) {
        current = outer1_1.current;
      }
      if (!current) {
        const current2 = outer1_0.current;
        current2.play();
        outer1_1.current = true;
      }
    },
    pause() {
      let current = null != outer1_0.current;
      if (current) {
        current = outer1_1.current;
      }
      if (current) {
        const current2 = outer1_0.current;
        current2.pause();
        outer1_1.current = false;
      }
    },
    stop() {
      let current = null != outer1_0.current;
      if (current) {
        current = outer1_1.current;
      }
      if (current) {
        const current2 = outer1_0.current;
        current2.stop();
        outer1_1.current = false;
      }
    },
    seek(arg0) {
      if (null != outer1_0.current) {
        const current = outer1_0.current;
        current.seek(arg0);
      }
    }
  }), items);
};
export const APNGPlayer = forwardRefResult;
