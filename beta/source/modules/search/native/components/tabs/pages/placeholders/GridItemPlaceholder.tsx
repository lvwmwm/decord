// Module ID: 16464
// Function ID: 16465
// Name: GridItemPlaceholder
// Dependencies: [19, 17, 21, 4836, 576, 2]

// Module 16464 (GridItemPlaceholder)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { imageContainer: { flex: 1, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
({ flex: 1, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
let closure_2 = createStyles.createStyles(obj);
const memoResult = react.memo((arg0) => {
  let height;
  let style;
  let width;
  ({ width, height, style } = arg0);
  const items = [{ width, height }, closure_2().imageContainer, style];
  return <View style={items} />;
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default memoResult;
