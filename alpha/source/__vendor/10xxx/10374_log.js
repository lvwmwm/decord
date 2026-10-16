// Module ID: 10374
// Function ID: 10375
// Name: log
// Dependencies: []
// Exports: log, round

// Module 10374 (log)
function round(arg0) {
  return Math.round(arg0);
}
round.__closure = {};
round.__workletHash = 9115819686429;
round.__initData = { code: "function round_Pnpm_logTs1(number){return Math.round(number);}" };

export const log = function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  console.log.apply(items);
};
export { round };
