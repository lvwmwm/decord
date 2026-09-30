// Module ID: 6569
// Function ID: 6570
// Name: useLoginReset
// Dependencies: [19, 502, 6206, 2]
// Exports: default

// Module 6569 (useLoginReset)
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = noop.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      closure_1_0(dependencyMap[2]).loginReset();
      const obj = closure_1_0(dependencyMap[2]);
    }
  }, []);
};
