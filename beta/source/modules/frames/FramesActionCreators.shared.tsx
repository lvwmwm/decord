// Module ID: 10769
// Function ID: 10770
// Name: launchFrame
// Dependencies: [32, 5, 6775, 6776, 5609, 10770, 584, 10730, 6778, 10772, 10778, 10783, 10766, 2]
// Exports: attachFrameHostWindow, attachFrameIframe, detachFrameHostWindow, detachFrameIframe, launchFrame, refreshProxyTicket, resetFrameLayoutModes, setFrameRunsInBackground, setFrameUserMuted, updateFramePanelMode

// Module 10769 (launchFrame)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5609 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6778 */;
import createProxyTicket from "createProxyTicket" /* 10730 */;
import leaveFrame from "leaveFrame" /* 10766 */;
import leaveCurrentEmbeddedActivity from "leaveCurrentEmbeddedActivity" /* 10770 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FramesStore from "FramesStore" /* 6775 */;
import FramesConstants from "FramesConstants" /* 6776 */;
import size from "module_2" /* 2 */;

let analyticsContext, closure_1, error, hostWindowKey, intent, launch, launchRequestId, message, proxyTicket, type;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _launchFrame() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let obj6;
      let showErrorModal;
      let sum;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let invite;
          let frameId;
          let closure_10;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp4;
              applicationId = undefined;
              type = undefined;
              launch = undefined;
              analyticsContext = undefined;
              hostWindowKey = undefined;
              showErrorModal = undefined;
              invite = undefined;
              ({ applicationId: c0, surface: c1, launch: c2, analyticsContext: c3, hostWindowKey: c4, showErrorModal } = closure_0);
              const tmp120 = closure_0;
              if (showErrorModal === undefined) {
                showErrorModal = true;
              }
              invite = tmp120.invite;
              frameId = undefined;
              intent = undefined;
              launchRequestId = undefined;
              closure_10 = undefined;
              proxyTicket = undefined;
              message = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              frameId = closure_131_10(applicationId, type);
              intent = frame.getFrame(frameId);
              if (null != intent) {
                if (intent.intent === constants.MAIN) {
                  closure_131_16(frameId);
                  const obj7 = { frameId, layoutMode: constants2.FOCUSED };
                  closure_131_17(obj7);
                }
                c7 = 3;
                return { value: frameId, done: true };
              } else {
                if (closure_131_8(type) === constants.MAIN) {
                  const obj8 = closure_131_0(closure_131_2[5]);
                  const result = obj8.leaveCurrentEmbeddedActivity();
                  closure_131_14();
                }
                sum = sum + 1;
                launchRequestId = sum;
                const obj12 = { type: "FRAME_LAUNCH_START", applicationId, frameId, surface: type, hostWindowKey, launch, invite, launchRequestId };
                const obj9 = closure_131_1(closure_131_2[6]);
                obj9.dispatch(obj12);
                c5 = 1;
                const obj11 = closure_131_0(closure_131_2[7]);
                const items = [obj11.createProxyTicket(applicationId, closure_131_1(closure_131_2[8])(type), type.type, invite), closure_131_1(closure_131_2[9])(applicationId)];
                c6 = 3;
                c7 = 1;
                const obj13 = { value: all(items), done: false };
                return obj13;
              }
            }
          } else {
            if (2 === c6) {
              c5 = 0;
              error = closure_4;
              const tmp20 = showErrorModal;
              if (tmp20) {
                c6 = 4;
                c7 = 1;
                const obj14 = { value: obj6.getActivityLaunchErrorInfo(error, applicationId), done: false };
                obj6 = closure_131_0(closure_131_2[10]);
                return obj14;
              }
            } else if (3 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                closure_10 = value;
                proxyTicket = closure_131_3(closure_10, 1)[0];
                const obj16 = { type: "FRAME_LAUNCH", applicationId, frameId, surface: type, proxyTicket, analyticsContext, launch: type, invite, hostWindowKey, launchRequestId };
                type = launch;
                const dispatch = closure_131_1(closure_131_2[6]).dispatch;
                closure_131_1(closure_131_2[6]);
                if (launch == null) {
                  type = {};
                }
                dispatch(obj16);
                c5 = 0;
                c7 = 3;
                return { value: frameId, done: true };
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              message = value;
              closure_131_1(closure_131_2[11])(message.message);
            }
            const obj18 = { type: "FRAME_LAUNCH_FAIL", applicationId, frameId, launchRequestId, error, analyticsContext };
            const obj4 = closure_131_1(closure_131_2[6]);
            obj4.dispatch(obj18);
            throw error;
          }
        } catch (tmp86) {
          closure_4 = tmp86;
          if (0 === c5) {
            c7 = 3;
            throw tmp86;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function clearMainFrameSlot() {
  const mainFrame = FramesStore.getMainFrame();
  if (null != mainFrame) {
    if (mainFrame.intent === metroRequire.MAIN) {
      obj = leaveFrame;
      obj.leaveFrame(mainFrame.id);
    } else {
      demoteMainFrame(mainFrame.id);
    }
  }
}
function demoteMainFrame(id) {
  const mainFrame = FramesStore.getMainFrame();
  id = undefined;
  obj = FramesStore;
  if (mainFrame != null) {
    id = mainFrame.id;
  }
  if (id === id) {
    const FOCUSED = metroImportDefault.FOCUSED;
    const frame = obj.getFrame(id);
    if (null != frame) {
      const obj3 = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId: id, layoutMode: FOCUSED };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
    const PANEL = ActivityPanelModes.PANEL;
    const obj5 = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PANEL };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj5);
    const obj7 = { type: "FRAME_CLEAR_MAIN_SLOT", frameId: id };
    const obj6 = DispatcherDefault;
    obj6.dispatch(obj7);
  }
}
function promoteFrame(frameId) {
  let tmp = null != FramesStore.getFrame(frameId);
  if (tmp) {
    const mainFrame = obj.getMainFrame();
    let id;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    tmp = id !== frameId;
  }
  if (tmp) {
    const obj2 = leaveCurrentEmbeddedActivity;
    const result = obj2.leaveCurrentEmbeddedActivity();
    const mainFrame1 = obj.getMainFrame();
    const tmp4 = require;
    if (null != mainFrame1) {
      if (mainFrame1.intent === metroRequire.MAIN) {
        const tmp4Result = tmp4(10766);
        tmp4Result.leaveFrame(mainFrame1.id);
      } else {
        demoteMainFrame(mainFrame1.id);
      }
    }
    const obj3 = { type: "FRAME_PROMOTE", frameId };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj3);
  }
}
function updateFrameLayoutMode(frameId) {
  frameId = frameId.frameId;
  const layoutMode = frameId.layoutMode;
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId, layoutMode };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
obj = function _refreshProxyTicket() {
  obj = _asyncToGenerator(async (frameId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj7;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let applicationId;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp4;
              applicationId = undefined;
              proxyTicket = undefined;
              message = undefined;
              frame = frame.getFrame(frameId);
              const tmp81 = frameId;
              if (null == frame) {
                c6 = 3;
                return { value: false, done: true };
              } else {
                let invite;
                applicationId = frame.applicationId;
                const surface = frame.surface;
                if (closure_2_9(frame)) {
                  invite = frame.data.invite;
                } else {
                  invite = frame.invite;
                }
                const obj5 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId: tmp81, refreshing: true };
                const obj11 = DispatcherDefault;
                obj11.dispatch(obj5);
                c4 = 2;
                c5 = 4;
                c6 = 1;
                const obj13 = createProxyTicket;
                const obj6 = { value: obj13.createProxyTicket(applicationId, getChannelIdForEmbeddedSurfaceDefault(surface), surface.type, invite), done: false };
                return obj6;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj9 = closure_130_1(closure_130_2[6]);
            obj9.dispatch(obj8);
            throw message;
          } else if (2 === c5) {
            c4 = 1;
            let closure_4 = message;
            c5 = 3;
            c6 = 1;
            const obj10 = { value: obj7.getActivityLaunchErrorInfo(closure_4, applicationId), done: false };
            obj7 = closure_130_0(closure_130_2[10]);
            return obj10;
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const obj12 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj4 = closure_130_1(closure_130_2[6]);
              obj4.dispatch(obj12);
              c6 = 3;
              return { value, done: true };
            } else {
              message = value;
              closure_130_1(closure_130_2[11])(message.message);
              c4 = 0;
              const obj15 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj21 = closure_130_1(closure_130_2[6]);
              obj21.dispatch(obj15);
              c6 = 3;
              return { value: false, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            const obj16 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            obj = closure_130_1(closure_130_2[6]);
            obj.dispatch(obj16);
            c6 = 3;
            return { value, done: true };
          } else {
            proxyTicket = value;
            const obj20 = { type: "FRAME_UPDATE_PROXY_TICKET", applicationId, frameId, proxyTicket };
            const obj17 = closure_130_1(closure_130_2[6]);
            obj17.dispatch(obj20);
            c4 = 0;
            const obj22 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj19 = closure_130_1(closure_130_2[6]);
            obj19.dispatch(obj22);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp46) {
          message = tmp46;
          if (0 === c4) {
            c6 = 3;
            throw tmp46;
          } else if (1 === tmp48) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ FrameIntent: metroRequire, FrameLayoutModes: metroImportDefault, getFrameIntentForSurface: metroImportAll, isLaunched: c9, makeFrameId: c10 } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
let c12 = 0;
let result = size.fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

export const launchFrame = function launchFrame() {
  return obj(...arguments);
};
export { clearMainFrameSlot };
export { demoteMainFrame };
export { promoteFrame };
export { updateFrameLayoutMode };
export const setFrameRunsInBackground = function setFrameRunsInBackground(id, enabled) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_RUNS_IN_BACKGROUND", frameId: id, enabled };
  obj.dispatch(obj2);
};
export const setFrameUserMuted = function setFrameUserMuted(frameId, muted) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_USER_MUTED", frameId, muted };
  obj.dispatch(obj2);
};
export const updateFramePanelMode = function updateFramePanelMode(id, PIP) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP };
  obj.dispatch(obj2);
};
export const resetFrameLayoutModes = function resetFrameLayoutModes(frameId) {
  const FOCUSED = metroImportDefault.FOCUSED;
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId, layoutMode: FOCUSED };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
  const PANEL = ActivityPanelModes.PANEL;
  const obj3 = DispatcherDefault;
  const obj4 = { type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: PANEL };
  obj3.dispatch(obj4);
};
export const attachFrameIframe = function attachFrameIframe(id, first1) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_IFRAME_MOUNT", frameId: id, iframeId: first1 };
  obj.dispatch(obj2);
};
export const detachFrameIframe = function detachFrameIframe(frameId, iframeId) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_IFRAME_UNMOUNT", frameId, iframeId };
  obj.dispatch(obj2);
};
export const attachFrameHostWindow = function attachFrameHostWindow(frameId, windowKey) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_HOST_WINDOW_MOUNT", frameId, windowKey };
  obj.dispatch(obj2);
};
export const detachFrameHostWindow = function detachFrameHostWindow(frameId, windowKey) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_HOST_WINDOW_UNMOUNT", frameId, windowKey };
  obj.dispatch(obj2);
};
export const refreshProxyTicket = function refreshProxyTicket() {
  return obj(...arguments);
};
