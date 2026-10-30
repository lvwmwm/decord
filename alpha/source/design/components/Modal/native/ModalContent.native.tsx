// Module ID: 7965
// Function ID: 7966
// Name: ModalContent
// Dependencies: [19, 17, 21, 5009, 2]
// Exports: ModalContent

// Module 7965 (ModalContent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_2 = createStyles.createStyles({ scrollContainer: { flex: 1 }, contentContainer: { flexDirection: "column", paddingTop: 24, paddingHorizontal: 16, alignItems: "center", flexGrow: 1 } });
const result = size.fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export function ModalContent(arg0) {
  let children;
  let ref;
  ({ children, ref } = arg0);
  const tmp = closure_2();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={ref}>{children}</ScrollView>;
}
