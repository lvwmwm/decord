// Module ID: 13632
// Function ID: 13633
// Name: preloadChannelAppFrame
// Dependencies: [2068, 4845, 6295, 6296, 1087, 2063, 11041, 6180, 6200, 6299, 11044, 2]
// Exports: cancelChannelAppFramePreload, claimPreloadedFrame, preloadChannelAppFrame

// Module 13632 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 6299 */;
import leaveFrame from "leaveFrame" /* 11041 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import FramesStore from "FramesStore" /* 6295 */;
import FramesConstants from "FramesConstants" /* 6296 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ getFrameSurfaceForChannel: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
({ ChannelTypes: metroImportAll, Permissions: c9 } = Constants);
const map = new Map();
let result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export const preloadChannelAppFrame = function preloadChannelAppFrame(id) {
  let applicationId;
  let application_id;
  let channel;
  let frameId;
  let timeout;
  let timeout1;
  const f117546 = () => {
    const value = map.get(frameId);
    const obj = map;
    if (null != value) {
      const stopTimer = value.stopTimer;
      stopTimer.stop();
      obj.delete(frameId);
      let tmp5 = null != value.launchRequestId;
      if (tmp5) {
        frame = frame.getFrame(tmp);
        let launchRequestId;
        if (frame != null) {
          launchRequestId = frame.launchRequestId;
        }
        tmp5 = launchRequestId === value.launchRequestId;
      }
      if (tmp5) {
        const obj2 = frameId(dependencyMap[6]);
        obj2.leaveFrame(frameId);
      }
    }
  };
  const channel1 = ChannelStore.getChannel(id);
  if (channel1 != null) {
    application_id = channel1.application_id;
  }
  let type;
  if (channel1 != null) {
    type = channel1.type;
  }
  let tmp3 = null;
  if (type === constants.GUILD_APP) {
    tmp3 = closure_6(channel1);
  }
  let tmp5 = null;
  if (null != channel1) {
    tmp5 = null;
    if (null != application_id) {
      tmp5 = null;
      if (null != tmp3) {
        let obj = { channel: channel1, applicationId: application_id, surface: tmp3, frameId: closure_7(application_id, tmp3) };
        tmp5 = obj;
      }
    }
  }
  if (null != tmp5) {
    ({ channel, applicationId, frameId } = tmp5);
    const surface = tmp5.surface;
    if (map.has(frameId)) {
      let value = obj9.get(frameId);
      if (value == null) {
        const self3 = this;
        const self4 = this;
        const obj4 = { stopTimer: timeout, launchRequestId: "r" };
        timeout = new frameId(2063).Timeout();
        value = obj4;
      }
      const result = obj9.set(frameId, value);
      const stopTimer2 = value.stopTimer;
      stopTimer2.start(5000, f117546);
    } else {
      let obj2 = FramesStore;
      if (null == FramesStore.getFrame(frameId)) {
        if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
          const obj3 = frameId(6180);
          if (!obj3.isChannelContentGated(channel)) {
            const tmp7Result = frameId(6200);
            if (!tmp7Result.isChannelSpoilerGated(channel)) {
              if (null != getURLForApplicationDefault(applicationId)) {
                let value3 = obj9.get(frameId);
                if (value3 == null) {
                  const self = this;
                  const self2 = this;
                  const obj5 = { stopTimer: timeout1, launchRequestId: "r" };
                  timeout1 = new tmp7(2063).Timeout();
                  value3 = obj5;
                }
                const result1 = obj9.set(frameId, value3);
                let stopTimer = value3.stopTimer;
                stopTimer.start(5000, f117546);
                const obj6 = { applicationId, surface, showErrorModal: false };
                const tmp7Result2 = frameId(11044);
                const launchFrameResult = tmp7Result2.launchFrame(obj6);
                launchFrameResult.catch(() => {
                  const value = map.get(frameId);
                  const obj = map;
                  const tmp = frameId;
                  if (value != null) {
                    const stopTimer = value.stopTimer;
                    stopTimer.stop();
                  }
                  obj.delete(tmp);
                });
                const value4 = obj9.get(frameId);
                if (null != value4) {
                  let frame = obj2.getFrame(frameId);
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
export const cancelChannelAppFramePreload = function cancelChannelAppFramePreload(id) {
  let application_id;
  const channel = ChannelStore.getChannel(id);
  if (channel != null) {
    application_id = channel.application_id;
  }
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp3 = null;
  if (type === metroImportAll.GUILD_APP) {
    tmp3 = metroRequire(channel);
  }
  let tmp5 = null;
  if (null != channel) {
    tmp5 = null;
    if (null != application_id) {
      tmp5 = null;
      if (null != tmp3) {
        tmp5 = { channel, applicationId: application_id, surface: tmp3, frameId: metroImportDefault(application_id, tmp3) };
        const obj = { channel, applicationId: application_id, surface: tmp3, frameId: metroImportDefault(application_id, tmp3) };
      }
    }
  }
  if (null != tmp5) {
    const frameId = tmp5.frameId;
    const value = map.get(frameId);
    const obj3 = map;
    if (null != value) {
      const stopTimer = value.stopTimer;
      stopTimer.stop();
      obj3.delete(frameId);
      let tmp9 = null != value.launchRequestId;
      if (tmp9) {
        const frame = FramesStore.getFrame(frameId);
        let launchRequestId;
        if (frame != null) {
          launchRequestId = frame.launchRequestId;
        }
        tmp9 = launchRequestId === value.launchRequestId;
      }
      if (tmp9) {
        const obj2 = leaveFrame;
        obj2.leaveFrame(frameId);
      }
    }
  }
};
