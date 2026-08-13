// Module ID: 8532
// Function ID: 8533
// Name: makePasswordResetLink
// Dependencies: [676, 2]
// Exports: default

// Module 8532 (makePasswordResetLink)
import { Routes } from "ME";

const result = require("set").fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
