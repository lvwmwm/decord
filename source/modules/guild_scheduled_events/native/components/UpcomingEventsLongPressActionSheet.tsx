// Module ID: 11409
// Function ID: 88729
// Name: UpcomingEventsLongPressActionSheet
// Dependencies: []
// Exports: default

// Module 11409 (UpcomingEventsLongPressActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const ReadStateTypes = arg1(dependencyMap[4]).ReadStateTypes;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).createStyles({ headerIcon: { marginRight: 16 } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default function UpcomingEventsLongPressActionSheet(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  let obj1 = arg1(dependencyMap[7]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => muteScheduledEventsEnabled.isMuteScheduledEventsEnabled(guildId));
  const importDefault = stateFromStores1;
  obj = {};
  obj = {};
  obj1 = { style: callback2().headerIcon };
  const obj2 = { guild: stateFromStores };
  const tmp = callback2();
  const tmp4 = closure_8;
  const tmp6 = importDefault;
  obj2.size = arg1(dependencyMap[10]).GuildIconSizes.LARGE;
  obj1.children = callback(importDefault(dependencyMap[10]), obj2);
  obj.leading = callback(View, obj1);
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.tlopTM);
  const items2 = [callback(arg1(dependencyMap[9]).BottomSheetTitleHeader, obj), , ];
  const obj3 = {};
  const obj4 = { source: importDefault(dependencyMap[14]) };
  obj3.leading = callback(arg1(dependencyMap[13]).Icon, obj4);
  const obj5 = {};
  const intl2 = arg1(dependencyMap[11]).intl;
  obj5.text = intl2.string(arg1(dependencyMap[11]).t.e6RscS);
  obj3.label = callback(arg1(dependencyMap[12]).FormLabel, obj5);
  obj3.onPress = function onPress() {
    guildId(closure_2[15]).ackGuildFeature(guildId, constants.GUILD_EVENT);
    const obj = guildId(closure_2[15]);
    stateFromStores1(closure_2[16]).hideActionSheet();
  };
  items2[1] = callback(arg1(dependencyMap[12]).FormRow, obj3);
  const obj6 = {};
  const obj7 = {};
  if (stateFromStores1) {
    let tmp9 = tmp8[17];
  } else {
    tmp9 = tmp8[18];
  }
  obj7.source = tmp6(tmp9);
  obj6.leading = callback(arg1(dependencyMap[13]).Icon, obj7);
  const obj8 = {};
  const intl3 = arg1(dependencyMap[11]).intl;
  const string = intl3.string;
  const t = arg1(dependencyMap[11]).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  obj8.text = stringResult;
  obj6.label = callback(arg1(dependencyMap[12]).FormLabel, obj8);
  obj6.onPress = function onPress() {
    let obj = stateFromStores1(closure_2[19]);
    obj = { mute_scheduled_events: !stateFromStores1 };
    const NotificationLabel = guildId(closure_2[20]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
  };
  items2[2] = callback(arg1(dependencyMap[12]).FormRow, obj6);
  obj.children = items2;
  return tmp4(arg1(dependencyMap[8]).ActionSheet, obj);
};
