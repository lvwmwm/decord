// Module ID: 10784
// Function ID: 83751
// Dependencies: []

// Module 10784
let closure_3 = importDefault(dependencyMap[0]);
const View = arg1(dependencyMap[2]).View;
let closure_5 = importDefault(dependencyMap[3]);
const importAllResult = importAll(dependencyMap[1]);
({ useActiveSpeakerPillScrollHandler: closure_6, useActiveSpeakerPillState: closure_7 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = { container: {} };
obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.participantItemContainer = obj;
obj.participantAvatarContainer = {};
obj1 = { fontSize: 12, fontFamily: arg1(dependencyMap[5]).Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj.participantAvatarText = obj1;
obj.participantNameplateContainer = { iconColor: "_opacityActive", flexDirection: "<string:2635747584>", justifyContent: "content", flex: "isArray" };
const tmp3 = arg1(dependencyMap[6]);
obj.participantNameplateSpeakingText = { lineHeight: 18, color: importDefault(dependencyMap[8]).colors.TEXT_SUBTLE };
let closure_10 = obj1.createStyles(obj);
const obj2 = { lineHeight: 18, color: importDefault(dependencyMap[8]).colors.TEXT_SUBTLE };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback5();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const items1 = [channel.id];
  const first = callback(obj.useStateFromStores(items, () => {
    const speakingParticipants = store.getSpeakingParticipants(channel.id);
    const items = [speakingParticipants.map((user) => user.user), store.getParticipantsVersion(channel.id)];
    return items;
  }, items1, arg1(dependencyMap[10]).isVersionEqual), 1)[0];
  let tmp3 = null;
  if (0 !== first.length) {
    tmp3 = null;
    if (callback(callback2(), 1)[0]) {
      obj = { accessibilityRole: "button", style: tmp.container, onPress: tmp2 };
      obj = { style: tmp.participantItemContainer };
      const obj1 = { style: tmp.participantAvatarContainer };
      const obj2 = { namesStyle: tmp.participantAvatarText, users: first, withNames: true, channelId: channel.id, guildId: channel.getGuildId() };
      obj1.children = callback3(importDefault(dependencyMap[12]), obj2);
      const items2 = [callback3(View, obj1), ];
      const obj3 = { style: tmp.participantNameplateContainer };
      const obj4 = { style: tmp.participantNameplateSpeakingText };
      const intl = arg1(dependencyMap[14]).intl;
      const obj5 = { count: first.length };
      obj4.children = intl.format(arg1(dependencyMap[14]).t.+dia6l, obj5);
      obj3.children = callback3(arg1(dependencyMap[13]).Text, obj4);
      items2[1] = callback3(View, obj3);
      obj.children = items2;
      obj.children = callback4(View, obj);
      tmp3 = callback3(arg1(dependencyMap[11]).PressableOpacity, obj);
      const tmp10 = importDefault(dependencyMap[12]);
    }
  }
  return tmp3;
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default memoResult;
