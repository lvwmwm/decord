// Module ID: 14578
// Function ID: 111134
// Name: useAutoScrollToSearchResultSetting
// Dependencies: [31, 13552, 10096, 13557, 13555, 1456, 2]
// Exports: useAutoScrollToSearchResultSetting

// Module 14578 (useAutoScrollToSearchResultSetting)
import result from "result";
import zustandStore from "zustandStore";
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";

const require = arg1;
const result = require("GUILD_SELECT_ALL_SERVERS_OPTION_ID").fileFinishedImporting("modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx");

export const useAutoScrollToSearchResultSetting = function useAutoScrollToSearchResultSetting(ref, memo, scrollTarget) {
  const _require = ref;
  const dependencyMap = memo;
  let current = ref.useField("selected");
  const navigation = _require(1456).useNavigation();
  ref = navigation.useRef(scrollTarget);
  if (null == current) {
    current = ref.current;
  }
  let flag = false;
  if (null != current) {
    flag = false;
    if (_require(13557).SETTING_RENDERER_CONFIG[current].type !== current.ROUTE) {
      let initialScrollIndex = _require(13555).getInitialScrollIndex(current, memo);
      let tmp9 = 0 !== initialScrollIndex;
      if (tmp9) {
        tmp9 = 1 !== initialScrollIndex;
      }
      flag = tmp9;
      let obj2 = _require(13555);
    }
  }
  const items = [memo, flag, ref, navigation, current];
  const effect = navigation.useEffect(() => {
    let closure_0 = navigation.addListener("transitionEnd", () => {
      if (outer1_5) {
        let obj = ref(table[4]);
        const initialScrollIndex = obj.getInitialScrollIndex(outer1_4, outer1_1);
        if (null != initialScrollIndex) {
          let tmp8 = null == ref;
          if (!tmp8) {
            const current = ref.current;
            tmp8 = null == current;
            const obj2 = current;
          }
          if (!tmp8) {
            obj = { index: initialScrollIndex, animated: false, viewOffset: 300 };
            obj2.scrollToIndex(obj);
          }
        }
      }
      outer1_3.current = undefined;
    });
    return () => {
      ref();
      ref.setState({ selected: null });
      outer1_3.current = undefined;
    };
  }, items);
};
