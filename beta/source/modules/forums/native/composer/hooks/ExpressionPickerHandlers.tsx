// Module ID: 9723
// Function ID: 9724
// Name: react
// Dependencies: [19, 2]
// Exports: usePressEmojiHandler, usePressGIFHandler

// Module 9723 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let url;

const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/ExpressionPickerHandlers.tsx");

export const usePressEmojiHandler = function usePressEmojiHandler(selection) {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  let closure_5 = react.useRef({ selection, draftContent, handleTextChange, focusTextInput, setSelection });
  const effect = react.useEffect(() => {
    const obj = { selection, draftContent, handleTextChange, focusTextInput, setSelection };
    ref.current = obj;
  });
  return react.useCallback((id) => {
    let length;
    const current = ref.current;
    ({ selection, draftContent, handleTextChange } = current);
    ({ focusTextInput, setSelection } = current);
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    const substring = draftContent.substring;
    if (start == null) {
      start = selection.start;
    }
    const substr1 = substring(start);
    if (null == id.id) {
      if (null != id.surrogates) {
        handleTextChange(substr + id.surrogates + substr1);
        length = (substr + id.surrogates).length;
      }
      const obj = { start: length, end: length };
      setSelection(obj);
      focusTextInput();
    }
    if (null != id.uniqueName) {
      let name;
      if ("" !== id.uniqueName) {
        name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + ":" + name + ": " + substr1);
      const _HermesInternal2 = HermesInternal;
      length = (substr + ":" + name + ": ").length;
    }
    name = id.name;
  }, []);
};
export const usePressGIFHandler = function usePressGIFHandler(selection) {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const focusTextInput = selection.focusTextInput;
  const setSelection = selection.setSelection;
  const items = [draftContent, focusTextInput, handleTextChange, , , ];
  ({ end: arr[3], start: arr[4] } = selection);
  items[5] = setSelection;
  return react.useCallback((url) => {
    let length;
    url = url.url;
    const substr = draftContent.substring(0, selection.start);
    let start = selection.end;
    const substring = draftContent.substring;
    const tmp2 = selection;
    if (start == null) {
      start = tmp2.start;
    }
    const substr1 = substring(start);
    if (substr.endsWith(" ")) {
      handleTextChange(substr + url + substr1);
      length = (substr + url).length;
    } else {
      const _HermesInternal = HermesInternal;
      handleTextChange(substr + " " + url + substr1);
      const _HermesInternal2 = HermesInternal;
      length = (substr + " " + url).length;
    }
    setSelection({ start: length, end: length });
    focusTextInput();
  }, items);
};
