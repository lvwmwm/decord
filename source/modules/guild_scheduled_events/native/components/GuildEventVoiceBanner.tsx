// Module ID: 12590
// Function ID: 96797
// Dependencies: []

// Module 12590
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).isGuildScheduledEventActive;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let obj = {};
obj = { "Bool(false)": 406501434.32031274, "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001581278477682522, "Bool(false)": 107974007009402260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 994899923190653700000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": true, borderRadius: importDefault(dependencyMap[6]).radii.sm, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.header = obj;
obj.descriptionContainerStyle = { paddingTop: 4 };
obj.buttonContainer = { marginTop: 12 };
let closure_9 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  let dependencyMap;
  let importAllResult;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const activeEvent = obj.useActiveEvent(channel.id);
  const importDefault = activeEvent;
  let obj1 = arg1(dependencyMap[7]);
  const imminentUpcomingGuildEvents = obj1.useImminentUpcomingGuildEvents(channel.id);
  let obj2 = arg1(dependencyMap[8]);
  const items = [closure_5];
  let tmp4 = obj2.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId()) === channel.id;
  let tmp5 = activeEvent;
  if (null == activeEvent) {
    let first;
    if (null != imminentUpcomingGuildEvents) {
      first = imminentUpcomingGuildEvents[0];
    }
    tmp5 = first;
  }
  dependencyMap = tmp5;
  let obj3 = arg1(dependencyMap[9]);
  const canManageGuildEventResult = obj3.useManageResourcePermissions(channel).canManageGuildEvent(tmp5);
  const nextRecurrenceIdInEvent = arg1(dependencyMap[10]).getNextRecurrenceIdInEvent(tmp5);
  let tmp9;
  if (null != nextRecurrenceIdInEvent) {
    tmp9 = nextRecurrenceIdInEvent;
  }
  importAllResult = tmp9;
  const items1 = [tmp5, channel, activeEvent, tmp9];
  [][0] = tmp5;
  const callback = importAllResult.useCallback(() => {
    let tmp = null == activeEvent;
    if (tmp) {
      tmp = null != tmp5;
    }
    if (tmp) {
      activeEvent(tmp5[11]).hideActionSheet();
      const obj = activeEvent(tmp5[11]);
      const result = channel(tmp5[12]).openStartGuildEventModal(tmp5, tmp9, () => {
        const result = callback(closure_2[13]).openVoiceChannelActionSheet(callback);
      });
      const obj2 = channel(tmp5[12]);
    }
  }, items1);
  if (null == tmp5) {
    return null;
  } else {
    obj = { accessibilityRole: "button", onPress: tmp11, style: tmp.header };
    obj = { event: tmp5, showUserCount: false };
    const items2 = [callback2(arg1(dependencyMap[16]).GuildEventCardHeader, obj), , ];
    obj1 = { event: tmp5, descriptionContainerStyle: tmp.descriptionContainerStyle, condensed: tmp4 };
    items2[1] = callback2(arg1(dependencyMap[16]).GuildEventCardMetaInfo, obj1);
    if (tmp4) {
      tmp4 = canManageGuildEventResult;
    }
    if (tmp4) {
      tmp4 = !tmp17;
    }
    if (tmp4) {
      obj2 = { style: tmp.buttonContainer };
      obj3 = { "Bool(false)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(false)": null, "Bool(false)": "956202360ccc6511b561141de5cd74d2", "Bool(false)": "ro.messages.956202360ccc6511b561141de5cd74d2.compiled.messages", color: "jsona" };
      const intl = arg1(dependencyMap[18]).intl;
      obj3.text = intl.string(arg1(dependencyMap[18]).t.cK1GGY);
      obj3.onPress = callback;
      obj2.children = callback2(arg1(dependencyMap[17]).Button, obj3);
      tmp4 = callback2(View, obj2);
    }
    items2[2] = tmp4;
    obj.children = items2;
    return closure_8(arg1(dependencyMap[15]).PressableOpacity, obj);
  }
  const obj5 = arg1(dependencyMap[10]);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default memoResult;
