// Module ID: 124
// Function ID: 2098
// Name: env
// Dependencies: []

// Module 124 (env)
if (undefined === window.window) {
  window.window = window;
}
if (undefined === window.self) {
  window.self = window;
}
window.process = window.process || {};
let env = window.process.env;
if (!env) {
  env = {};
}
window.process.env = env;
if (!window.process.env.NODE_ENV) {
  window.process.env.NODE_ENV = "production";
}
