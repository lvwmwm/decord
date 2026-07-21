// Module ID: 15664
// Function ID: 119662
// Dependencies: []

// Module 15664
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[2]).createStyles({ wrapper: { gap: 24 } });
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  let obj = { circleRadius: null, cutoutRadius: null };
  obj = {};
  obj = { bottom: true, style: callback().wrapper, children: jsx(importDefault(dependencyMap[6]), { guildId, channelId }) };
  obj.children = jsx(arg1(dependencyMap[5]).SafeAreaPaddingView, obj);
  obj.children = jsx(arg1(dependencyMap[4]).BottomSheetScrollView, obj);
  return jsx(arg1(dependencyMap[3]).BottomSheet, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;
