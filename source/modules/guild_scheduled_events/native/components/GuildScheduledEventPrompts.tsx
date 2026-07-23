// Module ID: 10644
// Function ID: 83089
// Name: ScheduleEventPrompt
// Dependencies: [31, 33, 4130, 689, 8402, 7495, 8365, 8460, 1212, 3800, 3712, 2]
// Exports: ScheduleEventPrompt, StartEventPrompt

// Module 10644 (ScheduleEventPrompt)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { actionBarCTAContainer: { marginVertical: 4 } };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE, width: 20, height: 20 };
_createForOfIteratorHelperLoose.iconStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconContainerStyle = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 4 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 4 };
_createForOfIteratorHelperLoose.greenIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = function ScheduleEventPrompt(isLive) {
  let channel;
  let require;
  ({ guild: require, channel } = isLive);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(8402) /* canManageResource */;
  let tmp2 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    obj = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          let obj = outer1_0(outer1_2[6]);
          obj = { channel };
          const result = obj.openCreateOrEditGuildEventModal(closure_0, obj);
        },
      iconSource: channel(8460)
    };
    ({ iconStyle: obj2.iconStyle, iconContainerStyle: obj2.iconContainerStyle } = tmp);
    obj.completed = isLive.isLive;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["60lJ0C"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.subtitle = intl2.string(require(1212) /* getSystemLocale */.t["EYn7/y"]);
    tmp2 = jsx(require(7495) /* Form */.FormCTA, {
      style: tmp.actionBarCTAContainer,
      onPress() {
          let obj = outer1_0(outer1_2[6]);
          obj = { channel };
          const result = obj.openCreateOrEditGuildEventModal(closure_0, obj);
        },
      iconSource: channel(8460)
    });
  }
  return tmp2;
};
export const StartEventPrompt = function StartEventPrompt(event) {
  let channel;
  let isLive;
  let name;
  let scheduled_start_time;
  event = event.event;
  const recurrenceId = event.recurrenceId;
  ({ channel, isLive } = event);
  const tmp = _createForOfIteratorHelperLoose();
  ({ name, scheduled_start_time } = event);
  let obj = event(8402);
  let tmp2 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    obj = {
      style: tmp.actionBarCTAContainer,
      onPress() {
          const result = event(outer1_2[6]).openStartGuildEventModal(event, recurrenceId);
        },
      iconSource: recurrenceId(8460),
      iconStyle: tmp.iconStyle
    };
    const items = [, ];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    obj.iconContainerStyle = items;
    obj.completed = isLive;
    const intl = event(1212).intl;
    obj = { eventName: name };
    obj.title = intl.formatToPlainString(event(1212).t["1vGXqM"], obj);
    const intl2 = event(1212).intl;
    const obj1 = { startTime: event(3800).calendarFormat(recurrenceId(3712)(scheduled_start_time)) };
    obj.subtitle = intl2.formatToPlainString(event(1212).t.PTebCR, obj1);
    tmp2 = jsx(event(7495).FormCTA, { eventName: name });
    const obj5 = event(3800);
  }
  return tmp2;
};
