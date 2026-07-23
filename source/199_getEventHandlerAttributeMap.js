// Module ID: 199
// Function ID: 2840
// Name: getEventHandlerAttributeMap
// Dependencies: []

// Module 199 (getEventHandlerAttributeMap)
function getEventHandlerAttributeMap(arg0) {
  return arg0[closure_0];
}
function setEventHandlerAttributeMap(arg0, map) {
  arg0[closure_0] = map;
}
let closure_0 = Symbol("eventHandlerAttributeMap");
arg5.getEventHandlerAttribute = function getEventHandlerAttribute(arg0, error) {
  let value;
  const obj = getEventHandlerAttributeMap(arg0);
  if (null != obj) {
    value = obj.get(error);
  }
  let handleEvent = null;
  if (null != value) {
    handleEvent = value.handleEvent;
  }
  return handleEvent;
};
arg5.setEventHandlerAttribute = function setEventHandlerAttribute(arg0, error, handleEvent) {
  let obj = arg0;
  const tmp = getEventHandlerAttributeMap(arg0);
  let obj2 = tmp;
  if (null != tmp) {
    const value = obj2.get(error);
    if (value) {
      const removed = obj.removeEventListener(error, value);
      obj2.delete(error);
    }
  }
  if (null != handleEvent) {
    if ("function" === typeof handleEvent) {
      obj = { handleEvent };
      const listener = obj.addEventListener(error, obj);
      if (null == obj2) {
        const _Map = Map;
        const map = new Map();
        obj2 = map;
        setEventHandlerAttributeMap(obj, map);
      }
      const result = obj2.set(error, obj);
    }
  }
  while (true) {
    let tmp27 = obj2;
    let tmp28 = null != obj2;
    if (!tmp28) {
      break;
    } else {
      let num = 0;
      tmp28 = 0 === obj2.size;
      break;
    }
    if (tmp28) {
      let tmp29 = setEventHandlerAttributeMap;
      let tmp30 = setEventHandlerAttributeMap(arg0, null);
    }
  }
};
