// Module ID: 9025
// Function ID: 9026
// Name: GuildEventsListView
// Dependencies: [19, 17, 21, 587, 558, 576, 1630, 5270, 9026, 9027, 11, 7222, 2]

// Module 9025 (GuildEventsListView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildEventsNoContentDefault from "GuildEventsNoContent" /* 9026 */;
import GuildEventCardDefault from "GuildEventCard" /* 9027 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let tmp2;
const SnowflakeUtilsDefault = tmp2(11);
const View = react_native.View;
const jsx = Fragment.jsx;
const styles = { spacer: size, container: obj2 };
size = { height: nativeDefault.space.PX_16, width: "100%" };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function FormSeparator() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = <View style={obj.spacer} />;
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FormSeparator() {
  let obj;
  obj = { style: obj.spacer };
  return <View style={obj.spacer} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventsListView(onPressEvent) {
  let events;
  let guild;
  let onCloseAction;
  let tmp = guild;
  let tmp2 = onCloseAction;
  let obj = guild(onCloseAction[5]);
  const cResult = obj.c(19);
  ({ events, guild } = onPressEvent);
  onPressEvent = onPressEvent.onPressEvent;
  onCloseAction = onPressEvent.onCloseAction;
  const lastAckedId = onPressEvent.lastAckedId;
  let tmp4 = onPressEvent;
  const inActionSheet = onPressEvent.inActionSheet;
  if (0 === events.length) {
    if (cResult[0] === guild) {
      let tmp18;
      if (cResult[1] === onCloseAction) {
        tmp18 = cResult[2];
      }
      return tmp18;
    }
    const BottomSheetView = tmp(tmp2[7]).BottomSheetView;
    const tmp20 = <BottomSheetView>{null}</BottomSheetView>;
    cResult[0] = guild;
    cResult[1] = onCloseAction;
    cResult[2] = tmp20;
    tmp18 = tmp20;
  } else {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      function extractKey(id) {
        return id.id;
      }
      cResult[3] = extractKey;
      tmp6 = extractKey;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === lastAckedId) {
      if (cResult[5] === onCloseAction) {
        let tmp7;
        if (cResult[6] === onPressEvent) {
          tmp7 = cResult[7];
        }
        const tmpResult = tmp(tmp2[11]);
        const tmp9 = inActionSheet ? tmpResult.BottomSheetFlashList : tmpResult.FlashList;
        if (cResult[8] === guild) {
          let tmp10;
          let tmp12;
          if (cResult[9] === onCloseAction) {
            tmp10 = cResult[10];
          }
          const sum = tmp4(tmp2[3]).space.PX_16 + tmp5;
          if (cResult[11] !== sum) {
            const obj4 = { paddingBottom: sum };
            cResult[11] = sum;
            cResult[12] = obj4;
            tmp12 = obj4;
          } else {
            tmp12 = cResult[12];
          }
          if (cResult[13] === tmp9) {
            if (cResult[14] === events) {
              if (cResult[15] === tmp7) {
                if (cResult[16] === tmp10) {
                  let tmp13;
                  if (cResult[17] === tmp12) {
                    tmp13 = cResult[18];
                  }
                  return tmp13;
                }
              }
            }
          }
          const tmp17 = <tmp9 data={events} style={obj.container} keyExtractor={tmp6} renderItem={tmp7} ItemSeparatorComponent={ItemSeparatorComponent} ListEmptyComponent={tmp10} contentContainerStyle={tmp12} />;
          cResult[13] = tmp9;
          cResult[14] = events;
          cResult[15] = tmp7;
          cResult[16] = tmp10;
          cResult[17] = tmp12;
          cResult[18] = tmp17;
          tmp13 = tmp17;
        }
        const fn2 = function w() {
          return jsx(GuildEventsNoContentDefault, { onClose: onCloseAction, guild });
        };
        cResult[8] = guild;
        cResult[9] = onCloseAction;
        cResult[10] = fn2;
        tmp10 = fn2;
      }
    }
    const fn = function _(item) {
      let tmp6;
      item = item.item;
      const obj = { event: item, onCloseAction, onPress: onPressEvent, isNew: tmp6 };
      tmp6 = null != lastAckedId;
      const tmp = jsx;
      const tmp4 = GuildEventCardDefault;
      if (tmp6) {
        const tmp2Result = SnowflakeUtilsDefault;
        tmp6 = tmp2Result.compare(item.id, tmp5) > 0;
      }
      return tmp(tmp4, obj);
    };
    cResult[4] = lastAckedId;
    cResult[5] = onCloseAction;
    cResult[6] = onPressEvent;
    cResult[7] = fn;
    tmp7 = fn;
  }
}) : (function GuildEventsListView(lastAckedId) {
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
    const BottomSheetView = guild(tmp2[7]).BottomSheetView;
    return <BottomSheetView>{null}</BottomSheetView>;
  } else {
    const tmp11 = guild(tmp2[11]);
    const tmp5 = jsx;
    obj = { data: events, style: obj.container, keyExtractor: extractKey, renderItem, ItemSeparatorComponent, ListEmptyComponent, contentContainerStyle: obj4 };
    let tmp6 = obj;
    obj4 = { paddingBottom: tmp(tmp2[3]).space.PX_16 + tmp3 };
    let tmp4 = inActionSheet ? tmp11.BottomSheetFlashList : tmp11.FlashList;
    return <tmp4 data={events} style={obj.container} keyExtractor={extractKey} renderItem={renderItem} ItemSeparatorComponent={ItemSeparatorComponent} ListEmptyComponent={ListEmptyComponent} contentContainerStyle={obj4} />;
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListView.tsx");

export default tmp3;
export { styles };
