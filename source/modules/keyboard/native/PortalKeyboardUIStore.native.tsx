// Module ID: 3995
// Function ID: 33140
// Name: closePortalKeyboard
// Dependencies: []
// Exports: closePortalKeyboardIfUnhandled, closePortalKeyboardRequest, handlePortalKeyboardOpen, isPortalKeyboardOpenForChannel, openPortalKeyboard, registerPortalKeyboardRenderer

// Module 3995 (closePortalKeyboard)
function closePortalKeyboard() {
  zustandStore.setState({ state: require(dependencyMap[1]).PortalKeyboardState.CLOSED, keyboard: null });
}
const zustandStore = require(dependencyMap[0]).createZustandStore(() => ({ keyboard: null, state: require(dependencyMap[1]).PortalKeyboardState.EMPTY, renderers: [] }));
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/keyboard/native/PortalKeyboardUIStore.native.tsx");

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
    let tmp6 = state === require(dependencyMap[1]).PortalKeyboardState.REQUEST_OPEN;
    if (!tmp6) {
      tmp6 = state === require(dependencyMap[1]).PortalKeyboardState.OPENING;
    }
    if (!tmp6) {
      tmp6 = state === require(dependencyMap[1]).PortalKeyboardState.OPEN;
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
  let tmp5 = state === require(dependencyMap[1]).PortalKeyboardState.REQUEST_OPEN;
  if (!tmp5) {
    tmp5 = state === require(dependencyMap[1]).PortalKeyboardState.OPENING;
  }
  if (!tmp5) {
    tmp5 = state === require(dependencyMap[1]).PortalKeyboardState.OPEN;
  }
  if (tmp3) {
    tmp3 = tmp5;
  }
  if (!tmp3) {
    let obj = {};
    obj = { id: require(dependencyMap[2]).v4(), type, channelId: closure_0, chatInputRef: closure_1 };
    obj.keyboard = obj;
    obj.state = require(dependencyMap[1]).PortalKeyboardState.REQUEST_OPEN;
    zustandStore.setState(obj);
    const obj3 = require(dependencyMap[2]);
  }
};
export const registerPortalKeyboardRenderer = function registerPortalKeyboardRenderer(id) {
  const require = id;
  zustandStore.setState((renderers) => {
    renderers = renderers.renderers;
    let tmp = renderers;
    if (!renderers.includes(renderers)) {
      const obj = {};
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(renderers.renderers, 0);
      items[arraySpreadResult] = renderers;
      const sum = arraySpreadResult + 1;
      obj.renderers = items;
      tmp = obj;
    }
    return tmp;
  });
  return () => {
    state.setState((renderers) => {
      renderers = renderers.renderers;
      return { renderers: renderers.filter((arg0) => arg0 !== closure_0) };
    });
  };
};
export const handlePortalKeyboardOpen = function handlePortalKeyboardOpen(closure_1) {
  const require = closure_1;
  zustandStore.setState((keyboard) => {
    let tmp = keyboard;
    if (null != keyboard.keyboard) {
      tmp = keyboard;
      if (keyboard.keyboard.handlerId !== keyboard) {
        let obj = {};
        obj = {};
        const merged = Object.assign(keyboard.keyboard);
        obj["handlerId"] = keyboard;
        obj.keyboard = obj;
        obj.state = keyboard(closure_1[1]).PortalKeyboardState.OPEN;
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
    tmp3 = tmp2 === require(dependencyMap[1]).PortalKeyboardState.CLOSED;
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
  let tmp2 = field !== require(dependencyMap[1]).PortalKeyboardState.CLOSED;
  if (tmp2) {
    tmp2 = field !== require(dependencyMap[1]).PortalKeyboardState.REQUEST_CLOSE;
  }
  if (tmp2) {
    const obj = { state: require(dependencyMap[1]).PortalKeyboardState.REQUEST_CLOSE };
    zustandStore.setState(obj);
  }
};
