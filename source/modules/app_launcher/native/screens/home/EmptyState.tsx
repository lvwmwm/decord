// Module ID: 11221
// Function ID: 87393
// Name: EmptyState
// Dependencies: []
// Exports: default

// Module 11221 (EmptyState)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(false)": "mentionChannelName", "Bool(false)": "%Math%", "Bool(false)": "SET_GUILD_MEMBER", "Bool(false)": "StretchOutY", "Bool(false)": "StretchOutY", "Bool(false)": "stopCallback", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.container = obj;
obj.textContainer = { textAlign: "center" };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(arg1(dependencyMap[6]).AppLauncherEmptyStateType.HOME_EMPTY);
  obj = { style: tmp.container };
  const items = [callback(importDefault(dependencyMap[7]), {}), ];
  obj = { "Null": "<string:1895908587>", "Null": "r", alignItems: "<string:44592193>", style: tmp.textContainer };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.V7+xhH);
  items[1] = callback(arg1(dependencyMap[8]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
