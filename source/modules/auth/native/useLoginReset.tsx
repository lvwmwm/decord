// Module ID: 6954
// Function ID: 6955
// Name: useLoginReset
// Dependencies: [19, 502, 6593, 2]
// Exports: default

// Module 6954 (useLoginReset)
import closure_2 from "noop" /* 19 */;
import closure_3 from "fetchFingerprint" /* 502 */;

const result = require("set").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};
