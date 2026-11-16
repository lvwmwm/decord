// Module ID: 13424
// Function ID: 13425
// Name: RecommendationAppRow
// Dependencies: [19, 21, 1414, 13414, 2]
// Exports: default

// Module 13424 (RecommendationAppRow)
import Fragment from "Fragment" /* 21 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import AppLauncherHomeScreen from "AppLauncherHomeScreen" /* 13414 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

export default function RecommendationAppRow(onPress) {
  let application;
  let isFirstRow;
  ({ application, isFirstRow } = onPress);
  onPress = onPress.onPress;
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let isLastRow = onPress.isLastRow;
  if (isLastRow === undefined) {
    isLastRow = false;
  }
  let showsPromoted = onPress.showsPromoted;
  if (showsPromoted === undefined) {
    showsPromoted = false;
  }
  const obj = AvatarUtilsDefault;
  const obj2 = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const iconSource = obj.getApplicationIconSource(obj2);
  return jsx(AppLauncherHomeScreen.BaseAppRow, { application, iconSource, onPress, isFirstRow, isLastRow, showsPromoted });
};
