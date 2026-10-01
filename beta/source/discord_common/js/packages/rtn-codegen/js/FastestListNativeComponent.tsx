// Module ID: 6477
// Function ID: 6478
// Name: FastestListNativeComponent
// Dependencies: [106, 65, 114, 2]

// Module 6477 (FastestListNativeComponent)
import renderElement from "renderElement" /* 114 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "FastestList", directEventTypes: { topLayout: { registrationName: "onLayout" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topVisibleItemsChanged: { registrationName: "onVisibleItemsChanged" }, topUnexpectedItemSize: { registrationName: "onUnexpectedItemSize" } }, validAttributes: obj2 };
obj2 = { insetStart: true, insetEnd: true, horizontal: true, keyboardDismissOnDrag: true, placeholderConfig: true, renderAhead: true, scrollEventThrottle: true, sectionsVersioned: true, showsHorizontalScrollIndicator: true, showsVerticalScrollIndicator: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onLayout: true, onScroll: true, onScrollBeginDrag: true, onScrollEndDrag: true, onVisibleItemsChanged: true, onUnexpectedItemSize: true }));
const obj3 = {
  scrollToLocation(arg0, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    const obj = renderElement;
    obj.dispatchCommand(arg0, "scrollToLocation", items);
  },
  scrollToTop(arg0, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(arg0, "scrollToTop", items);
  }
};
const value = module_65.get("FastestList", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;
