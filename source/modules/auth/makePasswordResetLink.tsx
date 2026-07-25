// Module ID: 9136
// Function ID: 71791
// Name: makePasswordResetLink
// Dependencies: [653, 2]
// Exports: default

// Module 9136 (makePasswordResetLink)
import { Routes } from "ME";

const result = require("set").fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
