// Module ID: 11483
// Function ID: 11484
// Name: RecommendationAppRow
// Dependencies: [19, 21, 1435, 11472, 2]
// Exports: default

// Module 11483 (RecommendationAppRow)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAvatarURL").fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

export default function RecommendationAppRow(onPress) {
  let application;
  let isFirstRow;
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
  let obj = importDefault(1435);
  obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const iconSource = obj.getApplicationIconSource(obj);
  return jsx(require(11472) /* AppRowLabel */.BaseAppRow, { application, iconSource, onPress: onPress.onPress, isFirstRow, isLastRow, showsPromoted });
};
