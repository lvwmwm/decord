// Module ID: 11138
// Function ID: 86619
// Name: useTextareaPlaceholderAndLabels
// Dependencies: [653, 4320, 1212, 2]
// Exports: default

// Module 11138 (useTextareaPlaceholderAndLabels)
import ME from "ME";

let closure_3;
let closure_4;
({ ChannelTypes: closure_3, ChannelTypesSets: closure_4 } = ME);
const result = require("getSystemLocale").fileFinishedImporting("modules/channel/useTextareaPlaceholderAndLabels.tsx");

export default function useTextareaPlaceholderAndLabels(isCreatingThread) {
  let channel;
  let isReadonly;
  ({ channel, isReadonly } = isCreatingThread);
  if (isReadonly === undefined) {
    isReadonly = false;
  }
  let flag = isCreatingThread.isCreatingThread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = importDefault(4320)(channel, true);
  const tmp2 = importDefault(4320)(channel, false);
  if (null != channel) {
    if (null != tmp) {
      if (flag) {
        let obj = {};
        const intl9 = require(1212) /* getSystemLocale */.intl;
        obj.placeholder = intl9.string(require(1212) /* getSystemLocale */.t.YzpScd);
        const intl10 = require(1212) /* getSystemLocale */.intl;
        obj.accessibilityLabel = intl10.string(require(1212) /* getSystemLocale */.t.YzpScd);
        let obj9 = obj;
      } else if (isReadonly) {
        obj = {};
        const intl7 = require(1212) /* getSystemLocale */.intl;
        obj.placeholder = intl7.string(require(1212) /* getSystemLocale */.t["RRvRp/"]);
        const intl8 = require(1212) /* getSystemLocale */.intl;
        obj.accessibilityLabel = intl8.string(require(1212) /* getSystemLocale */.t["RRvRp/"]);
        obj9 = obj;
      } else if (channel.isForumPost()) {
        const obj1 = {};
        const intl5 = require(1212) /* getSystemLocale */.intl;
        const obj2 = { channel: tmp };
        obj1.placeholder = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.Y6qWLc, obj2);
        const intl6 = require(1212) /* getSystemLocale */.intl;
        const obj3 = { channel: tmp2 };
        obj1.accessibilityLabel = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.KffKoR, obj3);
        obj9 = obj1;
      } else {
        const THREADS = constants2.THREADS;
        if (THREADS.has(channel.type)) {
          const obj4 = {};
          const intl3 = require(1212) /* getSystemLocale */.intl;
          const obj5 = { channel: tmp };
          obj4.placeholder = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["8lzR/R"], obj5);
          const intl4 = require(1212) /* getSystemLocale */.intl;
          const obj6 = { channel: tmp2 };
          obj4.accessibilityLabel = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.UZIMWS, obj6);
          obj9 = obj4;
        } else if (channel.type === constants.DM) {
          obj = {};
          const intl = require(1212) /* getSystemLocale */.intl;
          const obj7 = { channel: tmp };
          obj.placeholder = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["4c+CAx"], obj7);
          const intl2 = require(1212) /* getSystemLocale */.intl;
          const obj8 = { channel: tmp2 };
          obj.accessibilityLabel = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.fqOxbV, obj8);
          obj9 = obj;
        } else {
          obj9 = {};
          const intl13 = require(1212) /* getSystemLocale */.intl;
          const obj10 = { channel: tmp };
          obj9.placeholder = intl13.formatToPlainString(require(1212) /* getSystemLocale */.t["8lzR/R"], obj10);
          const intl14 = require(1212) /* getSystemLocale */.intl;
          const obj11 = { channel: tmp2 };
          obj9.accessibilityLabel = intl14.formatToPlainString(require(1212) /* getSystemLocale */.t.ih7ZSA, obj11);
        }
      }
    }
    return obj9;
  }
  const obj12 = {};
  const intl11 = require(1212) /* getSystemLocale */.intl;
  obj12.placeholder = intl11.string(require(1212) /* getSystemLocale */.t.MKDeyL);
  const intl12 = require(1212) /* getSystemLocale */.intl;
  obj12.accessibilityLabel = intl12.string(require(1212) /* getSystemLocale */.t.MKDeyL);
  obj9 = obj12;
};
