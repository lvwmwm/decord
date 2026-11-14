// Module ID: 19844
// Function ID: 19845
// Name: HexagonCampaignExpiredPromoSheet
// Dependencies: [5, 32, 19, 5152, 21, 17085, 5341, 17635, 5899, 6015, 1113, 8834, 17104, 10713, 17642, 4516, 5929, 5936, 2]
// Exports: default

// Module 19844 (HexagonCampaignExpiredPromoSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef4516 from "module_4516" /* 4516 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import Text_Text from "Text/Text" /* 5929 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _undefined, c4, c5, dependencyMap, importDefault, ref;

let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignExpiredPromoSheet.tsx");

export default function HexagonCampaignExpiredPromoSheet(markAsDismissed) {
  let c1;
  let closure_3;
  let intl3;
  let onPress;
  let tmp4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  let callback;
  react = undefined;
  const tmp = markAsDismissed(17085);
  const useTrackHexagonCampaignContentViewed = tmp.useTrackHexagonCampaignContentViewed;
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(markAsDismissed(5341).QuestContent.AD_PERK_MODAL, markAsDismissed(17085).HexagonCampaignContentSurface.EXPIRED_SHEET, true);
  const tmp3 = callback(react.useState(false), 2);
  [tmp4, c1] = tmp3;
  dependencyMap = react.useRef(false);
  _asyncToGenerator = react.useRef(false);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let ref2;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            value = undefined;
            if (!ref.current) {
              if (!tmp.current) {
                tmp.current = true;
                value(true);
                value = false;
                ref = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj3.restoreExpiredHexagonCampaignPerks([]), done: false };
                obj3 = closure_0(ref[7]);
                return obj5;
              }
            }
            c5 = 3;
            return { value: false, done: true };
          }
        } else {
          if (1 === c4) {
            ref = 0;
            value = false;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            ref = 0;
          }
          ref.current = false;
          value(false);
          const tmp12 = value;
          if (tmp12) {
            ref.current = true;
            closure_0(closure_0);
          }
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        }
      } catch (tmp26) {
        if (0 === ref) {
          c5 = 3;
          throw tmp26;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items = [markAsDismissed];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  let obj = markAsDismissed(5899);
  const unmountEffect = obj.useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let intl;
    let v1;
    if (ref === 2) {
      ref = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        ref = 2;
        if (0 === _undefined) {
          if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const current = ref2.current || ref.current;
            if (!current) {
              _undefined = 1;
              ref = 1;
              const obj4 = { value: callback(constants.TAKE_ACTION), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          ref = 3;
          throw value;
        } else if (arg0 === 2) {
          ref = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else if (!value) {
          const obj = { text: intl.string(tmp3(ref[10]).t.F8FvUy) };
          const open = _undefined(ref[9]).open;
          const tmp7 = _undefined(ref[9]);
          intl = tmp3(ref[10]).intl;
          open("HEXAGON_CAMPAIGN_RESTORE_ERROR", obj);
        }
        ref = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp14) {
        ref = 3;
        throw tmp14;
      }
    }
  }), items1);
  const callback2 = react.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  react = react.useCallback(() => {
    const obj = markAsDismissed(ref[5]);
    const obj2 = { content: markAsDismissed(ref[6]).QuestContent.AD_PERK_MODAL, questContentCTA: markAsDismissed(ref[11]).QuestContentCTA.LEARN_MORE };
    const result = obj.trackHexagonCampaignContentClicked(obj2);
    const obj3 = markAsDismissed(ref[12]);
    const result1 = obj3.openHexagonCampaignLearnMore();
  }, []);
  const PromoSheet = markAsDismissed(10713).PromoSheet;
  let intl = markAsDismissed(1113).intl;
  const intl2 = markAsDismissed(1113).intl;
  let obj3 = {
    learnMoreHook(children, arg1) {
      return jsx(Text_Text.Text, { variant: "heading-md/medium", color: "text-link", accessibilityRole: "link", onPress, children }, arg1);
    }
  };
  let obj4 = { size: "lg", grow: true, text: intl3.string(markAsDismissed(1113).t.i4jeWR), loading: tmp4, onPress: callback1 };
  const Button = markAsDismissed(5936).Button;
  intl3 = markAsDismissed(1113).intl;
  return <PromoSheet illustration={null} title={intl.string(_modDef4516.bZTNDw)} description={intl2.format(_modDef4516.uL0TOA, obj3)} onDismiss={callback2} actions={null} />;
};
