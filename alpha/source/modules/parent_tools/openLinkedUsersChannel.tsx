// Module ID: 10570
// Function ID: 10571
// Name: openLinkedUsersChannel
// Dependencies: [5, 4863, 5756, 7485, 2]
// Exports: default

// Module 10570 (openLinkedUsersChannel)
import transitionToChannel from "transitionToChannel" /* 5756 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7485 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import size from "module_2" /* 2 */;

let c4, c6, onBeforeTransition, recipientIds, set, sortedPrivateChannels;

let obj = function _openLinkedUsersChannel() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_0;
    let closure_1;
    function getGroupDMWithRecipients(items) {
      set = new Set(items);
      sortedPrivateChannels = sortedPrivateChannels.getSortedPrivateChannels();
      const found = sortedPrivateChannels.find((isGroupDM) => {
        let isGroupDMResult = isGroupDM.isGroupDM() && isGroupDM.recipients.length === set.size;
        if (isGroupDMResult) {
          const recipients = isGroupDM.recipients;
          isGroupDMResult = recipients.every((item) => set.has(item));
        }
        return isGroupDMResult;
      });
      let id;
      if (found != null) {
        id = found.id;
      }
      return id;
    }
    recipientIds = arg0;
    onBeforeTransition = value;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c5;
      try {
        c6 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let openPrivateChannelResult;
            recipientIds = closure_2;
            if (recipientIds.length > 1) {
              const tmp7 = getGroupDMWithRecipients(recipientIds);
              if (null != tmp7) {
                onBeforeTransition();
                openPrivateChannelResult = transitionToChannel;
                openPrivateChannelResult.transitionToChannel(tmp7, { navigationReplace: true });
                c6 = 3;
                const obj5 = { value: undefined, done: true };
                return obj5;
              }
            }
            c5 = 1;
            const obj6 = { recipientIds, onBeforeTransition };
            const obj2 = ChannelActionCreatorsDefault;
            openPrivateChannelResult = obj2.openPrivateChannel(obj6);
            c4 = 2;
            c6 = 1;
            const obj7 = { value: openPrivateChannelResult, done: false };
            return obj7;
          }
        } else {
          if (1 === tmp3) {
            c5 = 0;
            recipientIds();
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp14) {
        if (0 === c5) {
          c6 = 3;
          throw tmp14;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/parent_tools/openLinkedUsersChannel.tsx");

export default function openLinkedUsersChannel() {
  return obj(...arguments);
};
