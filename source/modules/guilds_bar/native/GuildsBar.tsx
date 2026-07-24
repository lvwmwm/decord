// Module ID: 14857
// Function ID: 113283
// Dependencies: [31, 33, 4130, 477, 10263, 14858, 14868, 14937, 10883, 5217, 5515, 7677, 14938, 2]

// Module 14857
import importAllResult from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { position: "relative", overflow: "visible", flex: 1 } });
const memoResult = importAllResult.memo(function GuildsBar(enableHome) {
  let gesture;
  let listDataProps;
  let listProps;
  let onFastListScroll;
  let onFastListScrollWorklet;
  let persistantKeys;
  let scrollPosition;
  let scrollerRef;
  let flag = enableHome.enableHome;
  if (flag === undefined) {
    flag = false;
  }
  let fastListRef;
  const tmp2 = importDefault(14858)();
  fastListRef = tmp2.fastListRef;
  ({ scrollPosition, gesture, scrollerRef, persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp2);
  const tmp = callback2();
  ({ listProps, listDataProps } = importDefault(14868)(fastListRef));
  let items = [fastListRef];
  let effect = importAllResult.useEffect(() => {
    const result = fastListRef(outer1_2[7]).registerGuildVisibilityMethod(fastListRef);
  }, items);
  (function usePipResizeFix(listProps, fastListRef) {
    let closure_0 = listProps;
    let closure_1 = fastListRef;
    let closure_2 = outer1_3.useRef(listProps);
    let closure_3 = outer1_3.useRef(false);
    const effect = outer1_3.useEffect(() => {
      if (obj.isAndroid()) {
        let closure_0 = outer2_1(outer2_2[4]).addOnPipModeChangedListener((arg0) => {
          if (arg0) {
            outer1_3.current = true;
          }
        });
        return () => {
          let removeResult;
          if (null != closure_0) {
            removeResult = closure_0.remove();
          }
          return removeResult;
        };
      }
      obj = fastListRef(outer2_2[3]);
    }, []);
    const items = [fastListRef, listProps];
    const effect1 = outer1_3.useEffect(() => {
      const current = ref2.current;
      ref2.current = listProps;
      if (ref3.current) {
        const chunkBase = listProps.chunkBase;
        let num = 0;
        if (null != chunkBase) {
          num = chunkBase;
        }
        const chunkBase2 = current.chunkBase;
        let num2 = 0;
        if (null != chunkBase2) {
          num2 = chunkBase2;
        }
        if (num > num2) {
          ref3.current = false;
          let tmp5 = listProps.insetStart === current.insetStart;
          if (tmp5) {
            tmp5 = listProps.insetEnd === current.insetEnd;
          }
          if (tmp5) {
            const current2 = ref.current;
            if (null != current2) {
              const blocks = current2.computeBlocks();
            }
          }
        }
      }
    }, items);
  })(listProps, fastListRef);
  let obj = {};
  const tmp3 = importDefault(14868)(fastListRef);
  obj.profile = fastListRef(10883).Profiles.Guilds;
  obj = { gesture };
  obj = { style: tmp.wrapper, collapsable: false, nativeID: "guilds-bar-view" };
  const tmp7 = importDefault(10883);
  const tmp8 = closure_5;
  const obj1 = {};
  const tmp9 = importDefault(5515);
  const merged = Object.assign(listProps);
  const merged1 = Object.assign(listDataProps);
  obj1["ref"] = fastListRef;
  obj1["manualRef"] = scrollerRef;
  obj1["disableContentWrappers"] = true;
  obj1["onScroll"] = onFastListScroll;
  obj1["onScrollWorklet"] = onFastListScrollWorklet;
  obj1["scrollPosValue"] = scrollPosition;
  obj1["stickySectionsVariant"] = "sticky-mount";
  obj1["optimizeListItemRender"] = true;
  obj1["persistantKeys"] = persistantKeys;
  obj1["disableRecyclingOnFullCompute"] = true;
  let tmp13;
  if (flag) {
    const obj2 = { overflow: "visible" };
    tmp13 = obj2;
  }
  obj1["style"] = tmp13;
  obj1["nativeID"] = "guilds-bar-fast-list";
  const items1 = [callback(importDefault(7677), obj1), callback(importDefault(14938), {})];
  obj.children = items1;
  obj.children = tmp8(tmp9, obj);
  obj.children = callback(fastListRef(5217).GestureDetector, obj);
  return callback(tmp7, obj);
});
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default memoResult;
