// Module ID: 13517
// Function ID: 104024
// Name: CacheLogEntry
// Dependencies: [27, 1348, 33, 4130, 689, 5165, 4541, 5503, 6720, 4126, 2]
// Exports: default

// Module 13517 (CacheLogEntry)
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
function CacheLogEntry(entry) {
  entry = entry.entry;
  const before = entry.before;
  let str = "null";
  let str2 = "null";
  const combined = "" + new Date(entry.startTime).toLocaleString();
  if (null != before) {
    str2 = before;
  }
  const after = entry.after;
  if (null != after) {
    str = after;
  }
  let str3 = "Cache Missed";
  const combined1 = "Before: " + str2 + ", After: " + str + ", Limit: " + entry.limit;
  if (null != entry.localMessageDetails) {
    const _HermesInternal = HermesInternal;
    str3 = "Cache Hit: " + entry.localMessageDetails.count + " messages in " + entry.localMessageDetails.loadTime - entry.startTime + "ms";
  }
  let str7 = "No Network Fetch";
  if (null != entry.networkMessageDetails) {
    const _HermesInternal2 = HermesInternal;
    str7 = "Network: " + entry.networkMessageDetails.count + " messages in " + entry.networkMessageDetails.loadTime - entry.startTime + "ms";
  }
  let str11 = "Comparision unavailable (no local cache data)";
  if (null != entry.localMessageDetails) {
    if (null == entry.networkMessageDetails) {
      str11 = "Comparision unavailable (no network data)";
    } else if (entry.localMessageDetails.count !== entry.networkMessageDetails.count) {
      const _HermesInternal4 = HermesInternal;
      let str13 = "Cache had " + entry.localMessageDetails.count + " messages vs " + entry.networkMessageDetails.count + " from network";
    } else {
      str13 = "Cache was up-to-date";
      if (entry.localMessageDetails.lastMessageId !== entry.networkMessageDetails.lastMessageId) {
        const _HermesInternal3 = HermesInternal;
        str13 = "Cache last message ID " + entry.localMessageDetails.lastMessageId + " differs from network last message ID " + entry.networkMessageDetails.lastMessageId;
      }
    }
  }
  const obj = {};
  channel = channel.getChannel(entry.channelId);
  let name;
  if (null != channel) {
    name = channel.name;
  }
  obj.label = "" + name;
  const items = [combined, combined1, str3, str7, str11];
  obj.subLabel = items.join("\n");
  return closure_5(require(5165) /* TableRowInner */.TableRow, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.contentContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default function DevToolsLocalMessageCache() {
  const tmp = callback3();
  let obj = { style: tmp.container, contentContainerStyle: tmp.contentContainer };
  obj = { spacing: 8 };
  obj = { title: "Local Message Cache Stats", hasIcons: false };
  const obj1 = { label: "Channels Fetched", subLabel: importDefault(6720).channelsFetchStarted.size };
  const items = [callback(require(5165) /* TableRowInner */.TableRow, obj1), , , ];
  const obj2 = { label: "Cache Hits", subLabel: importDefault(6720).channelsFetchedWithLocalMessages.size };
  items[1] = callback(require(5165) /* TableRowInner */.TableRow, obj2);
  const obj3 = { label: "Cache Misses", subLabel: importDefault(6720).channelsFetchedNetwork.size - importDefault(6720).channelsFetchedWithLocalMessages.size };
  items[2] = callback(require(5165) /* TableRowInner */.TableRow, obj3);
  const obj4 = { label: "Incomplete Fetches", subLabel: importDefault(6720).channelsFetchStarted.size - importDefault(6720).channelsFetchedNetwork.size };
  items[3] = callback(require(5165) /* TableRowInner */.TableRow, obj4);
  obj.children = items;
  const items1 = [callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj), callback(require(4126) /* Text */.Text, { variant: "text-sm/normal", color: "text-muted", children: "Cumulative since app launch. Does not update dynamically." }), ];
  const obj5 = { title: "Fetch Log (Reversed)", hasIcons: false };
  const fetchLogs = importDefault(6720).fetchLogs;
  const reversed = Array.from(fetchLogs.values()).reverse();
  obj5.children = reversed.map((entry) => outer1_5(outer1_8, { entry }, arg1));
  items1[2] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj5);
  obj.children = items1;
  obj.children = callback2(require(4541) /* Stack */.Stack, obj);
  return callback(ScrollView, obj);
};
