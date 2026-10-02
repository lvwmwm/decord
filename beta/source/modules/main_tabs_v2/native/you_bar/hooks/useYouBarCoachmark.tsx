// Module ID: 16002
// Function ID: 16003
// Name: useYouBarCoachmark
// Dependencies: [32, 19, 4657, 2048, 558, 576, 1127, 2035, 4570, 12669, 14263, 1492, 13245, 4866, 504, 6807, 16003, 9656, 2]

// Module 16002 (useYouBarCoachmark)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1127 */;
import Link from "Link" /* 1492 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 12669 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 14263 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let isQuestRendered, obj1;

let tmp;
const get_initialized = tmp(504);
const dismissible_content = tmp(2035);
const useSelectedDismissibleContent = tmp(6807);
const useCoachmark = tmp(9656);
const usePrivateProfileCoachmarkProps = tmp(16003);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_6 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = markAsDismissed(576);
  const cResult = obj.c(7);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visibleContent = markAsDismissed.visibleContent;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(markAsDismissed(1127).t.gMFchc);
    const intl2 = tmp(1127).intl;
    const stringResult1 = intl2.string(markAsDismissed(1127).t["V3j11+"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const YOU_BAR_DM_SWIPE_COACHMARK = tmp(2035).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
  if (cResult[2] !== markAsDismissed) {
    const fn = function c() {
      return markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[2] = markAsDismissed;
    cResult[3] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === visibleContent === YOU_BAR_DM_SWIPE_COACHMARK) {
    let tmp10;
    if (cResult[5] === tmp8) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const obj2 = { title: tmp4, description: tmp5, position: "top", visible: visibleContent === YOU_BAR_DM_SWIPE_COACHMARK, onDismiss: tmp8 };
  cResult[4] = visibleContent === YOU_BAR_DM_SWIPE_COACHMARK;
  cResult[5] = tmp8;
  cResult[6] = obj2;
  tmp10 = obj2;
}) : ((visibleContent) => {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  const items = [markAsDismissed, visibleContent];
  return react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.gMFchc),
      description: intl2.string(intl3.t["V3j11+"]),
      position: "top",
      visible: visibleContent === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isQuestRendered) => {
  let guildId;
  let tmp17;
  let tmp18;
  let tmp8;
  let tmp9;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(16);
  isQuestRendered = isQuestRendered.isQuestRendered;
  let obj2 = ReanimatedRexport;
  const animatedRef = obj2.useAnimatedRef();
  const obj3 = PrivateProfilesExperiment;
  const isInPrivateProfilesExperiment = obj3.useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  const obj4 = TinyBroncoLazy;
  const isTinyBroncoEligible = obj4.useIsTinyBroncoEligible();
  const obj5 = Link;
  const isFocused = obj5.useIsFocused();
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (!isQuestRendered) {
    let tmp12;
    if (isFocused) {
      if (cResult[2] === isInPrivateProfilesExperiment) {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === isTinyBroncoEligible) {
            tmp12 = cResult[5];
          }
        }
      }
      const items1 = [];
      if (stateFromStores) {
        items1.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
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
        items1.push(dismissible_content.DismissibleContent.TINY_BRONCO);
      }
      cResult[2] = isInPrivateProfilesExperiment;
      cResult[3] = stateFromStores;
      cResult[4] = isTinyBroncoEligible;
      cResult[5] = items1;
      tmp12 = items1;
    }
    const tmpResult4 = useSelectedDismissibleContent;
    class C {
      constructor() {
        obj = closure_1_0(closure_1_1[12]);
        obj1 = { from: "authed", unit: closure_1_0(closure_1_1[13]).TimeUnits.DAYS };
        tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
        tmp2 = null != closure_1_4.getGuildId() && tmp;
        return tmp2;
      }
    }
    [tmp17, tmp18] = tmpResult4.useSelectedDismissibleContent(tmp12);
    _slicedToArray(tmpResult4.useSelectedDismissibleContent(tmp12), 2);
    if (cResult[6] === tmp18) {
      if (cResult[9] === tmp18) {
        let tmp22;
        if (cResult[10] === tmp17) {
          tmp22 = cResult[11];
        }
        const tmpResult5 = usePrivateProfileCoachmarkProps;
        const privateProfileCoachmarkProps = tmpResult5.usePrivateProfileCoachmarkProps(tmp22);
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
        const tmpResult6 = useCoachmark;
        const coachmark1 = tmpResult6.useCoachmark(animatedRef, tmp21);
        if (cResult[12] === animatedRef) {
          if (cResult[13] === tmp18) {
            let tmp27;
            if (cResult[14] === tmp17) {
              tmp27 = cResult[15];
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
  }
  tmp12 = closure_6;
}) : ((isQuestRendered) => {
  let tmp8;
  let tmp9;
  isQuestRendered = isQuestRendered.isQuestRendered;
  let isInPrivateProfilesExperiment;
  let stateFromStores;
  let obj = isQuestRendered(isInPrivateProfilesExperiment[8]);
  const animatedRef = obj.useAnimatedRef();
  let obj2 = isQuestRendered(isInPrivateProfilesExperiment[9]);
  isInPrivateProfilesExperiment = obj2.useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  const obj3 = isQuestRendered(isInPrivateProfilesExperiment[10]);
  const isTinyBroncoEligible = obj3.useIsTinyBroncoEligible();
  const obj4 = isQuestRendered(isInPrivateProfilesExperiment[11]);
  const isFocused = obj4.useIsFocused();
  let items = [stateFromStores];
  const obj5 = isQuestRendered(isInPrivateProfilesExperiment[14]);
  stateFromStores = obj5.useStateFromStores(items, () => {
    const obj = isQuestRendered(isInPrivateProfilesExperiment[12]);
    const obj2 = { from: "authed", unit: isQuestRendered(isInPrivateProfilesExperiment[13]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj2) >= 10;
    const tmp2 = null != stateFromStores.getGuildId() && tmp;
    return tmp2;
  });
  const items1 = [isInPrivateProfilesExperiment, isQuestRendered, stateFromStores, isTinyBroncoEligible, isFocused];
  const memo = isFocused.useMemo(() => {
    const tmp = isQuestRendered;
    if (!tmp) {
      const tmp2 = isFocused;
      if (tmp2) {
        const items = [];
        const tmp3 = stateFromStores;
        if (tmp3) {
          items.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        const tmp7 = isInPrivateProfilesExperiment;
        if (tmp7) {
          items.push(dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        }
        const tmp11 = isTinyBroncoEligible;
        if (tmp11) {
          items.push(dismissible_content.DismissibleContent.TINY_BRONCO);
        }
        return items;
      }
    }
    return closure_6;
  }, items1);
  const obj6 = isQuestRendered(isInPrivateProfilesExperiment[15]);
  let tmp7 = isTinyBroncoEligible(obj6.useSelectedDismissibleContent(memo), 2);
  [tmp8, tmp9] = tmp7;
  const tmp10 = closure_7({ visibleContent, markAsDismissed });
  const obj7 = isQuestRendered(isInPrivateProfilesExperiment[16]);
  const privateProfileCoachmarkProps = obj7.usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj8 = isQuestRendered(isInPrivateProfilesExperiment[17]);
  const coachmark = obj8.useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj9 = isQuestRendered(isInPrivateProfilesExperiment[17]);
  const coachmark1 = obj9.useCoachmark(animatedRef, tmp10);
  return { animatedRef, visibleContent, markAsDismissed };
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = tmp2;
