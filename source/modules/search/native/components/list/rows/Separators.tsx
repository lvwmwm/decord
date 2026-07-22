// Module ID: 15227
// Function ID: 114965
// Name: MessageVerticalSeparator
// Dependencies: []
// Exports: CardVerticalSeparator, MediaVerticalSeparator, MessageVerticalSeparator

// Module 15227 (MessageVerticalSeparator)
let FILES_OR_LINKS_GAP_WIDTH;
let MEDIA_ITEM_GAP_WIDTH;
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp3 = arg1(dependencyMap[2]);
let closure_2 = arg1(dependencyMap[4]).createStyles({ filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = function MessageVerticalSeparator() {
  return <View style={callback().messageSeparator} />;
};
export const MediaVerticalSeparator = function MediaVerticalSeparator() {
  return <View style={callback().mediaSeparator} />;
};
export const CardVerticalSeparator = function CardVerticalSeparator() {
  return <View style={callback().filesOrLinksSeparator} />;
};
