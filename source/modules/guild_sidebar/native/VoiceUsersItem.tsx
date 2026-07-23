// Module ID: 14979
// Function ID: 114159
// Name: VoiceUsersItem
// Dependencies: [31, 27, 33, 4130, 2]
// Exports: default

// Module 14979 (VoiceUsersItem)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2 = _createForOfIteratorHelperLoose.createStyles({ voiceStates: { paddingRight: 8 }, voiceStatesCollapsed: { paddingRight: 0, flexDirection: "row", flexWrap: "wrap", alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_sidebar/native/VoiceUsersItem.tsx");

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
  return <View />;
};
