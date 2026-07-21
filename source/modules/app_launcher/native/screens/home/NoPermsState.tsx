// Module ID: 11222
// Function ID: 87372
// Name: EmptyState
// Dependencies: []
// Exports: default

// Module 11222 (EmptyState)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(false)": "Array", "Bool(false)": "unitType", "Bool(false)": "Array", "Bool(false)": "gradientTop", "Bool(false)": "EMOJI_ROW_NSFW", "Bool(false)": "GUILD_TOP_READ_CHANNELS", "Bool(false)": "emitPresenceUpdate", "Bool(false)": "_instantiatedWithAClient", "Bool(false)": "useIsChannelFocused", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.container = obj;
obj.textContainer = { flexShrink: 1 };
obj.image = { bhk: 0.000000000000000000000000000000000000000000000000000000000000041334633291766945, bic: 241505615215171200000000000000000000000000000000000000000000000000000000000000000000 };
let closure_7 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  if (obj.isThemeLight(importDefault(dependencyMap[6])())) {
    let tmp4 = tmp3[7];
  } else {
    tmp4 = tmp3[8];
  }
  let obj1 = arg1(dependencyMap[9]);
  const logAppLauncherEmptyStateView = obj1.useLogAppLauncherEmptyStateView(arg1(dependencyMap[10]).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  obj = { style: tmp.container };
  obj = { style: tmp.image, resizeMode: "contain", source: importDefault(tmp4) };
  const items = [callback(closure_4, obj), ];
  obj1 = { "Null": "<string:1178599425>", "Null": "<string:3295084545>", "Null": "<string:1689649153>", style: tmp.textContainer };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.children = intl.string(arg1(dependencyMap[12]).t.uDnXXj);
  items[1] = callback(arg1(dependencyMap[11]).Text, obj1);
  obj.children = items;
  return callback2(closure_3, obj);
};
