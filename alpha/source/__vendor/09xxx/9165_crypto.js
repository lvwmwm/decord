// Module ID: 9165
// Function ID: 9166
// Name: crypto
// Dependencies: []

// Module 9165 (crypto)
let _crypto;
if (typeof globalThis === "object") {
  const _globalThis2 = globalThis;
  if ("crypto" in globalThis) {
    const _globalThis = globalThis;
    _crypto = crypto;
  }
}

export const crypto = _crypto;
