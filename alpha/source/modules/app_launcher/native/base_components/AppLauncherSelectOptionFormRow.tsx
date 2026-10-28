// Module ID: 12120
// Function ID: 12121
// Name: AppLauncherSelectOptionFormRow
// Dependencies: [109, 19, 21, 5004, 587, 558, 576, 12092, 5270, 6948, 8985, 2]

// Module 12120 (AppLauncherSelectOptionFormRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5270 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj2;
let closure_2 = ["option", "selected", "selectedItemName", "unselectedSubLabel", "autoFocus"];
const jsx = Fragment.jsx;
let obj = { formRow: obj2 };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", flex: 1 };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherSelectOptionFormRow(unselectedSubLabel) {
  let children;
  let children2;
  let option;
  let selected;
  let selectedItemName;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = require("react");
  const cResult = obj.c(21);
  if (cResult[0] !== unselectedSubLabel) {
    ({ option, selected, selectedItemName } = unselectedSubLabel);
    _require = selectedItemName;
    unselectedSubLabel = unselectedSubLabel.unselectedSubLabel;
    dependencyMap = unselectedSubLabel;
    const autoFocus = unselectedSubLabel.autoFocus;
    const tmp12 = _objectWithoutProperties(unselectedSubLabel, closure_2);
    cResult[0] = unselectedSubLabel;
    cResult[1] = autoFocus;
    cResult[2] = option;
    cResult[3] = tmp12;
    cResult[4] = selected;
    cResult[5] = selectedItemName;
    cResult[6] = unselectedSubLabel;
    tmp7 = selected;
    tmp6 = tmp12;
    tmp5 = option;
    tmp4 = autoFocus;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    _require = cResult[5];
    dependencyMap = cResult[6];
  }
  const tmp13 = closure_5();
  const onPress = tmp6.onPress;
  const tmpResult = require("useAnimationDelayedAutoFocus");
  const animationDelayedAutoFocus = tmpResult.useAnimationDelayedAutoFocus(tmp4, onPress);
  let str = "text-md/medium";
  if (tmp7) {
    str = "text-sm/medium";
  }
  let str2 = "text-default";
  if (tmp7) {
    str2 = "interactive-text-default";
  }
  if (cResult[7] === tmp5.displayName) {
    if (cResult[8] === str) {
      let tmp15;
      let fn;
      if (cResult[9] === str2) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === tmp7) {
        if (cResult[12] === tmp8) {
          let tmp17;
          let tmp19;
          if (cResult[13] === tmp9) {
            tmp17 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp21 = jsx(require("TableRowArrow").TableRowArrow, {});
            cResult[15] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[15];
          }
          if (cResult[16] === tmp6) {
            if (cResult[17] === tmp13.formRow) {
              if (cResult[18] === tmp15) {
                let tmp22;
                if (cResult[19] === tmp17) {
                  tmp22 = cResult[20];
                }
                return tmp22;
              }
            }
          }
          const FormRow = tmp(8985).FormRow;
          const merged = Object.assign(tmp6);
          const tmp27 = <FormRow start end style={tmp13.formRow} label={tmp15} subLabel={tmp17} trailing={tmp19} />;
          cResult[16] = tmp6;
          cResult[17] = tmp13.formRow;
          cResult[18] = tmp15;
          cResult[19] = tmp17;
          cResult[20] = tmp27;
          tmp22 = tmp27;
        }
      }
      if (tmp7) {
        fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
      } else {
        fn = null;
        if (null != tmp9) {
          fn = () => jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: children2 });
        }
      }
      cResult[11] = tmp7;
      cResult[12] = tmp8;
      cResult[13] = tmp9;
      cResult[14] = fn;
      tmp17 = fn;
    }
  }
  const tmp16 = jsx(require("Text/Text").Text, { variant: str, color: str2, lineClamp: 1, children: tmp5.displayName });
  cResult[7] = tmp5.displayName;
  cResult[8] = str;
  cResult[9] = str2;
  cResult[10] = tmp16;
  tmp15 = tmp16;
}) : (function AppLauncherSelectOptionFormRow(arg0) {
  let autoFocus;
  let children;
  let fn;
  let option;
  let require;
  let selected;
  let unselectedSubLabel;
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ option, autoFocus } = arg0);
  const merged = Object.assign(arg0, Object.assign({ option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }));
  const onPress = merged.onPress;
  const tmp2 = closure_5();
  const obj = require("useAnimationDelayedAutoFocus");
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, onPress);
  const FormRow = require("Form").FormRow;
  let str = "text-md/medium";
  const Text = require("Text/Text").Text;
  if (selected) {
    str = "text-sm/medium";
  }
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  if (selected) {
    fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: require });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: unselectedSubLabel });
    }
  }
  const merged1 = Object.assign(merged);
  return <FormRow start end style={tmp2.formRow} label={null} subLabel={fn} trailing={null} />;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default tmp3;
