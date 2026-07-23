// Module ID: 10426
// Function ID: 80303
// Name: InappropriateConversationWarningBanner
// Dependencies: [31, 3767, 9101, 33, 10131, 566, 10132, 4471, 10144, 1934, 10133, 10411, 1212, 2]

// Module 10426 (InappropriateConversationWarningBanner)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
class InappropriateConversationWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    items = [, , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    effect = result.useEffect(() => {
      let obj = channelId(senderId[4]);
      obj = { channelId, warningId, senderId, warningType: outer1_5.INAPPROPRIATE_CONVERSATION_TIER_2, viewName: channelId(senderId[4]).ViewNameTypes.SAFETY_WARNING_BANNER };
      obj.trackNamedViewEvent(obj);
    }, items);
    items1 = [, , ];
    items1[0] = channelId;
    items1[1] = warningId;
    items1[2] = senderId;
    callback = result.useCallback((cta) => {
      let obj = channelId(senderId[4]);
      obj = { channelId, warningId, senderId, warningType: outer1_5.INAPPROPRIATE_CONVERSATION_TIER_2, cta };
      obj.trackCtaEvent(obj);
    }, items1);
    result = callback;
    obj = require("initialize");
    items2 = [];
    items2[0] = c4;
    items3 = [];
    items3[0] = senderId;
    items4 = [, ];
    items4[0] = channelId;
    items4[1] = warningId;
    stateFromStores = obj.useStateFromStores(items2, () => callback1.isBlocked(senderId), items3);
    callback1 = result.useCallback(() => {
      const items = [warningId];
      const result = channelId(senderId[6]).dismissChannelSafetyWarnings(channelId, items);
    }, items4);
    c4 = callback1;
    items5 = [, , , ];
    items5[0] = callback1;
    items5[1] = channelId;
    items5[2] = warningId;
    items5[3] = senderId;
    items6 = [, , , ];
    items6[0] = channelId;
    items6[1] = warningId;
    items6[2] = senderId;
    items6[3] = callback;
    callback2 = result.useCallback(() => {
      let obj = warningId(senderId[7]);
      obj = {
        importer() {
          return channelId(senderId[9])(senderId[8], senderId.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj["channelId"] = outer3_0;
              obj["warningId"] = outer3_1;
              obj["warningType"] = outer4_5.INAPPROPRIATE_CONVERSATION_TIER_2;
              obj["senderId"] = outer3_2;
              obj["analyticsBlockContext"] = channelId(senderId[4]).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM;
              obj["analyticsBlockAndReportContext"] = channelId(senderId[4]).CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM;
              obj["analyticsCancelContext"] = channelId(senderId[4]).CtaEventTypes.USER_BANNER_BLOCK_CANCEL;
              obj["onDismiss"] = outer3_4;
              return outer4_6(closure_0, obj);
            };
          });
        }
      };
      obj.openLazy(obj);
    }, items5);
    callback3 = result.useCallback(() => {
      const result = channelId(senderId[10]).openSafetyToolsActionSheet(channelId, senderId, warningId, outer1_5.INAPPROPRIATE_CONVERSATION_TIER_2);
      callback(channelId(senderId[4]).CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS);
    }, items6);
    tmp7 = jsx;
    obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 };
    tmp8 = require("SafetyWarningBanner");
    intl = require("getSystemLocale").intl;
    obj.header = intl.string(require("getSystemLocale").t.ZzlB5p);
    intl2 = require("getSystemLocale").intl;
    obj.description = intl2.string(require("getSystemLocale").t["D1aU+h"]);
    obj.onDismiss = callback1;
    obj1 = {};
    intl3 = require("getSystemLocale").intl;
    obj1.text = intl3.string(require("getSystemLocale").t.Qyu4UK);
    obj1.variant = "primary";
    obj1.onpress = callback3;
    items7 = [];
    items7[0] = obj1;
    if (stateFromStores) {
      items8 = [];
    } else {
      obj2 = {};
      tmp9 = channelId;
      tmp10 = senderId;
      intl4 = require("getSystemLocale").intl;
      obj2.text = intl4.string(require("getSystemLocale").t["7q0bNY"]);
      str = "secondary";
      obj2.variant = "secondary";
      obj2.onpress = callback2;
      items8 = [];
      items8[0] = obj2;
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items8, 1);
    obj.buttons = items7;
    return tmp7(tmp8, obj);
  }
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationWarningBanner.tsx");

export default InappropriateConversationWarningBanner;
export { InappropriateConversationWarningBanner };
