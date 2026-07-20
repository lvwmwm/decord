// Module ID: 9542
// Function ID: 74397
// Name: usePressEmojiHandler
// Dependencies: []
// Exports: usePressEmojiHandler, usePressGIFHandler

// Module 9542 (usePressEmojiHandler)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx");

export const usePressEmojiHandler = function usePressEmojiHandler(selection) {
  selection = selection.selection;
  const React = selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  let closure_5 = React.useRef({ selection, draftContent, handleTextChange, focusTextInput, setSelection });
  const effect = React.useEffect(() => {
    closure_5.current = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
  });
  return React.useCallback((id) => {
    let draftContent;
    let focusTextInput;
    let handleTextChange;
    let selection;
    let setSelection;
    const current = ref.current;
    ({ selection, draftContent, handleTextChange } = current);
    ({ focusTextInput, setSelection } = current);
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    if (null == start) {
      start = selection.start;
    }
    const substr1 = draftContent.substring(start);
    if (null == id.id) {
      if (null != id.surrogates) {
        handleTextChange(substr + id.surrogates + substr1);
        let length = substr + id.surrogates.length;
      }
      const obj = { start: length, end: length };
      setSelection(obj);
      focusTextInput();
    }
    if (null != id.uniqueName) {
      if ("" !== id.uniqueName) {
        let name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + ":" + name + ": " + substr1);
      const _HermesInternal2 = HermesInternal;
      length = substr + ":" + name + ": ".length;
    }
    name = id.name;
  }, []);
};
export const usePressGIFHandler = function usePressGIFHandler(selection) {
  selection = selection.selection;
  const React = selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  const items = [draftContent, focusTextInput, handleTextChange, , , ];
  ({ end: arr[3], start: arr[4] } = selection);
  items[5] = setSelection;
  return React.useCallback((url) => {
    url = url.url;
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    if (null == start) {
      start = selection.start;
    }
    const substr1 = draftContent.substring(start);
    if (substr.endsWith(" ")) {
      tmp4(substr + url + substr1);
      let length = substr + url.length;
    } else {
      const _HermesInternal = HermesInternal;
      tmp4(substr + " " + url + substr1);
      const _HermesInternal2 = HermesInternal;
      length = substr + " " + url.length;
    }
    const obj = { start: length, end: length };
    setSelection(obj);
    focusTextInput();
  }, items);
};
