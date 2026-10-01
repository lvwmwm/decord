// Module ID: 11893
// Function ID: 11894
// Name: ApplicationCommandItem
// Dependencies: [19, 17, 2108, 9726, 21, 4836, 576, 5288, 504, 11713, 5435, 1115, 5899, 4832, 2]
// Exports: default

// Module 11893 (ApplicationCommandItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 9726 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11713 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { applicationCommandItem: { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) }, highlightedApplicationCommandItem: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER }, applicationCommandIcon: size, applicationCommandDescriptionWrapper: { flexDirection: "column", flexShrink: 1, alignSelf: "flex-end" }, applicationCommandSectionName: { paddingLeft: 16, marginLeft: "auto" } };
  ({ flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) });
  ({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER });
  size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, marginRight: 16 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandItem.tsx");

export default function ApplicationCommandItem(onPress) {
  let command;
  let intl;
  let items2;
  let items3;
  let name;
  let obj4;
  let obj5;
  let section;
  let showIcon;
  ({ command, section } = onPress);
  ({ guildId: importDefault, showIcon } = onPress);
  onPress = onPress.onPress;
  if (showIcon === undefined) {
    showIcon = true;
  }
  let flag = onPress.highlighted;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  const tmp = section;
  const tmp2 = stateFromStores;
  let obj = section(stateFromStores[7]);
  const tmp3 = closure_9(obj.useFontScale());
  const items = [GuildMemberStore];
  const obj2 = section(stateFromStores[8]);
  stateFromStores = obj2.useStateFromStores(items, () => {
    if (null != importDefault) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = application_commands_ApplicationCommandUtils;
    return obj.getApplicationCommandsIconSource(section, stateFromStores);
  }, items1);
  let nick;
  if (stateFromStores != null) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    name = stateFromStores.nick;
  } else if (section != null) {
    name = section.name;
  }
  const obj3 = { accessibilityLabel: intl.formatToPlainString(tmp(tmp2[11]).t.eo8b3e, obj4), style: obj5, accessibilityRole: "button", onPress, children: items2 };
  const PressableOpacity = tmp(tmp2[10]).PressableOpacity;
  intl = tmp(tmp2[11]).intl;
  obj4 = { applicationName: name, commandDescription: command.displayDescription, commandName: command.displayName };
  obj5 = {};
  const merged = Object.assign(tmp3.applicationCommandItem);
  const tmp9 = flag ? tmp3.highlightedApplicationCommandItem : {};
  const merged1 = Object.assign(tmp9);
  if (showIcon) {
    showIcon = null != memo;
  }
  if (showIcon) {
    const obj6 = { style: tmp3.applicationCommandIcon, source: memo };
    showIcon = closure_7(require("FastImage"), obj6);
  }
  items2 = [showIcon, , ];
  const obj7 = { style: tmp3.applicationCommandDescriptionWrapper, children: items3 };
  items3 = [, ];
  const obj8 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` };
  items3[0] = closure_7(tmp(tmp2[13]).Text, obj8);
  const obj9 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: command.displayDescription };
  items3[1] = closure_7(tmp(tmp2[13]).Text, obj9);
  items2[1] = closure_8(View, obj7);
  const obj10 = { style: tmp3.applicationCommandSectionName, variant: "eyebrow", color: "text-muted", children: name };
  items2[2] = closure_7(tmp(tmp2[13]).Text, obj10);
  return closure_8(PressableOpacity, obj3);
};
