// Module ID: 16265
// Function ID: 16266
// Name: SearchTabsGradient
// Dependencies: [19, 21, 4167, 712, 4296, 12264, 2]
// Exports: default

// Module 16265 (SearchTabsGradient)
import ThemesDefault from "Themes" /* 712 */;
import TabsGradientDefault from "TabsGradient" /* 12264 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(4167).useToken(ThemesDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = React.useMemo(() => {
    const items = [token, token(closure_1_2[4]).hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(TabsGradientDefault, { state: state.state, colors });
};
