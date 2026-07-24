// Module ID: 12760
// Function ID: 99302
// Dependencies: [31, 27, 1906, 6758, 33, 4130, 689, 8499, 566, 8446, 8390, 4098, 8409, 4341, 8397, 4660, 8405, 4543, 1212, 2]

// Module 12760
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isGuildScheduledEventActive as closure_6 } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { margin: 12, padding: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.header = obj;
obj.descriptionContainerStyle = { paddingTop: 4 };
obj.buttonContainer = { marginTop: 12 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let dependencyMap;
  let importAllResult;
  let tmp = callback3();
  let obj = channel(8499);
  const activeEvent = obj.useActiveEvent(channel.id);
  let obj1 = channel(8499);
  const imminentUpcomingGuildEvents = obj1.useImminentUpcomingGuildEvents(channel.id);
  let obj2 = channel(566);
  const items = [_isNativeReflectConstruct];
  let tmp4 = obj2.useStateFromStores(items, () => outer1_5.getVoiceChannelId()) === channel.id;
  let tmp5 = activeEvent;
  if (null == activeEvent) {
    let first;
    if (null != imminentUpcomingGuildEvents) {
      first = imminentUpcomingGuildEvents[0];
    }
    tmp5 = first;
  }
  dependencyMap = tmp5;
  let obj3 = channel(8446);
  const canManageGuildEventResult = obj3.useManageResourcePermissions(channel).canManageGuildEvent(tmp5);
  const nextRecurrenceIdInEvent = channel(8390).getNextRecurrenceIdInEvent(tmp5);
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
      tmp = null != _undefined;
    }
    if (tmp) {
      activeEvent(_undefined[11]).hideActionSheet();
      const obj = activeEvent(_undefined[11]);
      let result = channel(_undefined[12]).openStartGuildEventModal(_undefined, c3, () => {
        const result = channel(table[13]).openVoiceChannelActionSheet(outer1_0);
      });
      const obj2 = channel(_undefined[12]);
    }
  }, items1);
  if (null == tmp5) {
    return null;
  } else {
    obj = { accessibilityRole: "button", onPress: tmp11, style: tmp.header };
    obj = { event: tmp5, showUserCount: false };
    const items2 = [callback2(channel(8405).GuildEventCardHeader, obj), , ];
    obj1 = { event: tmp5, descriptionContainerStyle: tmp.descriptionContainerStyle, condensed: tmp4 };
    items2[1] = callback2(channel(8405).GuildEventCardMetaInfo, obj1);
    if (tmp4) {
      tmp4 = canManageGuildEventResult;
    }
    if (tmp4) {
      tmp4 = !tmp17;
    }
    if (tmp4) {
      obj2 = { style: tmp.buttonContainer };
      obj3 = { text: null, onPress: null, variant: "active", size: "sm", grow: true };
      const intl = channel(1212).intl;
      obj3.text = intl.string(channel(1212).t.cK1GGY);
      obj3.onPress = callback;
      obj2.children = callback2(channel(4543).Button, obj3);
      tmp4 = callback2(View, obj2);
    }
    items2[2] = tmp4;
    obj.children = items2;
    return closure_8(channel(4660).PressableOpacity, obj);
  }
  const obj5 = channel(8390);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default memoResult;
