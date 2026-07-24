// Module ID: 11242
// Function ID: 87567
// Name: RecommendationAppRow
// Dependencies: [31, 33, 1392, 11232, 2]
// Exports: default

// Module 11242 (RecommendationAppRow)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAvatarURL").fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

export default function RecommendationAppRow(isLastRow) {
  let application;
  let isFirstRow;
  ({ application, isFirstRow } = isLastRow);
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let flag = isLastRow.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isLastRow.showsPromoted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = importDefault(1392);
  obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const applicationIconSource = obj.getApplicationIconSource(obj);
  obj = { application, iconSource: applicationIconSource, onPress: isLastRow.onPress, isFirstRow, isLastRow: flag, showsPromoted: flag2 };
  return jsx(require(11232) /* AppRowLabel */.BaseAppRow, { application, iconSource: applicationIconSource, onPress: isLastRow.onPress, isFirstRow, isLastRow: flag, showsPromoted: flag2 });
};
