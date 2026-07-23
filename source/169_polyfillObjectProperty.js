// Module ID: 169
// Function ID: 2515
// Name: polyfillObjectProperty
// Dependencies: [126, 170]

// Module 169 (polyfillObjectProperty)
import polyfillObjectProperty from "polyfillObjectProperty";

if (null != global) {
  const _HermesInternal = global.HermesInternal;
}
polyfillObjectProperty.polyfillGlobal("Promise", () => require(170) /* finally */.default);
