// Module ID: 15553
// Function ID: 119971
// Name: ContextMenuCommandItem
// Dependencies: [31, 27, 33, 4130, 689, 5165, 22, 1212, 11337, 5085, 1881, 4076, 2]
// Exports: ContextMenuCommandAppItem, ContextMenuCommandEmptyItem, ContextMenuCommandLoadingItem, default

// Module 15553 (ContextMenuCommandItem)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.commandIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.loadingIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.loadingName = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
const result = require("jsxProd").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

export default function ContextMenuCommandItem(item) {
  let end;
  let onPress;
  let start;
  item = item.item;
  const section = item.section;
  ({ onPress, start, end } = item);
  const items = [item, ];
  let name;
  if (null != section) {
    name = section.name;
  }
  items[1] = name;
  const memo = React.useMemo(() => {
    const type = item.type;
    const intl = item(outer1_2[7]).intl;
    const obj = {};
    let name;
    if (null != section) {
      name = section.name;
    }
    obj.applicationName = name;
    obj.commandName = item.displayName;
    return intl.formatToPlainString(item(outer1_2[7]).t.Pk4Mz3, obj);
  }, items);
  let obj = item(11337);
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = { accessibilityLabel: memo, onPress, label: item.displayName };
  let tmp7 = null != applicationCommandsIconSource;
  if (tmp7) {
    obj = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp7 = jsx(section(5085), { style: tmp.commandIcon, source: applicationCommandsIconSource });
  }
  obj.icon = tmp7;
  obj.trailing = jsx(item(4076).SendMessageIcon, {});
  obj.start = start;
  obj.end = end;
  return jsx(item(5165).TableRow, { accessibilityLabel: memo, onPress, label: item.displayName });
};
export const ContextMenuCommandLoadingItem = function ContextMenuCommandLoadingItem(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = {};
  const items = [tmp.loadingName, ];
  obj = { width: "" + importDefault(22).random(60, 80) + "%" };
  items[1] = obj;
  obj.style = items;
  obj.label = <View width={"" + importDefault(22).random(60, 80) + "%"} />;
  const items1 = [, ];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
  obj.icon = <View style={items1} />;
  obj.start = start;
  obj.end = end;
  return jsx(require(5165) /* TableRowInner */.TableRow, { width: "" + importDefault(22).random(60, 80) + "%" });
};
export const ContextMenuCommandEmptyItem = function ContextMenuCommandEmptyItem(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.YSNlV2);
  const items = [, ];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = _createForOfIteratorHelperLoose());
  obj.icon = <View style={items} />;
  obj.start = start;
  obj.end = end;
  return jsx(require(5165) /* TableRowInner */.TableRow, {});
};
export const ContextMenuCommandAppItem = function ContextMenuCommandAppItem(section) {
  let end;
  let onPress;
  let start;
  section = section.section;
  ({ onPress, start, end } = section);
  let obj = require(11337) /* getApplicationCommandsIconSource */;
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = { onPress, label: section.name };
  let tmp4 = null != applicationCommandsIconSource;
  if (tmp4) {
    obj = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp4 = jsx(importDefault(5085), { style: tmp.commandIcon, source: applicationCommandsIconSource });
  }
  obj.icon = tmp4;
  obj.start = start;
  obj.end = end;
  obj.arrow = true;
  return jsx(require(5165) /* TableRowInner */.TableRow, { onPress, label: section.name });
};
