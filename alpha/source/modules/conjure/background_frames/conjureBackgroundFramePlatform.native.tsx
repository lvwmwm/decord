// Module ID: 18013
// Function ID: 18014
// Name: conjureBackgroundFramePlatform
// Dependencies: [5607, 6774, 10765, 11863, 5624, 5705, 2]

// Module 18013 (conjureBackgroundFramePlatform)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5607 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5624 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10765 */;
import FramePoolManagerDefault from "FramePoolManager" /* 11863 */;
import FramesConstants from "FramesConstants" /* 6774 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const transitionToChannel = tmp(5705);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: closure_4, FrameLayoutModes: hasOwnProperty } = FramesConstants);
let obj = {
  isInHostWindow() {
    return false;
  },
  isActivityPopoutOpen() {
    return false;
  },
  hasOwnPictureInPicture() {
    return false;
  },
  isPictureInPicture(surface) {
    const tmp = React3(surface);
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
    const obj3 = { frameId, layoutMode: hasOwnProperty.PIP };
    const result = obj2.updateFrameLayoutMode(obj3);
  },
  isOnScreen(id) {
    const obj = FramePoolManagerDefault;
    return null != obj.getWinningTarget(id);
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
