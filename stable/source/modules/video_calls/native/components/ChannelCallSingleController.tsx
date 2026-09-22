// Module ID: 10151
// Function ID: 10152
// Name: ChannelCallSingleController
// Dependencies: [19, 4658, 502, 1074, 4657, 21, 1240, 4816, 504, 10152, 10154, 10155, 2]
// Exports: ChannelCallSingleController

// Module 10151 (ChannelCallSingleController)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4816 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4658 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ParticipantTypes = fn(4657).ParticipantTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = function ChannelCallSingleController(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  const items = [channel.id];
  const effect = noop.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { video_layout: "focus" };
    const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
    obj.track(AnalyticEvents.VIDEO_LAYOUT_TOGGLED, obj2);
  }, items);
  selectedParticipant(504);
  [][0] = ApplicationStreamingStore;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    if (null == tmp4) {
      return null;
    } else {
      let tmp18 = channel;
      tmp18 = tmp18(selectedParticipant.user.id === tmp15 ? 10152 : 10154);
      let obj2 = { participant: selectedParticipant, channel };
      <tmp18 participant={selectedParticipant} channel={channel} />;
    }
  } else if (tmp5.USER === type) {
    let obj = { participant: selectedParticipant, channel };
    return jsx(channel(10155), { participant: selectedParticipant, channel });
  } else if (tmp5.HIDDEN_STREAM === type) {
    return null;
  } else if (tmp5.ACTIVITY === type) {
    const _Error = Error;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};
