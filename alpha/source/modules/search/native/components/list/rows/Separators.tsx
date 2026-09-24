// Module ID: 17217
// Function ID: 17218
// Name: Separators
// Dependencies: [19, 17, 8209, 21, 4829, 2]
// Exports: CardVerticalSeparator, MediaVerticalSeparator, MessageVerticalSeparator

// Module 17217 (Separators)
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const SearchConstants = fn(8209);
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_2 = createStyles.createStyles({ filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = function MessageVerticalSeparator() {
  return <View style={closure_2().messageSeparator} />;
};
export const MediaVerticalSeparator = function MediaVerticalSeparator() {
  return <View style={closure_2().mediaSeparator} />;
};
export const CardVerticalSeparator = function CardVerticalSeparator() {
  return <View style={closure_2().filesOrLinksSeparator} />;
};
