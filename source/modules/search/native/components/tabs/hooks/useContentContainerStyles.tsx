// Module ID: 15489
// Function ID: 118039
// Name: styles
// Dependencies: [9077, 4165, 2]

// Module 15489 (styles)
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING } = SearchAutocompleteSelectAnalyticsActions);
const styles = _createForOfIteratorHelperLoose.createStyles({ filesOrLinksContentContainer: { paddingTop: SEARCH_LIST_HORIZONTAL_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, mediaContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, messagesContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING - SearchAutocompleteSelectAnalyticsActions.SEARCH_ROW_TAP_STATE_PADDING }, membersContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING } });
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/hooks/useContentContainerStyles.tsx");

export const useContentContainerStyles = styles;
