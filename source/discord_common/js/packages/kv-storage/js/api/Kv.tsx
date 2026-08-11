// Module ID: 1969
// Function ID: 1970
// Name: databases
// Dependencies: [1964, 2]

// Module 1969 (databases)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Kv.tsx");
const prototype = function Kv() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["databases"] = function databases() {
  const Host = require(1964) /* open */.Host;
  return Host.list();
};
prototype["optimize"] = function optimize(arg0) {
  const Host = require(1964) /* open */.Host;
  return Host.optimize(arg0);
};

export const Kv = prototype;
