// Module ID: 9520
// Function ID: 74113
// Name: castNativeSyntheticEventData
// Dependencies: [284214097]
// Exports: castNativeSyntheticEventData, getNativeSyntheticEventData

// Module 9520 (castNativeSyntheticEventData)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/messages/native/snowflake/MessageDataSnowflakeUtils.tsx");

export function castNativeSyntheticEventData(arg0) {
  return arg0;
}
export const getNativeSyntheticEventData = function getNativeSyntheticEventData(nativeEvent) {
  return nativeEvent.nativeEvent;
};
