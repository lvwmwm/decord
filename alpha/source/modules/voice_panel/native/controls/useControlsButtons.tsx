// Module ID: 19924
// Function ID: 19925
// Name: useControlsButtons
// Dependencies: [19, 5092, 2130, 11917, 1072, 21, 19925, 19928, 19934, 19936, 19937, 19938, 19939, 19942, 19943, 19944, 19946, 19830, 1624, 11918, 19947, 504, 11885, 11890, 6876, 1652, 14564, 11186, 2]
// Exports: default

// Module 19924 (useControlsButtons)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 19830 */;
import VoicePanelMicButton from "VoicePanelMicButton" /* 19925 */;
import VoicePanelConnectButtonDefault from "VoicePanelConnectButton" /* 19928 */;
import VoicePanelChatButtonDefault from "VoicePanelChatButton" /* 19934 */;
import VoicePanelDisconnectCancelButtonDefault from "VoicePanelDisconnectCancelButton" /* 19936 */;
import VoicePanelVideoButtonDefault from "VoicePanelVideoButton" /* 19937 */;
import VoicePanelSoundboardButtonDefault from "VoicePanelSoundboardButton" /* 19938 */;
import VoicePanelScreenshareButtonDefault from "VoicePanelScreenshareButton" /* 19939 */;
import VoicePanelDrawerToggleButtonDefault from "VoicePanelDrawerToggleButton" /* 19942 */;
import VoicePanelRaiseHandButtonDefault from "VoicePanelRaiseHandButton" /* 19943 */;
import VoicePanelStageAudienceButtonDefault from "VoicePanelStageAudienceButton" /* 19944 */;
import VoicePanelLeaveStageButtonDefault from "VoicePanelLeaveStageButton" /* 19946 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11917 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_1, constants, importDefault;

let metroImportDefault;
let metroRequire;
function getButtons(arg0, stateFromStores, treatment, memo) {
  let arr2;
  let tmp3;
  if (arg0) {
    if (null != memo) {
      let tmp19;
      let isSpeaker = memo.isSpeaker;
      const items = [];
      if (isSpeaker) {
        if (memo.isStageVideoEnabled) {
          const obj2 = { type: "icon-normal", key: "connected-video", render: redux.video };
          items.push(obj2);
        }
        if (!stateFromStores) {
          const obj3 = { type: "icon-normal", key: "connected-mic", render: redux.micConnected };
          items.push(obj3);
        }
        const obj4 = { type: "icon-normal", key: "connected-leave-stage", render: redux.leaveStage };
        items.push(obj4);
        tmp19 = redux;
      } else {
        tmp19 = redux;
        const obj5 = { type: "icon-normal", key: "connected-raise-hand", render: redux.raiseHand };
        items.push(obj5);
        const obj6 = { type: "icon-normal", key: "connected-chat", render: redux.chat };
        items.push(obj6);
      }
      if (isSpeaker) {
        isSpeaker = stateFromStores;
      }
      if (isSpeaker) {
        const obj7 = { type: "icon-large", key: "connected-ptt", render: tmp19.ptt };
        items.push(obj7);
      }
      const obj8 = { type: "icon-normal", key: "connected-stage-audience", render: tmp19.stageAudience };
      items.push(obj8);
      const obj9 = { type: "icon-normal", key: "connected-disconnect", render: tmp19.disconnectCancel };
      items.push(obj9);
      tmp3 = tmp19;
      arr2 = items;
    }
    const obj20 = MetaQuestUtils;
    if (obj20.isMetaQuest()) {
      const obj10 = { type: "icon-normal", key: "drawer-toggle", render: tmp3.drawerToggle };
      arr2.push(obj10);
    }
    return arr2;
  }
  const items1 = [];
  const push = items1.push;
  if (arg0) {
    const obj11 = { type: "icon-normal", key: "connected-video", render: redux.video };
    push(obj11);
    if (!stateFromStores) {
      const obj12 = { type: "icon-normal", key: "connected-mic", render: redux.micConnected };
      items1.push(obj12);
    }
    const tmp11 = require;
    if (treatment === MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT) {
      const obj13 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
      items1.push(obj13);
    } else {
      const obj14 = { type: "icon-normal", key: "connected-chat", render: redux.chat };
      items1.push(obj14);
    }
    if (stateFromStores) {
      const obj15 = { type: "icon-large", key: "connected-ptt", render: redux.ptt };
      items1.push(obj15);
    }
    if (treatment === tmp11(19830).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD) {
      const obj16 = { type: "icon-normal", key: "connected-screenshare", render: redux.screenshare };
      items1.push(obj16);
    } else {
      const obj17 = { type: "icon-normal", key: "connected-soundboard", render: redux.soundboard };
      items1.push(obj17);
    }
    const obj18 = { type: "icon-normal", key: "connected-disconnect", render: redux.disconnectCancel };
    items1.push(obj18);
    tmp3 = tmp7;
    arr2 = items1;
  } else {
    tmp3 = redux;
    const obj = { type: "icon-normal", key: "disconnected-mute", render: redux.mic };
    push(obj);
    const obj19 = { type: "label", key: "disconnected-connect", render: redux.connect };
    items1.push(obj19);
    const obj21 = { type: "icon-normal", key: "disconnected-chat", render: redux.chat };
    items1.push(obj21);
    arr2 = items1;
  }
}
({ CONTROLS_BUTTON_SIZE_LARGE: metroRequire, CONTROLS_BUTTON_SIZE_NORMAL: metroImportDefault } = VoicePanelControlsConstants);
const InputModes = Constants.InputModes;
const jsx = Fragment.jsx;
const redux = {
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
  },
  raiseHand(arg0, arg1) {
    VoicePanelRaiseHandButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  },
  stageAudience(arg0, arg1) {
    VoicePanelStageAudienceButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  },
  leaveStage(arg0, arg1) {
    VoicePanelLeaveStageButtonDefault;
    const merged = Object.assign(arg1);
    return <tmp key={arg0} />;
  }
};
let closure_12 = { code: "(function useControlsButtonsTsx1(){let[getControlsDefaultWidth,windowDimensions,safeArea]=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useControlsButtons.tsx");

export default function useControlsButtons() {
  let isSpeaker;
  let isStageUnifiedCall;
  let safeArea;
  let stateFromStores;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let treatment;
  let windowDimensions;
  let obj = stateFromStores;
  const tmp2 = treatment;
  let tmp = importDefault;
  const context = stateFromStores.useContext(require("VoicePanelStateContext"));
  const channelId = context.channelId;
  ({ windowDimensions, safeArea } = context);
  const tmp4 = require("useShowConnectedControls")(channelId);
  importDefault = tmp4;
  const obj2 = require("MobileGoLiveEntrypointExperiment");
  treatment = obj2.useConfig({ location: "VoicePanelControlButtons" }).treatment;
  const items = [isSpeaker];
  const obj3 = channelId(treatment[21]);
  stateFromStores = obj3.useStateFromStores(items, () => isSpeaker.getMode() === constants.PUSH_TO_TALK);
  const items1 = [isStageUnifiedCall];
  const items2 = [channelId];
  const obj4 = channelId(treatment[21]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  const obj5 = channelId(treatment[22]);
  isStageUnifiedCall = obj5.useIsStageUnifiedCall(stateFromStores1, "VoicePanelControlButtons");
  let tmp9 = require("useCanSpeakInChannel")(channelId);
  isSpeaker = tmp9;
  let tmp10 = channelId(treatment[24]);
  let guild_id;
  const useIsStageVideoEnabled = tmp10.useIsStageVideoEnabled;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const isStageVideoEnabled = useIsStageVideoEnabled(guild_id);
  const items3 = [isStageUnifiedCall, tmp9, isStageVideoEnabled];
  const memo = obj.useMemo(() => {
    let tmp = null;
    if (isStageUnifiedCall) {
      tmp = { isSpeaker, isStageVideoEnabled };
      const obj = { isSpeaker, isStageVideoEnabled };
    }
    return tmp;
  }, items3);
  const items4 = [closure_12, , , ];
  const useDerivedValue = tmp5(tmp2[25]).useDerivedValue;
  channelId(tmp2[25]);
  items4[1] = channelId(tmp2[26]).getControlsDefaultWidth;
  items4[2] = windowDimensions;
  items4[3] = safeArea;
  let c0;
  let c1;
  let c2;
  [tmp15, tmp16, tmp17, tmp18] = items4;
  function useControlsButtonsTsx1() {
    const width = _undefined2.get().width;
    return _undefined(width, _undefined3.get().left, _undefined3.get().right);
  }
  const items5 = [tmp16, tmp17, tmp18];
  useControlsButtonsTsx1.__closure = items5;
  useControlsButtonsTsx1.__workletHash = 5736026634823;
  useControlsButtonsTsx1.__initData = tmp15;
  const derivedValue = useDerivedValue(useControlsButtonsTsx1);
  const tmp20 = tmp(tmp2[27])(derivedValue);
  constants = tmp20;
  const items6 = [tmp4, stateFromStores, tmp20, treatment, memo];
  return obj.useMemo(() => {
    let c0 = false;
    closure_1 = 0;
    const arr = getButtons(closure_1, stateFromStores, treatment, memo);
    const mapped = arr.map((type) => {
      let num2;
      if ("label" === type.type) {
        c0 = true;
      }
      let tmp = memo;
      if ("icon-large" === type.type) {
        closure_1 = closure_1 + 1;
        tmp = isStageVideoEnabled;
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
      let tmp = constants;
      let num2 = 1;
      num = (constants - closure_1 * metroRequire - (mapped.length - closure_1) * metroImportDefault - 32) / (mapped.length - 1);
    }
    let num4 = 16;
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let width = nextResult.width;
      let tmp8 = width;
      if (-1 === width) {
        let diff = constants - (32 + (mapped.length - 1) * metroImportDefault + (mapped.length - 1) * num);
        tmp8 = diff;
        tmp7.width = diff;
      }
      tmp7.x = num4 - constants / 2 + tmp8 / 2;
      num4 = num4 + (tmp8 + num);
      continue;
    }
    return mapped;
  }, items6);
};
