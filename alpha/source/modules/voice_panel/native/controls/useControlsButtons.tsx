// Module ID: 19584
// Function ID: 19585
// Name: useControlsButtons
// Dependencies: [19, 2135, 11409, 1072, 21, 19585, 19588, 19594, 19596, 19598, 19600, 19602, 19607, 19491, 1624, 11410, 19608, 504, 1652, 14046, 8982, 2]
// Exports: default

// Module 19584 (useControlsButtons)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import VoicePanelMicButton from "VoicePanelMicButton" /* 19585 */;
import VoicePanelConnectButtonDefault from "VoicePanelConnectButton" /* 19588 */;
import VoicePanelChatButtonDefault from "VoicePanelChatButton" /* 19594 */;
import VoicePanelDisconnectCancelButtonDefault from "VoicePanelDisconnectCancelButton" /* 19596 */;
import VoicePanelVideoButtonDefault from "VoicePanelVideoButton" /* 19598 */;
import VoicePanelSoundboardButtonDefault from "VoicePanelSoundboardButton" /* 19600 */;
import VoicePanelScreenshareButtonDefault from "VoicePanelScreenshareButton" /* 19602 */;
import VoicePanelDrawerToggleButtonDefault from "VoicePanelDrawerToggleButton" /* 19607 */;
import react_mod from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11409 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let react = react_mod;
({ CONTROLS_BUTTON_SIZE_LARGE: hasOwnProperty, CONTROLS_BUTTON_SIZE_NORMAL: metroRequire } = VoicePanelControlsConstants);
const InputModes = Constants.InputModes;
const jsx = Fragment.jsx;
let closure_9 = {
  mic(arg0, arg1) {
    const MicButton = VoicePanelMicButton.MicButton;
    const merged = Object.assign(arg1);
    return <MicButton key={arg0} />;
  },
  ptt(arg0, arg1) {
    const PTTButton = VoicePanelMicButton.PTTButton;
    const merged = Object.assign(arg1);
    return <PTTButton key={arg0} />;
  },
  micConnected(arg0, arg1) {
    const MicButton = VoicePanelMicButton.MicButton;
    const merged = Object.assign(arg1);
    return <MicButton key={arg0} />;
  },
  connect(arg0, arg1) {
    VoicePanelConnectButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  },
  chat(arg0, arg1) {
    VoicePanelChatButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  },
  disconnectCancel(arg0, arg1) {
    VoicePanelDisconnectCancelButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  },
  video(arg0, arg1) {
    VoicePanelVideoButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  },
  soundboard(arg0, arg1) {
    VoicePanelSoundboardButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  },
  screenshare(arg0, arg1) {
    VoicePanelScreenshareButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  },
  drawerToggle(arg0, arg1) {
    VoicePanelDrawerToggleButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  }
};
let closure_10 = { code: "(function useControlsButtonsTsx1(){let[getControlsDefaultWidth,windowDimensions,safeArea]=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  let channelId;
  let closure_0;
  let closure_3;
  let mode;
  let safeArea;
  let stateFromStores;
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp9;
  let treatment;
  let windowDimensions;
  let obj = react;
  let tmp = treatment;
  let tmp2 = stateFromStores;
  const context = react.useContext(treatment(stateFromStores[15]));
  ({ channelId, windowDimensions, safeArea } = context);
  const tmp4 = treatment(stateFromStores[16])(channelId);
  _require = tmp4;
  let obj2 = treatment(stateFromStores[13]);
  treatment = obj2.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  let obj3 = require("get initialized");
  let items = [MediaEngineStore];
  stateFromStores = obj3.useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK);
  const items1 = [closure_10, , , ];
  const useDerivedValue = require("module_1652").useDerivedValue;
  const tmp6 = require("module_1652");
  items1[1] = require("VoicePanelControlsUtils").getControlsDefaultWidth;
  items1[2] = windowDimensions;
  items1[3] = safeArea;
  let c0;
  let c1;
  let c2;
  [tmp7, tmp8, tmp9, tmp10] = items1;
  function useControlsButtonsTsx1() {
    const width = _undefined2.get().width;
    return _undefined(width, _undefined3.get().left, _undefined3.get().right);
  }
  const items2 = [tmp8, tmp9, tmp10];
  useControlsButtonsTsx1.__closure = items2;
  useControlsButtonsTsx1.__workletHash = 5736026634823;
  useControlsButtonsTsx1.__initData = tmp7;
  const derivedValue = useDerivedValue(useControlsButtonsTsx1);
  let tmp12 = tmp(tmp2[20])(derivedValue);
  react = tmp12;
  const items3 = [tmp4, stateFromStores, tmp12, treatment];
  return obj.useMemo(() => {
    let redux;
    function getButtons(arg0, stateFromStores, treatment) {
      let tmp2;
      const items = [];
      const push = items.push;
      const tmp = arg0;
      if (tmp) {
        const obj2 = { type: "icon-normal", key: "connected-video", render: redux.video };
        push(obj2);
        if (!stateFromStores) {
          const obj3 = { type: "icon-normal", key: "connected-mic", render: redux.micConnected };
          items.push(obj3);
        }
        const tmp11 = closure_1_0;
        const tmp12 = stateFromStores;
        if (treatment === closure_1_0(stateFromStores[13]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
          const obj4 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
          items.push(obj4);
        } else {
          const obj5 = { type: "icon-normal", key: "connected-chat", render: redux.chat };
          items.push(obj5);
        }
        if (stateFromStores) {
          const obj6 = { type: "icon-large", key: "connected-ptt", render: redux.ptt };
          items.push(obj6);
        }
        if (treatment === tmp11(tmp12[13]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
          const obj7 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
          items.push(obj7);
        } else {
          const obj8 = { type: "icon-normal", key: "connected-soundboard", render: redux.soundboard };
          items.push(obj8);
        }
        const obj9 = { type: "icon-normal", key: "connected-disconnect", render: redux.disconnectCancel };
        items.push(obj9);
        tmp2 = tmp7;
      } else {
        tmp2 = redux;
        const obj = { type: "icon-normal", key: "disconnected-mute", render: redux.mic };
        push(obj);
        const obj10 = { type: "label", key: "disconnected-connect", render: redux.connect };
        items.push(obj10);
        const obj11 = { type: "icon-normal", key: "disconnected-chat", render: redux.chat };
        items.push(obj11);
      }
      const obj12 = closure_1_0(stateFromStores[14]);
      if (obj12.isMetaQuest()) {
        const obj13 = { type: "icon-normal", key: "drawer-toggle", render: tmp2.drawerToggle };
        items.push(obj13);
      }
      return items;
    }
    let c0 = false;
    let closure_1 = 0;
    const arr = getButtons(closure_0, stateFromStores, treatment);
    const mapped = arr.map((type) => {
      let num2;
      if ("label" === type.type) {
        c0 = true;
      }
      let tmp = closure_2_6;
      if ("icon-large" === type.type) {
        closure_1 = closure_1 + 1;
        tmp = closure_2_5;
      }
      const obj = { height: tmp, width: num2, x: 0, y: 0 };
      const merged = Object.assign(type);
      num2 = -1;
      if ("label" !== type.type) {
        num2 = tmp;
      }
      return obj;
    });
    let num = 16;
    if (!c0) {
      let tmp = closure_3;
      let tmp2 = closure_1;
      let num2 = 1;
      num = (closure_3 - closure_1 * hasOwnProperty - (mapped.length - closure_1) * metroRequire - 32) / (mapped.length - 1);
    }
    let num4 = 16;
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let width = nextResult.width;
      let tmp8 = width;
      if (-1 === width) {
        let diff = closure_3 - (32 + (mapped.length - 1) * metroRequire + (mapped.length - 1) * num);
        tmp8 = diff;
        let tmp12 = nextResult;
        tmp7.width = diff;
      }
      tmp7.x = num4 - closure_3 / 2 + tmp8 / 2;
      num4 = num4 + (tmp8 + num);
      continue;
    }
    return mapped;
  }, items3);
};
