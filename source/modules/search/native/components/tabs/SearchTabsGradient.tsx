// Module ID: 15548
// Function ID: 15549
// Name: SearchTabsGradient
// Dependencies: [19, 21, 3893, 712, 4033, 11858, 2]
// Exports: default

// Module 15548 (SearchTabsGradient)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(3893).useToken(importDefault(712).colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = React.useMemo(() => {
    const items = [token, token(outer1_2[4]).hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(importDefault(11858), { state: state.state, colors });
};
