// Module ID: 13996
// Function ID: 13997
// Name: GameInviteVoiceCount
// Dependencies: [19, 17, 5923, 21, 5170, 504, 8765, 575, 5781, 2]
// Exports: default

// Module 13996 (GameInviteVoiceCount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5923 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 } });
const result = size.fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default function GameInviteVoiceCount(channel) {
  let items2;
  channel = channel.channel;
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const tmp = closure_7();
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel).length, items1);
  let tmp5 = null;
  if (0 !== stateFromStores) {
    const obj2 = { style: tmp.container, children: items2 };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    const VoiceNormalIcon = tmp2(8765).VoiceNormalIcon;
    items2 = [closure_5(VoiceNormalIcon, obj3), ];
    const obj4 = { variant: "body-sm/medium", color: "text-feedback-positive", children: stateFromStores };
    items2[1] = closure_5(channel(5781).Text, obj4);
    tmp5 = closure_6(View, obj2);
  }
  return tmp5;
};
