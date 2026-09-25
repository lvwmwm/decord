// Module ID: 9250
// Function ID: 9251
// Name: GuildEventsListView
// Dependencies: [19, 17, 21, 576, 1612, 6040, 9251, 9252, 11, 2]
// Exports: default

// Module 9250 (GuildEventsListView)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import GuildEventsNoContentDefault from "GuildEventsNoContent" /* 9251 */;
import GuildEventCardDefault from "GuildEventCard" /* 9252 */;
import noop from "module_19" /* 19 */;

const require = fn;
function FormSeparator() {
  obj = { style: obj.spacer };
  return <React3 style={obj.spacer} />;
}
get_ActivityIndicator = fn(17);
({ View: c3, FlatList: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const styles = { spacer: null, container: null };
let size = { height: nativeDefault.space.PX_16, width: "100%" };
styles.spacer = size;
styles.container = { paddingHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default function GuildEventsListView(lastAckedId) {
  ({ events, guild } = lastAckedId);
  ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
  lastAckedId = lastAckedId.lastAckedId;
  if (0 === events.length) {
    const obj2 = { children: null };
    const obj3 = { onClose: onCloseAction, guild };
    obj2.children = jsx(tmp(tmp2[6]), { onClose: onCloseAction, guild });
    return jsx(guild(tmp2[5]).BottomSheetView, { children: null });
  } else {
    if (lastAckedId.inActionSheet) {
      let BottomSheetFlatList = guild(tmp2[5]).BottomSheetFlatList;
    } else {
      BottomSheetFlatList = closure_4;
    }
    let obj = { data: events, style: null, keyExtractor: null, renderItem: null, ItemSeparatorComponent: null, initialNumToRender: 5, ListEmptyComponent: null, contentContainerStyle: null };
    obj.style = obj.container;
    obj.keyExtractor = function keyExtractor(id) {
      return id.id;
    };
    obj.renderItem = function renderItem(item) {
      item = item.item;
      const obj = { event: item, onCloseAction, onPress, isNew: null };
      let tmp6 = null != lastAckedId;
      if (tmp6) {
        tmp6 = SnowflakeUtilsDefault.compare(item.id, tmp5) > 0;
        const tmp2Result = SnowflakeUtilsDefault;
      }
      obj.isNew = tmp6;
      return jsx(GuildEventCardDefault, { event: item, onCloseAction, onPress, isNew: null });
    };
    obj.ItemSeparatorComponent = FormSeparator;
    obj.ListEmptyComponent = function ListEmptyComponent() {
      return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
    };
    const obj4 = { paddingBottom: tmp(tmp2[3]).space.PX_16 + tmp3 };
    obj.contentContainerStyle = obj4;
    return <BottomSheetFlatList data={events} style={null} keyExtractor={null} renderItem={null} ItemSeparatorComponent={null} initialNumToRender={5} ListEmptyComponent={null} contentContainerStyle={null} />;
  }
};
export { styles };
