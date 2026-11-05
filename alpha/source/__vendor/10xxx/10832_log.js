// Module ID: 10832
// Function ID: 10833
// Name: log
// Dependencies: []
// Exports: log, round

// Module 10832 (log)
let tmp2;
let items = [{ code: "(function round_Pnpm_logTs1(number){return Math.round(number);})" }];
[tmp2] = items;
function round(arg0) {
  return Math.round(arg0);
}
round.__workletHash = 1706604078972;
round.__initData = tmp2;

export function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  console.log.apply(items);
}
export { round };
