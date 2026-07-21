// Module ID: 8267
// Function ID: 65215
// Name: _openMediaModal
// Dependencies: []
// Exports: openMediaModal

// Module 8267 (_openMediaModal)
async function _openMediaModal(arg0, arg1) {
  const fn = function*(arg0) {
    let initialIndex;
    let openAs;
    let originViewOrOriginLayout;
    ({ initialIndex, originViewOrOriginLayout } = arg0);
    if (initialIndex === undefined) {
      initialIndex = 0;
    }
    ({ initialSources: closure_1, analyticsSource: closure_2, channelId: closure_3, onClose: closure_4, openAs } = arg0);
    if (openAs === undefined) {
      openAs = "modal";
    }
    Object.setPrototypeOf(null);
    let closure_6 = Object.assign(arg0, { "Null": true, "Null": "/assets/design/components/Icon/native/redesign/generated/images", "Null": 24, "Null": 24, "Null": null, "Null": "99274532ad7fe616c031212e677b32e8", "Null": "ThreadLockIcon" });
    let setMediaViewerSources;
    let MediaViewerAnalytics;
    let initVideoStateStore;
    yield undefined;
    const items = [initialIndex(closure_2[6])(closure_2[5], closure_2.paths), initialIndex(closure_2[6])(closure_2[7], closure_2.paths), initialIndex(closure_2[6])(closure_2[8], closure_2.paths)];
    const tmp3 = callback(yield Promise.all(items), 3);
    setMediaViewerSources = tmp3[0].setMediaViewerSources;
    MediaViewerAnalytics = tmp3[1].MediaViewerAnalytics;
    initVideoStateStore = tmp3[2].initVideoStateStore;
    !function getMeasureInWindowFunction(originViewOrOriginLayout) {
      const initialIndex = originViewOrOriginLayout;
      if (null != originViewOrOriginLayout) {
        if ("measureInWindow" in originViewOrOriginLayout) {
          const measureInWindow = originViewOrOriginLayout.measureInWindow;
          let fn = measureInWindow.bind(originViewOrOriginLayout);
        }
        return fn;
      }
      fn = (arg0) => {
        if (null != arg0) {
          let size = arg0;
        } else {
          size = { width: arg0(closure_2[4]).getWindowDimensions().width };
          const obj = arg0(closure_2[4]);
          size.height = arg0(closure_2[4]).getWindowDimensions().height;
          const obj2 = arg0(closure_2[4]);
        }
        arg0(size.x, size.y, size.width, size.height, size.resizeMode);
      };
    }(originViewOrOriginLayout)((arg0, arg1, width, height, resizeMode) => {
      if ("action-sheet" === openAs) {
        lib(closure_2[9])(openAs.isOpen(), "An action sheet must be open to open the media modal as an action sheet");
        let obj = lib(closure_2[10]);
        const tmp7 = initialIndex(closure_2[6])(closure_2[11], closure_2.paths);
        obj = {};
        const merged = Object.assign(closure_6);
        obj["initialIndex"] = initialIndex;
        obj = { x: arg0, y: arg1, width, height, resizeMode };
        obj["originLayout"] = obj;
        obj["onCloseCallback"] = closure_4;
        obj["disableHapticOnOpen"] = true;
        obj.openLazy(tmp7, closure_6, obj, "stack");
        const tmp3 = lib(closure_2[9]);
      } else {
        let obj5 = lib(closure_2[12]);
        const tmp25 = initialIndex(closure_2[6])(closure_2[13], closure_2.paths);
        const obj1 = {};
        const merged1 = Object.assign(closure_6);
        obj1["initialIndex"] = initialIndex;
        const obj2 = { x: arg0, y: arg1, width, height, resizeMode };
        obj1["originLayout"] = obj2;
        obj1["onCloseCallback"] = closure_4;
        const obj3 = { animation: "none" };
        obj5.pushLazy(tmp25, obj1, closure_6, obj3);
      }
      setMediaViewerSources({ sources: lib, initialIndex });
      obj5 = { channelId: closure_3, numMediaItems: lib.length, source: closure_2 };
      MediaViewerAnalytics.markSessionStarted(obj5);
      initVideoStateStore();
    });
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const MEDIA_MODAL_KEY = arg1(dependencyMap[3]).MEDIA_MODAL_KEY;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/media_viewer/native/components/openMediaModal.tsx");

export const openMediaModal = function openMediaModal(arg0) {
  return _openMediaModal(...arguments);
};
