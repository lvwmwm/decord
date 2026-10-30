// Module ID: 13739
// Function ID: 13740
// Name: GameInviteVoiceCount
// Dependencies: [19, 17, 5762, 21, 5009, 504, 8665, 575, 5619, 2]
// Exports: default

// Module 13739 (GameInviteVoiceCount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5762 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
    const VoiceNormalIcon = tmp2(8665).VoiceNormalIcon;
    items2 = [closure_5(VoiceNormalIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
    items2[1] = closure_5(channel(5619).Text, obj4);
    tmp5 = closure_6(View, obj2);
  }
  return tmp5;
};
