// Module ID: 11102
// Function ID: 86382
// Name: RefreshChatInputCoachmark
// Dependencies: []
// Exports: default, useRefreshChatInputCoachmark

// Module 11102 (RefreshChatInputCoachmark)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default function RefreshChatInputCoachmark(buttonRef) {
  let obj = Object.create(null);
  obj.buttonRef = 0;
  const merged = Object.assign(buttonRef, obj);
  obj = arg1(dependencyMap[8]);
  const coachmark = obj.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useRefreshChatInputCoachmark = function useRefreshChatInputCoachmark(disabled) {
  let arg1;
  let importDefault;
  arg1(dependencyMap[4]);
  if (tmp) {
    if (!disabled.disabled) {
      let items = [arg1(dependencyMap[5]).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
    }
    const tmp7 = callback(tmp3(items), 2);
    arg1 = tmp8;
    const tmp11 = tmp7[0] === arg1(dependencyMap[5]).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
    importDefault = tmp11;
    const items1 = [tmp11, tmp7[1]];
    let memo = null;
    if (tmp11) {
      memo = React.useMemo(() => {
        let obj = {};
        const intl = tmp8(closure_2[6]).intl;
        obj.title = intl.string(tmp8(closure_2[6]).t.eqI1WA);
        const intl2 = tmp8(closure_2[6]).intl;
        obj.description = intl2.string(tmp8(closure_2[6]).t.nxO3NK);
        obj.position = "top";
        obj.offsetY = 4;
        obj.visible = tmp11;
        obj.onDismiss = function onDismiss() {
          callback(constants.USER_DISMISS);
        };
        obj = { rive: tmp8(closure_2[7]).OmnibuttonCoachmarkRive };
        obj.graphic = obj;
        return obj;
      }, items1);
    }
    return memo;
  }
  items = [];
};
