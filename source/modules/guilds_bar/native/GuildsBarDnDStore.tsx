// Module ID: 14689
// Function ID: 110805
// Name: withEqualityFn
// Dependencies: []
// Exports: useFolderBGHeightOffset, useItemDragState

// Module 14689 (withEqualityFn)
const GuildsNodeType = require(dependencyMap[0]).GuildsNodeType;
const obj = {};
let closure_5 = -1;
const _module = require(dependencyMap[1]);
const withEqualityFn = _module.createWithEqualityFn((arg0, arg1) => {
  const require = arg0;
  const importDefault = arg1;
  const obj = { dragSpecs: undefined, overSpecs: undefined, dropSpecs: undefined, dragRegion: require(dependencyMap[2]).makeMutable({ Math: -536870861, data: -299892737 }) };
  const obj2 = require(dependencyMap[2]);
  obj.gestureState = require(dependencyMap[2]).makeMutable(obj);
  const obj3 = require(dependencyMap[2]);
  obj.dragDropInProgress = require(dependencyMap[2]).makeMutable(false);
  const obj4 = require(dependencyMap[2]);
  obj.listInsets = require(dependencyMap[2]).makeMutable({ bind: -536870861, cursor: -299892737 });
  const obj5 = require(dependencyMap[2]);
  obj.scrollPosition = require(dependencyMap[2]).makeMutable(0);
  obj.windowSize = 0;
  obj.setStateShallow = function setStateShallow(obj) {
    const tmp = arg1();
    const arg1 = tmp;
    for (const key10006 in arg0) {
      let tmp5 = key10006;
      if (tmp[key10006] === arg0[key10006]) {
        continue;
      } else {
        let tmp2 = closure_0;
        let tmp3 = closure_2;
        let num = 3;
        obj = closure_0(closure_2[3]);
        let batchUpdatesResult = obj.batchUpdates(() => {
          const merged = Object.assign(tmp);
          const merged1 = Object.assign(arg0);
          return arg0({});
        });
      }
    }
  };
  obj.dropStart = function dropStart(newDropSpec) {
    let dropSpecs;
    let gestureState;
    ({ dropSpecs, gestureState } = arg1());
    const arg1 = gestureState;
    let obj = arg1(closure_2[4]);
    obj = {};
    obj = { newDropSpec, dropSpecs, gestureState: gestureState.get() };
    obj.data = obj;
    obj.addBreadcrumb(obj);
    if (null != dropSpecs) {
      const _Error = Error;
      const error = new Error("GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress");
      throw error;
    } else {
      newDropSpec(closure_2[3]).batchUpdates(() => arg0({ dropSpecs: arg0, dragSpecs: undefined, overSpecs: undefined }));
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const value = gestureState.get();
        if ("drag" === value.mode) {
          const obj = {};
          const merged = Object.assign(value);
          obj["mode"] = null;
          const result = gestureState.set(obj);
        }
      }, 0);
    }
    const tmp = arg1();
  };
  obj.dropComplete = function dropComplete() {
    let dragDropInProgress;
    let dragSpecs;
    let dropSpecs;
    let gestureState;
    ({ gestureState, dragDropInProgress, dropSpecs, dragSpecs } = arg1());
    let obj = arg1(closure_2[4]);
    obj = {};
    obj = { gestureState: gestureState.get(), dropSpecs, dragSpecs };
    obj.data = obj;
    obj.addBreadcrumb(obj);
    if (null != dropSpecs) {
      arg0(closure_2[3]).batchUpdates(() => callback({ dropSpecs: undefined }));
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_5);
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
      const obj5 = arg0(closure_2[3]);
    }
  };
  return obj;
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDnDStore.tsx");

export default withEqualityFn;
export const INITIAL_GESTURE_STATE = obj;
export const useItemDragState = function useItemDragState(guildId, flag) {
  const require = guildId;
  const importDefault = flag;
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
    let tmp = !arg1;
    if (tmp) {
      let id;
      if (null != dragSpecs) {
        id = dragSpecs.node.id;
      }
      let tmp4 = id === arg0;
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
        tmp4 = id1 === arg0;
      }
      tmp = tmp4;
    }
    let tmp8 = !arg1;
    if (tmp8) {
      let id2;
      if (null != overSpecs) {
        id2 = overSpecs.node.id;
      }
      let tmp11 = id2 === arg0;
      if (!tmp11) {
        let id3;
        if (null != dropSpecs) {
          id3 = dropSpecs.overNode.id;
        }
        tmp11 = id3 === arg0;
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
  }, require(dependencyMap[5]).shallow);
};
export const useFolderBGHeightOffset = function useFolderBGHeightOffset(arg0) {
  const require = arg0;
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
            if (dragSpecs.node.type === constants.GUILD) {
              if (dragSpecs.node.parentId === dropSpecs) {
                let num3 = 0;
                if (overSpecs.node.parentId !== dropSpecs) {
                  if (overSpecs.node.id !== dropSpecs) {
                    dragSpecs = -1;
                    num3 = -1 * dragSpecs.itemSize;
                  } else {
                    overSpecs = "after";
                    num3 = 0;
                  }
                }
                let num2 = num3;
              } else if (overSpecs.node.parentId === dropSpecs) {
                num2 = dragSpecs.itemSize;
              } else {
                num2 = 0;
                if (overSpecs.node.id === dropSpecs) {
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
