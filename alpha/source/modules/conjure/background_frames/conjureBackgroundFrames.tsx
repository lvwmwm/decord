// Module ID: 18662
// Function ID: 18663
// Name: conjureBackgroundFrames
// Dependencies: [19, 6846, 4863, 6847, 18663, 18665, 10928, 16288, 5675, 10927, 10883, 6849, 2]
// Exports: default, returnToConjureFrameSurface

// Module 18662 (conjureBackgroundFrames)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6849 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10883 */;
import leaveFrame from "leaveFrame" /* 10927 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10928 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 16288 */;
import conjureBackgroundFramePlatformDefault from "conjureBackgroundFramePlatform" /* 18665 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6846 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let tmp;
const conjureBackgroundFrameRules = tmp(18663);
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
        const tmp11Result = tmp11(18665);
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
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFrames.tsx");

export default function useConjureFrameHandoff(arg0, arg1) {
  let closure_0 = arg0;
  let tmp = null;
  if (null != arg1) {
    tmp = closure_7(arg0, arg1);
  }
  let closure_1 = tmp;
  const items = [arg0, tmp];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (null != closure_1) {
      closeBackgroundedConjureAppFrames(closure_0, tmp);
      frame = FramesStore.getFrame(tmp);
      const obj = FramesStore;
      if (null != frame) {
        let obj6 = conjureBackgroundFramePlatformDefault;
        if (!obj6.isActivityPopoutOpen()) {
          const mainFrame = obj.getMainFrame();
          let id;
          if (mainFrame != null) {
            id = mainFrame.id;
          }
          if (frame.intent === metroRequire.MAIN) {
            if (id !== tmp) {
              const tmp15Result = FramesActionCreatorsDefault;
              tmp15Result.promoteFrame(tmp);
            }
            const tmp15Result3 = FramesActionCreatorsDefault;
            let result = tmp15Result3.resetFrameLayoutModes(tmp);
          } else {
            let isConjureApplicationResult = tmp8;
            if (isConjureApplicationResult) {
              let obj2 = validateConjureAppFrame;
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
        frame = frame.getFrame(closure_1_1);
        if (null != frame) {
          const obj8 = closure_0(dependencyMap[4]);
          let result = obj8.shouldRunInBackgroundOnRelease(frame);
          const tmp14 = closure_0;
          if (result) {
            const tmp14Result = tmp14(dependencyMap[4]);
            result = !tmp14Result.isBuilderPreviewFrame(frame);
          }
          if (result) {
            const obj2 = closure_1(dependencyMap[5]);
            result = !obj2.hasOwnPictureInPicture(frame);
          }
          if (result) {
            const obj3 = closure_1(dependencyMap[5]);
            result = !obj3.isInHostWindow(frame);
          }
          if (result) {
            const obj4 = closure_1(dependencyMap[5]);
            result = !obj4.isActivityPopoutOpen();
          }
          const intent = frame.intent;
          if (result) {
            if (intent === constants.INLINE) {
              const obj6 = closure_1(dependencyMap[6]);
              obj6.promoteFrame(closure_1_1);
            }
            const obj7 = closure_1(dependencyMap[5]);
            const result1 = obj7.enterPictureInPicture(tmp);
          } else if (intent === constants.MAIN) {
            const obj5 = closure_1(dependencyMap[6]);
            obj5.demoteMainFrame(closure_1_1);
          }
        }
      };
    }
  }, items);
};
export { closeBackgroundedConjureAppFrames };
export function returnToConjureFrameSurface(frame) {
  if (frame.intent === metroRequire.INLINE) {
    const obj3 = conjurePreviewSurface;
    const tmp6 = require;
    if (!obj3.isConjurePreviewSurface(frame.surface)) {
      const tmp6Result = tmp6(16288);
      if (tmp6Result.isConjureApplication(frame.applicationId)) {
        const channel = ChannelStore.getChannel(getChannelIdForEmbeddedSurfaceDefault(frame.surface));
        let openSurfaceChannelResult = null != channel;
        const tmp2 = importDefault;
        if (openSurfaceChannelResult) {
          const tmp2Result = tmp2(18665);
          openSurfaceChannelResult = tmp2Result.openSurfaceChannel(frame.surface, channel);
        }
        return openSurfaceChannelResult;
      }
    }
  }
  return false;
}
