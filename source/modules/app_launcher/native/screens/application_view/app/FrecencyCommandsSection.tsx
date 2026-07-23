// Module ID: 11270
// Function ID: 87642
// Name: FrecencyCommandsSection
// Dependencies: [31, 27, 653, 33, 4130, 11249, 11271, 4324, 8182, 4126, 1212, 6755, 2]
// Exports: default

// Module 11270 (FrecencyCommandsSection)
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("PlaceholderCommandRow").BETWEEN_SECTIONS_MARGIN };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default function FrecencyCommandsSection(commands) {
  let View;
  let result;
  let dependencyMap;
  let importDefault;
  let sectionName;
  const context = commands.context;
  ({ onPressCommand: importDefault, section: dependencyMap, onExecuteCommand: result, installOnDemand: View, sectionName } = commands);
  const tmp = _createForOfIteratorHelperLoose();
  const arr = importDefault(11271)({ context, commands: commands.allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = React.useEffect(() => {
    if (0 !== arr.length) {
      let obj = context(outer1_2[7]);
      obj = { num: arr.length, section_name: sectionName, location: context(outer1_2[8]).AppLauncherLocations.APP_DETAIL };
      obj.trackWithMetadata(sectionName.APP_LAUNCHER_FRECENTS_SEEN, obj);
    }
  }, items);
  let tmp3 = null;
  if (0 !== arr.length) {
    let obj = { style: tmp.container };
    obj = { style: tmp.header };
    obj = { variant: "text-md/medium", color: "text-default" };
    const intl = context(1212).intl;
    obj.children = intl.string(context(1212).t.acSE0h);
    obj.children = arr(context(4126).Heading, obj);
    const items1 = [
      arr(View, obj),
      arr.map((command) => {
          const obj = { command, onPressCommand: closure_1, isFirstRow: 0 === arg1, isLastRow: arg1 === arr.length - 1, context, onExecuteCommand: result, installOnDemand: closure_4, section: closure_2, location: context(outer1_2[11]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName };
          return arr(context(outer1_2[5]).CommandRow, obj, command.id);
        })
    ];
    obj.children = items1;
    tmp3 = callback(View, obj);
  }
  return tmp3;
};
