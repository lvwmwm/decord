// Module ID: 15906
// Function ID: 122883
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4177, 10045, 653, 33, 15907, 15910, 15916, 15918, 15920, 15922, 15924, 15927, 15830, 1553, 10046, 15766, 566, 3991, 11407, 8321, 2]
// Exports: default

// Module 15906 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VoicePanelControlsModes from "VoicePanelControlsModes";
import { InputModes } from "ME";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
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
({ CONTROLS_BUTTON_SIZE_LARGE: closure_5, CONTROLS_BUTTON_SIZE_NORMAL: closure_6 } = VoicePanelControlsModes);
let closure_9 = {
  mic(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(require(15907) /* useMuteHandlers */.MicButton, {}, arg0);
  },
  ptt(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(require(15907) /* useMuteHandlers */.PTTButton, {}, arg0);
  },
  micConnected(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(require(15907) /* useMuteHandlers */.MicButton, {}, arg0);
  },
  connect(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(15910), {}, arg0);
  },
  chat(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(15916), {}, arg0);
  },
  disconnectCancel(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(15918), {}, arg0);
  },
  video(arg0, arg1, arg2, arg3) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(15920), {}, arg0);
  },
  soundboard(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(15922), {}, arg0);
  },
  screenshare(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(15924), {}, arg0);
  },
  drawerToggle(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(15927), {}, arg0);
  }
};
let closure_10 = { code: "function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}" };
const result = require("VoicePanelControlsModes").fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  const context = treatment.useContext(safeArea(10046));
  const windowDimensions = context.windowDimensions;
  safeArea = context.safeArea;
  const tmp2 = safeArea(15766)(context.channelId);
  const dependencyMap = tmp2;
  let obj = safeArea(15830);
  treatment = obj.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  let items = [stateFromStores];
  stateFromStores = windowDimensions(566).useStateFromStores(items, () => stateFromStores.getMode() === outer1_7.PUSH_TO_TALK);
  let obj2 = windowDimensions(566);
  const fn = function n() {
    return windowDimensions(tmp2[19]).getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
  };
  obj = { getControlsDefaultWidth: windowDimensions(11407).getControlsDefaultWidth, windowDimensions, safeArea };
  fn.__closure = obj;
  fn.__workletHash = 16456936876254;
  fn.__initData = closure_10;
  const derivedValue = windowDimensions(3991).useDerivedValue(fn);
  const tmp5 = safeArea(8321)(derivedValue);
  let closure_5 = tmp5;
  const items1 = [tmp2, stateFromStores, tmp5, treatment];
  return treatment.useMemo(() => {
    let iter2;
    let c0 = false;
    let c1 = 0;
    const items = [];
    const push = items.push;
    if (treatment) {
      let obj = { type: "icon-normal", key: "connected-video", render: outer1_9.video };
      push(obj);
      if (!tmp) {
        obj = { type: "icon-normal", key: "connected-mic", render: outer1_9.micConnected };
        items.push(obj);
      }
      if (tmp2 === windowDimensions(tmp2[13]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
        const obj1 = { type: "icon-normal", key: "connected-screenshare", render: outer1_9.screenshare };
        items.push(obj1);
      } else {
        const obj2 = { type: "icon-normal", key: "connected-chat", render: outer1_9.chat };
        items.push(obj2);
      }
      if (tmp) {
        const obj3 = { type: "icon-large", key: "connected-ptt", render: outer1_9.ptt };
        items.push(obj3);
      }
      if (tmp2 === windowDimensions(tmp2[13]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
        const obj4 = { type: "icon-normal", key: "connected-screenshare", render: outer1_9.screenshare };
        items.push(obj4);
      } else {
        const obj5 = { type: "icon-normal", key: "connected-soundboard", render: outer1_9.soundboard };
        items.push(obj5);
      }
      const obj6 = { type: "icon-normal", key: "connected-disconnect", render: outer1_9.disconnectCancel };
      items.push(obj6);
    } else {
      obj = { type: "icon-normal", key: "disconnected-mute", render: outer1_9.mic };
      push(obj);
      const obj7 = { type: "label", key: "disconnected-connect", render: outer1_9.connect };
      items.push(obj7);
      const obj8 = { type: "icon-normal", key: "disconnected-chat", render: outer1_9.chat };
      items.push(obj8);
      if (obj12.isMetaQuest()) {
        const obj9 = { type: "icon-normal", key: "drawer-toggle", render: outer1_9.drawerToggle };
        items.push(obj9);
      }
      const mapped = items.map((type) => {
        if ("label" === type.type) {
          let c0 = true;
        }
        let tmp = outer2_6;
        if ("icon-large" === type.type) {
          closure_1 = closure_1 + 1;
          tmp = closure_5;
        }
        const obj = {};
        const merged = Object.assign(type);
        obj["height"] = tmp;
        let num2 = -1;
        if ("label" !== type.type) {
          num2 = tmp;
        }
        obj["width"] = num2;
        obj["x"] = 0;
        obj["y"] = 0;
        return obj;
      });
      let num3 = 16;
      let num4 = 16;
      if (!c0) {
        num4 = (closure_5 - c1 * closure_5 - (mapped.length - c1) * outer1_6 - 32) / (mapped.length - 1);
      }
      const tmp38 = outer1_11(mapped);
      let iter = tmp38();
      if (!iter.done) {
        do {
          let value = iter.value;
          let width = value.width;
          if (-1 === width) {
            let tmp39 = outer1_6;
            let tmp40 = closure_5;
            let diff = closure_5 - (32 + (mapped.length - 1) * outer1_6 + (mapped.length - 1) * num4);
            value.width = diff;
            width = diff;
          }
          let tmp42 = closure_5;
          value.x = num3 - closure_5 / 2 + width / 2;
          num3 = num3 + (width + num4);
          iter2 = tmp38();
          iter = iter2;
        } while (!iter2.done);
      }
      return mapped;
    }
  }, items1);
};
