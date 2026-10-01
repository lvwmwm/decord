// Module ID: 15659
// Function ID: 15660
// Name: useMessagesSpecs
// Dependencies: [109, 19, 1074, 5288, 1613, 15660, 15663, 15675, 576, 2]
// Exports: default

// Module 15659 (useMessagesSpecs)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import MessagesHeader from "MessagesHeader" /* 15660 */;
import MessagesItemChannel from "MessagesItemChannel" /* 15663 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 15675 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = ["height"];
const DM_WIDTH = Constants.DM_WIDTH;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  let fontScale;
  let top;
  let obj = fontScale(5288);
  fontScale = obj.useFontScale();
  top = top(1613)().top;
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
