// Module ID: 15950
// Function ID: 15951
// Name: FavoritesGuildCoachmarkIntro
// Dependencies: [32, 19, 15921, 1074, 2042, 21, 4566, 9696, 15945, 1115, 3361, 15951, 10589, 2]
// Exports: default

// Module 15950 (FavoritesGuildCoachmarkIntro)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _modDef3361 from "module_3361" /* 3361 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 9696 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 15945 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 15921 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const FAVORITES = Constants.FAVORITES;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const __initData = { code: "function FavoritesGuildCoachmarkIntroTsx1(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}" };
const __initData2 = { code: "function FavoritesGuildCoachmarkIntroTsx2(atTop,wasAtTop){const{runOnJS,setScrolledToTop}=this.__closure;if(atTop===wasAtTop){return;}runOnJS(setScrolledToTop)(atTop);}" };
let result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkIntro.tsx");

export default function FavoritesGuildCoachmarkIntro(markAsDismissed) {
  let closure_3;
  let tmp3;
  let visible;
  markAsDismissed = markAsDismissed.markAsDismissed;
  visible = undefined;
  let onDismiss;
  let callback1;
  const targetRef = markAsDismissed.targetRef;
  const scrollPosition = callback1.getState().scrollPosition;
  [visible, tmp3] = onDismiss.useState(() => scrollPosition.get() <= 0);
  _slicedToArray = tmp3;
  let obj = markAsDismissed(visible[6]);
  const fn = function v() {
    return scrollPosition.get() <= 0;
  };
  fn.__closure = { scrollPosition };
  fn.__workletHash = 6053526688640;
  fn.__initData = __initData;
  const fn2 = function p(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_3)(arg0);
    }
  };
  fn2.__closure = { runOnJS: markAsDismissed(visible[6]).runOnJS, setScrolledToTop: tmp3 };
  fn2.__workletHash = 13648062364539;
  fn2.__initData = __initData2;
  ({ runOnJS: markAsDismissed(visible[6]).runOnJS, setScrolledToTop: tmp3 });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items = [markAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [markAsDismissed];
  callback1 = onDismiss.useCallback(() => {
    const obj = FavoritesGuildAnalytics;
    const result = obj.setNextFavoritesGuildViewSource("intro_dc");
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  const items2 = [visible, onDismiss, callback1];
  const memo = onDismiss.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = {
      visible,
      position: "bottom",
      title: intl.string(_modDef3361["bu/mLv"]),
      description: intl2.string(_modDef3361.kxQJ7q),
      onDismiss,
      renderImgComponent() {
        return closure_1_8(scrollPosition(visible[11]), {});
      },
      buttonLabel: intl3.string(_modDef3361["vN/KQ9"]),
      onButtonPress: callback1
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items2);
  const obj3 = markAsDismissed(visible[12]);
  const coachmark = obj3.useCoachmark(targetRef, memo);
  return null;
};
