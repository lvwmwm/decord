// Module ID: 10413
// Function ID: 10414
// Name: StrangerDangerWarningBanner
// Dependencies: [19, 4760, 10284, 10381, 1085, 10414, 21, 5092, 587, 504, 10394, 10395, 5934, 5056, 10415, 2000, 1273, 10398, 1126, 10401, 5088, 10417, 2]

// Module 10413 (StrangerDangerWarningBanner)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10284 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10394 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 10395 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 10414 */;
import StrangerDangerMoreTipsModalActionItemsDefault from "StrangerDangerMoreTipsModalActionItems" /* 10417 */;
import react_mod from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import Constants from "Constants" /* 10381 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
class StrangerDangerWarningBanner {
  constructor(channelId) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items6;
    let items7;
    let moreTipsHeader;
    channelId = channelId.channelId;
    const warningId = channelId.warningId;
    const senderId = channelId.senderId;
    let onDismiss;
    react = closure_11();
    let tmp2 = channelId;
    const tmp3 = senderId;
    let obj = channelId(senderId[9]);
    let items = [onDismiss];
    const items1 = [senderId];
    const items2 = [channelId, warningId, senderId];
    const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
    const effect = react.useEffect(() => {
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER };
      obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_VIEWED, obj2);
    }, items2);
    const items3 = [channelId, warningId];
    onDismiss = react.useCallback(() => {
      const items = [warningId];
      const obj = ChannelSafetyWarningsActionCreators;
      const result = obj.dismissChannelSafetyWarnings(channelId, items);
      const obj2 = ModalActionCreatorsDefault;
      obj2.popWithKey(metroRequire);
    }, items3);
    const items4 = [onDismiss, channelId, warningId, senderId];
    const callback1 = react.useCallback((cta) => () => {
      callback();
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta };
      obj.trackCtaEvent(obj2);
    }, items4);
    const items5 = [callback1, onDismiss, channelId, warningId, senderId];
    const callback2 = react.useCallback((arg0) => {
      let closure_0 = arg0;
      return () => {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        let obj = {
          userId: senderId,
          channelId,
          onBlock: callback1(channelId),
          onSuccess() {
            const obj = warningId(senderId[13]);
            return obj.hideActionSheet();
          },
          onIgnore() {
            closure_1_4();
            const obj = channelId(closure_2_2[10]);
            const obj2 = { channelId, warningId, senderId, warningType: constants.STRANGER_DANGER, cta: channelId(closure_2_2[10]).CtaEventTypes.USER_BANNER_IGNORE_CONFIRM };
            obj.trackCtaEvent(obj2);
          },
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION
        };
        const tmp2 = asyncRequire(10415, dependencyMap.paths);
        openLazy(tmp2, closure_9, obj);
      };
    }, items5);
    let obj2 = { channelId, warningId, senderId, warningType: callback1.STRANGER_DANGER, header: intl.string(channelId(senderId[18]).t.iOkDpM), description: intl2.string(channelId(senderId[18]).t.ISUbcM), onDismiss, buttons: items6 };
    const tmp10 = warningId(senderId[17]);
    intl = channelId(senderId[18]).intl;
    intl2 = channelId(senderId[18]).intl;
    let obj3 = {
      text: intl3.string(channelId(senderId[18]).t["Qk/c48"]),
      variant: "primary",
      onpress: function handleMoreTipsPressed() {
        let arr;
        let intl;
        const pushLazy = ModalActionCreatorsDefault.pushLazy;
        let obj = {
          modalKey: metroRequire,
          headerStyle: moreTipsHeader.moreTipsHeader,
          channelId,
          warningId,
          senderId,
          description: intl.string(intl5.t.DJMZX6),
          safetyTips: arr.map((children, index) => {
            const obj = { variant: "text-sm/medium", children };
            return closure_1_10(channelId(senderId[20]).Text, obj, index);
          }),
          actionItems: null
        };
        ModalActionCreatorsDefault;
        const tmp2 = asyncRequire(10401, dependencyMap.paths);
        intl = intl5.intl;
        arr = metroImportDefault();
        ({ channelId, warningId, senderId, onBlockPressed: callback2(SafetyWarningUtils.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM) });
        StrangerDangerMoreTipsModalActionItemsDefault;
        pushLazy(tmp2, obj, metroRequire);
        const obj3 = SafetyWarningUtils;
        const obj4 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.OPEN_MORE_TIPS };
        obj3.trackCtaEvent(obj4);
      }
    };
    intl3 = channelId(senderId[18]).intl;
    items6 = [obj3];
    const tmp9 = jsx;
    if (stateFromStores) {
      items7 = [];
    } else {
      let obj4 = { text: intl4.string(tmp2(tmp3[18]).t.ie0QdN), variant: "destructive", onpress: callback2(tmp2(tmp3[10]).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM) };
      intl4 = tmp2(tmp3[18]).intl;
      items7 = [obj4];
    }
    HermesBuiltin.arraySpread(items6, items7, 1);
    return tmp9(tmp10, obj2);
  }
}
let react = react_mod;
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
({ STRANGER_DANGER_MORE_TIPS_MODAL_KEY: metroRequire, getStrangerDangerSafetyTips: metroImportDefault } = Constants);
const AnalyticEvents = Constants2.AnalyticEvents;
let closure_9 = RestrictionConfirmationConstants.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
let obj = { moreTipsHeader: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
const unpackModuleId = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx");

export default StrangerDangerWarningBanner;
export { StrangerDangerWarningBanner };
