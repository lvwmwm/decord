// Module ID: 15919
// Function ID: 15920
// Name: GuildsBar
// Dependencies: [19, 21, 4836, 1364, 8886, 15920, 15928, 15812, 11027, 6073, 5901, 6493, 15997, 9701, 2]

// Module 15919 (GuildsBar)
import NativeViewDefault from "NativeView" /* 5901 */;
import FastListDefault from "FastList" /* 6493 */;
import StartupProfilerDefault from "StartupProfiler" /* 11027 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 15812 */;
import useGuildsBarGestureDefault from "useGuildsBarGesture" /* 15920 */;
import useGuildsBarPropsDefault from "useGuildsBarProps" /* 15928 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp2;
const FavoritesGuildIntroPopoverDefault = tmp2(9701);
const GuildsBarDragPreviewDefault = tmp2(15997);
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
  const tmp2 = importDefault;
  let tmp = closure_6();
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
  let obj = { profile: fastListRef(11027).Profiles.Guilds, children: closure_4(GestureDetector, obj2) };
  const tmp10 = StartupProfilerDefault;
  obj2 = { gesture, children: tmp11(tmp12, obj3) };
  GestureDetector = fastListRef(6073).GestureDetector;
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
  items2 = [closure_4(tmp13, obj4), closure_4(GuildsBarDragPreviewDefault, {}), closure_4(FavoritesGuildIntroPopoverDefault, {})];
  return closure_4(tmp10, obj);
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default memoResult;
