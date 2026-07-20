// Module ID: 4223
// Function ID: 36997
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 4223 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    const voiceEngine = arg1(dependencyMap[5]).getVoiceEngine();
    const result = voiceEngine.removeDirectVideoOutputSink(arg0);
    map.delete(arg0);
    const obj2 = arg1(dependencyMap[5]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const logger = new arg1(dependencyMap[4]).Logger("DirectVideo");
logger.enableNativeLogger(true);
let closure_8 = () => {
  class RefCountedStream {
    constructor(arg0) {
      tmp = closure_3(this, RefCountedStream);
      this.refcount = 1;
      this.stream = window.createDiscordStream(arg0);
      return;
    }
  }
  const arg1 = RefCountedStream;
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
}();
const map = new Map();
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/DirectVideo.tsx");

export default function DirectVideo(streamId, onContainerResized) {
  streamId = streamId.streamId;
  onContainerResized = streamId;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  const onReady = streamId.onReady;
  const dependencyMap = onReady;
  const onResize = streamId.onResize;
  let closure_3 = onResize;
  let flag2 = streamId.reportContainerResized;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let closure_4 = flag2;
  let obj = { maxMediaWidth: null, maxMediaHeight: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION", hideActionSheet: "Missing required option for startPayment.", isDismissable: null, confirmText: "LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED", borderBottomWidth: "LocalPayment startPayment deferred payment failed." };
  Object.setPrototypeOf(null);
  const merged = Object.assign(streamId, obj);
  let React;
  let jsx;
  let closure_7;
  let closure_8;
  const ref = React.useRef(null);
  React = ref;
  jsx = React.useRef(null);
  closure_7 = React.useRef({ aze: false, azj: true });
  obj = { streamId, paused: flag, onReady, onResize, onContainerResized };
  closure_8 = React.useRef(obj);
  const items = [flag2];
  const layoutEffect = React.useLayoutEffect(() => {
    const current = ref.current;
    const resizeObserver = new globalThis.ResizeObserver((arg0) => {
      let iter3;
      if (closure_4) {
        const tmp3 = callback(arg0);
        const iter = tmp3();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp6 = closure_6;
            if (value.target === closure_6.current) {
              let _window = window;
              let result = window.devicePixelRatio * value.target.clientWidth;
              let _window2 = window;
              let result1 = window.devicePixelRatio * value.target.clientHeight;
              let tmp14 = closure_8;
              let tmp15 = result;
              let tmp16 = result1;
              if (null != closure_8.current.onContainerResized) {
                let tmp7 = closure_8;
                let current = closure_8.current;
                let tmp8 = closure_8;
                let onContainerResizedResult = current.onContainerResized(closure_8.current.streamId, result, result1);
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
        let paused = closure_8.current.paused;
        if (!paused) {
          const current = ref.current;
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
        const current = ref.current;
        let videoWidth;
        ({ width, height } = ref2.current);
        if (null != current) {
          videoWidth = current.videoWidth;
        }
        let num = 0;
        if (null != videoWidth) {
          num = videoWidth;
        }
        const current2 = ref.current;
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
          if (null != closure_8.current.onResize) {
            const current3 = closure_8.current;
            current3.onResize(obj);
          }
          ref2.current = obj;
        }
      });
      const listener2 = element.addEventListener("canplaythrough", function handleReady(d) {
        ref2.info("handleReady for " + closure_8.current.streamId + ", have onReady callback = " + null != closure_8.current.onReady);
        if (null != closure_8.current.onReady) {
          const current = closure_8.current;
          current.onReady();
        }
      });
      const _HermesInternal2 = HermesInternal;
      closure_7.info("create video element for " + ctor.current.streamId + ", readyState=" + element.readyState);
      if (element.readyState > 3) {
        const _HermesInternal = HermesInternal;
        closure_7.error("video element for " + ctor.current.streamId + " was ready before attached");
      }
      current.appendChild(element);
      resizeObserver.disconnect();
      resizeObserver.observe(element);
      closure_6.current = element;
    }
  }, items);
  const effect = React.useEffect(() => {
    ctor.current.streamId = streamId;
    ctor.current.paused = flag;
    ctor.current.onReady = onReady;
    ctor.current.onResize = onResize;
  });
  const items1 = [flag, streamId];
  const effect1 = React.useEffect(() => {
    const current = ref.current;
    const streamId = current;
    if (null != current) {
      if (flag) {
        if (null != current.srcObject) {
          current.srcObject = null;
          callback(streamId);
        }
      } else {
        const _HermesInternal = HermesInternal;
        closure_7.info("attaching srcObject for " + streamId);
        let value = store.get(streamId);
        if (null == value) {
          const prototype = ctor.prototype;
          const tmp11 = new ctor(tmp2);
          const voiceEngine = streamId(onReady[5]).getVoiceEngine();
          const result = voiceEngine.addDirectVideoOutputSink(tmp2);
          const result1 = store.set(tmp2, tmp11);
          value = tmp11;
          const obj2 = streamId(onReady[5]);
        } else {
          value.addref();
        }
        current.srcObject = value.stream;
        return () => {
          callback(current);
          current.srcObject = null;
        };
      }
    }
  }, items1);
  obj = { className: importDefault(dependencyMap[6])("media-engine-video", streamId.className), ref };
  const merged1 = Object.assign(merged);
  return <div {...obj} />;
};
