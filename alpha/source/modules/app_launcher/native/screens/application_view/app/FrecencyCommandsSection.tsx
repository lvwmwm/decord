// Module ID: 13020
// Function ID: 13021
// Name: FrecencyCommandsSection
// Dependencies: [19, 17, 1071, 21, 4913, 12996, 13021, 5650, 10676, 5504, 1112, 5565, 2]
// Exports: default

// Module 13020 (FrecencyCommandsSection)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5565 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5650 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10676 */;
import AppDetailContent from "AppDetailContent" /* 12996 */;
import useFilterAndSortToOnlyFrecentCommandsDefault from "useFilterAndSortToOnlyFrecentCommands" /* 13021 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, header: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 } };
obj2 = { marginBottom: AppDetailContent.BETWEEN_SECTIONS_MARGIN };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default function FrecencyCommandsSection(context) {
  let Heading;
  let installOnDemand;
  let intl;
  let items1;
  let obj3;
  let onExecuteCommand;
  let onPressCommand;
  let section;
  let sectionName;
  context = context.context;
  ({ onPressCommand: importDefault, section: dependencyMap, onExecuteCommand: react, installOnDemand: View, sectionName } = context);
  const allCommands = context.allCommands;
  const tmp = closure_8();
  const arr = useFilterAndSortToOnlyFrecentCommandsDefault({ context, commands: allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = react.useEffect(() => {
    if (0 !== arr.length) {
      const obj = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
      const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
      const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
      AppAnalyticsUtils;
      trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
    }
  }, items);
  let tmp4 = null;
  if (0 !== arr.length) {
    let obj = { style: tmp.container, children: items1 };
    const obj2 = { style: tmp.header, children: arr(Heading, obj3) };
    obj3 = { variant: "body-md/medium", color: "text-default", children: intl.string(context(1112).t.acSE0h) };
    Heading = context(5504).Heading;
    intl = context(1112).intl;
    items1 = [
      arr(View, obj2),
      arr.map((command, index) => {
          const obj = { command, onPressCommand: importDefault, isFirstRow: 0 === index, isLastRow: index === arr.length - 1, context, onExecuteCommand: react, installOnDemand: View, section: dependencyMap, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName };
          const CommandRow = AppDetailContent.CommandRow;
          return metroRequire(CommandRow, obj, command.id);
        })
    ];
    tmp4 = closure_7(View, obj);
  }
  return tmp4;
};
