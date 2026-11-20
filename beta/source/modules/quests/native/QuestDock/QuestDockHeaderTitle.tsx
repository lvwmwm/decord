// Module ID: 17801
// Function ID: 17802
// Name: QuestDockHeaderTitle
// Dependencies: [19, 21, 5306, 5919, 2]
// Exports: default

// Module 17801 (QuestDockHeaderTitle)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5919 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
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
