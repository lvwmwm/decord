// Module ID: 18734
// Function ID: 18735
// Name: FavoritesGuildCleanupModal
// Dependencies: [19, 17, 5105, 21, 5243, 575, 6785, 1627, 18735, 6274, 7679, 1113, 3629, 7681, 5866, 5873, 7427, 12434, 2]
// Exports: default

// Module 18734 (FavoritesGuildCleanupModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3629 from "module_3629" /* 3629 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import TableRadioRow7 from "TableRadioRow" /* 7681 */;
import Modal from "Modal" /* 12434 */;
import react from "react" /* 19 */;
import FavoritesConstants from "FavoritesConstants" /* 5105 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
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
  let closure_0;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
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
  let obj29;
  let obj3;
  let tmp = loading;
  const tmp2 = dependencyMap;
  const tmp3 = closure_14(loading(1627)().bottom);
  const tmp4 = loading(18735)(closeCleanup);
  _require = tmp4;
  loading = tmp4.loading;
  let obj = { style: tmp3.container, spacing: 0, children: items4 };
  let obj2 = { style: tmp3.scroller, contentContainerStyle: tmp3.content, keyboardShouldPersistTaps: "handled", children: closure_13(Stack2, obj3) };
  const Stack = require("Stack/Stack").Stack;
  obj3 = { spacing: loading(575).space.PX_16, children: items1 };
  Stack2 = require("Stack/Stack").Stack;
  const obj4 = {
    title: intl.string(loading(3629).IY55rr),
    hasIcons: false,
    value: tmp4.autoAdd,
    onChange(arg0) {
      return closure_0.setAutoAdd(arg0);
    },
    children: items
  };
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  intl = require("intl").intl;
  const obj5 = { label: intl2.string(loading(3629).z6aUMH), subLabel: intl3.string(loading(3629)["5pZtcn"]), value: value3, disabled: loading };
  let TableRadioRow = require("TableRadioRow").TableRadioRow;
  intl2 = require("intl").intl;
  intl3 = require("intl").intl;
  items = [closure_12(TableRadioRow, obj5), , ];
  const obj6 = { label: intl4.string(loading(3629).MOBbbf), subLabel: intl5.string(loading(3629)["4wUEWy"]), value: value2, disabled: loading };
  const TableRadioRow2 = require("TableRadioRow").TableRadioRow;
  intl4 = require("intl").intl;
  intl5 = require("intl").intl;
  items[1] = closure_12(TableRadioRow2, obj6);
  const obj7 = { label: intl6.string(loading(3629)["uJRN0+"]), value, disabled: loading };
  const TableRadioRow3 = require("TableRadioRow").TableRadioRow;
  intl6 = require("intl").intl;
  items[2] = closure_12(TableRadioRow3, obj7);
  items1 = [closure_13(TableRadioGroup, obj4), , , ];
  const obj9 = { title: intl7.string(loading(3629).THUVKS), description: intl8.string(loading(3629)["89dcNP"]), hasIcons: false, value: null, onChange: null, children: items2 };
  const TableRadioGroup2 = require("TableRadioGroup").TableRadioGroup;
  intl7 = require("intl").intl;
  intl8 = require("intl").intl;
  ({ pruneTiming: obj8.value, setPruneTiming: obj8.onChange } = tmp4);
  items2 = [
    closure_8.map((days) => {
      let stringResult;
      const TableRadioRow = TableRadioRow7.TableRadioRow;
      const tmp = authStore2;
      if (days === unpackModuleId) {
        const intl2 = tmp2(1113).intl;
        stringResult = intl2.string(_modDef3629.EIVQqq);
      } else {
        const intl = tmp2(1113).intl;
        const obj = { days };
        stringResult = intl.formatToPlainString(_modDef3629.ankeKO, obj);
      }
      const obj2 = { label: stringResult, value: days, disabled: loading };
      return tmp(TableRadioRow, obj2, days);
    }),

  ];
  const obj10 = { label: intl9.string(loading(3629).LxrV05), value: require("useFavoritesCleanup").FAVORITES_PRUNE_NEVER, disabled: loading };
  const TableRadioRow4 = require("TableRadioRow").TableRadioRow;
  intl9 = require("intl").intl;
  items2[1] = closure_12(TableRadioRow4, obj10);
  items1[1] = closure_13(TableRadioGroup2, obj9);
  const obj11 = {
    title: intl10.string(loading(3629).YFhloA),
    hasIcons: false,
    value: tmp4.scope,
    onChange(arg0) {
      return closure_0.setScope(arg0);
    },
    children: items3
  };
  const TableRadioGroup3 = require("TableRadioGroup").TableRadioGroup;
  intl10 = require("intl").intl;
  const obj12 = { label: intl11.string(loading(3629).fDT7MF), value: value5, disabled: loading || !tmp4.prune };
  const TableRadioRow5 = require("TableRadioRow").TableRadioRow;
  intl11 = require("intl").intl;
  items3 = [closure_12(TableRadioRow5, obj12), ];
  const obj13 = { label: intl12.string(tmp(3629)["gOUr+P"]), value: value4, disabled: loading || !tmp4.prune };
  const TableRadioRow6 = tmp6(7681).TableRadioRow;
  intl12 = tmp6(1113).intl;
  items3[1] = closure_12(TableRadioRow6, obj13);
  items1[2] = closure_13(TableRadioGroup3, obj11);
  let tmp7Result = null;
  const tmp8 = ScrollView;
  if (tmp4.error) {
    const obj14 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: intl13.string(tmp(3629).toOYQw) };
    const Text = tmp6(5866).Text;
    intl13 = tmp6(1113).intl;
    tmp7Result = tmp7(Text, obj14);
  }
  items1[3] = tmp7Result;
  items4 = [closure_12(tmp8, obj2), ];
  const obj15 = { style: tmp3.actions, spacing: tmp(575).space.PX_8, children: closure_12(Button, obj29) };
  const Stack3 = tmp6(6274).Stack;
  obj29 = { text: intl14.string(require("intl").t["R3BPH+"]), disabled: loading || !tmp4.canSave, loading, onPress: tmp4.save };
  Button = tmp6(5873).Button;
  intl14 = tmp6(1113).intl;
  items4[1] = closure_12(Stack3, obj15);
  return closure_13(Stack, obj);
}
const ScrollView = react_native.ScrollView;
({ FAVORITES_AUTO_ADD_THREADS_NEVER: hasOwnProperty, FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY: metroRequire, FAVORITES_AUTO_ADD_THREADS_PER_GUILD: metroImportDefault, FAVORITES_PRUNE_INACTIVE_THREADS_DAY_OPTIONS: metroImportAll, FAVORITES_PRUNE_SCOPE_ALL: c9, FAVORITES_PRUNE_SCOPE_AUTO_ADDED: c10, FAVORITES_PRUNE_WHEN_ARCHIVED: unpackModuleId } = FavoritesConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles((arg0) => {
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
      title: intl.string(_modDef3629.hklnjs),
      headerLeft: obj3.getHeaderCloseButton(closeCleanup),
      render() {
        return closure_1_12(closure_1_16, {});
      }
    };
    intl = require("intl").intl;
    obj3 = require("NavigatorHeader");
    return obj;
  }, []);
  return authStore2(Modal.Modal, { screens, initialRouteName: "cleanup" });
};
