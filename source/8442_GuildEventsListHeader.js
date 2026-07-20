// Module ID: 8442
// Function ID: 67357
// Name: GuildEventsListHeader
// Dependencies: []
// Exports: default

// Module 8442 (GuildEventsListHeader)
function GuildEventsListHeader(arg0) {
  let eventCount;
  let guild;
  ({ eventCount, guild } = arg0);
  const arg1 = guild;
  let tmp = importDefault(dependencyMap[8])(guild.id);
  const importDefault = tmp;
  let obj = {};
  if (eventCount > 0) {
    const intl2 = arg1(dependencyMap[10]).intl;
    obj = { count: eventCount };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[10]).t.p1zLAf, obj);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[10]).t.tlopTM);
  }
  obj.title = formatToPlainStringResult;
  if (tmp) {
    obj = {};
    const intl3 = arg1(dependencyMap[10]).intl;
    obj.accessibilityLabel = intl3.string(arg1(dependencyMap[10]).t.60lJ0C);
    const intl4 = arg1(dependencyMap[10]).intl;
    obj.label = intl4.string(arg1(dependencyMap[10]).t.NzROFF);
    obj.onPress = function onPress() {
      if (tmp) {
        let obj = guild(closure_2[12]);
        const result = obj.closeGuildEventListActionSheet();
        obj = {
          onClose() {
              const result = callback(closure_2[12]).openGuildEventListActionSheet(callback);
            }
        };
        const result1 = guild(closure_2[12]).openCreateOrEditGuildEventModal(guild, obj);
        const obj2 = guild(closure_2[12]);
        const tmp = guild;
      }
    };
    tmp = jsx(arg1(dependencyMap[11]).ActionSheetHeaderPressableText, obj);
  }
  obj.trailing = tmp;
  return jsx(arg1(dependencyMap[9]).BottomSheetTitleHeader, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).ANALYTICS_GUILD_EVENTS_MODAL_NAME;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const ReadStateTypes = arg1(dependencyMap[5]).ReadStateTypes;
const jsx = arg1(dependencyMap[6]).jsx;
let closure_10 = arg1(dependencyMap[7]).createStyles({ container: { flex: 1 } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default function GuildEventsListActionSheet(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const arr = importDefault(dependencyMap[13])(guild.id);
  const importDefault = arr;
  const items = [arr, guild.id];
  const tmp = callback();
  const effect = React.useEffect(() => {
    const item = arr.forEach((id) => callback(closure_2[14]).getGuildEventUserCounts(id.id, id.id, []));
    const guildEventsForCurrentUser = arr(closure_2[14]).getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  const callback = React.useCallback(() => {
    const result = guild(closure_2[12]).closeGuildEventListActionSheet();
  }, []);
  const callback1 = React.useCallback((eventId, recurrenceId) => {
    let obj = guild(closure_2[15]);
    obj = {
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const result = callback(closure_2[12]).openGuildEventListActionSheet(callback);
      }
    };
    const result = obj.openGuildEventDetails(obj);
  }, items1);
  importDefault(dependencyMap[16])(() => {
    let obj = arr(closure_2[17]);
    obj = { type: closure_6, guild_id: guild.id, guild_events_count: arr.length };
    obj.track(constants.OPEN_MODAL, obj);
  });
  const items2 = [guild.id];
  const effect1 = React.useEffect(() => {
    if (null != guild.id) {
      guild(closure_2[18]).ackGuildFeature(guild.id, constants2.GUILD_EVENT);
      const obj = guild(closure_2[18]);
    }
  }, items2);
  let obj = { "Bool(false)": 24, "Bool(false)": 24, "Bool(false)": null, scrollable: arr.length > 0 };
  const intl = arg1(dependencyMap[10]).intl;
  obj.dismissAccessibilityLabel = intl.string(arg1(dependencyMap[10]).t.VSlyAn);
  obj = { eventCount: arr.length, guild };
  obj.header = <GuildEventsListHeader {...obj} />;
  obj = { style: tmp.container };
  const obj1 = { inActionSheet: true, events: arr, onPressEvent: callback1, onCloseAction: callback, guild };
  const ref = React.useRef(closure_5.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  obj1.lastAckedId = importDefault(dependencyMap[21])(ref);
  obj.children = jsx(importDefault(dependencyMap[20]), obj1);
  obj.children = <View {...obj} />;
  return jsx(arg1(dependencyMap[19]).BottomSheet, obj);
};
