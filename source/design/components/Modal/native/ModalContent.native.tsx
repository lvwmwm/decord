// Module ID: 7730
// Function ID: 7731
// Name: ModalContent
// Dependencies: [19, 17, 21, 4255, 2]

// Module 7730 (ModalContent)
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_2 = createCacheKey.createStyles({ scrollContainer: { flex: 1 }, contentContainer: { flexDirection: "column", paddingTop: 24, paddingHorizontal: 16, alignItems: "center", flexGrow: 1 } });
const forwardRefResult = require("noop").forwardRef((children, ref) => {
  const tmp = callback();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={arg1}>{arg0.children}</ScrollView>;
});
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = forwardRefResult;
