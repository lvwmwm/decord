// Module ID: 13887
// Function ID: 105044
// Name: useQuestRewardClaimHandler
// Dependencies: []
// Exports: default

// Module 13887 (useQuestRewardClaimHandler)
function useQuestRewardClaimHandler(quest) {
  quest = quest.quest;
  const arg1 = quest;
  let flag = quest.hideActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let QUEST_BOTTOM_SHEET = quest.questContent;
  if (QUEST_BOTTOM_SHEET === undefined) {
    QUEST_BOTTOM_SHEET = arg1(dependencyMap[10]).QuestContent.QUEST_BOTTOM_SHEET;
  }
  const dependencyMap = QUEST_BOTTOM_SHEET;
  const onSuccess = quest.onSuccess;
  let closure_3 = onSuccess;
  const sourceQuestContent = quest.sourceQuestContent;
  const React = sourceQuestContent;
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let obj = arg1(dependencyMap[11]);
  const progressState = obj.useProgressState(quest);
  const items = [quest.config];
  const result = arg1(dependencyMap[12]).hasCollectiblesQuestReward(quest.config);
  const memo = React.useMemo(() => quest(QUEST_BOTTOM_SHEET[13]).getDefaultReward(quest.config).skuId, items);
  const obj2 = arg1(dependencyMap[12]);
  let tmp6 = null;
  if (progressState === arg1(dependencyMap[11]).QuestProgressState.COMPLETED) {
    tmp6 = null;
    if (result) {
      tmp6 = memo;
    }
  }
  const fetchCollectiblesProduct = arg1(dependencyMap[14]).useFetchCollectiblesProduct(tmp6);
  const product = fetchCollectiblesProduct.product;
  View = product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  closure_6 = isFetching;
  const obj3 = arg1(dependencyMap[14]);
  const items1 = [closure_8];
  const stateFromStoresObject = arg1(dependencyMap[15]).useStateFromStoresObject(items1, () => ({ isFetchingRewardCode: stateFromStores.isFetchingRewardCode(quest.id), isClaimingReward: stateFromStores.isClaimingReward(quest.id) }));
  const isFetchingRewardCode = stateFromStoresObject.isFetchingRewardCode;
  closure_7 = isFetchingRewardCode;
  const obj4 = arg1(dependencyMap[15]);
  const items2 = [closure_7];
  const stateFromStores = arg1(dependencyMap[15]).useStateFromStores(items2, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let result;
    if (null != currentUser) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  closure_8 = stateFromStores;
  const obj5 = arg1(dependencyMap[15]);
  const items3 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[15]).useStateFromStores(items3, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return verified;
  });
  closure_9 = stateFromStores1;
  const items4 = [isFetching, isFetchingRewardCode];
  const memo1 = React.useMemo(() => {
    let tmp = isFetching;
    if (!isFetching) {
      tmp = isFetchingRewardCode;
    }
    return tmp;
  }, items4);
  const obj6 = arg1(dependencyMap[15]);
  const token = arg1(dependencyMap[16]).useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER);
  const obj7 = arg1(dependencyMap[16]);
  const token1 = arg1(dependencyMap[16]).useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW);
  arg1(dependencyMap[16]);
  if (null != product) {
    obj = {};
    const styles2 = product.styles;
    let buttonColors;
    if (null != styles2) {
      buttonColors = styles2.buttonColors;
    }
    if (null == buttonColors) {
      buttonColors = [];
    }
    obj.buttonColors = buttonColors;
    const styles = product.styles;
    let confettiColors;
    if (null != styles) {
      confettiColors = styles.confettiColors;
    }
    if (null == confettiColors) {
      confettiColors = [];
    }
    obj.confettiColors = confettiColors;
    const items5 = [importDefault(dependencyMap[17])(token1), importDefault(dependencyMap[17])(token), importDefault(dependencyMap[17])(tmp15)];
    obj.backgroundColors = items5;
    product.styles = obj;
  }
  obj = {
    isLoading: memo1,
    isClaiming: stateFromStoresObject.isClaimingReward,
    claim: React.useCallback(() => {
      let obj = quest(QUEST_BOTTOM_SHEET[18]);
      obj = { quest, product, hideActionSheet: flag, questContent: QUEST_BOTTOM_SHEET, currentUserHasVerifiedEmailOrPhone: stateFromStores, currentUserHasVerifiedEmail: stateFromStores1, onSuccess, sourceQuestContent };
      return obj.handleRewardClaimThenView(obj);
    }, items6)
  };
  const items6 = [quest, product, stateFromStores, stateFromStores1, flag, QUEST_BOTTOM_SHEET, onSuccess, sourceQuestContent];
  return obj;
}
function WatchTaskButton(arg0) {
  let questId;
  let sourceQuestContent;
  let taskDetails;
  ({ questId, sourceQuestContent, taskDetails } = arg0);
  let obj = arg1(dependencyMap[19]);
  obj = { "Bool(true)": "png", "Bool(true)": 12 };
  obj.onPress = obj.useWatchTaskPressHandler({ questId, sourceQuestContent });
  const watchTaskPressHandler = obj.useWatchTaskPressHandler({ questId, sourceQuestContent });
  obj.text = arg1(dependencyMap[21]).getVideoQuestWatchCtaText(taskDetails);
  return callback2(arg1(dependencyMap[20]).Button, obj);
}
function NextButton(arg0) {
  let disabled;
  let onPress;
  ({ onPress, disabled } = arg0);
  const obj = { "Bool(true)": "png", "Bool(true)": 12, onPress, disabled };
  const intl = arg1(dependencyMap[27]).intl;
  obj.text = intl.string(arg1(dependencyMap[27]).t.a9OfTN);
  return callback2(arg1(dependencyMap[20]).Button, obj);
}
function DefibButton(arg0) {
  let disabled;
  let loading;
  ({ questId: closure_0, onPress: closure_1, sourceQuestContent: closure_2 } = arg0);
  ({ loading, disabled } = arg0);
  let obj = arg1(dependencyMap[29]);
  let closure_3 = obj.useTrackQuestContentClickedWithImpression();
  let closure_4 = arg1(dependencyMap[30]).useQuestImpressionId();
  obj = {
    1661141762: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000543230922544,
    1384656706: -0.000000000000000000000000000031955029637278757,
    120390229: -1456815903870949500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    loading,
    disabled,
    icon: callback2(arg1(dependencyMap[31]).RefreshIcon, {}),
    iconPosition: "end",
    onPress(arg0) {
      let obj = callback(closure_2[32]);
      if (obj.shouldMigrateToAdAnalyticsInterface(callback(closure_2[32]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        obj = { type: callback(closure_2[34]).AdUserActionType.CLICK_INTERNAL, adCreativeType: callback(closure_2[35]).AdCreativeType.QUEST, adCreativeId: callback, questContentCTA: callback(closure_2[36]).QuestContentCTA.DEFIBRILLATOR, surfaceId: callback(closure_2[10]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_2, impressionId: closure_4 };
        callback(closure_2[33]).captureAdUserAction(obj);
        const obj3 = callback(closure_2[33]);
      } else {
        obj = { questId: callback, questContent: callback(closure_2[10]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: callback(closure_2[36]).QuestContentCTA.DEFIBRILLATOR, sourceQuestContent: closure_2 };
        callback3(obj);
      }
      if (null != callback2) {
        callback2(arg0);
      }
    }
  };
  const intl = arg1(dependencyMap[27]).intl;
  obj.text = intl.string(arg1(dependencyMap[27]).t.nPThNb);
  return callback2(arg1(dependencyMap[20]).Button, obj);
}
function ClaimButton(arg0) {
  let disabled;
  let loading;
  ({ questId: closure_0, onPress: closure_1, sourceQuestContent: closure_2 } = arg0);
  ({ disabled, loading } = arg0);
  let obj = arg1(dependencyMap[29]);
  let closure_3 = obj.useTrackQuestContentClickedWithImpression();
  let closure_4 = arg1(dependencyMap[30]).useQuestImpressionId();
  obj = {
    "Bool(true)": "png",
    "Bool(true)": 12,
    disabled,
    loading,
    onPress() {
      let obj = callback(closure_2[32]);
      if (obj.shouldMigrateToAdAnalyticsInterface(callback(closure_2[32]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        obj = { type: callback(closure_2[34]).AdUserActionType.CLICK_INTERNAL, adCreativeType: callback(closure_2[35]).AdCreativeType.QUEST, adCreativeId: callback, questContentCTA: callback(closure_2[36]).QuestContentCTA.CLAIM_REWARD, surfaceId: callback(closure_2[10]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_2, impressionId: closure_4 };
        callback(closure_2[33]).captureAdUserAction(obj);
        const obj3 = callback(closure_2[33]);
      } else {
        obj = { questId: callback, questContent: callback(closure_2[10]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: callback(closure_2[36]).QuestContentCTA.CLAIM_REWARD, sourceQuestContent: closure_2 };
        callback3(obj);
      }
      callback2();
    }
  };
  const intl = arg1(dependencyMap[27]).intl;
  obj.text = intl.string(arg1(dependencyMap[27]).t.cfY4PE);
  return callback2(arg1(dependencyMap[20]).Button, obj);
}
function AnimatedFooter(arg0) {
  let backButton;
  let ctaButton;
  let onLayout;
  let style;
  let withSafeArea;
  ({ backButton, withSafeArea } = arg0);
  ({ onLayout, ctaButton, style } = arg0);
  if (withSafeArea === undefined) {
    withSafeArea = true;
  }
  let arg1;
  let importDefault;
  let dependencyMap;
  let closure_3;
  let tmp = null != backButton;
  if (tmp) {
    tmp = false !== backButton;
  }
  arg1 = tmp;
  const bottom = importDefault(dependencyMap[37])().bottom;
  const width = importDefault(dependencyMap[38])().width;
  importDefault = width;
  const tmp3 = function useReducedMotion() {
    const items = [closure_6];
    return tmp(tmp3[15]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }();
  dependencyMap = tmp3;
  let obj = arg1(dependencyMap[39]);
  let num = 0;
  if (tmp) {
    num = 1;
  }
  const sharedValue = obj.useSharedValue(num);
  closure_3 = sharedValue;
  const items = [tmp, tmp3, sharedValue];
  const effect = React.useEffect(() => {
    let obj = tmp(tmp3[40]);
    let num = 0;
    if (sharedValue) {
      num = 1;
    }
    obj = {};
    let num2 = 200;
    if (tmp3) {
      num2 = 0;
    }
    obj.duration = num2;
    const result = sharedValue.set(obj.withTiming(num, obj));
  }, items);
  let obj1 = arg1(dependencyMap[39]);
  const fn = function y() {
    let obj = { 148480: null, <string:3495100420>: "540091c70b333c8b8937ba1627138192", <string:1275178498>: "wumpus-pikachu", <string:469975812>: "png", opacity: sharedValue.get() };
    obj = { translateX: closure_12 };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { animation: sharedValue, H_PADDING_PX: PX_16 };
  fn.__closure = obj;
  fn.__workletHash = 7564903336036;
  fn.__initData = closure_14;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const tmp2 = callback3();
  class B {
    constructor() {
      obj = {};
      obj2 = closure_0(useReducedMotion[39]);
      items = [, ];
      items[0] = width - 2 * closure_12;
      value = closure_3.get();
      diff = width - 2.5 * closure_12;
      items[1] = diff - closure_0(useReducedMotion[41]).LARGE_BUTTON_HEIGHT;
      obj.width = obj2.interpolate(value, [null, null], items);
      obj.alignSelf = "flex-end";
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[39]).interpolate, animation: sharedValue, windowWidth: width, H_PADDING_PX: PX_16, ICON_SIZE_PX: arg1(dependencyMap[41]).LARGE_BUTTON_HEIGHT };
  B.__closure = obj;
  B.__workletHash = 9095621288509;
  B.__initData = closure_15;
  const animatedStyle1 = arg1(dependencyMap[39]).useAnimatedStyle(B);
  obj1 = {};
  const items1 = [tmp2.container, , ];
  if (withSafeArea) {
    const obj2 = { paddingBottom: tmp8 };
    withSafeArea = obj2;
  }
  items1[1] = withSafeArea;
  items1[2] = style;
  obj1.style = items1;
  obj1.onLayout = onLayout;
  const items2 = [callback2(importDefault(dependencyMap[39]).View, { style: animatedStyle, children: backButton }), callback2(importDefault(dependencyMap[39]).View, { style: animatedStyle1, children: ctaButton })];
  obj1.children = items2;
  return closure_11(View, obj1);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const PX_16 = importDefault(dependencyMap[8]).space.PX_16;
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj.container = obj;
let closure_13 = obj.createStyles(obj);
let closure_14 = { code: "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}" };
let closure_15 = { code: "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}" };
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx");

export default function QuestBottomSheetFooter(quest) {
  let isDefibrilating;
  let isMobileActivityQuest;
  let launchMobileActivity;
  let onBack;
  let onConnectConsoleNext;
  let onDefib;
  let questApplication;
  let sourceQuestContent;
  let step;
  let style;
  let withSafeArea;
  quest = quest.quest;
  const arg1 = quest;
  ({ step, isDefibrilating } = quest);
  if (isDefibrilating === undefined) {
    isDefibrilating = false;
  }
  ({ onBack, sourceQuestContent } = quest);
  let importDefault;
  ({ onConnectConsoleNext, onDefib, style, withSafeArea } = quest);
  const tmp = useQuestRewardClaimHandler({ quest, sourceQuestContent });
  let obj = arg1(dependencyMap[11]);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = arg1(dependencyMap[11]);
  const isQuestProgressing = obj1.useIsQuestProgressing(quest);
  let obj2 = arg1(dependencyMap[11]);
  let obj3 = arg1(dependencyMap[11]);
  const xboxAndPlaystationAccounts = obj3.useConnectedAccounts().xboxAndPlaystationAccounts;
  importDefault = xboxAndPlaystationAccounts;
  const items = [quest, xboxAndPlaystationAccounts];
  const memo = React.useMemo(() => {
    const obj = quest(closure_2[22]);
    return quest(closure_2[22]).supportedConsoles(quest).filter((arg0) => closure_1.find((type) => type.type === type));
  }, items);
  let obj4 = arg1(dependencyMap[23]);
  const hasWatchVideoOnMobileTasks = obj4.useHasWatchVideoOnMobileTasks(quest.config);
  let obj5 = arg1(dependencyMap[23]);
  const mobileActivityQuest = obj5.useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  let obj6 = arg1(dependencyMap[24]);
  const primaryCtaCopy = obj6.usePrimaryCtaCopy({ quest, application: questApplication });
  let obj7 = arg1(dependencyMap[19]);
  obj = { questId: quest.id, sourceQuestContent, launchMobileActivity };
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (null != userStatus2) {
    claimedAt = userStatus2.claimedAt;
  }
  let tmp35Result = null;
  if (step !== arg1(dependencyMap[25]).QuestBottomSheetStep.TASK_SELECT) {
    obj = { onLayout: quest.onLayout };
    if (arg1(dependencyMap[25]).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      obj1 = { onPress: onConnectConsoleNext, disabled: 0 === memo.length };
      let tmp27 = callback2(NextButton, obj1);
    } else {
      tmp27 = null;
      if (arg1(dependencyMap[25]).QuestBottomSheetStep.TASK_STATUS === step) {
        if (tmp9) {
          obj2 = { questId: quest.id, onPress: tmp.claim, disabled: tmp11 };
          let isClaiming = tmp.isLoading;
          if (!isClaiming) {
            isClaiming = tmp.isClaiming;
          }
          obj2.loading = isClaiming;
          obj2.sourceQuestContent = sourceQuestContent;
          let tmp25Result = callback2(ClaimButton, obj2);
          const tmp25 = callback2;
          const tmp26 = ClaimButton;
        } else if (hasWatchVideoOnMobileTasks) {
          obj3 = { questId: quest.id, taskDetails: questTaskDetails, sourceQuestContent };
          tmp25Result = callback2(WatchTaskButton, obj3);
        } else if (isMobileActivityQuest) {
          obj4 = { "Bool(true)": "png", "Bool(true)": 12, onPress: mobileActivityPressHandler, text: primaryCtaCopy, icon: arg1(dependencyMap[18]).getPrimaryCtaIcon(quest) };
          tmp25Result = callback2(arg1(dependencyMap[20]).Button, obj4);
          const obj13 = arg1(dependencyMap[18]);
        } else {
          if (callback(obj2.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === arg1(dependencyMap[10]).TaskPlatformScreen.CONSOLE) {
            if (!isQuestProgressing) {
              obj5 = { questId: quest.id, loading: isDefibrilating, disabled: isDefibrilating, onPress: onDefib, sourceQuestContent };
              tmp25Result = callback2(DefibButton, obj5);
            }
          }
          obj6 = { questId: quest.id, onPress: tmp.claim, disabled: true, sourceQuestContent };
          tmp25Result = callback2(ClaimButton, obj6);
        }
        tmp27 = tmp25Result;
      }
    }
    obj.ctaButton = tmp27;
    let tmp30 = null != onBack;
    if (tmp30) {
      obj7 = {};
      const intl = arg1(dependencyMap[27]).intl;
      obj7.accessibilityLabel = intl.string(arg1(dependencyMap[27]).t.13/7kX);
      obj7.variant = "secondary";
      obj7.icon = callback2(arg1(dependencyMap[28]).ArrowLargeLeftIcon, {});
      obj7.onPress = onBack;
      obj7.size = "lg";
      tmp30 = callback2(arg1(dependencyMap[26]).IconButton, obj7);
    }
    obj.backButton = tmp30;
    obj.style = style;
    obj.withSafeArea = withSafeArea;
    tmp35Result = callback2(AnimatedFooter, obj);
    const tmp35 = callback2;
    const tmp36 = AnimatedFooter;
  }
  return tmp35Result;
};
export { useQuestRewardClaimHandler };
