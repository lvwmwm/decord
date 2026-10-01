// Module ID: 15598
// Function ID: 15599
// Name: RegistrationBailoutButton
// Dependencies: [19, 21, 4836, 1177, 1115, 2]
// Exports: default

// Module 15598 (RegistrationBailoutButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const result = size.fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default function RegistrationBailoutButton(onBail) {
  onBail = onBail.onBail;
  const tmp = closure_3();
  const Button = native.Button;
  const intl = intl2.intl;
  return <Button shrink text={intl.string(intl2.t.CZ7wvG)} size={native.Button.Sizes.MEDIUM} look={native.ButtonLooks.LINK} color={native.ButtonColors.LINK} style={tmp.bail} onPress={onBail} />;
};
