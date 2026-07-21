// Module ID: 5200
// Function ID: 44065
// Name: getFormattedString
// Dependencies: []
// Exports: useBenchmark

// Module 5200 (getFormattedString)
function getFormattedString(js) {
  js = js.js;
  let averageFPS;
  if (null != js) {
    averageFPS = js.averageFPS;
  }
  const js2 = js.js;
  let minFPS;
  if (null != js2) {
    minFPS = js2.minFPS;
  }
  const js3 = js.js;
  let maxFPS;
  if (null != js3) {
    maxFPS = js3.maxFPS;
  }
  let str = "";
  const combined = "Results:\n\nJS FPS: Avg: " + averageFPS + " | Min: " + minFPS + " | Max: " + maxFPS + "\n\n";
  if (js.suggestions.length > 0) {
    const suggestions = js.suggestions;
    const mapped = suggestions.map((arg0, arg1) => "" + arg1 + 1 + ". " + arg0);
    const _HermesInternal = HermesInternal;
    str = "Suggestions:\n\n" + mapped.join("\n");
  }
  return combined + str;
}
function runScrollBenchmark(arg0, arg1, arg2) {
  return _runScrollBenchmark(...arguments);
}
async function _runScrollBenchmark(current, arg1, arg2, arg3) {
  let horizontal;
  if (current.current) {
    horizontal = current.current.props.horizontal;
    current = current.current;
    if (current) {
      const size = current.getWindowSize();
      const size2 = current.getChildContainerDimensions();
      const diff = size2.width - size.width;
      const diff1 = size2.height - size.height;
      function scrollNow(arg0, arg1) {
        let tmp = arg1;
        const current = arg0.current;
        if (null != current) {
          const obj = {};
          if (horizontal) {
            tmp = arg0;
          }
          obj.offset = tmp;
          obj.animated = false;
          current.scrollToOffset(obj);
        }
      }
      const obj = current(horizontal[3]);
      yield obj.autoScroll(scrollNow, 0, 0, diff, diff1, arg2, arg1);
      const obj2 = current(horizontal[3]);
      yield obj2.autoScroll(scrollNow, diff, diff1, 0, 0, arg2, arg1);
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ useEffect: closure_4, useState: closure_5, useCallback: closure_6, useRef: closure_7 } = arg1(dependencyMap[2]));

export const useBenchmark = function useBenchmark(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let obj = arguments[2];
    }
    let closure_2 = obj;
    const tmp3 = callback2(callback4(false), 2);
    const first = tmp3[0];
    const callback2 = first;
    const callback3 = tmp3[1];
    const callback4 = callback5(null);
    const items = [arg1, arg0, first, , ];
    ({ repeatCount: arr[3], speedMultiplier: arr[4] } = obj);
    const tmp8 = tmp8(() => {
      if (!first) {
        const Cancellable = arg0(closure_1[3]).Cancellable;
        const prototype = Cancellable.prototype;
        const cancellable = new Cancellable();
        const arg0 = cancellable;
        closure_5.current = cancellable;
        closure_1 = [];
        if (arg0.current) {
          const data = arg0.current.props.data;
          let length;
          if (null != data) {
            length = data.length;
          }
          if (Number(length) <= 0) {
            const _Error = Error;
            const error = new Error(arg0(closure_1[4]).ErrorMessages.dataEmptyCannotRunBenchmark);
            throw error;
          }
        }
        callback(true);
        () => {
          let closure_0 = callback(async () => {
            let tmp9;
            const jSFPSMonitor = new lib(arr[5]).JSFPSMonitor();
            jSFPSMonitor.startTracking();
            let num = 0;
            if (0 < tmp2) {
              do {
                let tmp6 = closure_2;
                let num2 = closure_2.speedMultiplier;
                let tmp3 = closure_9;
                let tmp4 = closure_0;
                let tmp5 = closure_0;
                if (!num2) {
                  num2 = 1;
                }
                let tmp7 = yield tmp3(tmp4, tmp5, num2);
                num = num + 1;
                let tmp8 = closure_2;
                tmp9 = closure_2.repeatCount || 1;
              } while (num < tmp9);
            }
            const stopAndGetDataResult = jSFPSMonitor.stopAndGetData();
            if (stopAndGetDataResult.averageFPS < 35) {
              let arr = arr.push("Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any");
            }
            let current = lib.current;
            if (current) {
              current = lib.current.props.data.length < 200;
            }
            if (current) {
              arr = arr.push("Data count is low. Try to increase it to a large number (e.g 200) using the 'useDataMultiplier' hook.");
            }
            const obj = { js: stopAndGetDataResult, suggestions: arr, interrupted: lib.isCancelled() };
            if (!lib.isCancelled()) {
              obj.formattedString = callback2(obj);
            }
            arr(obj);
            callback(false);
          });
          return function runBenchmark() {
            return callback(...arguments);
          };
        }()();
      }
    }, items);
    callback3(() => {
      if (!obj.startManually) {
        let num = obj.startDelayInMs;
        if (!num) {
          num = 3000;
        }
        const timeout = setTimeout(() => {
          callback();
        }, num);
        return () => {
          clearTimeout(closure_0);
          if (ref.current) {
            const current = ref.current;
            current.cancel();
          }
        };
      }
    }, []);
    obj = { startBenchmark: tmp8, isBenchmarkRunning: first };
    return obj;
  }
  obj = {};
};
export { getFormattedString };
