// Module ID: 14540
// Function ID: 14541
// Name: BountiesModal
// Dependencies: [19, 21, 14541, 14542, 14592, 10758, 10769, 2]

// Module 14540 (BountiesModal)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const bounty_main = "bounty_main";
const memoResult = react.memo(function BountiesModal(bountyId) {
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
        if (closure_1_2 === bountyId(variant[2]).BountiesModalVariant.VERTICAL_SCROLL) {
          tmp7 = jsx(sourceQuestContent(tmp[3]), { bountyId, sourceQuestContent });
        } else {
          tmp7 = jsx(sourceQuestContent(tmp[4]), { bountyId, sourceQuestContent, bounty });
        }
        return tmp7;
      }
    }
  }), items);
  const layoutEffect = bounty.useLayoutEffect(() => {
    const obj = bountyId(variant[5]);
    obj.applyOrientationLock("PORTRAIT");
    return bountyId(variant[5]).restoreDefaultOrientationLock;
  }, []);
  return jsx(bountyId(variant[6]).Modal, { hideTitle: true, initialRouteName: bounty_main, screens: memo, viewStyle: { backgroundColor: "#000000" } });
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default memoResult;
