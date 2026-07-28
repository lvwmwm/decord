// Module ID: 15520
// Function ID: 119117
// Name: SearchTabsGradient
// Dependencies: [31, 33, 3869, 689, 4009, 11837, 2]
// Exports: default

// Module 15520 (SearchTabsGradient)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  const colors = (function useGradientColors() {
    const token = outer1_0(outer1_2[2]).useToken(outer1_1(outer1_2[3]).colors.BACKGROUND_BASE_LOW);
    let items = [token];
    return outer1_3.useMemo(() => {
      const items = [token, outer2_0(outer2_2[4]).hexWithOpacity(token, 0)];
      return items;
    }, items);
  })();
  return jsx(importDefault(11837), { state: state.state, colors });
};
