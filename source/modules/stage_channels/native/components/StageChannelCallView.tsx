// Module ID: 10758
// Function ID: 83608
// Name: StageChannelCallBackground
// Dependencies: []
// Exports: default

// Module 10758 (StageChannelCallBackground)
function StageChannelCallBackground(arg0) {
  let channelId;
  let children;
  ({ children, channelId } = arg0);
  let obj = arg1(dependencyMap[5]);
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, arg1(dependencyMap[2]).FOCUSED_CONTROLS_HEADER_HEIGHT + importDefault(dependencyMap[4])().top);
  obj = {};
  const tmp = callback3();
  const items = [tmp.container, stageActionBarAnimation];
  obj.children = callback(importDefault(dependencyMap[7]).View, { style: items, children });
  return callback(importDefault(dependencyMap[6]), obj);
}
importAll(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { surrogates: false, scales: false } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = {};
  const items = [callback(importDefault(dependencyMap[8]), {}), ];
  obj = { channelId: channel.id, children: callback(importDefault(dependencyMap[9]), { channel }) };
  items[1] = callback(StageChannelCallBackground, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
