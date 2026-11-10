// Module ID: 9504
// Function ID: 9505
// Name: APNGPlayer
// Dependencies: [19, 21, 9505, 2]
// Exports: APNGPlayer, useAPNGPlayerControls

// Module 9504 (APNGPlayer)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/image/native/APNGPlayer.android.tsx");

export function useAPNGPlayerControls(ref) {
  let closure_0 = ref;
  let closure_1 = react.useRef(false);
  const items = [ref];
  return react.useMemo(() => {
    let ref;
    return {
      play() {
        let current = null == closure_1_0.current;
        const tmp = closure_1_0;
        if (!current) {
          current = ref.current;
        }
        if (!current) {
          const current2 = tmp.current;
          current2.play();
          ref.current = true;
        }
      },
      pause() {
        let current = null != closure_1_0.current;
        const tmp = closure_1_0;
        if (current) {
          current = ref.current;
        }
        if (current) {
          const current2 = tmp.current;
          current2.pause();
          ref.current = false;
        }
      },
      stop() {
        let current = null != closure_1_0.current;
        const tmp = closure_1_0;
        if (current) {
          current = ref.current;
        }
        if (current) {
          const current2 = tmp.current;
          current2.stop();
          ref.current = false;
        }
      },
      seek(arg0) {
        if (null != closure_1_0.current) {
          const current = tmp.current;
          current.seek(arg0);
        }
      }
    };
  }, items);
}
export function APNGPlayer(onLoad) {
  onLoad = onLoad.onLoad;
  const ref = onLoad.ref;
  const merged = Object.assign(onLoad, Object.assign({ onLoad: 0, ref: 0 }));
  const ref1 = react.useRef(null);
  const items = [onLoad];
  const callback = react.useCallback((nativeEvent) => {
    if (onLoad != null) {
      tmp(nativeEvent.nativeEvent.url);
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    play() {
      if (null != ref1.current) {
        const Commands = onLoad(dependencyMap[2]).Commands;
        Commands.play(tmp.current);
      }
    },
    pause() {
      if (null != ref1.current) {
        const Commands = onLoad(dependencyMap[2]).Commands;
        Commands.pause(tmp.current);
      }
    },
    stop() {
      if (null != ref1.current) {
        const Commands = onLoad(dependencyMap[2]).Commands;
        Commands.seek(ref1.current, 0);
        const Commands2 = onLoad(dependencyMap[2]).Commands;
        Commands2.pause(ref1.current);
      }
    },
    seek(arg0) {
      if (null != ref1.current) {
        const Commands = onLoad(dependencyMap[2]).Commands;
        Commands.seek(tmp.current, arg0);
      }
    }
  }));
  ref1(9505);
  const merged1 = Object.assign(merged);
  return <tmp5 ref={ref1} onLoad={callback} />;
}
