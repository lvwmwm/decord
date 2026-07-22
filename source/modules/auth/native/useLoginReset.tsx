// Module ID: 9199
// Function ID: 72041
// Name: useLoginReset
// Dependencies: []
// Exports: default

// Module 9199 (useLoginReset)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(closure_1[2]).loginReset();
      const obj = callback(closure_1[2]);
    }
  }, []);
};
