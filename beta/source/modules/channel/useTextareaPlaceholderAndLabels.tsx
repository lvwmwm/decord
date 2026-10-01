// Module ID: 11466
// Function ID: 11467
// Name: useTextareaPlaceholderAndLabels
// Dependencies: [1074, 4989, 1115, 2]
// Exports: default

// Module 11466 (useTextareaPlaceholderAndLabels)
import intl15 from "intl" /* 1115 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ChannelTypes: c3, ChannelTypesSets: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/channel/useTextareaPlaceholderAndLabels.tsx");

export default function useTextareaPlaceholderAndLabels(isCreatingThread) {
  let channel;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isReadonly;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  ({ channel, isReadonly } = isCreatingThread);
  if (isReadonly === undefined) {
    isReadonly = false;
  }
  let flag = isCreatingThread.isCreatingThread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = useChannelNameDefault(channel, true);
  const tmp3 = useChannelNameDefault(channel, false);
  if (null != channel) {
    let obj12;
    if (null != tmp2) {
      if (flag) {
        const obj2 = { placeholder: intl9.string(intl15.t.YzpScd), accessibilityLabel: intl10.string(intl15.t.YzpScd) };
        intl9 = intl15.intl;
        intl10 = intl15.intl;
        obj12 = obj2;
      } else if (isReadonly) {
        const obj3 = { placeholder: intl7.string(intl15.t["RRvRp/"]), accessibilityLabel: intl8.string(intl15.t["RRvRp/"]) };
        intl7 = intl15.intl;
        intl8 = intl15.intl;
        obj12 = obj3;
      } else if (channel.isForumPost()) {
        const obj4 = { placeholder: intl5.formatToPlainString(intl15.t.Y6qWLc, obj5), accessibilityLabel: intl6.formatToPlainString(intl15.t.KffKoR, obj6) };
        intl5 = intl15.intl;
        obj5 = { channel: tmp2 };
        intl6 = intl15.intl;
        obj12 = obj4;
        obj6 = { channel: tmp3 };
      } else {
        const THREADS = constants2.THREADS;
        if (THREADS.has(channel.type)) {
          const obj7 = { placeholder: intl3.formatToPlainString(intl15.t["8lzR/R"], obj8), accessibilityLabel: intl4.formatToPlainString(intl15.t.UZIMWS, obj9) };
          intl3 = intl15.intl;
          obj8 = { channel: tmp2 };
          intl4 = intl15.intl;
          obj12 = obj7;
          obj9 = { channel: tmp3 };
        } else if (channel.type === constants.DM) {
          const obj = { placeholder: intl.formatToPlainString(intl15.t["4c+CAx"], obj10), accessibilityLabel: intl2.formatToPlainString(intl15.t.fqOxbV, obj11) };
          intl = intl15.intl;
          obj10 = { channel: tmp2 };
          intl2 = intl15.intl;
          obj12 = obj;
          obj11 = { channel: tmp3 };
        } else {
          obj12 = { placeholder: intl13.formatToPlainString(intl15.t["8lzR/R"], obj13), accessibilityLabel: intl14.formatToPlainString(intl15.t.ih7ZSA, obj14) };
          intl13 = intl15.intl;
          obj13 = { channel: tmp2 };
          intl14 = intl15.intl;
          obj14 = { channel: tmp3 };
        }
      }
    }
    return obj12;
  }
  const obj15 = { placeholder: intl11.string(intl15.t.MKDeyL), accessibilityLabel: intl12.string(intl15.t.MKDeyL) };
  intl11 = intl15.intl;
  intl12 = intl15.intl;
  obj12 = obj15;
};
