// Module ID: 10409
// Function ID: 80189
// Name: LikelyAtoWarningBanner
// Dependencies: [31, 9101, 10410, 653, 662, 33, 4130, 689, 10131, 10132, 4337, 10282, 7488, 3827, 10411, 1212, 10414, 1934, 4126, 10418, 5459, 2]

// Module 10409 (LikelyAtoWarningBanner)
import result from "result";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";
import LIKELY_ATO_MORE_TIPS_MODAL_KEY from "LIKELY_ATO_MORE_TIPS_MODAL_KEY";
import { AnalyticEvents } from "ME";
import { MuteUntilSeconds } from "MAX_FAVORITES";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class LikelyAtoWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    handleLearnMore = function handleLearnMore() {
      let obj = channelId(senderId[8]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta: channelId(senderId[8]).CtaEventTypes.USER_MODAL_LEARN_MORE };
      obj.trackCtaEvent(obj);
      warningId(senderId[13]).openURL(outer1_7);
    };
    handleLearnMore = c13();
    items = [, , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    effect = handleLearnMore.useEffect(() => {
      let obj = channelId(senderId[8]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO };
      obj.trackViewedEvent(outer1_8.SAFETY_WARNING_VIEWED, obj);
    }, items);
    items1 = [, ];
    items1[0] = channelId;
    items1[1] = warningId;
    callback = handleLearnMore.useCallback(() => {
      const items = [warningId];
      const result = channelId(senderId[9]).dismissChannelSafetyWarnings(channelId, items);
      const obj = channelId(senderId[9]);
      warningId(senderId[10]).popWithKey(handleLearnMore);
    }, items1);
    SafetyWarningTypes = callback;
    items2 = [, , , ];
    items2[0] = channelId;
    items2[1] = senderId;
    items2[2] = warningId;
    items2[3] = callback;
    f80194 = handleLearnMore.useCallback((cta) => {
      let obj = channelId(senderId[11]);
      obj = { channelId, guildId: null, muteDurationSeconds: outer1_9.ALWAYS };
      const result = obj.handleMuteSettingPress(obj);
      warningId(senderId[12]).showMuteSuccessToast(senderId, channelId);
      const obj3 = warningId(senderId[12]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta };
      channelId(senderId[8]).trackCtaEvent(obj);
      callback();
    }, items2);
    obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO };
    tmp3 = require("SafetyWarningBanner");
    intl = require("getSystemLocale").intl;
    obj.header = intl.string(require("getSystemLocale").t.R8UsiI);
    intl2 = require("getSystemLocale").intl;
    obj.description = intl2.string(require("getSystemLocale").t.lI8nQl);
    obj.onDismiss = callback;
    obj = {};
    intl3 = require("getSystemLocale").intl;
    obj.text = intl3.string(require("getSystemLocale").t.tC1pvL);
    obj.variant = "primary";
    obj.onpress = function onpress() {
      let obj = warningId(senderId[10]);
      obj = { modalKey: handleLearnMore, headerStyle: moreTipsHeader.moreTipsHeader, channelId, warningId, senderId };
      const intl = channelId(senderId[15]).intl;
      obj.description = intl.string(channelId(senderId[15]).t["/uid3p"]);
      const tmp = channelId(senderId[17])(senderId[16], senderId.paths);
      obj.safetyTips = callback().map((title) => {
        let obj = {};
        obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title.title };
        const items = [outer2_10(channelId(senderId[18]).Text, obj, arg1), ];
        obj = { variant: "text-xs/medium", color: "text-subtle", children: title.description };
        items[1] = outer2_10(channelId(senderId[18]).Text, obj, arg1);
        obj.children = items;
        return outer2_12(outer2_11, obj);
      });
      obj = {
        senderId,
        handleMutePressed() {
          return outer1_5(channelId(senderId[8]).CtaEventTypes.USER_MODAL_MUTE);
        }
      };
      obj.actionItems = outer1_10(warningId(senderId[19]), obj);
      const obj1 = { variant: "text-sm/normal", color: "text-link" };
      const intl2 = channelId(senderId[15]).intl;
      obj1.children = intl2.format(channelId(senderId[15]).t.UkH122, { learnMoreLink: handleLearnMore });
      obj.learnMore = outer1_10(channelId(senderId[20]).TextWithIOSLinkWorkaround, obj1);
      obj.pushLazy(tmp, obj, handleLearnMore);
      const arr = callback();
      const obj2 = { learnMoreLink: handleLearnMore };
      const obj6 = channelId(senderId[8]);
      obj6.trackCtaEvent({ channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta: channelId(senderId[8]).CtaEventTypes.OPEN_MORE_TIPS });
    };
    items3 = [, ];
    items3[0] = obj;
    obj1 = {};
    intl4 = require("getSystemLocale").intl;
    obj1.text = intl4.string(require("getSystemLocale").t.ftIK2A);
    obj1.variant = "secondary";
    obj1.onpress = function onpress() {
      return callback(channelId(senderId[8]).CtaEventTypes.USER_BANNER_MUTE);
    };
    items3[1] = obj1;
    obj.buttons = items3;
    return jsx(tmp3, obj);
  }
}
({ getLikelyAtoMoreTips: closure_5, LIKELY_ATO_MORE_TIPS_MODAL_KEY: closure_6, LEARN_MORE_HC_ARTICLE: closure_7 } = LIKELY_ATO_MORE_TIPS_MODAL_KEY);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
_createForOfIteratorHelperLoose.moreTipsHeader = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("LIKELY_ATO_MORE_TIPS_MODAL_KEY").fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoWarningBanner.tsx");

export default LikelyAtoWarningBanner;
export { LikelyAtoWarningBanner };
