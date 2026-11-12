// Module ID: 14199
// Function ID: 14200
// Name: UpcomingEventsLongPressActionSheet
// Dependencies: [19, 17, 5041, 6863, 6864, 21, 5170, 504, 7459, 7415, 7053, 1113, 8279, 1187, 14200, 7375, 5406, 14201, 14202, 7384, 7379, 2]
// Exports: default

// Module 14199 (UpcomingEventsLongPressActionSheet)
import react_native from "react-native" /* 17 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ReadStateConstants from "ReadStateConstants" /* 6864 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7375 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7379 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7384 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5041 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6863 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ headerIcon: { marginRight: 16 } });
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default function UpcomingEventsLongPressActionSheet(guildId) {
  let FormLabel;
  let FormLabel2;
  let Icon;
  let Icon2;
  let intl;
  let intl2;
  let obj10;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  let stringResult;
  let tmp9;
  guildId = guildId.guildId;
  const tmp = closure_9();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId));
  const ActionSheet = guildId(7459).ActionSheet;
  const obj3 = { leading: closure_7(View, obj4), title: intl.string(guildId(1113).t.tlopTM) };
  obj4 = { style: tmp.headerIcon, children: closure_7(tmp9, obj5) };
  const BottomSheetTitleHeader = guildId(7415).BottomSheetTitleHeader;
  obj5 = { guild: stateFromStores, size: guildId(7053).GuildIconSizes.LARGE };
  tmp9 = stateFromStores1(7053);
  intl = guildId(1113).intl;
  const items2 = [closure_7(BottomSheetTitleHeader, obj3), , ];
  const obj6 = {
    leading: closure_7(Icon, obj7),
    label: closure_7(FormLabel, obj8),
    onPress() {
      const obj = ReadStateActionCreators;
      obj.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  };
  const FormRow = guildId(8279).FormRow;
  obj7 = { source: stateFromStores1(14200) };
  Icon = guildId(1187).Icon;
  obj8 = { text: intl2.string(guildId(1113).t.e6RscS) };
  FormLabel = guildId(8279).FormLabel;
  intl2 = guildId(1113).intl;
  items2[1] = closure_7(FormRow, obj6);
  const FormRow2 = guildId(8279).FormRow;
  const obj9 = {
    leading: closure_7(Icon2, obj10),
    label: closure_7(FormLabel2, { text: stringResult }),
    onPress() {
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      const obj = { mute_scheduled_events: !stateFromStores1 };
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
    }
  };
  obj10 = { source: stateFromStores1(stateFromStores1 ? 14201 : 14202) };
  Icon2 = guildId(1187).Icon;
  FormLabel2 = tmp2(8279).FormLabel;
  const intl3 = tmp2(1113).intl;
  const string = intl3.string;
  const t = tmp2(1113).t;
  const tmp6 = closure_8;
  const tmp8 = stateFromStores1;
  if (tmp8) {
    stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj11 = { children: items2 };
  items2[2] = closure_7(FormRow2, obj9);
  return tmp6(ActionSheet, obj11);
};
