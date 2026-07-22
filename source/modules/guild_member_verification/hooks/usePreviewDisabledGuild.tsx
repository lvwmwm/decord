// Module ID: 9144
// Function ID: 71693
// Name: usePreviewDisabledGuild
// Dependencies: []
// Exports: default

// Module 9144 (usePreviewDisabledGuild)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  const arg1 = arg0;
  const items = [closure_4];
  let stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => guild.getGuild(arg0));
  const obj = arg1(dependencyMap[3]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => {
    const value = closure_5.get(arg0);
    let guild;
    if (null != value) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = React.useEffect(() => {
    if (null != arg0) {
      const verificationForm = callback(closure_2[4]).fetchVerificationForm(arg0);
      const obj = callback(closure_2[4]);
    }
  }, items2);
  if (null == stateFromStores) {
    let result = null;
    if (null != stateFromStores1) {
      result = arg1(dependencyMap[5]).fromVerificationGateGuild(stateFromStores1);
      const obj3 = arg1(dependencyMap[5]);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};
