// Module ID: 14744
// Function ID: 14745
// Name: QuestDockLimitedTimePill
// Dependencies: [19, 17, 21, 576, 4836, 11100, 4832, 1115, 2]

// Module 14744 (QuestDockLimitedTimePill)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import TimerIcon2 from "TimerIcon" /* 11100 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const NEUTRAL_79 = nativeDefault.unsafe_rawColors.NEUTRAL_79;
let obj = { pill: obj2, text: { textTransform: "uppercase" } };
obj2 = { alignItems: "center", alignSelf: "flex-start", backgroundColor: NEUTRAL_79, borderRadius: nativeDefault.radii.round, flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: 6, paddingVertical: 2 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function QuestDockLimitedTimePill() {
  let intl;
  let items;
  const tmp = closure_6();
  const obj = { style: tmp.pill, accessible: true, accessibilityRole: "text", children: items };
  const obj2 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
  const TimerIcon = TimerIcon2.TimerIcon;
  items = [React3(TimerIcon, obj2), ];
  const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.text, children: intl.string(intl2.t["h/uBCR"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx");

export default memoResult;
