// Module ID: 10925
// Function ID: 10926
// Name: ChannelCallSingleController
// Dependencies: [19, 6281, 502, 1071, 5444, 21, 1255, 5531, 504, 10926, 10928, 10929, 2]
// Exports: ChannelCallSingleController

// Module 10925 (ChannelCallSingleController)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import CallConstants from "CallConstants" /* 5444 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5531 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6281 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const ParticipantTypes = CallConstants.ParticipantTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export function ChannelCallSingleController(selectedParticipant) {
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
      tmp15Result = jsx(channel(id === tmp13 ? 10926 : 10928), { participant: selectedParticipant, channel });
    }
    return tmp15Result;
  } else if (ParticipantTypes.USER === type) {
    return jsx(channel(10929), { participant: selectedParticipant, channel });
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
}
