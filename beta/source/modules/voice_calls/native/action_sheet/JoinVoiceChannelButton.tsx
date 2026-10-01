// Module ID: 13327
// Function ID: 13328
// Name: JoinVoiceChannelButton
// Dependencies: [19, 17, 4469, 1074, 21, 4836, 9394, 504, 1115, 1876, 5723, 5281, 2]
// Exports: default

// Module 13327 (JoinVoiceChannelButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 9394 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import createStyles from "createStyles" /* 4836 */;
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
  const intl = channel(1115).intl;
  intl.string(channel(1115).t.eIi3Om);
  if (tmp3) {
    const intl3 = tmp4(1115).intl;
    intl3.string(tmp4(1115).t.rZfiNq);
  } else if (stateFromStores) {
    const intl2 = tmp4(1115).intl;
    intl2.string(tmp4(1115).t.TVBCKZ);
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
