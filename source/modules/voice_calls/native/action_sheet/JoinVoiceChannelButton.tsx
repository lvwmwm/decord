// Module ID: 12775
// Function ID: 99443
// Name: JoinVoiceChannelButton
// Dependencies: [31, 27, 3759, 653, 33, 4131, 10673, 566, 1212, 1820, 4945, 4544, 2]
// Exports: default

// Module 12775 (JoinVoiceChannelButton)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row" } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default function JoinVoiceChannelButton(channel) {
  channel = channel.channel;
  const tmp = callback();
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => !outer1_6.can(outer1_7.CONNECT, channel));
  const intl = channel(1212).intl;
  if (tmp2) {
    const intl3 = channel(1212).intl;
    let stringResult = intl3.string(channel(1212).t.rZfiNq);
    let flag = true;
  } else {
    stringResult = tmp4;
    flag = false;
    if (stateFromStores) {
      const intl2 = channel(1212).intl;
      stringResult = intl2.string(channel(1212).t.TVBCKZ);
      flag = true;
    }
  }
  const items1 = [channel.id];
  obj = { style: items2 };
  items2 = [tmp.container, channel.style];
  callback = React.useCallback(() => {
    const result = outer1_2(outer1_3[9]).dismissGlobalKeyboard();
    const obj = outer1_2(outer1_3[9]);
    const voiceChannel = outer1_1(outer1_3[10]).selectVoiceChannel(channel.id);
  }, items1);
  obj = { disabled: flag, text: stringResult, onPress: callback };
  obj.children = jsx(channel(4544).Button, { disabled: flag, text: stringResult, onPress: callback });
  return <View disabled={flag} text={stringResult} onPress={callback} />;
};
