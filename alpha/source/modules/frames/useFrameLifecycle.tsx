// Module ID: 18659
// Function ID: 18660
// Name: useFrameLifecycle
// Dependencies: [32, 5, 19, 6847, 10928, 18660, 18661, 6881, 2024, 5672, 2]
// Exports: default

// Module 18659 (useFrameLifecycle)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import size from "module_2" /* 2 */;

let c3;

let metroImportDefault;
let metroRequire;
({ isLaunched: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
const FrameLifecycleState = { Loading: "loading", AwaitingLaunch: "awaiting-launch", Launched: "launched", RenderingElsewhere: "rendering-elsewhere", NoApplication: "no-application", DoesNotSupportSurface: "does-not-support-surface", Error: "error" };
let result = size.fileFinishedImporting("modules/frames/useFrameLifecycle.tsx");

export default function useFrameLifecycle(applicationId) {
  let AwaitingLaunch;
  let data;
  let isLoading;
  let obj10;
  applicationId = applicationId.applicationId;
  let surface = applicationId.surface;
  let callback;
  let state;
  let obj = react;
  const items = [applicationId, surface];
  const memo = react.useMemo(() => closure_2_7(applicationId, surface), items);
  const items1 = [memo];
  const memo1 = react.useMemo(() => surface, items1);
  const tmp3 = memo1(callback[5])(memo);
  const tmp4 = memo1(callback[6])(memo);
  let obj2 = applicationId(callback[7]);
  const application = obj2.useApplication(applicationId);
  ({ data, isLoading } = application);
  let obj3 = applicationId(callback[8]);
  const result = obj3.isEmbeddedApplication(data);
  const tmp7 = null != memo1(callback[9])(applicationId);
  const tmp8 = state(react.useState(null), 2);
  let closure_3 = tmp8[1];
  const items2 = [memo];
  const first = tmp8[0];
  callback = react.useCallback(() => closure_3(memo), items2);
  if (closure_6(tmp3)) {
    let obj5;
    if (tmp4) {
      let obj4 = { state: obj.RenderingElsewhere };
      obj5 = obj4;
    } else {
      obj5 = { state: obj.Launched, frame: tmp3 };
    }
    obj10 = obj5;
  } else if (first === memo) {
    let obj6 = { state: obj.Error };
    obj10 = obj6;
  } else {
    let state1;
    if (tmp3 != null) {
      state1 = tmp3.state;
    }
    if ("loading" === state1) {
      obj10 = { state: obj.Loading, frame: tmp3 };
      const obj7 = { state: obj.Loading, frame: tmp3 };
    } else if (isLoading) {
      obj10 = { state: obj.Loading, frame: "a" };
      const obj8 = { state: obj.Loading, frame: "a" };
    } else {
      if (null != data) {
        if (tmp7) {
          let tmp14;
          const obj9 = { state: null };
          if (result) {
            obj9.state = obj.AwaitingLaunch;
            tmp14 = obj9;
          } else {
            obj9.state = obj.DoesNotSupportSurface;
            tmp14 = obj9;
          }
          obj10 = tmp14;
        }
      }
      obj10 = { state: obj.NoApplication };
      const tmp12 = obj;
    }
  }
  state = obj10.state;
  const items3 = [state, applicationId, memo1, callback];
  const effect = obj.useEffect(() => {
    function launch() {
      return obj(...arguments);
    }
    let obj = function _launch() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        let v0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          let c2;
          try {
            c3 = 2;
            if (0 === surface) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                applicationId = tmp;
                c2 = 1;
                const obj5 = { applicationId, surface };
                surface = 2;
                c3 = 1;
                const obj6 = { value: obj2.launchFrame(obj5), done: false };
                obj2 = memo1(callback[4]);
                return obj6;
              }
            } else {
              if (1 === tmp4) {
                c2 = 0;
                c2();
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c2 = 0;
              }
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp12) {
            if (0 === c2) {
              c3 = 3;
              throw tmp12;
            } else {
              surface = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (state === AwaitingLaunch.AwaitingLaunch) {
      const tmp = launch();
    }
  }, items3);
  return obj10;
};
export { FrameLifecycleState };
