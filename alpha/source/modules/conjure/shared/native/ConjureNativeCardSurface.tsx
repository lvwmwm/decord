// Module ID: 12312
// Function ID: 12313
// Name: ConjureNativeCardSurface
// Dependencies: [19, 21, 5142, 575, 7043, 2]
// Exports: default

// Module 12312 (ConjureNativeCardSurface)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Card_Card from "Card/Card" /* 7043 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);
let obj = { surface: { padding: nativeDefault.space.PX_12 } };
({ padding: nativeDefault.space.PX_12 });
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default function ConjureNativeCardSurface(holdsKeyboard) {
  let children;
  let items;
  let style;
  let tmp4;
  let flag = holdsKeyboard.holdsKeyboard;
  ({ children, style } = holdsKeyboard);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  context = react.useContext(context);
  const obj = { variant: "secondary", border: "subtle", radius: 12, style: items, onTouchStart: tmp4, children };
  items = [tmp.surface, style];
  tmp4 = undefined;
  const Card = Card_Card.Card;
  const tmp3 = jsx;
  if (flag) {
    tmp4 = context;
  }
  return tmp3(Card, obj);
};
export const CONJURE_NATIVE_CARD_RADIUS = 12;
export const ConjureCardTouchContext = context;
