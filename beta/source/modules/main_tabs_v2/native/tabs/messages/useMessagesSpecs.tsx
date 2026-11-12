// Module ID: 18456
// Function ID: 18457
// Name: useMessagesSpecs
// Dependencies: [109, 19, 1072, 5798, 1627, 18457, 18460, 18471, 575, 2]
// Exports: default

// Module 18456 (useMessagesSpecs)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import MessagesHeader from "MessagesHeader" /* 18457 */;
import MessagesItemChannel from "MessagesItemChannel" /* 18460 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 18471 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = ["height"];
const DM_WIDTH = Constants.DM_WIDTH;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  let fontScale;
  let top;
  let obj = fontScale(5798);
  fontScale = obj.useFontScale();
  top = top(1627)().top;
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
