// Module ID: 13595
// Function ID: 103037
// Name: ExplicitMediaSettingsActionSheet
// Dependencies: []
// Exports: default

// Module 13595 (ExplicitMediaSettingsActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[4]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.content = obj;
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx");

export default function ExplicitMediaSettingsActionSheet(options) {
  let subtitle;
  let title;
  options = options.options;
  const arg1 = options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const callback = React.useCallback((arg0) => {
    const options = arg0;
    const found = options.find((value) => value.value === value);
    if (null != found) {
      found.onPress();
      callback(closure_2[5]).hideActionSheet();
      const obj2 = callback(closure_2[5]);
    }
  }, items);
  let obj = { startExpanded: true };
  const items1 = [callback(arg1(dependencyMap[7]).BottomSheetTitleHeader, { title, subtitle }), ];
  obj = { style: callback2().content };
  obj = {};
  if (null == SHOW) {
    SHOW = arg1(dependencyMap[9]).ExplicitContentRedaction.SHOW;
  }
  obj.defaultValue = SHOW;
  obj.onChange = callback;
  obj.hasIcons = false;
  obj.children = options.map((label) => callback2(options(closure_2[10]).TableRadioRow, { label: label.label, value: label.value }, label.value));
  obj.children = callback(arg1(dependencyMap[8]).TableRadioGroup, obj);
  items1[1] = callback(View, obj);
  obj.children = items1;
  return closure_6(arg1(dependencyMap[6]).BottomSheet, obj);
};
