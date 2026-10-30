// Module ID: 12442
// Function ID: 12443
// Name: ConjureNativeCardSurface
// Dependencies: [19, 21, 5009, 575, 6971, 2]
// Exports: default

// Module 12442 (ConjureNativeCardSurface)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Card_Card from "Card/Card" /* 6971 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { surface: { padding: nativeDefault.space.PX_12 } };
({ padding: nativeDefault.space.PX_12 });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default function ConjureNativeCardSurface(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const items = [closure_3().surface, style];
  closure_3();
  return jsx(Card_Card.Card, { variant: "secondary", border: "subtle", radius: 12, style: items, children });
};
export const CONJURE_NATIVE_CARD_RADIUS = 12;
