// Module ID: 16512
// Function ID: 16513
// Name: SmartSearchBottomFade
// Dependencies: [19, 1074, 21, 4836, 16513, 672, 5293, 2]

// Module 16512 (SmartSearchBottomFade)
import Fragment from "Fragment" /* 21 */;
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1074 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const VerticalGradient = Constants.VerticalGradient;
const jsx = Fragment.jsx;
const locations = [0, 0.8];
let closure_7 = createStyles.createStyles((height) => {
  let rect;
  const obj = { fade: rect };
  rect = { position: "absolute", left: 0, right: 0, bottom: 0, height };
  return obj;
});
const memoResult = react.memo((height) => {
  let searchHostSurfaceColor;
  const tmp = closure_7(height.height);
  let obj = searchHostSurfaceColor(16513);
  searchHostSurfaceColor = obj.useSearchHostSurfaceColor();
  let items = [searchHostSurfaceColor];
  const memo = react.useMemo(() => {
    const items = [, ];
    const obj = _modDef672(searchHostSurfaceColor);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = searchHostSurfaceColor;
    return items;
  }, items);
  return jsx(LinearGradientDefault, { pointerEvents: "none", style: tmp.fade, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo, locations });
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx");

export default memoResult;
