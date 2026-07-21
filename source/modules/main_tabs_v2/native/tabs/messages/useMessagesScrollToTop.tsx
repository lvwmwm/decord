// Module ID: 14791
// Function ID: 111478
// Name: useMessagesScrollToTop
// Dependencies: []
// Exports: default

// Module 14791 (useMessagesScrollToTop)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx");

export default function useMessagesScrollToTop(listRef) {
  listRef = listRef.listRef;
  const arg1 = listRef;
  const listRefHappeningNow = listRef.listRefHappeningNow;
  const importDefault = listRefHappeningNow;
  const items = [listRef, listRefHappeningNow];
  const ref = React.useRef(React.useMemo(() => ({
    scrollToTopTimeout: -1,
    scrollToTop() {
      const self = this;
      if (null != obj.coerceGuildsRoute(callback2(closure_2[3])())) {
        if (-1 === self.scrollToTopTimeout) {
          const _setTimeout = setTimeout;
          self.scrollToTopTimeout = setTimeout(() => {
            let tmp = null == ref;
            if (!tmp) {
              const current = ref.current;
              tmp = null == current;
              let obj = current;
            }
            if (!tmp) {
              obj = { "Bool(false)": -536870861, "Bool(false)": -299892737, animated: !closure_4.useReducedMotion };
              obj.scrollToLocation(obj);
            }
            const current2 = ref2.current;
            if (null != current2) {
              obj = { offset: 0, animated: !closure_4.useReducedMotion };
              current2.scrollToOffset(obj);
            }
          }, 300);
        } else {
          const _clearTimeout = clearTimeout;
          clearTimeout(self.scrollToTopTimeout);
          self.scrollToTopTimeout = -1;
        }
      }
    }
  }), items));
  const scrollToTop = arg1(dependencyMap[4]).useScrollToTop(ref);
};
