// Module ID: 17761
// Function ID: 17762
// Name: useMessagesSpecs
// Dependencies: [109, 19, 1071, 5649, 1629, 17762, 17765, 17776, 575, 2]
// Exports: default

// Module 17761 (useMessagesSpecs)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import MessagesHeader from "MessagesHeader" /* 17762 */;
import MessagesItemChannel from "MessagesItemChannel" /* 17765 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 17776 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = ["height"];
const DM_WIDTH = Constants.DM_WIDTH;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  let fontScale;
  let top;
  let obj = fontScale(5649);
  fontScale = obj.useFontScale();
  top = top(1629)().top;
  const items = [fontScale, top];
  return react.useMemo(() => {
    let obj4;
    const obj = MessagesHeader;
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale);
    const obj2 = MessagesItemChannel;
    const messagesItemChannelSizes = obj2.getMessagesItemChannelSizes(fontScale);
    const obj3 = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: DM_WIDTH, listItemHeight: messagesItemChannelSizes.height, listItemSizes: _objectWithoutProperties(messagesItemChannelSizes, closure_3), listItemSuggestedFriendHeight: obj4.getMessagesItemSuggestedFriendHeight(fontScale), scrollIndicatorInsetEnd: nativeDefault.space.PX_4 };
    obj4 = MessagesItemSuggestedFriend;
    return obj3;
  }, items);
};
