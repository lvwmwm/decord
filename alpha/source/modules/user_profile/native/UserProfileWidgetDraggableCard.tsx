// Module ID: 10130
// Function ID: 10131
// Name: UserProfileWidgetDraggableCard
// Dependencies: [19, 17, 21, 4823, 575, 6958, 7477, 2]

// Module 10130 (UserProfileWidgetDraggableCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Card_Card from "Card/Card" /* 6958 */;
import UserProfileCardTitleDefault from "UserProfileCardTitle" /* 7477 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function UserProfileWidgetDraggableCard(title) {
  let children;
  let contentRef;
  let items;
  let onContentLayout;
  let titleLeadingIcon;
  title = title.title;
  ({ titleLeadingIcon, children, contentRef, onContentLayout } = title);
  let tmp2Result = null != title;
  const obj = { ref: contentRef, onLayout: onContentLayout, style: closure_6().content, children: items };
  const Card = Card_Card.Card;
  const tmp4 = hasOwnProperty;
  const tmp5 = View;
  if (tmp2Result) {
    const obj2 = { title, leadingIcon: titleLeadingIcon };
    tmp2Result = tmp2(UserProfileCardTitleDefault, obj2);
  }
  items = [tmp2Result, children];
  const obj3 = { radius: 12, draggable: true, children: tmp4(tmp5, obj) };
  return React3(Card, obj3);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetDraggableCard.tsx");

export default memoResult;
