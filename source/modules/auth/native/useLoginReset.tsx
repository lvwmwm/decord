// Module ID: 9202
// Function ID: 9203
// Name: useLoginReset
// Dependencies: [19, 1218, 5641, 2]
// Exports: default

// Module 9202 (useLoginReset)
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";

const result = require("handleLogout").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};
