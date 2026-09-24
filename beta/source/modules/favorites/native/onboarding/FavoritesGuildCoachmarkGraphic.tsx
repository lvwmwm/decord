// Module ID: 16666
// Function ID: 16667
// Name: FavoritesGuildCoachmarkGraphic
// Dependencies: [17, 21, 4790, 580, 558, 568, 5939, 1181, 2]

// Module 16666 (FavoritesGuildCoachmarkGraphic)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import native2 from "native" /* 5939 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4790 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 }, betaTag: { marginLeft: 0 } };
let closure_5 = createStyles.createStyles(obj);
let obj2 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 };
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React3(tmp(5939).FavoritesSpotIllustration, { width: 160, height: 90 });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.betaTag) {
    const obj2 = { style: tmp4.betaTag };
    const tmp10 = React3(tmp(1181).BetaTag, obj2);
    cResult[1] = tmp4.betaTag;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    if (cResult[4] === tmp8) {
      let tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj3 = { style: tmp4.container, children: null };
  const items = [first, tmp8];
  obj3.children = items;
  const tmp12 = React4(View, obj3);
  cResult[3] = tmp4.container;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (() => {
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const items = [React3(native2.FavoritesSpotIllustration, { width: 160, height: 90 }), React3(native.BetaTag, { style: tmp.betaTag })];
  obj.children = items;
  return React4(View, obj);
});
