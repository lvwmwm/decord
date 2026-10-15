// Module ID: 17631
// Function ID: 17632
// Name: useFrameLifecycle
// Dependencies: [32, 5, 19, 10919, 558, 576, 17245, 10949, 17632, 17633, 6284, 2029, 10936, 2]

// Module 17631 (useFrameLifecycle)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10949 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 17245 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import FramesConstants from "FramesConstants" /* 10919 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, closure_0;

let metroImportDefault;
let metroRequire;
function useFrameLifecycleState(applicationId) {
  let closure_3;
  let data;
  let first;
  let isLoading;
  let obj10;
  applicationId = applicationId.applicationId;
  const surface = applicationId.surface;
  _slicedToArray = undefined;
  const items = [applicationId, surface];
  const memo = react.useMemo(() => metroImportDefault(applicationId, surface), items);
  const items1 = [memo];
  const memo1 = react.useMemo(() => surface, items1);
  const tmp3 = surface(memo[8])(memo);
  const tmp4 = surface(memo[9])(memo);
  const obj = applicationId(memo[10]);
  const application = obj.useApplication(applicationId);
  ({ data, isLoading } = application);
  const obj2 = applicationId(memo[11]);
  const result = obj2.isEmbeddedApplication(data);
  const tmp7 = null != surface(memo[12])(applicationId);
  [first, _slicedToArray] = react.useState(null);
  const items2 = [memo];
  const obj3 = { frameId: memo, hasFrame: null != tmp3, surface: memo1, setFailed: react.useCallback(() => closure_3(memo), items2), lifecycle: obj10 };
  if (closure_6(tmp3)) {
    let obj5;
    if (tmp4) {
      obj5 = { state: obj.RenderingElsewhere };
      const obj4 = { state: obj.RenderingElsewhere };
    } else {
      obj5 = { state: obj.Launched, frame: tmp3 };
    }
    obj10 = obj5;
  } else if (first === memo) {
    obj10 = { state: obj.Error };
    const obj6 = { state: obj.Error };
  } else {
    let state;
    if (tmp3 != null) {
      state = tmp3.state;
    }
    if ("loading" === state) {
      obj10 = { state: obj.Loading, frame: tmp3 };
      const obj7 = { state: obj.Loading, frame: tmp3 };
    } else if (isLoading) {
      obj10 = { state: obj.Loading, frame: "r" };
      const obj8 = { state: obj.Loading, frame: "r" };
    } else {
      if (null != data) {
        if (tmp7) {
          let tmp13;
          const obj9 = { state: null };
          if (result) {
            obj9.state = obj.AwaitingLaunch;
            tmp13 = obj9;
          } else {
            obj9.state = obj.DoesNotSupportSurface;
            tmp13 = obj9;
          }
          obj10 = tmp13;
        }
      }
      obj10 = { state: obj.NoApplication };
    }
  }
  return obj3;
}
let _slicedToArray = _slicedToArray_mod;
({ isLaunched: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
let obj = { Loading: "loading", AwaitingLaunch: "awaiting-launch", Launched: "launched", RenderingElsewhere: "rendering-elsewhere", NoApplication: "no-application", DoesNotSupportSurface: "does-not-support-surface", Error: "error" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFrameLifecycle(applicationId) {
  let hasFrame;
  let obj = applicationId(hasFrame[5]);
  const cResult = obj.c(15);
  applicationId = applicationId.applicationId;
  let surface = applicationId.surface;
  if (cResult[0] === surface) {
    let tmp2;
    if (cResult[1] === applicationId) {
      tmp2 = cResult[2];
    }
    const tmp3 = useFrameLifecycleState;
    const tmp4 = useFrameLifecycleState(tmp2);
    const frameId = tmp4.frameId;
    hasFrame = tmp4.hasFrame;
    const surface2 = tmp4.surface;
    const setFailed = tmp4.setFailed;
    const lifecycle = tmp4.lifecycle;
    const state = lifecycle.state;
    if (cResult[3] === applicationId) {
      if (cResult[4] === frameId) {
        if (cResult[5] === hasFrame) {
          let tmp5;
          let tmp6;
          if (cResult[6] === surface2) {
            tmp5 = cResult[7];
            tmp6 = cResult[8];
          }
          let obj3 = state;
          const effect = state.useEffect(tmp5, tmp6);
          if (cResult[9] === applicationId) {
            if (cResult[10] === setFailed) {
              if (cResult[11] === state) {
                let tmp8;
                let tmp9;
                if (cResult[12] === surface2) {
                  tmp8 = cResult[13];
                  tmp9 = cResult[14];
                }
                const effect1 = obj3.useEffect(tmp8, tmp9);
                return lifecycle;
              }
            }
          }
          class F {
            constructor() {
              if (state === closure_1_8.AwaitingLaunch) {
                tmp = setFailed;
                closure_0 = setFailed(function*(arg0, value) {
                  let obj2;
                  if (surface === 2) {
                    surface = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    let c2;
                    try {
                      surface = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          surface = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          surface = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          applicationId = tmp;
                          c2 = 1;
                          const obj5 = { applicationId, surface };
                          c1 = 2;
                          surface = 1;
                          const obj6 = { value: obj2.launchFrame(obj5), done: false };
                          obj2 = frameId(hasFrame[7]);
                          return obj6;
                        }
                      } else {
                        if (1 === tmp4) {
                          c2 = 0;
                          setFailed();
                        } else if (arg0 === 1) {
                          surface = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          surface = 3;
                          const obj = { value, done: true };
                          return obj;
                        } else {
                          c2 = 0;
                        }
                        surface = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } catch (tmp12) {
                      if (0 === c2) {
                        surface = 3;
                        throw tmp12;
                      } else {
                        c1 = 1;
                      }
                    }
                  }
                });
                tmp2 = (function launch() {
                  return closure_0(...arguments);
                })();
              }
              return;
            }
          }
          const items = [state, applicationId, surface2, setFailed];
          cResult[9] = applicationId;
          cResult[10] = setFailed;
          cResult[11] = state;
          cResult[12] = surface2;
          cResult[13] = F;
          cResult[14] = items;
          tmp9 = items;
          tmp8 = F;
        }
      }
    }
    const fn = function p() {
      let claimPreloadedFrameResult = hasFrame;
      if (claimPreloadedFrameResult) {
        const obj = preloadChannelAppFrame;
        claimPreloadedFrameResult = obj.claimPreloadedFrame(frameId);
      }
      if (claimPreloadedFrameResult) {
        const obj3 = { applicationId, surface: surface2 };
        const obj2 = FramesActionCreatorsDefault;
        obj2.launchFrame(obj3);
      }
    };
    const items1 = [frameId, hasFrame, applicationId, surface2];
    cResult[3] = applicationId;
    cResult[4] = frameId;
    cResult[5] = hasFrame;
    cResult[6] = surface2;
    cResult[7] = fn;
    cResult[8] = items1;
    tmp6 = items1;
    tmp5 = fn;
  }
  let obj2 = { applicationId, surface };
  cResult[0] = surface;
  cResult[1] = applicationId;
  cResult[2] = obj2;
  tmp2 = obj2;
}) : (function useFrameLifecycle(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = { applicationId, surface: applicationId.surface };
  let tmp = useFrameLifecycleState(obj);
  const frameId = tmp.frameId;
  const hasFrame = tmp.hasFrame;
  let surface = tmp.surface;
  const setFailed = tmp.setFailed;
  const lifecycle = tmp.lifecycle;
  const state = lifecycle.state;
  const items = [frameId, hasFrame, applicationId, surface];
  const effect = state.useEffect(() => {
    let claimPreloadedFrameResult = hasFrame;
    if (claimPreloadedFrameResult) {
      const obj = preloadChannelAppFrame;
      claimPreloadedFrameResult = obj.claimPreloadedFrame(frameId);
    }
    if (claimPreloadedFrameResult) {
      const obj3 = { applicationId, surface };
      const obj2 = FramesActionCreatorsDefault;
      obj2.launchFrame(obj3);
    }
  }, items);
  const items1 = [state, applicationId, surface, setFailed];
  const effect1 = state.useEffect(() => {
    function launch() {
      return obj(...arguments);
    }
    let obj = function _launch2() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (surface === 2) {
          surface = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c2;
          try {
            surface = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                surface = 3;
                throw value;
              } else if (arg0 === 2) {
                surface = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                applicationId = tmp;
                c2 = 1;
                const obj5 = { applicationId, surface };
                c1 = 2;
                surface = 1;
                const obj6 = { value: obj2.launchFrame(obj5), done: false };
                obj2 = frameId(hasFrame[7]);
                return obj6;
              }
            } else {
              if (1 === tmp4) {
                c2 = 0;
                closure_1_4();
              } else if (arg0 === 1) {
                surface = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                surface = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c2 = 0;
              }
              surface = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp12) {
            if (0 === c2) {
              surface = 3;
              throw tmp12;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (state === AwaitingLaunch.AwaitingLaunch) {
      const tmp = launch();
    }
  }, items1);
  return lifecycle;
});
let result = size.fileFinishedImporting("modules/frames/useFrameLifecycle.tsx");

export default tmp3;
export const FrameLifecycleState = obj;
