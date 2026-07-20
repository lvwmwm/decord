// Module ID: 14446
// Function ID: 108883
// Name: useAutoScrollToSearchResultSetting
// Dependencies: []
// Exports: useAutoScrollToSearchResultSetting

// Module 14446 (useAutoScrollToSearchResultSetting)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const NodeType = arg1(dependencyMap[2]).NodeType;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx");

export const useAutoScrollToSearchResultSetting = function useAutoScrollToSearchResultSetting(ref, memo, scrollTarget) {
  memo = ref;
  const dependencyMap = memo;
  let current = closure_3.useField("selected");
  const navigation = memo(dependencyMap[5]).useNavigation();
  const React = navigation;
  ref = React.useRef(scrollTarget);
  closure_3 = ref;
  if (null == current) {
    current = ref.current;
  }
  const NodeType = current;
  let flag = false;
  if (null != current) {
    flag = false;
    if (memo(dependencyMap[3]).SETTING_RENDERER_CONFIG[current].type !== NodeType.ROUTE) {
      const initialScrollIndex = memo(dependencyMap[4]).getInitialScrollIndex(current, memo);
      let tmp9 = 0 !== initialScrollIndex;
      if (tmp9) {
        tmp9 = 1 !== initialScrollIndex;
      }
      flag = tmp9;
      const obj2 = memo(dependencyMap[4]);
    }
  }
  const items = [memo, flag, ref, navigation, current];
  const effect = React.useEffect(() => {
    let closure_0 = navigation.addListener("transitionEnd", () => {
      if (closure_5) {
        let obj = ref(closure_1[4]);
        const initialScrollIndex = obj.getInitialScrollIndex(closure_4, closure_1);
        if (null != initialScrollIndex) {
          let tmp8 = null == ref;
          if (!tmp8) {
            const current = ref.current;
            tmp8 = null == current;
            const obj2 = current;
          }
          if (!tmp8) {
            obj = { index: initialScrollIndex };
            obj2.scrollToIndex(obj);
          }
        }
      }
      closure_3.current = undefined;
    });
    return () => {
      ref();
      state.setState({ selected: null });
      state.current = undefined;
    };
  }, items);
};
