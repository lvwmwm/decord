// Module ID: 9497
// Function ID: 9498
// Name: RTCDebugOverlay
// Dependencies: [19, 17, 2045, 2067, 4859, 9498, 4875, 1372, 4861, 21, 4836, 4683, 576, 1177, 504, 4989, 9500, 9499, 573, 6544, 5281, 1115, 2]
// Exports: default

// Module 9497 (RTCDebugOverlay)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Constants from "Constants" /* 4861 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import RTCDebugActionCreatorsAll from "RTCDebugActionCreators" /* 9499 */;
import RTCConnectionUtilsDefault from "RTCConnectionUtils" /* 9500 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import RTCDebugStore from "RTCDebugStore" /* 9498 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4875 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let userId;

let ColorUtils;
let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function Text(arg0) {
  let tmp;
  const obj = { style: tmp.text };
  tmp = closure_18();
  const LegacyText = native.LegacyText;
  const merged = Object.assign(arg0);
  return authStore2(LegacyText, obj);
}
function Section(arg0) {
  let children;
  let items;
  let items1;
  let title;
  ({ title, children } = arg0);
  const obj2 = { children: items };
  items = [title, ":"];
  const obj = { children: items1 };
  items1 = [, ];
  const tmp = closure_18();
  items1[0] = closure_15(Text, obj2);
  const obj3 = { style: tmp.indent, children };
  items1[1] = authStore2(hasOwnProperty, obj3);
  return closure_15(authStore3, obj);
}
function ObjectKV(obj) {
  obj = obj.obj;
  const row = closure_18();
  const entries = Object.entries(obj);
  return entries.map((item) => {
    let obj;
    let obj3;
    let tmp;
    let tmp4Result;
    [tmp, obj] = item;
    let value = obj;
    if (Array.isArray(obj)) {
      const iter = obj.at(-1);
      let value2;
      if (iter != null) {
        value2 = iter.value;
      }
      value = obj;
      if (typeof value2 === "number") {
        value = obj.at(-1).value;
      }
    }
    if (null != value) {
      if (typeof value === "object") {
        const obj2 = { title: tmp, children: authStore2(ObjectKV, obj3) };
        obj3 = { obj: value };
        tmp4Result = authStore2(Section, obj2, tmp);
      }
      return tmp4Result;
    }
    const obj4 = { style: row.row, children: null };
    const items = [tmp, ": ", ];
    if (typeof asString === "function") {
      const obj5 = { children: items };
      items[2] = "" + value;
      obj4.children = tmp6(tmp7, obj5);
      tmp4Result = tmp4(tmp5, obj4, tmp);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
}
function RTCDebugGeneral() {
  let guildId;
  let name;
  let obj6;
  let obj7;
  let obj = guildId(504);
  const items = [RTCConnectionStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { guildId: RTCConnectionStore.getGuildId(), channelId: RTCConnectionStore.getChannelId() };
    return obj;
  }, []);
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  const items1 = [GuildStore];
  const items2 = [guildId];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  const items3 = [ChannelStore];
  const items4 = [channelId];
  const obj3 = guildId(504);
  const stateFromStores1 = obj3.useStateFromStores(items3, () => ChannelStore.getChannel(channelId), items4);
  const obj4 = { id: guildId, name };
  name = null;
  const tmp4 = channelId(4989)(stateFromStores1);
  const tmp6 = Section;
  const tmp7 = ObjectKV;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  const obj5 = { title: "general", children: closure_14(tmp7, obj6) };
  obj6 = { obj: obj7 };
  obj7 = { guild: obj4, channel: { id: channelId, name: tmp4 } };
  return closure_14(tmp6, obj5);
}
function RTCDebugContext(context) {
  context = context.context;
  let obj = context(504);
  let items = [RTCDebugStore];
  const items1 = [context];
  const stateFromStores = obj.useStateFromStores(items, () => RTCDebugStore.getAllStats(context), items1);
  let mapped = null;
  if (null != stateFromStores) {
    mapped = null;
    if (0 !== stateFromStores.length) {
      mapped = stateFromStores.map((mediaEngineConnectionId) => {
        let items;
        let obj3;
        let obj = { title: "" + context + " - " + mediaEngineConnectionId.mediaEngineConnectionId, children: items };
        let tmp4 = null;
        const tmp = closure_15;
        if (null != closure_25[context]) {
          tmp4 = authStore2(tmp3, {});
        }
        items = [tmp4, , , ];
        const obj2 = { title: "transport", children: authStore2(ObjectKV, obj3) };
        obj3 = { obj: mediaEngineConnectionId.transport };
        items[1] = authStore2(Section, obj2);
        const outbound = mediaEngineConnectionId.rtp.outbound;
        const obj4 = {
          title: "outbound",
          children: outbound.map((data, index) => {
            const obj = { data };
            return closure_1_14(closure_1_22, obj, index);
          })
        };
        items[2] = authStore2(Section, obj4);
        const inbound = mediaEngineConnectionId.rtp.inbound;
        const keys = Object.keys(inbound);
        let tmp6Result = null;
        const tmp6 = authStore2;
        if (0 !== keys.length) {
          const obj5 = {
            title: "inbound",
            children: keys.map((userId) => {
                const obj = { userId, data: inbound[userId] };
                return closure_2_14(closure_2_23, obj, userId);
              })
          };
          tmp6Result = tmp6(tmp2, obj5);
        }
        items[3] = tmp6Result;
        return tmp(Section, obj, mediaEngineConnectionId.mediaEngineConnectionId);
      });
    }
  }
  return mapped;
}
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
function asString(arg0) {

}
let createStyles = createStyles_mod;
let obj = { container: obj2, scroller: { flex: 1, margin: 8 }, indent: { marginLeft: 16 }, row: { flexDirection: "row" }, text: obj3, buttonClose: { flexGrow: 0, margin: 8 } };
obj2 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7) };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
ColorUtils = ColorUtils_mod;
obj3 = { color: nativeDefault.unsafe_rawColors.WHITE, fontSize: 14 };
let closure_18 = createStyles(obj);
let closure_22 = react.memo((data) => {
  let obj2;
  data = data.data;
  const obj = { title: data.type, children: authStore2(ObjectKV, obj2) };
  obj2 = { obj: Object.assign(data, Object.assign({ type: 0 })) };
  return authStore2(Section, obj);
});
let closure_23 = react.memo((userId) => {
  userId = userId.userId;
  const data = userId.data;
  let obj = userId(504);
  const items = [UserStore];
  const items1 = [userId];
  const str = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const combined = "" + userId;
  let sum = combined;
  if (null != str) {
    const _HermesInternal = HermesInternal;
    sum = combined + " (" + str.toString() + ")";
  }
  const obj2 = {
    title: sum,
    children: data.map((data, index) => {
      const obj = { data };
      return closure_1_14(closure_1_22, obj, index);
    })
  };
  return closure_14(Section, obj2);
});
let closure_25 = {
  [MediaEngineContextTypes.DEFAULT]: function DefaultContextInfo() {
    let obj = get_initialized;
    const items = [RTCConnectionStore];
    let obj2 = {
      obj: obj.useStateFromStoresObject(items, () => {
        let obj2;
        const obj = { mediaSessionId: RTCConnectionStore.getMediaSessionId(), state: RTCConnectionStore.getState(), hostname: obj2.getShortHostname(RTCConnectionStore.getHostname()), quality: RTCConnectionStore.getQuality(), averagePing: RTCConnectionStore.getAveragePing(), lastPing: RTCConnectionStore.getLastPing(), outboundLossRate: RTCConnectionStore.getOutboundLossRate(), duration: RTCConnectionStore.getDuration() };
        obj2 = RTCConnectionUtilsDefault;
        return obj;
      }, [])
    };
    return authStore2(ObjectKV, obj2);
  },
  [MediaEngineContextTypes.STREAM]: function StreamContextInfo() {
    const first = StreamRTCConnectionStore.getAllActiveStreamKeys()[0];
    let obj = first(504);
    const items = [StreamRTCConnectionStore];
    const items1 = [first];
    let obj2 = {
      obj: obj.useStateFromStoresObject(items, () => {
        let obj2;
        const obj = { mediaSessionId: StreamRTCConnectionStore.getMediaSessionId(first), hostname: obj2.getShortHostname(StreamRTCConnectionStore.getHostname(first)), quality: StreamRTCConnectionStore.getQuality(first) };
        obj2 = RTCConnectionUtilsDefault;
        return obj;
      }, items1)
    };
    return closure_14(ObjectKV, obj2);
  }
};
const result = size.fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default function RTCDebugOverlay(arg0) {
  let Button;
  let intl;
  let items;
  let items1;
  let items2;
  let obj3;
  let onClose;
  let style;
  ({ onClose, style } = arg0);
  const tmp = closure_18();
  const effect = react.useEffect(() => {
    let obj = RTCDebugActionCreatorsAll;
    obj.open();
    return () => {
      const obj = closure_1_1(closure_1_3[18]);
      return obj.wait(closure_1_2(closure_1_3[17]).close);
    };
  }, []);
  const rect = { top: true, left: true, right: true, bottom: true, style: items, children: items2 };
  items = [tmp.container, style];
  let obj = { style: tmp.scroller, indicatorStyle: "white", children: items1 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items1 = [authStore2(RTCDebugGeneral, {}), ];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((context) => {
    const obj = { context };
    return closure_1_14(RTCDebugContext, obj, context);
  });
  items2 = [closure_15(metroRequire, obj), ];
  const obj2 = { style: tmp.buttonClose, children: authStore2(Button, obj3) };
  obj3 = { text: intl.string(intl2.t.cpT0Cq), onPress: onClose };
  Button = components_Button_Button.Button;
  intl = intl2.intl;
  items2[1] = authStore2(hasOwnProperty, obj2);
  return closure_15(SafeAreaPaddingView, rect);
};
