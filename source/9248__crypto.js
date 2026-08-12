// Module ID: 9248
// Function ID: 9249
// Name: _crypto
// Dependencies: []

// Module 9248 (_crypto)
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
