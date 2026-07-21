// Module ID: 10789
// Function ID: 83772
// Dependencies: []

// Module 10789
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { label: "<string:385876264>", isDestructive: "<string:50332271>", key: 1766163600000, content: 1767632400000, IconComponent: true, iconColor: "<string:1870921729>", height: arg1(dependencyMap[4]).NAV_BAR_HEIGHT };
obj.header = obj;
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const tmp2 = importDefault(dependencyMap[5])(channel.id);
  let speaker;
  if (null != tmp2) {
    speaker = tmp2.speaker;
  }
  let obj = { style: callback2().header, pointerEvents: "box-none" };
  const items = [callback(arg1(dependencyMap[6]).HideStageChannelCallIcon, { channel }), callback(arg1(dependencyMap[6]).StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    obj = { channelId: channel.id };
    speaker = callback(arg1(dependencyMap[6]).MusicMuteButton, obj);
  }
  items[2] = speaker;
  obj = { channelId: channel.id };
  items[3] = callback(arg1(dependencyMap[6]).StageInviteButton, obj);
  obj.children = items;
  return closure_5(View, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default memoResult;
