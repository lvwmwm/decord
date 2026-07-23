// Module ID: 12906
// Function ID: 100137
// Name: onClose
// Dependencies: [5, 57, 31, 1348, 12858, 33, 3, 4337, 8333, 566, 4140, 669, 12907, 2]
// Exports: default

// Module 12906 (onClose)
import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SHARE_SCREEN_MODAL_KEY } from "SHARE_SCREEN_MODAL_KEY";
import { jsx } from "jsxProd";
import importDefaultResult from "_isNativeReflectConstruct";

let require = arg1;
function onClose() {
  importDefault(4337).popWithKey(SHARE_SCREEN_MODAL_KEY);
}
importDefaultResult = new importDefaultResult("ShareScreenModal");
const result = require("result").fileFinishedImporting("modules/share/native/ShareScreenModal.tsx");

export default function ShareScreenModal(text) {
  let SHARE_SCREEN_MODAL_KEY;
  let tmp6;
  text = text.text;
  const require = text;
  const channelId = text.channelId;
  const shareId = text.shareId;
  const attachmentManifest = text.attachmentManifest;
  let jsx;
  const tmp = first(React.useState(null), 2);
  first = tmp[0];
  React = tmp[1];
  const items = [shareId, attachmentManifest];
  const effect = React.useEffect(() => {
    function _fetchAttachments() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = attachmentManifest(tmp);
      return obj(...arguments);
    }
    !(function fetchAttachments() {
      return _fetchAttachments(...arguments);
    })();
  }, items);
  let obj = require(shareId[9]);
  const items1 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items1, () => stateFromStores.getChannel(channelId));
  [tmp6, SHARE_SCREEN_MODAL_KEY] = first(React.useState(null), 2);
  const items2 = [channelId, stateFromStores];
  const effect1 = React.useEffect(() => {
    function _fetchChannel() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = attachmentManifest(tmp);
      return obj(...arguments);
    }
    !(function fetchChannel() {
      return _fetchChannel(...arguments);
    })();
  }, items2);
  jsx = tmp6;
  const items3 = [text, first, channelId, tmp6];
  const memo = React.useMemo(() => {
    const obj = { text: closure_0, attachments: null != first ? first : [] };
    if (null == _undefined) {
      return obj;
    } else if (_undefined.type !== text(shareId[11]).ChannelTypes.DM) {
      obj.targetChannelId = channelId;
      return obj;
    } else {
      let isArray = _undefined;
      if (_undefined) {
        isArray = "recipients" in tmp11;
      }
      if (isArray) {
        const _Array = Array;
        isArray = Array.isArray(tmp11.recipients);
      }
      if (isArray) {
        obj.targetUserId = tmp3.recipients[0];
      } else {
        let tmp4 = tmp3;
        if (tmp3) {
          tmp4 = "recipient" in tmp3;
        }
        if (tmp4) {
          tmp4 = "id" in tmp3.recipient;
        }
        if (tmp4) {
          const recipient = _undefined.recipient;
          let id;
          if (null != recipient) {
            id = recipient.id;
          }
          obj.targetUserId = id;
        }
      }
      return obj;
    }
  }, items3);
  obj = { sharedContent: memo, onClose };
  return jsx(channelId(shareId[12]), { sharedContent: memo, onClose });
};
