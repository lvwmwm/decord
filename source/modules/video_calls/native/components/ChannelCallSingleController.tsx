// Module ID: 10752
// Function ID: 83536
// Name: ChannelCallSingleController
// Dependencies: [31, 4149, 1194, 653, 4148, 33, 675, 4324, 566, 10753, 10755, 10756, 2]
// Exports: ChannelCallSingleController

// Module 10752 (ChannelCallSingleController)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = function ChannelCallSingleController(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const channel = selectedParticipant.channel;
  const items = [channel.id];
  const effect = React.useEffect(() => {
    let obj = channel(outer1_2[6]);
    obj = { video_layout: "focus" };
    const merged = Object.assign(selectedParticipant(outer1_2[7]).collectVoiceAnalyticsMetadata(channel.id));
    obj.track(outer1_6.VIDEO_LAYOUT_TOGGLED, obj);
  }, items);
  selectedParticipant(566);
  [][0] = _isNativeReflectConstruct;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    if (null == tmp3) {
      return null;
    } else {
      let tmp19 = channel;
      if (selectedParticipant.user.id === tmp16) {
        let tmp21 = 10753;
      } else {
        tmp21 = 10755;
      }
      tmp19 = tmp19(tmp21);
      let obj = { participant: selectedParticipant, channel };
      <tmp19 participant={selectedParticipant} channel={channel} />;
      const tmp18 = jsx;
    }
  } else if (ParticipantTypes.USER === type) {
    obj = { participant: selectedParticipant, channel };
    return jsx(channel(10756), { participant: selectedParticipant, channel });
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};
