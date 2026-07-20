// Module ID: 14622
// Function ID: 110300
// Name: PasswordScore
// Dependencies: [0, 0]
// Exports: usePasswordScore

// Module 14622 (PasswordScore)
import result from "result";
import closure_3 from "result";

let closure_4 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/auth/native/components/utils/usePasswordScore.tsx");

export const PasswordScore = { WEAK: 2, [2]: "WEAK", MEDIUM: 3, [3]: "MEDIUM", STRONG: 4, [4]: "STRONG" };
export const usePasswordScore = function usePasswordScore(first) {
  let tmp2;
  let tmp4;
  const arg1 = first;
  [tmp2, closure_1] = callback(React.useState(null), 2);
  const tmp = callback(React.useState(null), 2);
  [tmp4, result] = callback(React.useState(null), 2);
  const callback = React.useRef(null);
  const effect = React.useEffect(() => {
    closure_3.current = arg0(closure_1[3]).throttle(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), 250);
    return () => {
      const current = ref.current;
      let cancel;
      if (null != current) {
        cancel = current.cancel;
      }
      if (null != cancel) {
        const current2 = ref.current;
        current2.cancel();
      }
    };
  }, []);
  const items = [first];
  const effect1 = React.useEffect(() => {
    let tmp = null != ref.current;
    if (tmp) {
      tmp = arg0.length > 0;
    }
    if (tmp) {
      ref.current(arg0);
    }
  }, items);
  return { passwordScore, passwordValid };
};
