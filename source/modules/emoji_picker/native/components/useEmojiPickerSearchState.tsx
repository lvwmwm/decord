// Module ID: 9373
// Function ID: 73175
// Name: useEmojiPickerSearchState
// Dependencies: [57, 31, 4991, 682, 1331, 2]
// Exports: default

// Module 9373 (useEmojiPickerSearchState)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default function useEmojiPickerSearchState(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let callback = arg2;
  ref = ref.useRef("");
  const tmp2 = callback(ref.useState(null), 2);
  let _isNativeReflectConstruct = tmp2[1];
  const items = [arg1, arg0, arg2];
  return {
    handleTextChange: ref.useCallback((arr) => {
      const callback = arr;
      if ("" !== arr) {
        let substr = arr;
        if (":" === arr[0]) {
          substr = arr.slice(1);
        }
        const FrecencyUserSettingsActionCreators = callback(1331).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        let obj = { channel: callback, query: substr, count: 0, intention: _slicedToArray };
        const dependencyMap = _isNativeReflectConstruct.searchWithoutFetchingLatest(obj);
        callback(682).batchUpdates(() => {
          outer1_3.current = closure_0;
          outer1_4(closure_1);
        });
        const obj3 = callback(682);
      } else {
        obj = callback(682);
        obj.batchUpdates(() => {
          outer1_3.current = "";
          outer1_4(null);
          const result = closure_1.set(0);
        });
      }
    }, items),
    searchQueryRef: ref,
    searchResults: tmp2[0]
  };
};
