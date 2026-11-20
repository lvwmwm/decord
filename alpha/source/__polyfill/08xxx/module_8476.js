// Module ID: 8476
// Function ID: 8477
// Dependencies: []
// Exports: createAbortError

// Module 8476

export function createAbortError(signal) {
  let aborted;
  if (signal != null) {
    aborted = signal.aborted;
  }
  if (aborted) {
    if (undefined !== signal.reason) {
      return signal.reason;
    }
  }
  const error = new Error("The operation was aborted.");
  error.name = "AbortError";
  return error;
}
