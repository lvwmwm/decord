// Module ID: 8497
// Function ID: 67657
// Name: GuildEventsListHeader
// Dependencies: [31, 27, 4142, 1354, 653, 4326, 33, 4130, 8498, 5186, 1212, 8434, 8409, 8499, 8401, 8397, 4559, 675, 5069, 5187, 8502, 5122, 2]
// Exports: default

// Module 8497 (GuildEventsListHeader)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ANALYTICS_GUILD_EVENTS_MODAL_NAME as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { AnalyticEvents } from "ME";
import { ReadStateTypes } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function GuildEventsListHeader(arg0) {
  let eventCount;
  let guild;
  ({ eventCount, guild } = arg0);
  let tmp = importDefault(8498)(guild.id);
  importDefault = tmp;
  let obj = {};
  if (eventCount > 0) {
    const intl2 = guild(1212).intl;
    obj = { count: eventCount };
    let formatToPlainStringResult = intl2.formatToPlainString(guild(1212).t.p1zLAf, obj);
  } else {
    const intl = guild(1212).intl;
    formatToPlainStringResult = intl.string(guild(1212).t.tlopTM);
  }
  obj.title = formatToPlainStringResult;
  if (tmp) {
    obj = {};
    const intl3 = guild(1212).intl;
    obj.accessibilityLabel = intl3.string(guild(1212).t["60lJ0C"]);
    const intl4 = guild(1212).intl;
    obj.label = intl4.string(guild(1212).t.NzROFF);
    obj.onPress = function onPress() {
      if (closure_1) {
        let obj = guild(outer1_2[12]);
        let result = obj.closeGuildEventListActionSheet();
        obj = {
          onClose() {
              const result = guild(outer2_2[12]).openGuildEventListActionSheet(outer1_0);
            }
        };
        const result1 = guild(outer1_2[12]).openCreateOrEditGuildEventModal(guild, obj);
        const obj2 = guild(outer1_2[12]);
      }
    };
    tmp = jsx(guild(8434).ActionSheetHeaderPressableText, {});
  }
  obj.trailing = tmp;
  return jsx(guild(5186).BottomSheetTitleHeader, {});
}
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default function GuildEventsListActionSheet(guild) {
  guild = guild.guild;
  arr = arr(8499)(guild.id);
  const items = [arr, guild.id];
  const tmp = callback();
  const effect = React.useEffect(() => {
    const item = arr.forEach((id) => arr(outer2_2[14]).getGuildEventUserCounts(outer1_0.id, id.id, []));
    const guildEventsForCurrentUser = arr(outer1_2[14]).getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  callback = React.useCallback(() => {
    const result = guild(outer1_2[12]).closeGuildEventListActionSheet();
  }, []);
  const callback1 = React.useCallback((eventId, recurrenceId) => {
    let obj = guild(outer1_2[15]);
    obj = {
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const result = guild(outer2_2[12]).openGuildEventListActionSheet(outer1_0);
      }
    };
    let result = obj.openGuildEventDetails(obj);
  }, items1);
  arr(4559)(() => {
    let obj = arr(outer1_2[17]);
    obj = { type: outer1_6, guild_id: guild.id, guild_events_count: arr.length };
    obj.track(outer1_7.OPEN_MODAL, obj);
  });
  const items2 = [guild.id];
  const effect1 = React.useEffect(() => {
    if (null != guild.id) {
      guild(outer1_2[18]).ackGuildFeature(guild.id, outer1_8.GUILD_EVENT);
      const obj = guild(outer1_2[18]);
    }
  }, items2);
  let obj = { showGradient: true, scrollable: arr.length > 0, startExpanded: true };
  const intl = guild(1212).intl;
  obj.dismissAccessibilityLabel = intl.string(guild(1212).t.VSlyAn);
  obj = { eventCount: arr.length, guild };
  obj.header = <GuildEventsListHeader eventCount={arr.length} guild={guild} />;
  obj = { style: tmp.container };
  const obj1 = { inActionSheet: true, events: arr, onPressEvent: callback1, onCloseAction: callback, guild };
  const ref = React.useRef(_isNativeReflectConstruct.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  obj1.lastAckedId = arr(5122)(ref);
  obj.children = jsx(arr(8502), { inActionSheet: true, events: arr, onPressEvent: callback1, onCloseAction: callback, guild });
  obj.children = <View style={tmp.container} />;
  return jsx(guild(5187).BottomSheet, { style: tmp.container });
};
