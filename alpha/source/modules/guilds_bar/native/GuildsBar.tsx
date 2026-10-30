// Module ID: 18303
// Function ID: 18304
// Name: GuildsBar
// Dependencies: [19, 21, 5009, 1376, 5869, 18304, 18312, 18184, 11528, 5298, 6954, 7234, 18376, 2]

// Module 18303 (GuildsBar)
import NativeViewDefault from "NativeView" /* 6954 */;
import FastListDefault from "FastList" /* 7234 */;
import StartupProfilerDefault from "StartupProfiler" /* 11528 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 18184 */;
import useGuildsBarGestureDefault from "useGuildsBarGesture" /* 18304 */;
import useGuildsBarPropsDefault from "useGuildsBarProps" /* 18312 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp2;
const GuildsBarDragPreviewDefault = tmp2(18376);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ wrapper: { position: "relative", overflow: "visible", flex: 1 } });
const memoResult = react.memo(function GuildsBar(enableHome) {
  let GestureDetector;
  let gesture;
  let items2;
  let listDataProps;
  let listProps;
  let obj2;
  let obj3;
  let obj5;
  let onFastListScroll;
  let onFastListScrollWorklet;
  let persistantKeys;
  let scrollPosition;
  let scrollerRef;
  let tmp11;
  let tmp12;
  let flag = enableHome.enableHome;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_6();
  const tmp2 = importDefault;
  let tmp4 = useGuildsBarGestureDefault();
  const fastListRef = tmp4.fastListRef;
  ({ scrollPosition, gesture, scrollerRef, persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp4);
  ({ listProps, listDataProps } = useGuildsBarPropsDefault(fastListRef));
  const items = [fastListRef];
  const tmp5 = useGuildsBarPropsDefault(fastListRef);
  const effect = react.useEffect(() => {
    const obj = registerSidebarVisibilityMethods;
    const result = obj.registerGuildVisibilityMethod(fastListRef);
  }, items);
  let closure_2 = react.useRef(listProps);
  let closure_3 = react.useRef(false);
  const effect1 = react.useEffect(() => {
    let tmp = ref;
    let obj = listProps(ref[3]);
    if (obj.isAndroid()) {
      const obj2 = fastListRef(tmp[4]);
      let closure_0 = obj2.addOnPipModeChangedListener((arg0) => {
        const tmp = arg0;
        if (tmp) {
          ref2.current = true;
        }
      });
      return () => {
        let removeResult;
        const obj = closure_0;
        if (closure_0 != null) {
          removeResult = obj.remove();
        }
        return removeResult;
      };
    }
  }, []);
  const items1 = [fastListRef, listProps];
  const effect2 = react.useEffect(() => {
    const current = ref.current;
    ref.current = listProps;
    if (ref2.current) {
      let num = tmp.chunkBase;
      if (num == null) {
        num = 0;
      }
      let num2 = current.chunkBase;
      if (num2 == null) {
        num2 = 0;
      }
      if (num > num2) {
        tmp2.current = false;
        const tmp4 = listProps.insetStart === current.insetStart && listProps.insetEnd === current.insetEnd;
        if (tmp4) {
          const current2 = fastListRef.current;
          if (current2 != null) {
            const blocks = current2.computeBlocks();
          }
        }
      }
    }
  }, items1);
  let obj = { profile: fastListRef(11528).Profiles.Guilds, children: closure_4(GestureDetector, obj2) };
  const tmp10 = StartupProfilerDefault;
  obj2 = { gesture, children: tmp11(tmp12, obj3) };
  GestureDetector = fastListRef(5298).GestureDetector;
  obj3 = { style: tmp.wrapper, collapsable: false, nativeID: "guilds-bar-view", children: items2 };
  const obj4 = { ref: fastListRef, manualRef: scrollerRef, disableContentWrappers: true, onScroll: onFastListScroll, onScrollWorklet: onFastListScrollWorklet, scrollPosValue: scrollPosition, stickySectionsVariant: "sticky-mount", optimizeListItemRender: true, persistantKeys, disableRecyclingOnFullCompute: true, style: obj5, nativeID: "guilds-bar-fast-list" };
  tmp12 = NativeViewDefault;
  const tmp13 = FastListDefault;
  const merged = Object.assign(listProps);
  const merged1 = Object.assign(listDataProps);
  obj5 = undefined;
  tmp11 = closure_5;
  if (flag) {
    obj5 = { overflow: "visible" };
  }
  items2 = [closure_4(tmp13, obj4), closure_4(GuildsBarDragPreviewDefault, {})];
  return closure_4(tmp10, obj);
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default memoResult;
