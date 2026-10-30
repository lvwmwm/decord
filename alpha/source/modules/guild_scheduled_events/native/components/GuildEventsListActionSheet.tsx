// Module ID: 9069
// Function ID: 9070
// Name: GuildEventsListActionSheet
// Dependencies: [19, 17, 6836, 4864, 1072, 6770, 21, 5009, 9070, 7315, 1114, 9001, 8976, 9071, 8957, 8953, 5588, 1253, 7273, 5267, 9074, 6953, 2]
// Exports: default

// Module 9069 (GuildEventsListActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4864 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7273 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8953 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 8957 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 8976 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9070 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet, importDefault;

function GuildEventsListHeader(arg0) {
  let closure_1;
  let eventCount;
  let formatToPlainStringResult;
  let guild;
  let intl3;
  let intl4;
  ({ eventCount, guild } = arg0);
  let tmp = dependencyMap;
  let tmp3Result = useCanCreateAnEventDefault(guild.id);
  importDefault = tmp3Result;
  const BottomSheetTitleHeader = guild(7315).BottomSheetTitleHeader;
  if (eventCount > 0) {
    const intl2 = tmp4(1114).intl;
    let obj = { count: eventCount };
    formatToPlainStringResult = intl2.formatToPlainString(tmp4(1114).t.p1zLAf, obj);
  } else {
    const intl = tmp4(1114).intl;
    formatToPlainStringResult = intl.string(tmp4(1114).t.tlopTM);
  }
  let obj2 = { title: formatToPlainStringResult, trailing: tmp3Result };
  if (tmp3Result) {
    let obj3 = {
      accessibilityLabel: intl3.string(guild(1114).t["60lJ0C"]),
      label: intl4.string(guild(1114).t.NzROFF),
      onPress: function handleCreateEvent() {
          const tmp = closure_1;
          if (tmp) {
            let obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
            let result = obj.closeGuildEventListActionSheet();
            const obj3 = {
              onClose() {
                  const obj = guild(dependencyMap[12]);
                  const result = obj.openGuildEventListActionSheet(closure_1_0);
                }
            };
            const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
            const result1 = obj2.openCreateOrEditGuildEventModal(guild, obj3);
          }
        }
    };
    const ActionSheetHeaderPressableText = tmp4(9001).ActionSheetHeaderPressableText;
    intl3 = tmp4(1114).intl;
    intl4 = tmp4(1114).intl;
    tmp3Result = tmp3(ActionSheetHeaderPressableText, obj3);
  }
  return jsx(BottomSheetTitleHeader, obj2);
}
const View = react_native.View;
let closure_6 = GuildScheduledEventsConstants.ANALYTICS_GUILD_EVENTS_MODAL_NAME;
const AnalyticEvents = Constants.AnalyticEvents;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default function GuildEventsListActionSheet(guild) {
  let type;
  guild = guild.guild;
  let events;
  events = events(9071)(guild.id);
  const tmp = closure_10();
  const items = [events, guild.id];
  const ref = react.useRef(ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  const effect = react.useEffect(() => {
    let id;
    const item = arr.forEach((id) => {
      const obj = arr(dependencyMap[14]);
      return obj.getGuildEventUserCounts(id.id, id.id, []);
    });
    let obj = GuildScheduledEventManagerDefault;
    const guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  const callback = react.useCallback(() => {
    const obj = guild(dependencyMap[12]);
    const result = obj.closeGuildEventListActionSheet();
  }, []);
  const callback1 = react.useCallback((eventId, recurrenceId) => {
    let obj = GuildScheduledEventModalActionCreators;
    const obj2 = {
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const obj = guild(dependencyMap[12]);
        const result = obj.openGuildEventListActionSheet(closure_1_0);
      }
    };
    let result = obj.openGuildEventDetails(obj2);
  }, items1);
  events(5588)(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type, guild_id: guild.id, guild_events_count: arr.length };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  });
  const items2 = [guild.id];
  const effect1 = react.useEffect(() => {
    if (null != guild.id) {
      const obj = ReadStateActionCreators;
      obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
    }
  }, items2);
  BottomSheet = guild(5267).BottomSheet;
  const intl = guild(1114).intl;
  let obj2 = { eventCount: events.length, guild };
  ({ inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: events(6953)(ref) });
  events(9074);
  return <BottomSheet showGradient scrollable={events.length > 0} startExpanded dismissAccessibilityLabel={intl.string(guild(1114).t.VSlyAn)} header={null}>{null}</BottomSheet>;
};
