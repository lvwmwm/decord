// Module ID: 7263
// Function ID: 7264
// Name: useLoginReset
// Dependencies: [19, 502, 6304, 2]
// Exports: default

// Module 7263 (useLoginReset)
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = react.useEffect(() => {
    let authenticated;
    return () => {
      if (!authenticated.isAuthenticated()) {
        const obj = closure_1_0(closure_1_1[2]);
        obj.loginReset();
      }
    };
  }, []);
};
