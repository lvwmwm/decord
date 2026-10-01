// Module ID: 9751
// Function ID: 9752
// Name: useEmojiPickerSearchState
// Dependencies: [32, 19, 5771, 1248, 2026, 2]
// Exports: default

// Module 9751 (useEmojiPickerSearchState)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default function useEmojiPickerSearchState(channel, arg1, intention, bypassPremiumEmojiEntitlement) {
  let first;
  let items;
  let closure_1 = arg1;
  _slicedToArray = intention;
  react = bypassPremiumEmojiEntitlement;
  const ref = react.useRef("");
  const tmp2 = _slicedToArray(react.useState(null), 2);
  let closure_5 = tmp2[1];
  let obj = {
    handleTextChange: react.useCallback((arr) => {
      let current;
      channel = arr;
      if ("" !== arr) {
        let substr = arr;
        if (":" === arr[0]) {
          substr = arr.slice(1);
        }
        const FrecencyUserSettingsActionCreators = channel(closure_1[4]).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        const obj2 = { channel, query: substr, count: 0, intention, bypassPremiumEmojiEntitlement };
        closure_1 = ref.searchWithoutFetchingLatest(obj2);
        const obj3 = channel(closure_1[3]);
        obj3.batchUpdates(() => {
          ref.current = current;
          closure_5(closure_1);
        });
      } else {
        const obj = channel(closure_1[3]);
        obj.batchUpdates(() => {
          ref.current = "";
          closure_1_5(null);
          const result = closure_1.set(0);
        });
      }
    }, items),
    searchQueryRef: ref,
    searchResults: first
  };
  items = [arg1, channel, intention, bypassPremiumEmojiEntitlement];
  first = tmp2[0];
  return obj;
};
