// Module ID: 15089
// Function ID: 15090
// Name: BountiesModal
// Dependencies: [19, 21, 558, 576, 15090, 15091, 15142, 11170, 11213, 2]

// Module 15089 (BountiesModal)
import Fragment from "Fragment" /* 21 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15090 */;
import BountiesModalContentScrollDefault from "BountiesModalContentScroll" /* 15091 */;
import BountiesModalContentDefault from "BountiesModalContent" /* 15142 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const bounty_main = "bounty_main";
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesModal(bountyId) {
  let first;
  let obj4;
  let variant;
  let obj = bountyId(variant[3]);
  const cResult = obj.c(11);
  const tmp = bountyId;
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  const tmp2 = variant;
  variant = bountyId.variant;
  const bounty = bountyId.bounty;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return null;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === bounty) {
    if (cResult[2] === bountyId) {
      if (cResult[3] === sourceQuestContent) {
        let tmp5;
        let tmp7;
        let tmp6;
        let tmp10;
        let tmp12;
        if (cResult[4] === variant) {
          tmp5 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              const obj = bountyId(variant[7]);
              obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
          const items = [];
          cResult[6] = C;
          cResult[7] = items;
          tmp7 = items;
          tmp6 = C;
        } else {
          class C {
            constructor() {
              const obj = bountyId(variant[7]);
              obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
          tmp7 = cResult[7];
        }
        const layoutEffect = bounty.useLayoutEffect(tmp6, tmp7);
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              const obj = bountyId(variant[7]);
              obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
          cResult[8] = tmp11;
          tmp10 = tmp11;
        } else {
          class C {
            constructor() {
              const obj = bountyId(variant[7]);
              obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
        }
        if (cResult[9] !== tmp5) {
          class C {
            constructor() {
              const obj = bountyId(variant[7]);
              obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
          const tmp14 = jsx(tmp(tmp2[8]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: tmp5, viewStyle: tmp10 });
          cResult[9] = tmp5;
          cResult[10] = tmp14;
          tmp12 = tmp14;
        } else {
          class C {
            constructor() {
              const obj = bountyId(variant[7]);
              obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
        }
        return tmp12;
      }
    }
  }
  const obj3 = { [closure_5]: obj4 };
  obj4 = {
    fullscreen: true,
    headerLeft: first,
    render() {
      let tmp7;
      if (variant === BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL) {
        tmp7 = jsx(BountiesModalContentScrollDefault, { bountyId, sourceQuestContent });
      } else {
        tmp7 = jsx(BountiesModalContentDefault, { bountyId, sourceQuestContent, bounty });
      }
      return tmp7;
    }
  };
  cResult[1] = bounty;
  cResult[2] = bountyId;
  cResult[3] = sourceQuestContent;
  cResult[4] = variant;
  cResult[5] = obj3;
  tmp5 = obj3;
}) : (function BountiesModal(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  const variant = bountyId.variant;
  const bounty = bountyId.bounty;
  const items = [bounty, bountyId, sourceQuestContent, variant];
  const memo = bounty.useMemo(() => ({
    [closure_2_5]: {
      fullscreen: true,
      headerLeft() {
        return null;
      },
      render() {
        let tmp7;
        if (closure_1_2 === bountyId(variant[4]).BountiesModalVariant.VERTICAL_SCROLL) {
          tmp7 = jsx(sourceQuestContent(tmp[5]), { bountyId, sourceQuestContent });
        } else {
          tmp7 = jsx(sourceQuestContent(tmp[6]), { bountyId, sourceQuestContent, bounty });
        }
        return tmp7;
      }
    }
  }), items);
  const layoutEffect = bounty.useLayoutEffect(() => {
    const obj = bountyId(variant[7]);
    obj.applyOrientationLock("PORTRAIT");
    return bountyId(variant[7]).restoreDefaultOrientationLock;
  }, []);
  return jsx(bountyId(variant[8]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } });
}));
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default memoResult;
