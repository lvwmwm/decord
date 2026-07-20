// Module ID: 10409
// Function ID: 80206
// Name: InappropriateConversationWarningBanner
// Dependencies: []

// Module 10409 (InappropriateConversationWarningBanner)
class InappropriateConversationWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    arg1 = channelId;
    warningId = global.warningId;
    importDefault = warningId;
    senderId = global.senderId;
    dependencyMap = senderId;
    items = [, , ];
    items[0] = channelId;
    items[1] = warningId;
    items[2] = senderId;
    effect = importAll.useEffect(() => {
      let obj = channelId(senderId[4]);
      obj = { channelId, warningId, senderId, warningType: closure_5.INAPPROPRIATE_CONVERSATION_TIER_2, viewName: channelId(senderId[4]).ViewNameTypes.SAFETY_WARNING_BANNER };
      obj.trackNamedViewEvent(obj);
    }, items);
    items1 = [, , ];
    items1[0] = channelId;
    items1[1] = warningId;
    items1[2] = senderId;
    callback = importAll.useCallback((cta) => {
      let obj = channelId(senderId[4]);
      obj = { channelId, warningId, senderId, warningType: closure_5.INAPPROPRIATE_CONVERSATION_TIER_2, cta };
      obj.trackCtaEvent(obj);
    }, items1);
    importAll = callback;
    obj = arg1(dependencyMap[5]);
    items2 = [];
    items2[0] = closure_4;
    items3 = [];
    items3[0] = senderId;
    items4 = [, ];
    items4[0] = channelId;
    items4[1] = warningId;
    stateFromStores = obj.useStateFromStores(items2, () => callback1.isBlocked(senderId), items3);
    callback1 = importAll.useCallback(() => {
      const items = [warningId];
      const result = channelId(senderId[6]).dismissChannelSafetyWarnings(channelId, items);
    }, items4);
    closure_4 = callback1;
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
    callback2 = importAll.useCallback(() => {
      let obj = warningId(senderId[7]);
      obj = {
        importer() {
          return callback(paths[9])(paths[8], paths.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj["channelId"] = callback;
              obj["warningId"] = closure_1;
              obj["warningType"] = obj.INAPPROPRIATE_CONVERSATION_TIER_2;
              obj["senderId"] = closure_2;
              obj["analyticsBlockContext"] = callback(closure_2[4]).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM;
              obj["analyticsBlockAndReportContext"] = callback(closure_2[4]).CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM;
              obj["analyticsCancelContext"] = callback(closure_2[4]).CtaEventTypes.USER_BANNER_BLOCK_CANCEL;
              obj["onDismiss"] = closure_4;
              return callback2(callback, obj);
            };
          });
        }
      };
      obj.openLazy(obj);
    }, items5);
    callback3 = importAll.useCallback(() => {
      const result = channelId(senderId[10]).openSafetyToolsActionSheet(channelId, senderId, warningId, closure_5.INAPPROPRIATE_CONVERSATION_TIER_2);
      callback(channelId(senderId[4]).CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS);
    }, items6);
    tmp7 = jsx;
    obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 };
    tmp8 = importDefault(dependencyMap[11]);
    intl = arg1(dependencyMap[12]).intl;
    obj.header = intl.string(arg1(dependencyMap[12]).t.ZzlB5p);
    intl2 = arg1(dependencyMap[12]).intl;
    obj.description = intl2.string(arg1(dependencyMap[12]).t.D1aU+h);
    obj.onDismiss = callback1;
    obj1 = {};
    intl3 = arg1(dependencyMap[12]).intl;
    obj1.text = intl3.string(arg1(dependencyMap[12]).t.Qyu4UK);
    obj1.variant = "primary";
    obj1.onpress = callback3;
    items7 = [];
    items7[0] = obj1;
    if (stateFromStores) {
      items8 = [];
    } else {
      obj2 = {};
      tmp9 = arg1;
      tmp10 = dependencyMap;
      intl4 = arg1(dependencyMap[12]).intl;
      obj2.text = intl4.string(arg1(dependencyMap[12]).t.7q0bNY);
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SafetyWarningTypes = arg1(dependencyMap[2]).SafetyWarningTypes;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationWarningBanner.tsx");

export default InappropriateConversationWarningBanner;
export { InappropriateConversationWarningBanner };
