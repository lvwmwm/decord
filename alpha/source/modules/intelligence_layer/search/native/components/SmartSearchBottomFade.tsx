// Module ID: 18758
// Function ID: 18759
// Name: SmartSearchBottomFade
// Dependencies: [19, 1072, 21, 5014, 18759, 671, 5587, 2]

// Module 18758 (SmartSearchBottomFade)
import Fragment from "Fragment" /* 21 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
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
  let obj = searchHostSurfaceColor(18759);
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
