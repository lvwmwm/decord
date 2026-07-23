// Module ID: 11420
// Function ID: 88804
// Name: UpcomingEventsLongPressActionSheet
// Dependencies: [31, 27, 1838, 4325, 4326, 33, 4130, 566, 5500, 5186, 5515, 1212, 7495, 1273, 11421, 5069, 4098, 11422, 11423, 5079, 5073, 2]
// Exports: default

// Module 11420 (UpcomingEventsLongPressActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import closure_4 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ReadStateTypes } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ headerIcon: { marginRight: 16 } });
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default function UpcomingEventsLongPressActionSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(guildId));
  let obj1 = guildId(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.isMuteScheduledEventsEnabled(guildId));
  obj = {};
  obj = {};
  obj1 = { style: callback2().headerIcon };
  const obj2 = { guild: stateFromStores };
  const tmp = callback2();
  const tmp4 = closure_8;
  const tmp6 = stateFromStores1;
  obj2.size = guildId(5515).GuildIconSizes.LARGE;
  obj1.children = callback(stateFromStores1(5515), obj2);
  obj.leading = callback(View, obj1);
  const intl = guildId(1212).intl;
  obj.title = intl.string(guildId(1212).t.tlopTM);
  const items2 = [callback(guildId(5186).BottomSheetTitleHeader, obj), , ];
  const obj3 = {};
  const obj4 = { source: stateFromStores1(11421) };
  obj3.leading = callback(guildId(1273).Icon, obj4);
  const obj5 = {};
  const intl2 = guildId(1212).intl;
  obj5.text = intl2.string(guildId(1212).t.e6RscS);
  obj3.label = callback(guildId(7495).FormLabel, obj5);
  obj3.onPress = function onPress() {
    guildId(outer1_2[15]).ackGuildFeature(guildId, outer1_6.GUILD_EVENT);
    const obj = guildId(outer1_2[15]);
    stateFromStores1(outer1_2[16]).hideActionSheet();
  };
  items2[1] = callback(guildId(7495).FormRow, obj3);
  const obj6 = {};
  const obj7 = {};
  if (stateFromStores1) {
    let tmp9 = 11422;
  } else {
    tmp9 = 11423;
  }
  obj7.source = tmp6(tmp9);
  obj6.leading = callback(guildId(1273).Icon, obj7);
  const obj8 = {};
  const intl3 = guildId(1212).intl;
  const string = intl3.string;
  const t = guildId(1212).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  obj8.text = stringResult;
  obj6.label = callback(guildId(7495).FormLabel, obj8);
  obj6.onPress = function onPress() {
    let obj = stateFromStores1(outer1_2[19]);
    obj = { mute_scheduled_events: !stateFromStores1 };
    const NotificationLabel = guildId(outer1_2[20]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
  };
  items2[2] = callback(guildId(7495).FormRow, obj6);
  obj.children = items2;
  return tmp4(guildId(5500).ActionSheet, obj);
};
