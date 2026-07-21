// Module ID: 11100
// Function ID: 86367
// Name: useTextareaPlaceholderAndLabels
// Dependencies: []
// Exports: default

// Module 11100 (useTextareaPlaceholderAndLabels)
const _module = require(dependencyMap[0]);
({ ChannelTypes: closure_3, ChannelTypesSets: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/channel/useTextareaPlaceholderAndLabels.tsx");

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
  const tmp = importDefault(dependencyMap[1])(channel, true);
  const tmp2 = importDefault(dependencyMap[1])(channel, false);
  if (null != channel) {
    if (null != tmp) {
      if (flag) {
        let obj = {};
        const intl9 = require(dependencyMap[2]).intl;
        obj.placeholder = intl9.string(require(dependencyMap[2]).t.YzpScd);
        const intl10 = require(dependencyMap[2]).intl;
        obj.accessibilityLabel = intl10.string(require(dependencyMap[2]).t.YzpScd);
        let obj9 = obj;
      } else if (isReadonly) {
        obj = {};
        const intl7 = require(dependencyMap[2]).intl;
        obj.placeholder = intl7.string(require(dependencyMap[2]).t.RRvRp/);
        const intl8 = require(dependencyMap[2]).intl;
        obj.accessibilityLabel = intl8.string(require(dependencyMap[2]).t.RRvRp/);
        obj9 = obj;
      } else if (channel.isForumPost()) {
        const obj1 = {};
        const intl5 = require(dependencyMap[2]).intl;
        const obj2 = { channel: tmp };
        obj1.placeholder = intl5.formatToPlainString(require(dependencyMap[2]).t.Y6qWLc, obj2);
        const intl6 = require(dependencyMap[2]).intl;
        const obj3 = { channel: tmp2 };
        obj1.accessibilityLabel = intl6.formatToPlainString(require(dependencyMap[2]).t.KffKoR, obj3);
        obj9 = obj1;
      } else {
        const THREADS = constants2.THREADS;
        if (THREADS.has(channel.type)) {
          const obj4 = {};
          const intl3 = require(dependencyMap[2]).intl;
          const obj5 = { channel: tmp };
          obj4.placeholder = intl3.formatToPlainString(require(dependencyMap[2]).t.8lzR/R, obj5);
          const intl4 = require(dependencyMap[2]).intl;
          const obj6 = { channel: tmp2 };
          obj4.accessibilityLabel = intl4.formatToPlainString(require(dependencyMap[2]).t.UZIMWS, obj6);
          obj9 = obj4;
        } else if (channel.type === constants.DM) {
          obj = {};
          const intl = require(dependencyMap[2]).intl;
          const obj7 = { channel: tmp };
          obj.placeholder = intl.formatToPlainString(require(dependencyMap[2]).t.4c+CAx, obj7);
          const intl2 = require(dependencyMap[2]).intl;
          const obj8 = { channel: tmp2 };
          obj.accessibilityLabel = intl2.formatToPlainString(require(dependencyMap[2]).t.fqOxbV, obj8);
          obj9 = obj;
        } else {
          obj9 = {};
          const intl13 = require(dependencyMap[2]).intl;
          const obj10 = { channel: tmp };
          obj9.placeholder = intl13.formatToPlainString(require(dependencyMap[2]).t.8lzR/R, obj10);
          const intl14 = require(dependencyMap[2]).intl;
          const obj11 = { channel: tmp2 };
          obj9.accessibilityLabel = intl14.formatToPlainString(require(dependencyMap[2]).t.ih7ZSA, obj11);
        }
      }
    }
    return obj9;
  }
  const obj12 = {};
  const intl11 = require(dependencyMap[2]).intl;
  obj12.placeholder = intl11.string(require(dependencyMap[2]).t.MKDeyL);
  const intl12 = require(dependencyMap[2]).intl;
  obj12.accessibilityLabel = intl12.string(require(dependencyMap[2]).t.MKDeyL);
  obj9 = obj12;
};
