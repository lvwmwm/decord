// Module ID: 11218
// Function ID: 87369
// Name: EmptyState
// Dependencies: []
// Exports: default

// Module 11218 (EmptyState)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: { 1879049349: true, "Null": true, "Null": true }, textContainer: {}, text: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_launcher/native/screens/search/EmptyState.tsx");

export default function EmptyState(showsGenericMessage) {
  let flag = showsGenericMessage.showsGenericMessage;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  const tmp = callback();
  let obj = arg1(dependencyMap[4]);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(arg1(dependencyMap[5]).AppLauncherEmptyStateType.SEARCH_EMPTY, showsGenericMessage.query);
  const items = [flag];
  const effect = React.useEffect(() => {
    const intl = flag(closure_1[6]).intl;
    const string = intl.string;
    const t = flag(closure_1[6]).t;
    if (flag) {
      let stringResult = string(t.aOkFv8);
    } else {
      stringResult = string(t.LSNOYf);
    }
    const AccessibilityAnnouncer = flag(closure_1[7]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult, "polite");
  }, items);
  obj = { style: tmp.container };
  obj = { style: tmp.textContainer };
  const obj1 = { style: tmp.text };
  const intl = arg1(dependencyMap[6]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[6]).t;
  if (flag) {
    let stringResult = string(t.aOkFv8);
  } else {
    stringResult = string(t.LSNOYf);
  }
  obj1.children = stringResult;
  obj.children = jsx(arg1(dependencyMap[8]).Text, obj1);
  obj.children = <View {...obj} />;
  return <View {...obj} />;
};
