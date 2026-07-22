// Module ID: 12792
// Function ID: 97981
// Name: onClose
// Dependencies: []
// Exports: default

// Module 12792 (onClose)
function onClose() {
  importDefault(dependencyMap[7]).popWithKey(SHARE_SCREEN_MODAL_KEY);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const SHARE_SCREEN_MODAL_KEY = arg1(dependencyMap[4]).SHARE_SCREEN_MODAL_KEY;
const jsx = arg1(dependencyMap[5]).jsx;
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("ShareScreenModal");
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/share/native/ShareScreenModal.tsx");

export default function ShareScreenModal(text) {
  let tmp6;
  text = text.text;
  const arg1 = text;
  const channelId = text.channelId;
  const importDefault = channelId;
  const shareId = text.shareId;
  const dependencyMap = shareId;
  const attachmentManifest = text.attachmentManifest;
  let closure_3 = attachmentManifest;
  let jsx;
  const tmp = callback(React.useState(null), 2);
  const first = tmp[0];
  const callback = first;
  const React = tmp[1];
  const items = [shareId, attachmentManifest];
  const effect = React.useEffect(() => {
    function _fetchAttachments() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _fetchAttachments = obj;
      return obj(...arguments);
    }
    !function fetchAttachments() {
      return _fetchAttachments(...arguments);
    }();
  }, items);
  let obj = arg1(dependencyMap[9]);
  const items1 = [closure_6];
  const stateFromStores = obj.useStateFromStores(items1, () => stateFromStores.getChannel(channelId));
  closure_6 = stateFromStores;
  [tmp6, closure_7] = callback(React.useState(null), 2);
  const items2 = [channelId, stateFromStores];
  const effect1 = React.useEffect(() => {
    function _fetchChannel() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _fetchChannel = obj;
      return obj(...arguments);
    }
    !function fetchChannel() {
      return _fetchChannel(...arguments);
    }();
  }, items2);
  jsx = tmp6;
  const items3 = [text, first, channelId, tmp6];
  const memo = React.useMemo(() => {
    const obj = { text, attachments: null != first ? first : [] };
    if (null == tmp6) {
      return obj;
    } else if (tmp6.type !== text(shareId[11]).ChannelTypes.DM) {
      obj.targetChannelId = channelId;
      return obj;
    } else {
      let isArray = tmp6;
      if (tmp6) {
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
          const recipient = tmp6.recipient;
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
  return jsx(importDefault(dependencyMap[12]), obj);
};
