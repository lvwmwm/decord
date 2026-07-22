// Module ID: 9330
// Function ID: 72925
// Name: useEmojiPickerSearchState
// Dependencies: []
// Exports: default

// Module 9330 (useEmojiPickerSearchState)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default function useEmojiPickerSearchState(arg0, arg1, arg2) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const callback = arg2;
  const ref = React.useRef("");
  const React = ref;
  const tmp2 = callback(React.useState(null), 2);
  let closure_4 = tmp2[1];
  const items = [arg1, arg0, arg2];
  return {
    handleTextChange: React.useCallback((arr) => {
      if ("" !== arr) {
        let substr = arr;
        if (":" === arr[0]) {
          substr = arr.slice(1);
        }
        const FrecencyUserSettingsActionCreators = arr(closure_1[4]).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        let obj = { channel: arr, query: substr, count: 0, intention: arg2 };
        closure_1 = closure_4.searchWithoutFetchingLatest(obj);
        arr(closure_1[3]).batchUpdates(() => {
          closure_3.current = arg0;
          callback(closure_1);
        });
        const obj3 = arr(closure_1[3]);
      } else {
        obj = arr(closure_1[3]);
        obj.batchUpdates(() => {
          closure_3.current = "";
          callback(null);
          const result = closure_1.set(0);
        });
      }
    }, items),
    searchQueryRef: ref,
    searchResults: tmp2[0]
  };
};
