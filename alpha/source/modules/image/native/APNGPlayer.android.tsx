// Module ID: 9011
// Function ID: 9012
// Name: APNGPlayer
// Dependencies: [109, 19, 21, 558, 576, 9012, 2]

// Module 9011 (APNGPlayer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["onLoad", "ref"];
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAPNGPlayerControls(arg0) {
  let tmp2;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(2);
  let closure_1 = react.useRef(false);
  if (cResult[0] !== arg0) {
    const obj2 = {
      play() {
          let current = null == closure_0.current;
          const tmp = closure_0;
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
          let current = null != closure_0.current;
          const tmp = closure_0;
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
          let current = null != closure_0.current;
          const tmp = closure_0;
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
          if (null != closure_0.current) {
            const current = tmp.current;
            current.seek(arg0);
          }
        }
    };
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useAPNGPlayerControls(arg0) {
  let closure_0 = arg0;
  let closure_1 = react.useRef(false);
  const items = [arg0];
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function APNGPlayer(onLoad) {
  let closure_0;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp4;
  let tmp5;
  const tmp = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] !== onLoad) {
    onLoad = onLoad.onLoad;
    _require = onLoad;
    const tmp8 = _objectWithoutProperties(onLoad, closure_3);
    cResult[0] = onLoad;
    cResult[1] = onLoad;
    cResult[2] = tmp8;
    cResult[3] = onLoad.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const ref1 = react.useRef(null);
  const obj2 = react;
  if (cResult[4] !== tmp3) {
    const fn = function y(nativeEvent) {
      if (closure_0 != null) {
        tmp(nativeEvent.nativeEvent.url);
      }
    };
    cResult[4] = tmp3;
    cResult[5] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = {
          play() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.play(tmp.current);
                  }
                },
          pause() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.pause(tmp.current);
                  }
                },
          stop() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.seek(ref1.current, 0);
                    const Commands2 = closure_0(dependencyMap[5]).Commands;
                    Commands2.pause(ref1.current);
                  }
                },
          seek(arg0) {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.seek(tmp.current, arg0);
                  }
                }
        };
        return obj;
      }
    }
    cResult[6] = C;
    tmp11 = C;
  } else {
    class C {
      constructor() {
        obj = {
          play() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.play(tmp.current);
                  }
                },
          pause() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.pause(tmp.current);
                  }
                },
          stop() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.seek(ref1.current, 0);
                    const Commands2 = closure_0(dependencyMap[5]).Commands;
                    Commands2.pause(ref1.current);
                  }
                },
          seek(arg0) {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.seek(tmp.current, arg0);
                  }
                }
        };
        return obj;
      }
    }
  }
  const imperativeHandle = obj2.useImperativeHandle(tmp5, tmp11);
  if (cResult[7] === tmp10) {
    class C {
      constructor() {
        obj = {
          play() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.play(tmp.current);
                  }
                },
          pause() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.pause(tmp.current);
                  }
                },
          stop() {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.seek(ref1.current, 0);
                    const Commands2 = closure_0(dependencyMap[5]).Commands;
                    Commands2.pause(ref1.current);
                  }
                },
          seek(arg0) {
                  if (null != ref1.current) {
                    const Commands = closure_0(dependencyMap[5]).Commands;
                    Commands.seek(tmp.current, arg0);
                  }
                }
        };
        return obj;
      }
    }
    return tmp15;
  }
  ref1(9012);
  const merged = Object.assign(tmp4);
  tmp15 = <tmp13 ref={ref1} onLoad={tmp10} />;
  cResult[7] = tmp10;
  cResult[8] = tmp4;
  cResult[9] = tmp15;
}) : (function APNGPlayer(onLoad) {
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
        const Commands = onLoad(dependencyMap[5]).Commands;
        Commands.play(tmp.current);
      }
    },
    pause() {
      if (null != ref1.current) {
        const Commands = onLoad(dependencyMap[5]).Commands;
        Commands.pause(tmp.current);
      }
    },
    stop() {
      if (null != ref1.current) {
        const Commands = onLoad(dependencyMap[5]).Commands;
        Commands.seek(ref1.current, 0);
        const Commands2 = onLoad(dependencyMap[5]).Commands;
        Commands2.pause(ref1.current);
      }
    },
    seek(arg0) {
      if (null != ref1.current) {
        const Commands = onLoad(dependencyMap[5]).Commands;
        Commands.seek(tmp.current, arg0);
      }
    }
  }));
  ref1(9012);
  const merged1 = Object.assign(merged);
  return <tmp5 ref={ref1} onLoad={callback} />;
});
const result = size.fileFinishedImporting("modules/image/native/APNGPlayer.android.tsx");

export const useAPNGPlayerControls = tmp2;
export const APNGPlayer = tmp3;
