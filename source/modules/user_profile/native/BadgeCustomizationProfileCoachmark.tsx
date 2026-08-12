// Module ID: 15952
// Function ID: 15953
// Name: BadgeCustomizationProfileCoachmark
// Dependencies: [19, 1922, 1388, 589, 4007, 1236, 8698, 2]
// Exports: default

// Module 15952 (BadgeCustomizationProfileCoachmark)
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
const result = require("ContentDismissActionType").fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default function BadgeCustomizationProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  const onTryItOut = visible.onTryItOut;
  let stateFromStores;
  const items = [mergeGuildAvatar];
  stateFromStores = visible(onTryItOut[3]).useStateFromStores(items, () => markAsDismissed(onTryItOut[4]).canUsePremiumProfileCustomization(currentUser.getCurrentUser()));
  const items1 = [stateFromStores, visible, markAsDismissed, onTryItOut];
  const memo = stateFromStores.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = visible(onTryItOut[5]).intl;
    obj[0] = intl.string(visible(onTryItOut[5]).t["9JoKQb"]);
    const intl2 = visible(onTryItOut[5]).intl;
    const t = visible(onTryItOut[5]).t;
    obj[1] = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    obj[2] = visible;
    obj[4] = function onDismiss() {
      return callback(outer1_5.USER_DISMISS);
    };
    const intl3 = tmp(tmp2[5]).intl;
    obj[5] = intl3.string(visible(onTryItOut[5]).t["4P5I8V"]);
    obj[7] = function onButtonPress() {
      callback(outer1_5.TAKE_ACTION);
      callback2();
    };
    return obj;
  }, items1);
  let obj = visible(onTryItOut[3]);
  const coachmark = visible(onTryItOut[6]).useCoachmark(visible.targetRef, memo);
  return null;
};
