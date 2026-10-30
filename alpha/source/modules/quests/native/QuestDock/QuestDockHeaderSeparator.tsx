// Module ID: 17096
// Function ID: 17097
// Name: QuestDockHeaderSeparator
// Dependencies: [19, 17, 21, 5009, 575, 2]

// Module 17096 (QuestDockHeaderSeparator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { separator: size };
size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
let closure_2 = createStyles.createStyles(obj);
const memoResult = react.memo(function QuestDockHeaderSeparator() {
  return <View style={closure_2().separator} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx");

export default memoResult;
