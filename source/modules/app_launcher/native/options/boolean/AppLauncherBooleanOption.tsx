// Module ID: 11289
// Function ID: 87840
// Name: AppLauncherBooleanOption
// Dependencies: []
// Exports: default

// Module 11289 (AppLauncherBooleanOption)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.container = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
  let hasError;
  let option;
  let style;
  ({ initialValue: closure_0, onPress: closure_1 } = arg0);
  ({ style, option, hasError } = arg0);
  const tmp2 = callback(React.useState(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = "text" === closure_0.type;
    }
    if (tmp) {
      tmp = "true" === closure_0.text;
    }
    return tmp;
  }), 2);
  const first = tmp2[0];
  const callback = first;
  const React = tmp2[1];
  const obj = { 0: null, 0: null };
  const items = [callback2().container, style];
  obj.style = items;
  obj.hasError = hasError;
  obj.label = option.displayName;
  obj.selected = first;
  obj.onPress = function onPress() {
    callback2(!first);
    callback(!first);
  };
  return jsx(arg1(dependencyMap[5]).FormCheckboxRow, obj);
};
