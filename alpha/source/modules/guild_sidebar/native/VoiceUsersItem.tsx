// Module ID: 18472
// Function ID: 18473
// Name: VoiceUsersItem
// Dependencies: [19, 17, 21, 5143, 2]
// Exports: default

// Module 18472 (VoiceUsersItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_2 = createStyles.createStyles({ voiceStates: { paddingRight: 8 }, voiceStatesCollapsed: { paddingRight: 0, flexDirection: "row", flexWrap: "wrap", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsersItem.tsx");

export default function VoiceUsersItem(collapsed) {
  let voiceStatesCollapsed = collapsed.collapsed;
  const children = collapsed.children;
  const tmp = closure_2();
  let voiceStates = !voiceStatesCollapsed;
  const tmp2 = jsx;
  const tmp3 = View;
  if (!voiceStatesCollapsed) {
    voiceStates = tmp.voiceStates;
  }
  const style = [voiceStates, ];
  if (voiceStatesCollapsed) {
    voiceStatesCollapsed = tmp.voiceStatesCollapsed;
  }
  style[1] = voiceStatesCollapsed;
  return tmp2(tmp3, { style, children });
};
