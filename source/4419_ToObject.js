// Module ID: 4419
// Function ID: 38946
// Name: ToObject
// Dependencies: [4420, 526]

// Module 4419 (ToObject)

export default function ToObject(arg0) {
  require(4420) /* RequireObjectCoercible */(arg0);
  return require(526)(arg0);
};
