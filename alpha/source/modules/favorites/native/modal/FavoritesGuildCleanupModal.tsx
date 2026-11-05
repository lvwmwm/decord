// Module ID: 18483
// Function ID: 18484
// Name: FavoritesGuildCleanupModal
// Dependencies: [19, 17, 5005, 21, 5143, 575, 6882, 1627, 18484, 6165, 7204, 7118, 1113, 3577, 7202, 7205, 5763, 5770, 7142, 11679, 2]
// Exports: default

// Module 18483 (FavoritesGuildCleanupModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3577 from "module_3577" /* 3577 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import TableRadioRow2 from "TableRadioRow" /* 7205 */;
import Modal from "Modal" /* 11679 */;
import react from "react" /* 19 */;
import FavoritesConstants from "FavoritesConstants" /* 5005 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function closeCleanup() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey("FavoritesGuildCleanupModal");
}
function CleanupScreen() {
  let Button;
  let Stack2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let loading;
  let obj27;
  let obj3;
  let scope;
  let tmp = loading;
  const tmp2 = dependencyMap;
  const tmp3 = closure_13(loading(1627)().bottom);
  const tmp4 = loading(18484)(closeCleanup);
  _require = tmp4;
  loading = tmp4.loading;
  let obj = { style: tmp3.container, spacing: 0, children: items4 };
  let obj2 = { style: tmp3.scroller, contentContainerStyle: tmp3.content, keyboardShouldPersistTaps: "handled", children: closure_11(Stack2, obj3) };
  const Stack = require("Stack/Stack").Stack;
  obj3 = { spacing: loading(575).space.PX_16, children: items1 };
  Stack2 = require("Stack/Stack").Stack;
  const obj4 = { hasIcons: false, children: items };
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  const obj5 = { label: intl.string(loading(3577).DIyQIF), subLabel: intl2.string(loading(3577).d15FpO), checked: tmp4.autoAdd, disabled: loading, onPress: tmp4.setAutoAdd };
  const TableCheckboxRow = require("TableCheckboxRow").TableCheckboxRow;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  items = [closure_10(TableCheckboxRow, obj5), ];
  const obj6 = { label: intl3.string(loading(3577)["bI/czq"]), subLabel: intl4.string(loading(3577).RRsgY0), checked: tmp4.prune, disabled: loading, onPress: tmp4.setPrune };
  const TableCheckboxRow2 = require("TableCheckboxRow").TableCheckboxRow;
  intl3 = require("intl").intl;
  intl4 = require("intl").intl;
  items[1] = closure_10(TableCheckboxRow2, obj6);
  items1 = [closure_11(TableRowGroup, obj4), , ];
  let tmp5Result = null;
  const tmp8 = ScrollView;
  if (tmp4.prune) {
    const obj7 = { children: items2 };
    const obj9 = {
      title: intl5.string(tmp(3577).THUVKS),
      hasIcons: false,
      value: null,
      onChange: null,
      children: closure_6.map((days) => {
          let stringResult;
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          const tmp = authStore;
          if (days === React4) {
            const intl2 = tmp2(1113).intl;
            stringResult = intl2.string(_modDef3577.EIVQqq);
          } else {
            const intl = tmp2(1113).intl;
            const obj = { days };
            stringResult = intl.formatToPlainString(_modDef3577.eic1d0, obj);
          }
          const obj2 = { label: stringResult, value: days, disabled: loading };
          return tmp(TableRadioRow, obj2, days);
        })
    };
    const TableRadioGroup = tmp6(7202).TableRadioGroup;
    intl5 = tmp6(1113).intl;
    ({ days: obj8.value, setDays: obj8.onChange } = tmp4);
    items2 = [closure_10(TableRadioGroup, obj9), ];
    const obj10 = {
      title: intl6.string(tmp(3577).KIzpqi),
      hasIcons: false,
      value: tmp4.scope,
      onChange(arg0) {
          return scope.setScope(arg0);
        },
      children: items3
    };
    const TableRadioGroup2 = tmp6(7202).TableRadioGroup;
    intl6 = tmp6(1113).intl;
    const obj11 = { label, value: value2, disabled: loading };
    items3 = [closure_10(tmp6(7205).TableRadioRow, obj11), ];
    const obj12 = { label: intl7.string(tmp(3577)["gOUr+P"]), value, disabled: loading };
    let TableRadioRow = tmp6(7205).TableRadioRow;
    intl7 = tmp6(1113).intl;
    items3[1] = closure_10(TableRadioRow, obj12);
    items2[1] = closure_11(TableRadioGroup2, obj10);
    tmp5Result = tmp5(closure_12, obj7);
  }
  items1[1] = tmp5Result;
  let tmp7Result = null;
  if (tmp4.error) {
    const obj13 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: intl8.string(tmp(3577).toOYQw) };
    const Text = tmp6(5763).Text;
    intl8 = tmp6(1113).intl;
    tmp7Result = tmp7(Text, obj13);
  }
  items1[2] = tmp7Result;
  items4 = [closure_10(tmp8, obj2), ];
  const obj14 = { style: tmp3.actions, spacing: tmp(575).space.PX_8, children: closure_10(Button, obj27) };
  const Stack3 = tmp6(6165).Stack;
  obj27 = { text: intl9.string(require("intl").t["R3BPH+"]), disabled: loading || !tmp4.canSave, loading, onPress: tmp4.save };
  Button = tmp6(5770).Button;
  intl9 = tmp6(1113).intl;
  items4[1] = closure_10(Stack3, obj14);
  return closure_11(Stack, obj);
}
const ScrollView = react_native.ScrollView;
({ FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: hasOwnProperty, FAVORITES_PRUNE_INACTIVE_THREADS_DAY_OPTIONS: metroRequire, FAVORITES_PRUNE_SCOPE_ALL: metroImportDefault, FAVORITES_PRUNE_SCOPE_AUTO_ADDED: metroImportAll, FAVORITES_PRUNE_WHEN_ARCHIVED: c9 } = FavoritesConstants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroller: { flex: 1 }, content: { padding: nativeDefault.space.PX_16 }, actions: { padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ padding: nativeDefault.space.PX_16 });
  ({ padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 });
  return obj;
});
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCleanupModal.tsx");

export default function FavoritesGuildCleanupModal() {
  const screens = react.useMemo(() => {
    let intl;
    let obj2;
    let obj3;
    const obj = { cleanup: obj2 };
    obj2 = {
      title: intl.string(_modDef3577.hklnjs),
      headerLeft: obj3.getHeaderCloseButton(closeCleanup),
      render() {
        return closure_1_10(closure_1_15, {});
      }
    };
    intl = require("intl").intl;
    obj3 = require("NavigatorHeader");
    return obj;
  }, []);
  return authStore(Modal.Modal, { screens, initialRouteName: "cleanup" });
};
