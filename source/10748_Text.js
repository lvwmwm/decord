// Module ID: 10748
// Function ID: 83498
// Name: Text
// Dependencies: []
// Exports: default

// Module 10748 (Text)
function Text(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["style"] = callback3().text;
  return callback(arg1(dependencyMap[13]).LegacyText, obj);
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
        obj.children = callback(closure_24, obj);
        let tmp4 = callback(closure_23, obj, tmp);
      }
      return tmp4;
    }
    const obj1 = { style: row.row };
    const obj2 = {};
    const items = [tmp, ": ", callback3(value)];
    obj2.children = items;
    obj1.children = callback2(closure_22, obj2);
    tmp4 = callback(closure_5, obj1, tmp);
  });
}
function RTCDebugGeneral() {
  let obj = arg1(dependencyMap[14]);
  const items = [closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guildId: store.getGuildId(), channelId: store.getChannelId() }), []);
  const guildId = stateFromStoresObject.guildId;
  const arg1 = guildId;
  const channelId = stateFromStoresObject.channelId;
  const importDefault = channelId;
  let obj1 = arg1(dependencyMap[14]);
  const items1 = [closure_8];
  const items2 = [guildId];
  const stateFromStores = obj1.useStateFromStores(items1, () => guild.getGuild(guildId), items2);
  let obj2 = arg1(dependencyMap[14]);
  const items3 = [closure_7];
  const items4 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => channel.getChannel(channelId), items4);
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
  obj1.channel = { id: channelId, name: importDefault(dependencyMap[15])(stateFromStores1) };
  obj.obj = obj1;
  obj.children = closure_14(ObjectKV, obj);
  return closure_14(Section, obj);
}
function renderContextInfo(arg0) {
  let tmp2 = null;
  if (null != closure_21[arg0]) {
    tmp2 = callback(tmp, {});
  }
  return tmp2;
}
function RTCDebugContext(context) {
  context = context.context;
  const arg1 = context;
  const items = [closure_10];
  const items1 = [context];
  const stateFromStores = arg1(dependencyMap[14]).useStateFromStores(items, () => allStats.getAllStats(context), items1);
  let mapped = null;
  if (null != stateFromStores) {
    mapped = null;
    if (0 !== stateFromStores.length) {
      mapped = stateFromStores.map((mediaEngineConnectionId) => {
        let obj = { title: "" + context + " - " + mediaEngineConnectionId.mediaEngineConnectionId };
        const items = [callback2(context), , , ];
        obj = { title: "transport", children: callback(closure_24, obj) };
        obj = { obj: mediaEngineConnectionId.transport };
        items[1] = callback(closure_23, obj);
        const outbound = mediaEngineConnectionId.rtp.outbound;
        items[2] = callback(closure_23, { title: "outbound", children: outbound.map((data) => callback(closure_19, { data }, arg1)) });
        const inbound = mediaEngineConnectionId.rtp.inbound;
        const context = inbound;
        const keys = Object.keys(inbound);
        let tmp3 = null;
        if (0 !== keys.length) {
          const obj2 = { title: "inbound", children: keys.map((userId) => callback(closure_20, { userId, data: inbound[userId] }, userId)) };
          tmp3 = callback(closure_23, obj2);
        }
        items[3] = tmp3;
        obj.children = items;
        return closure_15(closure_23, obj, mediaEngineConnectionId.mediaEngineConnectionId);
      });
    }
  }
  return mapped;
}
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = tmp2);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const MediaEngineContextTypes = arg1(dependencyMap[8]).MediaEngineContextTypes;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[9]));
function asString(arg0) {
  return "" + arg0;
}
let obj1 = arg1(dependencyMap[10]);
let obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
const tmp3 = arg1(dependencyMap[9]);
obj["backgroundColor"] = arg1(dependencyMap[11]).hexWithOpacity(importDefault(dependencyMap[12]).unsafe_rawColors.BLACK, 0.7);
obj.container = obj;
obj.scroller = {};
obj.indent = { marginLeft: 16 };
obj.row = { flexDirection: "row" };
obj1 = { color: importDefault(dependencyMap[12]).unsafe_rawColors.WHITE, fontSize: 14 };
obj.text = obj1;
obj.buttonClose = {};
let closure_18 = obj1.createStyles(obj);
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
  const arg1 = userId;
  const data = userId.data;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_12];
  const items1 = [userId];
  const str = obj.useStateFromStores(items, () => user.getUser(userId), items1);
  const combined = "" + userId;
  let sum = combined;
  if (null != str) {
    const _HermesInternal = HermesInternal;
    sum = combined + " (" + str.toString() + ")";
  }
  obj = { title: sum, children: data.map((data) => callback(closure_19, { data }, arg1)) };
  return callback(Section, obj);
});
let closure_21 = {
  [MediaEngineContextTypes.DEFAULT]: function DefaultContextInfo() {
    let obj = arg1(dependencyMap[14]);
    const items = [closure_9];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: store.getMediaSessionId(), state: store.getState(), hostname: callback(closure_3[16]).getShortHostname(store.getHostname()), quality: store.getQuality(), averagePing: store.getAveragePing(), lastPing: store.getLastPing(), outboundLossRate: store.getOutboundLossRate(), duration: store.getDuration() };
        return obj;
      }, [])
    };
    return callback(ObjectKV, obj);
  },
  [MediaEngineContextTypes.STREAM]: function StreamContextInfo() {
    const first = allActiveStreamKeys.getAllActiveStreamKeys()[0];
    const arg1 = first;
    let obj = arg1(dependencyMap[14]);
    const items = [allActiveStreamKeys];
    const items1 = [first];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: store.getMediaSessionId(first), hostname: callback(closure_3[16]).getShortHostname(store.getHostname(first)), quality: store.getQuality(first) };
        return obj;
      }, items1)
    };
    return callback(ObjectKV, obj);
  }
};
const obj5 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default function RTCDebugOverlay(arg0) {
  let onClose;
  let style;
  ({ onClose, style } = arg0);
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    callback(closure_3[17]).open();
    return () => callback(closure_3[18]).wait(callback2(closure_3[17]).close);
  }, []);
  let obj = { style: items };
  const items = [tmp.container, style];
  obj = { style: tmp.scroller, indicatorStyle: "white" };
  const items1 = [callback(RTCDebugGeneral, {}), ];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((context) => callback2(closure_27, { context }, context));
  obj.children = items1;
  const items2 = [callback2(closure_6, obj), ];
  obj = { style: tmp.buttonClose };
  const obj1 = {};
  const intl = arg1(dependencyMap[21]).intl;
  obj1.text = intl.string(arg1(dependencyMap[21]).t.cpT0Cq);
  obj1.onPress = onClose;
  obj.children = callback(arg1(dependencyMap[20]).Button, obj1);
  items2[1] = callback(closure_5, obj);
  obj.children = items2;
  return callback2(arg1(dependencyMap[19]).SafeAreaPaddingView, obj);
};
