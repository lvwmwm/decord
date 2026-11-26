// Module ID: 7589
// Function ID: 7590
// Name: NavigatorGradientContext
// Dependencies: [19, 21, 7500, 2]
// Exports: NavigatorGradientProvider

// Module 7589 (NavigatorGradientContext)
import Fragment from "Fragment" /* 21 */;
import _mod7500 from "module_7500" /* 7500 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(undefined);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorGradientContext.native.tsx");

export const NavigatorGradientContext = context;
export function NavigatorGradientProvider(color) {
  color = color.color;
  const children = color.children;
  const obj = _mod7500;
  const headerHeight = obj.useHeaderHeight();
  const items = [color, headerHeight];
  return <context.Provider value={react.useMemo(() => ({ color, headerHeight }), items)}>{children}</context.Provider>;
}
