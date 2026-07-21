// Module ID: 16249
// Function ID: 125546
// Name: useGuildApplication
// Dependencies: []
// Exports: default

// Module 16249 (useGuildApplication)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/applications/useGuildApplication.tsx");

export default function useGuildApplication(arg0, arg1) {
  let tmp4;
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_6];
  const application = arg1(dependencyMap[4]).useStateFromStores(items, () => guildApplication.getGuildApplication(arg0, arg1));
  const dependencyMap = application;
  const obj = arg1(dependencyMap[4]);
  [tmp4, closure_3] = callback2(React.useState(null == application), 2);
  const error = callback2(React.useState(), 2);
  const callback2 = error[1];
  const tmp6 = callback2(React.useState(false), 2);
  const first = tmp6[0];
  const React = first;
  closure_6 = tmp6[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [application, arg1, arg0];
  const callback = React.useCallback(callback(tmp), items1);
  const items2 = [first, callback];
  const effect = React.useEffect(() => {
    if (!first) {
      callback();
    }
  }, items2);
  return { application, error: error[0], loading };
};
