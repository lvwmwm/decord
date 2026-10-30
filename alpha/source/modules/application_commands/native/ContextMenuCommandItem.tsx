// Module ID: 18902
// Function ID: 18903
// Name: ContextMenuCommandItem
// Dependencies: [19, 17, 21, 5009, 575, 6969, 12, 1114, 13743, 5712, 1993, 5724, 2]
// Exports: ContextMenuCommandAppItem, ContextMenuCommandEmptyItem, ContextMenuCommandLoadingItem, default

// Module 18902 (ContextMenuCommandItem)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import FastImageDefault from "FastImage" /* 5712 */;
import TableRow2 from "TableRow" /* 6969 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 13743 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { commandIcon: size, loadingIcon: obj2, loadingName: obj3 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

export default function ContextMenuCommandItem(item) {
  let end;
  let onPress;
  let start;
  item = item.item;
  const section = item.section;
  ({ onPress, start, end } = item);
  const items = [item, ];
  let name;
  let tmp = closure_6();
  const tmp2 = react;
  const useMemo = react.useMemo;
  if (section != null) {
    name = section.name;
  }
  items[1] = name;
  const memo = useMemo(() => {
    const type = item.type;
    const intl = tmp2(1114).intl;
    const formatToPlainString = intl.formatToPlainString;
    let name;
    const Pk4Mz3 = tmp2(1114).t.Pk4Mz3;
    const tmp = item;
    if (section != null) {
      name = section.name;
    }
    const obj = { applicationName: name, commandName: tmp.displayName };
    return formatToPlainString(Pk4Mz3, obj);
  }, items);
  let obj = item(13743);
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  let tmp8Result = null != applicationCommandsIconSource;
  const TableRow = item(6969).TableRow;
  if (tmp8Result) {
    const obj3 = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp8Result = tmp8(section(5712), obj3);
  }
  return <TableRow accessibilityLabel={memo} onPress={onPress} label={item.displayName} icon={tmp8Result} trailing={null} start={start} end={end} />;
};
export function ContextMenuCommandLoadingItem(arg0) {
  let end;
  let obj4;
  let start;
  ({ start, end } = arg0);
  const tmp = closure_6();
  const items = [tmp.loadingName, ];
  const obj3 = { width: "" + obj4.random(60, 80) + "%" };
  const TableRow = TableRow2.TableRow;
  items[1] = obj3;
  const items1 = [, ];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
  obj4 = _modDef12;
  return <TableRow label={null} icon={null} start={start} end={end} />;
}
export function ContextMenuCommandEmptyItem(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  const tmp = closure_6();
  const TableRow = TableRow2.TableRow;
  const intl = intl2.intl;
  const items = [, ];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = tmp);
  return <TableRow label={intl.string(intl2.t.YSNlV2)} icon={null} start={start} end={end} />;
}
export function ContextMenuCommandAppItem(section) {
  let end;
  let onPress;
  let start;
  section = section.section;
  ({ onPress, start, end } = section);
  const tmp = closure_6();
  const obj = application_commands_ApplicationCommandUtils;
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  let tmp4Result = null != applicationCommandsIconSource;
  const TableRow = TableRow2.TableRow;
  if (tmp4Result) {
    const obj3 = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp4Result = tmp4(FastImageDefault, obj3);
  }
  return <TableRow onPress={onPress} label={section.name} icon={tmp4Result} start={start} end={end} arrow />;
}
