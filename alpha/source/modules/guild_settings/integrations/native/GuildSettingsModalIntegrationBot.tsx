// Module ID: 20090
// Function ID: 20091
// Name: GuildSettingsModalIntegrationBot
// Dependencies: [19, 1071, 21, 5043, 575, 1501, 20091, 6115, 5730, 1413, 5634, 1112, 8633, 7535, 6144, 20007, 20073, 12278, 6145, 20005, 2]
// Exports: default

// Module 20090 (GuildSettingsModalIntegrationBot)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl5 from "intl" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import FastImageDefault from "FastImage" /* 5730 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import BotTagDefault from "BotTag" /* 8633 */;
import RobotIcon from "RobotIcon" /* 12278 */;
import IntegrationAppUtils from "IntegrationAppUtils" /* 20007 */;
import GuildSettingsModalIntegrationSectionTitleDefault from "GuildSettingsModalIntegrationSectionTitle" /* 20073 */;
import useIntegrationBotDefault from "useIntegrationBot" /* 20091 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let size;
function BotDetails(arg0) {
  let GyhzGw;
  let application;
  let bot;
  let closure_1;
  let formatToPlainString;
  let grantedPermissions;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let member;
  let obj11;
  let obj15;
  let obj5;
  let obj7;
  let roleIds;
  let tmp4Result3;
  ({ guild, application } = arg0);
  const tmp = closure_6();
  let obj = application(1501);
  importDefault = obj.useNavigation();
  const tmp5 = useIntegrationBotDefault(guild, application);
  if (null == tmp5) {
    return null;
  } else {
    ({ bot, roleIds } = tmp5);
    ({ member, grantedPermissions } = tmp5);
    const obj2 = { spacing: nativeDefault.space.PX_16, children: items1 };
    const Stack2 = tmp2(6115).Stack;
    const obj3 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: items };
    const Stack3 = tmp2(6115).Stack;
    const obj4 = { source: tmp4Result3.getApplicationIconSource(obj5), style: tmp.avatar };
    obj5 = { id: application.id, guildMember: member, bot: null, icon: null, size: 24 };
    ({ bot: obj12.bot, icon: obj12.icon } = application);
    const tmp4Result = FastImageDefault;
    tmp4Result3 = AvatarUtilsDefault;
    items = [closure_4(tmp4Result, obj4), , ];
    const obj6 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, style: tmp.botName, children: formatToPlainString(GyhzGw, obj7) };
    const Text2 = tmp2(5634).Text;
    const intl4 = tmp2(1112).intl;
    formatToPlainString = intl4.formatToPlainString;
    obj7 = { user: bot.toString() };
    GyhzGw = tmp2(1112).t.GyhzGw;
    items[1] = closure_4(Text2, obj6);
    const obj8 = { verified: bot.isVerifiedBot() };
    const tmp4Result4 = BotTagDefault;
    items[2] = closure_4(tmp4Result4, obj8);
    items1 = [closure_5(Stack3, obj3), , ];
    let tmp7Result = null;
    if (roleIds.length > 0) {
      const obj9 = { spacing: nativeDefault.space.PX_8, children: items2 };
      const Stack = tmp2(6115).Stack;
      const obj10 = { variant: "heading-xs/semibold", color: "text-strong", children: intl.formatToPlainString(application(1112).t.PCs0oo, obj11) };
      const Text = tmp2(5634).Text;
      intl = tmp2(1112).intl;
      obj11 = { numRoles: roleIds.length };
      items2 = [closure_4(Text, obj10), ];
      const obj13 = { guildId: guild.id, guildMemberRoleIds: roleIds };
      items2[1] = closure_4(application(7535).RolesList, obj13);
      tmp7Result = tmp7(Stack, obj9);
    }
    items1[1] = tmp7Result;
    const obj14 = {
      label: intl2.string(application(1112).t.xrmhRX),
      subLabel: intl3.formatToPlainString(application(1112).t.WABWEC, obj15),
      arrow: true,
      start: true,
      end: true,
      onPress() {
          const obj = { applicationId: application.id };
          return closure_1.push(GuildSettingsSections.INTEGRATION_BOT_PERMISSIONS, obj);
        }
    };
    const TableRow = tmp2(6144).TableRow;
    intl2 = tmp2(1112).intl;
    intl3 = tmp2(1112).intl;
    obj15 = { count: grantedPermissions.length };
    items1[2] = closure_4(TableRow, obj14);
    return closure_5(Stack2, obj2);
  }
}
const GuildSettingsSections = Constants.GuildSettingsSections;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { avatar: size, botName: { flexShrink: 1 } };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.round };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationBot.tsx");

export default function GuildSettingsModalIntegrationBot(application) {
  let intl;
  let intl2;
  let items;
  let obj6;
  application = application.application;
  if (null == application.bot) {
    return null;
  } else {
    let tmp11Result;
    const obj4 = IntegrationAppUtils;
    const obj2 = { spacing: nativeDefault.space.PX_8, children: items };
    const integrationHasBotResult = obj4.integrationHasBot(application, tmp2);
    const Stack = Stack_Stack.Stack;
    const obj3 = { icon: RobotIcon.RobotIcon, title: intl2.string(intl5.t.AOdOYr) };
    const tmp12 = GuildSettingsModalIntegrationSectionTitleDefault;
    intl2 = intl5.intl;
    items = [React3(tmp12, obj3), ];
    const tmp10 = importDefault;
    const tmp9 = hasOwnProperty;
    if (integrationHasBotResult) {
      const obj5 = { children: React3(BotDetails, obj6) };
      obj6 = { guild: tmp, application };
      const Card = tmp6(6145).Card;
      tmp11Result = tmp11(Card, obj5);
    } else {
      const obj = { text: intl.string(intl5.t.pfLnza) };
      const tmp10Result = tmp10(20005);
      intl = tmp6(1112).intl;
      tmp11Result = tmp11(tmp10Result, obj);
    }
    items[1] = tmp11Result;
    return tmp9(Stack, obj2);
  }
};
