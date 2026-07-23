// Module ID: 14760
// Function ID: 112609
// Name: RegistrationBailoutButton
// Dependencies: [31, 33, 4130, 1273, 1212, 2]
// Exports: default

// Module 14760 (RegistrationBailoutButton)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = _createForOfIteratorHelperLoose.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default function RegistrationBailoutButton(onBail) {
  const obj = { shrink: true };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.CZ7wvG);
  obj.size = require(1273) /* Button */.Button.Sizes.MEDIUM;
  obj.look = require(1273) /* Button */.ButtonLooks.LINK;
  obj.color = require(1273) /* Button */.ButtonColors.LINK;
  obj.style = callback().bail;
  obj.onPress = onBail.onBail;
  return jsx(require(1273) /* Button */.Button, { shrink: true });
};
