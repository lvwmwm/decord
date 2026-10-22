// Module ID: 17969
// Function ID: 17970
// Name: conjureBackgroundFramePlatform
// Dependencies: [5595, 6761, 10743, 11844, 5612, 5693, 2]

// Module 17969 (conjureBackgroundFramePlatform)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5595 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10743 */;
import FramePoolManagerDefault from "FramePoolManager" /* 11844 */;
import FramesConstants from "FramesConstants" /* 6761 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const transitionToChannel = tmp(5693);
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
