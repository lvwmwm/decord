// Module ID: 9058
// Function ID: 9059
// Name: EditGuildEventPreview
// Dependencies: [19, 17, 2045, 1074, 21, 4836, 576, 1364, 504, 4989, 8983, 9059, 4832, 1115, 9060, 1177, 9061, 8982, 6544, 9062, 5281, 8946, 5204, 9078, 1981, 2]
// Exports: default

// Module 9058 (EditGuildEventPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import ScheduleUtils from "ScheduleUtils" /* 8946 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 8982 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let items;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp9;
const guildEventDetailsParser = tmp9(9061);
function PreviewBody(event) {
  let channelContainer;
  let closure_2;
  let closure_5;
  let formatResult;
  let formatToPlainStringResult;
  let intl;
  let items2;
  let obj7;
  event = event.event;
  dependencyMap = undefined;
  let eventLocationIconSource;
  let tmp = closure_8();
  _require = tmp;
  const channel_id = event.channel_id;
  const tmp2 = _require;
  let tmp3 = dependencyMap;
  let obj = require("get initialized");
  let items = [eventLocationIconSource];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const tmp5 = channel_id;
  const tmp6 = channel_id(4989)(stateFromStores);
  dependencyMap = tmp6;
  let obj2 = require("EntityUtils");
  let locationFromEvent = obj2.getLocationFromEvent(event);
  let tmp8 = tmp6;
  if (tmp6 == null) {
    tmp8 = locationFromEvent;
  }
  locationFromEvent = tmp8;
  let tmp2Result = tmp2(9059);
  eventLocationIconSource = tmp2Result.getEventLocationIconSource(event, stateFromStores, true);
  let obj3 = { style: tmp.header, children: items2 };
  let tmp9 = closure_7;
  let tmp11 = closure_6;
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(tmp2(1115).t.yBsFE3) };
  let Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items2 = [closure_6(Text, obj4), ];
  const obj5 = { style: tmp.headerSubtitle, accessibilityLabel: formatToPlainStringResult, variant: "text-sm/medium", color: "text-default", children: formatResult };
  formatToPlainStringResult = undefined;
  const Text2 = tmp2(4832).Text;
  const tmp10 = locationFromEvent;
  if (null != stateFromStores) {
    const intl2 = tmp2(1115).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const obj6 = { channelName: tmp5(9060)(obj7) };
    const sxcQPE = tmp2(1115).t.sxcQPE;
    obj7 = { channel: stateFromStores };
    formatToPlainStringResult = formatToPlainString(sxcQPE, obj6);
  }
  if (null != stateFromStores) {
    const intl4 = tmp2(1115).intl;
    const obj8 = {
      channelName: tmp8,
      channelHook() {
          let tmp2Result;
          const obj = { style: channelContainer.channelContainer, children: tmp2Result };
          tmp2Result = null != closure_5;
          const Fragment = react.Fragment;
          const tmp = metroImportDefault;
          const tmp3 = View;
          if (tmp2Result) {
            const obj2 = { source: tmp5, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp4.channelIcon };
            const Icon = native.Icon;
            tmp2Result = tmp2(Icon, obj2);
          }
          const items = [metroRequire(tmp3, obj), ];
          let tmp11 = closure_2;
          const Text = Text_Text.Text;
          if (closure_2 == null) {
            let result = null;
            if (null != locationFromEvent) {
              const tmp9Result = guildEventDetailsParser;
              result = tmp9Result.guildEventLocationParser(tmp12, true);
            }
            tmp11 = result;
          }
          const obj3 = { children: items };
          items[1] = metroRequire(Text, { accessibilityElementsHidden: true, importantForAccessibility: "no", variant: "text-sm/medium", color: "text-default", children: tmp11 });
          let str = locationFromEvent;
          if (locationFromEvent == null) {
            str = "preview-body";
          }
          return tmp(Fragment, obj3, str);
        }
    };
    formatResult = intl4.format(tmp2(1115).t.f55NX0, obj8);
  } else {
    const intl3 = tmp2(1115).intl;
    formatResult = intl3.string(tmp2(1115).t.KDPFi9);
  }
  items2[1] = tmp11(Text2, obj5);
  return tmp9(tmp10, obj3);
}
const View = react_native.View;
const Fonts = Constants.Fonts;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, centered: { flexDirection: "column", alignItems: "center", justifyContent: "center" }, centerContainer: { flexGrow: 0, width: "100%" }, flex: { flex: 1, overflow: "visible" }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, eventContainer: obj3, channelContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 14 }, channelIcon: obj4, buttonContainer: { position: "absolute", bottom: 16, left: 0, right: 0 }, error: obj5 };
obj2 = { flex: 1, padding: 16, paddingBottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", overflow: "visible" };
createStyles = createStyles.createStyles;
obj3 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
obj4 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4, height: 14, transform: items };
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
items = [{ translateY: num }];
obj5 = { paddingBottom: 8, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx");

export default function EditGuildEventPreview(guild) {
  let error;
  let guildEvent;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let loading;
  let obj2;
  let stringResult;
  let tmp5;
  let tmp6;
  guild = guild.guild;
  ({ initialGuildEvent: importDefault, guildEvent } = guild);
  const isEdit = guild.isEdit;
  ({ loading, error, onSave: View } = guild);
  const tmp = closure_8();
  let tmp2 = guild;
  const intl = guild(guildEvent[13]).intl;
  const string = intl.string;
  const t = guild(guildEvent[13]).t;
  if (isEdit) {
    stringResult = string(t.e5VEcE);
    tmp5 = tmp3;
    tmp6 = tmp2;
  } else {
    stringResult = string(t["60lJ0C"]);
    tmp5 = tmp3;
    tmp6 = tmp2;
  }
  const items = [guildEvent, guild.id];
  const memo = isEdit.useMemo(() => {
    const obj = EditGuildEventUtils;
    return obj.convertToFakeGuildEvent(guildEvent, guild.id);
  }, items);
  let obj = { bottom: true, style: tmp.container, children: closure_7(View, obj2) };
  obj2 = { style: items1, children: items4 };
  items1 = [, ];
  ({ flex: arr2[0], centered: arr2[1] } = tmp);
  let obj3 = { style: tmp.centerContainer, children: items3 };
  const obj4 = { style: tmp.eventContainer, children: items2 };
  const SafeAreaPaddingView = tmp6(tmp5[18]).SafeAreaPaddingView;
  items2 = [closure_6(tmp6(tmp5[19]).GuildEventCardImageHeader, { event: memo }), closure_6(tmp6(tmp5[19]).GuildEventCardHeader, { event: memo, isPreview: true }), closure_6(tmp6(tmp5[19]).GuildEventCardMetaInfo, { event: memo }), closure_6(tmp6(tmp5[19]).GuildEventSimpleLocation, { event: memo })];
  items3 = [closure_7(View, obj4), closure_6(PreviewBody, { event: memo })];
  items4 = [closure_7(View, obj3), ];
  let tmp8Result = null;
  const obj5 = { style: tmp.buttonContainer, children: items5 };
  if (null != error) {
    const obj6 = { style: tmp.error, children: error.getAnyErrorMessage() };
    const LegacyText = tmp6(tmp5[15]).LegacyText;
    tmp8Result = tmp8(LegacyText, obj6);
  }
  items5 = [tmp8Result, ];
  const obj7 = {
    text: stringResult,
    variant: "primary",
    onPress() {
      if (null != guildEvent.recurrenceRule) {
        const tmp2 = isEdit;
        if (tmp2) {
          let obj = ScheduleUtils;
          if (obj.hasScheduleChanges(importDefault, tmp)) {
            const obj3 = {
              importer() {
                      let onConfirm;
                      const promise = guild(guildEvent[24])(guildEvent[23], guildEvent.paths);
                      return promise.then((result) => {
                        let closure_0 = result.default;
                        return (arg0) => {
                          const obj = { onConfirm };
                          const merged = Object.assign(arg0);
                          return closure_3_6(closure_0, obj);
                        };
                      });
                    },
              isDismissable: false
            };
            const obj2 = actions_AlertActionCreatorsDefault;
            obj2.openLazy(obj3);
          }
        }
      }
      View();
    },
    disabled: loading,
    loading
  };
  items5[1] = closure_6(tmp6(tmp5[20]).Button, obj7);
  items4[1] = closure_7(View, obj5);
  return closure_6(SafeAreaPaddingView, obj);
};
