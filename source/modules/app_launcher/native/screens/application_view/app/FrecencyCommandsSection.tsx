// Module ID: 11259
// Function ID: 87579
// Name: FrecencyCommandsSection
// Dependencies: []
// Exports: default

// Module 11259 (FrecencyCommandsSection)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginBottom: arg1(dependencyMap[5]).BETWEEN_SECTIONS_MARGIN };
obj.container = obj;
obj.header = { size: "<string:3931176962>", style: false, color: false, channel: false };
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default function FrecencyCommandsSection(commands) {
  let sectionName;
  const context = commands.context;
  const arg1 = context;
  ({ onPressCommand: closure_1, section: closure_2, onExecuteCommand: closure_3, installOnDemand: closure_4, sectionName } = commands);
  const AnalyticEvents = sectionName;
  const tmp = callback2();
  const arr = importDefault(dependencyMap[6])({ context, commands: commands.allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = React.useEffect(() => {
    if (0 !== arr.length) {
      let obj = context(closure_2[7]);
      obj = { num: arr.length, section_name: sectionName, location: context(closure_2[8]).AppLauncherLocations.APP_DETAIL };
      obj.trackWithMetadata(sectionName.APP_LAUNCHER_FRECENTS_SEEN, obj);
    }
  }, items);
  let tmp3 = null;
  if (0 !== arr.length) {
    let obj = { style: tmp.container };
    obj = { style: tmp.header };
    obj = {};
    const intl = arg1(dependencyMap[10]).intl;
    obj.children = intl.string(arg1(dependencyMap[10]).t.acSE0h);
    obj.children = arr(arg1(dependencyMap[9]).Heading, obj);
    const items1 = [
      arr(View, obj),
      arr.map((command) => {
          const obj = { command, onPressCommand: closure_1, isFirstRow: 0 === arg1, isLastRow: arg1 === arr.length - 1, context, onExecuteCommand: closure_3, installOnDemand: closure_4, section: closure_2, location: context(closure_2[11]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName };
          return arr(context(closure_2[5]).CommandRow, obj, command.id);
        })
    ];
    obj.children = items1;
    tmp3 = callback(View, obj);
  }
  return tmp3;
};
