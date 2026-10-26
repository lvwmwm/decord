// Module ID: 12257
// Function ID: 12258
// Name: ConjurePublishDestinationSheet
// Dependencies: [32, 19, 17, 21, 4971, 587, 558, 576, 1128, 3830, 5210, 7248, 6984, 6985, 5244, 7298, 2]
// Exports: default

// Module 12257 (ConjurePublishDestinationSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1128 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import TableRadioRow from "TableRadioRow" /* 6984 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6985 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7248 */;
import ActionSheet2 from "ActionSheet" /* 7298 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ConjurePublishDestinationSheet = "ConjurePublishDestinationSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishDestinationSheet(arg0) {
  let closure_2;
  let first1;
  let items;
  let onDone;
  let options;
  let tmp11;
  let tmp7;
  let value;
  let obj = onDone(576);
  const cResult = obj.c(27);
  ({ options, onDone } = arg0);
  const tmp4 = closure_9();
  [value, tmp7] = react.useState(options.selected_destination_id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(value(3830).lJrOGW);
    cResult[0] = stringResult;
    first1 = stringResult;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== onDone) {
    function finish(arg0) {
      onDone(arg0);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePublishDestinationSheet);
    }
    cResult[1] = onDone;
    cResult[2] = finish;
    tmp11 = finish;
  } else {
    tmp11 = cResult[2];
  }
  dependencyMap = tmp11;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: first1 };
    cResult[3] = closure_6(onDone(7248).BottomSheetTitleHeader, obj2);
    const tmp14 = closure_6(onDone(7248).BottomSheetTitleHeader, obj2);
  }
  if (cResult[4] !== onDone) {
    const fn = function w() {
      return onDone(null);
    };
    cResult[4] = onDone;
    cResult[5] = fn;
  }
  const content = tmp4.content;
  if (cResult[6] !== options.destinations) {
    let tmp17;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(label) {
          const id = label.id;
          return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
        }
      }
      cResult[8] = T;
      tmp17 = T;
    } else {
      class T {
        constructor(label) {
          const id = label.id;
          return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
        }
      }
    }
    const destinations = options.destinations;
    const mapped = destinations.map(tmp17);
    cResult[6] = options.destinations;
    cResult[7] = mapped;
  } else {
    class T {
      constructor(label) {
        const id = label.id;
        return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
      }
    }
  }
  if (cResult[9] === value) {
    let tmp21;
    class T {
      constructor(label) {
        const id = label.id;
        return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(label) {
          const id = label.id;
          return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
        }
      }
      const stringResult1 = obj3.string(value(3830).zh1Izp);
      cResult[12] = stringResult1;
      tmp21 = stringResult1;
    } else {
      class T {
        constructor(label) {
          const id = label.id;
          return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
        }
      }
    }
    if (cResult[13] === value) {
      let tmp27;
      class T {
        constructor(label) {
          const id = label.id;
          return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(label) {
            const id = label.id;
            return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
          }
        }
        const stringResult2 = obj5.string(value(3830).y83r6D);
        cResult[16] = stringResult2;
        tmp27 = stringResult2;
      } else {
        class T {
          constructor(label) {
            const id = label.id;
            return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
          }
        }
      }
      if (cResult[17] !== tmp11) {
        class T {
          constructor(label) {
            const id = label.id;
            return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
          }
        }
        const obj4 = {
          variant: "secondary",
          text: tmp27,
          onPress() {
                  return closure_2(null);
                }
        };
        cResult[17] = tmp11;
        cResult[18] = closure_6(onDone(5244).Button, obj4);
        const tmp31 = closure_6(onDone(5244).Button, obj4);
      } else {
        class T {
          constructor(label) {
            const id = label.id;
            return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
          }
        }
      }
      if (cResult[19] === tmp4.content) {
        class T {
          constructor(label) {
            const id = label.id;
            return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value: id, label: label.label }, id);
          }
        }
      }
      const obj6 = { style: content, children: items };
      items = [tmp19, tmp24, tmp30];
      cResult[19] = tmp4.content;
      cResult[20] = tmp30;
      cResult[21] = tmp19;
      cResult[22] = tmp24;
      cResult[23] = closure_7(View, obj6);
      const tmp35 = closure_7(View, obj6);
    }
    const obj7 = {
      variant: "primary",
      text: tmp21,
      onPress() {
          return closure_2(first);
        }
    };
    cResult[13] = value;
    cResult[14] = tmp11;
    cResult[15] = closure_6(onDone(5244).Button, obj7);
    const tmp26 = closure_6(onDone(5244).Button, obj7);
  }
  cResult[9] = value;
  cResult[10] = tmp16;
  cResult[11] = closure_6(onDone(6985).TableRadioGroup, { hasIcons: false, value, onChange: tmp7, accessibilityLabel: first1, children: tmp16 });
  const tmp20 = closure_6(onDone(6985).TableRadioGroup, { hasIcons: false, value, onChange: tmp7, accessibilityLabel: first1, children: tmp16 });
}) : (function PublishDestinationSheet(arg0) {
  let destinations;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let options;
  let tmp4;
  let value;
  ({ options, onDone: require } = arg0);
  value = undefined;
  const tmp = closure_9();
  [value, tmp4] = react.useState(options.selected_destination_id);
  const intl = intl4.intl;
  const stringResult = intl.string(value(3830).lJrOGW);
  let obj = {
    header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }),
    onDismiss() {
      return require(null);
    },
    children: closure_7(View, obj2)
  };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { style: tmp.content, children: items };
  const obj3 = {
    hasIcons: false,
    value,
    onChange: tmp4,
    accessibilityLabel: stringResult,
    children: destinations.map((label) => {
      const id = label.id;
      return closure_1_6(TableRadioRow.TableRadioRow, { value: id, label: label.label }, id);
    })
  };
  destinations = options.destinations;
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  items = [closure_6(TableRadioGroup, obj3), , ];
  const obj4 = {
    variant: "primary",
    text: intl2.string(value(3830).zh1Izp),
    onPress() {
      require(first);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePublishDestinationSheet);
    }
  };
  const Button = components_Button_Button.Button;
  intl2 = intl4.intl;
  items[1] = closure_6(Button, obj4);
  const obj5 = {
    variant: "secondary",
    text: intl3.string(value(3830).y83r6D),
    onPress() {
      require(null);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePublishDestinationSheet);
    }
  };
  const Button2 = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = closure_6(Button2, obj5);
  return closure_6(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishDestinationSheet.tsx");

export default function showConjurePublishDestinationSheet(options) {
  const promise = new Promise((onDone) => {
    let obj2;
    const obj = { key: ConjurePublishDestinationSheet, content: metroRequire(closure_10, obj2) };
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    obj2 = { options, onDone };
    ActionSheetActionCreators;
    showActionSheet(obj);
  });
  return promise;
};
