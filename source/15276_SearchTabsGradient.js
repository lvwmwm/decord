// Module ID: 15276
// Function ID: 116187
// Name: SearchTabsGradient
// Dependencies: []
// Exports: default

// Module 15276 (SearchTabsGradient)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  const colors = function useGradientColors() {
    const token = token(closure_2[2]).useToken(callback(closure_2[3]).colors.BACKGROUND_BASE_LOW);
    const items = [token];
    return React.useMemo(() => {
      const items = [token, token(closure_2[4]).hexWithOpacity(token, 0)];
      return items;
    }, items);
  }();
  return jsx(importDefault(dependencyMap[5]), { state: state.state, colors });
};
