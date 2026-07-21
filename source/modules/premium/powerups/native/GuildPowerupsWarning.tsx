// Module ID: 11582
// Function ID: 90024
// Name: GuildPowerupsWarning
// Dependencies: []
// Exports: default

// Module 11582 (GuildPowerupsWarning)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { padding: importDefault(dependencyMap[4]).space.PX_24, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_WARNING, borderColor: importDefault(dependencyMap[4]).colors.STATUS_WARNING, borderRadius: importDefault(dependencyMap[4]).radii.lg, gap: importDefault(dependencyMap[4]).space.PX_8, overflow: "hidden" };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.contentContainer = { gap: importDefault(dependencyMap[4]).space.PX_4 };
const obj1 = { gap: importDefault(dependencyMap[4]).space.PX_4 };
obj.warningText = { marginTop: importDefault(dependencyMap[4]).space.PX_4 };
obj.text = { textAlign: "center" };
let closure_6 = obj.createStyles(obj);
const obj2 = { marginTop: importDefault(dependencyMap[4]).space.PX_4 };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default function GuildPowerupsWarning(warnings) {
  let guildId;
  let powerupNames;
  warnings = warnings.warnings;
  ({ guildId, powerupNames } = warnings);
  const tmp = callback2();
  const arg1 = tmp;
  let tmp6Result = null;
  if (tmp2.shouldShow) {
    let obj = { style: tmp.container };
    obj = { style: tmp.contentContainer };
    obj = { color: importDefault(dependencyMap[4]).colors.TEXT_FEEDBACK_WARNING, size: "md" };
    const items = [callback(arg1(dependencyMap[6]).CircleErrorIcon, obj), , , ];
    const obj1 = { hasMaxConnections: null, isBoostOnlySubscription: null, style: tmp.text, children: tmp3 };
    items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
    const obj2 = { variant: "text-sm/medium", style: tmp.text, children: tmp4 };
    items[2] = callback(arg1(dependencyMap[7]).Text, obj2);
    let mapped;
    if (null != warnings) {
      mapped = warnings.map((children) => {
        const obj = { hasMaxConnections: -5, isBoostOnlySubscription: 16 };
        const items = [, ];
        ({ warningText: arr[0], text: arr[1] } = tmp);
        obj.style = items;
        obj.children = children;
        return callback(tmp(closure_2[7]).Text, obj, "warning-" + arg1);
      });
    }
    items[3] = mapped;
    obj.children = items;
    obj.children = closure_5(View, obj);
    tmp6Result = callback(tmp7, obj);
    const tmp6 = callback;
    const tmp8 = closure_5;
  }
  return tmp6Result;
};
