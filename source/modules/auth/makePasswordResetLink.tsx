// Module ID: 8554
// Function ID: 8555
// Name: makePasswordResetLink
// Dependencies: [676, 2]
// Exports: default

// Module 8554 (makePasswordResetLink)
import { Routes } from "ME";

const result = require("set").fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
