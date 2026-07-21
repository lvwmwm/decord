// Module ID: 8441
// Function ID: 67359
// Name: PreviewBody
// Dependencies: []
// Exports: default

// Module 8441 (PreviewBody)
function PreviewBody(event) {
  event = event.event;
  let dependencyMap;
  let eventLocationIconSource;
  const tmp = callback3();
  const arg1 = tmp;
  const channel_id = event.channel_id;
  const importDefault = channel_id;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channel_id), items1);
  const tmp3 = importDefault(dependencyMap[9])(stateFromStores);
  let obj1 = arg1(dependencyMap[10]);
  let locationFromEvent = obj1.getLocationFromEvent(event);
  if (null != tmp3) {
    locationFromEvent = tmp3;
  }
  dependencyMap = locationFromEvent;
  let obj2 = arg1(dependencyMap[11]);
  eventLocationIconSource = obj2.getEventLocationIconSource(event, stateFromStores, true);
  obj = { style: tmp.header };
  obj = { style: tmp.headerTitle };
  const intl = arg1(dependencyMap[13]).intl;
  obj.children = intl.string(arg1(dependencyMap[13]).t.yBsFE3);
  const items2 = [callback(arg1(dependencyMap[12]).Text, obj), ];
  obj1 = { style: tmp.headerSubtitle };
  let formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl2 = arg1(dependencyMap[13]).intl;
    obj2 = {};
    const obj3 = { channel: stateFromStores };
    obj2.channelName = importDefault(dependencyMap[14])(obj3);
    formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[13]).t.sxcQPE, obj2);
  }
  obj1.accessibilityLabel = formatToPlainStringResult;
  obj1.variant = "text-sm/medium";
  obj1.color = "text-default";
  if (null != stateFromStores) {
    const intl4 = arg1(dependencyMap[13]).intl;
    const obj4 = {
      channelName: locationFromEvent,
      channelHook() {
          let obj = {};
          obj = { style: tmp.channelContainer };
          let tmp4 = null != React;
          if (tmp4) {
            obj = { source: React, size: tmp(locationFromEvent[15]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelIcon };
            tmp4 = callback(tmp(locationFromEvent[15]).Icon, obj);
          }
          obj.children = tmp4;
          const items = [callback(closure_4, obj), ];
          const obj1 = { "Null": false, "Null": false, "Null": false, "Null": false };
          let result = null;
          if (null != locationFromEvent) {
            result = tmp(locationFromEvent[16]).guildEventDetailsParser(locationFromEvent, true);
            const obj5 = tmp(locationFromEvent[16]);
          }
          obj1.children = result;
          items[1] = callback(closure_7(locationFromEvent[12]).Text, obj1);
          obj.children = items;
          let str = "preview-body";
          if (null != locationFromEvent) {
            str = locationFromEvent;
          }
          return closure_7(React.Fragment, obj, str);
        }
    };
    let formatResult = intl4.format(arg1(dependencyMap[13]).t.f55NX0, obj4);
  } else {
    const intl3 = arg1(dependencyMap[13]).intl;
    formatResult = intl3.string(arg1(dependencyMap[13]).t.KDPFi9);
  }
  obj1.children = formatResult;
  items2[1] = callback(arg1(dependencyMap[12]).Text, obj1);
  obj.children = items2;
  return closure_7(View, obj);
}
let num = 0;
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.centered = { <string:1334598284>: null, <string:3229045644>: "center", <string:2213734789>: "flex-start" };
obj.centerContainer = { textAlign: true, lineHeight: true };
obj.flex = { Č: "Array", accessibilityDismiss: "isArray" };
obj.header = { accessibilityRole: 24, GuildBadgeFrog: "recent_games_enabled" };
obj.headerTitle = {};
obj.headerSubtitle = { textAlign: "center" };
const tmp2 = arg1(dependencyMap[4]);
obj.eventContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.sm, shadowOffset: { y: null, isArray: null }, overflow: "visible" };
obj.channelContainer = {};
const obj2 = { userName: "MEDIA_POST_PREVIEW_EMBED_CLICKED", effectDisplayType: "PERMISSIONS_REQUESTED", pendingDisplayNameStyles: "<string:410059264>", tintColor: importDefault(dependencyMap[6]).colors.TEXT_SUBTLE };
const obj3 = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.sm, shadowOffset: { y: null, isArray: null }, overflow: "visible" };
if (obj7.isAndroid()) {
  num = 2;
}
obj3.translateY = num;
const items = [obj3];
obj2.transform = items;
obj.channelIcon = obj2;
obj.buttonContainer = { channelId: null, selectedAnswerIds: null, submitting: 24, editing: "center" };
const obj7 = arg1(dependencyMap[7]);
obj.error = { fontFamily: arg1(dependencyMap[3]).Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400 };
let closure_8 = obj.createStyles(obj);
const obj4 = { fontFamily: arg1(dependencyMap[3]).Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx");

export default function EditGuildEventPreview(guild) {
  let error;
  let guildEvent;
  let loading;
  guild = guild.guild;
  const arg1 = guild;
  ({ initialGuildEvent: closure_1, guildEvent } = guild);
  const dependencyMap = guildEvent;
  const isEdit = guild.isEdit;
  const React = isEdit;
  ({ loading, error, onSave: closure_4 } = guild);
  const tmp = callback3();
  const intl = arg1(dependencyMap[13]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[13]).t;
  if (isEdit) {
    let stringResult = string(t.e5VEcE);
  } else {
    stringResult = string(t.60lJ0C);
  }
  const items = [guildEvent, guild.id];
  const memo = React.useMemo(() => guild(guildEvent[17]).convertToFakeGuildEvent(guildEvent, guild.id), items);
  let obj = { bottom: true, style: tmp.container };
  obj = { style: items1 };
  const items1 = [, ];
  ({ flex: arr2[0], centered: arr2[1] } = tmp);
  obj = { style: tmp.centerContainer };
  const obj1 = { style: tmp.eventContainer };
  const items2 = [callback(arg1(dependencyMap[19]).GuildEventCardImageHeader, { event: memo }), callback(arg1(dependencyMap[19]).GuildEventCardHeader, { event: memo, isPreview: true }), callback(arg1(dependencyMap[19]).GuildEventCardMetaInfo, { event: memo }), callback(arg1(dependencyMap[19]).GuildEventSimpleLocation, { event: memo })];
  obj1.children = items2;
  const items3 = [callback2(View, obj1), callback(PreviewBody, { event: memo })];
  obj.children = items3;
  const items4 = [callback2(View, obj), ];
  const obj2 = { style: tmp.buttonContainer };
  let tmp9 = null;
  if (null != error) {
    const obj3 = { style: tmp.error, children: error.getAnyErrorMessage() };
    tmp9 = callback(arg1(dependencyMap[15]).LegacyText, obj3);
  }
  const items5 = [tmp9, ];
  const obj4 = {
    text: stringResult,
    variant: "primary",
    onPress() {
      if (null != guildEvent.recurrenceRule) {
        if (isEdit) {
          let obj = guild(guildEvent[21]);
          if (obj.hasScheduleChanges(callback, guildEvent)) {
            obj = {
              importer() {
                      return callback(paths[24])(paths[23], paths.paths).then((arg0) => {
                        let closure_0 = arg0.default;
                        return (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj["onConfirm"] = closure_4;
                          return callback(closure_0, obj);
                        };
                      });
                    }
            };
            callback(guildEvent[22]).openLazy(obj);
            const obj2 = callback(guildEvent[22]);
          }
        }
      }
      callback2();
    },
    disabled: loading,
    loading
  };
  items5[1] = callback(arg1(dependencyMap[20]).Button, obj4);
  obj2.children = items5;
  items4[1] = callback2(View, obj2);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[18]).SafeAreaPaddingView, obj);
};
