// Module ID: 9424
// Function ID: 9425
// Name: GameProfileSkeletonCardRow
// Dependencies: [19, 17, 21, 5009, 575, 2]
// Exports: default

// Module 9424 (GameProfileSkeletonCardRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((gap) => {
  const obj = { viewport: { overflow: "hidden" }, row: obj2 };
  return obj;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonCardRow.tsx");

export default function GameProfileSkeletonCardRow(gap) {
  let children;
  let contentContainerStyle;
  let PX_12 = gap.gap;
  ({ children, contentContainerStyle } = gap);
  if (PX_12 === undefined) {
    PX_12 = nativeDefault.space.PX_12;
  }
  const style = gap.style;
  const tmp3 = closure_4(PX_12);
  const items = [tmp3.viewport, style];
  const items1 = [tmp3.row, contentContainerStyle];
  return <View style={items} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
};
