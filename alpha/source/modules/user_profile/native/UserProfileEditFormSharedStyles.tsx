// Module ID: 15624
// Function ID: 15625
// Name: UserProfileEditFormSharedStyles
// Dependencies: [7181, 5191, 587, 2]

// Module 15624 (UserProfileEditFormSharedStyles)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 7181 */;
import createStyles_mod from "createStyles" /* 5191 */;
import size from "module_2" /* 2 */;

let ARBITRARY_LARGE_OFFSET;
let FLOATING_UPSELL_HEIGHT;
let rect;
let rect1;
({ ARBITRARY_LARGE_OFFSET, FLOATING_UPSELL_HEIGHT } = Constants);
let createStyles = createStyles_mod;
const obj = { container: { flex: 1 }, bounceOffset: rect, avatarContainer: { zIndex: 1 }, formContainer: { marginTop: 16, padding: 16, borderRadius: nativeDefault.radii.lg, rowGap: 20 }, errorContainer: { flex: 1, flexDirection: "row", justifyContent: "center" }, floatingUpsell: rect1 };
rect = { position: "absolute", top: -ARBITRARY_LARGE_OFFSET, height: ARBITRARY_LARGE_OFFSET, right: 0, left: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
({ marginTop: 16, padding: 16, borderRadius: nativeDefault.radii.lg, rowGap: 20 });
rect1 = { position: "absolute", marginBottom: nativeDefault.space.PX_4, left: 0, right: 0, maxHeight: FLOATING_UPSELL_HEIGHT - 12 };
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormSharedStyles.tsx");

export default styles;
