// Module ID: 7562
// Function ID: 60527
// Name: ModalContent
// Dependencies: []

// Module 7562 (ModalContent)
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_2 = arg1(dependencyMap[3]).createStyles({ scrollContainer: { flex: 1 }, contentContainer: { completedAt: true, unamused: true, defaultGuildsRestricted: true, "Bool(false)": true, "Bool(false)": true } });
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((children, ref) => {
  const tmp = callback();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={arg1}>{arg0.children}</ScrollView>;
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = forwardRefResult;
