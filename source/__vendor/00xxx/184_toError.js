// Module ID: 184
// Function ID: 185
// Name: toError
// Dependencies: []

// Module 184 (toError)
arg5.default = function toError(arg0) {
  error = arg0;
  if (!(arg0 instanceof Error)) {
    const _Error = Error;
    const _String = String;
    error = new Error(String(arg0));
  }
  return error;
};
