// Module ID: 16963
// Function ID: 16964
// Name: VoicePanelNoVideoParticipantsCard
// Dependencies: [19, 17, 21, 4836, 576, 11754, 5037, 5901, 4832, 1115, 2]

// Module 16963 (VoicePanelNoVideoParticipantsCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const Pressable = react_native.Pressable;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: size, label: { marginBottom: 16, textAlign: "center" }, button: obj2, buttonText: obj3 };
size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: nativeDefault.radii.round };
obj3 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function VoicePanelNoVideoParticipantsCard() {
  let Text2;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj4;
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp = closure_7();
  const items = [channelId];
  const callback = react.useCallback(() => {
    const obj = ChannelRTCActionCreatorsDefault;
    const result = obj.toggleVoiceParticipantsHidden(channelId, false);
  }, items);
  let obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.label, variant: "text-md/semibold", color: "text-overlay-light", children: intl.string(channelId(1115).t["8eBJ73"]) };
  const tmp3 = NativeViewDefault;
  const Text = channelId(4832).Text;
  intl = channelId(1115).intl;
  items1 = [closure_5(Text, obj2), ];
  const obj3 = { style: tmp.button, onPress: callback, accessibilityRole: "button", accessibilityLabel: intl2.string(channelId(1115).t.kLQySL), children: closure_5(Text2, obj4) };
  intl2 = channelId(1115).intl;
  obj4 = { variant: "text-sm/semibold", style: tmp.buttonText, children: intl3.string(channelId(1115).t.kLQySL) };
  Text2 = channelId(4832).Text;
  intl3 = channelId(1115).intl;
  items1[1] = closure_5(Pressable, obj3);
  return closure_6(tmp3, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx");

export default memoResult;
