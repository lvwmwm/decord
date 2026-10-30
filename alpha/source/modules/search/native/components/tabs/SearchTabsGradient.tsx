// Module ID: 18752
// Function ID: 18753
// Name: SearchTabsGradient
// Dependencies: [19, 21, 5591, 575, 5006, 14319, 2]
// Exports: default

// Module 18752 (SearchTabsGradient)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import TabsGradientDefault from "TabsGradient" /* 14319 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  state = state.state;
  let obj = token(5591);
  token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = react.useMemo(() => {
    const items = [token, ];
    const obj = ColorUtils;
    items[1] = obj.hexWithOpacity(token, 0);
    return items;
  }, items);
  return jsx(TabsGradientDefault, { state, colors });
};
