// Module ID: 15425
// Function ID: 117715
// Name: ContextMenuCommandItem
// Dependencies: []
// Exports: ContextMenuCommandAppItem, ContextMenuCommandEmptyItem, ContextMenuCommandLoadingItem, default

// Module 15425 (ContextMenuCommandItem)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { bhk: "boolean", bic: "string", borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.commandIcon = obj;
obj.loadingIcon = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED };
obj.loadingName = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: importDefault(dependencyMap[4]).radii.md };
let closure_6 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: importDefault(dependencyMap[4]).radii.md };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

export default function ContextMenuCommandItem(item) {
  let end;
  let onPress;
  let start;
  item = item.item;
  const arg1 = item;
  const section = item.section;
  const importDefault = section;
  ({ onPress, start, end } = item);
  const items = [item, ];
  let name;
  if (null != section) {
    name = section.name;
  }
  items[1] = name;
  const memo = React.useMemo(() => {
    const type = item.type;
    const intl = item(closure_2[7]).intl;
    const obj = {};
    let name;
    if (null != section) {
      name = section.name;
    }
    obj.applicationName = name;
    obj.commandName = item.displayName;
    return intl.formatToPlainString(item(closure_2[7]).t.Pk4Mz3, obj);
  }, items);
  let obj = arg1(dependencyMap[8]);
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = { accessibilityLabel: memo, onPress, label: item.displayName };
  let tmp7 = null != applicationCommandsIconSource;
  if (tmp7) {
    obj = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp7 = jsx(importDefault(dependencyMap[9]), obj);
  }
  obj.icon = tmp7;
  obj.trailing = jsx(arg1(dependencyMap[11]).SendMessageIcon, {});
  obj.start = start;
  obj.end = end;
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
};
export const ContextMenuCommandLoadingItem = function ContextMenuCommandLoadingItem(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  const tmp = callback();
  let obj = {};
  obj = {};
  const items = [tmp.loadingName, ];
  obj = { width: "" + importDefault(dependencyMap[6]).random(60, 80) + "%" };
  items[1] = obj;
  obj.style = items;
  obj.label = <View {...obj} />;
  const items1 = [, ];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
  obj.icon = <View style={items1} />;
  obj.start = start;
  obj.end = end;
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
};
export const ContextMenuCommandEmptyItem = function ContextMenuCommandEmptyItem(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  const obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.string(arg1(dependencyMap[7]).t.YSNlV2);
  const items = [, ];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = callback());
  obj.icon = <View style={items} />;
  obj.start = start;
  obj.end = end;
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
};
export const ContextMenuCommandAppItem = function ContextMenuCommandAppItem(section) {
  let end;
  let onPress;
  let start;
  section = section.section;
  ({ onPress, start, end } = section);
  let obj = arg1(dependencyMap[8]);
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = { onPress, label: section.name };
  let tmp4 = null != applicationCommandsIconSource;
  if (tmp4) {
    obj = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp4 = jsx(importDefault(dependencyMap[9]), obj);
  }
  obj.icon = tmp4;
  obj.start = start;
  obj.end = end;
  obj.arrow = true;
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
};
