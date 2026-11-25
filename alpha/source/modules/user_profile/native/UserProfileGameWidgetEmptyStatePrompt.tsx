// Module ID: 14547
// Function ID: 14548
// Name: UserProfileGameWidgetEmptyStatePrompt
// Dependencies: [19, 21, 14518, 5603, 1112, 2]
// Exports: default

// Module 14547 (UserProfileGameWidgetEmptyStatePrompt)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5603 */;
import WidgetUtils from "WidgetUtils" /* 14518 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameWidgetEmptyStatePrompt.tsx");

export default function UserProfileGameWidgetEmptyStatePrompt(arg0) {
  let stringResult;
  let style;
  let widgetType;
  ({ widgetType, style } = arg0);
  const obj = WidgetUtils;
  const widgetMaxGamesResult = obj.widgetMaxGames(widgetType);
  const obj2 = { variant: "body-sm/medium", color: "text-muted", style, children: stringResult };
  const Text = Text_Text.Text;
  const tmp4 = jsx;
  if (1 === widgetMaxGamesResult) {
    const intl2 = tmp(1112).intl;
    stringResult = intl2.string(tmp(1112).t["3FdPBT"]);
  } else {
    const intl = tmp(1112).intl;
    const obj3 = { maxGames: widgetMaxGamesResult };
    stringResult = intl.formatToPlainString(tmp(1112).t.W8K2GH, obj3);
  }
  return tmp4(Text, obj2);
};
