// Module ID: 1178
// Function ID: 13396
// Name: defaultButtonStyles
// Dependencies: []

// Module 1178 (defaultButtonStyles)
function defaultButtonStyles(theme) {
  const triggerButton = { backgroundColor: theme.background, shadowColor: theme.border, shadowOffset: {}, borderColor: theme.border };
  const triggerText = { color: theme.foreground, fontSize: 18 };
  const obj = { height: "transparent", width: null, margin: null, backgroundColor: "row", tintColor: theme.sentryLogo };
  return { triggerButton, triggerText, triggerIcon: obj };
}
arg5.default = function defaultStyles(color) {
  const container = { backgroundColor: color.background };
  const title = { "Null": null, "Null": 15, "Null": 5, "Null": "center", "Null": 1, color: color.foreground };
  ({ border: obj4.borderColor, foreground: obj4.color } = color);
  const obj2 = { "Bool(true)": true, "Bool(true)": true, color: color.foreground };
  const obj4 = { color: color.foreground, fontSize: 16 };
  const obj7 = { XSMALL: "<string:3787522049>", SMALL: "<string:1714487297>", REFRESH_MEDIUM_10: "<string:1717986918>", MEDIUM: "<string:1900013158>", LARGE: "y", backgroundColor: color.accentBackground };
  ({ background: obj12.backgroundColor, border: obj12.borderColor } = color);
  return { container, title, label: { color: color.foreground }, input: { "Null": "center", "Null": "flex", "Null": "row", "Null": 10, "Null": 8, "Null": 56, "Null": 1 }, textArea: obj2, screenshotButton: { backgroundColor: color.background, borderColor: color.border }, screenshotContainer: {}, screenshotThumbnail: {}, screenshotText: obj4, takeScreenshotButton: { backgroundColor: color.background, borderColor: color.border }, takeScreenshotText: { color: color.foreground, fontSize: 16 }, submitButton: obj7, submitText: { color: color.accentForeground, fontSize: 18 }, cancelButton: { 9223372036854775807: "secondary", 0: "md", 0: null, 0: null, 0: true }, cancelText: { color: color.foreground, fontSize: 16 }, titleContainer: { "Bool(false)": true, "Bool(false)": true }, sentryLogo: { tintColor: color.sentryLogo } };
};
arg5.defaultButtonStyles = defaultButtonStyles;
arg5.defaultScreenshotButtonStyles = defaultButtonStyles;
arg5.modalWrapper = { o: "center", concat: null, o: 4, borderRadius: 4, position: "rgba(0, 0, 0, 0.75)" };
arg5.modalSheetContainer = function modalSheetContainer(theme) {
  return { backgroundColor: theme.background, shadowOffset: {} };
};
arg5.topSpacer = { height: 64 };
