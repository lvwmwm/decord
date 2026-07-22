// Module ID: 5800
// Function ID: 49624
// Name: useSelectedDismissibleContentShared
// Dependencies: []
// Exports: useSelectedDismissibleContentShared

// Module 5800 (useSelectedDismissibleContentShared)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = function useSelectedDismissibleContentShared(arg0, arg1, flag, id) {
  arg1 = arg0;
  const dependencyMap = arg1;
  if (flag === undefined) {
    flag = false;
  }
  const React = id;
  let closure_3;
  let tmp = null != arg0 && !flag;
  if (tmp) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = arg1(dependencyMap[3]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  closure_3 = tmp;
  const items = [tmp, arg1, arg0, id];
  const effect = React.useEffect(() => () => {
    let tmp = closure_3;
    if (closure_3) {
      const lastDismissed = closure_3.lastDismissed;
      let content;
      if (null != lastDismissed) {
        content = lastDismissed.content;
      }
      let tmp6 = content !== callback;
      if (!tmp6) {
        let result = callback(callback2[4]).isGuildDismissibleContent(callback);
        if (result) {
          const lastDismissed2 = closure_3.lastDismissed;
          let guildId;
          if (null != lastDismissed2) {
            guildId = lastDismissed2.guildId;
          }
          result = guildId !== closure_2;
        }
        tmp6 = result;
        const obj = callback(callback2[4]);
      }
      tmp = tmp6;
    }
    if (tmp) {
      callback2(constants.AUTO_DISMISS, true);
    }
  }, items);
};
