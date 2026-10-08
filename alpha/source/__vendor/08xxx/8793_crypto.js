// Module ID: 8793
// Function ID: 8794
// Name: crypto
// Dependencies: []

// Module 8793 (crypto)
let _crypto;
if (typeof globalThis === "object") {
  const _globalThis2 = globalThis;
  if ("crypto" in globalThis) {
    const _globalThis = globalThis;
    _crypto = crypto;
  }
}

export const crypto = _crypto;
