// Module ID: 10566
// Function ID: 10567
// Name: tryLaunchAsFrame
// Dependencies: [2163, 6505, 10553, 5438, 10567, 10502, 2]
// Exports: tryLaunchAsFrame

// Module 10566 (tryLaunchAsFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5438 */;
import FramesConstants from "FramesConstants" /* 6505 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10502 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10553 */;
import openFrameInAppChannelDefault from "openFrameInAppChannel" /* 10567 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
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
