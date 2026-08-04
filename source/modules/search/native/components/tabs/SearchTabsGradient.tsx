// Module ID: 15674
// Function ID: 15675
// Name: SearchTabsGradient
// Dependencies: [19, 21, 3989, 712, 4129, 12027, 2]
// Exports: default

// Module 15674 (SearchTabsGradient)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(3989).useToken(importDefault(712).colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = React.useMemo(() => {
    const items = [token, token(outer1_2[4]).hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(importDefault(12027), { state: state.state, colors });
};
