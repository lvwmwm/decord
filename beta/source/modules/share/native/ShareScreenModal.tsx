// Module ID: 13443
// Function ID: 13444
// Name: ShareScreenModal
// Dependencies: [5, 32, 19, 2045, 13396, 21, 3, 5039, 7810, 504, 4849, 1095, 13444, 2]
// Exports: default

// Module 13443 (ShareScreenModal)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import ChannelTypes from "ChannelTypes" /* 1095 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import ShareScreenConstants from "ShareScreenConstants" /* 13396 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

function onClose() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(SHARE_SCREEN_MODAL_KEY);
}
let react = react_mod;
const SHARE_SCREEN_MODAL_KEY = ShareScreenConstants.SHARE_SCREEN_MODAL_KEY;
const jsx = Fragment.jsx;
let closure_9 = new LoggerDefault("ShareScreenModal");
const tmp2 = new LoggerDefault("ShareScreenModal");
const result = size.fileFinishedImporting("modules/share/native/ShareScreenModal.tsx");

export default function ShareScreenModal(text) {
  let closure_5;
  text = text.text;
  require = text;
  const channelId = text.channelId;
  const shareId = text.shareId;
  const attachmentManifest = text.attachmentManifest;
  let first;
  react = undefined;
  let stateFromStores;
  let obj = react;
  let tmp = first(react.useState(null), 2);
  first = tmp[0];
  react = tmp[1];
  let items = [shareId, attachmentManifest];
  const effect = react.useEffect(() => {
    function fetchAttachments() {
      return obj(...arguments);
    }
    let obj = function _fetchAttachments() {
      let logger;
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        let v3;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let closure_1;
            let closure_0;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp;
                closure_0 = undefined;
                if (undefined !== closure_2) {
                  if (undefined !== c3) {
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: obj2.sharedAttachments(tmp17, tmp18), done: false };
                    obj2 = channelId(shareId[8]);
                    return obj5;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_1 = closure_2;
              logger.error("Error fetching attachments:", closure_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              c5(closure_0);
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp21) {
            closure_2 = tmp21;
            if (0 === c3) {
              c5 = 3;
              throw tmp21;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !fetchAttachments();
  }, items);
  let tmp4 = shareId;
  let obj2 = require("get initialized");
  const items1 = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp6 = first(react.useState(null), 2);
  let closure_7 = tmp6[1];
  const items2 = [channelId, stateFromStores];
  let first1 = tmp6[0];
  const effect1 = react.useEffect(() => {
    function fetchChannel() {
      return obj(...arguments);
    }
    let obj = function _fetchChannel() {
      let logger;
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            let closure_1;
            let closure_0;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp;
                closure_0 = undefined;
                if (null != closure_1) {
                  if (null == closure_1_6) {
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: obj2.fetchChannel(tmp17), done: false };
                    obj2 = channelId(shareId[10]);
                    return obj5;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_1 = closure_2;
              logger.error("Error fetching channel:", closure_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              closure_1_7(closure_0);
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp21) {
            closure_2 = tmp21;
            if (0 === c3) {
              c5 = 3;
              throw tmp21;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !fetchChannel();
  }, items2);
  let tmp9 = stateFromStores;
  if (stateFromStores == null) {
    tmp9 = first1;
  }
  first1 = tmp9;
  const items3 = [text, first, channelId, tmp9];
  const memo = obj.useMemo(() => {
    let items;
    const obj = { text: require, attachments: items };
    items = first;
    if (first == null) {
      items = [];
    }
    if (null != first1) {
      if (first1.type !== ChannelTypes.ChannelTypes.DM) {
        obj.targetChannelId = channelId;
      } else {
        let isArray = tmp && "recipients" in tmp;
        if (isArray) {
          const _Array = Array;
          isArray = Array.isArray(tmp.recipients);
        }
        if (isArray) {
          obj.targetUserId = first1.recipients[0];
        } else {
          const tmp4 = tmp && "recipient" in tmp && "id" in tmp.recipient;
          if (tmp4) {
            const recipient = tmp.recipient;
            let id;
            if (recipient != null) {
              id = recipient.id;
            }
            obj.targetUserId = id;
          }
        }
      }
    }
    return obj;
  }, items3);
  let obj3 = { sharedContent: memo, onClose };
  return first1(channelId(tmp4[12]), obj3);
};
