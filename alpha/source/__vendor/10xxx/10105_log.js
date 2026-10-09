// Module ID: 10105
// Function ID: 10106
// Name: log
// Dependencies: []
// Exports: log, round

// Module 10105 (log)
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
