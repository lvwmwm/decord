// Module ID: 14019
// Function ID: 14020
// Dependencies: []

// Module 14019
if (typeof process === "object") {
  const _process3 = process;
  if (process.env) {
    const _process = process;
    if (process.env.NODE_DEBUG) {
      const _process2 = process;
      if (obj.test(process.env.NODE_DEBUG)) {
        let fn = () => {
          const items = ["SEMVER"];
          HermesBuiltin.arraySpread(HermesBuiltin.copyRestArgs(), 1);
          return console.error.apply(items);
        };
      }
      module.exports = fn;
    }
  }
}
fn = () => {

};
