// Module ID: 15191
// Function ID: 15192
// Name: JoinVoiceChannelButton
// Dependencies: [19, 17, 4946, 1072, 21, 5014, 11908, 504, 1113, 1888, 6706, 5634, 2]
// Exports: default

// Module 15191 (JoinVoiceChannelButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1888 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6706 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 11908 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const Permissions = Constants.Permissions;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ container: { flexDirection: "row" } });
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default function JoinVoiceChannelButton(channel) {
  channel = channel.channel;
  const style = channel.style;
  const tmp = closure_9();
  const tmp3 = useIsVoiceChannelFullDefault(channel);
  let obj = channel(504);
  const items = [PermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () => !PermissionStore.can(Permissions.CONNECT, channel));
  const intl = channel(1113).intl;
  intl.string(channel(1113).t.eIi3Om);
  if (tmp3) {
    const intl3 = tmp4(1113).intl;
    intl3.string(tmp4(1113).t.rZfiNq);
  } else if (stateFromStores) {
    const intl2 = tmp4(1113).intl;
    intl2.string(tmp4(1113).t.TVBCKZ);
  }
  const items1 = [channel.id];
  const items2 = [tmp.container, style];
  const callback = react.useCallback(() => {
    const obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj2.selectVoiceChannel(channel.id);
  }, items1);
  return <View style={items2}>{null}</View>;
};
