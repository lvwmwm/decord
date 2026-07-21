// Module ID: 5401
// Function ID: 46043
// Name: open
// Dependencies: []
// Exports: closeContextMenu, openContextMenuLazy

// Module 5401 (open)
function open(contextMenu) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "CONTEXT_MENU_OPEN", contextMenu };
  obj.dispatch(obj);
}
function openContextMenu(stopPropagation, render, enableSpellCheck, renderLazy) {
  let bottom;
  let left;
  let pageX;
  let pageY;
  stopPropagation.stopPropagation();
  if (null == stopPropagation.currentTarget.contains) {
    pageX = 0;
    pageY = 0;
    if ("pageX" in stopPropagation) {
      ({ pageX, pageY } = stopPropagation);
    }
    let sum1 = pageY;
    let tmp3 = pageX;
    if (0 === pageX) {
      tmp3 = pageX;
      sum1 = pageY;
      if (0 === pageY) {
        const target = stopPropagation.target;
        let selection;
        if (null != target) {
          const defaultView = target.ownerDocument.defaultView;
          if (null != defaultView) {
            selection = defaultView.getSelection();
          }
        }
        left = pageX;
        bottom = pageY;
        if (null != selection) {
          left = pageX;
          bottom = pageY;
          if (selection.rangeCount > 0) {
            left = pageX;
            bottom = pageY;
            if (null != target) {
              const rangeAt = selection.getRangeAt(0);
              left = pageX;
              bottom = pageY;
              if (target.contains(rangeAt.commonAncestorContainer)) {
                const boundingClientRect = rangeAt.getBoundingClientRect();
                left = pageX;
                bottom = pageY;
                if (0 !== boundingClientRect.height) {
                  ({ left, bottom } = boundingClientRect);
                }
              }
            }
          }
        }
        sum1 = bottom;
        tmp3 = left;
        if (0 === left) {
          tmp3 = left;
          sum1 = bottom;
          if (0 === bottom) {
            let size;
            if (null != target) {
              size = target.getBoundingClientRect();
            }
            if (null == size) {
              size = {};
            }
            const left2 = size.left;
            let num2 = 0;
            if (undefined !== left2) {
              num2 = left2;
            }
            const top = size.top;
            let num3 = 0;
            if (undefined !== top) {
              num3 = top;
            }
            const width = size.width;
            let num4 = 0;
            if (undefined !== width) {
              num4 = width;
            }
            const height = size.height;
            let num6 = 0;
            const sum = num2 + num4 / 2;
            if (undefined !== height) {
              num6 = height;
            }
            sum1 = num3 + num6 / 2;
            tmp3 = sum;
          }
        }
      }
    }
    let obj = { render, renderLazy };
    let currentTarget2 = stopPropagation.target;
    if (null == currentTarget2) {
      currentTarget2 = stopPropagation.currentTarget;
    }
    obj.target = currentTarget2;
    const _DOMRect = DOMRect;
    const dOMRect = new DOMRect(tmp3, sum1, 0, 0);
    obj.rect = dOMRect;
    obj = {};
    let APP = require(dependencyMap[2]).getCurrentlyInteractingAppContext();
    if (null == APP) {
      APP = AppContext.APP;
    }
    obj.context = APP;
    const merged = Object.assign(enableSpellCheck);
    obj.config = obj;
    const require = obj;
    let nativeEvent = stopPropagation;
    if ("nativeEvent" in stopPropagation) {
      nativeEvent = stopPropagation.nativeEvent;
    }
    if (null != enableSpellCheck) {
      if (enableSpellCheck.enableSpellCheck) {
        if (obj5.isDesktop()) {
          if (nativeEvent.isTrusted) {
            let closure_1 = require(dependencyMap[4]).addResultListener(() => {
              callback();
              callback2(obj);
            });
            const obj6 = require(dependencyMap[4]);
          }
        }
        const obj5 = require(dependencyMap[3]);
      }
    }
    stopPropagation.preventDefault();
    open(obj);
    const obj4 = require(dependencyMap[2]);
  } else {
    const currentTarget = stopPropagation.currentTarget;
  }
}
const AppContext = require(dependencyMap[0]).AppContext;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("actions/ContextMenuActionCreators.tsx");

export function closeContextMenu() {

}
export { openContextMenu };
export const openContextMenuLazy = function openContextMenuLazy(stopPropagation, renderLazy, enableSpellCheck) {
  openContextMenu(stopPropagation, undefined, enableSpellCheck, renderLazy);
};
