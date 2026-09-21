// Module ID: 17273
// Function ID: 17274
// Name: BadgeCustomizationProfileCoachmark
// Dependencies: [19, 1376, 2042, 558, 568, 4418, 504, 1119, 4471, 10452, 2]

// Module 17273 (BadgeCustomizationProfileCoachmark)
import util from "util" /* 1119 */;
import native from "native" /* 4471 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onTryItOut) => {
  const cResult = markAsDismissed(568).c(19);
  ({ visible, markAsDismissed } = onTryItOut);
  onTryItOut = onTryItOut.onTryItOut;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return onTryItOut(dependencyMap[5]).canUsePremiumProfileCustomization(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = markAsDismissed(568);
  const stateFromStores = markAsDismissed(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["9JoKQb"]);
    cResult[2] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const intl2 = tmp(1119).intl;
    const t = tmp(1119).t;
    const stringResult1 = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    cResult[3] = stateFromStores;
    cResult[4] = stringResult1;
  } else {
    if (cResult[5] !== visible) {
      const obj2 = { type: "rive", rive: tmp(4471).BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: null };
      const obj3 = { dataBinding: null };
      const obj4 = { on: visible };
      obj3.dataBinding = obj4;
      obj2.riveProps = obj3;
      cResult[5] = visible;
      cResult[6] = obj2;
      let tmp13 = obj2;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== markAsDismissed) {
      const fn2 = function _() {
        return markAsDismissed(ContentDismissActionType.USER_DISMISS);
      };
      cResult[7] = markAsDismissed;
      cResult[8] = fn2;
      let tmp14 = fn2;
    } else {
      tmp14 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1119).intl;
      const stringResult2 = intl3.string(tmp(1119).t["4P5I8V"]);
      cResult[9] = stringResult2;
      let tmp15 = stringResult2;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === markAsDismissed) {
      if (cResult[11] === onTryItOut) {
        let tmp17 = cResult[12];
      }
      if (cResult[13] === tmp10) {
        if (cResult[14] === tmp13) {
          if (cResult[15] === tmp14) {
            if (cResult[16] === tmp17) {
              if (cResult[17] === visible) {
                let tmp18 = cResult[18];
              }
              const coachmark = tmp(10452).useCoachmark(onTryItOut.targetRef, tmp18);
              return null;
            }
          }
        }
      }
      const obj5 = { title: tmp8, description: tmp10, visible, position: "bottom", gradientColor: "blue", graphic: tmp13, onDismiss: tmp14, buttonLabel: tmp15, buttonVariant: "primary", onButtonPress: tmp17 };
      cResult[13] = tmp10;
      cResult[14] = tmp13;
      cResult[15] = tmp14;
      cResult[16] = tmp17;
      cResult[17] = visible;
      cResult[18] = obj5;
      tmp18 = obj5;
    }
    const fn3 = function y() {
      markAsDismissed(ContentDismissActionType.TAKE_ACTION);
      onTryItOut();
    };
    cResult[10] = markAsDismissed;
    cResult[11] = onTryItOut;
    cResult[12] = fn3;
    tmp17 = fn3;
  }
}) : ((visible) => {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  const onTryItOut = visible.onTryItOut;
  const items = [UserStore];
  const stateFromStores = visible(onTryItOut[6]).useStateFromStores(items, () => markAsDismissed(onTryItOut[5]).canUsePremiumProfileCustomization(currentUser.getCurrentUser()));
  const items1 = [stateFromStores, visible, markAsDismissed, onTryItOut];
  const memo = stateFromStores.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", gradientColor: "blue", graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["9JoKQb"]);
    const intl2 = util.intl;
    const t = util.t;
    obj.description = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    obj.visible = visible;
    const obj2 = { type: "rive", rive: native.BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: { dataBinding: { on: visible } } };
    obj.graphic = obj2;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    const intl3 = tmp(1119).intl;
    obj.buttonLabel = intl3.string(util.t["4P5I8V"]);
    obj.onButtonPress = function onButtonPress() {
      markAsDismissed(constants.TAKE_ACTION);
      onTryItOut();
    };
    return obj;
  }, items1);
  let obj = visible(onTryItOut[6]);
  const coachmark = visible(onTryItOut[9]).useCoachmark(visible.targetRef, memo);
  return null;
});
