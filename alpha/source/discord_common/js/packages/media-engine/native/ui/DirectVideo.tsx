// Module ID: 5565
// Function ID: 5566
// Name: DirectVideo
// Dependencies: [19, 21, 4, 5566, 5567, 2]
// Exports: default

// Module 5565 (DirectVideo)
import logger_Logger from "logger/Logger" /* 4 */;
import Fragment from "Fragment" /* 21 */;
import DirectVideoStream from "DirectVideoStream" /* 5566 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const logger = new logger_Logger.Logger("DirectVideo");
logger.enableNativeLogger(true);
let size = size_mod;
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx");

export default function DirectVideo(streamId, onContainerResized) {
  streamId = streamId.streamId;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let onReady = streamId.onReady;
  let onResize = streamId.onResize;
  let flag2 = streamId.reportContainerResized;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const onVideoElement = streamId.onVideoElement;
  const className = streamId.className;
  const merged = Object.assign(streamId, Object.assign({ streamId: 0, paused: 0, onReady: 0, onResize: 0, reportContainerResized: 0, onVideoElement: 0, className: 0 }));
  onResize.useRef(null);
  const ref = onResize.useRef(null);
  let closure_8 = onResize.useRef({ width: 0, height: 0 });
  let obj = { streamId, paused: flag, onReady, onResize, onContainerResized };
  let closure_9 = onResize.useRef(obj);
  const items = [flag2];
  const layoutEffect = onResize.useLayoutEffect(() => {
    let ref2;
    let current = ref.current;
    let defaultView;
    if (current != null) {
      const ownerDocument = current.ownerDocument;
      if (ownerDocument != null) {
        defaultView = ownerDocument.defaultView;
      }
    }
    if (defaultView == null) {
      let tmp2 = globalThis;
      defaultView = window;
    }
    const resizeObserver = new defaultView.ResizeObserver((arg0) => {
      const tmp = flag2;
      if (tmp) {
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp9 = nextResult;
          if (nextResult.target === ref.current) {
            let _window = window;
            let result = window.devicePixelRatio * tmp9.target.clientWidth;
            let _window2 = window;
            let result1 = window.devicePixelRatio * tmp9.target.clientHeight;
            let current = closure_1_9.current;
            let onContainerResized = current.onContainerResized;
            if (onContainerResized != null) {
              let onContainerResizedResult = onContainerResized(closure_1_9.current.streamId, result, result1);
            }
          }
          continue;
        }
      }
    });
    if (null != current) {
      let tmp9 = globalThis;
      const _document = document;
      const element = <video />;
      element.style.display = "block";
      element.style.width = "100%";
      element.style.height = "100%";
      element.autoplay = true;
      element.muted = true;
      const listener = element.addEventListener("pause", function handlePause() {
        if (!closure_1_9.current.paused) {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
      });
      const listener1 = element.addEventListener("resize", function handleResize() {
        let height;
        let width;
        const current = ref.current;
        let num;
        ({ width, height } = ref2.current);
        const tmp = ref2;
        const tmp2 = ref;
        if (current != null) {
          num = current.videoWidth;
        }
        if (num == null) {
          num = 0;
        }
        const current2 = tmp2.current;
        let num2;
        if (current2 != null) {
          num2 = current2.videoHeight;
        }
        if (num2 == null) {
          num2 = 0;
        }
        if (width !== num) {
          size = { width: num, height: num2 };
          const current3 = closure_1_9.current;
          onResize = current3.onResize;
          if (onResize != null) {
            onResize(size);
          }
          tmp.current = size;
        }
      });
      const listener2 = element.addEventListener("canplaythrough", function handleReady() {
        onVideoElement.info("handleReady for " + closure_1_9.current.streamId + ", have onReady callback = " + null != closure_1_9.current.onReady);
        const current = closure_1_9.current;
        onReady = current.onReady;
        if (onReady != null) {
          onReady();
        }
      });
      const _HermesInternal2 = HermesInternal;
      logger.info("create video element for " + closure_9.current.streamId + ", readyState=" + element.readyState);
      let num = 3;
      const obj3 = logger;
      const tmp13 = closure_9;
      if (element.readyState > 3) {
        const _HermesInternal = HermesInternal;
        obj3.error("video element for " + tmp13.current.streamId + " was ready before attached");
      }
      current.appendChild(element);
      resizeObserver.disconnect();
      resizeObserver.observe(element);
      ref.current = element;
    }
  }, items);
  const items1 = [onVideoElement];
  const layoutEffect1 = onResize.useLayoutEffect(() => {
    let tmp;
    if (onVideoElement != null) {
      tmp(ref.current);
    }
    return () => {
      let tmp;
      if (onVideoElement != null) {
        tmp = onVideoElement(null);
      }
      return tmp;
    };
  }, items1);
  const effect = onResize.useEffect(() => {
    closure_9.current.streamId = streamId;
    closure_9.current.paused = flag;
    closure_9.current.onReady = onReady;
    closure_9.current.onResize = onResize;
  });
  const items2 = [flag, streamId];
  const effect1 = onResize.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      const tmp8 = flag;
      if (tmp8) {
        if (null != current.srcObject) {
          current.srcObject = null;
        }
      } else {
        const _HermesInternal = HermesInternal;
        logger.info("attaching srcObject for " + streamId);
        const obj = DirectVideoStream;
        const result = obj.acquireDirectVideoStream(streamId);
        current.srcObject = result.stream;
        return () => {
          result.release();
          current.srcObject = null;
        };
      }
    }
  }, items2);
  const obj2 = { className: flag(onReady[4])("media-engine-video", className), ref };
  const merged1 = Object.assign(merged);
  return flag2("div", obj2);
};
