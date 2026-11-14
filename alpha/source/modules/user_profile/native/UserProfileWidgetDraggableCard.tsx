// Module ID: 12108
// Function ID: 12109
// Name: UserProfileWidgetDraggableCard
// Dependencies: [19, 17, 21, 5306, 575, 7445, 2]

// Module 12108 (UserProfileWidgetDraggableCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Card_Card from "Card/Card" /* 7445 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_12 };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(function UserProfileWidgetDraggableCard(arg0) {
  let children;
  let contentRef;
  let onContentLayout;
  ({ children, contentRef, onContentLayout } = arg0);
  ({ ref: contentRef, onLayout: onContentLayout, style: closure_4().content, pointerEvents: "none", accessible: true, children });
  const Card = Card_Card.Card;
  return <Card radius={12}>{null}</Card>;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetDraggableCard.tsx");

export default memoResult;
