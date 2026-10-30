// Module ID: 18716
// Function ID: 18717
// Name: SmartSearchBottomFade
// Dependencies: [19, 1072, 21, 5009, 18717, 671, 5582, 2]

// Module 18716 (SmartSearchBottomFade)
import Fragment from "Fragment" /* 21 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
const memoResult = react.memo(function SmartSearchBottomFade(height) {
  let searchHostSurfaceColor;
  const tmp = closure_7(height.height);
  let obj = searchHostSurfaceColor(18717);
  searchHostSurfaceColor = obj.useSearchHostSurfaceColor();
  let items = [searchHostSurfaceColor];
  const memo = react.useMemo(() => {
    const items = [, ];
    const obj = _modDef671(searchHostSurfaceColor);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = searchHostSurfaceColor;
    return items;
  }, items);
  return jsx(LinearGradientDefault, { pointerEvents: "none", style: tmp.fade, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo, locations });
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx");

export default memoResult;
