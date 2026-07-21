// Module ID: 10741
// Function ID: 83474
// Name: ChannelCallSingleController
// Dependencies: []
// Exports: ChannelCallSingleController

// Module 10741 (ChannelCallSingleController)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const ParticipantTypes = arg1(dependencyMap[4]).ParticipantTypes;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallSingleController.tsx");

export const ChannelCallSingleController = function ChannelCallSingleController(selectedParticipant) {
  selectedParticipant = selectedParticipant.selectedParticipant;
  const arg1 = selectedParticipant;
  const channel = selectedParticipant.channel;
  const importDefault = channel;
  const items = [channel.id];
  const effect = React.useEffect(() => {
    let obj = channel(closure_2[6]);
    obj = { video_layout: "focus" };
    const merged = Object.assign(selectedParticipant(closure_2[7]).collectVoiceAnalyticsMetadata(channel.id));
    obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj);
  }, items);
  arg1(dependencyMap[8]);
  [][0] = closure_4;
  const type = selectedParticipant.type;
  if (ParticipantTypes.STREAM === type) {
    if (null == tmp3) {
      return null;
    } else {
      let tmp19 = importDefault;
      if (selectedParticipant.user.id === tmp16) {
        let tmp21 = dependencyMap[9];
      } else {
        tmp21 = dependencyMap[10];
      }
      tmp19 = tmp19(tmp21);
      let obj = { participant: selectedParticipant, channel };
      <tmp19 {...obj} />;
      const tmp18 = jsx;
    }
  } else if (ParticipantTypes.USER === type) {
    obj = { participant: selectedParticipant, channel };
    return jsx(importDefault(dependencyMap[11]), obj);
  } else if (ParticipantTypes.HIDDEN_STREAM === type) {
    return null;
  } else if (ParticipantTypes.ACTIVITY === type) {
    const _Error = Error;
    const error = new Error("Activities are not supported on old voice UI");
    throw error;
  }
};
