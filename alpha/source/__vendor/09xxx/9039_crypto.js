// Module ID: 9039
// Function ID: 9040
// Name: crypto
// Dependencies: []

// Module 9039 (crypto)
let _crypto;
if (typeof globalThis === "object") {
  const _globalThis2 = globalThis;
  if ("crypto" in globalThis) {
    const _globalThis = globalThis;
    _crypto = crypto;
  }
}

export const crypto = _crypto;
