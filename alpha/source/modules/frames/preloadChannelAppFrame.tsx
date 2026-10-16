// Module ID: 17292
// Function ID: 17293
// Name: preloadChannelAppFrame
// Dependencies: [2068, 4809, 10947, 10931, 1087, 2063, 10960, 10948, 10963, 2]
// Exports: claimPreloadedFrame, preloadChannelAppFrame

// Module 17292 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 10948 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import FramesStore from "FramesStore" /* 10947 */;
import FramesConstants from "FramesConstants" /* 10931 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ getFrameSurfaceForChannel: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
({ ChannelTypes: metroImportAll, Permissions: c9 } = Constants);
const map = new Map();
let result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export const preloadChannelAppFrame = function preloadChannelAppFrame(id) {
  let closure_0;
  let timeout;
  let timeout1;
  const f128416 = () => {
    set.delete(closure_0);
    let tmp4 = null != value.launchRequestId;
    if (tmp4) {
      frame = frame.getFrame(tmp);
      let launchRequestId;
      if (frame != null) {
        launchRequestId = frame.launchRequestId;
      }
      tmp4 = launchRequestId === tmp3.launchRequestId;
    }
    if (tmp4) {
      const obj = closure_0(dependencyMap[6]);
      obj.leaveFrame(closure_0);
    }
  };
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const application_id = channel.application_id;
    let tmp3 = null;
    if (channel.type === constants.GUILD_APP) {
      tmp3 = closure_6(channel);
    }
    if (null != application_id) {
      if (null != tmp3) {
        const tmp25 = closure_7(application_id, tmp3);
        _require = tmp25;
        if (map.has(tmp25)) {
          _require = tmp25;
          let value = obj6.get(tmp25);
          if (value == null) {
            const self3 = this;
            const self4 = this;
            const obj2 = { stopTimer: timeout, launchRequestId: "r" };
            timeout = new require("Timers").Timeout();
            value = obj2;
          }
          const result = obj6.set(tmp25, value);
          const stopTimer2 = value.stopTimer;
          stopTimer2.start(5000, f128416);
        } else {
          let obj = FramesStore;
          if (null == FramesStore.getFrame(tmp25)) {
            if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
              let tmp4 = importDefault;
              if (null != getURLForApplicationDefault(application_id)) {
                _require = tmp25;
                let value3 = obj6.get(tmp25);
                if (value3 == null) {
                  const self = this;
                  const self2 = this;
                  const obj4 = { stopTimer: timeout1, launchRequestId: "r" };
                  timeout1 = new require("Timers").Timeout();
                  value3 = obj4;
                }
                const result1 = obj6.set(tmp25, value3);
                let stopTimer = value3.stopTimer;
                stopTimer.start(5000, f128416);
                const obj5 = { applicationId: application_id, surface: tmp3, showErrorModal: false };
                const obj3 = require("launchFrame");
                const launchFrameResult = obj3.launchFrame(obj5);
                launchFrameResult.catch(() => {
                  const value = map.get(closure_0);
                  const obj = map;
                  const tmp = closure_0;
                  if (value != null) {
                    const stopTimer = value.stopTimer;
                    stopTimer.stop();
                  }
                  obj.delete(tmp);
                });
                const value4 = obj6.get(tmp25);
                if (null != value4) {
                  let frame = obj.getFrame(tmp25);
                  let launchRequestId;
                  if (frame != null) {
                    launchRequestId = frame.launchRequestId;
                  }
                  value4.launchRequestId = launchRequestId;
                }
              }
            }
          }
        }
      }
    }
  }
};
export const claimPreloadedFrame = function claimPreloadedFrame(frameId) {
  let flag = map.has(frameId);
  if (flag) {
    const value = obj.get(frameId);
    if (value != null) {
      const stopTimer = value.stopTimer;
      stopTimer.stop();
    }
    map.delete(frameId);
    flag = true;
  }
  return flag;
};
