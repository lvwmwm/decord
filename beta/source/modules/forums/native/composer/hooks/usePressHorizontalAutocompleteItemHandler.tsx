// Module ID: 9724
// Function ID: 9725
// Name: usePressHorizontalAutocompleteItemHandler
// Dependencies: [19, 1074, 9725, 2]
// Exports: usePressHorizontalAutocompleteItemHandler

// Module 9724 (usePressHorizontalAutocompleteItemHandler)
import Constants from "Constants" /* 1074 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 9725 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let items = [, , , ];
({ USER: arr[0], ROLE: arr[1], CHANNEL: arr[2], EMOJI: arr[3] } = Constants.AutoCompleteResultTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx");

export const usePressHorizontalAutocompleteItemHandler = function usePressHorizontalAutocompleteItemHandler(draftContent) {
  draftContent = draftContent.draftContent;
  const handleTextChange = draftContent.handleTextChange;
  const setSelection = draftContent.setSelection;
  const channel = draftContent.channel;
  const items = [draftContent, handleTextChange, setSelection, channel];
  return setSelection.useCallback((type, length2, arg2) => {
    const obj = autocompleter_AutocompleteUtils;
    const autocompleteResultText = obj.getAutocompleteResultText(type, channel, set);
    const substr = draftContent.substring(0, length2);
    handleTextChange(`${tmp2}${tmp} ${draftContent.substring(length2 + arg2.length + 1)}`);
    setSelection({ start: (substr + autocompleteResultText).length, end: (substr + autocompleteResultText).length });
  }, items);
};
