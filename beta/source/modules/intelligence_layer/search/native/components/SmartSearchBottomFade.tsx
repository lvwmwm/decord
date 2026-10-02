// Module ID: 16514
// Function ID: 16515
// Name: SmartSearchBottomFade
// Dependencies: [19, 1086, 21, 4837, 558, 576, 16515, 684, 5292, 2]

// Module 16514 (SmartSearchBottomFade)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _modDef684 from "module_684" /* 684 */;
import Constants from "Constants" /* 1086 */;
import LinearGradientDefault from "LinearGradient" /* 5292 */;
import useSearchHostSurface from "useSearchHostSurface" /* 16515 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp3 = closure_7(height.height);
  const obj2 = useSearchHostSurface;
  const searchHostSurfaceColor = obj2.useSearchHostSurfaceColor();
  if (cResult[0] !== searchHostSurfaceColor) {
    const obj3 = _modDef684(searchHostSurfaceColor);
    const alphaResult = obj3.alpha(0);
    const hexResult = alphaResult.hex();
    cResult[0] = searchHostSurfaceColor;
    cResult[1] = hexResult;
    tmp5 = hexResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === searchHostSurfaceColor) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      let tmp9;
      if (cResult[6] === tmp3.fade) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
    ({ START: obj5.start, END: obj5.end } = VerticalGradient);
    const tmp14 = jsx(LinearGradientDefault, { pointerEvents: "none", style: tmp3.fade, start: null, end: null, colors: tmp8, locations });
    cResult[5] = tmp8;
    cResult[6] = tmp3.fade;
    cResult[7] = tmp14;
    tmp9 = tmp14;
  }
  const items = [tmp5, searchHostSurfaceColor];
  cResult[2] = searchHostSurfaceColor;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp8 = items;
}) : ((height) => {
  let searchHostSurfaceColor;
  const tmp = closure_7(height.height);
  let obj = searchHostSurfaceColor(16515);
  searchHostSurfaceColor = obj.useSearchHostSurfaceColor();
  let items = [searchHostSurfaceColor];
  const memo = react.useMemo(() => {
    const items = [, ];
    const obj = _modDef684(searchHostSurfaceColor);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = searchHostSurfaceColor;
    return items;
  }, items);
  return jsx(LinearGradientDefault, { pointerEvents: "none", style: tmp.fade, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo, locations });
}));
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx");

export default memoResult;
