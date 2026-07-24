// Module ID: 10830
// Function ID: 84039
// Dependencies: [57, 31, 27, 4143, 10802, 653, 33, 4130, 689, 566, 4964, 4660, 10026, 4126, 1212, 2]

// Module 10830
import _slicedToArray from "_slicedToArray";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importAllResult from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import useActiveSpeakerPillScrollHandler from "useActiveSpeakerPillScrollHandler";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ useActiveSpeakerPillScrollHandler: closure_6, useActiveSpeakerPillState: closure_7 } = require("useActiveSpeakerPillScrollHandler"));
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { container: { width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" } };
obj = { padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.participantItemContainer = obj;
obj.participantAvatarContainer = { alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = { fontSize: 12, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj.participantAvatarText = _createForOfIteratorHelperLoose;
obj.participantNameplateContainer = { paddingHorizontal: 3, flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj.participantNameplateSpeakingText = { lineHeight: 18, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { lineHeight: 18, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const tmp = callback5();
  let obj = channel(566);
  let items = [_isNativeReflectConstruct];
  const items1 = [channel.id];
  const first = callback(obj.useStateFromStores(items, () => {
    const speakingParticipants = outer1_5.getSpeakingParticipants(channel.id);
    const items = [speakingParticipants.map((user) => user.user), outer1_5.getParticipantsVersion(channel.id)];
    return items;
  }, items1, channel(4964).isVersionEqual), 1)[0];
  let tmp3 = null;
  if (0 !== first.length) {
    tmp3 = null;
    if (callback(callback2(), 1)[0]) {
      obj = { accessibilityRole: "button", style: tmp.container, onPress: tmp2 };
      obj = { style: tmp.participantItemContainer };
      const obj1 = { style: tmp.participantAvatarContainer };
      const obj2 = { namesStyle: tmp.participantAvatarText, users: first, withNames: true, channelId: channel.id, guildId: channel.getGuildId() };
      obj1.children = callback3(importDefault(10026), obj2);
      const items2 = [callback3(View, obj1), ];
      const obj3 = { style: tmp.participantNameplateContainer };
      const obj4 = { style: tmp.participantNameplateSpeakingText, variant: "text-xs/medium", color: "text-default" };
      const intl = channel(1212).intl;
      const obj5 = { count: first.length };
      obj4.children = intl.format(channel(1212).t["+dia6l"], obj5);
      obj3.children = callback3(channel(4126).Text, obj4);
      items2[1] = callback3(View, obj3);
      obj.children = items2;
      obj.children = callback4(View, obj);
      tmp3 = callback3(channel(4660).PressableOpacity, obj);
      const tmp10 = importDefault(10026);
    }
  }
  return tmp3;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default memoResult;
