// Module ID: 11402
// Function ID: 11403
// Name: openFrame
// Dependencies: [6776, 6777, 1084, 10770, 5627, 1111, 2]
// Exports: default, shouldOpenAppChannel

// Module 11402 (openFrame)
import Constants from "Constants" /* 1084 */;
import router_utils from "router_utils" /* 1111 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10770 */;
import FramesStore from "FramesStore" /* 6776 */;
import FramesConstants from "FramesConstants" /* 6777 */;
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
export const shouldOpenAppChannel = function shouldOpenAppChannel(c0) {
  return null == FramesStore.getFrame(hasOwnProperty(c0, closure_4));
};
