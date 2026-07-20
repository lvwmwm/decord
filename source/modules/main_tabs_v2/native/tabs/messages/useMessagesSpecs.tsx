// Module ID: 14760
// Function ID: 111301
// Name: useMessagesSpecs
// Dependencies: []
// Exports: default

// Module 14760 (useMessagesSpecs)
let closure_3 = importAll(dependencyMap[0]);
const DM_WIDTH = arg1(dependencyMap[1]).DM_WIDTH;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  const fontScale = arg1(dependencyMap[2]).useFontScale();
  const arg1 = fontScale;
  const top = importDefault(dependencyMap[3])().top;
  const importDefault = top;
  const tmp2 = importDefault(dependencyMap[4])("MessagesHeader");
  const dependencyMap = tmp2;
  const items = [fontScale, top, tmp2];
  return React.useMemo(() => {
    let obj = fontScale(tmp2[5]);
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale, tmp2);
    obj = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: closure_4, listItemSizes: fontScale(tmp2[6]).getMessagesItemChannelSizes(fontScale) };
    const obj2 = fontScale(tmp2[6]);
    obj.listItemSuggestedFriendHeight = fontScale(tmp2[7]).getMessagesItemSuggestedFriendHeight(fontScale);
    obj.scrollIndicatorInsetEnd = top(tmp2[8]).space.PX_4;
    return obj;
  }, items);
};
