// Module ID: 15142
// Function ID: 15143
// Name: DevToolsLocalMessageCache
// Dependencies: [17, 2045, 21, 4836, 576, 5917, 5279, 5999, 6908, 4832, 2]
// Exports: default

// Module 15142 (DevToolsLocalMessageCache)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRow5 from "TableRow" /* 5917 */;
import TableRowGroup3 from "TableRowGroup" /* 5999 */;
import MessageCacheStatsDefault from "MessageCacheStats" /* 6908 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function CacheLogEntry(entry) {
  let items;
  entry = entry.entry;
  let str = entry.before;
  const date = new Date(entry.startTime);
  const combined = "" + date.toLocaleString();
  if (str == null) {
    str = "null";
  }
  let str2 = entry.after;
  if (str2 == null) {
    str2 = "null";
  }
  let str3 = "Cache Missed";
  const combined1 = "Before: " + str + ", After: " + str2 + ", Limit: " + entry.limit;
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
    let str12 = "Comparision unavailable (no network data)";
    if (null != entry.networkMessageDetails) {
      let str13;
      if (entry.localMessageDetails.count !== entry.networkMessageDetails.count) {
        const _HermesInternal4 = HermesInternal;
        str13 = "Cache had " + entry.localMessageDetails.count + " messages vs " + entry.networkMessageDetails.count + " from network";
      } else {
        str13 = "Cache was up-to-date";
        if (entry.localMessageDetails.lastMessageId !== entry.networkMessageDetails.lastMessageId) {
          const _HermesInternal3 = HermesInternal;
          str13 = "Cache last message ID " + entry.localMessageDetails.lastMessageId + " differs from network last message ID " + entry.networkMessageDetails.lastMessageId;
        }
      }
      str12 = str13;
    }
    str11 = str12;
  }
  const TableRow = TableRow5.TableRow;
  const channel = ChannelStore.getChannel(entry.channelId);
  let name;
  const tmp3 = hasOwnProperty;
  if (channel != null) {
    name = channel.name;
  }
  const obj = { label: "" + name, subLabel: items.join("\n") };
  items = [combined, combined1, str3, str7, str11];
  return tmp3(TableRow, obj);
}
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default function DevToolsLocalMessageCache() {
  let Stack;
  let items;
  let items1;
  let obj2;
  let reversed;
  const tmp = closure_7();
  let obj = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: metroRequire(Stack, obj2) };
  obj2 = { spacing: 8, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { title: "Local Message Cache Stats", hasIcons: false, children: items };
  const TableRowGroup = TableRowGroup3.TableRowGroup;
  const obj4 = { label: "Channels Fetched", subLabel: MessageCacheStatsDefault.channelsFetchStarted.size };
  const TableRow = TableRow5.TableRow;
  items = [hasOwnProperty(TableRow, obj4), , , ];
  const obj5 = { label: "Cache Hits", subLabel: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size };
  const TableRow2 = TableRow5.TableRow;
  items[1] = hasOwnProperty(TableRow2, obj5);
  const obj6 = { label: "Cache Misses", subLabel: MessageCacheStatsDefault.channelsFetchedNetwork.size - MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size };
  const TableRow3 = TableRow5.TableRow;
  items[2] = hasOwnProperty(TableRow3, obj6);
  const obj7 = { label: "Incomplete Fetches", subLabel: MessageCacheStatsDefault.channelsFetchStarted.size - MessageCacheStatsDefault.channelsFetchedNetwork.size };
  const TableRow4 = TableRow5.TableRow;
  items[3] = hasOwnProperty(TableRow4, obj7);
  items1 = [metroRequire(TableRowGroup, obj3), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "Cumulative since app launch. Does not update dynamically." }), ];
  const obj8 = {
    title: "Fetch Log (Reversed)",
    hasIcons: false,
    children: reversed.map((entry, index) => {
      const obj = { entry };
      return closure_1_5(CacheLogEntry, obj, index);
    })
  };
  const TableRowGroup2 = TableRowGroup3.TableRowGroup;
  const fetchLogs = MessageCacheStatsDefault.fetchLogs;
  const fromResult = from(fetchLogs.values());
  reversed = fromResult.reverse();
  items1[2] = hasOwnProperty(TableRowGroup2, obj8);
  return hasOwnProperty(ScrollView, obj);
};
