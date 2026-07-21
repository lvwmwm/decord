// Module ID: 10144
// Function ID: 78470
// Name: SafetyToolsSafetyTipsActionSheet
// Dependencies: [5, 57, 31, 27, 1348, 33, 4126, 689, 5225, 566, 4316]
// Exports: default

// Module 10144 (SafetyToolsSafetyTipsActionSheet)
import "asyncGeneratorStep";
import { View } from "_slicedToArray";
import { getInappropriateConversationsSafetyTips as closure_4 } from "module_31";
import { jsx } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import computeDefaultGroupDmNameFromUserIds from "computeDefaultGroupDmNameFromUserIds";

_isNativeReflectConstruct = {};
_isNativeReflectConstruct = { marginHorizontal: require("module_33").space.PX_16 };
_isNativeReflectConstruct.safetyTipsContainer = _isNativeReflectConstruct;
_isNativeReflectConstruct = _isNativeReflectConstruct.createStyles(_isNativeReflectConstruct);
const result = computeDefaultGroupDmNameFromUserIds.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  let channelId;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType };
  const tmp = _isNativeReflectConstruct();
  const intl = arg1(dependencyMap[7]).intl;
  obj.headerTitle = intl.string(arg1(dependencyMap[7]).t.EtNxi6);
  obj.channelId = channelId;
  obj.onClose = onClose;
  obj = { style: tmp.safetyTipsContainer };
  obj = {};
  const tmp2 = importDefault(dependencyMap[6]);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.description = intl2.string(arg1(dependencyMap[7]).t.DJMZX6);
  const tmp3 = importDefault(dependencyMap[8]);
  obj.safetyTips = callback().map((children) => callback2(callback(closure_2[9]).Text, { variant: "text-sm/medium", children }, arg1));
  obj.children = <tmp3 {...obj} />;
  obj.children = <View {...obj} />;
  return <tmp2 {...obj} />;
};
