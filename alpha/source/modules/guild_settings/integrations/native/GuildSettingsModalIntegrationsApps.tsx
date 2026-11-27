// Module ID: 20006
// Function ID: 20007
// Name: GuildSettingsModalIntegrationsApps
// Dependencies: [19, 19996, 21, 5043, 5607, 575, 504, 6140, 20007, 8538, 6144, 6115, 5634, 16825, 12278, 19070, 12151, 2]
// Exports: default

// Module 20006 (GuildSettingsModalIntegrationsApps)
import react from "react" /* 19 */;
import ApplicationSubscriptionsStore from "ApplicationSubscriptionsStore" /* 19996 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ name: { flexShrink: 1 } });
let result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationsApps.tsx");

export default function GuildSettingsModalIntegrationsApps(guildId) {
  let closure_4;
  let closure_5;
  guildId = guildId.guildId;
  const apps = guildId.apps;
  ({ commandSections: dependencyMap, webhookApplicationIds: ApplicationSubscriptionsStore, onPress: closure_4, renderIcon: closure_5 } = guildId);
  let name;
  const title = guildId.title;
  name = name();
  let obj = guildId(5607);
  const variant = obj.useToken(apps(575).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj2 = guildId(5607);
  const color = obj2.useToken(apps(575).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let obj3 = guildId(504);
  let items = [ApplicationSubscriptionsStore];
  let items1 = [apps, guildId];
  let closure_9 = obj3.useStateFromStoresArray(items, () => {
    const found = apps.filter((application) => ApplicationSubscriptionsStore.getApplicationEntitlementsForGuild(application.application.id, guildId).length > 0);
    return found.map((application) => application.application.id);
  }, items1);
  let obj4 = {
    title,
    hasIcons: true,
    children: apps.map((integrationId) => {
      let application;
      let integration;
      let items;
      let items1;
      let tmp16Result;
      let tmpResult;
      let closure_0 = integrationId;
      ({ application, integration } = integrationId);
      const obj = guildId(dependencyMap[8]);
      const integrationHasBotResult = obj.integrationHasBot(application, integration);
      const hasItem = set.has(application.id);
      const obj2 = guildId(dependencyMap[8]);
      const result = obj2.integrationHasCommands(application, integration, dependencyMap);
      let tmp6;
      if (closure_5 != null) {
        tmp6 = closure_5(application);
      }
      if (tmp6 == null) {
        const obj3 = { application };
        tmp6 = closure_4(apps(tmp2[9]), obj3);
      }
      const TableRow = tmp(tmp2[10]).TableRow;
      if (closure_9.includes(application.id)) {
        const obj4 = { direction: "horizontal", align: "center", spacing: apps(dependencyMap[5]).space.PX_4, children: items };
        const Stack = tmp(tmp2[11]).Stack;
        const obj5 = { variant, color, lineClamp: 1, style: name.name, children: application.name };
        items = [closure_4(guildId(dependencyMap[12]).Text, obj5), ];
        const obj6 = { size: "xs", color: apps(dependencyMap[5]).colors.ICON_SUBTLE };
        const TicketIcon = tmp(tmp2[13]).TicketIcon;
        items[1] = closure_4(TicketIcon, obj6);
        name = closure_5(Stack, obj4);
      } else {
        name = application.name;
      }
      const obj7 = { label: name, subLabel: tmpResult.getIntegrationAddedLabel(integration), icon: tmp6, trailing: null, arrow: true, onPress: null };
      tmpResult = guildId(dependencyMap[8]);
      if (!integrationHasBotResult) {
        obj7.trailing = tmp16Result;
        obj7.onPress = function onPress() {
          return closure_4(integrationId);
        };
        return closure_4(TableRow, obj7, integrationId.integrationId);
      }
      const obj8 = { direction: "horizontal", align: "center", spacing: apps(dependencyMap[5]).space.PX_8, children: items1 };
      const Stack2 = tmp(tmp2[11]).Stack;
      let tmp9Result = null;
      const tmp16 = closure_5;
      if (integrationHasBotResult) {
        const obj9 = { size: "sm", color: apps(dependencyMap[5]).colors.ICON_SUBTLE };
        const RobotIcon = tmp(tmp2[14]).RobotIcon;
        tmp9Result = tmp9(RobotIcon, obj9);
      }
      items1 = [tmp9Result, , ];
      let tmp9Result3 = null;
      if (hasItem) {
        const obj10 = { size: "sm", color: apps(dependencyMap[5]).colors.ICON_SUBTLE };
        const WebhookIcon = tmp(tmp2[15]).WebhookIcon;
        tmp9Result3 = tmp9(WebhookIcon, obj10);
      }
      items1[1] = tmp9Result3;
      let tmp9Result4 = null;
      if (result) {
        const obj11 = { size: "sm", color: apps(dependencyMap[5]).colors.ICON_SUBTLE };
        const SlashBoxIcon = tmp(tmp2[16]).SlashBoxIcon;
        tmp9Result4 = tmp9(SlashBoxIcon, obj11);
      }
      items1[2] = tmp9Result4;
      tmp16Result = tmp16(Stack2, obj8);
    })
  };
  const TableRowGroup = guildId(6140).TableRowGroup;
  return closure_4(TableRowGroup, obj4);
};
