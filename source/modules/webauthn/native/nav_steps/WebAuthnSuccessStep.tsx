// Module ID: 13522
// Function ID: 102582
// Name: WebAuthnSuccessStep
// Dependencies: [31, 27, 11015, 7537, 653, 33, 1212, 4124]
// Exports: default

// Module 13522 (WebAuthnSuccessStep)
import module_31 from "module_31";
import { jsx } from "keys";
import Text from "Text";

const result = Text.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  let obj = arg1(dependencyMap[2]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(closure_2[3]).getHeaderCloseButton(() => {
        closure_0.popToTop();
        const result = callback(closure_2[4]).closePasskeyUpsellModal();
      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { onGenerate: null };
  const intl = arg1(dependencyMap[6]).intl;
  obj.headerLabel = intl.format(arg1(dependencyMap[6]).t.iVTs6i, {});
  return jsx(importDefault(dependencyMap[5]), obj);
};
