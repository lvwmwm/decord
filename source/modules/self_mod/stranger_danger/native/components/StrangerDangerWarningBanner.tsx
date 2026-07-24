// Module ID: 10448
// Function ID: 80425
// Name: StrangerDangerWarningBanner
// Dependencies: [31, 3767, 9139, 10166, 653, 10449, 33, 4130, 689, 566, 10163, 10164, 4337, 4098, 10450, 1934, 480, 10440, 1212, 10443, 4126, 10452, 2]

// Module 10448 (StrangerDangerWarningBanner)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import { AnalyticEvents } from "ME";
import { BLOCK_CONFIRMATION_ACTION_SHEET_KEY as closure_9 } from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
class StrangerDangerWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    result = c11();
    obj = require("initialize");
    items = [];
    items[0] = c4;
    items1 = [];
    items1[0] = senderId;
    items2 = [, , ];
    items2[0] = channelId;
    items2[1] = warningId;
    items2[2] = senderId;
    stateFromStores = obj.useStateFromStores(items, () => callback.isBlocked(senderId), items1);
    effect = result.useEffect(() => {
      let obj = channelId(senderId[10]);
      obj = { channelId, warningId, senderId, warningType: callback1.STRANGER_DANGER };
      obj.trackViewedEvent(outer1_8.SAFETY_WARNING_VIEWED, obj);
    }, items2);
    items3 = [, ];
    items3[0] = channelId;
    items3[1] = warningId;
    callback = result.useCallback(() => {
      const items = [warningId];
      const result = channelId(senderId[11]).dismissChannelSafetyWarnings(channelId, items);
      const obj = channelId(senderId[11]);
      warningId(senderId[12]).popWithKey(callback2);
    }, items3);
    c4 = callback;
    items4 = [, , , ];
    items4[0] = callback;
    items4[1] = channelId;
    items4[2] = warningId;
    items4[3] = senderId;
    callback1 = result.useCallback((arg0) => {
      let closure_0 = arg0;
      return () => {
        outer1_4();
        let obj = channelId(senderId[10]);
        obj = { channelId: closure_0, warningId: outer1_1, senderId: outer1_2, warningType: callback1.STRANGER_DANGER, cta: closure_0 };
        obj.trackCtaEvent(obj);
      };
    }, items4);
    f80430 = callback1;
    items5 = [, , , , ];
    items5[0] = callback1;
    items5[1] = callback;
    items5[2] = channelId;
    items5[3] = warningId;
    items5[4] = senderId;
    callback2 = result.useCallback((arg0) => {
      let closure_0 = arg0;
      return () => {
        let obj = warningId(senderId[13]);
        obj = {
          userId: outer1_2,
          channelId: closure_0,
          onBlock: outer1_5(closure_0),
          onSuccess() {
            return warningId(senderId[13]).hideActionSheet();
          },
          onIgnore() {
            outer2_4();
            let obj = channelId(senderId[10]);
            obj = { channelId: closure_0, warningId: outer2_1, senderId: outer2_2, warningType: callback1.STRANGER_DANGER, cta: channelId(senderId[10]).CtaEventTypes.USER_BANNER_IGNORE_CONFIRM };
            obj.trackCtaEvent(obj);
          },
          impressionName: channelId(senderId[16]).ImpressionNames.BLOCK_USER_CONFIRMATION
        };
        obj.openLazy(channelId(senderId[15])(senderId[14], senderId.paths), outer2_9, obj);
      };
    }, items5);
    defineProperty = callback2;
    tmp6 = jsx;
    obj = { channelId, warningId, senderId, warningType: f80430.STRANGER_DANGER };
    tmp7 = require("SafetyWarningBanner");
    intl = require("getSystemLocale").intl;
    obj.header = intl.string(require("getSystemLocale").t.iOkDpM);
    intl2 = require("getSystemLocale").intl;
    obj.description = intl2.string(require("getSystemLocale").t.ISUbcM);
    obj.onDismiss = callback;
    obj1 = {};
    intl3 = require("getSystemLocale").intl;
    obj1.text = intl3.string(require("getSystemLocale").t["Qk/c48"]);
    obj1.variant = "primary";
    obj1.onpress = function onpress() {
      let obj = warningId(senderId[12]);
      obj = { modalKey: callback2, headerStyle: moreTipsHeader.moreTipsHeader, channelId, warningId, senderId };
      const intl = channelId(senderId[18]).intl;
      obj.description = intl.string(channelId(senderId[18]).t.DJMZX6);
      const tmp = channelId(senderId[15])(senderId[19], senderId.paths);
      obj.safetyTips = outer1_7().map((children) => outer2_10(channelId(senderId[20]).Text, { variant: "text-sm/medium", children }, arg1));
      obj = { channelId, warningId, senderId };
      const arr = outer1_7();
      obj.onBlockPressed = callback2(channelId(senderId[10]).CtaEventTypes.USER_MODAL_BLOCK_CONFIRM);
      obj.actionItems = outer1_10(warningId(senderId[21]), obj);
      obj.pushLazy(tmp, obj, callback2);
      const tmp2 = warningId(senderId[21]);
      const obj4 = channelId(senderId[10]);
      obj4.trackCtaEvent({ channelId, warningId, senderId, warningType: callback1.STRANGER_DANGER, cta: channelId(senderId[10]).CtaEventTypes.OPEN_MORE_TIPS });
    };
    items6 = [];
    items6[0] = obj1;
    if (stateFromStores) {
      items7 = [];
    } else {
      obj2 = {};
      tmp8 = channelId;
      tmp9 = senderId;
      intl4 = require("getSystemLocale").intl;
      obj2.text = intl4.string(require("getSystemLocale").t.ie0QdN);
      str = "destructive";
      obj2.variant = "destructive";
      num = 10;
      obj2.onpress = callback2(require("trackViewedEvent").CtaEventTypes.USER_BANNER_BLOCK_CONFIRM);
      items7 = [];
      items7[0] = obj2;
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items7, 1);
    obj.buttons = items6;
    return tmp6(tmp7, obj);
  }
}
({ STRANGER_DANGER_MORE_TIPS_MODAL_KEY: closure_6, getStrangerDangerSafetyTips: closure_7 } = LOCATION_CONTEXT_MOBILE);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
_createForOfIteratorHelperLoose.moreTipsHeader = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx");

export default StrangerDangerWarningBanner;
export { StrangerDangerWarningBanner };
