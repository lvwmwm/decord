// Module ID: 9074
// Function ID: 9075
// Name: GuildEventsListView
// Dependencies: [19, 17, 21, 575, 1626, 5270, 9075, 7288, 9076, 11, 2]
// Exports: default

// Module 9074 (GuildEventsListView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import GuildEventsNoContentDefault from "GuildEventsNoContent" /* 9075 */;
import GuildEventCardDefault from "GuildEventCard" /* 9076 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let tmp2;
const SnowflakeUtilsDefault = tmp2(11);
function FormSeparator() {
  let obj;
  obj = { style: obj.spacer };
  return <View style={obj.spacer} />;
}
const View = react_native.View;
const jsx = Fragment.jsx;
const styles = { spacer: size, container: obj2 };
size = { height: nativeDefault.space.PX_16, width: "100%" };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default function GuildEventsListView(lastAckedId) {
  let events;
  let guild;
  let obj;
  let obj4;
  let onCloseAction;
  let onPress;
  function extractKey(id) {
    return id.id;
  }
  function renderItem(item) {
    let tmp6;
    item = item.item;
    const obj = { event: item, onCloseAction, onPress: importDefault, isNew: tmp6 };
    tmp6 = null != lastAckedId;
    const tmp = jsx;
    const tmp4 = GuildEventCardDefault;
    if (tmp6) {
      const tmp2Result = SnowflakeUtilsDefault;
      tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
    }
    return tmp(tmp4, obj);
  }
  function ListEmptyComponent() {
    return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
  }
  ({ events, guild } = lastAckedId);
  ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
  lastAckedId = lastAckedId.lastAckedId;
  let tmp = importDefault;
  let tmp2 = onCloseAction;
  const inActionSheet = lastAckedId.inActionSheet;
  if (0 === events.length) {
    const BottomSheetView = guild(tmp2[5]).BottomSheetView;
    return <BottomSheetView>{null}</BottomSheetView>;
  } else {
    const tmp11 = guild(tmp2[7]);
    const tmp5 = jsx;
    obj = { data: events, style: obj.container, keyExtractor: extractKey, renderItem, ItemSeparatorComponent: FormSeparator, ListEmptyComponent, contentContainerStyle: obj4 };
    let tmp6 = obj;
    obj4 = { paddingBottom: tmp(tmp2[3]).space.PX_16 + tmp3 };
    let tmp4 = inActionSheet ? tmp11.BottomSheetFlashList : tmp11.FlashList;
    return <tmp4 data={events} style={obj.container} keyExtractor={extractKey} renderItem={renderItem} ItemSeparatorComponent={FormSeparator} ListEmptyComponent={ListEmptyComponent} contentContainerStyle={obj4} />;
  }
};
export { styles };
