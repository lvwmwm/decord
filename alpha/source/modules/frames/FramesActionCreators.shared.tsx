// Module ID: 10620
// Function ID: 10621
// Name: launchFrame
// Dependencies: [5, 10612, 10613, 6072, 10621, 584, 10635, 10616, 11148, 10622, 10632, 11149, 2]
// Exports: attachFrameHostWindow, attachFrameIframe, detachFrameHostWindow, detachFrameIframe, launchFrame, refreshProxyTicket, resetFrameLayoutModes, setFramePrefersPictureInPictureOnNavigateAway, updateFramePanelMode

// Module 10620 (launchFrame)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6072 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 10616 */;
import leaveCurrentEmbeddedActivity from "leaveCurrentEmbeddedActivity" /* 10621 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10635 */;
import getFrameRequestSurfaceTypeDefault from "getFrameRequestSurfaceType" /* 11148 */;
import getFramesManagerDefault from "getFramesManager" /* 11149 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FramesStore from "FramesStore" /* 10612 */;
import FramesConstants from "FramesConstants" /* 10613 */;
import size from "module_2" /* 2 */;

let analyticsContext, closure_2, closure_4, dispatchResult1, error, hostWindowKey, intent, message, proxyTicket;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _launchFrame() {
  obj = _asyncToGenerator(async (applicationId) => {
    let closure_1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let launch;
      let obj6;
      let showErrorModal;
      let tmp58;
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
          let surface;
          let frameId;
          let closure_9;
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
              surface = undefined;
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
              closure_9 = undefined;
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
              frameId = closure_131_8(applicationId, surface);
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
                if (closure_131_7(surface) === closure_131_5.MAIN) {
                  const obj8 = closure_131_0(closure_131_2[4]);
                  const result = obj8.leaveCurrentEmbeddedActivity();
                  closure_131_11();
                }
                const obj11 = { type: "FRAME_LAUNCH_START", applicationId, frameId, surface, hostWindowKey };
                const obj9 = closure_131_1(closure_131_2[5]);
                obj9.dispatch(obj11);
                c5 = 1;
                const createProxyTicket = closure_131_0(closure_131_2[6]).createProxyTicket;
                closure_131_0(closure_131_2[6]);
                c6 = 3;
                c7 = 1;
                const obj12 = { value: createProxyTicket(applicationId, tmp58, closure_131_1(closure_131_2[8])(surface)), done: false };
                tmp58 = closure_131_1(closure_131_2[7])(surface);
                return obj12;
              }
            }
          } else {
            if (2 === c6) {
              c5 = 0;
              error = closure_4;
              const tmp16 = showErrorModal;
              if (tmp16) {
                closure_9 = closure_131_1(closure_131_2[9])();
                c6 = 4;
                c7 = 1;
                const obj13 = { value: obj6.getActivityLaunchErrorInfo(error, applicationId), done: false };
                obj6 = closure_131_0(closure_131_2[10]);
                return obj13;
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
                const obj15 = { type: "FRAME_LAUNCH", applicationId, frameId, surface, proxyTicket, analyticsContext, launch, hostWindowKey };
                launch = c2;
                const dispatch = closure_131_1(closure_131_2[5]).dispatch;
                closure_131_1(closure_131_2[5]);
                if (c2 == null) {
                  launch = {};
                }
                dispatch(obj15);
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
              closure_9.showLaunchErrorModal(message.message);
            }
            const obj17 = { type: "FRAME_LAUNCH_FAIL", applicationId, frameId, error, analyticsContext };
            const obj4 = closure_131_1(closure_131_2[5]);
            obj4.dispatch(obj17);
            throw error;
          }
        } catch (tmp76) {
          closure_4 = tmp76;
          if (0 === c5) {
            c7 = 3;
            throw tmp76;
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
      obj = getFramesManagerDefault();
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
    if (null != mainFrame1) {
      if (mainFrame1.intent === hasOwnProperty.MAIN) {
        const obj3 = getFramesManagerDefault();
        obj3.leaveFrame(mainFrame1.id);
      } else {
        demoteMainFrame(mainFrame1.id);
      }
    }
    const obj5 = { type: "FRAME_PROMOTE", frameId };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj5);
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
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let tmp82;
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
        let tmp49;
        let c4;
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
              tmp49 = undefined;
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
                const createProxyTicket = EmbeddedActivitiesActionCreators.createProxyTicket;
                EmbeddedActivitiesActionCreators;
                c5 = 4;
                c6 = 1;
                const obj7 = { value: createProxyTicket(applicationId, tmp82, getFrameRequestSurfaceTypeDefault(surface)), done: false };
                tmp82 = getChannelIdForEmbeddedSurfaceDefault(surface);
                return obj7;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj11 = closure_130_1(closure_130_2[5]);
            dispatchResult1 = obj11.dispatch(obj8);
            throw tmp49;
          } else if (2 === c5) {
            c4 = 1;
            let closure_5 = tmp49;
            tmp49 = closure_130_1(closure_130_2[9])();
            const obj9 = closure_130_0(closure_130_2[10]);
            dispatchResult1 = obj9.getActivityLaunchErrorInfo(closure_5, applicationId);
            c5 = 3;
            c6 = 1;
            return { value: dispatchResult1, done: false };
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const obj12 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj6 = closure_130_1(closure_130_2[5]);
              obj6.dispatch(obj12);
              c6 = 3;
              return { value, done: true };
            } else {
              message = value;
              tmp49.showLaunchErrorModal(message.message);
              c4 = 0;
              const obj14 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj4 = closure_130_1(closure_130_2[5]);
              obj4.dispatch(obj14);
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
            const obj16 = closure_130_1(closure_130_2[5]);
            obj16.dispatch(obj19);
            c4 = 0;
            const obj21 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj18 = closure_130_1(closure_130_2[5]);
            obj18.dispatch(obj21);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp49) {
          if (0 === c4) {
            c6 = 3;
            throw tmp49;
          } else if (1 === tmp51) {
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
