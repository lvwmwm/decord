// Module ID: 11288
// Function ID: 87848
// Name: AppLauncherSelectOptionFormRow
// Dependencies: []
// Exports: default

// Module 11288 (AppLauncherSelectOptionFormRow)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { marginTop: 35924116233733936000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, marginBottom: 13339325930009687000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050927898995, lineClamp: -0.000020027193576912034, maxFontSizeMultiplier: 128840307290545650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[3]).radii.lg };
obj.formRow = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default function AppLauncherSelectOptionFormRow(arg0) {
  let autoFocus;
  let option;
  let selected;
  let style;
  let unselectedSubLabel;
  ({ selected, selectedItemName: closure_0, unselectedSubLabel } = arg0);
  const importDefault = unselectedSubLabel;
  let obj = { TypeError: true, uri: true, marginBottom: true, borderRadius: true, variant: true, color: true };
  ({ style, option, autoFocus } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  let obj1 = arg1(dependencyMap[4]);
  const animationDelayedAutoFocus = obj1.useAnimationDelayedAutoFocus(autoFocus, merged.onPress);
  obj = { bind: null, cursor: null };
  const items = [callback().formRow, style];
  obj.style = items;
  obj = {};
  let str = "text-md/medium";
  if (selected) {
    str = "text-sm/medium";
  }
  obj.variant = str;
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  obj.color = str2;
  obj.lineClamp = 1;
  obj.children = option.displayName;
  obj.label = jsx(arg1(dependencyMap[6]).Text, obj);
  if (selected) {
    let fn = () => callback2(callback(closure_2[6]).Text, { children: callback });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => callback2(callback(closure_2[6]).Text, { children: unselectedSubLabel });
    }
  }
  obj.subLabel = fn;
  obj1 = { source: importDefault(dependencyMap[8]), size: arg1(dependencyMap[7]).IconSizes.SMALL_20 };
  obj.trailing = jsx(arg1(dependencyMap[7]).Icon, obj1);
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[5]).FormRow, obj);
};
