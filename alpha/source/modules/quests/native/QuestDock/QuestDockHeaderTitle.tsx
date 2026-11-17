// Module ID: 17839
// Function ID: 17840
// Name: QuestDockHeaderTitle
// Dependencies: [19, 21, 5310, 5923, 2]
// Exports: default

// Module 17839 (QuestDockHeaderTitle)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5923 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ title: { lineHeight: 16 } });
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderTitle.tsx");

export default function QuestDockHeaderTitle(arg0) {
  let accessible;
  let children;
  ({ children, accessible } = arg0);
  return jsx(Text_Text.Text, { variant: "body-sm/medium", color: "text-strong", lineClamp: 2, accessible, style: closure_3().title, children });
};
