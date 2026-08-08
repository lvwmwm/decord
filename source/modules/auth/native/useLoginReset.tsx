// Module ID: 8481
// Function ID: 8482
// Name: useLoginReset
// Dependencies: [19, 1218, 5827, 2]
// Exports: default

// Module 8481 (useLoginReset)
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
