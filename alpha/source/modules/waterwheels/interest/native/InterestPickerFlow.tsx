// Module ID: 19830
// Function ID: 19831
// Name: InterestPickerFlow
// Dependencies: [32, 19, 21, 19827, 19831, 19833, 7145, 19835, 18670, 1113, 2537, 2]
// Exports: default

// Module 19830 (InterestPickerFlow)
import Fragment from "Fragment" /* 21 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7145 */;
import InterestGamePickerDefault from "InterestGamePicker" /* 18670 */;
import InterestPickerPicksContext from "InterestPickerPicksContext" /* 19827 */;
import InterestGuildsAPI from "InterestGuildsAPI" /* 19831 */;
import useInterestGuildJoinsDefault from "useInterestGuildJoins" /* 19833 */;
import InterestGuildRecommendationsDefault from "InterestGuildRecommendations" /* 19835 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const intl3 = tmp(1113);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerFlow.tsx");

export default function InterestPickerFlow(onComplete) {
  let closure_4;
  let first;
  let tmp13;
  onComplete = onComplete.onComplete;
  first = undefined;
  closure_4 = undefined;
  let tmp = require;
  const tmp2 = dependencyMap;
  const catalog = onComplete.catalog;
  const obj = InterestPickerPicksContext;
  const interestPickerPicks = obj.useInterestPickerPicks();
  const getPicks = interestPickerPicks.getPicks;
  const setPicks = interestPickerPicks.setPicks;
  [first, closure_4] = react.useState("picker");
  const first1 = _slicedToArray(react.useState(InterestGuildsAPI.createInterestGuildsResource), 1)[0];
  const tmp8 = useInterestGuildJoinsDefault();
  let closure_6 = react.useRef(false);
  const items = [first1];
  const effect = react.useEffect(() => () => first1.dispose(), items);
  const obj2 = useNavigatorBackPressHandler;
  obj2.useNavigatorBackPressHandler(() => {
    let flag = "guilds" === first;
    if (flag) {
      closure_4("picker");
      flag = true;
    }
    return flag;
  });
  if ("guilds" === first) {
    InterestGuildRecommendationsDefault;
    tmp13 = <tmp7Result gameIds={getPicks()} resource={first1} joins={tmp8} onBack={function onBack() {
      return closure_4("picker");
    }} onComplete={function onComplete() {
      const tmp = getPicks();
      if (!ref.current) {
        tmp2.current = true;
        setPicks(tmp);
        first1.dispose();
        onComplete(tmp, false);
      }
    }} />;
  } else {
    InterestGamePickerDefault;
    const intl = intl3.intl;
    const intl2 = intl3.intl;
    tmp13 = <tmp7Result2 catalog={catalog} title={intl.string(tmp7(2537)["5MUKTF"])} subtitle={intl2.string(tmp7(2537)["z/57xV"])} minSelection={1} initialSelection={getPicks()} onContinue={function onContinue(arg0) {
      setPicks(arg0);
      first1.setPicks(arg0);
      closure_4("guilds");
    }} onSkip={function onSkip(arg0) {
      if (!ref.current) {
        tmp.current = true;
        setPicks(arg0);
        first1.dispose();
        onComplete(arg0, true);
      }
    }} />;
  }
  return tmp13;
};
