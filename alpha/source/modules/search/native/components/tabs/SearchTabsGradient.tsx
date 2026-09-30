// Module ID: 16770
// Function ID: 16771
// Name: SearchTabsGradient
// Dependencies: [19, 21, 4561, 576, 4713, 12476, 2]
// Exports: default

// Module 16770 (SearchTabsGradient)
import nativeDefault from "native" /* 576 */;
import ColorUtils from "ColorUtils" /* 4713 */;
import TabsGradientDefault from "TabsGradient" /* 12476 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(4561).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = noop.useMemo(() => {
    const items = [token, ColorUtils.hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(TabsGradientDefault, { state: state.state, colors });
};
