// Module ID: 13659
// Function ID: 13660
// Name: prop
// Dependencies: [13660]

// Module 13659 (prop)
import prop from "prop";

if (prop) {
  const _Symbol = Symbol;
  prop = !Symbol.sham;
}
if (prop) {
  const _Symbol2 = Symbol;
  prop = typeof Symbol.iterator === "symbol";
}

export default prop;
