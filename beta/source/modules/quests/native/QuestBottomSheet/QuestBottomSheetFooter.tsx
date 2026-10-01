// Module ID: 14653
// Function ID: 14654
// Name: QuestBottomSheetFooter
// Dependencies: [32, 19, 17, 4825, 1372, 7116, 6572, 21, 576, 4836, 5759, 10681, 10694, 10699, 10508, 504, 4531, 6972, 10678, 14654, 5281, 10736, 10719, 14620, 10750, 14649, 14651, 7363, 1115, 5940, 10749, 10711, 14506, 7153, 7142, 7152, 5763, 7141, 1613, 1479, 4566, 4837, 5286, 2]
// Exports: default

// Module 14653 (QuestBottomSheetFooter)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7142 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7152 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7153 */;
import QuestUtils from "QuestUtils" /* 10678 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10699 */;
import ContentImpressionTrackerHooks from "ContentImpressionTrackerHooks" /* 10711 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10719 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 10736 */;
import AnalyticsHooks from "AnalyticsHooks" /* 10749 */;
import RefreshIcon from "RefreshIcon" /* 14506 */;
import QuestBottomSheetHooks from "QuestBottomSheetHooks" /* 14654 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import UserStore from "UserStore" /* 1372 */;
import QuestStore from "QuestStore" /* 7116 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c10;
let obj2;
let unpackModuleId;
function useQuestRewardClaimHandler(quest) {
  let confettiColors;
  let items5;
  let items6;
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
  let obj2 = quest(QUEST_BOTTOM_SHEET[12]);
  const items = [quest.config];
  let result = obj2.hasCollectiblesQuestReward(quest.config);
  const memo = sourceQuestContent.useMemo(() => {
    const obj = QuestCopyUtils;
    return obj.getDefaultReward(quest.config).skuId;
  }, items);
  const useFetchCollectiblesProduct = quest(QUEST_BOTTOM_SHEET[14]).useFetchCollectiblesProduct;
  let tmp9 = null;
  quest(QUEST_BOTTOM_SHEET[14]);
  if (progressState === quest(QUEST_BOTTOM_SHEET[11]).QuestProgressState.COMPLETED) {
    tmp9 = null;
    if (result) {
      tmp9 = memo;
    }
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(tmp9);
  const product = fetchCollectiblesProduct.product;
  c5 = product;
  isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [stateFromStores];
  const tmp3Result = quest(QUEST_BOTTOM_SHEET[15]);
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items1, () => {
    const obj = { isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id) };
    return obj;
  });
  isFetchingRewardCode = stateFromStoresObject.isFetchingRewardCode;
  const isClaimingReward = stateFromStoresObject.isClaimingReward;
  const items2 = [isFetchingRewardCode];
  const tmp3Result6 = quest(QUEST_BOTTOM_SHEET[15]);
  stateFromStores = tmp3Result6.useStateFromStores(items2, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let result;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const items3 = [isFetchingRewardCode];
  const tmp3Result7 = quest(QUEST_BOTTOM_SHEET[15]);
  stateFromStores1 = tmp3Result7.useStateFromStores(items3, () => {
    const currentUser = isFetchingRewardCode.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const items4 = [isFetching, isFetchingRewardCode];
  const memo1 = obj3.useMemo(() => isFetching || isFetchingRewardCode, items4);
  const tmp3Result8 = quest(QUEST_BOTTOM_SHEET[16]);
  const token = tmp3Result8.useToken(flag(tmp4[8]).colors.BACKGROUND_BASE_LOWER);
  const tmp3Result9 = quest(QUEST_BOTTOM_SHEET[16]);
  const token1 = tmp3Result9.useToken(flag(tmp4[8]).colors.BACKGROUND_BASE_LOW);
  quest(QUEST_BOTTOM_SHEET[16]);
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    const styles = product.styles;
    const obj4 = { buttonColors, confettiColors, backgroundColors: items5 };
    confettiColors = undefined;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    items5 = [flag(QUEST_BOTTOM_SHEET[17])(token1), flag(QUEST_BOTTOM_SHEET[17])(token), flag(QUEST_BOTTOM_SHEET[17])(tmp19)];
    product.styles = obj4;
  }
  const obj5 = {
    isLoading: memo1,
    isClaiming: isClaimingReward,
    claim: sourceQuestContent.useCallback(() => {
      const obj = QuestUtils;
      const obj2 = { quest, product, hideActionSheet: flag, questContent: QUEST_BOTTOM_SHEET, currentUserHasVerifiedEmailOrPhone: stateFromStores, currentUserHasVerifiedEmail: stateFromStores1, onSuccess, sourceQuestContent };
      return obj.handleRewardClaimThenView(obj2);
    }, items6)
  };
  items6 = [quest, product, stateFromStores, stateFromStores1, flag, QUEST_BOTTOM_SHEET, onSuccess, sourceQuestContent];
  return obj5;
}
function WatchTaskButton(arg0) {
  let disabled;
  let obj3;
  let onPressDisabled;
  let questId;
  let sourceQuestContent;
  let taskDetails;
  ({ questId, sourceQuestContent, taskDetails, disabled, onPressDisabled } = arg0);
  const obj = QuestBottomSheetHooks;
  const obj2 = { grow: true, size: "lg", onPress: obj.useWatchTaskPressHandler({ questId, sourceQuestContent }), disabled, onPressDisabled, text: obj3.getVideoQuestWatchCtaText(taskDetails) };
  const Button = components_Button_Button.Button;
  obj3 = MobileQuestVideoWatchCtaCopy;
  return authStore(Button, obj2);
}
function NextButton(arg0) {
  let disabled;
  let intl;
  let onPress;
  ({ onPress, disabled } = arg0);
  const obj = { grow: true, size: "lg", onPress, disabled, text: intl.string(intl2.t.a9OfTN) };
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  return authStore(Button, obj);
}
function DefibButton(arg0) {
  let disabled;
  let intl;
  let loading;
  let onPressDisabled;
  let require;
  let sourceQuestContent;
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ loading, disabled, onPressDisabled } = arg0);
  let obj = AnalyticsHooks;
  let closure_3 = obj.useTrackQuestContentClickedWithImpression();
  let obj2 = ContentImpressionTrackerHooks;
  const impressionId = obj2.useQuestImpressionId();
  let obj3 = {
    grow: true,
    size: "lg",
    variant: "secondary",
    loading,
    disabled,
    onPressDisabled,
    icon: closure_10(RefreshIcon.RefreshIcon, {}),
    iconPosition: "end",
    onPress(arg0) {
      const obj = AdAnalyticsInterfaceExperiment;
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: dependencyMap, impressionId };
        const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
        captureAdUserAction2;
        captureAdUserAction(obj2);
      } else {
        const obj3 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.DEFIBRILLATOR, sourceQuestContent: dependencyMap };
        closure_3(obj3);
      }
      if (importDefault != null) {
        tmp12(arg0);
      }
    },
    text: intl.string(intl2.t.nPThNb)
  };
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  return closure_10(Button, obj3);
}
function ClaimButton(arg0) {
  let disabled;
  let intl;
  let loading;
  let onPressDisabled;
  let require;
  let sourceQuestContent;
  ({ questId: require, onPress: importDefault, sourceQuestContent: dependencyMap } = arg0);
  ({ disabled, loading, onPressDisabled } = arg0);
  let obj = AnalyticsHooks;
  let closure_3 = obj.useTrackQuestContentClickedWithImpression();
  let obj2 = ContentImpressionTrackerHooks;
  const impressionId = obj2.useQuestImpressionId();
  let obj3 = {
    grow: true,
    size: "lg",
    disabled,
    onPressDisabled,
    loading,
    onPress() {
      const obj = AdAnalyticsInterfaceExperiment;
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_footer")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: dependencyMap, impressionId };
        const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
        captureAdUserAction2;
        captureAdUserAction(obj2);
      } else {
        const obj3 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.CLAIM_REWARD, sourceQuestContent: dependencyMap };
        closure_3(obj3);
      }
      importDefault();
    },
    text: intl.string(intl2.t.cfY4PE)
  };
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  return closure_10(Button, obj3);
}
function AnimatedFooter(arg0) {
  let backButton;
  let closure_0;
  let ctaButton;
  let items3;
  let onLayout;
  let style;
  let useReducedMotion;
  let withSafeArea;
  ({ backButton, withSafeArea } = arg0);
  ({ onLayout, ctaButton, style } = arg0);
  if (withSafeArea === undefined) {
    withSafeArea = true;
  }
  let width;
  let stateFromStores;
  let sharedValue;
  const tmp = null != backButton && false !== backButton;
  _require = tmp;
  const tmp2 = width;
  const bottom = width(stateFromStores[38])().bottom;
  const tmp4 = closure_13();
  width = width(stateFromStores[39])().width;
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num = 0;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  if (tmp) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items1 = [tmp, stateFromStores, sharedValue];
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (closure_0) {
      num = 1;
    }
    let num2 = 200;
    if (stateFromStores) {
      num2 = 0;
    }
    const result = set(withTiming(num, { duration: num2 }));
  }, items1);
  const fn = function b() {
    let items;
    const rect = { opacity: sharedValue.get(), position: "absolute", top: 0, left: 0, transform: items };
    items = [];
    const obj = { translateX: PX_16 };
    items[0] = obj;
    return rect;
  };
  const obj2 = { animation: sharedValue, H_PADDING_PX: PX_16 };
  fn.__closure = obj2;
  fn.__workletHash = 7564903336036;
  fn.__initData = __initData;
  const tmp5Result = require("ReanimatedRexport");
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  const fn2 = function y() {
    let interpolate;
    let items;
    let value;
    const obj = { width: interpolate(value, [0, 1], items), alignSelf: "flex-end" };
    interpolate = ReanimatedRexport.interpolate;
    items = [width - 2 * PX_16, ];
    ReanimatedRexport;
    value = sharedValue.get();
    const diff = width - 2.5 * PX_16;
    items[1] = diff - ButtonConstants.LARGE_BUTTON_HEIGHT;
    return obj;
  };
  const tmp5Result2 = require("ReanimatedRexport");
  fn2.__closure = { interpolate: require("ReanimatedRexport").interpolate, animation: sharedValue, windowWidth: width, H_PADDING_PX: PX_16, ICON_SIZE_PX: require("ButtonConstants").LARGE_BUTTON_HEIGHT };
  fn2.__workletHash = 9095621288509;
  fn2.__initData = __initData2;
  ({ interpolate: require("ReanimatedRexport").interpolate, animation: sharedValue, windowWidth: width, H_PADDING_PX: PX_16, ICON_SIZE_PX: require("ButtonConstants").LARGE_BUTTON_HEIGHT });
  const animatedStyle1 = tmp5Result2.useAnimatedStyle(fn2);
  const items2 = [tmp4.container, , ];
  const tmp13 = closure_11;
  const tmp14 = View;
  if (withSafeArea) {
    withSafeArea = { paddingBottom: tmp12 };
    const obj4 = { paddingBottom: tmp12 };
  }
  const obj5 = { style: items2, onLayout, children: items3 };
  items2[1] = withSafeArea;
  items2[2] = style;
  items3 = [closure_10(tmp2(stateFromStores[40]).View, { style: animatedStyle, children: backButton }), closure_10(tmp2(stateFromStores[40]).View, { style: animatedStyle1, children: ctaButton })];
  return tmp13(tmp14, obj5);
}
const View = react_native.View;
let closure_9 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let obj = { container: obj2 };
obj2 = { display: "flex", flexGrow: 1, flexShrink: 1, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}" };
const __initData2 = { code: "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}" };
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx");

export default function QuestBottomSheetFooter(quest) {
  let intl;
  let isClaiming;
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
  let tmp2Result2;
  let tmp41Result;
  let tmp41Result5;
  let withSafeArea;
  quest = quest.quest;
  ({ step, isDefibrilating } = quest);
  const onLayout = quest.onLayout;
  if (isDefibrilating === undefined) {
    isDefibrilating = false;
  }
  ({ onBack, sourceQuestContent } = quest);
  ({ onConnectConsoleNext, onDefib, style, withSafeArea } = quest);
  const tmp = useQuestRewardClaimHandler({ quest, sourceQuestContent });
  let obj = quest(10681);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const obj2 = quest(10681);
  const isQuestProgressing = obj2.useIsQuestProgressing(quest);
  const obj3 = quest(10681);
  const first = _slicedToArray(obj3.useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  const obj4 = quest(10681);
  const xboxAndPlaystationAccounts = obj4.useConnectedAccounts().xboxAndPlaystationAccounts;
  const items = [quest, xboxAndPlaystationAccounts];
  const memo = react.useMemo(() => {
    const obj = QuestPlatformUtils;
    const supportedConsolesResult = obj.supportedConsoles(quest);
    return supportedConsolesResult.filter((item) => {
      let closure_0 = item;
      return null != xboxAndPlaystationAccounts.find((type) => type.type === closure_0);
    });
  }, items);
  const obj5 = quest(14620);
  const hasWatchVideoOnMobileTasks = obj5.useHasWatchVideoOnMobileTasks(quest.config);
  const obj6 = quest(14620);
  const mobileActivityQuest = obj6.useMobileActivityQuest(quest);
  ({ isMobileActivityQuest, launchMobileActivity, questApplication } = mobileActivityQuest);
  const obj7 = quest(10750);
  const primaryCtaCopy = obj7.usePrimaryCtaCopy({ quest, application: questApplication });
  const userStatus = quest.userStatus;
  let completedAt;
  const obj8 = quest(14654);
  const obj9 = { questId: quest.id, sourceQuestContent, launchMobileActivity };
  const mobileActivityPressHandler = obj8.useMobileActivityPressHandler(obj9);
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let claimedAt;
  const tmp12 = null != completedAt;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  const tmp2Result = quest(10681);
  const isQuestAccessSuspended = tmp2Result.useIsQuestAccessSuspended();
  const obj10 = { disabled: true, onPressDisabled: xboxAndPlaystationAccounts(14649) };
  let tmp41Result6 = null;
  if (step !== quest(14651).QuestBottomSheetStep.TASK_SELECT) {
    const obj11 = { onLayout, ctaButton: tmp41Result, backButton: tmp41Result5, style, withSafeArea };
    const tmp42 = AnimatedFooter;
    if (quest(14651).QuestBottomSheetStep.CONSOLE_CONNECT === step) {
      const obj12 = { onPress: onConnectConsoleNext, disabled: 0 === memo.length };
      tmp41Result = tmp41(NextButton, obj12);
    } else {
      tmp41Result = null;
      if (quest(14651).QuestBottomSheetStep.TASK_STATUS === step) {
        let tmp41Result4;
        if (tmp12) {
          const obj13 = { questId: quest.id, onPress: tmp.claim, disabled: null != claimedAt, loading: isClaiming, sourceQuestContent };
          isClaiming = tmp.isLoading;
          const tmp33 = ClaimButton;
          if (!isClaiming) {
            isClaiming = tmp.isClaiming;
          }
          let tmp34 = null;
          if (isQuestAccessSuspended) {
            tmp34 = null;
            if (null == claimedAt) {
              tmp34 = obj10;
            }
          }
          const merged = Object.assign(tmp34);
          tmp41Result4 = tmp41(tmp33, obj13);
        } else if (hasWatchVideoOnMobileTasks) {
          let tmp29 = null;
          const obj14 = { questId: quest.id, taskDetails: questTaskDetails, sourceQuestContent };
          const tmp28 = WatchTaskButton;
          if (isQuestAccessSuspended) {
            tmp29 = obj10;
          }
          const merged1 = Object.assign(tmp29);
          tmp41Result4 = tmp41(tmp28, obj14);
        } else if (isMobileActivityQuest) {
          const obj15 = { grow: true, size: "lg", onPress: mobileActivityPressHandler, text: primaryCtaCopy, icon: tmp2Result2.getPrimaryCtaIcon(quest) };
          const Button = tmp2(5281).Button;
          let tmp24 = null;
          tmp2Result2 = quest(10678);
          if (isQuestAccessSuspended) {
            tmp24 = obj10;
          }
          const merged2 = Object.assign(tmp24);
          tmp41Result4 = tmp41(Button, obj15);
        } else {
          if (first === quest(5759).TaskPlatformScreen.CONSOLE) {
            if (!isQuestProgressing) {
              let tmp18 = null;
              const obj16 = { questId: quest.id, loading: isDefibrilating, disabled: isDefibrilating, onPress: onDefib, sourceQuestContent };
              const tmp17 = DefibButton;
              if (isQuestAccessSuspended) {
                tmp18 = obj10;
              }
              const merged3 = Object.assign(tmp18);
              tmp41Result4 = tmp41(tmp17, obj16);
            }
          }
          const obj17 = { questId: quest.id, onPress: tmp.claim, disabled: true, sourceQuestContent };
          tmp41Result4 = tmp41(ClaimButton, obj17);
        }
        tmp41Result = tmp41Result4;
      }
    }
    tmp41Result5 = null != onBack;
    if (tmp41Result5) {
      const obj18 = { accessibilityLabel: intl.string(quest(1115).t["13/7kX"]), variant: "secondary", icon: closure_10(quest(5940).ArrowLargeLeftIcon, {}), onPress: onBack, size: "lg" };
      const IconButton = tmp2(7363).IconButton;
      intl = tmp2(1115).intl;
      tmp41Result5 = tmp41(IconButton, obj18);
    }
    tmp41Result6 = tmp41(tmp42, obj11);
  }
  return tmp41Result6;
};
export { useQuestRewardClaimHandler };
