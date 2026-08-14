// Module ID: 15890
// Function ID: 15891
// Name: SearchTabsGradient
// Dependencies: [19, 21, 4065, 712, 4191, 12195, 2]
// Exports: default

// Module 15890 (SearchTabsGradient)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(4065).useToken(importDefault(712).colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = React.useMemo(() => {
    const items = [token, token(outer1_2[4]).hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(importDefault(12195), { state: state.state, colors });
};
