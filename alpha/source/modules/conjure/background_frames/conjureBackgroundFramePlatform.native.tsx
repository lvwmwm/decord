// Module ID: 17877
// Function ID: 17878
// Name: conjureBackgroundFramePlatform
// Dependencies: [5591, 6755, 10724, 11804, 5608, 5689, 2]

// Module 17877 (conjureBackgroundFramePlatform)
import ActivityPanelConstants from "ActivityPanelConstants" /* 5591 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5608 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10724 */;
import FramePoolManagerDefault from "FramePoolManager" /* 11804 */;
import FramesConstants from "FramesConstants" /* 6755 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const transitionToChannel = tmp(5689);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: closure_4, FrameLayoutModes: hasOwnProperty } = FramesConstants);
let obj = {
  isInHostWindow() {
    return false;
  },
  isActivityPopoutOpen() {
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
