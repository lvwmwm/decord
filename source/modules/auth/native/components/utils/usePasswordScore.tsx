// Module ID: 14755
// Function ID: 112561
// Name: PasswordScore
// Dependencies: [5, 57, 31, 22, 14742, 2]
// Exports: usePasswordScore

// Module 14755 (PasswordScore)
import set from "set";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/auth/native/components/utils/usePasswordScore.tsx");

export const PasswordScore = { WEAK: 2, [2]: "WEAK", MEDIUM: 3, [3]: "MEDIUM", STRONG: 4, [4]: "STRONG" };
export const usePasswordScore = function usePasswordScore(first) {
  let set;
  let dependencyMap;
  let tmp2;
  let tmp4;
  let closure_0 = first;
  [tmp2, dependencyMap] = callback(React.useState(null), 2);
  let tmp = callback(React.useState(null), 2);
  [tmp4, set] = callback(React.useState(null), 2);
  callback = React.useRef(null);
  const effect = React.useEffect(() => {
    _slicedToArray.current = lib(outer1_1[3]).throttle((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer2_2(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), 250);
    return () => {
      const current = outer1_3.current;
      let cancel;
      if (null != current) {
        cancel = current.cancel;
      }
      if (null != cancel) {
        const current2 = outer1_3.current;
        current2.cancel();
      }
    };
  }, []);
  const items = [first];
  const effect1 = React.useEffect(() => {
    let tmp = null != ref.current;
    if (tmp) {
      tmp = lib.length > 0;
    }
    if (tmp) {
      ref.current(lib);
    }
  }, items);
  return { passwordScore, passwordValid };
};
