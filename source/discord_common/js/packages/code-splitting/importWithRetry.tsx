// Module ID: 3794
// Function ID: 29596
// Name: _importWithRetry
// Dependencies: []
// Exports: importWithRetry, setAwaitOnline

// Module 3794 (_importWithRetry)
async function _importWithRetry(arg0, arg1) {
  const fn = function*(arg0) {
    let createPromise;
    let name;
    let webpackId;
    ({ createPromise, webpackId, name } = arg0);
    yield undefined;
    performance.mark("importWithRetry:start", { detail: { webpackId, name } });
    return yield createPromise();
  };
  fn.next();
  return fn;
}
let closure_1 = importDefault(dependencyMap[0]);
function pausedPromise(arg0) {
  const arg1 = arg0;
  return new Promise((arg0) => setTimeout(arg0, arg0));
}
function awaitOnline() {
  return Promise.resolve();
}
const result = arg1(dependencyMap[1]).fileFinishedImporting("../discord_common/js/packages/code-splitting/importWithRetry.tsx");

export { awaitOnline };
export function setAwaitOnline(arg0) {
  const awaitOnline = arg0;
}
export { pausedPromise };
export const importWithRetry = function importWithRetry(arg0) {
  return _importWithRetry(...arguments);
};
