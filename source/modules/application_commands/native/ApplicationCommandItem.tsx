// Module ID: 11432
// Function ID: 88960
// Name: ApplicationCommandItem
// Dependencies: []
// Exports: default

// Module 11432 (ApplicationCommandItem)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const AUTOCOMPLETE_ROW_HEIGHT = arg1(dependencyMap[3]).AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles((arg0) => {
  let obj = {};
  obj = { userId: null, bottom: null, marginTop: null, flex: null, height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj.applicationCommandItem = obj;
  obj = { backgroundColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_BACKGROUND_HOVER };
  obj.highlightedApplicationCommandItem = obj;
  obj.applicationCommandIcon = { borderRadius: importDefault(dependencyMap[6]).radii.lg };
  obj.applicationCommandDescriptionWrapper = { 996395015: true, 2001900630: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==", 1370266028: null };
  obj.applicationCommandSectionName = { "Bool(true)": "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", "Bool(true)": "\u0905\u092A\u0930\u093E\u0939\u094D\u0928" };
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/application_commands/native/ApplicationCommandItem.tsx");

export default function ApplicationCommandItem(highlighted) {
  let command;
  let section;
  let showIcon;
  ({ command, section } = highlighted);
  const arg1 = section;
  ({ guildId: closure_1, showIcon } = highlighted);
  if (showIcon === undefined) {
    showIcon = true;
  }
  let flag = highlighted.highlighted;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  let obj = arg1(dependencyMap[7]);
  const tmp = callback3(obj.useFontScale());
  let obj1 = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    if (null != closure_1) {
      let botId;
      if (null != section) {
        botId = section.botId;
      }
      if (null != botId) {
        return member.getMember(closure_1, section.botId);
      }
    }
  });
  dependencyMap = stateFromStores;
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
  const intl = arg1(dependencyMap[11]).intl;
  obj = { applicationName: name };
  ({ displayDescription: obj4.commandDescription, displayName: obj4.commandName } = command);
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[11]).t.eo8b3e, obj);
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
    showIcon = callback(importDefault(dependencyMap[12]), obj2);
  }
  const items2 = [showIcon, , ];
  const obj3 = { style: tmp.applicationCommandDescriptionWrapper };
  const obj4 = { encodingConfig: true, showRemove: 15.1, PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: 253, children: `/ ${command.displayName}` };
  const items3 = [callback(arg1(dependencyMap[13]).Text, obj4), callback(arg1(dependencyMap[13]).Text, { children: command.displayDescription })];
  obj3.children = items3;
  items2[1] = callback2(View, obj3);
  const obj6 = { "Null": true, "Null": true, "Null": true, style: tmp.applicationCommandSectionName, children: name };
  items2[2] = callback(arg1(dependencyMap[13]).Text, obj6);
  obj.children = items2;
  return callback2(arg1(dependencyMap[10]).PressableOpacity, obj);
};
