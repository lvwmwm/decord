// Module ID: 13461
// Function ID: 102207
// Name: styles
// Dependencies: [268435456, 306118656, 247332864, 514326528]

// Module 13461 (styles)
const _module = require(dependencyMap[0]);
const ARBITRARY_LARGE_OFFSET = _module.ARBITRARY_LARGE_OFFSET;
const _module1 = require(dependencyMap[1]);
let obj = { container: { flex: 1 } };
obj = { top: -ARBITRARY_LARGE_OFFSET, height: ARBITRARY_LARGE_OFFSET, backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_SURFACE_HIGH };
obj.bounceOffset = obj;
obj.avatarContainer = { zIndex: 1 };
const obj1 = { "Bool(true)": true, justify: true, align: true, backgroundColor: true, borderRadius: importDefault(dependencyMap[2]).radii.lg };
obj.formContainer = obj1;
obj.errorContainer = { lineHeight: null, textAlign: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", paddingHorizontal: true };
obj.floatingUpsell = { marginBottom: importDefault(dependencyMap[2]).space.PX_4, maxHeight: _module.FLOATING_UPSELL_HEIGHT - 12 };
const styles = _module1.createStyles(obj);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormSharedStyles.tsx");

export default styles;
