// Module ID: 15704
// Function ID: 120026
// Dependencies: []

// Module 15704
const importAllResult = importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = obj;
obj.label = {};
obj1 = { width: "text-sm/bold", height: "interactive-text-active", marginBottom: 22, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.button = obj1;
const tmp2 = arg1(dependencyMap[2]);
obj.buttonText = { color: importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_860 };
let closure_7 = obj1.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_860 };
const memoResult = importAllResult.memo(function VoicePanelNoVideoParticipantsCard() {
  const channelId = importAllResult.useContext(importDefault(dependencyMap[5])).channelId;
  const arg1 = channelId;
  const tmp = callback3();
  const items = [channelId];
  const callback = importAllResult.useCallback(() => {
    const result = callback(closure_2[6]).toggleVoiceParticipantsHidden(channelId, false);
  }, items);
  let obj = { style: tmp.container };
  obj = { "Null": null, "Null": null, alignItems: null, style: tmp.label };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.8eBJ73);
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj), ];
  obj = { style: tmp.button, onPress: callback, accessibilityRole: "button" };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl2.string(arg1(dependencyMap[9]).t.kLQySL);
  const obj1 = { variant: "text-sm/semibold", style: tmp.buttonText };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj1.children = intl3.string(arg1(dependencyMap[9]).t.kLQySL);
  obj.children = callback(arg1(dependencyMap[8]).Text, obj1);
  items1[1] = callback(Pressable, obj);
  obj.children = items1;
  return callback2(importDefault(dependencyMap[7]), obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx");

export default memoResult;
