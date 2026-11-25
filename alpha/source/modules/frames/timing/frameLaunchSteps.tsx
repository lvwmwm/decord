// Module ID: 7648
// Function ID: 7649
// Name: frameLaunchSteps
// Dependencies: [5, 2164, 6905, 6906, 7649, 7654, 7655, 7656, 6908, 7657, 6940, 2]
// Exports: loadLaunchCSP, prefetchFrameLaunch

// Module 7648 (frameLaunchSteps)
import FramesConstants from "FramesConstants" /* 6906 */;
import loadEmbeddedAppCSPForLaunch from "loadEmbeddedAppCSPForLaunch" /* 7649 */;
import FrameLaunchTimingTypes from "FrameLaunchTimingTypes" /* 7654 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import FramesStore from "FramesStore" /* 6905 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, closure_0, closure_2, type;

const f124857 = function() {
  return closure_0(...arguments);
};
const makeFrameId = FramesConstants.makeFrameId;
let obj = {};
obj[loadEmbeddedAppCSPForLaunch.EmbeddedAppCSPSource.SKIPPED] = FrameLaunchTimingTypes.StepStatus.SKIPPED;
obj[loadEmbeddedAppCSPForLaunch.EmbeddedAppCSPSource.CACHED] = FrameLaunchTimingTypes.StepStatus.CACHED;
obj[loadEmbeddedAppCSPForLaunch.EmbeddedAppCSPSource.IN_FLIGHT] = FrameLaunchTimingTypes.StepStatus.IN_FLIGHT;
obj[loadEmbeddedAppCSPForLaunch.EmbeddedAppCSPSource.FETCHED] = FrameLaunchTimingTypes.StepStatus.OK;
const result = size.fileFinishedImporting("modules/frames/timing/frameLaunchSteps.tsx");

export function loadLaunchCSP(span, c0) {
  span = span.span;
  _require = undefined;
  const CSP = require("FrameLaunchTimingTypes").LaunchStep.CSP;
  _require = _asyncToGenerator(async (arg0) => {
    const status = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              closure_1 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: conjurePreviewSurface(closure_2_2[4])(status), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            status.setStatus(closure_2_7[closure_1]);
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          c4 = 3;
          throw tmp15;
        }
      }
    })();
  });
  return span(CSP, f124857);
}
export function prefetchFrameLaunch(CONJURE_PREVIEW_PREFETCH, applicationId, conjurePreviewSurface) {
  let NOOP_FRAME_LAUNCH_TIMING;
  let tmp11;
  let tmp13;
  _require = applicationId;
  let closure_1 = conjurePreviewSurface;
  const tmp = makeFrameId(applicationId, conjurePreviewSurface);
  if (null != FramesStore.getFrame(tmp)) {
    let tmp14 = _require;
    const tmp15 = dependencyMap;
    NOOP_FRAME_LAUNCH_TIMING = require("noopFrameLaunchTiming").NOOP_FRAME_LAUNCH_TIMING;
    tmp11 = _require;
    tmp13 = _require;
  } else {
    const tmp2 = CONJURE_PREVIEW_PREFETCH;
    const tmp3 = _require;
    const tmp4 = dependencyMap;
    obj = require("FrameLaunchTimingManager");
    const tmp9 = conjurePreviewSurface;
    tmp11 = _require;
    tmp13 = _require;
    NOOP_FRAME_LAUNCH_TIMING = obj.startLaunchTiming(CONJURE_PREVIEW_PREFETCH, tmp, applicationId, conjurePreviewSurface);
  }
  const span = NOOP_FRAME_LAUNCH_TIMING.span;
  const PROXY_TICKET = tmp13(7654).LaunchStep.PROXY_TICKET;
  _asyncToGenerator(async (arg0) => {
    const status = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj5;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              type = tmp;
              c3 = 1;
              c4 = 1;
              const tmp19 = conjurePreviewSurface(closure_2_2[8])(type);
              const obj4 = { value: obj5.prefetchProxyTicket(status, tmp19, type.type), done: false };
              obj5 = status(closure_2_2[9]);
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            if (value.alreadyPrefetched) {
              status.setStatus(status(closure_2_2[5]).StepStatus.PREFETCHED);
            }
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    })();
  });
  const span2 = NOOP_FRAME_LAUNCH_TIMING.span;
  const spanResult = span(PROXY_TICKET, function() {
    return closure_0(...arguments);
  });
  const CSP = tmp11(7654).LaunchStep.CSP;
  _asyncToGenerator(async (arg0) => {
    const status = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              closure_1 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: conjurePreviewSurface(closure_2_2[4])(status), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            status.setStatus(closure_2_7[closure_1]);
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          c4 = 3;
          throw tmp15;
        }
      }
    })();
  });
  const span3 = NOOP_FRAME_LAUNCH_TIMING.span;
  const span2Result = span2(CSP, f124857);
  const APPLICATION = tmp13(7654).LaunchStep.APPLICATION;
  _require = _asyncToGenerator(async (arg0, value) => {
    closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj5 = closure_0;
            const tmp14 = closure_0;
            if (hydrated.isHydrated(closure_0)) {
              obj5.setStatus(closure_0(dependencyMap[5]).StepStatus.CACHED);
            }
            const useApplication = closure_0(dependencyMap[10]).useApplication;
            const items = [tmp14];
            c2 = 1;
            c1 = 1;
            const obj4 = { value: useApplication.fetchMany(items), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  let items = [
    spanResult,
    span2Result,
    span3(APPLICATION, function() {
      return closure_0(...arguments);
    })
  ];
  Promise.allSettled(items);
}
