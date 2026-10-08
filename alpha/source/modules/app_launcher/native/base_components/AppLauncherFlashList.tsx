// Module ID: 11806
// Function ID: 11807
// Name: AppLauncherFlashList
// Dependencies: [109, 19, 17, 21, 6326, 558, 11807, 576, 11232, 11233, 8600, 2]
// Exports: useAppLauncherFlashListProps

// Module 11806 (AppLauncherFlashList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useAnimatedScrollLock from "useAnimatedScrollLock" /* 11807 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherFlashList(ref) {
  let tmp10;
  let tmp4;
  let tmp5;
  const obj = simultaneousHandlers(576);
  const cResult = obj.c(38);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = simultaneousHandlers(11232);
  const items = [simultaneousHandlers];
  const entrypoint = tmpResult.useAppLauncherContext().entrypoint;
  const memo = react.useMemo(() => (function ScrollViewGestureAware(ref) {
    ref = ref.ref;
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    const memo = React.useMemo(() => {
      const Gesture = simultaneousHandlers(closure_2_1[4]).Gesture;
      const NativeResult = Gesture.Native();
      return NativeResult.simultaneousWithExternalGesture(closure_1_0);
    }, []);
    const GestureDetector = simultaneousHandlers(dependencyMap[4]).GestureDetector;
    const merged1 = Object.assign(merged);
    return <GestureDetector gesture={memo}>{null}</GestureDetector>;
  }), items);
  if (entrypoint === tmp4.simultaneousHandlers(11233).AppLauncherEntrypoint.VOICE) {
    if (cResult[3] === memo) {
      if (cResult[4] === tmp4.ListHeaderComponent) {
        if (cResult[5] === tmp4.animatedOnScroll) {
          if (cResult[6] === tmp4.animatedProps) {
            if (cResult[7] === tmp4.automaticallyAdjustsScrollIndicatorInsets) {
              if (cResult[8] === tmp4.contentContainerStyle) {
                if (cResult[9] === tmp4.data) {
                  if (cResult[10] === tmp4.getItemType) {
                    if (cResult[11] === tmp4.keyboardDismissMode) {
                      if (cResult[12] === tmp4.keyboardShouldPersistTaps) {
                        if (cResult[13] === tmp4.onViewableItemsChanged) {
                          if (cResult[14] === tmp4.renderItem) {
                            if (cResult[15] === tmp4.scrollIndicatorInsets) {
                              if (cResult[16] === tmp4.showsVerticalScrollIndicator) {
                                if (cResult[17] === tmp4.viewabilityConfigCallbackPairs) {
                                  let tmp13;
                                  if (cResult[18] === tmp5) {
                                    tmp13 = cResult[19];
                                  }
                                  tmp10 = tmp13;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ({ ListHeaderComponent: obj4.ListHeaderComponent, animatedOnScroll: obj4.onScroll, contentContainerStyle: obj4.contentContainerStyle, scrollIndicatorInsets: obj4.scrollIndicatorInsets, renderItem: obj4.renderItem, getItemType: obj4.getItemType, data: obj4.data, automaticallyAdjustsScrollIndicatorInsets: obj4.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj4.keyboardDismissMode, keyboardShouldPersistTaps: obj4.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj4.showsVerticalScrollIndicator, onViewableItemsChanged: obj4.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj4.viewabilityConfigCallbackPairs, animatedProps: obj4.animatedProps } = tmp4);
    const tmp15 = jsx(tmp4.simultaneousHandlers(8600).AnimatedFlashList, { renderScrollComponent: memo, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref: tmp5 });
    cResult[3] = memo;
    cResult[4] = tmp4.ListHeaderComponent;
    cResult[5] = tmp4.animatedOnScroll;
    cResult[6] = tmp4.animatedProps;
    cResult[7] = tmp4.automaticallyAdjustsScrollIndicatorInsets;
    cResult[8] = tmp4.contentContainerStyle;
    cResult[9] = tmp4.data;
    cResult[10] = tmp4.getItemType;
    cResult[11] = tmp4.keyboardDismissMode;
    cResult[12] = tmp4.keyboardShouldPersistTaps;
    cResult[13] = tmp4.onViewableItemsChanged;
    cResult[14] = tmp4.renderItem;
    cResult[15] = tmp4.scrollIndicatorInsets;
    cResult[16] = tmp4.showsVerticalScrollIndicator;
    cResult[17] = tmp4.viewabilityConfigCallbackPairs;
    cResult[18] = tmp5;
    cResult[19] = tmp15;
    tmp13 = tmp15;
  } else {
    if (cResult[20] === tmp4.ListHeaderComponent) {
      if (cResult[21] === tmp4.automaticallyAdjustsScrollIndicatorInsets) {
        if (cResult[22] === tmp4.bottomViewabilityInsetRef) {
          if (cResult[23] === tmp4.contentContainerStyle) {
            if (cResult[24] === tmp4.data) {
              if (cResult[25] === tmp4.getItemType) {
                if (cResult[26] === tmp4.keyboardDismissMode) {
                  if (cResult[27] === tmp4.keyboardShouldPersistTaps) {
                    if (cResult[28] === tmp4.lockableScrollableContentOffsetY) {
                      if (cResult[29] === tmp4.onScroll) {
                        if (cResult[30] === tmp4.onViewableItemsChanged) {
                          if (cResult[31] === tmp4.preserveScrollMomentum) {
                            if (cResult[32] === tmp4.renderItem) {
                              if (cResult[33] === tmp4.scrollIndicatorInsets) {
                                if (cResult[34] === tmp4.showsVerticalScrollIndicator) {
                                  if (cResult[35] === tmp4.viewabilityConfigCallbackPairs) {
                                    if (cResult[36] === tmp5) {
                                      tmp10 = cResult[37];
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = tmp4);
    const tmp12 = jsx(tmp4.simultaneousHandlers(8600).BottomSheetFlashList, { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref: tmp5 });
    cResult[20] = tmp4.ListHeaderComponent;
    cResult[21] = tmp4.automaticallyAdjustsScrollIndicatorInsets;
    cResult[22] = tmp4.bottomViewabilityInsetRef;
    cResult[23] = tmp4.contentContainerStyle;
    cResult[24] = tmp4.data;
    cResult[25] = tmp4.getItemType;
    cResult[26] = tmp4.keyboardDismissMode;
    cResult[27] = tmp4.keyboardShouldPersistTaps;
    cResult[28] = tmp4.lockableScrollableContentOffsetY;
    cResult[29] = tmp4.onScroll;
    cResult[30] = tmp4.onViewableItemsChanged;
    cResult[31] = tmp4.preserveScrollMomentum;
    cResult[32] = tmp4.renderItem;
    cResult[33] = tmp4.scrollIndicatorInsets;
    cResult[34] = tmp4.showsVerticalScrollIndicator;
    cResult[35] = tmp4.viewabilityConfigCallbackPairs;
    cResult[36] = tmp5;
    cResult[37] = tmp12;
    tmp10 = tmp12;
  }
  return tmp10;
}) : (function AppLauncherFlashList(ref) {
  let simultaneousHandlers;
  let tmp6;
  ref = ref.ref;
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = simultaneousHandlers(11232);
  simultaneousHandlers = merged.simultaneousHandlers;
  const items = [simultaneousHandlers];
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  let memo = react.useMemo(() => (function ScrollViewGestureAware(ref) {
    ref = ref.ref;
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    const memo = React.useMemo(() => {
      const Gesture = simultaneousHandlers(closure_2_1[4]).Gesture;
      const NativeResult = Gesture.Native();
      return NativeResult.simultaneousWithExternalGesture(closure_1_0);
    }, []);
    const GestureDetector = simultaneousHandlers(dependencyMap[4]).GestureDetector;
    const merged1 = Object.assign(merged);
    return <GestureDetector gesture={memo}>{null}</GestureDetector>;
  }), items);
  if (entrypoint === simultaneousHandlers(11233).AppLauncherEntrypoint.VOICE) {
    ({ ListHeaderComponent: obj2.ListHeaderComponent, animatedOnScroll: obj2.onScroll, contentContainerStyle: obj2.contentContainerStyle, scrollIndicatorInsets: obj2.scrollIndicatorInsets, renderItem: obj2.renderItem, getItemType: obj2.getItemType, data: obj2.data, automaticallyAdjustsScrollIndicatorInsets: obj2.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj2.keyboardDismissMode, keyboardShouldPersistTaps: obj2.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj2.showsVerticalScrollIndicator, onViewableItemsChanged: obj2.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj2.viewabilityConfigCallbackPairs, animatedProps: obj2.animatedProps } = merged);
    tmp6 = jsx(tmp2(8600).AnimatedFlashList, { renderScrollComponent: memo, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref });
  } else {
    ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = merged);
    tmp6 = jsx(tmp2(8600).BottomSheetFlashList, { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref });
  }
  return tmp6;
});
tmp3.displayName = "AppLauncherFlashList";
function useAppLauncherFlashListProps(arg0) {
  const obj = useAnimatedScrollLock;
  return obj.useAnimatedScrollLock(arg0);
}
const result1 = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default tmp3;
export { useAppLauncherFlashListProps };
