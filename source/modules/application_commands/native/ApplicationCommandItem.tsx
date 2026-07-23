// Module ID: 11443
// Function ID: 89035
// Name: ApplicationCommandItem
// Dependencies: [31, 27, 1917, 9558, 33, 4130, 689, 4549, 566, 11337, 4660, 1212, 5085, 4126, 2]
// Exports: default

// Module 11443 (ApplicationCommandItem)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AUTOCOMPLETE_ROW_HEIGHT } from "AUTOCOMPLETE_ROW_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj.applicationCommandItem = obj;
  obj = { backgroundColor: importDefault(689).colors.INTERACTIVE_BACKGROUND_HOVER };
  obj.highlightedApplicationCommandItem = obj;
  const obj1 = { width: 32, height: 32, borderRadius: importDefault(689).radii.lg, marginRight: 16 };
  obj.applicationCommandIcon = obj1;
  obj.applicationCommandDescriptionWrapper = { flexDirection: "column", flexShrink: 1, alignSelf: "flex-end" };
  obj.applicationCommandSectionName = { paddingLeft: 16, marginLeft: "auto" };
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_commands/native/ApplicationCommandItem.tsx");

export default function ApplicationCommandItem(highlighted) {
  let command;
  let importDefault;
  let section;
  let showIcon;
  ({ command, section } = highlighted);
  ({ guildId: importDefault, showIcon } = highlighted);
  if (showIcon === undefined) {
    showIcon = true;
  }
  let flag = highlighted.highlighted;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let obj = section(stateFromStores[7]);
  const tmp = callback3(obj.useFontScale());
  let obj1 = section(stateFromStores[8]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items, () => {
    if (null != closure_1) {
      let botId;
      if (null != section) {
        botId = section.botId;
      }
      if (null != botId) {
        return outer1_5.getMember(closure_1, section.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = React.useMemo(() => section(stateFromStores[9]).getApplicationCommandsIconSource(section, stateFromStores), items1);
  let nick;
  if (null != stateFromStores) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (null != section) {
    name = section.name;
  }
  obj = {};
  const intl = section(stateFromStores[11]).intl;
  obj = { applicationName: name };
  ({ displayDescription: obj4.commandDescription, displayName: obj4.commandName } = command);
  obj.accessibilityLabel = intl.formatToPlainString(section(stateFromStores[11]).t.eo8b3e, obj);
  obj1 = {};
  const merged = Object.assign(tmp.applicationCommandItem);
  const merged1 = Object.assign(flag ? tmp.highlightedApplicationCommandItem : {});
  obj.style = obj1;
  obj.accessibilityRole = "button";
  obj.onPress = highlighted.onPress;
  if (showIcon) {
    showIcon = null != memo;
  }
  if (showIcon) {
    const obj2 = { style: tmp.applicationCommandIcon, source: memo };
    showIcon = callback(importDefault(stateFromStores[12]), obj2);
  }
  const items2 = [showIcon, , ];
  const obj3 = { style: tmp.applicationCommandDescriptionWrapper };
  const obj4 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` };
  const items3 = [callback(section(stateFromStores[13]).Text, obj4), ];
  const obj5 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: command.displayDescription };
  items3[1] = callback(section(stateFromStores[13]).Text, obj5);
  obj3.children = items3;
  items2[1] = callback2(View, obj3);
  const obj6 = { style: tmp.applicationCommandSectionName, variant: "eyebrow", color: "text-muted", children: name };
  items2[2] = callback(section(stateFromStores[13]).Text, obj6);
  obj.children = items2;
  return callback2(section(stateFromStores[10]).PressableOpacity, obj);
};
