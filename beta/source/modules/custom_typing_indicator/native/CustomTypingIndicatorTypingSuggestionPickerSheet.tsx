// Module ID: 15620
// Function ID: 15621
// Name: CustomTypingIndicatorTypingSuggestionPickerSheet
// Dependencies: [32, 19, 21, 4758, 580, 558, 568, 7396, 1119, 3684, 12103, 5900, 5901, 7449, 2]

// Module 15620 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import nativeDefault from "native" /* 580 */;
import _modDef3684 from "module_3684" /* 3684 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onChange) => {
  const cResult = onChange(568).c(11);
  onChange = onChange.onChange;
  const tmp4 = closure_6();
  let obj = onChange(568);
  [tmp6, importDefault] = noop.useState(onChange.initialValue);
  if (cResult[0] !== onChange) {
    const fn = function c(arg0) {
      importDefault(arg0);
      onChange(arg0);
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    let intl = tmp(1119).intl;
    obj2.title = intl.string(_modDef3684["X+ijyw"]);
    const tmp12 = jsx(tmp(7396).BottomSheetTitleHeader, { title: null });
    const intl2 = tmp(1119).intl;
    const stringResult = intl2.string(_modDef3684.hrl2cG);
    cResult[2] = tmp12;
    cResult[3] = stringResult;
    let tmp9 = stringResult;
    let tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const customTypingIndicatorSuggestionPresets = tmp(12103).getCustomTypingIndicatorSuggestionPresets();
    const mapped = customTypingIndicatorSuggestionPresets.map((value) => {
      const obj = { value, label: null };
      const intl = onChange(1119).intl;
      obj.label = intl.string(onChange(12103).getCustomTypingIndicatorSuggestionMessage(value));
      return jsx(onChange(5900).TableRadioRow, { value, label: null }, value);
    });
    cResult[4] = mapped;
    let tmp14 = mapped;
    const tmpResult = tmp(12103);
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === tmp7) {
    if (cResult[6] === tmp6) {
      let tmp16 = cResult[7];
    }
    if (cResult[8] === tmp4.content) {
      if (cResult[9] === tmp16) {
        let tmp18 = cResult[10];
      }
      return tmp18;
    }
    const obj3 = { contentStyles: tmp4.content, header: tmp8, dismissAccessibilityLabel: tmp9, children: tmp16 };
    const tmp20 = jsx(tmp(7449).ActionSheet, { contentStyles: tmp4.content, header: tmp8, dismissAccessibilityLabel: tmp9, children: tmp16 });
    cResult[8] = tmp4.content;
    cResult[9] = tmp16;
    cResult[10] = tmp20;
    tmp18 = tmp20;
  }
  const tmp17 = jsx(onChange(5901).TableRadioGroup, { value: tmp6, onChange: tmp7, hasIcons: false, children: tmp14 });
  cResult[5] = tmp7;
  cResult[6] = tmp6;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : ((onChange) => {
  onChange = onChange.onChange;
  const tmp2 = _slicedToArray(noop.useState(onChange.initialValue), 2);
  importDefault = tmp2[1];
  let obj = { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null };
  const obj2 = { title: null };
  let intl = onChange(1119).intl;
  obj2.title = intl.string(_modDef3684["X+ijyw"]);
  obj.header = jsx(onChange(7396).BottomSheetTitleHeader, { title: null });
  const intl2 = onChange(1119).intl;
  obj.dismissAccessibilityLabel = intl2.string(_modDef3684.hrl2cG);
  const obj3 = {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  };
  const tmp = closure_6();
  const customTypingIndicatorSuggestionPresets = onChange(12103).getCustomTypingIndicatorSuggestionPresets();
  obj3.children = customTypingIndicatorSuggestionPresets.map((value) => {
    const obj = { value, label: null };
    const intl = onChange(1119).intl;
    obj.label = intl.string(onChange(12103).getCustomTypingIndicatorSuggestionMessage(value));
    return jsx(onChange(5900).TableRadioRow, { value, label: null }, value);
  });
  obj.children = jsx(onChange(5901).TableRadioGroup, {
    value: tmp2[0],
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: null
  });
  return jsx(onChange(7449).ActionSheet, { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null });
});
