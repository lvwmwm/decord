// Module ID: 1565
// Function ID: 17629
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42]

// Module 1565 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "RNCSafeAreaView", validAttributes: { mode: true, edges: true } };

export default get.get("RNCSafeAreaView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
