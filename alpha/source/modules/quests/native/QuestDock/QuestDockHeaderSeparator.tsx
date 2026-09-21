// Module ID: 15462
// Function ID: 15463
// Name: QuestDockHeaderSeparator
// Dependencies: [19, 17, 21, 4756, 576, 2]

// Module 15462 (QuestDockHeaderSeparator)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
const obj = { separator: null };
let size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
obj.separator = size;
let closure_2 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx");

export default noop.memo(function QuestDockHeaderSeparator() {
  return <View style={closure_2().separator} />;
});
