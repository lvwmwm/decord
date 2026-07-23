// Module ID: 8274
// Function ID: 65264
// Name: _openMediaModal
// Dependencies: [57, 5, 3823, 653, 1450, 8275, 1934, 8278, 8282, 44, 4098, 8291, 4337, 8292, 2]
// Exports: openMediaModal

// Module 8274 (_openMediaModal)
import _slicedToArray from "_slicedToArray";
import zustandStore from "zustandStore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MEDIA_MODAL_KEY } from "ME";

const require = arg1;
async function _openMediaModal(arg0, arg1) {
  let iter = (function*(arg0) {
    let closure_1;
    let closure_2;
    let _slicedToArray;
    let zustandStore;
    let initialIndex;
    let openAs;
    let originViewOrOriginLayout;
    ({ initialIndex, originViewOrOriginLayout } = arg0);
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    ({ initialSources: closure_1, analyticsSource: closure_2, channelId: _slicedToArray, onClose: zustandStore, openAs } = arg0);
    if (openAs === undefined) {
      openAs = "modal";
    }
    Object.setPrototypeOf(null);
    let closure_6 = Object.assign(arg0, { originViewOrOriginLayout: 0, initialIndex: 0, initialSources: 0, analyticsSource: 0, channelId: 0, onClose: 0, openAs: 0 });
    let setMediaViewerSources;
    let MediaViewerAnalytics;
    let initVideoStateStore;
    yield undefined;
    const items = [outer2_0(outer2_2[6])(outer2_2[5], outer2_2.paths), outer2_0(outer2_2[6])(outer2_2[7], outer2_2.paths), outer2_0(outer2_2[6])(outer2_2[8], outer2_2.paths)];
    let tmp3 = outer2_3(yield Promise.all(items), 3);
    setMediaViewerSources = tmp3[0].setMediaViewerSources;
    MediaViewerAnalytics = tmp3[1].MediaViewerAnalytics;
    initVideoStateStore = tmp3[2].initVideoStateStore;
    !(function getMeasureInWindowFunction(originViewOrOriginLayout) {
      let closure_0 = originViewOrOriginLayout;
      if (null != originViewOrOriginLayout) {
        if ("measureInWindow" in originViewOrOriginLayout) {
          const measureInWindow = originViewOrOriginLayout.measureInWindow;
          let fn = measureInWindow.bind(originViewOrOriginLayout);
        }
        return fn;
      }
      fn = (arg0) => {
        if (null != closure_0) {
          let size = closure_0;
        } else {
          size = { x: 0, y: 0, width: outer4_0(outer4_2[4]).getWindowDimensions().width };
          const obj = outer4_0(outer4_2[4]);
          size.height = outer4_0(outer4_2[4]).getWindowDimensions().height;
          const obj2 = outer4_0(outer4_2[4]);
        }
        arg0(size.x, size.y, size.width, size.height, size.resizeMode);
      };
    })(originViewOrOriginLayout)((arg0, arg1, width, height, resizeMode) => {
      if ("action-sheet" === openAs) {
        outer3_1(outer3_2[9])(outer3_5.isOpen(), "An action sheet must be open to open the media modal as an action sheet");
        let obj = outer3_1(outer3_2[10]);
        const tmp7 = outer3_0(outer3_2[6])(outer3_2[11], outer3_2.paths);
        obj = {};
        const merged = Object.assign(closure_6);
        obj["initialIndex"] = initialIndex;
        obj = { x: arg0, y: arg1, width, height, resizeMode };
        obj["originLayout"] = obj;
        obj["onCloseCallback"] = zustandStore;
        obj["disableHapticOnOpen"] = true;
        obj.openLazy(tmp7, outer3_6, obj, "stack");
        const tmp3 = outer3_1(outer3_2[9]);
      } else {
        let obj5 = outer3_1(outer3_2[12]);
        const tmp25 = outer3_0(outer3_2[6])(outer3_2[13], outer3_2.paths);
        const obj1 = {};
        const merged1 = Object.assign(closure_6);
        obj1["initialIndex"] = initialIndex;
        const obj2 = { x: arg0, y: arg1, width, height, resizeMode };
        obj1["originLayout"] = obj2;
        obj1["onCloseCallback"] = zustandStore;
        const obj3 = { animation: "none" };
        obj5.pushLazy(tmp25, obj1, outer3_6, obj3);
      }
      setMediaViewerSources({ sources: length, initialIndex });
      obj5 = { channelId: _slicedToArray, numMediaItems: length.length, source: closure_2 };
      MediaViewerAnalytics.markSessionStarted(obj5);
      initVideoStateStore();
    });
  })();
  iter.next();
  return iter;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_viewer/native/components/openMediaModal.tsx");

export const openMediaModal = function openMediaModal(arg0) {
  return _openMediaModal(...arguments);
};
