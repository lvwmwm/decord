// Module ID: 1550
// Function ID: 17580
// Name: useScrollToTop
// Dependencies: []
// Exports: default

// Module 1550 (useScrollToTop)
let closure_2 = importAll(dependencyMap[0]);

export default function useScrollToTop(ref) {
  const arg1 = ref;
  const navigation = arg1(dependencyMap[1]).useNavigation();
  const dependencyMap = navigation;
  const obj = arg1(dependencyMap[1]);
  const route = arg1(dependencyMap[1]).useRoute();
  const React = route;
  const items = [navigation, ref, route.key];
  const effect = React.useEffect(() => {
    const items = [];
    const arg0 = items;
    for (let parent = closure_1; parent; parent = parent.getParent()) {
      let tmp = parent;
      if ("tab" === parent.getState().type) {
        let arr = items.push(parent);
      }
    }
    if (0 !== items.length) {
      let closure_1 = items.map((addListener) => addListener.addListener("tabPress", (arg0) => {
        closure_1 = closure_1.isFocused();
        let hasItem = arg0.includes(closure_1);
        if (!hasItem) {
          hasItem = closure_1.getState().routes[0].key === hasItem.key;
        }
        const animationFrame = requestAnimationFrame((self) => {
          if (null == self.current) {
            let tmp3 = closure_1;
            if (closure_1) {
              tmp3 = hasItem;
            }
            if (tmp3) {
              tmp3 = null;
            }
            if (tmp3) {
              tmp3 = !self.defaultPrevented;
            }
            if (tmp3) {
              if ("scrollToTop" in null) {
                null.scrollToTop();
              } else if ("scrollTo" in null) {
                null.scrollTo({ "Bool(false)": "info", "Bool(false)": "/" });
              } else if ("scrollToOffset" in null) {
                null.scrollToOffset({ "Null": "info", "Null": "/" });
              } else if ("scrollResponderScrollTo" in null) {
                const result = null.scrollResponderScrollTo({ "Bool(false)": "info", "Bool(false)": "/" });
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
