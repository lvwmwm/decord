// Module ID: 18665
// Function ID: 18666
// Name: Separators
// Dependencies: [19, 17, 9806, 21, 5009, 2]
// Exports: CardVerticalSeparator, MediaVerticalSeparator, MessageVerticalSeparator

// Module 18665 (Separators)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 9806 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let FILES_OR_LINKS_GAP_WIDTH;
let MEDIA_ITEM_GAP_WIDTH;
const View = react_native.View;
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchConstants);
const jsx = Fragment.jsx;
const obj = { filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } };
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export function MessageVerticalSeparator() {
  return <View style={closure_2().messageSeparator} />;
}
export function MediaVerticalSeparator() {
  return <View style={closure_2().mediaSeparator} />;
}
export function CardVerticalSeparator() {
  return <View style={closure_2().filesOrLinksSeparator} />;
}
