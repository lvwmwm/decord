// Module ID: 15487
// Function ID: 15488
// Name: MessageVerticalSeparator
// Dependencies: [19, 17, 9101, 21, 4189, 2]
// Exports: CardVerticalSeparator, MediaVerticalSeparator, MessageVerticalSeparator

// Module 15487 (MessageVerticalSeparator)
import "noop";
import { View } from "get ActivityIndicator";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let FILES_OR_LINKS_GAP_WIDTH;
let MEDIA_ITEM_GAP_WIDTH;
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchAutocompleteSelectAnalyticsActions);
let closure_2 = createCacheKey.createStyles({ filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } });
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = function MessageVerticalSeparator() {
  return <View style={callback().messageSeparator} />;
};
export const MediaVerticalSeparator = function MediaVerticalSeparator() {
  return <View style={callback().mediaSeparator} />;
};
export const CardVerticalSeparator = function CardVerticalSeparator() {
  return <View style={callback().filesOrLinksSeparator} />;
};
