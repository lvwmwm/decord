// Module ID: 10402
// Function ID: 80136
// Name: StrangerDangerWarningBanner
// Dependencies: []

// Module 10402 (StrangerDangerWarningBanner)
class StrangerDangerWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    arg1 = channelId;
    warningId = global.warningId;
    importDefault = warningId;
    senderId = global.senderId;
    dependencyMap = senderId;
    importAll = closure_11();
    obj = arg1(dependencyMap[9]);
    items = [];
    items[0] = closure_4;
    items1 = [];
    items1[0] = senderId;
    items2 = [, , ];
    items2[0] = channelId;
    items2[1] = warningId;
    items2[2] = senderId;
    stateFromStores = obj.useStateFromStores(items, () => callback.isBlocked(senderId), items1);
    effect = importAll.useEffect(() => {
      let obj = channelId(senderId[10]);
      obj = { channelId, warningId, senderId, warningType: callback1.STRANGER_DANGER };
      obj.trackViewedEvent(constants.SAFETY_WARNING_VIEWED, obj);
    }, items2);
    items3 = [, ];
    items3[0] = channelId;
    items3[1] = warningId;
    callback = importAll.useCallback(() => {
      const items = [warningId];
      const result = channelId(senderId[11]).dismissChannelSafetyWarnings(channelId, items);
      const obj = channelId(senderId[11]);
      warningId(senderId[12]).popWithKey(callback2);
    }, items3);
    closure_4 = callback;
    items4 = [, , , ];
    items4[0] = callback;
    items4[1] = channelId;
    items4[2] = warningId;
    items4[3] = senderId;
    callback1 = importAll.useCallback((arg0) => {
      const channelId = arg0;
      return () => {
        callback();
        let obj = arg0(closure_2[10]);
        obj = { channelId: arg0, warningId: closure_1, senderId: closure_2, warningType: constants.STRANGER_DANGER, cta: arg0 };
        obj.trackCtaEvent(obj);
      };
    }, items4);
    f80141 = callback1;
    items5 = [, , , , ];
    items5[0] = callback1;
    items5[1] = callback;
    items5[2] = channelId;
    items5[3] = warningId;
    items5[4] = senderId;
    callback2 = importAll.useCallback((arg0) => {
      const channelId = arg0;
      return () => {
        let obj = callback(paths[13]);
        obj = {
          userId: paths,
          channelId: arg0,
          onBlock: callback2(arg0),
          onSuccess() {
            return callback2(closure_2[13]).hideActionSheet();
          },
          onIgnore() {
            callback3();
            let obj = callback(closure_2[10]);
            obj = { channelId: callback, warningId: closure_1, senderId: closure_2, warningType: constants.STRANGER_DANGER, cta: callback(closure_2[10]).CtaEventTypes.USER_BANNER_IGNORE_CONFIRM };
            obj.trackCtaEvent(obj);
          },
          impressionName: arg0(paths[16]).ImpressionNames.BLOCK_USER_CONFIRMATION
        };
        obj.openLazy(arg0(paths[15])(paths[14], paths.paths), closure_9, obj);
      };
    }, items5);
    defineProperty = callback2;
    tmp6 = jsx;
    obj = { channelId, warningId, senderId, warningType: f80141.STRANGER_DANGER };
    tmp7 = importDefault(dependencyMap[17]);
    intl = arg1(dependencyMap[18]).intl;
    obj.header = intl.string(arg1(dependencyMap[18]).t.iOkDpM);
    intl2 = arg1(dependencyMap[18]).intl;
    obj.description = intl2.string(arg1(dependencyMap[18]).t.ISUbcM);
    obj.onDismiss = callback;
    obj1 = {};
    intl3 = arg1(dependencyMap[18]).intl;
    obj1.text = intl3.string(arg1(dependencyMap[18]).t.Qk/c48);
    obj1.variant = "primary";
    obj1.onpress = function onpress() {
      let obj = warningId(senderId[12]);
      obj = { modalKey: callback2, headerStyle: moreTipsHeader.moreTipsHeader, channelId, warningId, senderId };
      const intl = channelId(senderId[18]).intl;
      obj.description = intl.string(channelId(senderId[18]).t.DJMZX6);
      const tmp = channelId(senderId[15])(senderId[19], senderId.paths);
      obj.safetyTips = callback().map((children) => callback2(callback(closure_2[20]).Text, { variant: "text-sm/medium", children }, arg1));
      obj = { channelId, warningId, senderId };
      const arr = callback();
      obj.onBlockPressed = callback2(channelId(senderId[10]).CtaEventTypes.USER_MODAL_BLOCK_CONFIRM);
      obj.actionItems = callback2(warningId(senderId[21]), obj);
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
      tmp8 = arg1;
      tmp9 = dependencyMap;
      intl4 = arg1(dependencyMap[18]).intl;
      obj2.text = intl4.string(arg1(dependencyMap[18]).t.ie0QdN);
      str = "destructive";
      obj2.variant = "destructive";
      num = 10;
      obj2.onpress = callback2(arg1(dependencyMap[10]).CtaEventTypes.USER_BANNER_BLOCK_CONFIRM);
      items7 = [];
      items7[0] = obj2;
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items7, 1);
    obj.buttons = items6;
    return tmp6(tmp7, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SafetyWarningTypes = arg1(dependencyMap[2]).SafetyWarningTypes;
({ STRANGER_DANGER_MORE_TIPS_MODAL_KEY: closure_6, getStrangerDangerSafetyTips: closure_7 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
let closure_9 = arg1(dependencyMap[5]).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
obj.moreTipsHeader = obj;
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerWarningBanner.tsx");

export default StrangerDangerWarningBanner;
export { StrangerDangerWarningBanner };
