// Module ID: 16278
// Function ID: 125650
// Name: useCreatorMonetizationOnboardingMarketing
// Dependencies: []
// Exports: default

// Module 16278 (useCreatorMonetizationOnboardingMarketing)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationOnboardingMarketing.tsx");

export default function useCreatorMonetizationOnboardingMarketing(arg0) {
  let tmp2;
  let tmp4;
  let tmp6;
  const arg1 = arg0;
  [tmp2, closure_1] = callback(React.useState(true), 2);
  const tmp = callback(React.useState(true), 2);
  [tmp4, closure_2] = callback(React.useState(), 2);
  const tmp3 = callback(React.useState(), 2);
  [tmp6, closure_3] = callback(React.useState(), 2);
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), []);
  const items = [arg0, callback];
  const effect = React.useEffect(() => {
    callback(arg0);
  }, items);
  return { isLoading, error, creatorMonetizationOnboardingMarketing };
};
