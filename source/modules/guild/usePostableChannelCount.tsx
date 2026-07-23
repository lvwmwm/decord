// Module ID: 15428
// Function ID: 118623
// Name: useSendMessageChannelCount
// Dependencies: [1907, 3758, 653, 566, 483, 2]
// Exports: default

// Module 15428 (useSendMessageChannelCount)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_4 } from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default function useSendMessageChannelCount(arg0) {
  const _require = arg0;
  let items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let items = outer1_3.getChannels(closure_0)[outer1_4];
    if (null == items) {
      items = [];
    }
    return items;
  }, items1);
  let num = 0;
  if (0 !== stateFromStores.length) {
    num = stateFromStores.filter((channel) => outer1_5.can(outer1_1(outer1_2[4]).combine(outer1_6.SEND_MESSAGES, outer1_6.VIEW_CHANNEL), channel.channel)).length;
  }
  return num;
};
