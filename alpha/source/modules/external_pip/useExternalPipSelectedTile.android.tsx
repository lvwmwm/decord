// Module ID: 18557
// Function ID: 18558
// Name: useExternalPipSelectedTile
// Dependencies: [19, 6758, 14987, 5700, 18344, 558, 576, 18342, 5810, 504, 2]

// Module 18557 (useExternalPipSelectedTile)
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 18344 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6758 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 14987 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5700 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arraySpreadResult, attachResult, importDefault, speakerId, updateResult;

const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useExternalPipSelectedTile(arg0, arg1, arg2) {
  let channelId;
  let closure_0;
  let closure_1;
  let selectedParticipantId;
  let str;
  _require = arg0;
  importDefault = arg1;
  let obj = require("react");
  const cResult = obj.c(7);
  str = "card";
  if (arg2 === VoicePanelPIPModes.IN_APP) {
    str = "pip";
  }
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp2;
      let tmp3;
      let tmp7;
      let tmp6;
      if (cResult[2] === str) {
        tmp2 = cResult[3];
        tmp3 = cResult[4];
      }
      let obj2 = react;
      const effect = react.useEffect(tmp2, tmp3);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return () => { /* body not rendered: F155233 */ };
          }
        }
        let items = [];
        cResult[5] = E;
        cResult[6] = items;
        tmp7 = items;
        tmp6 = E;
      } else {
        class E {
          constructor() {
            return () => { /* body not rendered: F155233 */ };
          }
        }
        tmp7 = cResult[6];
      }
      const effect1 = obj2.useEffect(tmp6, tmp7);
    }
  }
  class S {
    constructor() {
      update = function update() { /* body not rendered: F155231 */ };
      items = [, ];
      items[0] = closure_1_6;
      items[1] = closure_1_5;
      BatchedStoreListener = closure_0(pip[9]).BatchedStoreListener;
      arraySpreadResult = HermesBuiltin.arraySpread(items, closure_0(pip[7]).EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES, 2);
      batchedStoreListener = new BatchedStoreListener(items, update);
      closure_0 = batchedStoreListener;
      attachResult = batchedStoreListener.attach("useExternalPipSelectedTile");
      closure_1 = closure_1.subscribeFromItem(update);
      updateResult = update();
      return () => { /* body not rendered: F155232 */ };
    }
  }
  const items1 = [arg0, arg1, str];
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = str;
  cResult[3] = S;
  cResult[4] = items1;
  tmp3 = items1;
  tmp2 = S;
}) : (function useExternalPipSelectedTile(arg0, arg1, arg2) {
  let channelId;
  let selectedParticipantId;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let str = "card";
  if (arg2 === VoicePanelPIPModes.IN_APP) {
    str = "pip";
  }
  let items = [arg0, arg1, str];
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let surface;
    let targetDimensions;
    function update() {
      let height;
      let selectedParticipantStreamId;
      let width;
      if (channelId.getChannelId() === batchedStoreListener) {
        const selectedParticipantId1 = selectedParticipantId.getSelectedParticipantId(tmp);
        speakerId = speakerId.getSpeakerId(tmp);
        const obj = batchedStoreListener(str[7]);
        const externalPipSelectedParticipant = obj.getExternalPipSelectedParticipant(tmp, selectedParticipantId1, speakerId);
        ({ selectedParticipantId, selectedParticipantStreamId } = externalPipSelectedParticipant);
        if (null != selectedParticipantId) {
          targetDimensions = targetDimensions.getTargetDimensions(selectedParticipantId1);
          ({ width, height } = targetDimensions);
          const obj3 = { id: selectedParticipantId, streamId: selectedParticipantStreamId, pipDimensions: size, surface };
          const setSelectedTile = targetDimensions(str[8]).setSelectedTile;
          targetDimensions(str[8]);
          if (selectedParticipantStreamId == null) {
            selectedParticipantStreamId = null;
          }
          size = { width, height };
          setSelectedTile(obj3);
        } else {
          const obj2 = targetDimensions(str[8]);
          obj2.setSelectedTile(null);
        }
      }
    }
    const items = [channelId, speakerId];
    const BatchedStoreListener = batchedStoreListener(str[9]).BatchedStoreListener;
    HermesBuiltin.arraySpread(items, batchedStoreListener(str[7]).EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES, 2);
    batchedStoreListener = new BatchedStoreListener(items, update);
    batchedStoreListener.attach("useExternalPipSelectedTile");
    targetDimensions = targetDimensions.subscribeFromItem(update);
    update();
    return () => {
      batchedStoreListener.detach();
      targetDimensions();
    };
  }, items);
  const effect1 = react.useEffect(() => () => {
    const obj = closure_1_1(str[8]);
    return obj.setSelectedTile(null);
  }, []);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipSelectedTile.android.tsx");

export default tmp2;
