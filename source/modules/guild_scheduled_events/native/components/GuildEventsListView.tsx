// Module ID: 8452
// Function ID: 67465
// Name: FormSeparator
// Dependencies: []
// Exports: default

// Module 8452 (FormSeparator)
function FormSeparator() {
  const obj = { style: obj.spacer };
  return <closure_3 {...obj} />;
}
importAll(dependencyMap[0]);
({ View: closure_3, FlatList: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let obj = {};
obj = { height: importDefault(dependencyMap[3]).space.PX_16, width: "100%" };
obj.spacer = obj;
obj = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default function GuildEventsListView(lastAckedId) {
  let events;
  let guild;
  let onCloseAction;
  ({ events, guild } = lastAckedId);
  const arg1 = guild;
  ({ onPressEvent: closure_1, onCloseAction } = lastAckedId);
  const dependencyMap = onCloseAction;
  lastAckedId = lastAckedId.lastAckedId;
  if (0 === events.length) {
    let obj = {};
    obj = { onClose: onCloseAction, guild };
    obj.children = jsx(importDefault(dependencyMap[6]), obj);
    return jsx(arg1(dependencyMap[5]).BottomSheetView, obj);
  } else {
    if (lastAckedId.inActionSheet) {
      let BottomSheetFlatList = arg1(dependencyMap[5]).BottomSheetFlatList;
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
      const obj = { event: item, onCloseAction, onPress: callback };
      let tmp3 = null != lastAckedId;
      if (tmp3) {
        tmp3 = callback(onCloseAction[8]).compare(item.id, lastAckedId) > 0;
        const obj2 = callback(onCloseAction[8]);
      }
      obj.isNew = tmp3;
      return closure_5(callback(onCloseAction[7]), obj);
    };
    obj.ItemSeparatorComponent = FormSeparator;
    obj.initialNumToRender = 5;
    obj.ListEmptyComponent = function ListEmptyComponent() {
      return callback2(callback(onCloseAction[6]), { onClose: onCloseAction, guild });
    };
    const obj1 = { paddingBottom: importDefault(dependencyMap[3]).space.PX_16 + tmp };
    obj.contentContainerStyle = obj1;
    return <BottomSheetFlatList {...obj} />;
  }
};
export const styles = obj;
