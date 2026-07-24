// Module ID: 10693
// Function ID: 83394
// Name: RequestToSpeakParticipant
// Dependencies: [31, 27, 653, 33, 4130, 689, 5462, 4660, 8537, 10694, 1273, 4126, 10695, 1212, 10696, 4314, 7696, 4963, 7562, 5085, 10697, 7677, 2]
// Exports: default

// Module 10693 (RequestToSpeakParticipant)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function RequestToSpeakParticipant(participant) {
  let onDenyRequest;
  let onGrantRequest;
  participant = participant.participant;
  const channel = participant.channel;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp = _createForOfIteratorHelperLoose();
  analyticsLocations = channel(analyticsLocations[6])().analyticsLocations;
  let obj = { style: tmp.participantItemContainer };
  obj = {
    onPress() {
      channel(analyticsLocations[8])({ userId: participant.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  };
  const items = [participant.user.username, ];
  let obj2 = participant(analyticsLocations[9]);
  items[1] = obj2.participantMemberInfo(participant);
  obj.accessibilityLabel = items.join(", ");
  obj.accessibilityRole = "button";
  obj.style = tmp.touchableContainer;
  obj = { style: tmp.participantAvatarContainer };
  const obj1 = { user: participant.user, guildId: channel.guild_id, size: participant(analyticsLocations[10]).AvatarSizes.NORMAL };
  obj.children = callback(participant(analyticsLocations[10]).Avatar, obj1);
  const items1 = [callback(View, obj), ];
  obj2 = { style: tmp.participantNameplateContainer };
  const obj3 = {};
  const items2 = [tmp.participantNameplateText, ];
  const obj4 = {};
  const member = participant.member;
  let colorString;
  if (null != member) {
    colorString = member.colorString;
  }
  if (null == colorString) {
    colorString = tmp.participantNameplateText.color;
  }
  obj4.color = colorString;
  items2[1] = obj4;
  obj3.style = items2;
  obj3.numberOfLines = 1;
  obj3.children = participant.user.username;
  const items3 = [callback(participant(analyticsLocations[10]).LegacyText, obj3), ];
  const obj5 = { variant: "text-xs/medium", color: "text-default", children: participant(analyticsLocations[9]).participantMemberInfo(participant) };
  items3[1] = callback(participant(analyticsLocations[11]).Text, obj5);
  obj2.children = items3;
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  const items4 = [callback2(participant(analyticsLocations[7]).PressableOpacity, obj), ];
  const obj6 = { style: tmp.participantActionContainer };
  const obj7 = {};
  const obj10 = participant(analyticsLocations[9]);
  const tmp2 = callback2;
  const tmp3 = View;
  const tmp4 = callback2;
  const tmp5 = callback2;
  const tmp6 = View;
  const tmp7 = callback;
  const intl = participant(analyticsLocations[13]).intl;
  obj7.accessibilityLabel = intl.string(participant(analyticsLocations[13]).t.f0T7hI);
  obj7.containerStyle = tmp.participantActionIcon;
  obj7.source = channel(analyticsLocations[14]);
  obj7.onPress = onGrantRequest;
  obj7.disabled = participant.rtsState === participant(analyticsLocations[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const items5 = [callback(channel(analyticsLocations[12]), obj7), ];
  const obj8 = {};
  const tmp9 = channel(analyticsLocations[12]);
  const intl2 = participant(analyticsLocations[13]).intl;
  obj8.accessibilityLabel = intl2.string(participant(analyticsLocations[13]).t.moABMy);
  obj8.containerStyle = tmp.participantActionIcon;
  obj8.source = channel(analyticsLocations[16]);
  obj8.onPress = onDenyRequest;
  items5[1] = callback(channel(analyticsLocations[12]), obj8);
  obj6.children = items5;
  items4[1] = callback2(View, obj6);
  obj.children = items4;
  return tmp2(tmp3, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingVertical: 4, flexDirection: "column", minHeight: 288, flex: 1 }, listContainer: { paddingVertical: 4, flexDirection: "column", flex: 1 }, participantItemContainer: { padding: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, touchableContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, participantAvatarContainer: { paddingLeft: 4 }, participantNameplateContainer: { paddingHorizontal: 16, flex: 1 } };
_createForOfIteratorHelperLoose = { fontSize: 16, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, marginTop: 0, marginBottom: 0, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.participantNameplateText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.participantActionContainer = { flexDirection: "row", paddingRight: 4 };
_createForOfIteratorHelperLoose.participantActionIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.emptyContainer = { flex: 1, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.emptyParticipant = { flex: 1, height: 64 };
_createForOfIteratorHelperLoose.emptyTitle = { textAlign: "center", marginTop: 16, marginBottom: 8 };
_createForOfIteratorHelperLoose.emptyBody = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const result = require("ME").fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx");

export default function RequestToSpeakParticipantList(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let obj = channel(sortedRequestToSpeakParticipants[17]);
  sortedRequestToSpeakParticipants = obj.useSortedRequestToSpeakParticipants(channel.id);
  if (0 === sortedRequestToSpeakParticipants.length) {
    obj = { style: tmp.container };
    obj = { style: tmp.emptyContainer };
    const obj1 = { source: importDefault(sortedRequestToSpeakParticipants[20]) };
    const items = [callback(importDefault(sortedRequestToSpeakParticipants[19]), obj1), , ];
    const obj2 = { style: tmp.emptyTitle, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
    const intl = channel(sortedRequestToSpeakParticipants[13]).intl;
    obj2.children = intl.string(channel(sortedRequestToSpeakParticipants[13]).t["7R24mX"]);
    items[1] = callback(channel(sortedRequestToSpeakParticipants[11]).Text, obj2);
    const obj3 = { style: tmp.emptyBody, variant: "text-sm/medium", color: "text-default" };
    const intl2 = channel(sortedRequestToSpeakParticipants[13]).intl;
    obj3.children = intl2.string(channel(sortedRequestToSpeakParticipants[13]).t.Rpr2s0);
    items[2] = callback(channel(sortedRequestToSpeakParticipants[11]).Text, obj3);
    obj.children = items;
    obj.children = callback2(View, obj);
    let tmp5 = callback(View, obj);
    const tmp13 = importDefault(sortedRequestToSpeakParticipants[19]);
  } else {
    const obj4 = {};
    const items1 = [tmp.listContainer, ];
    const obj5 = { height: channel.height };
    items1[1] = obj5;
    obj4.style = items1;
    obj4.itemSize = 64;
    obj4.renderItem = function renderItem(arg0, arg1) {
      const channel = tmp;
      if (null == sortedRequestToSpeakParticipants[arg1]) {
        let obj = { style: tmp.emptyParticipant };
        let tmp5 = outer1_4(outer1_3, obj);
      } else {
        obj = {
          participant: tmp,
          channel,
          onGrantRequest() {
              channel(sortedRequestToSpeakParticipants[18]).setUserSuppress(tmp, tmp.user.id, false);
            },
          onDenyRequest() {
              channel(sortedRequestToSpeakParticipants[18]).setUserSuppress(tmp, tmp.user.id, true);
            }
        };
        tmp5 = outer1_4(outer1_7, obj, tmp.user.id);
      }
      return tmp5;
    };
    obj4.keyboardShouldPersistTaps = "always";
    const items2 = [sortedRequestToSpeakParticipants.length + 1];
    obj4.sections = items2;
    tmp5 = callback(importDefault(sortedRequestToSpeakParticipants[21]), obj4);
  }
  return tmp5;
};
