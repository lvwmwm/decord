// Module ID: 20096
// Function ID: 20097
// Name: GuildSettingsModalIntegrationCommand
// Dependencies: [5, 32, 19, 4955, 20068, 21, 5043, 575, 1501, 504, 20069, 20071, 20070, 5793, 7191, 20072, 7751, 1112, 8088, 6115, 5730, 1413, 2118, 5634, 8185, 7941, 20074, 5617, 20065, 2]
// Exports: default

// Module 20096 (GuildSettingsModalIntegrationCommand)
import nativeDefault from "native" /* 575 */;
import NavigatorHeader from "NavigatorHeader" /* 7191 */;
import useGuildSettingsAppIntegrationDefault from "useGuildSettingsAppIntegration" /* 20065 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import IntegrationPermissionStore from "IntegrationPermissionStore" /* 20068 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let c4, c5, navigation;

let c10;
let c9;
let obj2;
let obj3;
let size;
let unpackModuleId;
function CommandPermissions(guildId) {
  let Stack;
  let _undefined;
  let application;
  let bot1;
  let c11;
  let command;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj3;
  let obj4;
  let originalCommandPermissions;
  let selectedPermissionCount;
  let tmp2Result2;
  guildId = guildId.guildId;
  ({ application, command } = guildId);
  let id;
  let originalApplicationPermissions;
  let editedTargetPermissions;
  let hasChanges;
  let first;
  let closure_10;
  c11 = undefined;
  let callback;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = callback();
  const tmp2 = guildId;
  let tmp3 = id;
  let obj = guildId(id[8]);
  navigation = obj.useNavigation();
  id = application.id;
  const id2 = command.id;
  const bot = application.bot;
  let id1;
  if (bot != null) {
    id1 = bot.id;
  }
  const items = [editedTargetPermissions];
  const items1 = [id1, guildId];
  const tmp2Result = tmp2(tmp3[9]);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let member = null;
    if (null != id1) {
      member = GuildMemberStore.getMember(guildId, tmp);
    }
    return member;
  }, items1);
  const tmp8 = command(tmp3[10])(guildId, id, id2);
  originalApplicationPermissions = tmp8.originalApplicationPermissions;
  editedTargetPermissions = tmp8.editedTargetPermissions;
  hasChanges = tmp8.hasChanges;
  ({ originalCommandPermissions, selectedPermissionCount } = tmp8);
  const tmp9 = id1(originalApplicationPermissions.useState(false), 2);
  first = tmp9[0];
  closure_10 = tmp9[1];
  [obj3, c11] = id1(originalApplicationPermissions.useState(null), 2);
  const items2 = [id2];
  const tmp11 = id1(originalApplicationPermissions.useState(null), 2);
  const effect = originalApplicationPermissions.useEffect(() => () => {
    const obj = navigation(id[11]);
    obj.resetPermissions(id2);
    const obj2 = command(id[12]);
    const result = obj2.stopEditingCommandPermissions(id2);
  }, items2);
  const items3 = [id, command, editedTargetPermissions, guildId, navigation, originalApplicationPermissions];
  callback = originalApplicationPermissions.useCallback(id2(function*(arg0, value) {
    let closure_1;
    let closure_2;
    let obj5;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            _undefined(null);
            closure_10(true);
            c3 = 1;
            const obj4 = { applicationId: id, command, editedPermissions: editedTargetPermissions, guildId, originalApplicationPermissions };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj5.saveCommandPermissions(obj4), done: false };
            obj5 = tmp21(c3[11]);
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_0 = tmp21;
            const self = this;
            const self2 = this;
            const tmp16 = new tmp(c3[13])(closure_0);
            closure_129_11(tmp16);
            closure_129_10(false);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_2.goBack();
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        if (0 === c3) {
          c5 = 3;
          throw tmp21;
        } else {
          c4 = 1;
        }
      }
    }
  }), items3);
  const items4 = [hasChanges, navigation, callback, first];
  const layoutEffect = originalApplicationPermissions.useLayoutEffect(() => {
    let fn;
    let onPress;
    let tmp = navigation;
    const setOptions = navigation.setOptions;
    if (first) {
      fn = () => null;
    } else {
      let tmp3 = require;
      let obj = NavigatorHeader;
      fn = obj.getHeaderConditionalBackButton(() => command(id[15])(hasChanges));
    }
    const obj2 = {
      headerLeft: fn,
      gestureEnabled: !hasChanges && !first,
      headerRight() {
        let intl;
        let tmp3;
        const tmp = closure_1_9;
        if (tmp) {
          tmp3 = first(guildId(id[14]).HeaderSubmittingIndicator, {});
        } else {
          tmp3 = null;
          if (hasChanges) {
            const obj = { text: intl.string(guildId(id[17]).t["R3BPH+"]), onPress };
            const HeaderActionButton = guildId(id[16]).HeaderActionButton;
            intl = guildId(id[17]).intl;
            tmp3 = first(HeaderActionButton, obj);
          }
        }
        return tmp3;
      }
    };
    setOptions(obj2);
  }, items4);
  let tmp16 = c11;
  let obj2 = { style: tmp.form, contentContainerStyle: items5, children: tmp15(Stack, obj4) };
  items5 = [tmp.formContent, contentContainerStyle];
  const Form = tmp2(tmp3[18]).Form;
  obj4 = { spacing: command(tmp3[7]).space.PX_24, children: items8 };
  Stack = tmp2(tmp3[19]).Stack;
  let obj5 = { direction: "horizontal", align: "center", spacing: command(tmp3[7]).space.PX_16, children: items6 };
  const Stack2 = tmp2(tmp3[19]).Stack;
  const tmp18 = command(tmp3[20]);
  let obj6 = { id: application.id, icon: application.icon, guildMember: stateFromStores, bot: bot1, size: 40 };
  const getApplicationIconSource = command(tmp3[21]).getApplicationIconSource;
  bot1 = undefined;
  const tmp19 = command(tmp3[21]);
  if (command.type !== tmp2(tmp3[22]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    bot1 = application.bot;
  }
  items6 = [, ];
  const obj7 = { source: getApplicationIconSource(obj6), style: tmp.icon };
  items6[0] = first(tmp18, obj7);
  const obj8 = { spacing: command(tmp3[7]).space.PX_4, style: tmp.headerText, children: items7 };
  const Stack3 = tmp2(tmp3[19]).Stack;
  const obj9 = { variant: "body-md/semibold", children: tmp2Result2.commandName(command.type, command.displayName) };
  const Text = tmp2(tmp3[23]).Text;
  tmp2Result2 = tmp2(tmp3[24]);
  items7 = [tmp17(Text, obj9), ];
  let tmp17Result = null;
  if ("" !== command.displayDescription) {
    const obj10 = { variant: "body-sm/normal", color: "text-muted", children: command.displayDescription };
    tmp17Result = tmp17(tmp2(tmp3[23]).Text, obj10);
  }
  items7[1] = tmp17Result;
  items6[1] = closure_10(Stack3, obj8);
  items8 = [tmp15(Stack2, obj5), , ];
  let tmp17Result2 = null;
  if (null != obj3) {
    tmp17Result2 = null;
    if (!obj3.hasFieldErrors()) {
      const obj11 = { type: "critical", message: obj3.getAnyErrorMessage(), role: "alert" };
      const InlineNotice = tmp2(tmp3[25]).InlineNotice;
      tmp17Result2 = tmp17(InlineNotice, obj11);
    }
  }
  const obj12 = { children: items9 };
  items8[1] = tmp17Result2;
  items8[2] = first(command(tmp3[26]), { applicationId: id, commandId: id2, guildId, editedTargetPermissions, originalApplicationPermissions, originalCommandPermissions, selectedPermissionCount });
  items9 = [tmp17(Form, obj2), tmp17(tmp2(tmp3[27]).NavScrim, {})];
  return closure_10(tmp16, obj12);
}
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { form: obj2, formContent: obj3, icon: size, headerText: { flexShrink: 1 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationCommand.tsx");

export default function GuildSettingsModalIntegrationCommand(commandId) {
  let application;
  let guild;
  let integration;
  commandId = commandId.commandId;
  const applicationId = commandId.applicationId;
  const merged = Object.assign(commandId, Object.assign({ applicationId: 0, commandId: 0 }));
  ({ guild, integration } = useGuildSettingsAppIntegrationDefault(applicationId));
  useGuildSettingsAppIntegrationDefault(applicationId);
  if (integration != null) {
    application = integration.application;
  }
  const items = [IntegrationPermissionStore];
  const items1 = [commandId];
  const obj = commandId(504);
  const stateFromStores = obj.useStateFromStores(items, () => IntegrationPermissionStore.getCommand(commandId), items1);
  let tmp5 = null;
  if (null != guild) {
    tmp5 = null;
    if (null != application) {
      tmp5 = null;
      if (null != stateFromStores) {
        const obj2 = { guildId: guild.id, application, command: stateFromStores };
        const merged1 = Object.assign(merged);
        tmp5 = closure_9(CommandPermissions, obj2);
      }
    }
  }
  return tmp5;
};
