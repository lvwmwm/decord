// Module ID: 9551
// Function ID: 74432
// Name: useBackspaceHandler
// Dependencies: []
// Exports: useBackspaceHandler

// Module 9551 (useBackspaceHandler)
let closure_0 = importAll(dependencyMap[0]);
let closure_1 = /((\ud83c[\udde6-\uddff]){2}|([#*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/forums/native/composer/hooks/useBackspaceHandler.tsx");

export const useBackspaceHandler = function useBackspaceHandler(selection) {
  selection = selection.selection;
  const React = selection;
  const draftContent = selection.draftContent;
  let closure_1 = draftContent;
  const handleTextChange = selection.handleTextChange;
  const items = [selection, draftContent, handleTextChange];
  return React.useCallback(() => {
    let end;
    let num2;
    let start;
    ({ start, end } = selection);
    if (0 !== start) {
      let num = 1;
      if (null != end) {
        num = 1;
        if (start !== end) {
          const substr = draftContent.substring(0, start);
          handleTextChange(substr + draftContent.substring(end));
        }
      }
      while (true) {
        if (start >= num) {
          let tmp5 = draftContent;
          let tmp6 = draftContent;
          if (draftContent.test(draftContent.substring(start - num, start))) {
            num2 = num;
            if (start < num + 1) {
              break;
            } else {
              let tmp8 = draftContent;
              let tmp9 = draftContent;
              num2 = num;
              if (!draftContent.test(draftContent.substring(start - num - 1, start))) {
                break;
              } else {
                let sum = num + 1;
                let num3 = 8;
                num = sum;
                num2 = 1;
                if (sum > 8) {
                  break;
                }
              }
            }
          }
        }
        sum = num + 1;
      }
      const substr1 = draftContent.substring(0, start - num2);
      handleTextChange(substr1 + draftContent.substring(start));
    }
  }, items);
};
