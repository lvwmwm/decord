// Module ID: 10816
// Function ID: 10817
// Name: ChannelCallSingleController
// Dependencies: [19, 4208, 1218, 676, 4207, 21, 698, 4384, 589, 10817, 10819, 10820, 2]
// Exports: ChannelCallSingleController

// Module 10816 (ChannelCallSingleController)
import noop from "noop";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import { AnalyticEvents } from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("fetchFingerprint").fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

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
  selectedParticipant(589);
  [][0] = reset;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    if (null == tmp4) {
      return null;
    } else {
      let tmp18 = channel;
      tmp18 = tmp18(selectedParticipant.user.id === tmp15 ? 10817 : 10819);
      let obj = { participant: null, channel: null };
      obj[0] = selectedParticipant;
      obj[1] = channel;
      <tmp18 participant={null} channel={null} />;
      const tmp17 = jsx;
    }
  } else if (tmp5.USER === type) {
    obj = { participant: null, channel: null };
    obj[0] = selectedParticipant;
    obj[1] = channel;
    return jsx(channel(10820), { participant: null, channel: null });
  } else if (tmp5.HIDDEN_STREAM === type) {
    return null;
  } else if (tmp5.ACTIVITY === type) {
    const _Error = Error;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};
