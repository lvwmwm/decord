// Module ID: 7949
// Function ID: 63405
// Name: useAPNGPlayerControls
// Dependencies: []
// Exports: useAPNGPlayerControls

// Module 7949 (useAPNGPlayerControls)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const forwardRefResult = importAllResult.forwardRef((onLoad) => {
  onLoad = onLoad.onLoad;
  const arg1 = onLoad;
  let obj = Object.create(null);
  obj.onLoad = 0;
  const merged = Object.assign(onLoad, obj);
  const ref = importAllResult.useRef(null);
  const importDefault = ref;
  const items = [onLoad];
  const callback = importAllResult.useCallback((nativeEvent) => {
    if (null != onLoad) {
      onLoad(nativeEvent.nativeEvent.url);
    }
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    play() {
      if (null != closure_1.current) {
        const Commands = callback(closure_2[2]).Commands;
        Commands.play(closure_1.current);
      }
    },
    pause() {
      if (null != closure_1.current) {
        const Commands = callback(closure_2[2]).Commands;
        Commands.pause(closure_1.current);
      }
    },
    stop() {
      if (null != closure_1.current) {
        const Commands = callback(closure_2[2]).Commands;
        Commands.seek(closure_1.current, 0);
        const Commands2 = callback(closure_2[2]).Commands;
        Commands2.pause(closure_1.current);
      }
    },
    seek(arg0) {
      if (null != closure_1.current) {
        const Commands = callback(closure_2[2]).Commands;
        Commands.seek(closure_1.current, arg0);
      }
    }
  }));
  obj = { ref, onLoad: callback };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[2]), obj);
});
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/image/native/APNGPlayer.android.tsx");

export const useAPNGPlayerControls = function useAPNGPlayerControls(ref) {
  const arg1 = ref;
  let closure_1 = importAllResult.useRef(false);
  const items = [ref];
  return importAllResult.useMemo(() => ({
    play() {
      let current = null == closure_0.current;
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        const current2 = closure_0.current;
        current2.play();
        ref.current = true;
      }
    },
    pause() {
      let current = null != closure_0.current;
      if (current) {
        current = ref.current;
      }
      if (current) {
        const current2 = closure_0.current;
        current2.pause();
        ref.current = false;
      }
    },
    stop() {
      let current = null != closure_0.current;
      if (current) {
        current = ref.current;
      }
      if (current) {
        const current2 = closure_0.current;
        current2.stop();
        ref.current = false;
      }
    },
    seek(arg0) {
      if (null != closure_0.current) {
        const current = closure_0.current;
        current.seek(arg0);
      }
    }
  }), items);
};
export const APNGPlayer = forwardRefResult;
