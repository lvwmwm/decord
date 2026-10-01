// Module ID: 9379
// Function ID: 9380
// Name: RequestToSpeakParticipantList
// Dependencies: [19, 17, 1074, 21, 4836, 576, 6583, 5435, 7624, 9380, 1177, 4832, 9381, 1115, 9382, 4983, 6413, 5743, 7846, 5899, 9383, 6493, 2]
// Exports: default

// Module 9379 (RequestToSpeakParticipantList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7846 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function RequestToSpeakParticipant(participant) {
  let Avatar;
  let intl;
  let intl2;
  let items;
  let items1;
  let items3;
  let items4;
  let items5;
  let obj5;
  let onDenyRequest;
  let onGrantRequest;
  let tmp6Result;
  participant = participant.participant;
  const channel = participant.channel;
  let analyticsLocations;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp = closure_6();
  analyticsLocations = channel(analyticsLocations[6])().analyticsLocations;
  let obj = { style: tmp.participantItemContainer, children: items4 };
  const obj2 = {
    onPress() {
      const obj = { userId: participant.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    },
    accessibilityLabel: items.join(", "),
    accessibilityRole: "button",
    style: tmp.touchableContainer,
    children: items1
  };
  items = [participant.user.username, ];
  const PressableOpacity = participant(analyticsLocations[7]).PressableOpacity;
  const obj3 = participant(analyticsLocations[9]);
  items[1] = obj3.participantMemberInfo(participant);
  const obj4 = { style: tmp.participantAvatarContainer, children: closure_4(Avatar, obj5) };
  obj5 = { user: participant.user, guildId: channel.guild_id, size: participant(analyticsLocations[10]).AvatarSizes.NORMAL };
  Avatar = participant(analyticsLocations[10]).Avatar;
  items1 = [closure_4(View, obj4), ];
  const items2 = [tmp.participantNameplateText, ];
  const member = participant.member;
  let colorString;
  const obj6 = { style: tmp.participantNameplateContainer, children: items3 };
  const LegacyText = participant(analyticsLocations[10]).LegacyText;
  if (member != null) {
    colorString = member.colorString;
  }
  if (colorString == null) {
    colorString = tmp.participantNameplateText.color;
  }
  const obj7 = { style: items2, numberOfLines: 1, children: participant.user.username };
  items2[1] = { color: colorString };
  items3 = [closure_4(LegacyText, obj7), ];
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: tmp6Result.participantMemberInfo(participant) };
  const Text = tmp6(tmp3[11]).Text;
  tmp6Result = participant(analyticsLocations[9]);
  items3[1] = closure_4(Text, obj8);
  items1[1] = closure_5(View, obj6);
  items4 = [closure_5(PressableOpacity, obj2), ];
  const obj9 = { style: tmp.participantActionContainer, children: items5 };
  const obj10 = { accessibilityLabel: intl.string(participant(analyticsLocations[13]).t.f0T7hI), containerStyle: tmp.participantActionIcon, source: channel(analyticsLocations[14]), onPress: onGrantRequest, disabled: participant.rtsState === participant(analyticsLocations[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK };
  const tmp2Result = channel(analyticsLocations[12]);
  intl = tmp6(tmp3[13]).intl;
  items5 = [closure_4(tmp2Result, obj10), ];
  const obj11 = { accessibilityLabel: intl2.string(participant(analyticsLocations[13]).t.moABMy), containerStyle: tmp.participantActionIcon, source: channel(analyticsLocations[16]), onPress: onDenyRequest };
  const tmp2Result2 = channel(analyticsLocations[12]);
  intl2 = tmp6(tmp3[13]).intl;
  items5[1] = closure_4(tmp2Result2, obj11);
  items4[1] = closure_5(View, obj9);
  return closure_5(View, obj);
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingVertical: 4, flexDirection: "column", minHeight: 288, flex: 1 }, listContainer: { paddingVertical: 4, flexDirection: "column", flex: 1 }, participantItemContainer: { padding: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, touchableContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, participantAvatarContainer: { paddingLeft: 4 }, participantNameplateContainer: { paddingHorizontal: 16, flex: 1 }, participantNameplateText: obj2, participantActionContainer: { flexDirection: "row", paddingRight: 4 }, participantActionIcon: obj3, emptyContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, emptyParticipant: { flex: 1, height: 64 }, emptyTitle: { textAlign: "center", marginTop: 16, marginBottom: 8 }, emptyBody: { textAlign: "center" } };
obj2 = { fontSize: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD, marginTop: 0, marginBottom: 0, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx");

export default function RequestToSpeakParticipantList(channel) {
  let emptyParticipant;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj3;
  let tmp6;
  channel = channel.channel;
  let sortedRequestToSpeakParticipants;
  const height = channel.height;
  const tmp = closure_6();
  importDefault = tmp;
  let obj = channel(sortedRequestToSpeakParticipants[17]);
  sortedRequestToSpeakParticipants = obj.useSortedRequestToSpeakParticipants(channel.id);
  if (0 === sortedRequestToSpeakParticipants.length) {
    let obj2 = { style: tmp.container, children: closure_5(View, obj3) };
    obj3 = { style: tmp.emptyContainer, children: items };
    const obj4 = { source: require("AssetRegistry") };
    const tmp11 = require("FastImage");
    items = [closure_4(tmp11, obj4), , ];
    const obj5 = { style: tmp.emptyTitle, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(channel(sortedRequestToSpeakParticipants[13]).t["7R24mX"]) };
    const Text = tmp2(tmp3[11]).Text;
    intl = tmp2(tmp3[13]).intl;
    items[1] = closure_4(Text, obj5);
    const obj6 = { style: tmp.emptyBody, variant: "text-sm/medium", color: "text-default", children: intl2.string(channel(sortedRequestToSpeakParticipants[13]).t.Rpr2s0) };
    const Text2 = tmp2(tmp3[11]).Text;
    intl2 = tmp2(tmp3[13]).intl;
    items[2] = closure_4(Text2, obj6);
    tmp6 = closure_4(View, obj2);
  } else {
    let tmp5 = importDefault;
    const obj7 = {
      style: items1,
      itemSize: 64,
      renderItem(arg0, arg1) {
          let closure_0;
          let tmp5;
          channel = tmp;
          if (null == sortedRequestToSpeakParticipants[arg1]) {
            const obj2 = { style: emptyParticipant.emptyParticipant };
            tmp5 = closure_1_4(View, obj2);
          } else {
            let obj = {
              participant: sortedRequestToSpeakParticipants[arg1],
              channel,
              onGrantRequest() {
                  const obj = StageChannelActionCreators;
                  obj.setUserSuppress(channel, closure_0.user.id, false);
                },
              onDenyRequest() {
                  const obj = StageChannelActionCreators;
                  obj.setUserSuppress(channel, closure_0.user.id, true);
                }
            };
            tmp5 = closure_1_4(RequestToSpeakParticipant, obj, tmp.user.id);
          }
          return tmp5;
        },
      keyboardShouldPersistTaps: "always",
      sections: items2
    };
    items1 = [tmp.listContainer, ];
    const obj8 = { height };
    items1[1] = obj8;
    items2 = [sortedRequestToSpeakParticipants.length + 1];
    tmp6 = closure_4(require("FastList"), obj7);
  }
  return tmp6;
};
