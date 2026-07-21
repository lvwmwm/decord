// Module ID: 9548
// Function ID: 74431
// Name: set
// Dependencies: []
// Exports: usePressHorizontalAutocompleteItemHandler

// Module 9548 (set)
let closure_2 = importAll(dependencyMap[0]);
const items = [, , , ];
({ USER: arr[0], ROLE: arr[1], CHANNEL: arr[2], EMOJI: arr[3] } = arg1(dependencyMap[1]).AutoCompleteResultTypes);
const set = new Set(items);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx");

export const usePressHorizontalAutocompleteItemHandler = function usePressHorizontalAutocompleteItemHandler(draftContent) {
  draftContent = draftContent.draftContent;
  const arg1 = draftContent;
  const handleTextChange = draftContent.handleTextChange;
  const dependencyMap = handleTextChange;
  const setSelection = draftContent.setSelection;
  const React = setSelection;
  const channel = draftContent.channel;
  const items = [draftContent, handleTextChange, setSelection, channel];
  return React.useCallback((type, length2) => {
    const obj = draftContent(handleTextChange[2]);
    const str = draftContent.substring(0, length2);
    const items = [...str];
    const reversed = items.reverse();
    const joined = reversed.join("");
    const substr = str.substring(0, str.length - joined.search(/\s|\r|\n/));
    handleTextChange(`${tmp2}${tmp} ${closure_0.substring(length2 + arg2.length + 1)}`);
    const length = substr + draftContent(handleTextChange[2]).getAutocompleteResultText(type, channel, channel).length;
    setSelection({ start: length, end: length });
  }, items);
};
