// Module ID: 11691
// Function ID: 11692
// Name: tryLaunchAsFrame
// Dependencies: [2040, 6841, 11652, 5670, 11692, 10903, 2]
// Exports: tryLaunchAsFrame

// Module 11691 (tryLaunchAsFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10903 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11652 */;
import openFrameInAppChannelDefault from "openFrameInAppChannel" /* 11692 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import size from "module_2" /* 2 */;

const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export function tryLaunchAsFrame(channelId) {
  let analyticsContext;
  let application;
  let applicationId;
  let flag;
  let launch;
  let preferAppChannel;
  ({ applicationId, application } = channelId);
  if (application === undefined) {
    application = ApplicationStore.getApplication(applicationId);
  }
  ({ launch, analyticsContext, preferAppChannel } = channelId);
  if (preferAppChannel === undefined) {
    preferAppChannel = false;
  }
  channelId = channelId.channelId;
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  const hasItem = frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
  if (!frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL)) {
    flag = hasItem;
    if (flag) {
      const obj2 = { applicationId, surface: MAIN_SURFACE, launch, analyticsContext };
      const obj3 = FramesActionCreatorsDefault;
      obj3.launchFrame(obj2);
      flag = true;
    }
  } else {
    const obj4 = { applicationId, channelId, launch, analyticsContext };
    openFrameInAppChannelDefault(obj4);
    flag = true;
  }
  return flag;
}
