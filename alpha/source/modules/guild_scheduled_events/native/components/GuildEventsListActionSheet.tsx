// Module ID: 8636
// Function ID: 8637
// Name: GuildEventsListActionSheet
// Dependencies: [19, 17, 6042, 2070, 1085, 5974, 21, 5091, 558, 576, 8637, 8518, 1126, 8546, 6835, 8638, 8501, 8497, 1265, 5393, 6796, 6167, 8641, 6836, 2]

// Module 8636 (GuildEventsListActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2070 */;
import ReadStateConstants from "ReadStateConstants" /* 5974 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6796 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8497 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 8501 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 8518 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8637 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, importDefault;

const View = react_native.View;
const type = GuildScheduledEventsConstants.ANALYTICS_GUILD_EVENTS_MODAL_NAME;
const AnalyticEvents = Constants.AnalyticEvents;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventsListHeader(arg0) {
  let closure_1;
  let eventCount;
  let guild;
  let tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(11);
  ({ eventCount, guild } = arg0);
  const tmp4 = useCanCreateAnEventDefault(guild.id);
  importDefault = tmp4;
  if (cResult[0] === tmp4) {
    let tmp5;
    let tmp6;
    if (cResult[1] === guild) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== eventCount) {
      let formatToPlainStringResult;
      if (eventCount > 0) {
        const intl2 = tmp(1126).intl;
        let obj2 = { count: eventCount };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.p1zLAf, obj2);
      } else {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp(1126).t.tlopTM);
      }
      cResult[3] = eventCount;
      cResult[4] = formatToPlainStringResult;
      tmp6 = formatToPlainStringResult;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4) {
      let tmp8;
      if (cResult[6] === tmp5) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        let tmp11;
        if (cResult[9] === tmp8) {
          tmp11 = cResult[10];
        }
        return tmp11;
      }
      const tmp13 = jsx(tmp(6835).BottomSheetTitleHeader, { title: tmp6, trailing: tmp8 });
      cResult[8] = tmp6;
      cResult[9] = tmp8;
      cResult[10] = tmp13;
      tmp11 = tmp13;
    }
    let tmp9 = tmp4;
    if (tmp9) {
      const ActionSheetHeaderPressableText = tmp(8546).ActionSheetHeaderPressableText;
      const intl3 = tmp(1126).intl;
      const intl4 = tmp(1126).intl;
      tmp9 = <ActionSheetHeaderPressableText accessibilityLabel={intl3.string(tmp(1126).t["60lJ0C"])} label={intl4.string(tmp(1126).t.NzROFF)} onPress={tmp5} />;
    }
    cResult[5] = tmp4;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    tmp8 = tmp9;
  }
  function handleCreateEvent() {
    const tmp = closure_1;
    if (tmp) {
      let obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
      let result = obj.closeGuildEventListActionSheet();
      const obj3 = {
        onClose() {
            const obj = guild(dependencyMap[11]);
            const result = obj.openGuildEventListActionSheet(closure_1_0);
          }
      };
      const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
      const result1 = obj2.openCreateOrEditGuildEventModal(guild, obj3);
    }
  }
  cResult[0] = tmp4;
  cResult[1] = guild;
  cResult[2] = handleCreateEvent;
  tmp5 = handleCreateEvent;
}) : (function GuildEventsListHeader(arg0) {
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
  const BottomSheetTitleHeader = guild(6835).BottomSheetTitleHeader;
  if (eventCount > 0) {
    const intl2 = tmp4(1126).intl;
    let obj = { count: eventCount };
    formatToPlainStringResult = intl2.formatToPlainString(tmp4(1126).t.p1zLAf, obj);
  } else {
    const intl = tmp4(1126).intl;
    formatToPlainStringResult = intl.string(tmp4(1126).t.tlopTM);
  }
  let obj2 = { title: formatToPlainStringResult, trailing: tmp3Result };
  if (tmp3Result) {
    let obj3 = {
      accessibilityLabel: intl3.string(guild(1126).t["60lJ0C"]),
      label: intl4.string(guild(1126).t.NzROFF),
      onPress: function handleCreateEvent() {
          const tmp = closure_1;
          if (tmp) {
            let obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
            let result = obj.closeGuildEventListActionSheet();
            const obj3 = {
              onClose() {
                  const obj = guild(dependencyMap[11]);
                  const result = obj.openGuildEventListActionSheet(closure_1_0);
                }
            };
            const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
            const result1 = obj2.openCreateOrEditGuildEventModal(guild, obj3);
          }
        }
    };
    const ActionSheetHeaderPressableText = tmp4(8546).ActionSheetHeaderPressableText;
    intl3 = tmp4(1126).intl;
    intl4 = tmp4(1126).intl;
    tmp3Result = tmp3(ActionSheetHeaderPressableText, obj3);
  }
  return jsx(BottomSheetTitleHeader, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventsListActionSheet(guild) {
  let arr;
  const tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(31);
  guild = guild.guild;
  const tmp4 = arr;
  arr = arr(8638)(guild.id);
  closure_10();
  if (cResult[0] !== guild.id) {
    cResult[0] = guild.id;
    cResult[1] = ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT);
    const ackMessageIdResult = ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT);
  }
  let obj2 = react;
  if (cResult[2] === arr) {
    let tmp10;
    let tmp11;
    if (cResult[3] === guild.id) {
      tmp10 = cResult[4];
      tmp11 = cResult[5];
    }
    const effect = obj2.useEffect(tmp10, tmp11);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function p() {
        const obj = guild(dependencyMap[11]);
        const result = obj.closeGuildEventListActionSheet();
      };
      cResult[6] = fn2;
    }
    if (cResult[7] !== guild) {
      const fn3 = function y(eventId, recurrenceId) {
        let obj = GuildScheduledEventModalActionCreators;
        const obj2 = {
          eventId: eventId.id,
          event: eventId,
          recurrenceId,
          onClose() {
            const obj = guild(dependencyMap[11]);
            const result = obj.openGuildEventListActionSheet(closure_1_0);
          }
        };
        let result = obj.openGuildEventDetails(obj2);
      };
      cResult[7] = guild;
      cResult[8] = fn3;
    }
    if (cResult[9] === arr.length) {
      let tmp16;
      let tmp18;
      let tmp19;
      if (cResult[10] === guild.id) {
        tmp16 = cResult[11];
      }
      tmp4(5393)(tmp16);
      if (cResult[12] !== guild.id) {
        class M {
          constructor() {
            if (null != guild.id) {
              const obj = ReadStateActionCreators;
              obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
            }
          }
        }
        const items = [guild.id];
        cResult[12] = guild.id;
        cResult[13] = M;
        cResult[14] = items;
        class T {
          constructor() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { type, guild_id: guild.id, guild_events_count: arr.length };
            obj.track(AnalyticEvents.OPEN_MODAL, obj2);
          }
        }
        tmp18 = M;
      } else {
        class M {
          constructor() {
            if (null != guild.id) {
              const obj = ReadStateActionCreators;
              obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
            }
          }
        }
        tmp19 = cResult[14];
      }
      const effect1 = obj2.useEffect(tmp18, tmp19);
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            if (null != guild.id) {
              const obj = ReadStateActionCreators;
              obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
            }
          }
        }
        cResult[15] = obj3.string(tmp(1126).t.VSlyAn);
        const stringResult = obj3.string(tmp(1126).t.VSlyAn);
      } else {
        class M {
          constructor() {
            if (null != guild.id) {
              const obj = ReadStateActionCreators;
              obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
            }
          }
        }
      }
      class T {
        constructor() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type, guild_id: guild.id, guild_events_count: arr.length };
          obj.track(AnalyticEvents.OPEN_MODAL, obj2);
        }
      }
      const tmp27 = <closure_11 eventCount={arr.length} guild={guild} />;
      cResult[16] = arr.length;
      cResult[17] = guild;
      cResult[18] = tmp27;
    }
    class T {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type, guild_id: guild.id, guild_events_count: arr.length };
        obj.track(AnalyticEvents.OPEN_MODAL, obj2);
      }
    }
    cResult[9] = arr.length;
    cResult[10] = guild.id;
    cResult[11] = T;
    tmp16 = T;
  }
  const fn = function _() {
    let id;
    const item = arr.forEach((id) => {
      const obj = arr(dependencyMap[16]);
      return obj.getGuildEventUserCounts(id.id, id.id, []);
    });
    let obj = GuildScheduledEventManagerDefault;
    const guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
  };
  const items1 = [arr, guild.id];
  cResult[2] = arr;
  cResult[3] = guild.id;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = fn;
}) : (function GuildEventsListActionSheet(guild) {
  guild = guild.guild;
  let events;
  events = events(8638)(guild.id);
  const tmp = closure_10();
  const items = [events, guild.id];
  const ref = react.useRef(ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  const effect = react.useEffect(() => {
    let id;
    const item = arr.forEach((id) => {
      const obj = arr(dependencyMap[16]);
      return obj.getGuildEventUserCounts(id.id, id.id, []);
    });
    let obj = GuildScheduledEventManagerDefault;
    const guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  const callback = react.useCallback(() => {
    const obj = guild(dependencyMap[11]);
    const result = obj.closeGuildEventListActionSheet();
  }, []);
  const callback1 = react.useCallback((eventId, recurrenceId) => {
    let obj = GuildScheduledEventModalActionCreators;
    const obj2 = {
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const obj = guild(dependencyMap[11]);
        const result = obj.openGuildEventListActionSheet(closure_1_0);
      }
    };
    let result = obj.openGuildEventDetails(obj2);
  }, items1);
  events(5393)(() => {
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
  BottomSheet = guild(6836).BottomSheet;
  const intl = guild(1126).intl;
  let obj2 = { eventCount: events.length, guild };
  ({ inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: events(6167)(ref) });
  events(8641);
  return <BottomSheet showGradient scrollable={events.length > 0} startExpanded dismissAccessibilityLabel={intl.string(guild(1126).t.VSlyAn)} header={null}>{null}</BottomSheet>;
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default tmp2;
