// Module ID: 7567
// Function ID: 60562
// Name: ModalContent
// Dependencies: []

// Module 7567 (ModalContent)
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_2 = arg1(dependencyMap[3]).createStyles({ scrollContainer: { flex: 1 }, contentContainer: { shadowOpacity: "<string:1912602980>", elevation: "toString", shadowRadius: "toString", lineHeight: "<string:1135362561>", marginVertical: "<string:3209887746>" } });
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((children, ref) => {
  const tmp = callback();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={arg1}>{arg0.children}</ScrollView>;
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = forwardRefResult;
