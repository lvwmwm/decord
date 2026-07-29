// Module ID: 317
// Function ID: 318
// Name: infoLog
// Dependencies: []

// Module 317 (infoLog)
arg5.default = function infoLog() {
  const items = [...HermesBuiltin.copyRestArgs()];
  return console.log.apply(items);
};
