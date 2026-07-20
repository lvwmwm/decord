// Module ID: 3909
// Function ID: 32328
// Name: BountiesScrollGradientRive
// Dependencies: []

// Module 3909 (BountiesScrollGradientRive)
let closure_3 = [null, null, null, null];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { Bounty Scroll Gradient: {} };
let closure_7 = { Bounty Scroll Gradient: [] };
let closure_8 = importAllResult.forwardRef(function BountiesScrollGradientRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounty Scroll Gradient";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let tmp;
  if (undefined !== defaultViewModelInstance) {
    tmp = defaultViewModelInstance;
  }
  const obj = { ref, src: importDefault(dependencyMap[4]), artboard: str, artboardProperties: closure_6, artboardViewModelInstances: closure_7, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine };
  const merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(ref(dependencyMap[3]).BaseRive, obj);
});
const forwardRefResult = importAllResult.forwardRef(function BountiesScrollGradientRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_8 {...obj} />;
  return jsx(ref(dependencyMap[5]).RiveErrorBoundary, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx");

export const BountiesScrollGradientRive = forwardRefResult;
