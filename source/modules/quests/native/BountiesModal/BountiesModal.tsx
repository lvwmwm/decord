// Module ID: 13776
// Function ID: 104160
// Dependencies: []

// Module 13776
const importAllResult = importAll(dependencyMap[0]);
const QuestsExperimentLocations = arg1(dependencyMap[1]).QuestsExperimentLocations;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo(function BountiesModal(bountyId) {
  bountyId = bountyId.bountyId;
  const arg1 = bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  const importDefault = sourceQuestContent;
  let obj = arg1(dependencyMap[3]);
  const verticalScrollEnabled = obj.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE).verticalScrollEnabled;
  const dependencyMap = verticalScrollEnabled;
  const items = [bountyId, sourceQuestContent, verticalScrollEnabled];
  const memo = importAllResult.useMemo(() => ({
    ["bounty_main"]: {
      fullscreen: true,
      headerLeft() {
        return null;
      },
      render() {
        if (closure_2) {
          let tmp4 = tmp3[4];
        } else {
          tmp4 = tmp3[5];
        }
        return closure_5(closure_1(tmp4), { bountyId: closure_0, sourceQuestContent: closure_1 });
      }
    }
  }), items);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    bountyId(verticalScrollEnabled[6]).lockOrientation("PORTRAIT", true);
    return bountyId(verticalScrollEnabled[6]).restoreDefaultOrientation;
  }, []);
  obj = { padding: null, end: null, screens: memo, viewStyle: { backgroundColor: "#000000" } };
  return jsx(arg1(dependencyMap[7]).Modal, obj);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default memoResult;
