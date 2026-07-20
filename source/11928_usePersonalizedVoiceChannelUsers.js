// Module ID: 11928
// Function ID: 92262
// Name: usePersonalizedVoiceChannelUsers
// Dependencies: []
// Exports: default

// Module 11928 (usePersonalizedVoiceChannelUsers)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const Consents = arg1(dependencyMap[4]).Consents;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx");

export default function usePersonalizedVoiceChannelUsers(arg0) {
  const arg1 = arg0;
  const items = [closure_5];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = arg0);
  const stateFromStoresArray = arg1(dependencyMap[5]).useStateFromStoresArray(items, (self) => {
    const voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(self.id, self.guild_id);
    return voiceStatesForChannelAlt.map((user) => user.user.id);
  }, items1);
  const dependencyMap = stateFromStoresArray;
  const obj = arg1(dependencyMap[5]);
  const items2 = [closure_2];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items2, () => stateFromStores.getUserAffinitiesMap());
  closure_2 = stateFromStores;
  const obj2 = arg1(dependencyMap[5]);
  const items3 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items3, () => stateFromStores1.hasConsented(constants.PERSONALIZATION));
  closure_3 = stateFromStores1;
  const obj3 = arg1(dependencyMap[5]);
  const items4 = [closure_4];
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray];
  return arg1(dependencyMap[5]).useStateFromStoresArray(items4, () => {
    if (stateFromStores1) {
      let sorted = obj.sort((arg0, arg1) => {
        let value = store.get(arg1);
        let vcProbability;
        if (null != value) {
          vcProbability = value.vcProbability;
        }
        let num = 0;
        if (null != vcProbability) {
          num = vcProbability;
        }
        value = store.get(arg0);
        let vcProbability1;
        if (null != value) {
          vcProbability1 = value.vcProbability;
        }
        let num2 = 0;
        if (null != vcProbability1) {
          num2 = vcProbability1;
        }
        return num - num2;
      });
    } else {
      sorted = obj;
    }
    const mapped = sorted.map((arg0) => user.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items5);
};
