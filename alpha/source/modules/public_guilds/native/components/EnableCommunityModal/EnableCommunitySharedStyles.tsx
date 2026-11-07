// Module ID: 20230
// Function ID: 20231
// Name: EnableCommunitySharedStyles
// Dependencies: [17, 5140, 2]

// Module 20230 (EnableCommunitySharedStyles)
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const Platform = react_native.Platform;
const styles = createStyles.createStyles({ content: { alignItems: "center", paddingLeft: 16, paddingRight: 16, marginTop: 30 }, header: { marginTop: 12, textAlign: "center" }, description: { marginBottom: 16, marginTop: 8, textAlign: "center" }, formHint: { paddingHorizontal: 16 }, communityRequirementSatisfiedFormWrapper: { position: "relative" }, communityRequirementSatisfiedFormPressable: { position: "absolute", width: 80, top: 0, right: 0, height: "100%" } });
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedStyles.tsx");

export const useEnableCommunitySharedStyles = styles;
