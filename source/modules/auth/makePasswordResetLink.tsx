// Module ID: 8528
// Function ID: 8529
// Name: makePasswordResetLink
// Dependencies: [676, 2]
// Exports: default

// Module 8528 (makePasswordResetLink)
import { Routes } from "ME";

const result = require("set").fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
