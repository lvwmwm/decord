// Module ID: 15051
// Function ID: 15052
// Name: useMessagesSpecs
// Dependencies: [109, 19, 676, 4701, 1581, 1348, 15052, 15060, 15072, 712, 2]
// Exports: default

// Module 15051 (useMessagesSpecs)
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import { DM_WIDTH } from "ME";

const require = arg1;
let closure_3 = ["height"];
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  fontScale = fontScale(4701).useFontScale();
  top = top(1581)().top;
  const tmp2 = top(1348)("MessagesHeader");
  const dependencyMap = tmp2;
  const items = [fontScale, top, tmp2];
  return React.useMemo(() => {
    let obj = fontScale(tmp2[6]);
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale, tmp2);
    const messagesItemChannelSizes = fontScale(tmp2[7]).getMessagesItemChannelSizes(fontScale);
    obj = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: outer1_6, listItemHeight: messagesItemChannelSizes.height, listItemSizes: outer1_4(messagesItemChannelSizes, outer1_3), listItemSuggestedFriendHeight: null, scrollIndicatorInsetEnd: null };
    const obj2 = fontScale(tmp2[7]);
    obj[5] = fontScale(tmp2[8]).getMessagesItemSuggestedFriendHeight(fontScale);
    obj[6] = top(tmp2[9]).space.PX_4;
    return obj;
  }, items);
};
