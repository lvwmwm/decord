// Module ID: 3796
// Function ID: 29602
// Name: _importWithRetry
// Dependencies: [5, 2]
// Exports: importWithRetry, setAwaitOnline

// Module 3796 (_importWithRetry)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
async function _importWithRetry(arg0, arg1) {
  let iter = (function*(arg0) {
    let createPromise;
    let name;
    let webpackId;
    ({ createPromise, webpackId, name } = arg0);
    yield undefined;
    performance.mark("importWithRetry:start", { detail: { webpackId, name } });
    return yield createPromise();
  })();
  iter.next();
  return iter;
}
function pausedPromise(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0) => setTimeout(arg0, closure_0));
}
function awaitOnline() {
  return Promise.resolve();
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/code-splitting/importWithRetry.tsx");

export { awaitOnline };
export function setAwaitOnline(arg0) {
  let closure_3 = arg0;
}
export { pausedPromise };
export const importWithRetry = function importWithRetry(arg0) {
  return _importWithRetry(...arguments);
};
