// Module ID: 15340
// Function ID: 15341
// Name: BountiesModal
// Dependencies: [19, 21, 15341, 15342, 15392, 12117, 11545, 2]

// Module 15340 (BountiesModal)
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const bounty_main = "bounty_main";
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default noop.memo(function BountiesModal(bountyId) {
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
        if (closure_1_2 === bountyId(variant[2]).BountiesModalVariant.VERTICAL_SCROLL) {
          const obj2 = { bountyId, sourceQuestContent };
          let tmp7 = jsx(sourceQuestContent(tmp[3]), { bountyId, sourceQuestContent });
        } else {
          const obj = { bountyId, sourceQuestContent, bounty };
          tmp7 = jsx(sourceQuestContent(tmp[4]), { bountyId, sourceQuestContent, bounty });
        }
        return tmp7;
      }
    }
  }), items);
  const layoutEffect = bounty.useLayoutEffect(() => {
    bountyId(variant[5]).applyOrientationLock("PORTRAIT");
    return bountyId(variant[5]).restoreDefaultOrientationLock;
  }, []);
  return jsx(bountyId(variant[6]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } });
});
