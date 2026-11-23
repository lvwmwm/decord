// Module ID: 14860
// Function ID: 14861
// Name: VoiceEmptyState
// Dependencies: [19, 17, 1071, 21, 4913, 6407, 575, 1628, 1186, 1112, 14861, 14862, 2]
// Exports: default

// Module 14860 (VoiceEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import AssetRegistryDefault from "AssetRegistry" /* 14861 */;
import JoinVoiceChannelButtonDefault from "JoinVoiceChannelButton" /* 14862 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import TextStyles_mod from "TextStyles" /* 6407 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { justifyContent: "center" }, button: { paddingHorizontal: 12, paddingTop: 16 }, emptyTitle: obj2, emptyBody: obj3 };
obj2 = { textTransform: "none", lineHeight: 24 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3 = { lineHeight: 20, fontWeight: "600" };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx");

export default function VoiceEmptyState(channel) {
  let intl;
  let intl2;
  let items;
  let items1;
  channel = channel.channel;
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  const obj4 = { title: intl.string(intl3.t["/HABZo"]), body: intl2.string(intl3.t["5Jy2FY"]), lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault, titleStyle: null, bodyStyle: null, imageStyle: { marginBottom: 16, marginTop: 20 } };
  ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
  const ThemedEmptyState = native.ThemedEmptyState;
  intl = intl3.intl;
  intl2 = intl3.intl;
  ({ emptyTitle: obj3.titleStyle, emptyBody: obj3.bodyStyle } = tmp);
  items1 = [React3(ThemedEmptyState, obj4), ];
  const obj7 = { channel, style: tmp.button };
  items1[1] = React3(JoinVoiceChannelButtonDefault, obj7);
  return hasOwnProperty(View, obj);
};
