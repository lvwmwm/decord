// Module ID: 6450
// Function ID: 6451
// Name: CardContent
// Dependencies: [32, 19, 17, 21]
// Exports: CardContent

// Module 6450 (CardContent)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let size;

let StyleSheet;
let c2;
({ StyleSheet, View: c2 } = react_native);
const jsx = Fragment.jsx;
const styles = StyleSheet.create({ page: { minHeight: "100%" }, card: { flex: 1, overflow: "hidden" } });

export const CardContent = function CardContent(layout) {
  let closure_1;
  let enabled;
  let first;
  let style;
  layout = layout.layout;
  ({ enabled, style } = layout);
  const merged = Object.assign(layout, Object.assign({ enabled: 0, layout: 0, style: 0 }));
  closure_1 = undefined;
  [first, closure_1] = react.useState(false);
  let items = [, ];
  ({ height: arr[0], width: arr[1] } = layout);
  const effect = react.useEffect(() => {
    if (typeof document !== "undefined") {
      const _document8 = document;
      if (document.body) {
        const _document = document;
        const _document2 = document;
        size = layout;
        if (clientHeight === layout.height) {
          let fn;
          const _navigator = navigator;
          if (navigator.maxTouchPoints > 0) {
            const _document4 = document;
            let element = document.getElementById("__react-navigation-stack-mobile-chrome-viewport-fix");
            if (element == null) {
              const _document5 = document;
              element = <style />;
            }
            element.id = "__react-navigation-stack-mobile-chrome-viewport-fix";
            function updateStyle() {
              const items = [":root { --vh: " + 0.01 * window.innerHeight + "px; }", "body { height: calc(var(--vh, 1vh) * 100); }"];
              element.textContent = items.join("\n");
            }
            const _window = window;
            const _HermesInternal = HermesInternal;
            let items = [":root { --vh: " + 0.01 * window.innerHeight + "px; }", "body { height: calc(var(--vh, 1vh) * 100); }"];
            element.textContent = items.join("\n");
            const _document6 = document;
            if (!head.contains(element)) {
              const _document7 = document;
              const head2 = document.head;
              head2.appendChild(element);
            }
            const _window2 = window;
            const listener = window.addEventListener("resize", updateStyle);
            fn = function t() {
              const removed = window.removeEventListener("resize", updateStyle);
            };
          }
          let tmp10 = tmp === size.width;
          const tmp9 = closure_1;
          if (tmp10) {
            tmp10 = clientHeight === size.height;
          }
          tmp9(tmp10);
          return fn;
        }
        const _document3 = document;
        const element1 = document.getElementById("__react-navigation-stack-mobile-chrome-viewport-fix");
        if (element1 != null) {
          element1.remove();
        }
      }
    }
  }, items);
  const obj = { pointerEvents: "box-none" };
  const merged1 = Object.assign(merged);
  const tmp5 = jsx;
  const tmp6 = React2;
  if (enabled) {
    let card;
    if (first) {
      card = closure_4.page;
    }
    const items1 = [card, style];
    obj.style = items1;
    return tmp5(tmp6, obj);
  }
  card = closure_4.card;
};
