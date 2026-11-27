// Module ID: 20064
// Function ID: 20065
// Name: GuildSettingsModalIntegrationApplication
// Dependencies: [19, 4975, 1071, 21, 5043, 575, 1501, 20065, 19998, 20066, 504, 5099, 8088, 6115, 11564, 5730, 1413, 5634, 5752, 1112, 11, 12417, 13874, 20067, 20007, 20090, 20092, 6140, 6144, 20094, 5617, 2]
// Exports: default

// Module 20064 (GuildSettingsModalIntegrationApplication)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import openGuildSettingsRemoveAppAlertDefault from "openGuildSettingsRemoveAppAlert" /* 20094 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
const Permissions = Constants.Permissions;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { form: obj2, formContent: obj3, icon: size, headerText: { flexShrink: 1 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.md };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationApplication.tsx");

export default function GuildSettingsModalIntegrationApplication(applicationId) {
  let Stack;
  let TableRow;
  let formatToPlainString;
  let gcdJ8J;
  let intl2;
  let intl4;
  let items10;
  let items11;
  let items12;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let obj19;
  let obj26;
  let obj3;
  let obj8;
  let tmp2Result2;
  let tmp5Result8;
  let tmp5Result9;
  applicationId = applicationId.applicationId;
  navigation = undefined;
  let guild;
  let integration;
  let name;
  const contentContainerStyle = applicationId.contentContainerStyle;
  let tmp = closure_9();
  let obj = navigation(integration[6]);
  navigation = obj.useNavigation();
  const tmp6 = guild(integration[7])(applicationId);
  guild = tmp6.guild;
  integration = tmp6.integration;
  const isRemoved = tmp6.isRemoved;
  let application;
  if (integration != null) {
    application = integration.application;
  }
  let id;
  const tmp5Result = guild(integration[8]);
  if (guild != null) {
    id = guild.id;
  }
  const items = [applicationId];
  const tmp5ResultResult = tmp5Result(id, items);
  const hasItem = tmp5ResultResult.includes(applicationId);
  const tmp11 = guild(integration[9])(guild, application);
  const items1 = [application];
  const items2 = [guild];
  name = undefined;
  const tmp2Result = navigation(integration[10]);
  const stateFromStores = tmp2Result.useStateFromStores(items1, () => PermissionStore.can(Permissions.MANAGE_ROLES, guild), items2);
  if (application != null) {
    name = application.name;
  }
  const items3 = [name, navigation];
  const layoutEffect = isRemoved.useLayoutEffect(() => {
    if (null != name) {
      const obj = { title: tmp };
      navigation.setOptions(obj);
    }
  }, items3);
  const items4 = [isRemoved, navigation];
  const effect = isRemoved.useEffect(() => {
    const tmp = isRemoved;
    if (tmp) {
      navigation.goBack();
    }
  }, items4);
  if (null != guild) {
    if (null != integration) {
      if (null != application) {
        let tmp19Result;
        let stringResult;
        let userTag = null;
        if (null != integration.user) {
          const tmp5Result6 = guild(integration[11]);
          userTag = tmp5Result6.getUserTag(integration.user);
        }
        let obj2 = { style: tmp.form, contentContainerStyle: items5, children: closure_7(Stack, obj3) };
        items5 = [tmp.formContent, contentContainerStyle];
        const Form = tmp2(tmp3[12]).Form;
        obj3 = { spacing: guild(integration[5]).space.PX_24, children: items11 };
        Stack = tmp2(tmp3[13]).Stack;
        const obj4 = { spacing: guild(integration[5]).space.PX_16, children: items10 };
        const Stack2 = tmp2(tmp3[13]).Stack;
        const obj5 = { direction: "horizontal", align: "center", spacing: guild(integration[5]).space.PX_16, children: items6 };
        const Stack3 = tmp2(tmp3[13]).Stack;
        const tmp18 = closure_8;
        if (hasItem) {
          const obj6 = { application, size: 48 };
          tmp19Result = tmp19(tmp5(tmp3[14]), obj6);
        } else {
          const obj7 = { source: tmp5Result8.getApplicationIconSource(obj8), style: tmp.icon };
          obj8 = { id: null, icon: null, size: 48 };
          ({ id: obj11.id, icon: obj11.icon } = application);
          const tmp5Result7 = guild(integration[15]);
          tmp5Result8 = guild(integration[16]);
          tmp19Result = tmp19(tmp5Result7, obj7);
        }
        items6 = [tmp19Result, ];
        const obj9 = { spacing: guild(integration[5]).space.PX_4, style: tmp.headerText, children: items7 };
        const Stack4 = tmp2(tmp3[13]).Stack;
        const obj10 = { variant: "heading-lg/semibold", children: application.name };
        items7 = [closure_6(tmp2(integration[17]).Text, obj10), , ];
        const obj12 = { direction: "horizontal", align: "center", spacing: guild(integration[5]).space.PX_4, children: items8 };
        const Stack5 = tmp2(tmp3[13]).Stack;
        const obj13 = { size: "xs", color: guild(integration[5]).colors.ICON_MUTED };
        const ClockIcon = tmp2(tmp3[18]).ClockIcon;
        items8 = [closure_6(ClockIcon, obj13), ];
        const obj14 = { variant: "body-sm/medium", color: "text-muted", children: formatToPlainString(gcdJ8J, obj15) };
        const Text = tmp2(tmp3[17]).Text;
        const intl = tmp2(tmp3[19]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj15 = { timestamp: tmp5Result9.extractTimestamp(integration.id) };
        gcdJ8J = tmp2(tmp3[19]).t.gcdJ8J;
        tmp5Result9 = guild(integration[20]);
        items8[1] = closure_6(Text, obj14);
        items7[1] = closure_7(Stack5, obj12);
        let tmp17Result = null;
        if (null != userTag) {
          const obj16 = { direction: "horizontal", align: "center", spacing: guild(integration[5]).space.PX_4, children: items9 };
          const Stack6 = tmp2(tmp3[13]).Stack;
          const obj17 = { size: "xs", color: guild(integration[5]).colors.ICON_MUTED };
          const UserIcon = tmp2(tmp3[21]).UserIcon;
          items9 = [closure_6(UserIcon, obj17), ];
          const obj18 = { variant: "body-sm/medium", color: "text-muted", children: intl2.formatToPlainString(navigation(integration[19]).t.qE7oqs, obj19) };
          const Text2 = tmp2(tmp3[17]).Text;
          intl2 = tmp2(tmp3[19]).intl;
          obj19 = { user: userTag };
          items9[1] = closure_6(Text2, obj18);
          tmp17Result = tmp17(Stack6, obj16);
        }
        items7[2] = tmp17Result;
        items6[1] = closure_7(Stack4, obj9);
        items10 = [closure_7(Stack3, obj5), ];
        let tmp19Result3 = null;
        if (null != application.description) {
          tmp19Result3 = null;
          if ("" !== application.description) {
            const obj20 = { bio: application.description, guildId: guild.id, lineClamp: 6 };
            tmp19Result3 = tmp19(tmp5(tmp3[22]), obj20);
          }
        }
        items10[1] = tmp19Result3;
        items11 = [closure_7(Stack2, obj4), , , , ];
        let tmp19Result4 = null;
        if (stateFromStores) {
          const obj21 = { guildId: guild.id, application, hasCommandsScope: tmp2Result2.integrationHasCommandsScope(integration) };
          const tmp5Result10 = guild(integration[23]);
          tmp2Result2 = navigation(integration[24]);
          tmp19Result4 = tmp19(tmp5Result10, obj21);
        }
        items11[1] = tmp19Result4;
        const obj22 = { guild, application, integration };
        items11[2] = closure_6(guild(integration[25]), obj22);
        const obj23 = { guild, applicationId: application.id };
        items11[3] = closure_6(guild(integration[26]), obj23);
        const TableRowGroup = tmp2(tmp3[27]).TableRowGroup;
        const intl3 = tmp2(tmp3[19]).intl;
        const string = intl3.string;
        const t = tmp2(tmp3[19]).t;
        if (tmp11) {
          stringResult = string(t.hdneL4);
        } else {
          stringResult = string(t.xRCMqx);
        }
        const obj24 = { children: items12 };
        const obj25 = { hasIcons: false, helperText: stringResult, children: closure_6(TableRow, obj26) };
        obj26 = {
          variant: "danger",
          label: intl4.string(navigation(integration[19]).t.ebGf4m),
          disabled: !tmp11,
          onPress() {
                  let obj2;
                  const obj = { guildId: guild.id, app: obj2 };
                  obj2 = { integrationId: integration.id, application, integration };
                  return openGuildSettingsRemoveAppAlertDefault(obj);
                }
        };
        TableRow = tmp2(tmp3[28]).TableRow;
        intl4 = tmp2(tmp3[19]).intl;
        items11[4] = closure_6(TableRowGroup, obj25);
        items12 = [closure_6(Form, obj2), closure_6(tmp2(integration[30]).NavScrim, {})];
        return closure_7(tmp18, obj24);
      }
    }
  }
  return null;
};
