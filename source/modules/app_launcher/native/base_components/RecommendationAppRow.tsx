// Module ID: 11201
// Function ID: 87223
// Name: RecommendationAppRow
// Dependencies: []
// Exports: default

// Module 11201 (RecommendationAppRow)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_launcher/native/base_components/RecommendationAppRow.tsx");

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
  let obj = importDefault(dependencyMap[2]);
  obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const applicationIconSource = obj.getApplicationIconSource(obj);
  obj = { application, iconSource: applicationIconSource, onPress: isLastRow.onPress, isFirstRow, isLastRow: flag, showsPromoted: flag2 };
  return jsx(arg1(dependencyMap[3]).BaseAppRow, obj);
};
