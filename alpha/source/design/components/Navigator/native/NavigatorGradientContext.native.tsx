// Module ID: 7272
// Function ID: 7273
// Name: NavigatorGradientContext
// Dependencies: [19, 21, 7071, 2]
// Exports: NavigatorGradientProvider

// Module 7272 (NavigatorGradientContext)
import Fragment from "Fragment" /* 21 */;
import _mod7071 from "module_7071" /* 7071 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(undefined);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorGradientContext.native.tsx");

export const NavigatorGradientContext = context;
export function NavigatorGradientProvider(color) {
  color = color.color;
  const children = color.children;
  const obj = _mod7071;
  const headerHeight = obj.useHeaderHeight();
  const items = [color, headerHeight];
  return <context.Provider value={react.useMemo(() => ({ color, headerHeight }), items)}>{children}</context.Provider>;
}
