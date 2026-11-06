// Module ID: 16855
// Function ID: 16856
// Name: useAutoScrollToSetting
// Dependencies: [19, 16848, 11704, 16695, 16850, 1499, 2]
// Exports: useAutoScrollToSearchResultSetting

// Module 16855 (useAutoScrollToSetting)
import SettingRendererConstants from "SettingRendererConstants" /* 11704 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16848 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, navigation;

const NodeType = SettingRendererConstants.NodeType;
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx");

export function useAutoScrollToSearchResultSetting(ref, memo, scrollTarget) {
  _require = ref;
  dependencyMap = memo;
  let current = ref.useField("selected");
  let tmp = _require;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = navigation;
  ref = navigation.useRef(scrollTarget);
  if (current == null) {
    current = ref.current;
  }
  let flag = false;
  if (null != current) {
    flag = false;
    if (tmp(16695).SETTING_RENDERER_CONFIG[current].type !== current.ROUTE) {
      const tmpResult = tmp(16850);
      let initialScrollIndex = tmpResult.getInitialScrollIndex(current, memo);
      flag = 0 !== initialScrollIndex && 1 !== initialScrollIndex;
      const tmp7 = 0 !== initialScrollIndex && 1 !== initialScrollIndex;
    }
  }
  const items = [memo, flag, ref, navigation, current];
  const effect = obj2.useEffect(() => {
    ref = navigation.addListener("transitionEnd", () => {
      const tmp = flag;
      if (tmp) {
        const obj = ref(closure_1[4]);
        const initialScrollIndex = obj.getInitialScrollIndex(closure_1_4, closure_1_1);
        if (null != initialScrollIndex) {
          if (ref != null) {
            current = ref.current;
            if (current != null) {
              const obj2 = { index: initialScrollIndex, animated: false, viewOffset: -300 };
              current.scrollToIndex(obj2);
            }
          }
        }
      }
      closure_1_3.current = undefined;
    });
    return () => {
      ref();
      UserSettingSearchStore.setState({ selected: null });
      ref.current = undefined;
    };
  }, items);
}
