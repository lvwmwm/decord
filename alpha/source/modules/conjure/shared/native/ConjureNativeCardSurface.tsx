// Module ID: 17149
// Function ID: 17150
// Name: ConjureNativeCardSurface
// Dependencies: [19, 21, 5092, 587, 558, 576, 6181, 2]

// Module 17149 (ConjureNativeCardSurface)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const Card_Card = tmp(6181);
const jsx = Fragment.jsx;
let obj = { surface: obj2 };
obj2 = { padding: nativeDefault.space.PX_12 };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeCardSurface(arg0) {
  let children;
  let style;
  const obj = react2;
  const cResult = obj.c(6);
  ({ children, style } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.surface) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const tmp8 = jsx(Card_Card.Card, { variant: "secondary", border: "subtle", radius: 12, style: tmp5, children });
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items = [tmp4.surface, style];
  cResult[0] = style;
  cResult[1] = tmp4.surface;
  cResult[2] = items;
  tmp5 = items;
}) : (function ConjureNativeCardSurface(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const items = [closure_3().surface, style];
  closure_3();
  return jsx(Card_Card.Card, { variant: "secondary", border: "subtle", radius: 12, style: items, children });
});
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default tmp3;
export const CONJURE_NATIVE_CARD_RADIUS = 12;
