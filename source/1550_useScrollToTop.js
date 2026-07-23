// Module ID: 1550
// Function ID: 17581
// Name: useScrollToTop
// Dependencies: [31, 1459]
// Exports: default

// Module 1550 (useScrollToTop)
import result from "result";

const require = arg1;

export default function useScrollToTop(ref) {
  const _require = ref;
  navigation = _require(navigation[1]).useNavigation();
  const obj = _require(navigation[1]);
  const route = _require(navigation[1]).useRoute();
  let items = [navigation, ref, route.key];
  const effect = route.useEffect(() => {
    const items = [];
    for (let parent = closure_1; parent; parent = parent.getParent()) {
      let tmp = parent;
      if ("tab" === parent.getState().type) {
        let arr = items.push(parent);
      }
    }
    if (0 !== items.length) {
      closure_1 = items.map((addListener) => addListener.addListener("tabPress", (arg0) => {
        let closure_0 = arg0;
        closure_1 = closure_1.isFocused();
        let hasItem = outer1_0.includes(closure_1);
        if (!hasItem) {
          hasItem = closure_1.getState().routes[0].key === outer2_2.key;
        }
        const animationFrame = requestAnimationFrame(() => {
          if (null == items.current) {
            let tmp3 = closure_1;
            if (closure_1) {
              tmp3 = hasItem;
            }
            if (tmp3) {
              tmp3 = null;
            }
            if (tmp3) {
              tmp3 = !defaultPrevented.defaultPrevented;
            }
            if (tmp3) {
              if ("scrollToTop" in null) {
                null.scrollToTop();
              } else if ("scrollTo" in null) {
                null.scrollTo({ y: 0, animated: true });
              } else if ("scrollToOffset" in null) {
                null.scrollToOffset({ offset: 0, animated: true });
              } else if ("scrollResponderScrollTo" in null) {
                const result = null.scrollResponderScrollTo({ y: 0, animated: true });
              }
            }
          } else {
            if (!("scrollToTop" in tmp.current)) {
              if (!("scrollTo" in tmp.current)) {
                if (!("scrollToOffset" in tmp.current)) {
                  if (!("scrollResponderScrollTo" in tmp.current)) {
                    const current = tmp.current;
                    if ("getScrollResponder" in tmp.current) {
                      let current3 = current.getScrollResponder();
                    } else {
                      const current2 = tmp.current;
                      if ("getNode" in current) {
                        current3 = current2.getNode();
                      } else {
                        current3 = current2;
                      }
                    }
                  }
                }
              }
            }
            current3 = tmp.current;
          }
        });
      }));
      return () => {
        const item = closure_1.forEach((arg0) => arg0());
      };
    }
  }, items);
};
