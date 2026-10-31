// Module ID: 11730
// Function ID: 11731
// Name: openFrame
// Dependencies: [6846, 6847, 1072, 10928, 5675, 1099, 2]
// Exports: default, shouldOpenAppChannel

// Module 11730 (openFrame)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10928 */;
import FramesStore from "FramesStore" /* 6846 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ MAIN_SURFACE: closure_4, makeFrameId: hasOwnProperty } = FramesConstants);
const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/frames/openFrame.tsx");

export default function openFrame(arg0) {
  let analyticsContext;
  let applicationId;
  let channel;
  let launch;
  let launchFrameResult;
  ({ applicationId, channel, analyticsContext, launch } = arg0);
  if (null == channel) {
    const obj2 = { applicationId, surface, analyticsContext, launch, invite: tmp };
    const obj3 = { frameId: hasOwnProperty(applicationId, surface), launched: launchFrameResult };
    const obj = FramesActionCreatorsDefault;
    launchFrameResult = obj.launchFrame(obj2);
    return obj3;
  } else {
    const obj4 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL };
    const merged = Object.assign(channel);
    const obj6 = { applicationId, surface: obj4, analyticsContext, launch, showErrorModal: false };
    const obj5 = FramesActionCreatorsDefault;
    const launchFrameResult1 = obj5.launchFrame(obj6);
    const catchPromise = launchFrameResult1.catch(() => {

    });
    const obj7 = router_utils;
    obj7.transitionTo(Routes.CHANNEL(channel.guildId, channel.channelId));
    const obj8 = { frameId: hasOwnProperty(applicationId, obj4), launched: catchPromise };
    return obj8;
  }
};
export function shouldOpenAppChannel(c0) {
  return null == FramesStore.getFrame(hasOwnProperty(c0, closure_4));
}
