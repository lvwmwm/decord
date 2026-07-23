// Module ID: 8458
// Function ID: 67502
// Name: FormSeparator
// Dependencies: [31, 27, 33, 689, 1557, 5189, 8459, 8463, 21, 2]
// Exports: default

// Module 8458 (FormSeparator)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
function FormSeparator() {
  obj = { style: obj.spacer };
  return <closure_3 style={obj.spacer} />;
}
({ View: closure_3, FlatList: closure_4 } = get_ActivityIndicator);
let obj = {};
obj = { height: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%" };
obj.spacer = obj;
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
const result = require("jsxProd").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default function GuildEventsListView(lastAckedId) {
  let events;
  let guild;
  let importDefault;
  let onCloseAction;
  ({ events, guild } = lastAckedId);
  ({ onPressEvent: importDefault, onCloseAction } = lastAckedId);
  lastAckedId = lastAckedId.lastAckedId;
  if (0 === events.length) {
    let obj = {};
    obj = { onClose: onCloseAction, guild };
    obj.children = jsx(importDefault(onCloseAction[6]), { onClose: onCloseAction, guild });
    return jsx(guild(onCloseAction[5]).BottomSheetView, { onClose: onCloseAction, guild });
  } else {
    if (lastAckedId.inActionSheet) {
      let BottomSheetFlatList = guild(onCloseAction[5]).BottomSheetFlatList;
    } else {
      BottomSheetFlatList = closure_4;
    }
    obj = { data: events };
    obj.style = obj.container;
    obj.keyExtractor = function keyExtractor(id) {
      return id.id;
    };
    obj.renderItem = function renderItem(item) {
      item = item.item;
      const obj = { event: item, onCloseAction, onPress: closure_1 };
      let tmp3 = null != lastAckedId;
      if (tmp3) {
        tmp3 = outer1_1(onCloseAction[8]).compare(item.id, lastAckedId) > 0;
        const obj2 = outer1_1(onCloseAction[8]);
      }
      obj.isNew = tmp3;
      return outer1_5(outer1_1(onCloseAction[7]), obj);
    };
    obj.ItemSeparatorComponent = FormSeparator;
    obj.initialNumToRender = 5;
    obj.ListEmptyComponent = function ListEmptyComponent() {
      return outer1_5(outer1_1(onCloseAction[6]), { onClose: onCloseAction, guild });
    };
    const obj1 = { paddingBottom: importDefault(onCloseAction[3]).space.PX_16 + tmp };
    obj.contentContainerStyle = obj1;
    return <BottomSheetFlatList data={events} />;
  }
};
export const styles = obj;
