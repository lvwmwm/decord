// Module ID: 6894
// Function ID: 6895
// Name: useLoginReset
// Dependencies: [19, 1215, 6534, 2]
// Exports: default

// Module 6894 (useLoginReset)
import closure_2 from "noop" /* 19 */;
import closure_3 from "fetchFingerprint" /* 1215 */;

const result = require("set").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};
