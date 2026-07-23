// Module ID: 4231
// Function ID: 37093
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 31, 33, 4, 4179, 4232, 2]
// Exports: default

// Module 4231 (_createForOfIteratorHelperLoose)
import classNames from "classNames";
import set from "set";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function releaseDirectVideoStream(arg0) {
  const value = map.get(arg0);
  if (tmp) {
    const voiceEngine = require(4179) /* assertInjected */.getVoiceEngine();
    const result = voiceEngine.removeDirectVideoOutputSink(arg0);
    map.delete(arg0);
    const obj2 = require(4179) /* assertInjected */;
  }
}
const logger = new require("log").Logger("DirectVideo");
logger.enableNativeLogger(true);
let closure_8 = (() => {
  class RefCountedStream {
    constructor(arg0) {
      tmp = outer1_3(this, RefCountedStream);
      this.refcount = 1;
      this.stream = window.createDiscordStream(arg0);
      return;
    }
  }
  let obj = {
    key: "addref",
    value() {
      this.refcount = this.refcount + 1;
    }
  };
  const items = [obj, ];
  obj = {
    key: "release",
    value() {
      this.refcount = this.refcount - 1;
      return 0 === this.refcount;
    }
  };
  items[1] = obj;
  return callback(RefCountedStream, items);
})();
const map = new Map();
let result = require("result").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx");

export default function DirectVideo(streamId, onContainerResized) {
  streamId = streamId.streamId;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  const onReady = streamId.onReady;
  const onResize = streamId.onResize;
  let flag2 = streamId.reportContainerResized;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let obj = { streamId: 0, paused: 0, onReady: 0, onResize: 0, reportContainerResized: 0, className: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(streamId, obj);
  let ref;
  let jsx;
  let closure_7;
  let closure_8;
  ref = ref.useRef(null);
  jsx = ref.useRef(null);
  closure_7 = ref.useRef({ width: 0, height: 0 });
  obj = { streamId, paused: flag, onReady, onResize, onContainerResized };
  closure_8 = ref.useRef(obj);
  const items = [flag2];
  const layoutEffect = ref.useLayoutEffect(() => {
    let current = ref.current;
    const resizeObserver = new globalThis.ResizeObserver((arg0) => {
      let iter3;
      if (outer1_4) {
        const tmp3 = outer2_10(arg0);
        const iter = tmp3();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp6 = outer1_6;
            if (value.target === outer1_6.current) {
              let _window = window;
              let result = window.devicePixelRatio * value.target.clientWidth;
              let _window2 = window;
              let result1 = window.devicePixelRatio * value.target.clientHeight;
              let tmp14 = outer1_8;
              let tmp15 = result;
              let tmp16 = result1;
              if (null != outer1_8.current.onContainerResized) {
                let tmp7 = outer1_8;
                let current = outer1_8.current;
                let tmp8 = outer1_8;
                let onContainerResizedResult = current.onContainerResized(outer1_8.current.streamId, result, result1);
                let tmp10 = result;
                let tmp11 = result1;
              }
            }
            iter3 = tmp3();
            iter2 = iter3;
          } while (!iter3.done);
        }
      }
    });
    if (null != current) {
      const _document = document;
      const element = <video />;
      element.style.display = "block";
      element.style.width = "100%";
      element.style.height = "100%";
      element.autoplay = true;
      element.muted = true;
      const listener = element.addEventListener("pause", function handlePause() {
        let paused = outer1_8.current.paused;
        if (!paused) {
          const current = outer1_6.current;
          paused = null == current;
          const obj = current;
        }
        if (!paused) {
          obj.play();
        }
      });
      const listener1 = element.addEventListener("resize", function handleResize() {
        let height;
        let width;
        const current = outer1_6.current;
        let videoWidth;
        ({ width, height } = outer1_7.current);
        if (null != current) {
          videoWidth = current.videoWidth;
        }
        let num = 0;
        if (null != videoWidth) {
          num = videoWidth;
        }
        const current2 = outer1_6.current;
        let videoHeight;
        if (null != current2) {
          videoHeight = current2.videoHeight;
        }
        let num2 = 0;
        if (null != videoHeight) {
          num2 = videoHeight;
        }
        if (width !== num) {
          const obj = { width: num, height: num2 };
          if (null != outer1_8.current.onResize) {
            const current3 = outer1_8.current;
            current3.onResize(obj);
          }
          outer1_7.current = obj;
        }
      });
      const listener2 = element.addEventListener("canplaythrough", function handleReady(d) {
        logger.info("handleReady for " + outer1_8.current.streamId + ", have onReady callback = " + null != outer1_8.current.onReady);
        if (null != outer1_8.current.onReady) {
          const current = outer1_8.current;
          current.onReady();
        }
      });
      const _HermesInternal2 = HermesInternal;
      logger.info("create video element for " + ctor.current.streamId + ", readyState=" + element.readyState);
      if (element.readyState > 3) {
        const _HermesInternal = HermesInternal;
        logger.error("video element for " + ctor.current.streamId + " was ready before attached");
      }
      current.appendChild(element);
      resizeObserver.disconnect();
      resizeObserver.observe(element);
      closure_6.current = element;
    }
  }, items);
  const effect = ref.useEffect(() => {
    ctor.current.streamId = streamId;
    ctor.current.paused = flag;
    ctor.current.onReady = onReady;
    ctor.current.onResize = onResize;
  });
  const items1 = [flag, streamId];
  const effect1 = ref.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      if (flag) {
        if (null != current.srcObject) {
          current.srcObject = null;
          outer1_12(current);
        }
      } else {
        const _HermesInternal = HermesInternal;
        logger.info("attaching srcObject for " + current);
        let value = outer1_9.get(current);
        if (null == value) {
          const prototype = ctor.prototype;
          const tmp11 = new ctor(tmp2);
          const voiceEngine = streamId(onReady[5]).getVoiceEngine();
          const result = voiceEngine.addDirectVideoOutputSink(tmp2);
          const result1 = outer1_9.set(tmp2, tmp11);
          value = tmp11;
          const obj2 = streamId(onReady[5]);
        } else {
          value.addref();
        }
        current.srcObject = value.stream;
        return () => {
          outer2_12(current);
          current.srcObject = null;
        };
      }
    }
  }, items1);
  obj = { className: flag(onReady[6])("media-engine-video", streamId.className), ref };
  const merged1 = Object.assign(merged);
  return <div className={flag(onReady[6])("media-engine-video", arg0.className)} ref={ref} />;
};
