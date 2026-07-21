// Module ID: 1178
// Function ID: 13400
// Name: defaultButtonStyles
// Dependencies: []

// Module 1178 (defaultButtonStyles)
function defaultButtonStyles(theme) {
  const triggerButton = { borderColor: false, height: null, width: false, margin: false, backgroundColor: 1, marginRight: 1, height: false, width: false, borderRadius: false, borderWidth: null, backgroundColor: "no-preference", paddingVertical: false, borderRadius: "auto", alignItems: "none", marginBottom: true };
  ({ background: obj.backgroundColor, border: obj.shadowColor } = theme);
  triggerButton.shadowOffset = { "Null": null, "Null": null };
  triggerButton.borderColor = theme.border;
  const triggerText = { color: theme.foreground, fontSize: 18 };
  const obj = { 9223372036854775807: "transparent", -9223372036854775808: null, 9223372036854775807: null, 0: "row", tintColor: theme.sentryLogo };
  return { triggerButton, triggerText, triggerIcon: obj };
}
arg5.default = function defaultStyles(color) {
  const container = { backgroundColor: color.background };
  const title = { experiment_location: null, hashedName: 15, variantId: 5, isOverride: "center", exposureTrackingEnabled: 1, color: color.foreground };
  ({ background: obj6.backgroundColor, border: obj6.borderColor } = color);
  ({ background: obj8.backgroundColor, border: obj8.borderColor } = color);
  const obj6 = { color: color.foreground, fontSize: 16 };
  const obj7 = { accessibilityRole: 4, ip: "vendor", Set: "enum", body: "\u7E41\u9AD4\u4E2D\u6587", name: "Traditional Chinese", backgroundColor: color.accentBackground };
  const obj8 = { color: color.accentForeground, fontSize: 18 };
  return { container, title, label: { color: color.foreground }, input: { borderColor: color.border, color: color.foreground }, textArea: { color: color.foreground }, screenshotButton: { 467722684: -285212012, -1141743416: 2097152298, 1726807569: 1426064020, -1604561349: -1953886329, 145711700: -1313895541, 1721305188: -230575694 }, screenshotContainer: {}, screenshotThumbnail: { 2018655073: true, 1669594568: true, 1045670548: true, -460645489: true }, screenshotText: { color: color.foreground, fontSize: 16 }, takeScreenshotButton: { accessible: true, Icon: true, Icon: true, error: true, label: true, accessibilityRole: true, padding: true, Date: true }, takeScreenshotText: obj6, submitButton: obj7, submitText: obj8, cancelButton: { backgroundColor: color.background, borderColor: color.border }, cancelText: { color: color.foreground, fontSize: 16 }, titleContainer: {}, sentryLogo: { tintColor: color.sentryLogo } };
};
arg5.defaultButtonStyles = defaultButtonStyles;
arg5.defaultScreenshotButtonStyles = defaultButtonStyles;
arg5.modalWrapper = { backgroundColor: "<string:408361903>", opacity: "<string:2920093709>", borderRadius: "<string:1058778651>", 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971358077182287, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022170280268213266 };
arg5.modalSheetContainer = function modalSheetContainer(theme) {
  return { backgroundColor: theme.background, shadowOffset: { "Null": "<string:3712090113>", "Null": "<string:2667578108>" } };
};
arg5.topSpacer = { height: 64 };
