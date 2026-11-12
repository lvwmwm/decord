// Module ID: 9300
// Function ID: 9301
// Name: decodeAstJson
// Dependencies: []
// Exports: decodeAstJson

// Module 9300 (decodeAstJson)
function reviveBigInts(arg0, $bigint) {
  let BigIntResult = $bigint;
  if (typeof $bigint === "object") {
    BigIntResult = $bigint;
    if (null !== $bigint) {
      BigIntResult = $bigint;
      if ("$bigint" in $bigint) {
        const _BigInt = BigInt;
        BigIntResult = BigInt($bigint.$bigint);
      }
    }
  }
  return BigIntResult;
}

export function decodeAstJson(arg0) {
  return JSON.parse(arg0, reviveBigInts);
}
