// Module ID: 1178
// Function ID: 13401
// Name: defaultButtonStyles
// Dependencies: []

// Module 1178 (defaultButtonStyles)
function defaultButtonStyles(theme) {
  const triggerButton = { position: "absolute", bottom: 30, right: 30, backgroundColor: null, padding: 15, borderRadius: 40, justifyContent: "center", alignItems: "center", elevation: 5, shadowColor: null, shadowOffset: null, shadowOpacity: 0.5, shadowRadius: 3, flexDirection: "row", borderWidth: 1 };
  ({ background: obj.backgroundColor, border: obj.shadowColor } = theme);
  triggerButton.shadowOffset = { width: 1, height: 2 };
  triggerButton.borderColor = theme.border;
  const triggerText = { color: theme.foreground, fontSize: 18 };
  const obj = { width: 24, height: 24, padding: 2, marginEnd: 6, tintColor: theme.sentryLogo };
  return { triggerButton, triggerText, triggerIcon: obj };
}
arg5.default = function defaultStyles(color) {
  const container = { flex: 1, padding: 20, backgroundColor: color.background };
  const title = { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "left", flex: 1, color: color.foreground };
  const obj = { marginBottom: 4, fontSize: 16, color: color.foreground };
  ({ border: obj4.borderColor, foreground: obj4.color } = color);
  const obj2 = { height: 100, textAlignVertical: "top", color: color.foreground };
  ({ background: obj6.backgroundColor, border: obj6.borderColor } = color);
  const obj4 = { color: color.foreground, fontSize: 16 };
  ({ background: obj8.backgroundColor, border: obj8.borderColor } = color);
  const obj6 = { color: color.foreground, fontSize: 16 };
  const obj7 = { backgroundColor: color.accentBackground, paddingVertical: 15, borderRadius: 5, alignItems: "center", marginBottom: 10 };
  const obj8 = { color: color.accentForeground, fontSize: 18 };
  ({ background: obj12.backgroundColor, border: obj12.borderColor } = color);
  const obj11 = { width: 40, height: 40, tintColor: color.sentryLogo };
  return { container, title, label: obj, input: { height: 50, borderColor: null, borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 15, fontSize: 16 }, textArea: obj2, screenshotButton: { backgroundColor: null, padding: 15, borderRadius: 5, alignItems: "center", flex: 1, borderWidth: 1 }, screenshotContainer: { flexDirection: "row", alignItems: "center", width: "100%", marginBottom: 20 }, screenshotThumbnail: { width: 50, height: 50, borderRadius: 5, marginRight: 10 }, screenshotText: obj4, takeScreenshotButton: { backgroundColor: null, padding: 15, borderRadius: 5, alignItems: "center", borderWidth: 1, borderColor: null, marginTop: -10, marginBottom: 20 }, takeScreenshotText: obj6, submitButton: obj7, submitText: obj8, cancelButton: { backgroundColor: null, padding: 15, borderRadius: 5, alignItems: "center", borderWidth: 1 }, cancelText: { color: color.foreground, fontSize: 16 }, titleContainer: { flexDirection: "row", width: "100%" }, sentryLogo: obj11 };
};
arg5.defaultButtonStyles = defaultButtonStyles;
arg5.defaultScreenshotButtonStyles = defaultButtonStyles;
arg5.modalWrapper = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
arg5.modalSheetContainer = function modalSheetContainer(theme) {
  const obj = { backgroundColor: theme.background, borderTopLeftRadius: 16, borderTopRightRadius: 16, overflow: "hidden", alignSelf: "stretch", shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 5, flex: 1 };
  return obj;
};
arg5.topSpacer = { height: 64 };
