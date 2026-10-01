// Module ID: 9534
// Function ID: 9535
// Name: ActiveSpeakerTooltip
// Dependencies: [32, 19, 17, 4852, 9505, 1074, 21, 4836, 576, 504, 5744, 5435, 9514, 4832, 1115, 2]

// Module 9534 (ActiveSpeakerTooltip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import UserSummaryItemDefault from "UserSummaryItem" /* 9514 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import StageChannelListStore from "StageChannelListStore" /* 9505 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let channel;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ useActiveSpeakerPillScrollHandler: metroRequire, useActiveSpeakerPillState: metroImportDefault } = StageChannelListStore);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }, participantItemContainer: obj2, participantAvatarContainer: { alignItems: "center", justifyContent: "center" }, participantAvatarText: obj3, participantNameplateContainer: { paddingHorizontal: 3, flexDirection: "row", alignItems: "center", justifyContent: "center" }, participantNameplateSpeakingText: obj4 };
obj2 = { padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj4 = { lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles(obj);
const memoResult = react.memo((channel) => {
  let Text;
  let intl;
  let items2;
  let obj3;
  let obj5;
  let obj7;
  let obj8;
  let tmp11;
  channel = channel.channel;
  const tmp = closure_10();
  let items = [ChannelRTCStore];
  const items1 = [channel.id];
  const obj = channel(504);
  const first = _slicedToArray(obj.useStateFromStores(items, () => {
    const speakingParticipants = ChannelRTCStore.getSpeakingParticipants(channel.id);
    const items = [speakingParticipants.map((user) => user.user), ChannelRTCStore.getParticipantsVersion(channel.id)];
    return items;
  }, items1, channel(5744).isVersionEqual), 1)[0];
  const first1 = _slicedToArray(closure_7(), 1)[0];
  let tmp6 = null;
  if (0 !== first.length) {
    tmp6 = null;
    if (first1) {
      const obj2 = { accessibilityRole: "button", style: tmp.container, onPress: tmp5, children: closure_9(View, obj3) };
      obj3 = { style: tmp.participantItemContainer, children: items2 };
      const obj4 = { style: tmp.participantAvatarContainer, children: closure_8(tmp11, obj5) };
      const PressableOpacity = tmp2(5435).PressableOpacity;
      obj5 = { namesStyle: tmp.participantAvatarText, users: first, withNames: true, channelId: channel.id, guildId: channel.getGuildId() };
      tmp11 = UserSummaryItemDefault;
      items2 = [closure_8(View, obj4), ];
      const obj6 = { style: tmp.participantNameplateContainer, children: closure_8(Text, obj7) };
      obj7 = { style: tmp.participantNameplateSpeakingText, variant: "text-xs/medium", color: "text-default", children: intl.format(channel(1115).t["+dia6l"], obj8) };
      Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      obj8 = { count: first.length };
      items2[1] = closure_8(View, obj6);
      tmp6 = closure_8(PressableOpacity, obj2);
    }
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default memoResult;
