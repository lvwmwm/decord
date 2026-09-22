// Module ID: 12226
// Function ID: 12227
// Name: RecommendationAppRow
// Dependencies: [19, 21, 1396, 12216, 2]
// Exports: default

// Module 12226 (RecommendationAppRow)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import AppLauncherHomeScreen from "AppLauncherHomeScreen" /* 12216 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

export default function RecommendationAppRow(onPress) {
  ({ application, isFirstRow } = onPress);
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
  const iconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true });
  return jsx(AppLauncherHomeScreen.BaseAppRow, { application, iconSource, onPress: onPress.onPress, isFirstRow, isLastRow, showsPromoted });
};
