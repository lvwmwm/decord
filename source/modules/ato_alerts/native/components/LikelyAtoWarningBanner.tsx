// Module ID: 10398
// Function ID: 80115
// Name: LikelyAtoWarningBanner
// Dependencies: []

// Module 10398 (LikelyAtoWarningBanner)
class LikelyAtoWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    arg1 = channelId;
    warningId = global.warningId;
    importDefault = warningId;
    senderId = global.senderId;
    dependencyMap = senderId;
    handleLearnMore = function handleLearnMore() {
      let obj = channelId(senderId[8]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta: channelId(senderId[8]).CtaEventTypes.USER_MODAL_LEARN_MORE };
      obj.trackCtaEvent(obj);
      warningId(senderId[13]).openURL(closure_7);
    };
    handleLearnMore = closure_13();
    items = [, , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    effect = handleLearnMore.useEffect(() => {
      let obj = channelId(senderId[8]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO };
      obj.trackViewedEvent(constants.SAFETY_WARNING_VIEWED, obj);
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
    f80120 = handleLearnMore.useCallback((cta) => {
      let obj = channelId(senderId[11]);
      obj = { channelId, guildId: null, muteDurationSeconds: constants2.ALWAYS };
      const result = obj.handleMuteSettingPress(obj);
      warningId(senderId[12]).showMuteSuccessToast(senderId, channelId);
      const obj3 = warningId(senderId[12]);
      obj = { channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta };
      channelId(senderId[8]).trackCtaEvent(obj);
      callback();
    }, items2);
    obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.LIKELY_ATO };
    tmp3 = importDefault(dependencyMap[14]);
    intl = arg1(dependencyMap[15]).intl;
    obj.header = intl.string(arg1(dependencyMap[15]).t.R8UsiI);
    intl2 = arg1(dependencyMap[15]).intl;
    obj.description = intl2.string(arg1(dependencyMap[15]).t.lI8nQl);
    obj.onDismiss = callback;
    obj = {};
    intl3 = arg1(dependencyMap[15]).intl;
    obj.text = intl3.string(arg1(dependencyMap[15]).t.tC1pvL);
    obj.variant = "primary";
    obj.onpress = function onpress() {
      let obj = warningId(senderId[10]);
      obj = { modalKey: handleLearnMore, headerStyle: moreTipsHeader.moreTipsHeader, channelId, warningId, senderId };
      const intl = channelId(senderId[15]).intl;
      obj.description = intl.string(channelId(senderId[15]).t./uid3p);
      const tmp = channelId(senderId[17])(senderId[16], senderId.paths);
      obj.safetyTips = callback().map((children) => {
        let obj = {};
        obj = { children: children.title };
        const items = [callback3(callback(closure_2[18]).Text, obj, arg1), ];
        obj = { children: children.description };
        items[1] = callback3(callback(closure_2[18]).Text, obj, arg1);
        obj.children = items;
        return callback4(closure_11, obj);
      });
      obj = {
        senderId,
        handleMutePressed() {
          return callback2(callback(closure_2[8]).CtaEventTypes.USER_MODAL_MUTE);
        }
      };
      obj.actionItems = callback2(warningId(senderId[19]), obj);
      const obj1 = {};
      const intl2 = channelId(senderId[15]).intl;
      obj1.children = intl2.format(channelId(senderId[15]).t.UkH122, { learnMoreLink: handleLearnMore });
      obj.learnMore = callback2(channelId(senderId[20]).TextWithIOSLinkWorkaround, obj1);
      obj.pushLazy(tmp, obj, handleLearnMore);
      const arr = callback();
      const obj2 = { learnMoreLink: handleLearnMore };
      const obj6 = channelId(senderId[8]);
      obj6.trackCtaEvent({ channelId, warningId, senderId, warningType: callback.LIKELY_ATO, cta: channelId(senderId[8]).CtaEventTypes.OPEN_MORE_TIPS });
    };
    items3 = [, ];
    items3[0] = obj;
    obj1 = {};
    intl4 = arg1(dependencyMap[15]).intl;
    obj1.text = intl4.string(arg1(dependencyMap[15]).t.ftIK2A);
    obj1.variant = "secondary";
    obj1.onpress = function onpress() {
      return callback(channelId(senderId[8]).CtaEventTypes.USER_BANNER_MUTE);
    };
    items3[1] = obj1;
    obj.buttons = items3;
    return jsx(tmp3, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const SafetyWarningTypes = arg1(dependencyMap[1]).SafetyWarningTypes;
({ getLikelyAtoMoreTips: closure_5, LIKELY_ATO_MORE_TIPS_MODAL_KEY: closure_6, LEARN_MORE_HC_ARTICLE: closure_7 } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const MuteUntilSeconds = arg1(dependencyMap[4]).MuteUntilSeconds;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
obj.moreTipsHeader = obj;
let closure_13 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoWarningBanner.tsx");

export default LikelyAtoWarningBanner;
export { LikelyAtoWarningBanner };
