// Module ID: 11629
// Function ID: 11630
// Name: FrecencyCommandsSection
// Dependencies: [19, 17, 1074, 21, 4836, 11611, 11630, 5016, 8712, 4832, 1115, 6943, 2]
// Exports: default

// Module 11629 (FrecencyCommandsSection)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 6943 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8712 */;
import AppDetailContent from "AppDetailContent" /* 11611 */;
import useFilterAndSortToOnlyFrecentCommandsDefault from "useFilterAndSortToOnlyFrecentCommands" /* 11630 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
    obj3 = { variant: "text-md/medium", color: "text-default", children: intl.string(context(1115).t.acSE0h) };
    Heading = context(4832).Heading;
    intl = context(1115).intl;
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
