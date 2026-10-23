// Module ID: 11820
// Function ID: 11821
// Name: ConjureLinkedAppBuildSheet
// Dependencies: [19, 21, 4969, 587, 558, 576, 1633, 1128, 3830, 7246, 5208, 11815, 6982, 6983, 7292, 5975, 7296, 2]

// Module 11820 (ConjureLinkedAppBuildSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureLinkedAppBuildSheet(sheetKey) {
  let ActionSheetRow;
  let first;
  let intl2;
  let items;
  let obj6;
  let onPick;
  let onRemove;
  let title;
  let tmp8;
  let value;
  let obj = sheetKey(onRemove[5]);
  const cResult = obj.c(20);
  sheetKey = sheetKey.sheetKey;
  ({ title, value, onPick } = sheetKey);
  onRemove = sheetKey.onRemove;
  const tmp5 = closure_5(onPick(onRemove[6])().bottom);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[7]).intl;
    const stringResult = intl.string(onPick(onRemove[8]).Odrcmq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== title) {
    let obj2 = { title };
    const tmp10 = closure_3(sheetKey(onRemove[9]).BottomSheetTitleHeader, obj2);
    cResult[1] = title;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === onPick) {
    let tmp12;
    let tmp13;
    if (cResult[4] === sheetKey) {
      tmp12 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const prop = tmp(tmp2[11]).CONJURE_LINKED_APP_BUILDS;
      const mapped = prop.map((value) => {
        let obj2;
        let obj3;
        const obj = { value, label: obj2.linkedAppBuildLabel(value), subLabel: obj3.linkedAppBuildDescription(value) };
        const TableRadioRow = sheetKey(onRemove[12]).TableRadioRow;
        obj2 = sheetKey(onRemove[11]);
        obj3 = sheetKey(onRemove[11]);
        return closure_1_3(TableRadioRow, obj, value);
      });
      cResult[6] = mapped;
      tmp13 = mapped;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp12) {
      let tmp15;
      if (cResult[8] === value) {
        tmp15 = cResult[9];
      }
      if (cResult[10] === onRemove) {
        let tmp18;
        if (cResult[11] === sheetKey) {
          tmp18 = cResult[12];
        }
        if (cResult[13] === tmp5.content) {
          if (cResult[14] === tmp15) {
            let tmp21;
            if (cResult[15] === tmp18) {
              tmp21 = cResult[16];
            }
            if (cResult[17] === tmp8) {
              let tmp24;
              if (cResult[18] === tmp21) {
                tmp24 = cResult[19];
              }
              return tmp24;
            }
            let obj3 = { header: tmp8, children: tmp21 };
            const tmp26 = closure_3(sheetKey(onRemove[16]).ActionSheet, obj3);
            cResult[17] = tmp8;
            cResult[18] = tmp21;
            cResult[19] = tmp26;
            tmp24 = tmp26;
          }
        }
        const obj4 = { spacing: onPick(onRemove[3]).space.PX_16, style: tmp11, children: items };
        const Stack = tmp(tmp2[15]).Stack;
        items = [tmp15, tmp18];
        const tmp23 = closure_4(Stack, obj4);
        cResult[13] = tmp5.content;
        cResult[14] = tmp15;
        cResult[15] = tmp18;
        cResult[16] = tmp23;
        tmp21 = tmp23;
      }
      let tmp19 = null;
      if (null != onRemove) {
        const obj5 = { hasIcons: false, children: closure_3(ActionSheetRow, obj6) };
        const Group = tmp(tmp2[14]).ActionSheetRow.Group;
        obj6 = {
          variant: "danger",
          label: intl2.string(onPick(onRemove[8]).bN1S9T),
          onPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(sheetKey);
                  onRemove();
                }
        };
        ActionSheetRow = tmp(tmp2[14]).ActionSheetRow;
        intl2 = tmp(tmp2[7]).intl;
        tmp19 = closure_3(Group, obj5);
      }
      cResult[10] = onRemove;
      cResult[11] = sheetKey;
      cResult[12] = tmp19;
      tmp18 = tmp19;
    }
    const obj7 = { hasIcons: false, title: first, accessibilityLabel: first, value, onChange: tmp12, children: tmp13 };
    const tmp17 = closure_3(sheetKey(onRemove[13]).TableRadioGroup, obj7);
    cResult[7] = tmp12;
    cResult[8] = value;
    cResult[9] = tmp17;
    tmp15 = tmp17;
  }
  class L {
    constructor(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(sheetKey);
      onPick(arg0);
    }
  }
  cResult[3] = onPick;
  cResult[4] = sheetKey;
  cResult[5] = L;
  tmp12 = L;
}) : (function ConjureLinkedAppBuildSheet(arg0) {
  let ActionSheetRow;
  let Stack;
  let intl2;
  let items;
  let obj2;
  let obj5;
  let onRemove;
  let prop;
  let title;
  let tmp7;
  let value;
  ({ sheetKey: require, onPick: importDefault, onRemove } = arg0);
  ({ title, value } = arg0);
  const tmp3 = closure_5(require("useSafeAreaInsets")().bottom);
  const intl = require("intl").intl;
  const stringResult = intl.string(require("module_3830").Odrcmq);
  let obj = { header: closure_3(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title }), children: tmp7(Stack, obj2) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj2 = { spacing: require("native").space.PX_16, style: tmp3.content, children: items };
  Stack = require("Stack/Stack").Stack;
  let obj3 = {
    hasIcons: false,
    title: stringResult,
    accessibilityLabel: stringResult,
    value,
    onChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(require);
      importDefault(arg0);
    },
    children: prop.map((value) => {
      let obj2;
      let obj3;
      const obj = { value, label: obj2.linkedAppBuildLabel(value), subLabel: obj3.linkedAppBuildDescription(value) };
      const TableRadioRow = require("TableRadioRow").TableRadioRow;
      obj2 = require("conjureLinkedApps");
      obj3 = require("conjureLinkedApps");
      return closure_1_3(TableRadioRow, obj, value);
    })
  };
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  prop = require("conjureLinkedApps").CONJURE_LINKED_APP_BUILDS;
  items = [closure_3(TableRadioGroup, obj3), ];
  let tmp6Result = null;
  const tmp = importDefault;
  tmp7 = closure_4;
  if (null != onRemove) {
    const obj4 = { hasIcons: false, children: closure_3(ActionSheetRow, obj5) };
    const Group = tmp4(tmp2[14]).ActionSheetRow.Group;
    obj5 = {
      variant: "danger",
      label: intl2.string(tmp(onRemove[8]).bN1S9T),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(require);
          onRemove();
        }
    };
    ActionSheetRow = tmp4(tmp2[14]).ActionSheetRow;
    intl2 = tmp4(tmp2[7]).intl;
    tmp6Result = tmp6(Group, obj4);
  }
  items[1] = tmp6Result;
  return closure_3(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildSheet.tsx");

export default tmp4;
