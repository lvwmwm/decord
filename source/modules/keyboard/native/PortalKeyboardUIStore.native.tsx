// Module ID: 3997
// Function ID: 33146
// Name: closePortalKeyboard
// Dependencies: [3998, 4000, 491, 2]
// Exports: closePortalKeyboardIfUnhandled, closePortalKeyboardRequest, handlePortalKeyboardOpen, isPortalKeyboardOpenForChannel, openPortalKeyboard, registerPortalKeyboardRenderer

// Module 3997 (closePortalKeyboard)
function closePortalKeyboard() {
  zustandStore.setState({ state: require(4000) /* PortalKeyboardState */.PortalKeyboardState.CLOSED, keyboard: null });
}
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ keyboard: null, state: require(4000) /* PortalKeyboardState */.PortalKeyboardState.EMPTY, renderers: [] }));
const result = require("v1").fileFinishedImporting("modules/keyboard/native/PortalKeyboardUIStore.native.tsx");

export const PortalKeyboardUIStore = { getField: zustandStore.getField, useField: zustandStore.useField };
export const isPortalKeyboardOpenForChannel = function isPortalKeyboardOpenForChannel(arg0) {
  let keyboard;
  let state;
  state = zustandStore.getState();
  ({ state, keyboard } = state);
  let channelId;
  if (null != keyboard) {
    channelId = keyboard.channelId;
  }
  let tmp3 = channelId === arg0;
  if (tmp3) {
    let tmp6 = state === require(4000) /* PortalKeyboardState */.PortalKeyboardState.REQUEST_OPEN;
    if (!tmp6) {
      tmp6 = state === require(4000) /* PortalKeyboardState */.PortalKeyboardState.OPENING;
    }
    if (!tmp6) {
      tmp6 = state === require(4000) /* PortalKeyboardState */.PortalKeyboardState.OPEN;
    }
    tmp3 = tmp6;
  }
  return tmp3;
};
export const openPortalKeyboard = function openPortalKeyboard(type, closure_0, closure_1) {
  let keyboard;
  let state;
  state = zustandStore.getState();
  ({ state, keyboard } = state);
  type = undefined;
  if (null != keyboard) {
    type = keyboard.type;
  }
  let tmp3 = type === type;
  if (tmp3) {
    let channelId;
    if (null != keyboard) {
      channelId = keyboard.channelId;
    }
    tmp3 = channelId === closure_0;
  }
  let tmp5 = state === require(4000) /* PortalKeyboardState */.PortalKeyboardState.REQUEST_OPEN;
  if (!tmp5) {
    tmp5 = state === require(4000) /* PortalKeyboardState */.PortalKeyboardState.OPENING;
  }
  if (!tmp5) {
    tmp5 = state === require(4000) /* PortalKeyboardState */.PortalKeyboardState.OPEN;
  }
  if (tmp3) {
    tmp3 = tmp5;
  }
  if (!tmp3) {
    let obj = {};
    obj = { id: require(491) /* v1 */.v4(), type, channelId: closure_0, chatInputRef: closure_1 };
    obj.keyboard = obj;
    obj.state = require(4000) /* PortalKeyboardState */.PortalKeyboardState.REQUEST_OPEN;
    zustandStore.setState(obj);
    const obj3 = require(491) /* v1 */;
  }
};
export const registerPortalKeyboardRenderer = function registerPortalKeyboardRenderer(id) {
  let closure_0 = id;
  zustandStore.setState((renderers) => {
    renderers = renderers.renderers;
    let tmp = renderers;
    if (!renderers.includes(closure_0)) {
      const obj = {};
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(renderers.renderers, 0);
      items[arraySpreadResult] = closure_0;
      const sum = arraySpreadResult + 1;
      obj.renderers = items;
      tmp = obj;
    }
    return tmp;
  });
  return () => {
    outer1_2.setState((renderers) => {
      renderers = renderers.renderers;
      return { renderers: renderers.filter((arg0) => arg0 !== outer2_0) };
    });
  };
};
export const handlePortalKeyboardOpen = function handlePortalKeyboardOpen(outer1_1) {
  let closure_0 = outer1_1;
  zustandStore.setState((keyboard) => {
    let tmp = keyboard;
    if (null != keyboard.keyboard) {
      tmp = keyboard;
      if (keyboard.keyboard.handlerId !== outer1_1) {
        let obj = {};
        obj = {};
        const merged = Object.assign(keyboard.keyboard);
        obj["handlerId"] = outer1_1;
        obj.keyboard = obj;
        obj.state = outer1_1(outer1_1[1]).PortalKeyboardState.OPEN;
        tmp = obj;
      }
    }
    return tmp;
  });
};
export { closePortalKeyboard };
export const closePortalKeyboardIfUnhandled = function closePortalKeyboardIfUnhandled() {
  const state = zustandStore.getState();
  const keyboard = state.keyboard;
  let tmp3 = null == keyboard;
  if (tmp3) {
    tmp3 = tmp2 === require(4000) /* PortalKeyboardState */.PortalKeyboardState.CLOSED;
  }
  if (!tmp3) {
    let handlerId;
    if (null != keyboard) {
      handlerId = keyboard.handlerId;
    }
    if (null == handlerId) {
      closePortalKeyboard();
    }
  }
};
export const closePortalKeyboardRequest = function closePortalKeyboardRequest() {
  const field = zustandStore.getField("state");
  let tmp2 = field !== require(4000) /* PortalKeyboardState */.PortalKeyboardState.CLOSED;
  if (tmp2) {
    tmp2 = field !== require(4000) /* PortalKeyboardState */.PortalKeyboardState.REQUEST_CLOSE;
  }
  if (tmp2) {
    const obj = { state: require(4000) /* PortalKeyboardState */.PortalKeyboardState.REQUEST_CLOSE };
    zustandStore.setState(obj);
  }
};
