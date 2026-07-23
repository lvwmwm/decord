// Module ID: 8448
// Function ID: 67408
// Name: PreviewBody
// Dependencies: [31, 27, 1348, 653, 33, 4130, 689, 477, 566, 4320, 8349, 8449, 4126, 1212, 8450, 1273, 8451, 8345, 5121, 8361, 4543, 8346, 4471, 8452, 1934, 2]
// Exports: default

// Module 8448 (PreviewBody)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_6;
let closure_7;
let require = arg1;
function PreviewBody(event) {
  event = event.event;
  let locationFromEvent;
  let eventLocationIconSource;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const channel_id = event.channel_id;
  let obj = require(locationFromEvent[8]);
  let items = [_isNativeReflectConstruct];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(channel_id), items1);
  const tmp3 = channel_id(locationFromEvent[9])(stateFromStores);
  let obj1 = require(locationFromEvent[10]);
  locationFromEvent = obj1.getLocationFromEvent(event);
  if (null != tmp3) {
    locationFromEvent = tmp3;
  }
  let obj2 = require(locationFromEvent[11]);
  eventLocationIconSource = obj2.getEventLocationIconSource(event, stateFromStores, true);
  obj = { style: tmp.header };
  obj = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  const intl = require(locationFromEvent[13]).intl;
  obj.children = intl.string(require(locationFromEvent[13]).t.yBsFE3);
  const items2 = [callback(require(locationFromEvent[12]).Text, obj), ];
  obj1 = { style: tmp.headerSubtitle };
  let formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl2 = require(locationFromEvent[13]).intl;
    obj2 = {};
    const obj3 = { channel: stateFromStores };
    obj2.channelName = channel_id(locationFromEvent[14])(obj3);
    formatToPlainStringResult = intl2.formatToPlainString(require(locationFromEvent[13]).t.sxcQPE, obj2);
  }
  obj1.accessibilityLabel = formatToPlainStringResult;
  obj1.variant = "text-sm/medium";
  obj1.color = "text-default";
  if (null != stateFromStores) {
    const intl4 = require(locationFromEvent[13]).intl;
    const obj4 = {
      channelName: locationFromEvent,
      channelHook() {
          let obj = {};
          obj = { style: tmp.channelContainer };
          let tmp4 = null != React;
          if (tmp4) {
            obj = { source: React, size: tmp(locationFromEvent[15]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelIcon };
            tmp4 = outer1_6(tmp(locationFromEvent[15]).Icon, obj);
          }
          obj.children = tmp4;
          const items = [outer1_6(outer1_4, obj), ];
          const obj1 = { accessibilityElementsHidden: true, importantForAccessibility: "no", variant: "text-sm/medium", color: "text-default" };
          let result = null;
          if (null != locationFromEvent) {
            result = tmp(locationFromEvent[16]).guildEventDetailsParser(locationFromEvent, true);
            const obj5 = tmp(locationFromEvent[16]);
          }
          obj1.children = result;
          items[1] = outer1_6(outer1_7(locationFromEvent[12]).Text, obj1);
          obj.children = items;
          let str = "preview-body";
          if (null != locationFromEvent) {
            str = locationFromEvent;
          }
          return outer1_7(React.Fragment, obj, str);
        }
    };
    let formatResult = intl4.format(require(locationFromEvent[13]).t.f55NX0, obj4);
  } else {
    const intl3 = require(locationFromEvent[13]).intl;
    formatResult = intl3.string(require(locationFromEvent[13]).t.KDPFi9);
  }
  obj1.children = formatResult;
  items2[1] = callback(require(locationFromEvent[12]).Text, obj1);
  obj.children = items2;
  return closure_7(View, obj);
}
let num = 0;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, padding: 16, paddingBottom: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", overflow: "visible" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.centered = { flexDirection: "column", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.centerContainer = { flexGrow: 0, width: "100%" };
_createForOfIteratorHelperLoose.flex = { flex: 1, overflow: "visible" };
_createForOfIteratorHelperLoose.header = { alignItems: "center", paddingBottom: 24 };
_createForOfIteratorHelperLoose.headerTitle = { marginTop: 16, marginBottom: 8 };
_createForOfIteratorHelperLoose.headerSubtitle = { textAlign: "center" };
let obj1 = { padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
_createForOfIteratorHelperLoose.eventContainer = obj1;
_createForOfIteratorHelperLoose.channelContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 14 };
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginRight: 4, height: 14 };
let obj3 = {};
if (set.isAndroid()) {
  num = 2;
}
obj3.translateY = num;
let items = [obj3];
obj2.transform = items;
_createForOfIteratorHelperLoose.channelIcon = obj2;
_createForOfIteratorHelperLoose.buttonContainer = { position: "absolute", bottom: 16, left: 0, right: 0 };
let obj4 = { paddingBottom: 8, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose.error = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = set.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx");

export default function EditGuildEventPreview(guild) {
  let View;
  let error;
  let guildEvent;
  let importDefault;
  let loading;
  guild = guild.guild;
  ({ initialGuildEvent: importDefault, guildEvent } = guild);
  const isEdit = guild.isEdit;
  ({ loading, error, onSave: View } = guild);
  const tmp = _createForOfIteratorHelperLoose();
  const intl = guild(guildEvent[13]).intl;
  const string = intl.string;
  const t = guild(guildEvent[13]).t;
  if (isEdit) {
    let stringResult = string(t.e5VEcE);
  } else {
    stringResult = string(t["60lJ0C"]);
  }
  const items = [guildEvent, guild.id];
  const memo = isEdit.useMemo(() => guild(guildEvent[17]).convertToFakeGuildEvent(guildEvent, guild.id), items);
  let obj = { bottom: true, style: tmp.container };
  obj = { style: items1 };
  items1 = [, ];
  ({ flex: arr2[0], centered: arr2[1] } = tmp);
  obj = { style: tmp.centerContainer };
  const obj1 = { style: tmp.eventContainer };
  const items2 = [callback(guild(guildEvent[19]).GuildEventCardImageHeader, { event: memo }), callback(guild(guildEvent[19]).GuildEventCardHeader, { event: memo, isPreview: true }), callback(guild(guildEvent[19]).GuildEventCardMetaInfo, { event: memo }), callback(guild(guildEvent[19]).GuildEventSimpleLocation, { event: memo })];
  obj1.children = items2;
  const items3 = [callback2(View, obj1), callback(PreviewBody, { event: memo })];
  obj.children = items3;
  const items4 = [callback2(View, obj), ];
  let obj2 = { style: tmp.buttonContainer };
  let tmp9 = null;
  if (null != error) {
    const obj3 = { style: tmp.error, children: error.getAnyErrorMessage() };
    tmp9 = callback(guild(guildEvent[15]).LegacyText, obj3);
  }
  const items5 = [tmp9, ];
  const obj4 = {
    text: stringResult,
    variant: "primary",
    onPress() {
      if (null != guildEvent.recurrenceRule) {
        if (isEdit) {
          let obj = guild(guildEvent[21]);
          if (obj.hasScheduleChanges(closure_1, guildEvent)) {
            obj = {
              importer() {
                      return guild(guildEvent[24])(guildEvent[23], guildEvent.paths).then((arg0) => {
                        let closure_0 = arg0.default;
                        return (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj["onConfirm"] = outer3_4;
                          return outer4_6(closure_0, obj);
                        };
                      });
                    }
            };
            outer1_1(guildEvent[22]).openLazy(obj);
            const obj2 = outer1_1(guildEvent[22]);
          }
        }
      }
      callback();
    },
    disabled: loading,
    loading
  };
  items5[1] = callback(guild(guildEvent[20]).Button, obj4);
  obj2.children = items5;
  items4[1] = callback2(View, obj2);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(guild(guildEvent[18]).SafeAreaPaddingView, obj);
};
