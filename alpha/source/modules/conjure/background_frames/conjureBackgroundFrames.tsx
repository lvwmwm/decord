// Module ID: 17793
// Function ID: 17794
// Name: conjureBackgroundFrames
// Dependencies: [19, 6726, 4800, 6727, 17794, 17796, 11069, 15533, 5587, 11068, 11031, 6729, 558, 576, 2]
// Exports: returnToConjureFrameSurface

// Module 17793 (conjureBackgroundFrames)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5587 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6729 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11031 */;
import leaveFrame from "leaveFrame" /* 11068 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11069 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15533 */;
import conjureBackgroundFrameRules from "conjureBackgroundFrameRules" /* 17794 */;
import conjureBackgroundFramePlatformDefault from "conjureBackgroundFramePlatform" /* 17796 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6726 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import FramesConstants from "FramesConstants" /* 6727 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
function releaseConjureFrame(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj6 = conjureBackgroundFrameRules;
    let result = obj6.shouldRunInBackgroundOnRelease(frame);
    if (result) {
      const obj = conjureBackgroundFramePlatformDefault;
      result = !obj.isInHostWindow(frame);
    }
    if (result) {
      const obj2 = conjureBackgroundFramePlatformDefault;
      result = !obj2.isActivityPopoutOpen();
    }
    const intent = frame.intent;
    if (result) {
      if (intent === metroRequire.INLINE) {
        const obj4 = FramesActionCreatorsDefault;
        obj4.promoteFrame(frameId);
      }
      const obj5 = conjureBackgroundFramePlatformDefault;
      const result1 = obj5.enterPictureInPicture(frameId);
    } else if (intent === metroRequire.MAIN) {
      const obj3 = FramesActionCreatorsDefault;
      obj3.demoteMainFrame(frameId);
    }
  }
}
function isRunningInBackground(surface) {
  let tmp3 = surface.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY;
  if (tmp3) {
    const tmpResult = conjureBackgroundFrameRules;
    tmp3 = !tmpResult.isBuilderPreviewFrame(surface);
  }
  if (tmp3) {
    const obj2 = conjureBackgroundFramePlatformDefault;
    tmp3 = !obj2.isInHostWindow(surface);
  }
  if (tmp3) {
    let tmp10;
    const mainFrame = FramesStore.getMainFrame();
    let id;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    if (id === surface.id) {
      const obj4 = conjureBackgroundFramePlatformDefault;
      let isPictureInPictureResult = !obj4.isActivityPopoutOpen();
      obj4.isActivityPopoutOpen();
      const tmp11 = importDefault;
      if (isPictureInPictureResult) {
        const tmp11Result = tmp11(17796);
        isPictureInPictureResult = tmp11Result.isPictureInPicture(surface);
      }
      tmp10 = isPictureInPictureResult;
    } else {
      const obj3 = conjureBackgroundFramePlatformDefault;
      tmp10 = !obj3.isOnScreen(surface.id);
    }
    tmp3 = tmp10;
  }
  return tmp3;
}
function closeBackgroundedConjureAppFrames(c0, c1) {
  const obj = validateConjureAppFrame;
  if (obj.isConjureApplication(c0)) {
    const allFrames = FramesStore.getAllFrames();
    const iter = allFrames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let tmp8 = nextResult.applicationId === c0;
      if (tmp8) {
        tmp8 = tmp7.id !== c1;
      }
      if (tmp8) {
        tmp8 = isRunningInBackground(tmp7);
      }
      if (tmp8) {
        let obj2 = leaveFrame;
        let leaveFrameResult = obj2.leaveFrame(tmp7.id);
      }
      continue;
    }
  }
}
({ FrameIntent: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureFrameHandoff(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === arg0) {
    let tmp2;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
    }
    let closure_1 = tmp2;
    if (cResult[3] === arg0) {
      let tmp5;
      let tmp6;
      if (cResult[4] === tmp2) {
        tmp5 = cResult[5];
        tmp6 = cResult[6];
      }
      const effect = react.useEffect(tmp5, tmp6);
    }
    const fn = function s() {
      if (null != closure_1) {
        closeBackgroundedConjureAppFrames(closure_0, closure_1);
        const frame = FramesStore.getFrame(tmp);
        const obj = FramesStore;
        if (null != frame) {
          const obj6 = conjureBackgroundFramePlatformDefault;
          if (!obj6.isActivityPopoutOpen()) {
            const mainFrame = obj.getMainFrame();
            let id;
            if (mainFrame != null) {
              id = mainFrame.id;
            }
            if (frame.intent === metroRequire.MAIN) {
              if (id !== closure_1) {
                const tmp15Result = FramesActionCreatorsDefault;
                tmp15Result.promoteFrame(closure_1);
              }
              const tmp15Result3 = FramesActionCreatorsDefault;
              const result = tmp15Result3.resetFrameLayoutModes(tmp);
            } else {
              let isConjureApplicationResult = tmp8;
              if (isConjureApplicationResult) {
                const obj2 = validateConjureAppFrame;
                isConjureApplicationResult = obj2.isConjureApplication(frame.applicationId);
              }
              if (isConjureApplicationResult) {
                const tmp15Result4 = FramesActionCreatorsDefault;
                tmp15Result4.clearMainFrameSlot();
              }
            }
          }
        }
        return () => {
          releaseConjureFrame(closure_1_1);
        };
      }
    };
    const items = [arg0, tmp2];
    cResult[3] = arg0;
    cResult[4] = tmp2;
    cResult[5] = fn;
    cResult[6] = items;
    tmp6 = items;
    tmp5 = fn;
  }
  let tmp3 = null;
  if (null != arg1) {
    tmp3 = closure_7(arg0, arg1);
  }
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : (function useConjureFrameHandoff(arg0, arg1) {
  let closure_0 = arg0;
  let tmp = null;
  if (null != arg1) {
    tmp = closure_7(arg0, arg1);
  }
  let closure_1 = tmp;
  const items = [arg0, tmp];
  const effect = react.useEffect(() => {
    if (null != closure_1) {
      closeBackgroundedConjureAppFrames(closure_0, closure_1);
      const frame = FramesStore.getFrame(tmp);
      const obj = FramesStore;
      if (null != frame) {
        const obj6 = conjureBackgroundFramePlatformDefault;
        if (!obj6.isActivityPopoutOpen()) {
          const mainFrame = obj.getMainFrame();
          let id;
          if (mainFrame != null) {
            id = mainFrame.id;
          }
          if (frame.intent === metroRequire.MAIN) {
            if (id !== closure_1) {
              const tmp15Result = FramesActionCreatorsDefault;
              tmp15Result.promoteFrame(closure_1);
            }
            const tmp15Result3 = FramesActionCreatorsDefault;
            const result = tmp15Result3.resetFrameLayoutModes(tmp);
          } else {
            let isConjureApplicationResult = tmp8;
            if (isConjureApplicationResult) {
              const obj2 = validateConjureAppFrame;
              isConjureApplicationResult = obj2.isConjureApplication(frame.applicationId);
            }
            if (isConjureApplicationResult) {
              const tmp15Result4 = FramesActionCreatorsDefault;
              tmp15Result4.clearMainFrameSlot();
            }
          }
        }
      }
      return () => {
        releaseConjureFrame(closure_1_1);
      };
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFrames.tsx");

export default tmp3;
export { closeBackgroundedConjureAppFrames };
export const returnToConjureFrameSurface = function returnToConjureFrameSurface(frame) {
  if (frame.intent === metroRequire.INLINE) {
    const obj3 = conjurePreviewSurface;
    const tmp6 = require;
    if (!obj3.isConjurePreviewSurface(frame.surface)) {
      const tmp6Result = tmp6(15533);
      if (tmp6Result.isConjureApplication(frame.applicationId)) {
        const channel = ChannelStore.getChannel(getChannelIdForEmbeddedSurfaceDefault(frame.surface));
        let openSurfaceChannelResult = null != channel;
        const tmp2 = importDefault;
        if (openSurfaceChannelResult) {
          const tmp2Result = tmp2(17796);
          openSurfaceChannelResult = tmp2Result.openSurfaceChannel(frame.surface, channel);
        }
        return openSurfaceChannelResult;
      }
    }
  }
  return false;
};
