// Module ID: 16948
// Function ID: 16949
// Name: VibegrationsEffortPicker
// Dependencies: [109, 32, 19, 17, 21, 558, 568, 16944, 1119, 3682, 5900, 16945, 5901, 4754, 5903, 5822, 7446, 5186, 580, 7396, 7449, 2]
// Exports: describeVibegrationsEffort

// Module 16948 (VibegrationsEffortPicker)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef3682 from "module_3682" /* 3682 */;
import TableRadioRow from "TableRadioRow" /* 5900 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import ActionSheet from "ActionSheet" /* 7449 */;
import VibegrationsEffortPresets from "VibegrationsEffortPresets" /* 16944 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16945 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["fast"];
let closure_4 = ["fast"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((settings) => {
  const cResult = settings(disabled[6]).c(44);
  settings = settings.settings;
  const choices = settings.choices;
  disabled = settings.disabled;
  const onChange = settings.onChange;
  const hideTitle = settings.hideTitle;
  let obj = settings(disabled[6]);
  const tmp4 = undefined !== hideTitle && hideTitle;
  [r10022, closure_4] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      return closure_1_4((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const result = settings(disabled[7]).matchVibegrationsEffortPreset(settings, choices.main);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[8]).intl;
    const stringResult = intl.string(choices(tmp2[9]).GDs9Vq);
    cResult[1] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[8]).intl;
    const stringResult1 = intl2.string(choices(tmp2[9])["9FRudW"]);
    cResult[2] = stringResult1;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[8]).intl;
    const stringResult2 = intl3.string(choices(tmp2[9])["4AsQHS"]);
    cResult[3] = stringResult2;
  }
  if (cResult[4] !== choices.main) {
    class A {
      constructor(arg0) {
        closure_0 = settings;
        main = choices.main;
        found = main.find((id) => id.id === closure_0);
        label = undefined;
        if (found != null) {
          label = found.label;
        }
        if (label == null) {
          label = settings;
        }
        return label;
      }
    }
    cResult[4] = choices.main;
    cResult[5] = A;
  } else {
    class A {
      constructor(arg0) {
        closure_0 = settings;
        main = choices.main;
        found = main.find((id) => id.id === closure_0);
        label = undefined;
        if (found != null) {
          label = found.label;
        }
        if (label == null) {
          label = settings;
        }
        return label;
      }
    }
  }
  _objectWithoutProperties = tmp17;
  if (cResult[6] !== choices.main) {
    class A {
      constructor(arg0) {
        closure_0 = settings;
        main = choices.main;
        found = main.find((id) => id.id === closure_0);
        label = undefined;
        if (found != null) {
          label = found.label;
        }
        if (label == null) {
          label = settings;
        }
        return label;
      }
    }
    cResult[6] = choices.main;
    cResult[7] = tmp19;
  } else {
    class A {
      constructor(arg0) {
        closure_0 = settings;
        main = choices.main;
        found = main.find((id) => id.id === closure_0);
        label = undefined;
        if (found != null) {
          label = found.label;
        }
        if (label == null) {
          label = settings;
        }
        return label;
      }
    }
  }
  _slicedToArray = tmp18;
  if (cResult[8] === onChange) {
    class A {
      constructor(arg0) {
        closure_0 = settings;
        main = choices.main;
        found = main.find((id) => id.id === closure_0);
        label = undefined;
        if (found != null) {
          label = found.label;
        }
        if (label == null) {
          label = settings;
        }
        return label;
      }
    }
    noop = tmp20;
    let str = "";
    if (result >= 0) {
      class A {
        constructor(arg0) {
          closure_0 = settings;
          main = choices.main;
          found = main.find((id) => id.id === closure_0);
          label = undefined;
          if (found != null) {
            label = found.label;
          }
          if (label == null) {
            label = settings;
          }
          return label;
        }
      }
      str = String(result);
    }
    if (cResult[11] !== tmp20) {
      class D {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[7]).VIBEGRATIONS_EFFORT_PRESETS[Number(undefined, settings)];
          if (null != tmp3) {
            tmp4 = closure_7;
            tmpResult = tmp(tmp2[7]);
            tmp5 = closure_7(tmpResult.vibegrationsPresetTier(tmp3));
          }
          return;
        }
      }
      cResult[11] = tmp20;
      cResult[12] = D;
    } else {
      class D {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[7]).VIBEGRATIONS_EFFORT_PRESETS[Number(undefined, settings)];
          if (null != tmp3) {
            tmp4 = closure_7;
            tmpResult = tmp(tmp2[7]);
            tmp5 = closure_7(tmpResult.vibegrationsPresetTier(tmp3));
          }
          return;
        }
      }
    }
    if (!tmp4) {
      class D {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[7]).VIBEGRATIONS_EFFORT_PRESETS[Number(undefined, settings)];
          if (null != tmp3) {
            tmp4 = closure_7;
            tmpResult = tmp(tmp2[7]);
            tmp5 = closure_7(tmpResult.vibegrationsPresetTier(tmp3));
          }
          return;
        }
      }
    }
    if (cResult[13] === disabled) {
      class D {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[7]).VIBEGRATIONS_EFFORT_PRESETS[Number(undefined, settings)];
          if (null != tmp3) {
            tmp4 = closure_7;
            tmpResult = tmp(tmp2[7]);
            tmp5 = closure_7(tmpResult.vibegrationsPresetTier(tmp3));
          }
          return;
        }
      }
      if (cResult[16] === tmp21) {
        class D {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            tmp3 = closure_0(closure_2[7]).VIBEGRATIONS_EFFORT_PRESETS[Number(undefined, settings)];
            if (null != tmp3) {
              tmp4 = closure_7;
              tmpResult = tmp(tmp2[7]);
              tmp5 = closure_7(tmpResult.vibegrationsPresetTier(tmp3));
            }
            return;
          }
        }
      }
      let obj2 = { hasIcons: false, value: str, onChange: tmp21, title: tmp22, accessibilityLabel: tmp8, children: tmp23 };
      const tmp27 = closure_9(tmp(tmp2[12]).TableRadioGroup, obj2);
      cResult[16] = tmp21;
      cResult[17] = tmp22;
      cResult[18] = tmp23;
      cResult[19] = str;
      cResult[20] = tmp27;
    }
    const prop = tmp(tmp2[7]).VIBEGRATIONS_EFFORT_PRESETS;
    const mapped = prop.map((summary, index) => {
      const obj = { label: summary.summary(), subLabel: null, value: null, disabled: null };
      let thinking = VibegrationsModelLabels.THINKING_LABELS[summary.thinking];
      if (thinking == null) {
        thinking = summary.thinking;
      }
      obj.subLabel = "" + A(summary.model) + " \u00B7 " + thinking;
      obj.value = String(index);
      obj.disabled = disabled;
      return options(TableRadioRow.TableRadioRow, obj, index);
    });
    cResult[13] = disabled;
    cResult[14] = tmp17;
    cResult[15] = mapped;
  }
  class B {
    constructor(arg0) {
      tmp = closure_5(settings, closure_3);
      tmp2 = onChange;
      obj = closure_0(closure_2[7]);
      tmp3 = tmp;
      if (true === settings.fast) {
        tmp4 = closure_6;
        tmp3 = tmp;
        if (closure_6(settings.model)) {
          obj1 = {};
          tmp5 = obj1;
          tmp6 = tmp;
          merged = Object.assign(tmp);
          obj1.fast = true;
          tmp3 = obj1;
        }
      }
      tmp2Result = tmp2(obj.vibegrationsSettingsForTier(tmp3));
      return;
    }
  }
  cResult[8] = onChange;
  cResult[9] = tmp18;
  cResult[10] = B;
}) : ((settings) => {
  settings = settings.settings;
  let model = settings;
  const choices = settings.choices;
  const disabled = settings.disabled;
  ({ onChange: closure_3, hideTitle } = settings);
  if (hideTitle === undefined) {
    hideTitle = false;
  }
  c4 = undefined;
  [tmp2, c4] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const tmp = _slicedToArray(noop.useState(false), 2);
  let result = model(disabled[7]).matchVibegrationsEffortPreset(settings, choices.main);
  const intl = model(disabled[8]).intl;
  const stringResult = intl.string(choices(disabled[9]).GDs9Vq);
  const intl2 = model(disabled[8]).intl;
  const stringResult1 = intl2.string(choices(disabled[9])["9FRudW"]);
  const intl3 = model(disabled[8]).intl;
  const stringResult2 = intl3.string(choices(disabled[9])["4AsQHS"]);
  const obj2 = { direction: "vertical", spacing: choices(disabled[18]).space.PX_16, children: null };
  let str = "";
  if (result >= 0) {
    const _String = String;
    str = String(result);
  }
  let obj3 = {
    hasIcons: false,
    value: str,
    onChange(arg0) {
      const tmp3 = VibegrationsEffortPresets.VIBEGRATIONS_EFFORT_PRESETS[Number(undefined, arg0)];
      if (null != tmp3) {
        const result = tmp(16944).vibegrationsPresetTier(tmp3);
        const tmp15 = _objectWithoutProperties(result, closure_4);
        const tmp16 = closure_1_3;
        const tmpResult = tmp(16944);
        let tmp7 = tmp15;
        if (true === result.fast) {
          model = result.model;
          const main = choices.main;
          const found = main.find((id) => id.id === model);
          let supports_fast;
          if (found != null) {
            supports_fast = found.supports_fast;
          }
          tmp7 = tmp15;
          if (true === supports_fast) {
            const obj = {};
            const merged = Object.assign(tmp15);
            obj.fast = true;
            tmp7 = obj;
          }
        }
        tmp16(tmp(16944).vibegrationsSettingsForTier(tmp7));
        const tmpResult2 = tmp(16944);
      }
    },
    title: null,
    accessibilityLabel: null,
    children: null
  };
  let tmp14;
  if (!hideTitle) {
    tmp14 = stringResult;
  }
  obj3.title = tmp14;
  obj3.accessibilityLabel = stringResult;
  const prop = tmp4(tmp5[7]).VIBEGRATIONS_EFFORT_PRESETS;
  obj3.children = prop.map((summary, index) => {
    const obj = { label: summary.summary(), subLabel: null, value: null, disabled: null };
    model = summary.model;
    const main = choices.main;
    const found = main.find((id) => id.id === model);
    let label;
    if (found != null) {
      label = found.label;
    }
    if (label == null) {
      label = model;
    }
    let thinking = VibegrationsModelLabels.THINKING_LABELS[summary.thinking];
    if (thinking == null) {
      thinking = summary.thinking;
    }
    obj.subLabel = "" + label + " \u00B7 " + thinking;
    obj.value = String(index);
    obj.disabled = disabled;
    return options(TableRadioRow.TableRadioRow, obj, index);
  });
  const items = [closure_9(model(disabled[12]).TableRadioGroup, obj3), , , ];
  let tmp12Result = null;
  if (result < 0) {
    const obj4 = { variant: "text-xs/normal", color: "text-muted", children: tmp4(tmp5[7]).describeVibegrationsModelSettings(settings, choices.main) };
    tmp12Result = tmp12(tmp4(tmp5[13]).Text, obj4);
    const tmp4Result = tmp4(tmp5[7]);
  }
  items[1] = tmp12Result;
  const obj5 = { hasIcons: false, children: null };
  const obj6 = { label: null, arrow: null, accessibilityState: null, onPress: null };
  const intl4 = tmp4(tmp5[8]).intl;
  obj6.label = intl4.string(choices(disabled[9]).IaLFoX);
  obj6.arrow = !tmp2;
  obj6.accessibilityState = { expanded: tmp2 };
  obj6.onPress = callback;
  obj5.children = closure_9(model(disabled[15]).TableRow, obj6);
  items[2] = closure_9(model(disabled[14]).TableRowGroup, obj5);
  let tmp11Result = null;
  if (tmp2) {
    const obj7 = {
      hasIcons: false,
      value: settings.main.model,
      onChange(model) {
          const obj = {};
          const merged = Object.assign(model.main);
          obj.model = model;
          const tmp2 = _objectWithoutProperties(obj, closure_4);
          let tmp4 = tmp2;
          if (true === obj.fast) {
            model = obj.model;
            const main = choices.main;
            const found = main.find((id) => id.id === model);
            let supports_fast;
            if (found != null) {
              supports_fast = found.supports_fast;
            }
            tmp4 = tmp2;
            if (true === supports_fast) {
              const obj3 = {};
              const merged1 = Object.assign(tmp2);
              obj3.fast = true;
              tmp4 = obj3;
            }
          }
          closure_1_3(VibegrationsEffortPresets.vibegrationsSettingsForTier(tmp4));
        },
      title: stringResult1,
      accessibilityLabel: stringResult1,
      children: null
    };
    let main = choices.main;
    obj7.children = main.map((label) => options(TableRadioRow.TableRadioRow, { label: label.label, subLabel: VibegrationsModelLabels.PROVIDER_LABELS[label.provider], value: label.id, disabled }, label.id));
    const items1 = [tmp12(tmp4(tmp5[12]).TableRadioGroup, obj7), , ];
    const obj8 = {
      hasIcons: false,
      value: settings.main.thinking,
      onChange(thinking) {
          const obj = {};
          const merged = Object.assign(model.main);
          obj.thinking = thinking;
          const tmp2 = _objectWithoutProperties(obj, closure_4);
          let tmp4 = tmp2;
          if (true === obj.fast) {
            model = obj.model;
            const main = choices.main;
            const found = main.find((id) => id.id === model);
            let supports_fast;
            if (found != null) {
              supports_fast = found.supports_fast;
            }
            tmp4 = tmp2;
            if (true === supports_fast) {
              const obj3 = {};
              const merged1 = Object.assign(tmp2);
              obj3.fast = true;
              tmp4 = obj3;
            }
          }
          closure_1_3(VibegrationsEffortPresets.vibegrationsSettingsForTier(tmp4));
        },
      title: stringResult2,
      accessibilityLabel: stringResult2,
      children: null
    };
    let thinking = choices.thinking;
    obj8.children = thinking.map((value) => {
      let tmp2 = VibegrationsModelLabels.THINKING_LABELS[value];
      if (tmp2 == null) {
        tmp2 = value;
      }
      return options(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
    });
    items1[1] = tmp12(tmp4(tmp5[12]).TableRadioGroup, obj8);
    model = settings.main.model;
    const main1 = choices.main;
    let found = main1.find((id) => id.id === model);
    let supports_fast;
    if (found != null) {
      supports_fast = found.supports_fast;
    }
    let tmp12Result2 = null;
    if (true === supports_fast) {
      const obj9 = { hasIcons: false, children: null };
      const obj10 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
      const intl5 = tmp4(tmp5[8]).intl;
      obj10.label = intl5.string(tmp7(tmp5[9]).SYLSgx);
      const intl6 = tmp4(tmp5[8]).intl;
      obj10.subLabel = intl6.string(tmp7(tmp5[9]).HITWAI);
      obj10.value = true === settings.main.fast;
      obj10.disabled = disabled;
      obj10.onValueChange = function onValueChange(fast) {
        const obj = {};
        const merged = Object.assign(model.main);
        obj.fast = fast;
        const tmp2 = _objectWithoutProperties(obj, closure_4);
        let tmp4 = tmp2;
        if (true === obj.fast) {
          model = obj.model;
          const main = choices.main;
          const found = main.find((id) => id.id === model);
          let supports_fast;
          if (found != null) {
            supports_fast = found.supports_fast;
          }
          tmp4 = tmp2;
          if (true === supports_fast) {
            const obj3 = {};
            const merged1 = Object.assign(tmp2);
            obj3.fast = true;
            tmp4 = obj3;
          }
        }
        closure_1_3(VibegrationsEffortPresets.vibegrationsSettingsForTier(tmp4));
      };
      obj9.children = tmp12(tmp4(tmp5[16]).TableSwitchRow, obj10);
      tmp12Result2 = tmp12(tmp4(tmp5[14]).TableRowGroup, obj9);
    }
    const obj11 = { children: null };
    items1[2] = tmp12Result2;
    obj11.children = items1;
    tmp11Result = tmp11(closure_10, obj11);
  }
  items[3] = tmp11Result;
  obj2.children = items;
  return closure_11(model(disabled[17]).Stack, obj2);
});
let closure_12 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsEffortPicker.tsx");

export default tmp3;
export const describeVibegrationsEffort = function describeVibegrationsEffort(first1, landingModelChoicesResult) {
  const result = VibegrationsEffortPresets.matchVibegrationsEffortPreset(first1, landingModelChoicesResult.main);
  const obj2 = VibegrationsEffortPresets.VIBEGRATIONS_EFFORT_PRESETS[result];
  if (null != obj2) {
    let summaryResult = obj2.summary();
  } else {
    summaryResult = VibegrationsEffortPresets.describeVibegrationsModelSettings(first1, landingModelChoicesResult.main);
    const tmpResult = VibegrationsEffortPresets;
  }
  return summaryResult;
};
export const VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY = "VibegrationsEffortPickerSheet";
export const VibegrationsEffortPickerSheet = ReactCompilerGating.isReactCompilerEnabled() ? ((initialSettings) => {
  const cResult = c.c(7);
  ({ choices, onChange } = initialSettings);
  [tmp5, importDefault] = noop.useState(initialSettings.initialSettings);
  if (cResult[0] !== onChange) {
    const fn = function t(arg0) {
      importDefault(arg0);
      onChange(arg0);
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = tmp(1119).intl;
    obj2.title = intl.string(_modDef3682.GDs9Vq);
    const tmp10 = options(tmp(7396).BottomSheetTitleHeader, obj2);
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === choices) {
    if (cResult[4] === tmp6) {
      if (cResult[5] === tmp5) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const obj3 = { header: tmp7, children: null };
  const tmp4 = _slicedToArray(noop.useState(initialSettings.initialSettings), 2);
  obj3.children = options(View, { children: options(closure_12, { settings: tmp5, choices, disabled: false, onChange: tmp6, hideTitle: true }) });
  const tmp12 = options(ActionSheet.ActionSheet, obj3);
  cResult[3] = choices;
  cResult[4] = tmp6;
  cResult[5] = tmp5;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((choices) => {
  const onChange = choices.onChange;
  const tmp = _slicedToArray(noop.useState(choices.initialSettings), 2);
  closure_1 = tmp[1];
  const items = [onChange];
  const callback = noop.useCallback((arg0) => {
    closure_1(arg0);
    onChange(arg0);
  }, items);
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3682.GDs9Vq);
  obj.header = options(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = options(View, { children: options(closure_12, { settings: tmp[0], choices: choices.choices, disabled: false, onChange: callback, hideTitle: true }) });
  return options(ActionSheet.ActionSheet, obj);
});
