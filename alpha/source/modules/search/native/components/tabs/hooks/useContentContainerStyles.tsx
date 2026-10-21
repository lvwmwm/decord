// Module ID: 17976
// Function ID: 17977
// Name: useContentContainerStyles
// Dependencies: [9672, 4966, 2]

// Module 17976 (useContentContainerStyles)
import SearchConstants from "SearchConstants" /* 9672 */;
import createStyles from "createStyles" /* 4966 */;
import size from "module_2" /* 2 */;

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
let SEARCH_ROW_TAP_STATE_PADDING;
({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchConstants);
const obj = { filesOrLinksContentContainer: { paddingTop: SEARCH_LIST_HORIZONTAL_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, mediaContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, messagesContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING - SEARCH_ROW_TAP_STATE_PADDING }, membersContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING } };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useContentContainerStyles.tsx");

export const useContentContainerStyles = styles;
