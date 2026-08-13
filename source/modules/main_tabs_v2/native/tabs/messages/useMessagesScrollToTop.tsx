// Module ID: 15250
// Function ID: 15251
// Name: useMessagesScrollToTop
// Dependencies: [19, 4334, 4197, 9602, 1500, 2]
// Exports: default

// Module 15250 (useMessagesScrollToTop)
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
const result = require("coerceMainRoute").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx");

export default function useMessagesScrollToTop(listRef) {
  listRef = listRef.listRef;
  const listRefHappeningNow = listRef.listRefHappeningNow;
  const items = [listRef, listRefHappeningNow];
  const ref = React.useRef(React.useMemo(() => ({
    scrollToTopTimeout: -1,
    scrollToTop() {
      if (null != obj.coerceGuildsRoute(outer1_1(outer1_2[3])())) {
        const self = this;
        if (-1 === this.scrollToTopTimeout) {
          const _setTimeout = setTimeout;
          self.scrollToTopTimeout = setTimeout(() => {
            if (ref != null) {
              const current = ref.current;
              if (current != null) {
                current.scrollToTop(!outer1_4.useReducedMotion);
              }
            }
            const current2 = ref2.current;
            if (current2 != null) {
              const obj = { offset: 0, animated: null };
              obj[1] = !outer1_4.useReducedMotion;
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
  const scrollToTop = listRef(1500).useScrollToTop(ref);
};
