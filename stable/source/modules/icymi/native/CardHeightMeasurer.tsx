// Module ID: 16617
// Function ID: 16618
// Name: CardHeightMeasurer
// Dependencies: [19, 17, 21, 16550, 8469, 2]

// Module 16617 (CardHeightMeasurer)
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8469 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = noop.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return <View onLayout={noop.useCallback((nativeEvent) => {
    ICYMIActionCreatorsDefault.setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: noop.useContext(itemId(16550).ICYMIContext).width, alignSelf: "center" }}>{arg0.children}</View>;
});
