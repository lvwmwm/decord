// Module ID: 15190
// Function ID: 15191
// Dependencies: []

// Module 15190
if (typeof process === "object") {
  const _process3 = process;
  if (process.env) {
    const _process = process;
    if (process.env.NODE_DEBUG) {
      let fn;
      const _process2 = process;
      const obj = /\bsemver\b/i;
      if (obj.test(process.env.NODE_DEBUG)) {
        fn = () => {
          const items = ["SEMVER", ...HermesBuiltin.copyRestArgs()];
          return console.error.apply(items);
        };
      }
      module.exports = fn;
    }
  }
}
fn = () => {

};
