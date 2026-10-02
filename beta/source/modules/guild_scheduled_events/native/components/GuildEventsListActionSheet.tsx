// Module ID: 9056
// Function ID: 9057
// Name: GuildEventsListActionSheet
// Dependencies: [19, 17, 4852, 2057, 1086, 5019, 21, 4837, 558, 576, 8949, 8952, 1127, 8973, 6571, 8938, 9049, 9057, 1253, 5297, 6532, 5895, 9239, 6572, 2]

// Module 9056 (GuildEventsListActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ReadStateConstants from "ReadStateConstants" /* 5019 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6532 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8949 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8952 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9049 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9057 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4852 */;
import createStyles from "createStyles" /* 4837 */;
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
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
        const intl2 = tmp(1127).intl;
        let obj2 = { count: eventCount };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1127).t.p1zLAf, obj2);
      } else {
        const intl = tmp(1127).intl;
        formatToPlainStringResult = intl.string(tmp(1127).t.tlopTM);
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
      const tmp13 = jsx(tmp(6571).BottomSheetTitleHeader, { title: tmp6, trailing: tmp8 });
      cResult[8] = tmp6;
      cResult[9] = tmp8;
      cResult[10] = tmp13;
      tmp11 = tmp13;
    }
    let tmp9 = tmp4;
    if (tmp9) {
      const ActionSheetHeaderPressableText = tmp(8973).ActionSheetHeaderPressableText;
      const intl3 = tmp(1127).intl;
      const intl4 = tmp(1127).intl;
      tmp9 = <ActionSheetHeaderPressableText accessibilityLabel={intl3.string(tmp(1127).t["60lJ0C"])} label={intl4.string(tmp(1127).t.NzROFF)} onPress={tmp5} />;
    }
    cResult[5] = tmp4;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    tmp8 = tmp9;
  }
  const fn = function n() {
    const tmp = closure_1;
    if (tmp) {
      let obj = GuildScheduledEventModalActionCreators;
      let result = obj.closeGuildEventListActionSheet();
      const obj3 = {
        onClose() {
            const obj = guild(dependencyMap[11]);
            const result = obj.openGuildEventListActionSheet(closure_1_0);
          }
      };
      const obj2 = GuildScheduledEventModalActionCreators;
      const result1 = obj2.openCreateOrEditGuildEventModal(guild, obj3);
    }
  };
  cResult[0] = tmp4;
  cResult[1] = guild;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((arg0) => {
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
  const BottomSheetTitleHeader = guild(6571).BottomSheetTitleHeader;
  if (eventCount > 0) {
    const intl2 = tmp4(1127).intl;
    let obj = { count: eventCount };
    formatToPlainStringResult = intl2.formatToPlainString(tmp4(1127).t.p1zLAf, obj);
  } else {
    const intl = tmp4(1127).intl;
    formatToPlainStringResult = intl.string(tmp4(1127).t.tlopTM);
  }
  let obj2 = { title: formatToPlainStringResult, trailing: tmp3Result };
  if (tmp3Result) {
    let obj3 = {
      accessibilityLabel: intl3.string(guild(1127).t["60lJ0C"]),
      label: intl4.string(guild(1127).t.NzROFF),
      onPress() {
          const tmp = closure_1;
          if (tmp) {
            let obj = GuildScheduledEventModalActionCreators;
            let result = obj.closeGuildEventListActionSheet();
            const obj3 = {
              onClose() {
                  const obj = guild(dependencyMap[11]);
                  const result = obj.openGuildEventListActionSheet(closure_1_0);
                }
            };
            const obj2 = GuildScheduledEventModalActionCreators;
            const result1 = obj2.openCreateOrEditGuildEventModal(guild, obj3);
          }
        }
    };
    const ActionSheetHeaderPressableText = tmp4(8973).ActionSheetHeaderPressableText;
    intl3 = tmp4(1127).intl;
    intl4 = tmp4(1127).intl;
    tmp3Result = tmp3(ActionSheetHeaderPressableText, obj3);
  }
  return jsx(BottomSheetTitleHeader, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let arr;
  const tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(31);
  guild = guild.guild;
  const tmp4 = arr;
  arr = arr(8938)(guild.id);
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
      const fn = function p() {
        const obj = guild(dependencyMap[11]);
        const result = obj.closeGuildEventListActionSheet();
      };
      cResult[6] = fn;
    }
    if (cResult[7] !== guild) {
      const fn2 = function y(eventId, recurrenceId) {
        let obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
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
      cResult[8] = fn2;
    }
    if (cResult[9] === arr.length) {
      let tmp16;
      let tmp18;
      let tmp19;
      if (cResult[10] === guild.id) {
        tmp16 = cResult[11];
      }
      tmp4(5297)(tmp16);
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
        cResult[15] = obj3.string(tmp(1127).t.VSlyAn);
        const stringResult = obj3.string(tmp(1127).t.VSlyAn);
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
      class L {
        constructor() {
          let id;
          const item = arr.forEach((id) => {
            const obj = arr(dependencyMap[16]);
            return obj.getGuildEventUserCounts(id.id, id.id, []);
          });
          let obj = GuildScheduledEventManagerDefault;
          const guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
        }
      }
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
  class L {
    constructor() {
      let id;
      const item = arr.forEach((id) => {
        const obj = arr(dependencyMap[16]);
        return obj.getGuildEventUserCounts(id.id, id.id, []);
      });
      let obj = GuildScheduledEventManagerDefault;
      const guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
    }
  }
  const items1 = [arr, guild.id];
  cResult[2] = arr;
  cResult[3] = guild.id;
  cResult[4] = L;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = L;
}) : ((guild) => {
  guild = guild.guild;
  let events;
  events = events(8938)(guild.id);
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
    let obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
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
  events(5297)(() => {
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
  BottomSheet = guild(6572).BottomSheet;
  const intl = guild(1127).intl;
  let obj2 = { eventCount: events.length, guild };
  ({ inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: events(5895)(ref) });
  events(9239);
  return <BottomSheet showGradient scrollable={events.length > 0} startExpanded dismissAccessibilityLabel={intl.string(guild(1127).t.VSlyAn)} header={null}>{null}</BottomSheet>;
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default tmp2;
