// Module ID: 8358
// Function ID: 8359
// Name: GuildEventsListActionSheet
// Dependencies: [19, 17, 6952, 5098, 1072, 6896, 21, 5243, 8359, 7847, 1113, 7955, 7924, 8360, 7903, 7899, 5836, 1252, 7808, 5503, 8363, 7352, 2]
// Exports: default

// Module 8358 (GuildEventsListActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 5098 */;
import ReadStateConstants from "ReadStateConstants" /* 6896 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7808 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 7899 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 7903 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 7924 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8359 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6952 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let importDefault;

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
  const BottomSheetTitleHeader = guild(7847).BottomSheetTitleHeader;
  if (eventCount > 0) {
    const intl2 = tmp4(1113).intl;
    let obj = { count: eventCount };
    formatToPlainStringResult = intl2.formatToPlainString(tmp4(1113).t.p1zLAf, obj);
  } else {
    const intl = tmp4(1113).intl;
    formatToPlainStringResult = intl.string(tmp4(1113).t.tlopTM);
  }
  let obj2 = { title: formatToPlainStringResult, trailing: tmp3Result };
  if (tmp3Result) {
    let obj3 = {
      accessibilityLabel: intl3.string(guild(1113).t["60lJ0C"]),
      label: intl4.string(guild(1113).t.NzROFF),
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
    const ActionSheetHeaderPressableText = tmp4(7955).ActionSheetHeaderPressableText;
    intl3 = tmp4(1113).intl;
    intl4 = tmp4(1113).intl;
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
  events = events(8360)(guild.id);
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
  events(5836)(() => {
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
  const BottomSheet = guild(5503).BottomSheet;
  const intl = guild(1113).intl;
  let obj2 = { eventCount: events.length, guild };
  ({ inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: events(7352)(ref) });
  events(8363);
  return <BottomSheet showGradient scrollable={events.length > 0} startExpanded dismissAccessibilityLabel={intl.string(guild(1113).t.VSlyAn)} header={null}>{null}</BottomSheet>;
};
