// Module ID: 9482
// Function ID: 9483
// Name: ChannelCallSingleController
// Dependencies: [19, 4858, 502, 1074, 4857, 21, 1241, 5016, 504, 9483, 9485, 9486, 2]
// Exports: ChannelCallSingleController

// Module 9482 (ChannelCallSingleController)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import CallConstants from "CallConstants" /* 4857 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const ParticipantTypes = CallConstants.ParticipantTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = function ChannelCallSingleController(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  const items = [channel.id];
  const effect = react.useEffect(() => {
    const track = AnalyticsUtilsDefault.track;
    const VIDEO_LAYOUT_TOGGLED = AnalyticEvents.VIDEO_LAYOUT_TOGGLED;
    const obj = { video_layout: "focus" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
    track(VIDEO_LAYOUT_TOGGLED, obj);
  }, items);
  selectedParticipant(504);
  [][0] = ApplicationStreamingStore;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    const id = selectedParticipant.user.id;
    let tmp15Result = null;
    if (null != tmp4) {
      tmp15Result = jsx(channel(id === tmp13 ? 9483 : 9485), { participant: selectedParticipant, channel });
    }
    return tmp15Result;
  } else if (ParticipantTypes.USER === type) {
    return jsx(channel(9486), { participant: selectedParticipant, channel });
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};
