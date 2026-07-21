// Module ID: 11857
// Function ID: 91814
// Name: GameProfileGameClaimCta
// Dependencies: []
// Exports: default

// Module 11857 (GameProfileGameClaimCta)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const RelativeMarketingURLs = arg1(dependencyMap[2]).RelativeMarketingURLs;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/game_profile/native/components/GameProfileGameClaimCta.tsx");

export default function GameProfileGameClaimCta(trackAction) {
  trackAction = trackAction.trackAction;
  const arg1 = trackAction;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [trackAction];
  const linkedApplications = trackAction.game.linkedApplications;
  let someResult;
  const callback = React.useCallback(callback(tmp), items);
  if (null != linkedApplications) {
    someResult = linkedApplications.some((type) => type.type === trackAction(closure_2[6]).GameLinkTypes.OFFICIAL);
  }
  if (null == someResult) {
    const obj = { "Bool(true)": null, "Bool(true)": null };
    const intl = arg1(dependencyMap[8]).intl;
    obj.text = intl.string(arg1(dependencyMap[8]).t.mqg+to);
    obj.onPress = callback;
    let tmp4 = jsx(arg1(dependencyMap[7]).Button, obj);
  } else {
    tmp4 = null;
  }
  return tmp4;
};
