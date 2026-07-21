// Module ID: 14855
// Function ID: 111948
// Name: VoiceUsersItem
// Dependencies: []
// Exports: default

// Module 14855 (VoiceUsersItem)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_2 = arg1(dependencyMap[3]).createStyles({ voiceStates: { paddingRight: 8 }, voiceStatesCollapsed: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_sidebar/native/VoiceUsersItem.tsx");

export default function VoiceUsersItem(collapsed) {
  let voiceStatesCollapsed = collapsed.collapsed;
  const tmp = callback();
  const obj = {};
  let voiceStates = !voiceStatesCollapsed;
  if (voiceStates) {
    voiceStates = tmp.voiceStates;
  }
  const items = [voiceStates, ];
  if (voiceStatesCollapsed) {
    voiceStatesCollapsed = tmp.voiceStatesCollapsed;
  }
  items[1] = voiceStatesCollapsed;
  obj.style = items;
  obj.children = collapsed.children;
  return <View {...obj} />;
};
