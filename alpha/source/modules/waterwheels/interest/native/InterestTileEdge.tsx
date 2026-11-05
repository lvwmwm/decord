// Module ID: 18719
// Function ID: 18720
// Name: InterestTileEdge
// Dependencies: [19, 18715, 21, 5143, 575, 1652, 2]
// Exports: default

// Module 18719 (InterestTileEdge)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18715 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const GRID_COVER_HAIRLINE_WIDTH = InterestGamePickerConstants.GRID_COVER_HAIRLINE_WIDTH;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((borderRadius) => {
  const obj = { edge: { position: "absolute", inset: 0, borderWidth: GRID_COVER_HAIRLINE_WIDTH, borderRadius, borderColor: nativeDefault.colors.BORDER_MUTED } };
  ({ position: "absolute", inset: 0, borderWidth: GRID_COVER_HAIRLINE_WIDTH, borderRadius, borderColor: nativeDefault.colors.BORDER_MUTED });
  return obj;
});
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestTileEdge.tsx");

export default function InterestTileEdge(style) {
  style = style.style;
  const items = [closure_4(style.radius).edge, style];
  closure_4(style.radius);
  return jsx(_modDef1652.View, { accessible: false, pointerEvents: "none", style: items });
};
