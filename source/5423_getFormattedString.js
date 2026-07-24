// Module ID: 5423
// Function ID: 46466
// Name: getFormattedString
// Dependencies: [5406, 5359, 31, 5424, 5356, 5425]
// Exports: useBenchmark

// Module 5423 (getFormattedString)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
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
async function _runScrollBenchmark(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let horizontal;
  if (arg0.current) {
    horizontal = arg0.current.props.horizontal;
    let current = arg0.current;
    if (current) {
      const size = current.getWindowSize();
      const size2 = current.getChildContainerDimensions();
      const diff = size2.width - size.width;
      const diff1 = size2.height - size.height;
      function scrollNow(arg0, arg1) {
        let tmp = arg1;
        const current = ref.current;
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
      let obj = outer2_0(outer2_1[3]);
      yield obj.autoScroll(scrollNow, 0, 0, diff, diff1, arg2, arg1);
      const obj2 = outer2_0(outer2_1[3]);
      yield obj2.autoScroll(scrollNow, diff, diff1, 0, 0, arg2, arg1);
    }
  }
}
({ useEffect: closure_4, useState: closure_5, useCallback: closure_6, useRef: closure_7 } = result);

export const useBenchmark = function useBenchmark(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let obj = arguments[2];
    }
    let tmp3 = first(callback3(false), 2);
    first = tmp3[0];
    const callback2 = tmp3[1];
    callback3 = callback5(null);
    const items = [arg1, arg0, first, , ];
    ({ repeatCount: arr[3], speedMultiplier: arr[4] } = obj);
    let tmp8 = callback4(() => {
      if (!first) {
        const Cancellable = callback(5424).Cancellable;
        const prototype = Cancellable.prototype;
        const cancellable = new Cancellable();
        closure_5.current = cancellable;
        const dependencyMap = [];
        if (cancellable.current) {
          const data = cancellable.current.props.data;
          let length;
          if (null != data) {
            length = data.length;
          }
          if (Number(length) <= 0) {
            const _Error = Error;
            const error = new Error(callback(5356).ErrorMessages.dataEmptyCannotRunBenchmark);
            throw error;
          }
        }
        callback2(true);
        (() => {
          let closure_0 = obj(async () => {
            let tmp9;
            const jSFPSMonitor = new lib(5425).JSFPSMonitor();
            jSFPSMonitor.startTracking();
            let num = 0;
            if (0 < tmp2) {
              do {
                let tmp6 = outer3_2;
                let num2 = outer3_2.speedMultiplier;
                let tmp3 = outer4_9;
                let tmp4 = cancellable;
                let tmp5 = lib;
                if (!num2) {
                  num2 = 1;
                }
                let tmp7 = yield tmp3(tmp4, tmp5, num2);
                num = num + 1;
                let tmp8 = outer3_2;
                tmp9 = outer3_2.repeatCount || 1;
              } while (num < tmp9);
            }
            const stopAndGetDataResult = jSFPSMonitor.stopAndGetData();
            if (stopAndGetDataResult.averageFPS < 35) {
              let arr = outer2_1.push("Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any");
            }
            arr = outer2_1;
            let current = cancellable.current;
            if (current) {
              current = cancellable.current.props.data.length < 200;
            }
            if (current) {
              arr = arr.push("Data count is low. Try to increase it to a large number (e.g 200) using the 'useDataMultiplier' hook.");
            }
            const obj = { js: stopAndGetDataResult, suggestions: outer2_1, interrupted: lib.isCancelled() };
            if (!lib.isCancelled()) {
              obj.formattedString = outer4_8(obj);
            }
            dependencyMap(obj);
            outer3_4(false);
          });
          return function runBenchmark() {
            return callback(...arguments);
          };
        })()();
      }
    }, items);
    callback4 = tmp8;
    callback2(() => {
      if (!obj.startManually) {
        let num = obj.startDelayInMs;
        if (!num) {
          num = 3000;
        }
        const timeout = setTimeout(() => {
          outer1_6();
        }, num);
        return () => {
          clearTimeout(closure_0);
          if (outer1_5.current) {
            const current = outer1_5.current;
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
