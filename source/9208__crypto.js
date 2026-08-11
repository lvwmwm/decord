// Module ID: 9208
// Function ID: 9209
// Name: _crypto
// Dependencies: []

// Module 9208 (_crypto)
arg5.crypto = undefined;
let _crypto;
if (typeof globalThis === "object") {
  const _globalThis2 = globalThis;
  if ("crypto" in globalThis) {
    const _globalThis = globalThis;
    _crypto = crypto;
  }
}
arg5.crypto = _crypto;
