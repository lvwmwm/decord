// Module ID: 15263
// Function ID: 115211
// Name: styles
// Dependencies: [704643131, 1778384949, 1811939357]

// Module 15263 (styles)
let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
const _module = require(dependencyMap[0]);
({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING } = _module);
const _module1 = require(dependencyMap[1]);
const styles = _module1.createStyles({ filesOrLinksContentContainer: { paddingTop: SEARCH_LIST_HORIZONTAL_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, mediaContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, messagesContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING - _module.SEARCH_ROW_TAP_STATE_PADDING }, membersContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING } });
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("modules/search/native/components/tabs/hooks/useContentContainerStyles.tsx");

export const useContentContainerStyles = styles;
