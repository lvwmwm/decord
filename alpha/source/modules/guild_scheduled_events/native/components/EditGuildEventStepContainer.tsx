// Module ID: 8538
// Function ID: 8539
// Name: EditGuildEventStepContainer
// Dependencies: [32, 19, 17, 21, 5092, 587, 558, 576, 6664, 2]

// Module 8538 (EditGuildEventStepContainer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6664 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, flex: { flex: 1 }, scroller: { paddingHorizontal: 16 }, buttonContainer: rect };
obj2 = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditGuildEventsStepContainer(arg0) {
  let action;
  let children;
  let closure_0;
  let first;
  let first1;
  let items;
  let ref;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(23);
  ({ children, action, ref } = arg0);
  const tmp2 = closure_9();
  [first, closure_0] = react.useState(32);
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(nativeEvent) {
      closure_0(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  const sum = first + insets.bottom;
  if (cResult[1] !== sum) {
    const obj2 = { marginBottom: sum };
    cResult[1] = sum;
    cResult[2] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp2.flex) {
    let tmp8;
    if (cResult[4] === tmp7) {
      tmp8 = cResult[5];
    }
    if (cResult[6] === children) {
      if (cResult[7] === ref) {
        if (cResult[8] === tmp2.scroller) {
          let tmp9;
          let tmp13;
          if (cResult[9] === tmp8) {
            tmp9 = cResult[10];
          }
          if (cResult[11] !== insets.bottom) {
            const obj3 = { paddingBottom: insets.bottom };
            cResult[11] = insets.bottom;
            cResult[12] = obj3;
            tmp13 = obj3;
          } else {
            tmp13 = cResult[12];
          }
          if (cResult[13] === tmp2.buttonContainer) {
            let tmp14;
            if (cResult[14] === tmp13) {
              tmp14 = cResult[15];
            }
            if (cResult[16] === action) {
              let tmp15;
              if (cResult[17] === tmp14) {
                tmp15 = cResult[18];
              }
              if (cResult[19] === tmp2.container) {
                if (cResult[20] === tmp9) {
                  let tmp19;
                  if (cResult[21] === tmp15) {
                    tmp19 = cResult[22];
                  }
                  return tmp19;
                }
              }
              const obj4 = { style: tmp2.container, children: items };
              items = [tmp9, tmp15];
              const tmp22 = metroImportAll(hasOwnProperty, obj4);
              cResult[19] = tmp2.container;
              cResult[20] = tmp9;
              cResult[21] = tmp15;
              cResult[22] = tmp22;
              tmp19 = tmp22;
            }
            const obj5 = { style: tmp14, onLayout: first1, children: action };
            const tmp18 = metroImportDefault(hasOwnProperty, obj5);
            cResult[16] = action;
            cResult[17] = tmp14;
            cResult[18] = tmp18;
            tmp15 = tmp18;
          }
          const items1 = [tmp2.buttonContainer, tmp13];
          cResult[13] = tmp2.buttonContainer;
          cResult[14] = tmp13;
          cResult[15] = items1;
          tmp14 = items1;
        }
      }
    }
    const obj6 = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: tmp8, contentContainerStyle: tmp2.scroller, children };
    const tmp12 = metroImportDefault(metroRequire, obj6);
    cResult[6] = children;
    cResult[7] = ref;
    cResult[8] = tmp2.scroller;
    cResult[9] = tmp8;
    cResult[10] = tmp12;
    tmp9 = tmp12;
  }
  const items2 = [tmp2.flex, tmp7];
  cResult[3] = tmp2.flex;
  cResult[4] = tmp7;
  cResult[5] = items2;
  tmp8 = items2;
}) : (function EditGuildEventsStepContainer(arg0) {
  let action;
  let children;
  let closure_0;
  let first;
  let items;
  let items1;
  let items2;
  let ref;
  closure_0 = undefined;
  ({ children, action, ref } = arg0);
  const tmp = closure_9();
  [first, closure_0] = react.useState(32);
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const obj2 = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: items, contentContainerStyle: tmp.scroller, children };
  items = [tmp.flex, { marginBottom: first + insets.bottom }];
  const obj = { style: tmp.container, children: items1 };
  const callback = react.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.height);
  }, []);
  items1 = [metroImportDefault(metroRequire, obj2), ];
  const obj3 = { style: items2, onLayout: callback, children: action };
  items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  items1[1] = metroImportDefault(hasOwnProperty, obj3);
  return metroImportAll(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default tmp5;
