// Module ID: 11276
// Function ID: 87773
// Name: AppLauncherChoicesOption
// Dependencies: []
// Exports: default

// Module 11276 (AppLauncherChoicesOption)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.lg, alignItems: "center", padding: 12 };
obj.container = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx");

export default function AppLauncherChoicesOption(option) {
  let autoFocus;
  let hasError;
  let onSelect;
  let style;
  option = option.option;
  const arg1 = option;
  ({ initialValue: closure_1, onSelect } = option);
  const dependencyMap = onSelect;
  const onOpenChoicesSheet = option.onOpenChoicesSheet;
  let callback = onOpenChoicesSheet;
  const onDismissChoicesSheet = option.onDismissChoicesSheet;
  const React = onDismissChoicesSheet;
  ({ style, autoFocus, hasError } = option);
  const tmp3 = callback(React.useState(() => {
    if (null != lib) {
      if ("text" === lib.type) {
        const choices = option.choices;
        let found;
        if (null != choices) {
          found = choices.find((displayName) => displayName.displayName === text.text);
        }
        if (null != found) {
          const obj = { choice: found };
          const choices1 = option.choices;
          obj.index = choices1.indexOf(found);
          return obj;
        }
      }
    }
  }), 2);
  const first = tmp3[0];
  const jsx = first;
  const callback2 = tmp3[1];
  const items = [onDismissChoicesSheet, onOpenChoicesSheet, onSelect, option, ];
  let index;
  if (null != first) {
    index = first.index;
  }
  items[4] = index;
  callback = React.useCallback(() => {
    onOpenChoicesSheet();
    let obj = option(onSelect[5]);
    const result = obj.dismissGlobalKeyboard();
    obj = { option };
    let index;
    const obj2 = lib(onSelect[6]);
    if (null != first) {
      index = first.index;
    }
    obj.initChoiceIndex = index;
    obj.onChoiceSelect = function onChoiceSelect(choice, index) {
      callback2({ choice, index });
      callback(choice);
    };
    obj.onDismiss = onDismissChoicesSheet;
    obj2.openLazy(option(onSelect[8])(onSelect[7], onSelect.paths), "AppLauncherChoicesActionSheet", obj);
  }, items);
  let obj = arg1(dependencyMap[9]);
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, callback);
  obj = { bind: null, cursor: null };
  const items1 = [callback2().container, style];
  obj.style = items1;
  obj.hasError = hasError;
  obj = {};
  let str = "text-sm/medium";
  if (null == first) {
    str = "text-md/medium";
  }
  obj.variant = str;
  let str2 = "interactive-text-default";
  if (null == first) {
    str2 = "text-default";
  }
  obj.color = str2;
  obj.lineClamp = 1;
  obj.children = option.displayName;
  obj.label = jsx(arg1(dependencyMap[11]).Text, obj);
  let tmp9 = null;
  if (null != first) {
    const obj1 = { children: first.choice.displayName };
    tmp9 = jsx(arg1(dependencyMap[11]).Text, obj1);
  }
  obj.subLabel = tmp9;
  obj.trailing = jsx(arg1(dependencyMap[10]).FormArrow, {});
  obj.onPress = callback;
  return jsx(arg1(dependencyMap[10]).FormRow, obj);
};
