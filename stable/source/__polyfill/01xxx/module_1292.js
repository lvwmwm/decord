// Module ID: 1292
// Function ID: 1293
// Dependencies: []

// Module 1292
let randomUUID = typeof crypto !== "undefined";
if (typeof crypto !== "undefined") {
  const _crypto3 = crypto;
  randomUUID = crypto.randomUUID;
}
if (randomUUID) {
  const _crypto = crypto;
  const randomUUID2 = crypto.randomUUID;
  const _crypto2 = crypto;
  randomUUID = randomUUID2.bind(crypto);
}

export default { randomUUID };
