// Module ID: 15280
// Function ID: 15281
// Name: BountiesModal
// Dependencies: [19, 21, 558, 568, 15281, 15282, 15331, 11947, 11489, 2]

// Module 15280 (BountiesModal)
import BountiesModalTypes from "BountiesModalTypes" /* 15281 */;
import BountiesModalContentScrollDefault from "BountiesModalContentScroll" /* 15282 */;
import BountiesModalContentDefault from "BountiesModalContent" /* 15331 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const bounty_main = "bounty_main";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((bountyId) => {
  const cResult = bountyId(variant[3]).c(11);
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  variant = bountyId.variant;
  const bounty = bountyId.bounty;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return null;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === bounty) {
    if (cResult[2] === bountyId) {
      if (cResult[3] === sourceQuestContent) {
        if (cResult[4] === variant) {
          let tmp5 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              obj = bountyId(variant[7]);
              applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
          const items = [];
          cResult[6] = C;
          cResult[7] = items;
          let tmp7 = items;
          const tmp6 = C;
        } else {
          class C {
            constructor() {
              obj = bountyId(variant[7]);
              applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
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
              obj = bountyId(variant[7]);
              applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
          cResult[8] = tmp11;
          const tmp10 = tmp11;
        } else {
          class C {
            constructor() {
              obj = bountyId(variant[7]);
              applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
        }
        if (cResult[9] !== tmp5) {
          class C {
            constructor() {
              obj = bountyId(variant[7]);
              applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
          let obj2 = { hideTitle: true, initialRouteName: bounty_main, screens: tmp5, viewStyle: tmp10 };
          const tmp14 = jsx(bountyId(variant[8]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: tmp5, viewStyle: tmp10 });
          cResult[9] = tmp5;
          cResult[10] = tmp14;
          const tmp12 = tmp14;
        } else {
          class C {
            constructor() {
              obj = bountyId(variant[7]);
              applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
              return bountyId(variant[7]).restoreDefaultOrientationLock;
            }
          }
        }
        return tmp12;
      }
    }
  }
  const obj3 = { [closure_5]: obj4 };
  cResult[1] = bounty;
  cResult[2] = bountyId;
  cResult[3] = sourceQuestContent;
  cResult[4] = variant;
  cResult[5] = obj3;
  tmp5 = obj3;
}) : ((bountyId) => {
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
        if (closure_1_2 === bountyId(variant[4]).BountiesModalVariant.VERTICAL_SCROLL) {
          const obj2 = { bountyId, sourceQuestContent };
          let tmp7 = jsx(sourceQuestContent(tmp[5]), { bountyId, sourceQuestContent });
        } else {
          const obj = { bountyId, sourceQuestContent, bounty };
          tmp7 = jsx(sourceQuestContent(tmp[6]), { bountyId, sourceQuestContent, bounty });
        }
        return tmp7;
      }
    }
  }), items);
  const layoutEffect = bounty.useLayoutEffect(() => {
    bountyId(variant[7]).applyOrientationLock("PORTRAIT");
    return bountyId(variant[7]).restoreDefaultOrientationLock;
  }, []);
  return jsx(bountyId(variant[8]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } });
}));
