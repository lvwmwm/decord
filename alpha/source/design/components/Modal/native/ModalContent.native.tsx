// Module ID: 7512
// Function ID: 7513
// Name: ModalContent
// Dependencies: [19, 17, 21, 5091, 558, 576, 2]

// Module 7512 (ModalContent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ scrollContainer: { flex: 1 }, contentContainer: { flexDirection: "column", paddingTop: 24, paddingHorizontal: 16, alignItems: "center", flexGrow: 1 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ModalContent(arg0) {
  let children;
  let ref;
  const obj = react2;
  const cResult = obj.c(5);
  ({ children, ref } = arg0);
  const tmp2 = closure_4();
  if (cResult[0] === children) {
    if (cResult[1] === ref) {
      if (cResult[2] === tmp2.contentContainer) {
        let tmp3;
        if (cResult[3] === tmp2.scrollContainer) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const tmp4 = <ScrollView style={tmp2.scrollContainer} contentContainerStyle={tmp2.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={ref}>{children}</ScrollView>;
  cResult[0] = children;
  cResult[1] = ref;
  cResult[2] = tmp2.contentContainer;
  cResult[3] = tmp2.scrollContainer;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : (function ModalContent(arg0) {
  let children;
  let ref;
  ({ children, ref } = arg0);
  const tmp = closure_4();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={ref}>{children}</ScrollView>;
});
const result = size.fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = tmp3;
