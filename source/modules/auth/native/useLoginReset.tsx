// Module ID: 8404
// Function ID: 8405
// Name: useLoginReset
// Dependencies: [19, 1218, 5748, 2]
// Exports: default

// Module 8404 (useLoginReset)
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
