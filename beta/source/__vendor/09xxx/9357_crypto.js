// Module ID: 9357
// Function ID: 9358
// Name: crypto
// Dependencies: []

// Module 9357 (crypto)
let _crypto;
if (typeof globalThis === "object") {
  const _globalThis2 = globalThis;
  if ("crypto" in globalThis) {
    const _globalThis = globalThis;
    _crypto = crypto;
  }
}

export const crypto = _crypto;
