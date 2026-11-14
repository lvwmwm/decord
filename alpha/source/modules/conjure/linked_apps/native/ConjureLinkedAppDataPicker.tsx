// Module ID: 13744
// Function ID: 13745
// Name: ConjureLinkedAppDataPicker
// Dependencies: [32, 19, 17, 21, 5306, 575, 6337, 13252, 5929, 5936, 1113, 4131, 7745, 7747, 2]
// Exports: default

// Module 13744 (ConjureLinkedAppDataPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import TableRadioRow from "TableRadioRow" /* 7747 */;
import ConjureLinkedAppHeaderDefault from "ConjureLinkedAppHeader" /* 13252 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp8;
const _modDef4131 = tmp8(4131);
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { sentence: obj2, choices: obj3 };
obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppDataPicker.tsx");

export default function ConjureLinkedAppDataPicker(arg0) {
  let TableRadioGroup;
  let _undefined;
  let c1;
  let disabled;
  let intl;
  let items;
  let items1;
  let link;
  let obj15;
  let options;
  let sentence;
  let tmp3;
  ({ link, disabled } = arg0);
  importDefault = undefined;
  const tmp = closure_8();
  [tmp3, c1] = react.useState(false);
  ({ sentence, options } = link.data);
  let obj = { spacing: nativeDefault.space.PX_4, children: items };
  _slicedToArray(react.useState(false), 2);
  const Stack = disabled(6337).Stack;
  items = [, , , ];
  const obj2 = { caller: link.sides.caller, target: link.sides.target, callerProject: link.callerProject, targetProject: link.targetProject, flow: link.flow };
  items[0] = closure_6(ConjureLinkedAppHeaderDefault, obj2);
  let tmp9Result = null;
  if (null != link.purpose) {
    const obj3 = { variant: "body-sm/normal", color: "text-default", lineClamp: 1, children: link.purpose };
    tmp9Result = tmp9(tmp6(5929).Text, obj3);
  }
  items[1] = tmp9Result;
  let tmp5Result = null;
  if (null != sentence) {
    const obj4 = { style: tmp.sentence, children: items1 };
    const obj5 = { variant: "body-sm/normal", color: "text-subtle", children: sentence };
    items1 = [closure_6(disabled(5929).Text, obj5), ];
    let tmp9Result3 = null;
    const tmp12 = View;
    if (options.length > 1) {
      tmp9Result3 = null;
      if (!tmp3) {
        const obj6 = {
          variant: "tertiary",
          size: "sm",
          text: intl.string(_modDef4131.I5F6YX),
          disabled,
          onPress() {
                  return _undefined(true);
                }
        };
        const Button = tmp6(5936).Button;
        intl = tmp6(1113).intl;
        tmp9Result3 = tmp9(Button, obj6);
      }
    }
    items1[1] = tmp9Result3;
    tmp5Result = tmp5(tmp12, obj4);
  }
  items[2] = tmp5Result;
  let tmp9Result4 = null;
  if (tmp3) {
    tmp9Result4 = null;
    if (options.length > 1) {
      const obj7 = { style: tmp.choices, children: closure_6(TableRadioGroup, obj15) };
      ({ aria: obj8.accessibilityLabel, value: obj8.value, onChange: obj8.onChange } = link);
      obj15 = {
        hasIcons: false,
        accessibilityLabel: null,
        value: null,
        onChange: null,
        children: options.map((build) => {
              const obj = { value: build.build, label: build.label, disabled };
              return metroRequire(TableRadioRow.TableRadioRow, obj, build.build);
            })
      };
      TableRadioGroup = tmp6(7745).TableRadioGroup;
      tmp9Result4 = tmp9(View, obj7);
    }
  }
  items[3] = tmp9Result4;
  return closure_7(Stack, obj);
};
