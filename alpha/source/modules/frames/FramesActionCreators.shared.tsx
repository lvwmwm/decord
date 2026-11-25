// Module ID: 9956
// Function ID: 9957
// Name: launchFrame
// Dependencies: [32, 5, 6905, 6906, 5638, 7656, 7654, 9957, 572, 6908, 7657, 7648, 9959, 9964, 7660, 2]
// Exports: attachFrameHostWindow, attachFrameIframe, detachFrameHostWindow, detachFrameIframe, launchFrame, refreshProxyTicket, resetFrameGuestClaims, resetFrameLayoutModes, setFramePictureInPictureInteractive, setFrameRunsInBackground, setFrameUserMuted, updateFramePanelMode

// Module 9956 (launchFrame)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5638 */;
import getChannelIdForEmbeddedSurface from "getChannelIdForEmbeddedSurface" /* 6908 */;
import createProxyTicket2 from "createProxyTicket" /* 7657 */;
import leaveFrame from "leaveFrame" /* 7660 */;
import leaveCurrentEmbeddedActivity from "leaveCurrentEmbeddedActivity" /* 9957 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FramesStore from "FramesStore" /* 6905 */;
import FramesConstants from "FramesConstants" /* 6906 */;
import size from "module_2" /* 2 */;

let analyticsContext, error, finish, hostWindowKey, intent, launch, launchRequestId, message, proxyTicket, span;

let c10;
let c9;
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
      let showErrorModal;
      let sum;
      let tmp;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let surface;
          let invite;
          let frameId;
          let closure_12;
          let closure_13;
          let closure_14;
          c7 = 2;
          const tmp4 = c6;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp4;
              applicationId = undefined;
              surface = undefined;
              launch = undefined;
              analyticsContext = undefined;
              hostWindowKey = undefined;
              showErrorModal = undefined;
              invite = undefined;
              ({ applicationId: c0, surface: c1, launch: c2, analyticsContext: c3, hostWindowKey: c4, showErrorModal } = closure_0);
              const tmp144 = closure_0;
              if (showErrorModal === undefined) {
                showErrorModal = true;
              }
              invite = tmp144.invite;
              frameId = undefined;
              intent = undefined;
              finish = undefined;
              span = undefined;
              launchRequestId = undefined;
              closure_12 = undefined;
              closure_13 = undefined;
              closure_14 = undefined;
              proxyTicket = undefined;
              message = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Path", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              frameId = closure_131_10(applicationId, surface);
              intent = frame.getFrame(frameId);
              if (null != intent) {
                const obj14 = closure_131_0(closure_131_2[5]);
                finish = obj14.getFrameLaunchTiming(frameId);
                if (null == finish) {
                  const obj15 = closure_131_0(closure_131_2[5]);
                  finish = obj15.startLaunchTiming(closure_131_0(closure_131_2[6]).LaunchTrigger.LAUNCH_FRAME, frameId, applicationId, surface);
                }
                let obj7 = { type: closure_131_0(closure_131_2[6]).FrameLaunchCloseType.REUSED };
                finish = finish.finish;
                finish(obj7);
                if (intent.intent === constants.MAIN) {
                  closure_131_16(frameId);
                  const obj11 = { frameId, layoutMode: constants2.FOCUSED };
                  closure_131_17(obj11);
                }
                c7 = 3;
                return { value: frameId, done: true };
              } else {
                if (closure_131_8(surface) === constants.MAIN) {
                  const obj8 = closure_131_0(closure_131_2[7]);
                  const result = obj8.leaveCurrentEmbeddedActivity();
                  closure_131_14();
                }
                const obj9 = closure_131_0(closure_131_2[5]);
                span = obj9.startLaunchTiming(closure_131_0(closure_131_2[6]).LaunchTrigger.LAUNCH_FRAME, frameId, applicationId, surface);
                sum = sum + 1;
                launchRequestId = sum;
                const obj16 = { type: "FRAME_LAUNCH_START", applicationId, frameId, surface, hostWindowKey, launch, invite, launchRequestId };
                const obj10 = closure_131_1(closure_131_2[8]);
                obj10.dispatch(obj16);
                c5 = 1;
                span = span.span;
                closure_12 = span(closure_131_0(closure_131_2[6]).LaunchStep.PROXY_TICKET, (() => {
                  let closure_0 = hostWindowKey((arg0) => {
                    let closure_2;
                    const status = arg0;
                    let c3 = 0;
                    let c4 = 0;
                    return (function*(arg0) {
                      let tmp;
                      const obj6 = status(closure_2_2[9]);
                      const proxyTicketChannelId = obj6.getProxyTicketChannelId(tmp);
                      const obj7 = status(closure_2_2[10]);
                      tmp = yield obj7.takeProxyTicket(status, proxyTicketChannelId, tmp.type, closure_1_6);
                      if (tmp.prefetched) {
                        status.setStatus(status(closure_2_2[6]).StepStatus.PREFETCHED);
                      }
                      return tmp.ticket;
                    })();
                  });
                  return function() {
                    return closure_0(...arguments);
                  };
                })());
                const obj12 = closure_131_0(closure_131_2[11]);
                closure_13 = obj12.loadLaunchCSP(span, applicationId);
                const items = [closure_12, closure_13];
                c6 = 3;
                c7 = 1;
                const obj17 = { value: Promise.all(items), done: false };
                return obj17;
              }
            }
          } else {
            if (2 === tmp4) {
              c5 = 0;
              error = closure_4;
              const tmp20 = showErrorModal;
              if (tmp20) {
                let obj6 = closure_131_0(closure_131_2[12]);
                c6 = 4;
                c7 = 1;
                const obj18 = { value: obj6.getActivityLaunchErrorInfo(error, applicationId), done: false };
                return obj18;
              }
            } else if (3 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                closure_14 = value;
                proxyTicket = closure_131_3(closure_14, 1)[0];
                const obj20 = { type: "FRAME_LAUNCH", applicationId, frameId, surface, proxyTicket, analyticsContext, launch, invite, hostWindowKey, launchRequestId };
                const dispatch = closure_131_1(closure_131_2[8]).dispatch;
                closure_131_1(closure_131_2[8]);
                if (launch == null) {
                  launch = {};
                }
                dispatch(obj20);
                c5 = 0;
                c7 = 3;
                return { value: frameId, done: true };
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              message = value;
              closure_131_1(closure_131_2[13])(message.message);
            }
            const obj4 = closure_131_1(closure_131_2[8]);
            const obj22 = { type: "FRAME_LAUNCH_FAIL", applicationId, frameId, launchRequestId, error, analyticsContext };
            obj4.dispatch(obj22);
            throw error;
          }
        } catch (tmp110) {
          closure_4 = tmp110;
          if (0 === c5) {
            c7 = 3;
            throw tmp110;
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
        const tmp4Result = tmp4(7660);
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
      let obj13;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const tmp82 = frameId;
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
                const obj5 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId: tmp82, refreshing: true };
                const obj11 = DispatcherDefault;
                obj11.dispatch(obj5);
                c4 = 2;
                const createProxyTicket = createProxyTicket2.createProxyTicket;
                c5 = 4;
                c6 = 1;
                const obj6 = { value: createProxyTicket(applicationId, obj13.getProxyTicketChannelId(surface), surface.type, invite), done: false };
                obj13 = getChannelIdForEmbeddedSurface;
                return obj6;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj9 = closure_130_1(closure_130_2[8]);
            obj9.dispatch(obj8);
            throw message;
          } else if (2 === c5) {
            c4 = 1;
            let closure_4 = message;
            c5 = 3;
            c6 = 1;
            const obj10 = { value: obj7.getActivityLaunchErrorInfo(closure_4, applicationId), done: false };
            obj7 = closure_130_0(closure_130_2[12]);
            return obj10;
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const obj12 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj4 = closure_130_1(closure_130_2[8]);
              obj4.dispatch(obj12);
              c6 = 3;
              return { value, done: true };
            } else {
              message = value;
              closure_130_1(closure_130_2[13])(message.message);
              c4 = 0;
              const obj15 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj21 = closure_130_1(closure_130_2[8]);
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
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj16);
            c6 = 3;
            return { value, done: true };
          } else {
            proxyTicket = value;
            const obj20 = { type: "FRAME_UPDATE_PROXY_TICKET", applicationId, frameId, proxyTicket };
            const obj17 = closure_130_1(closure_130_2[8]);
            obj17.dispatch(obj20);
            c4 = 0;
            const obj22 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj19 = closure_130_1(closure_130_2[8]);
            obj19.dispatch(obj22);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp47) {
          message = tmp47;
          if (0 === c4) {
            c6 = 3;
            throw tmp47;
          } else if (1 === tmp49) {
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

export function launchFrame() {
  return obj(...arguments);
}
export { clearMainFrameSlot };
export { demoteMainFrame };
export { promoteFrame };
export { updateFrameLayoutMode };
export function setFrameRunsInBackground(id, enabled) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_RUNS_IN_BACKGROUND", frameId: id, enabled };
  obj.dispatch(obj2);
}
export function setFramePictureInPictureInteractive(id, enabled) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_PICTURE_IN_PICTURE_INTERACTIVE", frameId: id, enabled };
  obj.dispatch(obj2);
}
export function resetFrameGuestClaims(frameId) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_PICTURE_IN_PICTURE_INTERACTIVE", frameId, enabled: false };
  obj.dispatch(obj2);
}
export function setFrameUserMuted(id, muted) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_USER_MUTED", frameId: id, muted };
  obj.dispatch(obj2);
}
export function updateFramePanelMode(id, PIP) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP };
  obj.dispatch(obj2);
}
export function resetFrameLayoutModes(frameId) {
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
}
export function attachFrameIframe(id, iframeId) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_IFRAME_MOUNT", frameId: id, iframeId };
  obj.dispatch(obj2);
}
export function detachFrameIframe(frameId, iframeId) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_IFRAME_UNMOUNT", frameId, iframeId };
  obj.dispatch(obj2);
}
export function attachFrameHostWindow(frameId, windowKey) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_HOST_WINDOW_MOUNT", frameId, windowKey };
  obj.dispatch(obj2);
}
export function detachFrameHostWindow(frameId, windowKey) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_HOST_WINDOW_UNMOUNT", frameId, windowKey };
  obj.dispatch(obj2);
}
export function refreshProxyTicket() {
  return obj(...arguments);
}
