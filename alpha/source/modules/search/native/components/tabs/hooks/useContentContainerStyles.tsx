// Module ID: 17400
// Function ID: 17401
// Name: useContentContainerStyles
// Dependencies: [9312, 5092, 2]

// Module 17400 (useContentContainerStyles)
import SearchConstants from "SearchConstants" /* 9312 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
let SEARCH_ROW_TAP_STATE_PADDING;
({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchConstants);
const obj = { filesOrLinksContentContainer: { paddingTop: SEARCH_LIST_HORIZONTAL_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, mediaContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, messagesContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING - SEARCH_ROW_TAP_STATE_PADDING }, membersContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING } };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useContentContainerStyles.tsx");

export const useContentContainerStyles = styles;
