// Module ID: 8883
// Function ID: 70067
// Name: _crypto
// Dependencies: []

// Module 8883 (_crypto)
arg5.crypto = undefined;
let _crypto;
if ("object" === typeof globalThis) {
  const _globalThis = globalThis;
  if ("crypto" in globalThis) {
    const _globalThis2 = globalThis;
    _crypto = crypto;
  }
}
arg5.crypto = _crypto;
