// Module ID: 10794
// Function ID: 83786
// Name: Text
// Dependencies: [31, 27, 1348, 1838, 4202, 10795, 4216, 1849, 4191, 33, 4130, 3974, 689, 1273, 566, 4320, 10797, 10796, 686, 5121, 4543, 1212, 2]
// Exports: default

// Module 10794 (Text)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
const require = arg1;
function Text(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["style"] = callback3().text;
  return callback(require(1273) /* Button */.LegacyText, obj);
}
function Section(arg0) {
  let children;
  let title;
  ({ title, children } = arg0);
  let obj = {};
  const items = [title, ":"];
  const items1 = [callback2(Text, { children: items }), ];
  obj = { style: callback3().indent, children };
  items1[1] = callback(closure_5, obj);
  obj.children = items1;
  return callback2(closure_16, obj);
}
function ObjectKV(obj) {
  let closure_0 = callback3();
  const entries = Object.entries(obj.obj);
  return entries.map((arg0) => {
    let obj;
    let tmp;
    [tmp, obj] = arg0;
    let value = obj;
    if (Array.isArray(obj)) {
      const iter = obj.at(-1);
      value = undefined;
      if (null != iter) {
        value = iter.value;
      }
      value = obj;
      if ("number" === typeof value) {
        value = obj.at(-1).value;
      }
    }
    if (null != value) {
      if ("object" === typeof value) {
        obj = { title: tmp };
        obj = { obj: value };
        obj.children = outer1_14(outer1_24, obj);
        let tmp4 = outer1_14(outer1_23, obj, tmp);
      }
      return tmp4;
    }
    const obj1 = { style: row.row };
    const obj2 = {};
    const items = [tmp, ": ", outer1_17(value)];
    obj2.children = items;
    obj1.children = outer1_15(outer1_22, obj2);
    tmp4 = outer1_14(outer1_5, obj1, tmp);
  });
}
function RTCDebugGeneral() {
  let obj = guildId(566);
  const items = [closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guildId: outer1_9.getGuildId(), channelId: outer1_9.getChannelId() }), []);
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  let obj1 = guildId(566);
  const items1 = [closure_8];
  const items2 = [guildId];
  const stateFromStores = obj1.useStateFromStores(items1, () => outer1_8.getGuild(guildId), items2);
  let obj2 = guildId(566);
  const items3 = [_isNativeReflectConstruct];
  const items4 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => outer1_7.getChannel(channelId), items4);
  obj = { title: "general" };
  obj = {};
  obj1 = {};
  obj2 = { id: guildId };
  let name = null;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj2.name = name;
  obj1.guild = obj2;
  obj1.channel = { id: channelId, name: channelId(4320)(stateFromStores1) };
  obj.obj = obj1;
  obj.children = closure_14(ObjectKV, obj);
  return closure_14(Section, obj);
}
function renderContextInfo(arg0) {
  let tmp2 = null;
  if (null != table[arg0]) {
    tmp2 = callback(tmp, {});
  }
  return tmp2;
}
function RTCDebugContext(context) {
  context = context.context;
  let items = [closure_10];
  const items1 = [context];
  const stateFromStores = context(566).useStateFromStores(items, () => outer1_10.getAllStats(context), items1);
  let mapped = null;
  if (null != stateFromStores) {
    mapped = null;
    if (0 !== stateFromStores.length) {
      mapped = stateFromStores.map((mediaEngineConnectionId) => {
        let obj = { title: "" + inbound + " - " + mediaEngineConnectionId.mediaEngineConnectionId };
        const items = [outer1_26(inbound), , , ];
        obj = { title: "transport", children: outer1_14(outer1_24, obj) };
        obj = { obj: mediaEngineConnectionId.transport };
        items[1] = outer1_14(outer1_23, obj);
        const outbound = mediaEngineConnectionId.rtp.outbound;
        items[2] = outer1_14(outer1_23, { title: "outbound", children: outbound.map((data) => outer2_14(outer2_19, { data }, arg1)) });
        inbound = mediaEngineConnectionId.rtp.inbound;
        const keys = Object.keys(inbound);
        let tmp3 = null;
        if (0 !== keys.length) {
          const obj2 = { title: "inbound", children: keys.map((userId) => outer2_14(outer2_20, { userId, data: inbound[userId] }, userId)) };
          tmp3 = outer1_14(outer1_23, obj2);
        }
        items[3] = tmp3;
        obj.children = items;
        return outer1_15(outer1_23, obj, mediaEngineConnectionId.mediaEngineConnectionId);
      });
    }
  }
  return mapped;
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
function asString(arg0) {
  return "" + arg0;
}
let obj = {};
obj = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.7);
obj.container = obj;
obj.scroller = { flex: 1, margin: 8 };
obj.indent = { marginLeft: 16 };
obj.row = { flexDirection: "row" };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, fontSize: 14 };
obj.text = _createForOfIteratorHelperLoose;
obj.buttonClose = { flexGrow: 0, margin: 8 };
let closure_18 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_19 = importAllResult.memo((data) => {
  data = data.data;
  let obj = Object.create(null);
  obj.type = 0;
  obj = { title: data.type };
  obj = { obj: Object.assign(data, obj) };
  obj.children = callback(ObjectKV, obj);
  return callback(Section, obj);
});
let closure_20 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const data = userId.data;
  let obj = userId(566);
  const items = [closure_12];
  const items1 = [userId];
  const str = obj.useStateFromStores(items, () => outer1_12.getUser(userId), items1);
  const combined = "" + userId;
  let sum = combined;
  if (null != str) {
    const _HermesInternal = HermesInternal;
    sum = combined + " (" + str.toString() + ")";
  }
  obj = { title: sum, children: data.map((data) => outer1_14(outer1_19, { data }, arg1)) };
  return callback(Section, obj);
});
let closure_21 = {
  [MediaEngineContextTypes.DEFAULT]: function DefaultContextInfo() {
    let obj = require(566) /* initialize */;
    const items = [closure_9];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: outer1_9.getMediaSessionId(), state: outer1_9.getState(), hostname: outer1_1(outer1_3[16]).getShortHostname(outer1_9.getHostname()), quality: outer1_9.getQuality(), averagePing: outer1_9.getAveragePing(), lastPing: outer1_9.getLastPing(), outboundLossRate: outer1_9.getOutboundLossRate(), duration: outer1_9.getDuration() };
        return obj;
      }, [])
    };
    return callback(ObjectKV, obj);
  },
  [MediaEngineContextTypes.STREAM]: function StreamContextInfo() {
    const first = allActiveStreamKeys.getAllActiveStreamKeys()[0];
    let obj = first(566);
    const items = [allActiveStreamKeys];
    const items1 = [first];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: outer1_11.getMediaSessionId(first), hostname: outer1_1(outer1_3[16]).getShortHostname(outer1_11.getHostname(first)), quality: outer1_11.getQuality(first) };
        return obj;
      }, items1)
    };
    return callback(ObjectKV, obj);
  }
};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default function RTCDebugOverlay(arg0) {
  let onClose;
  let style;
  ({ onClose, style } = arg0);
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    outer1_2(outer1_3[17]).open();
    return () => outer2_1(outer2_3[18]).wait(outer2_2(outer2_3[17]).close);
  }, []);
  let obj = { top: true, left: true, right: true, bottom: true };
  const items = [tmp.container, style];
  obj.style = items;
  obj = { style: tmp.scroller, indicatorStyle: "white" };
  const items1 = [callback(RTCDebugGeneral, {}), ];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((context) => outer1_14(outer1_27, { context }, context));
  obj.children = items1;
  const items2 = [callback2(closure_6, obj), ];
  obj = { style: tmp.buttonClose };
  const obj1 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj1.onPress = onClose;
  obj.children = callback(require(4543) /* Button */.Button, obj1);
  items2[1] = callback(closure_5, obj);
  obj.children = items2;
  return callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
