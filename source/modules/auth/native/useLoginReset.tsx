// Module ID: 8706
// Function ID: 8707
// Name: useLoginReset
// Dependencies: [19, 1218, 5999, 2]
// Exports: default

// Module 8706 (useLoginReset)
import closure_2 from "noop" /* 19 */;
import closure_3 from "fetchFingerprint" /* 1218 */;

const result = require("set").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};
