// Module ID: 15089
// Function ID: 15090
// Name: ExplicitMediaSettingsActionSheet
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 4725, 7396, 1190, 5900, 5901, 7397, 2]

// Module 15089 (ExplicitMediaSettingsActionSheet)
import nativeDefault from "native" /* 580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let obj2 = { content: { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((currentValue) => {
  const cResult = options(568).c(18);
  ({ title, subtitle, options } = currentValue);
  let SHOW = currentValue.currentValue;
  const obj = options(568);
  if (cResult[0] !== options) {
    const fn = function n(arg0) {
      closure_0 = arg0;
      const found = options.find((value) => value.value === closure_0);
      if (null != found) {
        found.onPress();
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    };
    cResult[0] = options;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === subtitle) {
    const content = tmp4.content;
    if (SHOW == null) {
      SHOW = tmp(1190).ExplicitContentRedaction.SHOW;
    }
    if (cResult[5] !== options) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            obj = { label: currentValue.label, value: currentValue.value };
            return closure_1_5(options(closure_1_2[10]).TableRadioRow, obj, currentValue.value);
          }
        }
        cResult[7] = R;
        const tmp11 = R;
      } else {
        class R {
          constructor(arg0) {
            obj = { label: currentValue.label, value: currentValue.value };
            return closure_1_5(options(closure_1_2[10]).TableRadioRow, obj, currentValue.value);
          }
        }
      }
      const mapped = options.map(tmp11);
      cResult[5] = options;
      cResult[6] = mapped;
    } else {
      class R {
        constructor(arg0) {
          obj = { label: currentValue.label, value: currentValue.value };
          return closure_1_5(options(closure_1_2[10]).TableRadioRow, obj, currentValue.value);
        }
      }
      if (cResult[8] === tmp5) {
        class R {
          constructor(arg0) {
            obj = { label: currentValue.label, value: currentValue.value };
            return closure_1_5(options(closure_1_2[10]).TableRadioRow, obj, currentValue.value);
          }
        }
      }
      let obj2 = { defaultValue: SHOW, onChange: tmp5, hasIcons: false, children: tmp9 };
      const tmp16 = closure_5(tmp(5901).TableRadioGroup, obj2);
      cResult[8] = tmp5;
      cResult[9] = SHOW;
      cResult[10] = tmp9;
      cResult[11] = tmp16;
    }
  }
  tmp4 = closure_7();
  cResult[2] = subtitle;
  cResult[3] = title;
  cResult[4] = closure_5(options(7396).BottomSheetTitleHeader, { title, subtitle });
}) : ((options) => {
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
  const items1 = [closure_5(options(7396).BottomSheetTitleHeader, { title, subtitle }), ];
  const obj = { style: closure_7().content, children: null };
  if (SHOW == null) {
    SHOW = tmp4(1190).ExplicitContentRedaction.SHOW;
  }
  let obj2 = { startExpanded: true, children: null };
  const tmp = closure_7();
  const tmp3 = closure_6;
  tmp4 = options;
  const tmp7 = View;
  obj.children = closure_5(options(5901).TableRadioGroup, { defaultValue: SHOW, onChange: callback, hasIcons: false, children: options.map((label) => closure_1_5(options(dependencyMap[10]).TableRadioRow, { label: label.label, value: label.value }, label.value)) });
  items1[1] = closure_5(tmp7, obj);
  obj2.children = items1;
  return tmp3(options(7397).BottomSheet, obj2);
});
