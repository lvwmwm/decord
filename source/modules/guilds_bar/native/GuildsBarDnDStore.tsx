// Module ID: 14859
// Function ID: 113333
// Name: withEqualityFn
// Dependencies: [4970, 677, 3991, 682, 1184, 3743, 2]
// Exports: useFolderBGHeightOffset, useItemDragState

// Module 14859 (withEqualityFn)
import { GuildsNodeType } from "_isNativeReflectConstruct";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let obj = { mode: null, initialX: 0, initialY: 0, absoluteX: 0, absoluteY: 0 };
let c5 = -1;
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn((arg0, arg1) => {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = { dragSpecs: undefined, overSpecs: undefined, dropSpecs: undefined, dragRegion: _require(3991).makeMutable({ min: 0, max: 0 }) };
  const obj2 = _require(3991);
  obj.gestureState = _require(3991).makeMutable(obj);
  const obj3 = _require(3991);
  obj.dragDropInProgress = _require(3991).makeMutable(false);
  const obj4 = _require(3991);
  obj.listInsets = _require(3991).makeMutable({ start: 0, end: 0 });
  let obj5 = _require(3991);
  obj.scrollPosition = _require(3991).makeMutable(0);
  obj.windowSize = 0;
  obj.setStateShallow = function setStateShallow(obj) {
    const callback = obj;
    const tmp = callback2();
    callback2 = tmp;
    for (const key10006 in arg0) {
      let tmp5 = key10006;
      if (tmp[key10006] === arg0[key10006]) {
        continue;
      } else {
        let tmp2 = callback;
        let tmp3 = outer1_2;
        let num = 3;
        obj = callback(outer1_2[3]);
        let batchUpdatesResult = obj.batchUpdates(() => {
          const obj = {};
          const merged = Object.assign(closure_1);
          const merged1 = Object.assign(obj);
          return obj(obj);
        });
      }
    }
  };
  obj.dropStart = function dropStart(newDropSpec) {
    let dropSpecs;
    let gestureState;
    const callback = newDropSpec;
    ({ dropSpecs, gestureState } = gestureState());
    let obj = callback2(outer1_2[4]);
    obj = { category: "GuildsBarGesture", message: "dropStart started" };
    obj = { newDropSpec, dropSpecs, gestureState: gestureState.get() };
    obj.data = obj;
    obj.addBreadcrumb(obj);
    if (null != dropSpecs) {
      const _Error = Error;
      const error = new Error("GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress");
      throw error;
    } else {
      callback(outer1_2[3]).batchUpdates(() => newDropSpec({ dropSpecs: newDropSpec, dragSpecs: undefined, overSpecs: undefined }));
      const _clearTimeout = clearTimeout;
      clearTimeout(outer1_5);
      const _setTimeout = setTimeout;
      outer1_5 = setTimeout(() => {
        const value = gestureState.get();
        if ("drag" === value.mode) {
          const obj = {};
          const merged = Object.assign(value);
          obj["mode"] = null;
          const result = gestureState.set(obj);
        }
      }, 0);
    }
    const tmp = gestureState();
  };
  obj.dropComplete = function dropComplete() {
    let dragDropInProgress;
    let dragSpecs;
    let dropSpecs;
    let gestureState;
    ({ gestureState, dragDropInProgress, dropSpecs, dragSpecs } = callback2());
    let obj = callback2(outer1_2[4]);
    obj = { category: "GuildsBarGesture", message: "dropComplete started" };
    obj = { gestureState: gestureState.get(), dropSpecs, dragSpecs };
    obj.data = obj;
    obj.addBreadcrumb(obj);
    if (null != dropSpecs) {
      callback(outer1_2[3]).batchUpdates(() => outer1_0({ dropSpecs: undefined }));
      const _clearTimeout = clearTimeout;
      clearTimeout(outer1_5);
      if (null == dragSpecs) {
        const result = dragDropInProgress.set(false);
      }
      const value = gestureState.get();
      if ("drag" === value.mode) {
        const obj1 = {};
        const merged = Object.assign(value);
        obj1["mode"] = null;
        const result1 = gestureState.set(obj1);
      }
      const obj5 = callback(outer1_2[3]);
    }
  };
  return obj;
});
let result = require("module_3991").fileFinishedImporting("modules/guilds_bar/native/GuildsBarDnDStore.tsx");

export default withEqualityFn;
export const INITIAL_GESTURE_STATE = obj;
export const useItemDragState = function useItemDragState(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  return withEqualityFn((arg0) => {
    let dragDropInProgress;
    let dragSpecs;
    let dropSpecs;
    let overSpecs;
    ({ dragSpecs, overSpecs, dropSpecs, dragDropInProgress } = arg0);
    if (null == dragSpecs) {
      if (null == dropSpecs) {
        let obj = { isDragTarget: false, dragState: undefined, overState: undefined, itemSize: 0, dragDropInProgress };
        return obj;
      }
    }
    let tmp = !closure_1;
    if (tmp) {
      let id;
      if (null != dragSpecs) {
        id = dragSpecs.node.id;
      }
      let tmp4 = id === closure_0;
      if (tmp4) {
        let node;
        if (null != overSpecs) {
          node = overSpecs.node;
        }
        tmp4 = null != node;
      }
      if (!tmp4) {
        let id1;
        if (null != dropSpecs) {
          id1 = dropSpecs.dragNode.id;
        }
        tmp4 = id1 === closure_0;
      }
      tmp = tmp4;
    }
    let tmp8 = !closure_1;
    if (tmp8) {
      let id2;
      if (null != overSpecs) {
        id2 = overSpecs.node.id;
      }
      let tmp11 = id2 === closure_0;
      if (!tmp11) {
        let id3;
        if (null != dropSpecs) {
          id3 = dropSpecs.overNode.id;
        }
        tmp11 = id3 === closure_0;
      }
      tmp8 = tmp11;
    }
    obj = { isDragTarget: tmp };
    if (tmp) {
      let str = "dropping";
      if (null == dropSpecs) {
        str = "dragging";
      }
      const tmp14 = str;
    }
    obj.dragState = tmp14;
    let tmp15;
    if (tmp8) {
      let overState;
      if (null != dropSpecs) {
        overState = dropSpecs.overState;
      }
      if (null == overState) {
        let state;
        if (null != overSpecs) {
          state = overSpecs.state;
        }
        overState = state;
      }
      tmp15 = overState;
    }
    obj.overState = tmp15;
    let num = 0;
    if (tmp8) {
      let itemSize;
      if (null != dropSpecs) {
        itemSize = dropSpecs.itemSize;
      }
      if (null == itemSize) {
        let itemSize1;
        if (null != dragSpecs) {
          itemSize1 = dragSpecs.itemSize;
        }
        itemSize = itemSize1;
      }
      num = 0;
      if (null != itemSize) {
        num = itemSize;
      }
    }
    obj.itemSize = num;
    obj.dragDropInProgress = dragDropInProgress;
    return obj;
  }, _require(3743).shallow);
};
export const useFolderBGHeightOffset = function useFolderBGHeightOffset(arg0) {
  let closure_0 = arg0;
  return withEqualityFn((dropSpecs) => {
    let dragSpecs;
    let overSpecs;
    ({ dragSpecs, overSpecs } = dropSpecs);
    let num = 0;
    if (null == dropSpecs.dropSpecs) {
      num = 0;
      if (null != overSpecs) {
        num = 0;
        if (null != dragSpecs) {
          num = 0;
          if ("self" !== overSpecs.state) {
            num = 0;
            if (dragSpecs.node.type === outer1_3.GUILD) {
              if (dragSpecs.node.parentId === closure_0) {
                let num3 = 0;
                if (overSpecs.node.parentId !== closure_0) {
                  if (overSpecs.node.id !== closure_0) {
                    dragSpecs = -1;
                    num3 = -1 * dragSpecs.itemSize;
                  } else {
                    overSpecs = "after";
                    num3 = 0;
                  }
                }
                let num2 = num3;
              } else if (overSpecs.node.parentId === closure_0) {
                num2 = dragSpecs.itemSize;
              } else {
                num2 = 0;
                if (overSpecs.node.id === closure_0) {
                  num2 = 0;
                }
              }
            }
          }
        }
      }
    }
    return num;
  });
};
