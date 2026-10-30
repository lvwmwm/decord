// Module ID: 18538
// Function ID: 18539
// Name: CardHeightMeasurer
// Dependencies: [19, 17, 21, 18473, 8915, 2]

// Module 18538 (CardHeightMeasurer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8915 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const memoResult = react.memo(function CardHeightMeasurer(itemId) {
  itemId = itemId.itemId;
  const children = itemId.children;
  const items = [itemId];
  const width = react.useContext(itemId(18473).ICYMIContext).width;
  return <View onLayout={react.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const obj = ICYMIActionCreatorsDefault;
    obj.setCardHeight(itemId, height);
  }, items)} pointerEvents="box-none" style={{ width, alignSelf: "center" }}>{children}</View>;
});
const result = size.fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;
