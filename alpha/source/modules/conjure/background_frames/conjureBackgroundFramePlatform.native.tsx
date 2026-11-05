// Module ID: 16629
// Function ID: 16630
// Name: conjureBackgroundFramePlatform
// Dependencies: [6984, 5793, 6985, 16630, 11123, 16631, 12461, 5811, 5893, 2]

// Module 16629 (conjureBackgroundFramePlatform)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5793 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5811 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11123 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12461 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 16630 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16631 */;
import FramesStore from "FramesStore" /* 6984 */;
import FramesConstants from "FramesConstants" /* 6985 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const transitionToChannel = tmp(5893);
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
