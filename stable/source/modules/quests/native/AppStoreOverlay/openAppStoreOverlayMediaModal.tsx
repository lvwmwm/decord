// Module ID: 10930
// Function ID: 10931
// Name: openAppStoreOverlayMediaModal
// Dependencies: [32, 5, 4561, 1085, 1484, 7934, 1987, 7935, 7936, 10931, 1126, 4854, 5093, 10932, 2]
// Exports: openAppStoreOverlayMediaModal

// Module 10930 (openAppStoreOverlayMediaModal)
import Constants from "Constants" /* 1085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;
import size_mod from "module_2" /* 2 */;

let obj = function _openAppStoreOverlayMediaModal() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let closure_1;
    let closure_2;
    let initialIndex;
    let intl;
    function getMeasureInWindowFunction(c0) {
      closure_0 = c0;
      if (null != c0) {
        let fn;
        if ("measureInWindow" in c0) {
          const measureInWindow = c0.measureInWindow;
          fn = measureInWindow.bind(c0);
        }
        return fn;
      }
      fn = (fn) => {
        let obj2;
        let obj3;
        size = closure_0;
        if (closure_0 == null) {
          const size1 = { x: 0, y: 0, width: obj2.getWindowDimensions().width, height: obj3.getWindowDimensions().height };
          obj2 = closure_2_0(sources[4]);
          size = size1;
          obj3 = closure_2_0(sources[4]);
        }
        fn(size.x, size.y, size.width, size.height, size.resizeMode);
      };
    }
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_8;
        let closure_9;
        c4 = 2;
        const tmp4 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            const sources = tmp4;
            c0 = undefined;
            initialIndex = undefined;
            c2 = undefined;
            c3 = undefined;
            c4 = undefined;
            c5 = undefined;
            c6 = undefined;
            let closure_7;
            ({ originViewOrOriginLayout: c0, initialIndex } = closure_0);
            if (initialIndex === undefined) {
              initialIndex = 0;
            }
            ({ initialSources: c2, analyticsSource: c3, channelId: c4, onGetGamePress: c5, onClose: c6 } = closure_0);
            closure_7 = Object.assign(tmp42, Object.assign({ originViewOrOriginLayout: 0, initialIndex: 0, initialSources: 0, analyticsSource: 0, channelId: 0, onGetGamePress: 0, onClose: 0 }));
            closure_8 = undefined;
            closure_9 = undefined;
            let setMediaViewerSources;
            let MediaViewerAnalytics;
            let initVideoStateStore;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: null };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const items = [closure_130_0(closure_130_2[6])(closure_130_2[5], closure_130_2.paths), closure_130_0(closure_130_2[6])(closure_130_2[7], closure_130_2.paths), closure_130_0(closure_130_2[6])(closure_130_2[8], closure_130_2.paths)];
            c3 = 2;
            c4 = 1;
            const obj6 = { value: all(items), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_8 = value;
          closure_9 = closure_130_3(closure_8, 3);
          setMediaViewerSources = closure_9[0].setMediaViewerSources;
          MediaViewerAnalytics = closure_9[1].MediaViewerAnalytics;
          initVideoStateStore = closure_9[2].initVideoStateStore;
          const obj7 = {
            text: intl.string(closure_130_0(closure_130_2[10]).t.lwQdjB),
            onPress() {
                    if (closure_2_5.isOpen()) {
                      const tmpResult = initialIndex(sources[11]);
                      tmpResult.hideActionSheet(closure_2_6);
                    } else {
                      const tmpResult2 = initialIndex(sources[12]);
                      tmpResult2.popWithKey(closure_2_6);
                    }
                    closure_1_5();
                  }
          };
          const setMediaModalFooterAction = closure_130_0(closure_130_2[9]).setMediaModalFooterAction;
          const tmp20 = closure_130_0(closure_130_2[9]);
          intl = closure_130_0(closure_130_2[10]).intl;
          const result = setMediaModalFooterAction(obj7);
          getMeasureInWindowFunction(c0)((x, y, width, height, arg4) => {
            let str = arg4;
            obj = { initialIndex, originLayout: size, onCloseCallback, disableHapticOnOpen: true, disableMediaOverlayFooter: true, disableMediaOverlayButton: true, shareable: false };
            const merged = Object.assign(closure_1_7);
            size = { x, y, width, height, resizeMode: str };
            const tmp2 = initialIndex;
            if (arg4 == null) {
              str = "cover";
            }
            if (closure_2_5.isOpen()) {
              const tmp3Result = initialIndex(sources[11]);
              tmp3Result.openLazy(closure_0(sources[6])(sources[13], sources.paths), closure_2_6, obj, "stack");
            } else {
              const tmp3Result2 = initialIndex(sources[12]);
              tmp3Result2.pushLazy(closure_0(sources[6])(sources[13], sources.paths), obj, closure_2_6, { animation: "none" });
            }
            const obj2 = { sources, initialIndex: tmp2 };
            closure_1_10(obj2);
            const obj3 = { channelId, numMediaItems: sources.length, source };
            closure_1_11.markSessionStarted(obj3);
            closure_1_12();
          });
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        c4 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const MEDIA_MODAL_KEY = Constants.MEDIA_MODAL_KEY;
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayMediaModal.tsx");

export const openAppStoreOverlayMediaModal = function openAppStoreOverlayMediaModal() {
  return obj(...arguments);
};
