// Module ID: 12591
// Function ID: 96784
// Name: JoinVoiceChannelButton
// Dependencies: []
// Exports: default

// Module 12591 (JoinVoiceChannelButton)
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: { flexDirection: "row" } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default function JoinVoiceChannelButton(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => !closure_6.can(constants.CONNECT, channel));
  const intl = arg1(dependencyMap[8]).intl;
  if (tmp2) {
    const intl3 = arg1(dependencyMap[8]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[8]).t.rZfiNq);
    let flag = true;
  } else {
    stringResult = tmp4;
    flag = false;
    if (stateFromStores) {
      const intl2 = arg1(dependencyMap[8]).intl;
      stringResult = intl2.string(arg1(dependencyMap[8]).t.TVBCKZ);
      flag = true;
    }
  }
  const items1 = [channel.id];
  obj = { style: items2 };
  const items2 = [tmp.container, channel.style];
  const callback = React.useCallback(() => {
    const result = callback2(closure_3[9]).dismissGlobalKeyboard();
    const obj = callback2(closure_3[9]);
    const voiceChannel = callback(closure_3[10]).selectVoiceChannel(channel.id);
  }, items1);
  obj = { disabled: flag, text: stringResult, onPress: callback };
  obj.children = jsx(arg1(dependencyMap[11]).Button, obj);
  return <View {...obj} />;
};
