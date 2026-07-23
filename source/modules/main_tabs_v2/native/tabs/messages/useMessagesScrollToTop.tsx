// Module ID: 14915
// Function ID: 113689
// Name: useMessagesScrollToTop
// Dependencies: [31, 4122, 3981, 10887, 1457, 2]
// Exports: default

// Module 14915 (useMessagesScrollToTop)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx");

export default function useMessagesScrollToTop(listRef) {
  listRef = listRef.listRef;
  const listRefHappeningNow = listRef.listRefHappeningNow;
  const items = [listRef, listRefHappeningNow];
  const ref = React.useRef(React.useMemo(() => ({
    scrollToTopTimeout: -1,
    scrollToTop() {
      const self = this;
      if (null != obj.coerceGuildsRoute(listRefHappeningNow(outer2_2[3])())) {
        if (-1 === self.scrollToTopTimeout) {
          const _setTimeout = setTimeout;
          self.scrollToTopTimeout = setTimeout(() => {
            let tmp = null == outer2_0;
            if (!tmp) {
              const current = outer2_0.current;
              tmp = null == current;
              let obj = current;
            }
            if (!tmp) {
              obj = { section: 0, item: 0, animated: !outer3_4.useReducedMotion };
              obj.scrollToLocation(obj);
            }
            const current2 = outer2_1.current;
            if (null != current2) {
              obj = { offset: 0, animated: !outer3_4.useReducedMotion };
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
  const scrollToTop = listRef(1457).useScrollToTop(ref);
};
