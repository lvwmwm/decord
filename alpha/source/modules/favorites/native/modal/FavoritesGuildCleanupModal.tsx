// Module ID: 18143
// Function ID: 18144
// Name: FavoritesGuildCleanupModal
// Dependencies: [19, 17, 21, 5009, 575, 6738, 1626, 18144, 6022, 5619, 1114, 3447, 7076, 7052, 7055, 5629, 7054, 11447, 5647, 18146, 6968, 2]
// Exports: default

// Module 18143 (FavoritesGuildCleanupModal)
import nativeDefault from "native" /* 575 */;
import _modDef3447 from "module_3447" /* 3447 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 6968 */;
import TableRadioRow2 from "TableRadioRow" /* 7055 */;
import Modal from "Modal" /* 11447 */;
import useFavoritesCleanupActivityDefault from "useFavoritesCleanupActivity" /* 18146 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function closeCleanup() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey("FavoritesGuildCleanupModal");
}
function CleanupScreen() {
  let Stack2;
  let candidates;
  let closure_0;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl9;
  let items;
  let items2;
  let items4;
  let items5;
  let items6;
  let loading;
  let obj10;
  let obj17;
  let obj3;
  let stage;
  let str2;
  let str3;
  let stringResult;
  let stringResult1;
  let tmp14;
  let tmp19;
  let tmp2 = loading;
  const tmp3 = closure_9(stage(loading[6])().bottom);
  const tmp4 = stage(loading[7])(closeCleanup);
  _require = tmp4;
  stage = tmp4.stage;
  loading = tmp4.loading;
  let obj = { style: tmp3.container, spacing: 0, children: items5 };
  const obj2 = { style: tmp3.scroller, contentContainerStyle: tmp3.content, keyboardShouldPersistTaps: "handled", children: closure_7(Stack2, obj3) };
  const Stack = require("Stack/Stack").Stack;
  obj3 = { spacing: stage(loading[4]).space.PX_16, children: items };
  Stack2 = require("Stack/Stack").Stack;
  const obj4 = { variant: "text-md/normal", children: intl.string(stage(loading[11]).DbeF7Y) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items = [closure_6(Text, obj4), , ];
  const obj5 = { children: null };
  const tmp8 = closure_5;
  const tmp9 = closure_8;
  if ("filter" === stage) {
    const obj6 = { label: intl7.string(stage(tmp2[11]).VheZQr), value: null, onChange: null, keyboardType: "number-pad", maxLength: 5, disabled: loading, errorMessage: stringResult };
    const TextInput = tmp6(tmp2[12]).TextInput;
    intl7 = tmp6(tmp2[10]).intl;
    ({ days: obj14.value, setDays: obj14.onChange } = tmp4);
    stringResult = undefined;
    if ("" !== tmp4.days) {
      if (!tmp4.validDays) {
        const intl8 = tmp6(tmp2[10]).intl;
        stringResult = intl8.string(tmp(tmp2[11])["wT+K51"]);
      }
    }
    const items1 = [closure_6(TextInput, obj6), ];
    const obj7 = {
      title: intl9.string(stage(tmp2[11]).KIzpqi),
      hasIcons: false,
      value: str2,
      onChange(arg0) {
          let tmp2 = null;
          const setCategoryId = closure_0.setCategoryId;
          if ("all" !== arg0) {
            tmp2 = arg0;
          }
          return setCategoryId(tmp2);
        },
      children: items2
    };
    const TableRadioGroup = tmp6(tmp2[13]).TableRadioGroup;
    intl9 = tmp6(tmp2[10]).intl;
    str2 = tmp4.categoryId;
    if (str2 == null) {
      str2 = "all";
    }
    const obj8 = { label: intl10.string(stage(tmp2[11])["gOUr+P"]), value: "all", disabled: loading };
    const TableRadioRow = tmp6(tmp2[14]).TableRadioRow;
    intl10 = tmp6(tmp2[10]).intl;
    items2 = [closure_6(TableRadioRow, obj8), ];
    const categories = tmp4.categories;
    items2[1] = categories.map((label) => {
      const obj = { label: label.name, value: label.id, disabled: loading };
      return metroRequire(TableRadioRow2.TableRadioRow, obj, label.id);
    });
    items1[1] = closure_7(TableRadioGroup, obj7);
    obj5.children = items1;
    tmp14 = obj5;
  } else {
    let tmp7Result2;
    const obj9 = { variant: "text-sm/medium", accessibilityLiveRegion: "polite", children: intl2.format(stage(tmp2[11]).kdvwuo, obj10) };
    const Text2 = tmp6(tmp2[9]).Text;
    intl2 = tmp6(tmp2[10]).intl;
    obj10 = { count: tmp4.selectedThreads.length };
    const items3 = [closure_6(Text2, obj9), , ];
    if (tmp4.candidates.length > 0) {
      const obj11 = { spacing: stage(tmp2[4]).space.PX_8, children: items4 };
      const Stack3 = tmp6(tmp2[8]).Stack;
      const Button = tmp6(tmp2[15]).Button;
      const intl4 = tmp6(tmp2[10]).intl;
      const string = intl4.string;
      const allSelected = tmp4.allSelected;
      const tmpResult = stage(tmp2[11]);
      const obj12 = { text: string(allSelected ? tmpResult.AX7Fmc : tmpResult.ZuaHVJ), variant: "tertiary", size: "sm", disabled: loading, onPress: tmp4.toggleSelection };
      items4 = [closure_6(Button, obj12), ];
      const obj13 = {
        title: intl5.string(stage(tmp2[11]).wPednI),
        hasIcons: false,
        children: candidates.map((channel) => {
              let selectedIds;
              const obj = {
                channel,
                checked: selectedIds.includes(channel.id),
                disabled: loading,
                onChange(arg0) {
                  let id;
                  channel = arg0;
                  return channel.setSelectedIds((arr) => {
                    let found;
                    const tmp2 = id;
                    if (tmp2) {
                      const items = [];
                      items[HermesBuiltin.arraySpread(items, arr, 0)] = id.id;
                      found = items;
                    } else {
                      found = arr.filter((item) => item !== id.id);
                    }
                    return found;
                  });
                }
              };
              selectedIds = channel.selectedIds;
              return closure_1_6(CleanupCandidateRow, obj, channel.id);
            })
      };
      const TableRowGroup = tmp6(tmp2[16]).TableRowGroup;
      intl5 = tmp6(tmp2[10]).intl;
      candidates = tmp4.candidates;
      items4[1] = closure_6(TableRowGroup, obj13);
      tmp7Result2 = tmp5(Stack3, obj11);
    } else {
      const obj15 = { variant: "text-md/normal", children: intl3.string(stage(tmp2[11])["4KOdCv"]) };
      const Text3 = tmp6(tmp2[9]).Text;
      intl3 = tmp6(tmp2[10]).intl;
      tmp7Result2 = tmp7(Text3, obj15);
    }
    items3[1] = tmp7Result2;
    let tmp7Result = null;
    if (tmp4.unknownCount > 0) {
      const obj16 = { variant: "text-sm/normal", children: intl6.format(stage(tmp2[11])["rM/wWh"], obj17) };
      const Text4 = tmp6(tmp2[9]).Text;
      intl6 = tmp6(tmp2[10]).intl;
      obj17 = { count: tmp4.unknownCount };
      tmp7Result = tmp7(Text4, obj16);
    }
    items3[2] = tmp7Result;
    obj5.children = items3;
    tmp14 = obj5;
  }
  items[1] = closure_7(tmp9, tmp14);
  let tmp7Result3 = null;
  if (tmp4.error) {
    const obj18 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: intl11.string(stage(tmp2[11]).toOYQw) };
    const Text5 = tmp6(tmp2[9]).Text;
    intl11 = tmp6(tmp2[10]).intl;
    tmp7Result3 = tmp7(Text5, obj18);
  }
  items[2] = tmp7Result3;
  items5 = [closure_6(tmp8, obj2), ];
  const obj19 = { style: tmp3.actions, spacing: stage(tmp2[4]).space.PX_8, children: items6 };
  const Stack4 = tmp6(tmp2[8]).Stack;
  const Button2 = tmp6(tmp2[15]).Button;
  const intl12 = tmp6(tmp2[10]).intl;
  if ("filter" === stage) {
    stringResult1 = intl12.string(tmp(tmp2[11]).zAljrZ);
  } else {
    const obj20 = { count: tmp4.selectedThreads.length };
    stringResult1 = intl12.formatToPlainString(tmp(tmp2[11]).jiqJtj, obj20);
  }
  const obj21 = {
    text: stringResult1,
    variant: str3,
    disabled: tmp19,
    loading,
    onPress() {
      React3.dismiss();
      if ("filter" === stage) {
        closure_0.review();
      } else {
        closure_0.remove();
      }
    }
  };
  str3 = "primary";
  if ("review" === stage) {
    str3 = "destructive";
  }
  tmp19 = loading;
  if (!tmp19) {
    let tmp20;
    if ("filter" === stage) {
      tmp20 = !tmp4.validDays;
    } else {
      tmp20 = 0 === length;
    }
    tmp19 = tmp20;
  }
  items6 = [closure_6(Button2, obj21), ];
  const Button3 = tmp6(tmp2[15]).Button;
  const intl13 = tmp6(tmp2[10]).intl;
  const string2 = intl13.string;
  const t = tmp6(tmp2[10]).t;
  const obj41 = {
    text: string2("filter" === stage ? t["ETE/oC"] : t["13/7kX"]),
    variant: "secondary",
    disabled: loading,
    onPress() {
      if ("filter" === stage) {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey("FavoritesGuildCleanupModal");
      } else {
        closure_0.setStage("filter");
      }
    }
  };
  items6[1] = closure_6(Button3, obj41);
  items5[1] = closure_7(Stack4, obj19);
  return closure_7(Stack, obj);
}
function CleanupCandidateRow(channel) {
  let checked;
  let disabled;
  let onChange;
  channel = channel.channel;
  ({ checked, disabled, onChange } = channel);
  const tmp = useChannelNameDefault(channel);
  const subLabel = useFavoritesCleanupActivityDefault(channel);
  let label = tmp;
  const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  const tmp3 = metroRequire;
  if (tmp == null) {
    label = "";
  }
  return tmp3(TableCheckboxRow, { label, subLabel, checked, disabled, onPress });
}
({ Keyboard: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
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
    let onPress;
    let obj = { cleanup: obj2 };
    obj2 = {
      title: intl.string(_modDef3447["b081B+"]),
      headerLeft() {
        let intl;
        const obj = { text: intl.string(closure_1_0(closure_1_2[10]).t["ETE/oC"]), size: "sm", variant: "tertiary", onPress };
        const Button = closure_1_0(closure_1_2[15]).Button;
        intl = closure_1_0(closure_1_2[10]).intl;
        return closure_1_6(Button, obj);
      },
      render() {
        return closure_1_6(closure_1_11, {});
      }
    };
    intl = require("intl").intl;
    return obj;
  }, []);
  return metroRequire(Modal.Modal, { screens, initialRouteName: "cleanup" });
};
