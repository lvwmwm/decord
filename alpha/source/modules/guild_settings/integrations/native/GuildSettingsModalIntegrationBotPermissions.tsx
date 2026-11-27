// Module ID: 20095
// Function ID: 20096
// Name: GuildSettingsModalIntegrationBotPermissions
// Dependencies: [19, 21, 5043, 575, 20091, 20087, 1112, 1501, 20065, 7191, 8088, 6115, 5617, 2]
// Exports: default

// Module 20095 (GuildSettingsModalIntegrationBotPermissions)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import GuildSettingsModalIntegrationPermissionListDefault from "GuildSettingsModalIntegrationPermissionList" /* 20087 */;
import useIntegrationBotDefault from "useIntegrationBot" /* 20091 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function BotPermissions(guild) {
  let intl;
  let intl2;
  let items;
  guild = guild.guild;
  const tmp3 = useIntegrationBotDefault(guild, guild.application);
  let tmp4 = null;
  if (null != tmp3) {
    const obj = { children: items };
    const obj2 = { title: intl.string(intl3.t["hA4+su"]), guild, permissions: tmp3.grantedPermissions, granted: true };
    const tmpResult = GuildSettingsModalIntegrationPermissionListDefault;
    intl = intl3.intl;
    items = [React3(tmpResult, obj2), ];
    const obj3 = { title: intl2.string(intl3.t["/rEZ2i"]), guild, permissions: tmp3.deniedPermissions, granted: false };
    const tmpResult2 = GuildSettingsModalIntegrationPermissionListDefault;
    intl2 = intl3.intl;
    items[1] = React3(tmpResult2, obj3);
    tmp4 = metroRequire(hasOwnProperty, obj);
  }
  return tmp4;
}
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { form: obj2, formContent: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationBotPermissions.tsx");

export default function GuildSettingsModalIntegrationBotPermissions(arg0) {
  let Stack;
  let applicationId;
  let contentContainerStyle;
  let guild;
  let integration;
  let items1;
  let items2;
  let obj4;
  let obj5;
  navigation = undefined;
  let name;
  ({ contentContainerStyle, applicationId } = arg0);
  const tmp = closure_7();
  let obj = navigation(1501);
  navigation = obj.useNavigation();
  ({ guild, integration } = name(20065)(applicationId));
  let application;
  name(20065)(applicationId);
  const tmp5 = name;
  if (integration != null) {
    application = integration.application;
  }
  name = undefined;
  if (application != null) {
    name = application.name;
  }
  const items = [name, navigation];
  const layoutEffect = react.useLayoutEffect(() => {
    let subtitle;
    let obj = {
      headerTitle() {
        let intl;
        const obj = { title: intl.string(navigation(dependencyMap[6]).t.xrmhRX), subtitle };
        const NavigatorHeader = navigation(dependencyMap[9]).NavigatorHeader;
        intl = navigation(dependencyMap[6]).intl;
        return closure_2_4(NavigatorHeader, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
  let tmp10 = null;
  if (null != guild) {
    tmp10 = null;
    if (null != application) {
      const obj2 = { children: items2 };
      const obj3 = { style: tmp.form, contentContainerStyle: items1, children: closure_4(Stack, obj4) };
      items1 = [tmp.formContent, contentContainerStyle];
      const Form = tmp2(8088).Form;
      obj4 = { spacing: tmp5(575).space.PX_24, children: closure_4(BotPermissions, obj5) };
      Stack = tmp2(6115).Stack;
      obj5 = { guild, application };
      items2 = [closure_4(Form, obj3), closure_4(navigation(5617).NavScrim, {})];
      tmp10 = closure_6(closure_5, obj2);
    }
  }
  return tmp10;
};
