// Module ID: 14695
// Function ID: 110798
// Dependencies: []

// Module 14695
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[2]).createStyles({ wrapper: { paddingVertical: null, alignItems: null, flexGrow: null } });
const obj2 = arg1(dependencyMap[2]);
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
  let arg1;
  const tmp2 = importDefault(dependencyMap[5])();
  const fastListRef = tmp2.fastListRef;
  arg1 = fastListRef;
  ({ scrollPosition, gesture, scrollerRef, persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp2);
  const tmp = callback2();
  ({ listProps, listDataProps } = importDefault(dependencyMap[6])(fastListRef));
  const items = [fastListRef];
  const effect = importAllResult.useEffect(() => {
    const result = fastListRef(closure_2[7]).registerGuildVisibilityMethod(fastListRef);
  }, items);
  function usePipResizeFix(listProps, fastListRef) {
    fastListRef = listProps;
    let closure_2 = React.useRef(listProps);
    const React = React.useRef(false);
    const effect = React.useEffect(() => {
      if (obj.isAndroid()) {
        const listProps = arg1(closure_2[4]).addOnPipModeChangedListener((arg0) => {
          if (arg0) {
            closure_3.current = true;
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
      const obj = listProps(closure_2[3]);
    }, []);
    const items = [fastListRef, listProps];
    const effect1 = React.useEffect((self) => {
      const current = ref.current;
      ref.current = self;
      if (ref2.current) {
        const chunkBase = self.chunkBase;
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
          ref2.current = false;
          let tmp5 = self.insetStart === current.insetStart;
          if (tmp5) {
            tmp5 = self.insetEnd === current.insetEnd;
          }
          if (tmp5) {
            const current2 = arg1.current;
            if (null != current2) {
              const blocks = current2.computeBlocks();
            }
          }
        }
      }
    }, items);
  }(listProps, fastListRef);
  let obj = {};
  const tmp3 = importDefault(dependencyMap[6])(fastListRef);
  obj.profile = arg1(dependencyMap[8]).Profiles.Guilds;
  obj = { gesture };
  obj = { style: tmp.wrapper };
  const tmp7 = importDefault(dependencyMap[8]);
  const tmp8 = closure_5;
  const obj1 = {};
  const tmp9 = importDefault(dependencyMap[10]);
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
  const items1 = [callback(importDefault(dependencyMap[11]), obj1), callback(importDefault(dependencyMap[12]), {})];
  obj.children = items1;
  obj.children = tmp8(tmp9, obj);
  obj.children = callback(arg1(dependencyMap[9]).GestureDetector, obj);
  return callback(tmp7, obj);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default memoResult;
