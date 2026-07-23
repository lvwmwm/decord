// Module ID: 1175
// Function ID: 13382
// Name: getTheme
// Dependencies: [27, 1109]
// Exports: getTheme

// Module 1175 (getTheme)
import { Appearance } from "get ActivityIndicator";

let obj = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#2b2233", background: "#ffffff", border: "rgba(41, 35, 47, 0.13)", feedbackIcon: "rgba(54, 45, 89, 1)", sentryLogo: "rgba(54, 45, 89, 1)" };
obj = { accentBackground: "rgba(88, 74, 192, 1)", accentForeground: "#ffffff", foreground: "#ebe6ef", background: "#29232f", border: "rgba(235, 230, 239, 0.15)", feedbackIcon: "#ffffff", sentryLogo: "#ffffff" };

export const getTheme = function getTheme() {
  const obj = require(1109) /* _getClientIntegration */;
  let colorScheme = obj.getColorScheme();
  if ("system" === colorScheme) {
    colorScheme = Appearance.getColorScheme();
  }
  const merged = Object.assign({}, obj);
  let merged1 = Object.assign(merged, require(1109) /* _getClientIntegration */.getFeedbackLightTheme());
  const merged2 = Object.assign({}, obj);
  const obj2 = require(1109) /* _getClientIntegration */;
  if ("dark" === colorScheme) {
    merged1 = Object.assign(merged2, obj3.getFeedbackDarkTheme());
  }
  return merged1;
};
export const LightTheme = obj;
export const DarkTheme = obj;
