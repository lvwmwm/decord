// Module ID: 9242
// Function ID: 72291
// Name: useLoginReset
// Dependencies: [31, 1194, 5588, 2]
// Exports: default

// Module 9242 (useLoginReset)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("dispatchLogout").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!outer2_3.isAuthenticated()) {
      outer2_0(outer2_1[2]).loginReset();
      const obj = outer2_0(outer2_1[2]);
    }
  }, []);
};
