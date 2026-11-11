// Module ID: 7523
// Function ID: 7524
// Name: NavigatorGradientContext
// Dependencies: [19, 21, 7434, 2]
// Exports: NavigatorGradientProvider

// Module 7523 (NavigatorGradientContext)
import Fragment from "Fragment" /* 21 */;
import _mod7434 from "module_7434" /* 7434 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(undefined);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorGradientContext.native.tsx");

export const NavigatorGradientContext = context;
export function NavigatorGradientProvider(color) {
  color = color.color;
  const children = color.children;
  const obj = _mod7434;
  const headerHeight = obj.useHeaderHeight();
  const items = [color, headerHeight];
  return <context.Provider value={react.useMemo(() => ({ color, headerHeight }), items)}>{children}</context.Provider>;
}
