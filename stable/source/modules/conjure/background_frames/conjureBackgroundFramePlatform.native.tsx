// Module ID: 16714
// Function ID: 16715
// Name: conjureBackgroundFramePlatform
// Dependencies: [6934, 5813, 6935, 16715, 11093, 16716, 12471, 5831, 5917, 2]

// Module 16714 (conjureBackgroundFramePlatform)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11093 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12471 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 16715 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16716 */;
import FramesStore from "FramesStore" /* 6934 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const transitionToChannel = tmp(5917);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
let obj = {
  isInHostWindow() {
    return false;
  },
  isActivityPopoutOpen() {
    return false;
  },
  hasOwnPictureInPicture(frame) {
    return isConjureAppChannelFrameDefault(frame);
  },
  isPictureInPicture(surface) {
    const tmp = hasOwnProperty(surface);
    let activityPanelMode;
    if (tmp != null) {
      activityPanelMode = tmp.data.activityPanelMode;
    }
    return activityPanelMode === ActivityPanelModes.PIP;
  },
  enterPictureInPicture(frameId) {
    const obj = FramesActionCreatorsDefault;
    obj.updateFramePanelMode(frameId, ActivityPanelModes.PIP);
    const obj2 = FramesActionCreatorsDefault;
    const obj3 = { frameId, layoutMode: metroRequire.PIP };
    const result = obj2.updateFrameLayoutMode(obj3);
  },
  isOnScreen(id) {
    const frame = FramesStore.getFrame(id);
    let tmp2 = null == frame;
    if (!tmp2) {
      const obj = conjureAppPictureInPictureFrames;
      tmp2 = !obj.isConjureAppPictureInPictureFrame(frame);
    }
    if (tmp2) {
      const obj2 = FramePoolManagerDefault;
      tmp2 = null != obj2.getWinningTarget(id);
    }
    return tmp2;
  },
  openSurfaceChannel(surface, channel) {
    let flag = surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
    if (flag) {
      const tmpResult = transitionToChannel;
      tmpResult.transitionToChannel(channel.id);
      flag = true;
    }
    return flag;
  }
};
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFramePlatform.native.tsx");

export default obj;
