// Module ID: 13124
// Function ID: 13125
// Name: UpcomingEventsLongPressActionSheet
// Dependencies: [19, 17, 4665, 6433, 6434, 21, 4794, 504, 7433, 7395, 7202, 1112, 7589, 1186, 13125, 7356, 5008, 13126, 13127, 7365, 7360, 2]
// Exports: default

// Module 13124 (UpcomingEventsLongPressActionSheet)
import react_native from "react-native" /* 17 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ReadStateConstants from "ReadStateConstants" /* 6434 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7356 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7360 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7365 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4665 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6433 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4794 */;
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
  const ActionSheet = guildId(7433).ActionSheet;
  const obj3 = { leading: closure_7(View, obj4), title: intl.string(guildId(1112).t.tlopTM) };
  obj4 = { style: tmp.headerIcon, children: closure_7(tmp9, obj5) };
  const BottomSheetTitleHeader = guildId(7395).BottomSheetTitleHeader;
  obj5 = { guild: stateFromStores, size: guildId(7202).GuildIconSizes.LARGE };
  tmp9 = stateFromStores1(7202);
  intl = guildId(1112).intl;
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
  const FormRow = guildId(7589).FormRow;
  obj7 = { source: stateFromStores1(13125) };
  Icon = guildId(1186).Icon;
  obj8 = { text: intl2.string(guildId(1112).t.e6RscS) };
  FormLabel = guildId(7589).FormLabel;
  intl2 = guildId(1112).intl;
  items2[1] = closure_7(FormRow, obj6);
  const FormRow2 = guildId(7589).FormRow;
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
  obj10 = { source: stateFromStores1(stateFromStores1 ? 13126 : 13127) };
  Icon2 = guildId(1186).Icon;
  FormLabel2 = tmp2(7589).FormLabel;
  const intl3 = tmp2(1112).intl;
  const string = intl3.string;
  const t = tmp2(1112).t;
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
