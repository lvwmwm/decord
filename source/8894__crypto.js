// Module ID: 8894
// Function ID: 8895
// Name: _crypto
// Dependencies: []

// Module 8894 (_crypto)
arg5.crypto = undefined;
let _crypto;
if (typeof globalThis !== "window") {
  const _globalThis2 = globalThis;
  if ("crypto" in globalThis) {
    const _globalThis = globalThis;
    _crypto = crypto;
  }
}
arg5.crypto = _crypto;
