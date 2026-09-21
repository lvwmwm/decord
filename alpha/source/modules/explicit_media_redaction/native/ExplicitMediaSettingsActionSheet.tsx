// Module ID: 15100
// Function ID: 15101
// Name: ExplicitMediaSettingsActionSheet
// Dependencies: [19, 17, 21, 4756, 576, 4723, 7395, 7394, 5902, 1186, 5905, 2]
// Exports: default

// Module 15100 (ExplicitMediaSettingsActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { content: { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx");

export default function ExplicitMediaSettingsActionSheet(options) {
  options = options.options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    const found = options.find((value) => value.value === closure_0);
    if (null != found) {
      found.onPress();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items);
  const items1 = [closure_5(options(7394).BottomSheetTitleHeader, { title, subtitle }), ];
  const obj = { style: closure_7().content, children: null };
  if (SHOW == null) {
    SHOW = tmp4(1186).ExplicitContentRedaction.SHOW;
  }
  let obj2 = { startExpanded: true, children: null };
  const tmp = closure_7();
  const tmp3 = closure_6;
  tmp4 = options;
  const tmp7 = View;
  obj.children = closure_5(options(5902).TableRadioGroup, { defaultValue: SHOW, onChange: callback, hasIcons: false, children: options.map((label) => closure_1_5(options(dependencyMap[10]).TableRadioRow, { label: label.label, value: label.value }, label.value)) });
  items1[1] = closure_5(tmp7, obj);
  obj2.children = items1;
  return tmp3(options(7395).BottomSheet, obj2);
};
