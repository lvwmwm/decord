// Module ID: 10665
// Function ID: 83149
// Name: JoinStageView
// Dependencies: []
// Exports: default

// Module 10665 (JoinStageView)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = arg1(dependencyMap[2]);
  const stageParticipants = obj.useStageParticipants(channel.id, arg1(dependencyMap[3]).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(closure_2[3]).StageChannelParticipantTypes.VOICE);
  obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.title = intl.string(arg1(dependencyMap[5]).t.WZOeQv);
  const tmp2 = importDefault(dependencyMap[4]);
  obj.body = arg1(dependencyMap[6]).getParticipantNamesText(channel, found);
  obj.children = jsx(arg1(dependencyMap[7]).JoinStagePrompt, { channel });
  return <tmp2 {...obj} />;
};
