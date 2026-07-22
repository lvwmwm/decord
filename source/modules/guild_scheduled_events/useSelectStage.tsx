// Module ID: 12087
// Function ID: 93225
// Name: useSelectStage
// Dependencies: []
// Exports: default

// Module 12087 (useSelectStage)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default function useSelectStage() {
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId(), []);
  const arg1 = stateFromStores;
  const tmp2 = callback(React.useState(stateFromStores), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  let closure_2 = tmp2[1];
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  const items2 = [first];
  const items3 = [
    first,
    React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items2)
  ];
  return items3;
};
