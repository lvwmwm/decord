// Module ID: 16706
// Function ID: 16707
// Name: useYouBarCoachmark
// Dependencies: [32, 19, 4580, 2042, 558, 568, 1119, 2031, 4497, 13389, 14981, 1489, 13967, 4787, 504, 7632, 16707, 10452, 2]

// Module 16706 (useYouBarCoachmark)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import Link from "Link" /* 1489 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 13389 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 14981 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4580 */;

require = fn;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
let closure_6 = [];
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = markAsDismissed(568).c(7);
  markAsDismissed = markAsDismissed.markAsDismissed;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.gMFchc);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t["V3j11+"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] !== markAsDismissed) {
    const fn = function c() {
      return markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[2] = markAsDismissed;
    cResult[3] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  const tmp9 = markAsDismissed.visibleContent === markAsDismissed(2031).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
  if (cResult[4] === tmp9) {
    if (cResult[5] === tmp8) {
      let tmp10 = cResult[6];
    }
    return tmp10;
  }
  const obj2 = { title: tmp4, description: tmp5, position: "top", visible: tmp9, onDismiss: tmp8 };
  cResult[4] = tmp9;
  cResult[5] = tmp8;
  cResult[6] = obj2;
  tmp10 = obj2;
}) : ((visibleContent) => {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  const items = [markAsDismissed, visibleContent];
  return noop.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.gMFchc);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["V3j11+"]);
    obj.visible = visibleContent === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    return obj;
  }, items);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = ReactCompilerGating.isReactCompilerEnabled() ? ((isQuestRendered) => {
  const cResult = c.c(16);
  const animatedRef = ReanimatedRexport.useAnimatedRef();
  const isInPrivateProfilesExperiment = PrivateProfilesExperiment.useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  const isTinyBroncoEligible = TinyBroncoLazy.useIsTinyBroncoEligible();
  const isFocused = Link.useIsFocused();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    class C {
      constructor() {
        obj = closure_1_0(closure_1_1[12]);
        obj1 = { from: "authed", unit: closure_1_0(closure_1_1[13]).TimeUnits.DAYS };
        tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
        tmp2 = null != closure_1_4.getGuildId() && tmp;
        return tmp2;
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp8 = items;
    tmp9 = C;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
  if (!isQuestRendered.isQuestRendered) {
    if (isFocused) {
      if (cResult[2] === isInPrivateProfilesExperiment) {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === isTinyBroncoEligible) {
            let tmp12 = cResult[5];
          }
        }
      }
      const items1 = [];
      if (stateFromStores) {
        items1.push(tmp(2031).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
      }
      class C {
        constructor() {
          obj = closure_1_0(closure_1_1[12]);
          obj1 = { from: "authed", unit: closure_1_0(closure_1_1[13]).TimeUnits.DAYS };
          tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
          tmp2 = null != closure_1_4.getGuildId() && tmp;
          return tmp2;
        }
      }
      if (isTinyBroncoEligible) {
        items1.push(tmp(2031).DismissibleContent.TINY_BRONCO);
      }
      cResult[2] = isInPrivateProfilesExperiment;
      cResult[3] = stateFromStores;
      cResult[4] = isTinyBroncoEligible;
      cResult[5] = items1;
      tmp12 = items1;
    }
    class C {
      constructor() {
        obj = closure_1_0(closure_1_1[12]);
        obj1 = { from: "authed", unit: closure_1_0(closure_1_1[13]).TimeUnits.DAYS };
        tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
        tmp2 = null != closure_1_4.getGuildId() && tmp;
        return tmp2;
      }
    }
    const tmpResult4 = tmp(7632);
    [tmp17, tmp18] = tmp(7632).useSelectedDismissibleContent(tmp12);
    if (cResult[6] === tmp18) {
      if (cResult[9] === tmp18) {
        if (cResult[10] === tmp17) {
          let tmp22 = cResult[11];
        }
        const privateProfileCoachmarkProps = tmp(16707).usePrivateProfileCoachmarkProps(tmp22);
        class C {
          constructor() {
            obj = closure_1_0(closure_1_1[12]);
            obj1 = { from: "authed", unit: closure_1_0(closure_1_1[13]).TimeUnits.DAYS };
            tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
            tmp2 = null != closure_1_4.getGuildId() && tmp;
            return tmp2;
          }
        }
        const coachmark = obj10.useCoachmark(animatedRef, privateProfileCoachmarkProps);
        const tmpResult5 = tmp(16707);
        const coachmark1 = tmp(10452).useCoachmark(animatedRef, tmp21);
        if (cResult[12] === animatedRef) {
          if (cResult[13] === tmp18) {
            if (cResult[14] === tmp17) {
              let tmp27 = cResult[15];
            }
            return tmp27;
          }
        }
        const obj6 = { animatedRef, visibleContent: tmp17, markAsDismissed: tmp18 };
        cResult[12] = animatedRef;
        cResult[13] = tmp18;
        cResult[14] = tmp17;
        cResult[15] = obj6;
        tmp27 = obj6;
        const tmpResult6 = tmp(10452);
      }
      class C {
        constructor() {
          obj = closure_1_0(closure_1_1[12]);
          obj1 = { from: "authed", unit: closure_1_0(closure_1_1[13]).TimeUnits.DAYS };
          tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
          tmp2 = null != closure_1_4.getGuildId() && tmp;
          return tmp2;
        }
      }
      tmp23[0] = tmp17;
      tmp23[1] = tmp18;
      cResult[9] = tmp18;
      cResult[10] = tmp17;
      cResult[11] = tmp23;
      tmp22 = tmp23;
    }
    const obj7 = { visibleContent: tmp17, markAsDismissed: tmp18 };
    cResult[6] = tmp18;
    cResult[7] = tmp17;
    cResult[8] = obj7;
    const tmp16 = _slicedToArray(tmp(7632).useSelectedDismissibleContent(tmp12), 2);
  }
  tmp12 = closure_6;
}) : ((isQuestRendered) => {
  isQuestRendered = isQuestRendered.isQuestRendered;
  let isInPrivateProfilesExperiment;
  let stateFromStores;
  const animatedRef = isQuestRendered(isInPrivateProfilesExperiment[8]).useAnimatedRef();
  let obj = isQuestRendered(isInPrivateProfilesExperiment[8]);
  isInPrivateProfilesExperiment = isQuestRendered(isInPrivateProfilesExperiment[9]).useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  let obj2 = isQuestRendered(isInPrivateProfilesExperiment[9]);
  const isTinyBroncoEligible = isQuestRendered(isInPrivateProfilesExperiment[10]).useIsTinyBroncoEligible();
  const obj3 = isQuestRendered(isInPrivateProfilesExperiment[10]);
  const isFocused = isQuestRendered(isInPrivateProfilesExperiment[11]).useIsFocused();
  const obj4 = isQuestRendered(isInPrivateProfilesExperiment[11]);
  let items = [stateFromStores];
  stateFromStores = isQuestRendered(isInPrivateProfilesExperiment[14]).useStateFromStores(items, () => {
    const obj = isQuestRendered(isInPrivateProfilesExperiment[12]);
    const obj2 = { from: "authed", unit: isQuestRendered(isInPrivateProfilesExperiment[13]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed({ from: "authed", unit: isQuestRendered(isInPrivateProfilesExperiment[13]).TimeUnits.DAYS }) >= 10;
    return null != stateFromStores.getGuildId() && obj.getFirstInstallTimeElapsed({ from: "authed", unit: isQuestRendered(isInPrivateProfilesExperiment[13]).TimeUnits.DAYS }) >= 10;
  });
  const items1 = [isInPrivateProfilesExperiment, isQuestRendered, stateFromStores, isTinyBroncoEligible, isFocused];
  const memo = isFocused.useMemo(() => {
    if (!isQuestRendered) {
      if (isFocused) {
        const items = [];
        if (stateFromStores) {
          items.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        if (isInPrivateProfilesExperiment) {
          items.push(dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        }
        if (isTinyBroncoEligible) {
          items.push(dismissible_content.DismissibleContent.TINY_BRONCO);
        }
        return items;
      }
    }
    return closure_6;
  }, items1);
  const obj5 = isQuestRendered(isInPrivateProfilesExperiment[14]);
  const obj6 = isQuestRendered(isInPrivateProfilesExperiment[15]);
  [tmp8, tmp9] = isTinyBroncoEligible(isQuestRendered(isInPrivateProfilesExperiment[15]).useSelectedDismissibleContent(memo), 2);
  const tmp7 = isTinyBroncoEligible(isQuestRendered(isInPrivateProfilesExperiment[15]).useSelectedDismissibleContent(memo), 2);
  const tmp10 = closure_7({ visibleContent, markAsDismissed });
  const privateProfileCoachmarkProps = isQuestRendered(isInPrivateProfilesExperiment[16]).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj7 = isQuestRendered(isInPrivateProfilesExperiment[16]);
  const coachmark = isQuestRendered(isInPrivateProfilesExperiment[17]).useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj8 = isQuestRendered(isInPrivateProfilesExperiment[17]);
  const coachmark1 = isQuestRendered(isInPrivateProfilesExperiment[17]).useCoachmark(animatedRef, tmp10);
  return { animatedRef, visibleContent, markAsDismissed };
});
