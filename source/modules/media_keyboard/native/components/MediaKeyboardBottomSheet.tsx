// Module ID: 15323
// Function ID: 116587
// Name: MediaKeyboardBackground
// Dependencies: []

// Module 15323 (MediaKeyboardBackground)
function MediaKeyboardBackground(arg0) {
  let pointerEvents;
  let style;
  ({ pointerEvents, style } = arg0);
  const obj = { pointerEvents };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.XONG6A);
  const items = [style, callback3().background];
  obj.style = items;
  return callback2(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ HEADER_HANDLE_HEIGHT: closure_6, MediaPickerActionSheetEngagedActions: closure_7 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).isMetaQuest();
const obj2 = arg1(dependencyMap[6]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: importDefault(dependencyMap[8]).modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
obj.background = obj;
let closure_12 = arg1(dependencyMap[7]).createStyles(obj);
let closure_13 = { code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
let closure_14 = { code: "function MediaKeyboardBottomSheetTsx2(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
const obj3 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheet(animatedIndex) {
  let accessoriesComponent;
  let animatedPosition;
  let animationConfigs;
  let children;
  let handleComponent;
  let left;
  let overlayComponent;
  let right;
  let transitionState;
  animatedIndex = animatedIndex.animatedIndex;
  const arg1 = animatedIndex;
  const bottomSheetRef = animatedIndex.bottomSheetRef;
  const importDefault = bottomSheetRef;
  const onClose = animatedIndex.onClose;
  const dependencyMap = onClose;
  let importAllResult;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = animatedIndex);
  const tmp2 = importDefault(dependencyMap[10])({ forceMaxHeight: false });
  const tmp3 = transitionState === arg1(dependencyMap[11]).TransitionStates.YEETED;
  let callback = tmp3;
  const tmp = callback3();
  const tmp4 = importDefault(dependencyMap[12])("MediaKeyboardBottomSheet");
  callback = importAllResult.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return callback(closure_15, {});
  }, []);
  const items = [tmp3, onClose];
  const callback1 = importAllResult.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["ViewComponent"] = bottomSheetRef(onClose[15]);
    obj["pressBehavior"] = "collapse";
    return callback(animatedIndex(onClose[14]).BottomSheetBackdrop, obj);
  }, []);
  const callback2 = importAllResult.useCallback((arg0, arg1) => {
    if (tmp3) {
      if (-1 !== arg1) {
        if (null != onClose) {
          onClose();
        }
      }
    }
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 0 === arg0;
    }
    if (tmp) {
      let obj = animatedIndex(onClose[16]);
      const result = obj.triggerHapticFeedback(bottomSheetRef(onClose[17]).IMPACT_LIGHT);
      obj = { action: constants.FULLY_EXPANDED };
      bottomSheetRef(onClose[18]).track(constants2.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
      const obj2 = bottomSheetRef(onClose[18]);
      const tmp3 = onClose;
    }
  }, items);
  let obj = arg1(dependencyMap[19]);
  const tmp9 = obj.useIsScreenReaderEnabled() || tmp3;
  const tmp10 = callback(importAllResult.useState(false), 2);
  importAllResult = tmp11;
  let obj1 = arg1(dependencyMap[20]);
  class D {
    constructor() {
      return Math.max(animatedIndex.get(), 0) > 0;
    }
  }
  D.__closure = { animatedIndex };
  D.__workletHash = 6409838147176;
  D.__initData = closure_13;
  class B {
    constructor(arg0, arg1) {
      if (animatedIndex !== arg1) {
        tmp = animatedIndex;
        tmp2 = onClose;
        num = 20;
        obj = animatedIndex(onClose[20]);
        tmp3 = closure_4;
        tmp4 = obj.runOnJS(closure_4)(animatedIndex);
      }
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[20]).runOnJS, setAccessibilityViewIsModal: tmp11 };
  B.__closure = obj;
  B.__workletHash = 4155361737130;
  B.__initData = closure_14;
  const animatedReaction = obj1.useAnimatedReaction(D, B);
  importDefault(dependencyMap[21])(() => () => {
    if (null != callback) {
      callback();
    }
  });
  const items1 = [bottomSheetRef, tmp3, onClose];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (tmp3) {
      if (null != bottomSheetRef.current) {
        const current = bottomSheetRef.current;
        current.forceClose();
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          let tmp;
          if (null != callback) {
            tmp = callback();
          }
          return tmp;
        }, 500);
        return () => clearTimeout(closure_0);
      } else {
        if (null != onClose) {
          onClose();
        }
        const tmp3 = onClose;
      }
    }
  }, items1);
  const tmp5 = importDefault(dependencyMap[13])();
  ({ left, right } = importDefault(dependencyMap[22])());
  obj = {};
  let tmp17 = null;
  if (tmp4) {
    tmp17 = tmp5;
  }
  obj.gradient = tmp17;
  obj1 = { style: { marginLeft: left, marginRight: right } };
  const tmp15 = importDefault(dependencyMap[22])();
  const tmp16 = closure_10;
  const tmp18 = callback2;
  obj1.BodyComponent = importDefault(dependencyMap[15]);
  obj1.ref = bottomSheetRef;
  obj1.animationConfigs = animationConfigs;
  obj1.animatedIndex = animatedIndex;
  obj1.animatedPosition = animatedPosition;
  let tmp20 = !tmp9;
  if (tmp20) {
    tmp20 = !closure_11;
  }
  obj1.enableContentPanningGesture = tmp20;
  obj1.enableHandlePanningGesture = !tmp9;
  obj1.handleComponent = handleComponent;
  obj1.backgroundComponent = callback;
  obj1.backgroundStyle = tmp.background;
  obj1.backdropComponent = callback1;
  obj1.onAnimate = callback2;
  obj1.handleHeight = closure_6;
  obj1.onClose = onClose;
  const merged = Object.assign(tmp2);
  obj1["children"] = callback2(arg1(dependencyMap[24]).AccessibilityViewAnimated, {
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape() {
      const current = bottomSheetRef.current;
      if (null != current) {
        current.collapse();
      }
    },
    accessibilityViewIsModal: tmp10[0],
    children
  });
  const items2 = [tmp18(importDefault(dependencyMap[14]), obj1), accessoriesComponent(tmp2), overlayComponent];
  obj.children = items2;
  return tmp16(arg1(dependencyMap[23]).ThemeContextProvider, obj);
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default memoResult;
