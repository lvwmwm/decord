// Module ID: 14363
// Function ID: 14364
// Name: ExplicitMediaSettingsActionSheet
// Dependencies: [19, 17, 21, 4836, 576, 4800, 6571, 6570, 5997, 1186, 6000, 2]
// Exports: default

// Module 14363 (ExplicitMediaSettingsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { content: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx");

export default function ExplicitMediaSettingsActionSheet(options) {
  let TableRadioGroup;
  let obj3;
  let subtitle;
  let title;
  options = options.options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const tmp = closure_7();
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    const found = options.find((value) => value.value === closure_0);
    if (null != found) {
      found.onPress();
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }, items);
  BottomSheet = options(6571).BottomSheet;
  const items1 = [closure_5(options(6570).BottomSheetTitleHeader, { title, subtitle }), ];
  let obj = { style: tmp.content, children: closure_5(TableRadioGroup, obj3) };
  TableRadioGroup = options(5997).TableRadioGroup;
  const tmp3 = closure_6;
  const tmp4 = options;
  const tmp7 = View;
  if (SHOW == null) {
    SHOW = tmp4(1186).ExplicitContentRedaction.SHOW;
  }
  let obj2 = { startExpanded: true, children: items1 };
  obj3 = {
    defaultValue: SHOW,
    onChange: callback,
    hasIcons: false,
    children: options.map((label) => {
      const obj = { label: label.label, value: label.value };
      return closure_1_5(options(dependencyMap[10]).TableRadioRow, obj, label.value);
    })
  };
  items1[1] = closure_5(tmp7, obj);
  return tmp3(BottomSheet, obj2);
};
