// Module ID: 13396
// Function ID: 101835
// Name: CacheLogEntry
// Dependencies: []
// Exports: default

// Module 13396 (CacheLogEntry)
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
  const channel = channel.getChannel(entry.channelId);
  let name;
  if (null != channel) {
    name = channel.name;
  }
  obj.label = "" + name;
  const items = [combined, combined1, str3, str7, str11];
  obj.subLabel = items.join("\n");
  return closure_5(require(dependencyMap[5]).TableRow, obj);
}
const ScrollView = require(dependencyMap[0]).ScrollView;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.contentContainer = { padding: importDefault(dependencyMap[4]).space.PX_16 };
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[10]);
const result = _module2.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default function DevToolsLocalMessageCache() {
  const tmp = callback3();
  let obj = { style: tmp.container, contentContainerStyle: tmp.contentContainer };
  obj = { spacing: 8 };
  obj = {};
  const obj1 = { label: "Channels Fetched", subLabel: importDefault(dependencyMap[8]).channelsFetchStarted.size };
  const items = [callback(require(dependencyMap[5]).TableRow, obj1), , , ];
  const obj2 = { label: "Cache Hits", subLabel: importDefault(dependencyMap[8]).channelsFetchedWithLocalMessages.size };
  items[1] = callback(require(dependencyMap[5]).TableRow, obj2);
  const obj3 = { label: "Cache Misses", subLabel: importDefault(dependencyMap[8]).channelsFetchedNetwork.size - importDefault(dependencyMap[8]).channelsFetchedWithLocalMessages.size };
  items[2] = callback(require(dependencyMap[5]).TableRow, obj3);
  const obj4 = { label: "Incomplete Fetches", subLabel: importDefault(dependencyMap[8]).channelsFetchStarted.size - importDefault(dependencyMap[8]).channelsFetchedNetwork.size };
  items[3] = callback(require(dependencyMap[5]).TableRow, obj4);
  obj.children = items;
  const items1 = [callback2(require(dependencyMap[7]).TableRowGroup, obj), callback(require(dependencyMap[9]).Text, {}), ];
  const obj5 = { "Bool(false)": "fa8fba4f08666ddc130e1c29719257b7", "Bool(false)": "PawPrintIcon" };
  const fetchLogs = importDefault(dependencyMap[8]).fetchLogs;
  const reversed = Array.from(fetchLogs.values()).reverse();
  obj5.children = reversed.map((entry) => callback(closure_8, { entry }, arg1));
  items1[2] = callback(require(dependencyMap[7]).TableRowGroup, obj5);
  obj.children = items1;
  obj.children = callback2(require(dependencyMap[6]).Stack, obj);
  return callback(ScrollView, obj);
};
