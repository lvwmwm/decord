// Module ID: 15750
// Function ID: 15751
// Name: conjureBackgroundFramePlatform
// Dependencies: [6623, 5539, 6624, 15751, 10622, 15752, 15754, 5557, 5646, 2]

// Module 15750 (conjureBackgroundFramePlatform)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5539 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10622 */;
import isConjureAppChannelFrameDefault from "isConjureAppChannelFrame" /* 15751 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 15752 */;
import FramePoolManagerDefault from "FramePoolManager" /* 15754 */;
import FramesStore from "FramesStore" /* 6623 */;
import FramesConstants from "FramesConstants" /* 6624 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const transitionToChannel = tmp(5646);
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
