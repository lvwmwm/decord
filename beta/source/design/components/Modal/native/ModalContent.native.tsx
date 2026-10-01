// Module ID: 7871
// Function ID: 7872
// Name: ModalContent
// Dependencies: [19, 17, 21, 4836, 2]

// Module 7871 (ModalContent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let children;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_2 = createStyles.createStyles({ scrollContainer: { flex: 1 }, contentContainer: { flexDirection: "column", paddingTop: 24, paddingHorizontal: 16, alignItems: "center", flexGrow: 1 } });
const forwardRefResult = react.forwardRef((children, ref) => {
  children = children.children;
  const tmp = closure_2();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={arg1}>{children}</ScrollView>;
});
const result = size.fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = forwardRefResult;
