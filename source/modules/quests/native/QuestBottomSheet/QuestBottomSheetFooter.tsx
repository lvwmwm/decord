// Module ID: 14018
// Function ID: 107295
// Name: useQuestRewardClaimHandler
// Dependencies: [57, 31, 27, 4122, 1849, 6942, 5188, 33, 689, 4130, 4979, 10464, 9463, 9468, 8206, 566, 3834, 6784, 10919, 14019, 4543, 10475, 10472, 13990, 10926, 14016, 7771, 1212, 5091, 10925, 10468, 13509, 9449, 9450, 9451, 6970, 6969, 1557, 1450, 3991, 4131, 4547, 2]
// Exports: default

// Module 14018 (useQuestRewardClaimHandler)
import _slicedToArray from "_slicedToArray";
import RefreshIcon from "RefreshIcon";
import { View } from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { ACTION_SHEET_MINIMUM_BOTTOM_PADDING as closure_9 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "emitClickEventWithCreative";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function useQuestRewardClaimHandler(quest) {
  quest = quest.quest;
  let flag = quest.hideActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  let QUEST_BOTTOM_SHEET = quest.questContent;
  if (QUEST_BOTTOM_SHEET === undefined) {
    QUEST_BOTTOM_SHEET = quest(QUEST_BOTTOM_SHEET[10]).QuestContent.QUEST_BOTTOM_SHEET;
  }
  const onSuccess = quest.onSuccess;
  const sourceQuestContent = quest.sourceQuestContent;
  let c5;
  let isFetching;
  let isFetchingRewardCode;
  let stateFromStores;
  let stateFromStores1;
  let obj = quest(QUEST_BOTTOM_SHEET[11]);
  const progressState = obj.useProgressState(quest);
  const items = [quest.config];
  let result = quest(QUEST_BOTTOM_SHEET[12]).hasCollectiblesQuestReward(quest.config);
  const memo = sourceQuestContent.useMemo(() => quest(QUEST_BOTTOM_SHEET[13]).getDefaultReward(quest.config).skuId, items);
  const obj2 = quest(QUEST_BOTTOM_SHEET[12]);
  let tmp6 = null;
  if (progressState === quest(QUEST_BOTTOM_SHEET[11]).QuestProgressState.COMPLETED) {
    tmp6 = null;
    if (result) {
      tmp6 = memo;
    }
  }
  const fetchCollectiblesProduct = quest(QUEST_BOTTOM_SHEET[14]).useFetchCollectiblesProduct(tmp6);
  const product = fetchCollectiblesProduct.product;
  c5 = product;
  isFetching = fetchCollectiblesProduct.isFetching;
  const obj3 = quest(QUEST_BOTTOM_SHEET[14]);
  const items1 = [stateFromStores];
  const stateFromStoresObject = quest(QUEST_BOTTOM_SHEET[15]).useStateFromStoresObject(items1, () => ({ isFetchingRewardCode: stateFromStores.isFetchingRewardCode(quest.id), isClaimingReward: stateFromStores.isClaimingReward(quest.id) }));
  isFetchingRewardCode = stateFromStoresObject.isFetchingRewardCode;
  const obj4 = quest(QUEST_BOTTOM_SHEET[15]);
  const items2 = [isFetchingRewardCode];
  stateFromStores = quest(QUEST_BOTTOM_SHEET[15]).useStateFromStores(items2, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let result;
    if (null != currentUser) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const obj5 = quest(QUEST_BOTTOM_SHEET[15]);
  const items3 = [isFetchingRewardCode];
  stateFromStores1 = quest(QUEST_BOTTOM_SHEET[15]).useStateFromStores(items3, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const items4 = [isFetching, isFetchingRewardCode];
  const memo1 = sourceQuestContent.useMemo(() => {
    let tmp = isFetching;
    if (!isFetching) {
      tmp = isFetchingRewardCode;
    }
    return tmp;
  }, items4);
  const obj6 = quest(QUEST_BOTTOM_SHEET[15]);
  const token = quest(QUEST_BOTTOM_SHEET[16]).useToken(flag(QUEST_BOTTOM_SHEET[8]).colors.BACKGROUND_BASE_LOWER);
  const obj7 = quest(QUEST_BOTTOM_SHEET[16]);
  const token1 = quest(QUEST_BOTTOM_SHEET[16]).useToken(flag(QUEST_BOTTOM_SHEET[8]).colors.BACKGROUND_BASE_LOW);
  quest(QUEST_BOTTOM_SHEET[16]);
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
    const items5 = [flag(QUEST_BOTTOM_SHEET[17])(token1), flag(QUEST_BOTTOM_SHEET[17])(token), flag(QUEST_BOTTOM_SHEET[17])(tmp15)];
    obj.backgroundColors = items5;
    product.styles = obj;
  }
  obj = {
    isLoading: memo1,
    isClaiming: stateFromStoresObject.isClaimingReward,
    claim: sourceQuestContent.useCallback(() => {
      let obj = quest(QUEST_BOTTOM_SHEET[18]);
      obj = { quest, product: c5, hideActionSheet: flag, questContent: QUEST_BOTTOM_SHEET, currentUserHasVerifiedEmailOrPhone: stateFromStores, currentUserHasVerifiedEmail: stateFromStores1, onSuccess, sourceQuestContent };
      return obj.handleRewardClaimThenView(obj);
    }, items6)
  };
  items6 = [quest, product, stateFromStores, stateFromStores1, flag, QUEST_BOTTOM_SHEET, onSuccess, sourceQuestContent];
  return obj;
}
function WatchTaskButton(arg0) {
  let questId;
  let sourceQuestContent;
  let taskDetails;
  ({ questId, sourceQuestContent, taskDetails } = arg0);
  let obj = require(14019) /* useDismissSheetOrCollapseDock */;
  obj = { grow: true, size: "lg" };
  obj.onPress = obj.useWatchTaskPressHandler({ questId, sourceQuestContent });
  const watchTaskPressHandler = obj.useWatchTaskPressHandler({ questId, sourceQuestContent });
  obj.text = require(10475) /* formatWatchRemainingDurationShort */.getVideoQuestWatchCtaText(taskDetails);
  return callback2(require(4543) /* Button */.Button, obj);
}
function NextButton(arg0) {
  let disabled;
  let onPress;
  ({ onPress, disabled } = arg0);
  const obj = { grow: true, size: "lg", onPress, disabled };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.a9OfTN);
  return callback2(require(4543) /* Button */.Button, obj);
}
function DefibButton(arg0) {
  let dependencyMap;
  let disabled;
  let importDefault;
  let loading;
  let require;
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ loading, disabled } = arg0);
  let obj = require(10925) /* useTrackQuestEventWithImpression */;
  let _slicedToArray = obj.useTrackQuestContentClickedWithImpression();
  let RefreshIcon = require(10468) /* useQuestImpressionRef */.useQuestImpressionId();
  obj = {
    grow: true,
    size: "lg",
    variant: "secondary",
    loading,
    disabled,
    icon: callback2(require(13509) /* RefreshIcon */.RefreshIcon, {}),
    iconPosition: "end",
    onPress(arg0) {
      let obj = outer1_0(outer1_2[32]);
      if (obj.shouldMigrateToAdAnalyticsInterface(outer1_0(outer1_2[32]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        obj = { type: outer1_0(outer1_2[34]).AdUserActionType.CLICK_INTERNAL, adCreativeType: outer1_0(outer1_2[35]).AdCreativeType.QUEST, adCreativeId: closure_0, questContentCTA: outer1_0(outer1_2[36]).QuestContentCTA.DEFIBRILLATOR, surfaceId: outer1_0(outer1_2[10]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_2, impressionId: RefreshIcon };
        outer1_0(outer1_2[33]).captureAdUserAction(obj);
        const obj3 = outer1_0(outer1_2[33]);
      } else {
        obj = { questId: closure_0, questContent: outer1_0(outer1_2[10]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: outer1_0(outer1_2[36]).QuestContentCTA.DEFIBRILLATOR, sourceQuestContent: closure_2 };
        callback2(obj);
      }
      if (null != callback) {
        callback(arg0);
      }
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.nPThNb);
  return callback2(require(4543) /* Button */.Button, obj);
}
function ClaimButton(arg0) {
  let dependencyMap;
  let disabled;
  let importDefault;
  let loading;
  let require;
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ disabled, loading } = arg0);
  let obj = require(10925) /* useTrackQuestEventWithImpression */;
  let _slicedToArray = obj.useTrackQuestContentClickedWithImpression();
  let RefreshIcon = require(10468) /* useQuestImpressionRef */.useQuestImpressionId();
  obj = {
    grow: true,
    size: "lg",
    disabled,
    loading,
    onPress() {
      let obj = outer1_0(outer1_2[32]);
      if (obj.shouldMigrateToAdAnalyticsInterface(outer1_0(outer1_2[32]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        obj = { type: outer1_0(outer1_2[34]).AdUserActionType.CLICK_INTERNAL, adCreativeType: outer1_0(outer1_2[35]).AdCreativeType.QUEST, adCreativeId: closure_0, questContentCTA: outer1_0(outer1_2[36]).QuestContentCTA.CLAIM_REWARD, surfaceId: outer1_0(outer1_2[10]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_2, impressionId: RefreshIcon };
        outer1_0(outer1_2[33]).captureAdUserAction(obj);
        const obj3 = outer1_0(outer1_2[33]);
      } else {
        obj = { questId: closure_0, questContent: outer1_0(outer1_2[10]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: outer1_0(outer1_2[36]).QuestContentCTA.CLAIM_REWARD, sourceQuestContent: closure_2 };
        callback2(obj);
      }
      callback();
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.cfY4PE);
  return callback2(require(4543) /* Button */.Button, obj);
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
  let _require;
  let width;
  let dependencyMap;
  let sharedValue;
  let tmp = null != backButton;
  if (tmp) {
    tmp = false !== backButton;
  }
  _require = tmp;
  const bottom = width(1557)().bottom;
  width = width(1450)().width;
  const tmp3 = (function useReducedMotion() {
    const items = [outer1_6];
    return _undefined(_undefined2[15]).useStateFromStores(items, () => outer2_6.useReducedMotion);
  })();
  dependencyMap = tmp3;
  let obj = _require(3991);
  let num = 0;
  if (tmp) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  let items = [tmp, tmp3, sharedValue];
  const effect = React.useEffect(() => {
    let obj = _undefined(_undefined2[40]);
    let num = 0;
    if (_undefined) {
      num = 1;
    }
    obj = {};
    let num2 = 200;
    if (_undefined2) {
      num2 = 0;
    }
    obj.duration = num2;
    const result = sharedValue.set(obj.withTiming(num, obj));
  }, items);
  let obj1 = _require(3991);
  const fn = function y() {
    let obj = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0 };
    obj = { translateX: outer1_12 };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { animation: sharedValue, H_PADDING_PX: PX_16 };
  fn.__closure = obj;
  fn.__workletHash = 7564903336036;
  fn.__initData = closure_14;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const tmp2 = _createForOfIteratorHelperLoose();
  class B {
    constructor() {
      obj = {};
      obj2 = c0(useReducedMotion[39]);
      items = [, ];
      items[0] = width - 2 * outer1_12;
      value = c3.get();
      diff = width - 2.5 * outer1_12;
      items[1] = diff - c0(useReducedMotion[41]).LARGE_BUTTON_HEIGHT;
      obj.width = obj2.interpolate(value, [0, 1], items);
      obj.alignSelf = "flex-end";
      return obj;
    }
  }
  obj = { interpolate: _require(3991).interpolate, animation: sharedValue, windowWidth: width, H_PADDING_PX: PX_16, ICON_SIZE_PX: _require(4547).LARGE_BUTTON_HEIGHT };
  B.__closure = obj;
  B.__workletHash = 9095621288509;
  B.__initData = closure_15;
  const animatedStyle1 = _require(3991).useAnimatedStyle(B);
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
  const items2 = [callback2(width(3991).View, { style: animatedStyle, children: backButton }), callback2(width(3991).View, { style: animatedStyle1, children: ctaButton })];
  obj1.children = items2;
  return closure_11(View, obj1);
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_14 = { code: "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}" };
let closure_15 = { code: "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx");

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
  ({ step, isDefibrilating } = quest);
  if (isDefibrilating === undefined) {
    isDefibrilating = false;
  }
  ({ onBack, sourceQuestContent } = quest);
  let xboxAndPlaystationAccounts;
  ({ onConnectConsoleNext, onDefib, style, withSafeArea } = quest);
  const tmp = useQuestRewardClaimHandler({ quest, sourceQuestContent });
  let obj = quest(10464);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = quest(10464);
  const isQuestProgressing = obj1.useIsQuestProgressing(quest);
  let obj2 = quest(10464);
  let obj3 = quest(10464);
  xboxAndPlaystationAccounts = obj3.useConnectedAccounts().xboxAndPlaystationAccounts;
  const items = [quest, xboxAndPlaystationAccounts];
  const memo = React.useMemo(() => {
    const obj = quest(outer1_2[22]);
    return quest(outer1_2[22]).supportedConsoles(quest).filter((arg0) => {
      let closure_0 = arg0;
      return outer1_1.find((type) => type.type === closure_0);
    });
  }, items);
  let obj4 = quest(13990);
  const hasWatchVideoOnMobileTasks = obj4.useHasWatchVideoOnMobileTasks(quest.config);
  let obj5 = quest(13990);
  const mobileActivityQuest = obj5.useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  let obj6 = quest(10926);
  const primaryCtaCopy = obj6.usePrimaryCtaCopy({ quest, application: questApplication });
  let obj7 = quest(14019);
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
  if (step !== quest(14016).QuestBottomSheetStep.TASK_SELECT) {
    obj = { onLayout: quest.onLayout };
    if (quest(14016).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      obj1 = { onPress: onConnectConsoleNext, disabled: 0 === memo.length };
      let tmp27 = callback2(NextButton, obj1);
    } else {
      tmp27 = null;
      if (quest(14016).QuestBottomSheetStep.TASK_STATUS === step) {
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
          obj4 = { grow: true, size: "lg", onPress: mobileActivityPressHandler, text: primaryCtaCopy, icon: quest(10919).getPrimaryCtaIcon(quest) };
          tmp25Result = callback2(quest(4543).Button, obj4);
          const obj13 = quest(10919);
        } else {
          if (callback(obj2.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === quest(4979).TaskPlatformScreen.CONSOLE) {
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
      const intl = quest(1212).intl;
      obj7.accessibilityLabel = intl.string(quest(1212).t["13/7kX"]);
      obj7.variant = "secondary";
      obj7.icon = callback2(quest(5091).ArrowLargeLeftIcon, {});
      obj7.onPress = onBack;
      obj7.size = "lg";
      tmp30 = callback2(quest(7771).IconButton, obj7);
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
