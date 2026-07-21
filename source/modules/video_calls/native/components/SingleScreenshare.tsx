// Module ID: 10742
// Function ID: 83467
// Name: SingleScreenshare
// Dependencies: []
// Exports: default

// Module 10742 (SingleScreenshare)
importAll(dependencyMap[0]);
({ resetFocus: closure_2, toggleFocus: closure_3 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BLACK };
obj.stageStreamContainer = obj;
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  const importDefault = channel;
  importDefault(dependencyMap[5])(() => {
    callback();
  });
  const obj = {
    participant: channel.participant,
    onSingleTap() {
      callback2();
    },
    onDoubleTap() {
      callback();
      const participant = channel(closure_1[7]).selectParticipant(channel.id, null);
    }
  };
  const tmp = callback();
  const tmp3 = jsx;
  let stageStreamContainer;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  obj.containerStyle = stageStreamContainer;
  return tmp3(importDefault(dependencyMap[6]), obj);
};
