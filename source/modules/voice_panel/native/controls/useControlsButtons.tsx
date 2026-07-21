// Module ID: 15734
// Function ID: 120345
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15734 (_createForOfIteratorHelperLoose)
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ CONTROLS_BUTTON_SIZE_LARGE: closure_5, CONTROLS_BUTTON_SIZE_NORMAL: closure_6 } = arg1(dependencyMap[2]));
const InputModes = arg1(dependencyMap[3]).InputModes;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_9 = {
  mic(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(arg1(dependencyMap[5]).MicButton, {}, arg0);
  },
  ptt(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(arg1(dependencyMap[5]).PTTButton, {}, arg0);
  },
  micConnected(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(arg1(dependencyMap[5]).MicButton, {}, arg0);
  },
  connect(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(dependencyMap[6]), {}, arg0);
  },
  chat(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(dependencyMap[7]), {}, arg0);
  },
  disconnectCancel(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(dependencyMap[8]), {}, arg0);
  },
  video(arg0, arg1, arg2, arg3) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(dependencyMap[9]), {}, arg0);
  },
  soundboard(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(dependencyMap[10]), {}, arg0);
  },
  screenshare(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(dependencyMap[11]), {}, arg0);
  },
  drawerToggle(arg0, arg1) {
    const merged = Object.assign(arg1);
    return jsx(importDefault(dependencyMap[12]), {}, arg0);
  }
};
let closure_10 = { code: "function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  const context = React.useContext(importDefault(dependencyMap[15]));
  const windowDimensions = context.windowDimensions;
  const arg1 = windowDimensions;
  const safeArea = context.safeArea;
  const importDefault = safeArea;
  const tmp2 = importDefault(dependencyMap[16])(context.channelId);
  const dependencyMap = tmp2;
  let obj = importDefault(dependencyMap[13]);
  const treatment = obj.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  const React = treatment;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => stateFromStores.getMode() === constants.PUSH_TO_TALK);
  closure_4 = stateFromStores;
  const obj2 = arg1(dependencyMap[17]);
  const fn = function n() {
    return windowDimensions(tmp2[19]).getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
  };
  obj = { getControlsDefaultWidth: arg1(dependencyMap[19]).getControlsDefaultWidth, windowDimensions, safeArea };
  fn.__closure = obj;
  fn.__workletHash = 16456936876254;
  fn.__initData = closure_10;
  const derivedValue = arg1(dependencyMap[18]).useDerivedValue(fn);
  const tmp5 = importDefault(dependencyMap[20])(derivedValue);
  const items1 = [tmp2, stateFromStores, tmp5, treatment];
  return React.useMemo(() => {
    let iter2;
    const windowDimensions = false;
    let closure_1 = 0;
    const items = [];
    const push = items.push;
    if (treatment) {
      let obj = { render: redux.video };
      push(obj);
      if (!tmp) {
        obj = { render: redux.micConnected };
        items.push(obj);
      }
      if (tmp2 === windowDimensions(tmp2[13]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
        const obj1 = { render: redux.screenshare };
        items.push(obj1);
      } else {
        const obj2 = { render: redux.chat };
        items.push(obj2);
      }
      if (tmp) {
        const obj3 = { "Bool(false)": "shelfItem", "Bool(false)": "NATIVE_REQUIRED_ASSETS_ICONS", render: redux.ptt };
        items.push(obj3);
      }
      if (tmp2 === windowDimensions(tmp2[13]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
        const obj4 = { render: redux.screenshare };
        items.push(obj4);
      } else {
        const obj5 = { render: redux.soundboard };
        items.push(obj5);
      }
      const obj6 = { "Bool(false)": "<string:3174913>", "Bool(false)": "isFetchingFriendsForGuild", render: redux.disconnectCancel };
      items.push(obj6);
    } else {
      obj = { render: redux.mic };
      push(obj);
      const obj7 = { "Bool(false)": "column", "Bool(false)": null, render: redux.connect };
      items.push(obj7);
      const obj8 = { render: redux.chat };
      items.push(obj8);
      if (obj12.isMetaQuest()) {
        const obj9 = { render: redux.drawerToggle };
        items.push(obj9);
      }
      const mapped = items.map((type) => {
        if ("label" === type.type) {
          let closure_0 = true;
        }
        let tmp = closure_6;
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
      if (!windowDimensions) {
        num4 = (tmp5 - closure_1 * tmp5 - (mapped.length - closure_1) * closure_6 - 32) / (mapped.length - 1);
      }
      const tmp38 = callback(mapped);
      let iter = tmp38();
      if (!iter.done) {
        do {
          let value = iter.value;
          let width = value.width;
          if (-1 === width) {
            let tmp39 = closure_6;
            let tmp40 = closure_5;
            let diff = closure_5 - (32 + (mapped.length - 1) * closure_6 + (mapped.length - 1) * num4);
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
