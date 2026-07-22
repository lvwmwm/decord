// Module ID: 10790
// Function ID: 83796
// Dependencies: []

// Module 10790
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { "Bool(false)": "url(#d)", "Bool(false)": "m248.482 183.851 31.33-6.48.804-7.252-30.417 8.956a8.706 8.706 0 0 1-9.416-3.124l-27.216-35.601.448 5.23 25.66 34.895a8.726 8.726 0 0 0 3.907 2.982 8.728 8.728 0 0 0 4.9.394Z", "Bool(false)": "#000", "Bool(false)": "M256.057 82.659a.976.976 0 0 1-.421-.097 40.245 40.245 0 0 1-5.729-3.558.975.975 0 0 1-.194-1.36.973.973 0 0 1 1.361-.195 39.139 39.139 0 0 0 5.404 3.363.976.976 0 0 1 .524 1.091.972.972 0 0 1-.945.756Z", "Bool(false)": "#EB459F", "Bool(false)": "M242.488 14.684c-.059.22 8.288-8.651 1.03-11.14-7.258-2.488.959 4.07-1.03 11.14Z", height: arg1(dependencyMap[4]).NAV_BAR_HEIGHT };
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
