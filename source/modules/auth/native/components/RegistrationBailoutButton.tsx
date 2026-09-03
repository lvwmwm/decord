// Module ID: 15813
// Function ID: 15814
// Name: RegistrationBailoutButton
// Dependencies: [19, 21, 4478, 1296, 1233, 2]
// Exports: default

// Module 15813 (RegistrationBailoutButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const result = require("set").fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default function RegistrationBailoutButton(onBail) {
  const obj = { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.CZ7wvG);
  obj[2] = Button.Button.Sizes.MEDIUM;
  obj[3] = Button.ButtonLooks.LINK;
  obj[4] = Button.ButtonColors.LINK;
  obj[5] = callback().bail;
  obj[6] = onBail.onBail;
  return jsx(Button.Button, { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null });
};
