// Module ID: 10653
// Function ID: 83128
// Name: RequestToSpeakParticipant
// Dependencies: [31, 33, 689, 3831, 10665, 2, 31, 33, 689, 3831, 10667, 2, 1838, 3756, 4142, 482, 566, 4308, 2, 31, 33, 4961, 4955]
// Exports: default

// Module 10653 (RequestToSpeakParticipant)
import "module_31";
import { View } from "module_33";
import BaseIconImage from "BaseIconImage";
import module_10665 from "module_10665";
import sortKey from "sortKey";

function RequestToSpeakParticipant(participant) {
  let onDenyRequest;
  let onGrantRequest;
  participant = participant.participant;
  const arg1 = participant;
  const channel = participant.channel;
  const importDefault = channel;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp = module_10665();
  const dependencyMap = importDefault(dependencyMap[6])().analyticsLocations;
  let obj = { style: tmp.participantItemContainer };
  obj = {
    onPress() {
      channel(analyticsLocations[8])({ userId: participant.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    }
  };
  const items = [participant.user.username, ];
  let obj2 = arg1(dependencyMap[9]);
  items[1] = obj2.participantMemberInfo(participant);
  obj.accessibilityLabel = items.join(", ");
  obj.accessibilityRole = "button";
  obj.style = tmp.touchableContainer;
  obj = { style: tmp.participantAvatarContainer };
  const obj1 = { user: participant.user, guildId: channel.guild_id, size: arg1(dependencyMap[10]).AvatarSizes.NORMAL };
  obj.children = callback(arg1(dependencyMap[10]).Avatar, obj1);
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
  const items3 = [callback(arg1(dependencyMap[10]).LegacyText, obj3), ];
  const obj5 = { children: arg1(dependencyMap[9]).participantMemberInfo(participant) };
  items3[1] = callback(arg1(dependencyMap[11]).Text, obj5);
  obj2.children = items3;
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  const items4 = [callback2(arg1(dependencyMap[7]).PressableOpacity, obj), ];
  const obj6 = { style: tmp.participantActionContainer };
  const obj7 = {};
  const obj10 = arg1(dependencyMap[9]);
  const tmp2 = callback2;
  const tmp3 = View;
  const tmp4 = callback2;
  const tmp5 = callback2;
  const tmp6 = View;
  const tmp7 = callback;
  const intl = arg1(dependencyMap[13]).intl;
  obj7.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.f0T7hI);
  obj7.containerStyle = tmp.participantActionIcon;
  obj7.source = importDefault(dependencyMap[14]);
  obj7.onPress = onGrantRequest;
  obj7.disabled = participant.rtsState === arg1(dependencyMap[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const items5 = [callback(importDefault(dependencyMap[12]), obj7), ];
  const obj8 = {};
  const tmp9 = importDefault(dependencyMap[12]);
  const intl2 = arg1(dependencyMap[13]).intl;
  obj8.accessibilityLabel = intl2.string(arg1(dependencyMap[13]).t.moABMy);
  obj8.containerStyle = tmp.participantActionIcon;
  obj8.source = importDefault(dependencyMap[16]);
  obj8.onPress = onDenyRequest;
  items5[1] = callback(importDefault(dependencyMap[12]), obj8);
  obj6.children = items5;
  items4[1] = callback2(View, obj6);
  obj.children = items4;
  return tmp2(tmp3, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = BaseIconImage);
module_10665 = { container: {}, listContainer: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": 4 }, participantItemContainer: { 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005656728111325089, 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000004665176389013497, 9223372036854775807: 141317.775, 0: "<string:285213930>" }, touchableContainer: {}, participantAvatarContainer: { paddingLeft: 4 }, participantNameplateContainer: { -926844321: "Group 11", 1381477602: 2 } };
module_10665 = { "Bool(true)": "<string:4131472781>", "Bool(true)": "<string:1895825675>", "Bool(true)": "%Int32ArrayPrototype%", "Bool(true)": "DownloadBarIllocon", fontFamily: require("_createForOfIteratorHelperLoose").Fonts.PRIMARY_SEMIBOLD, color: require("result2").colors.MOBILE_TEXT_HEADING_PRIMARY };
module_10665.participantNameplateText = module_10665;
module_10665.participantActionContainer = {};
module_10665.participantActionIcon = { backgroundColor: require("result2").colors.BACKGROUND_BASE_LOW };
module_10665.emptyContainer = {};
module_10665.emptyParticipant = {};
module_10665.emptyTitle = { <string:4221627596>: null, <string:1359674961>: 8, <string:4183987831>: "100%" };
module_10665.emptyBody = { textAlign: "center" };
module_10665 = module_10665.createStyles(module_10665);
const result = sortKey.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx");

export default function RequestToSpeakParticipantList(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = module_10665();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[17]);
  const sortedRequestToSpeakParticipants = obj.useSortedRequestToSpeakParticipants(channel.id);
  const dependencyMap = sortedRequestToSpeakParticipants;
  if (0 === sortedRequestToSpeakParticipants.length) {
    obj = { style: tmp.container };
    obj = { style: tmp.emptyContainer };
    const obj1 = { source: importDefault(dependencyMap[20]) };
    const items = [callback(importDefault(dependencyMap[19]), obj1), , ];
    const obj2 = { 1501064855: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008935732565137, -1267889981: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043458473819206, -1145697943: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001126549808859, -1266241916: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005965658253026592, style: tmp.emptyTitle };
    const intl = arg1(dependencyMap[13]).intl;
    obj2.children = intl.string(arg1(dependencyMap[13]).t.7R24mX);
    items[1] = callback(arg1(dependencyMap[11]).Text, obj2);
    const obj3 = { style: tmp.emptyBody };
    const intl2 = arg1(dependencyMap[13]).intl;
    obj3.children = intl2.string(arg1(dependencyMap[13]).t.Rpr2s0);
    items[2] = callback(arg1(dependencyMap[11]).Text, obj3);
    obj.children = items;
    obj.children = callback2(View, obj);
    let tmp5 = callback(View, obj);
    const tmp13 = importDefault(dependencyMap[19]);
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
        let tmp5 = callback(closure_3, obj);
      } else {
        obj = {
          participant: tmp,
          channel,
          onGrantRequest() {
              tmp(closure_2[18]).setUserSuppress(tmp, tmp.user.id, false);
            },
          onDenyRequest() {
              tmp(closure_2[18]).setUserSuppress(tmp, tmp.user.id, true);
            }
        };
        tmp5 = callback(closure_7, obj, tmp.user.id);
      }
      return tmp5;
    };
    obj4.keyboardShouldPersistTaps = "always";
    const items2 = [sortedRequestToSpeakParticipants.length + 1];
    obj4.sections = items2;
    tmp5 = callback(importDefault(dependencyMap[21]), obj4);
  }
  return tmp5;
};
