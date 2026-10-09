// Module ID: 10771
// Function ID: 10772
// Name: launchFrame
// Dependencies: [5, 10772, 10767, 6074, 10776, 584, 10778, 10775, 10806, 10810, 10811, 2]
// Exports: attachFrameHostWindow, attachFrameIframe, detachFrameHostWindow, detachFrameIframe, launchFrame, refreshProxyTicket, resetFrameLayoutModes, setFramePrefersPictureInPictureOnNavigateAway, updateFramePanelMode

// Module 10771 (launchFrame)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6074 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 10775 */;
import leaveCurrentEmbeddedActivity from "leaveCurrentEmbeddedActivity" /* 10776 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10778 */;
import leaveFrame from "leaveFrame" /* 10811 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FramesStore from "FramesStore" /* 10772 */;
import FramesConstants from "FramesConstants" /* 10767 */;
import size from "module_2" /* 2 */;

let analyticsContext, closure_2, dispatchResult1, error, hostWindowKey, intent, message, proxyTicket, type;

let hasOwnProperty;
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
      let obj11;
      let obj6;
      let showErrorModal;
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
          let frameId;
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
              closure_2 = tmp4;
              applicationId = undefined;
              type = undefined;
              c2 = undefined;
              analyticsContext = undefined;
              hostWindowKey = undefined;
              showErrorModal = undefined;
              ({ applicationId: c0, surface: c1, launch: c2, analyticsContext: c3, hostWindowKey: c4, showErrorModal } = closure_0);
              if (showErrorModal === undefined) {
                showErrorModal = true;
              }
              frameId = undefined;
              intent = undefined;
              proxyTicket = undefined;
              message = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              frameId = closure_131_8(applicationId, type);
              intent = closure_131_4.getFrame(frameId);
              if (null != intent) {
                if (intent.intent === closure_131_5.MAIN) {
                  closure_131_13(frameId);
                  const obj7 = { frameId, layoutMode: closure_131_6.FOCUSED };
                  closure_131_14(obj7);
                }
                c7 = 3;
                return { value: frameId, done: true };
              } else {
                if (closure_131_7(type) === closure_131_5.MAIN) {
                  const obj8 = closure_131_0(closure_131_2[4]);
                  const result = obj8.leaveCurrentEmbeddedActivity();
                  closure_131_11();
                }
                const obj12 = { type: "FRAME_LAUNCH_START", applicationId, frameId, surface: type, hostWindowKey };
                const obj9 = closure_131_1(closure_131_2[5]);
                obj9.dispatch(obj12);
                c5 = 1;
                c6 = 3;
                c7 = 1;
                const obj13 = { value: obj11.createProxyTicket(applicationId, closure_131_1(closure_131_2[7])(type), type.type), done: false };
                obj11 = closure_131_0(closure_131_2[6]);
                return obj13;
              }
            }
          } else {
            if (2 === c6) {
              c5 = 0;
              error = closure_4;
              const tmp18 = showErrorModal;
              if (tmp18) {
                c6 = 4;
                c7 = 1;
                const obj14 = { value: obj6.getActivityLaunchErrorInfo(error, applicationId), done: false };
                obj6 = closure_131_0(closure_131_2[8]);
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
                proxyTicket = value;
                const obj16 = { type: "FRAME_LAUNCH", applicationId, frameId, surface: type, proxyTicket, analyticsContext, launch: type, hostWindowKey };
                type = c2;
                const dispatch = closure_131_1(closure_131_2[5]).dispatch;
                closure_131_1(closure_131_2[5]);
                if (c2 == null) {
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
              closure_131_1(closure_131_2[9])(message.message);
            }
            const obj18 = { type: "FRAME_LAUNCH_FAIL", applicationId, frameId, error, analyticsContext };
            const obj4 = closure_131_1(closure_131_2[5]);
            obj4.dispatch(obj18);
            throw error;
          }
        } catch (tmp72) {
          closure_4 = tmp72;
          if (0 === c5) {
            c7 = 3;
            throw tmp72;
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
    if (mainFrame.intent === hasOwnProperty.MAIN) {
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
    const FOCUSED = metroRequire.FOCUSED;
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
      if (mainFrame1.intent === hasOwnProperty.MAIN) {
        const tmp4Result = tmp4(10811);
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
      let obj22;
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
              applicationId = undefined;
              proxyTicket = undefined;
              message = undefined;
              frame = frame.getFrame(frameId);
              const tmp71 = frameId;
              if (null == frame) {
                c6 = 3;
                return { value: false, done: true };
              } else {
                applicationId = frame.applicationId;
                const surface = frame.surface;
                const obj5 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId: tmp71, refreshing: true };
                const obj20 = DispatcherDefault;
                obj20.dispatch(obj5);
                c4 = 2;
                c5 = 4;
                c6 = 1;
                const obj6 = { value: obj22.createProxyTicket(applicationId, getChannelIdForEmbeddedSurfaceDefault(surface), surface.type), done: false };
                obj22 = EmbeddedActivitiesActionCreators;
                return obj6;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj9 = closure_130_1(closure_130_2[5]);
            dispatchResult1 = obj9.dispatch(obj8);
            throw message;
          } else if (2 === c5) {
            c4 = 1;
            let closure_4 = message;
            const obj7 = closure_130_0(closure_130_2[8]);
            dispatchResult1 = obj7.getActivityLaunchErrorInfo(closure_4, applicationId);
            c5 = 3;
            c6 = 1;
            return { value: dispatchResult1, done: false };
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const obj11 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj4 = closure_130_1(closure_130_2[5]);
              obj4.dispatch(obj11);
              c6 = 3;
              return { value, done: true };
            } else {
              message = value;
              closure_130_1(closure_130_2[9])(message.message);
              c4 = 0;
              const obj13 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj18 = closure_130_1(closure_130_2[5]);
              obj18.dispatch(obj13);
              c6 = 3;
              return { value: false, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            const obj15 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            obj = closure_130_1(closure_130_2[5]);
            obj.dispatch(obj15);
            c6 = 3;
            return { value, done: true };
          } else {
            proxyTicket = value;
            const obj19 = { type: "FRAME_UPDATE_PROXY_TICKET", applicationId, frameId, proxyTicket };
            const obj14 = closure_130_1(closure_130_2[5]);
            obj14.dispatch(obj19);
            c4 = 0;
            const obj21 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj16 = closure_130_1(closure_130_2[5]);
            obj16.dispatch(obj21);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp36) {
          message = tmp36;
          if (0 === c4) {
            c6 = 3;
            throw tmp36;
          } else if (1 === tmp38) {
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
({ FrameIntent: hasOwnProperty, FrameLayoutModes: metroRequire, getFrameIntentForSurface: metroImportDefault, makeFrameId: metroImportAll } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
let result = size.fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

export const launchFrame = function launchFrame() {
  return obj(...arguments);
};
export { clearMainFrameSlot };
export { demoteMainFrame };
export { promoteFrame };
export { updateFrameLayoutMode };
export const setFramePrefersPictureInPictureOnNavigateAway = function setFramePrefersPictureInPictureOnNavigateAway(frameId, enabled) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId, enabled };
  obj.dispatch(obj2);
};
export const updateFramePanelMode = function updateFramePanelMode(id, PIP) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP };
  obj.dispatch(obj2);
};
export const resetFrameLayoutModes = function resetFrameLayoutModes(frameId) {
  const FOCUSED = metroRequire.FOCUSED;
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
