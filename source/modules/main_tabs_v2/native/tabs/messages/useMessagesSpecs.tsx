// Module ID: 14997
// Function ID: 114198
// Name: useMessagesSpecs
// Dependencies: [31, 653, 4584, 1557, 1324, 14998, 15001, 15012, 689, 2]
// Exports: default

// Module 14997 (useMessagesSpecs)
import result from "result";
import { DM_WIDTH } from "ME";

const require = arg1;
const result = require("getFontScale").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  fontScale = fontScale(4584).useFontScale();
  top = top(1557)().top;
  const tmp2 = top(1324)("MessagesHeader");
  const dependencyMap = tmp2;
  const items = [fontScale, top, tmp2];
  return React.useMemo(() => {
    let obj = fontScale(tmp2[5]);
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale, tmp2);
    obj = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: outer1_4, listItemSizes: fontScale(tmp2[6]).getMessagesItemChannelSizes(fontScale) };
    const obj2 = fontScale(tmp2[6]);
    obj.listItemSuggestedFriendHeight = fontScale(tmp2[7]).getMessagesItemSuggestedFriendHeight(fontScale);
    obj.scrollIndicatorInsetEnd = top(tmp2[8]).space.PX_4;
    return obj;
  }, items);
};
