// Module ID: 9689
// Function ID: 9690
// Dependencies: [9679, 5294, 9675, 9690]

// Module 9689
import normalizeColor from "normalizeColor" /* 9675 */;
import _mod9679 from "module_9679" /* 9679 */;
import _mod9690 from "module_9690" /* 9690 */;
import "module_5294";
import module_5294_mod from "module_5294" /* 5294 */;

let items1;
let module_5294;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5294.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5294.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5294.bool, spellCheck: module_5294.bool, autoFocus: module_5294.bool, allowFontScaling: module_5294.bool, maxFontSizeMultiplier: module_5294.number, editable: module_5294.bool, keyboardType: module_5294.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5294.oneOf(["default", "light", "dark"]), returnKeyType: module_5294.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5294.string, maxLength: module_5294.number, numberOfLines: module_5294.number, disableFullscreenUI: module_5294.bool, enablesReturnKeyAutomatically: module_5294.bool, multiline: module_5294.bool, textBreakStrategy: module_5294.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5294.func, onFocus: module_5294.func, onChange: module_5294.func, onChangeText: module_5294.func, onContentSizeChange: module_5294.func, onTextInput: module_5294.func, onEndEditing: module_5294.func, onSelectionChange: module_5294.func, onSubmitEditing: module_5294.func, onKeyPress: module_5294.func, onLayout: module_5294.func, onScroll: module_5294.func, placeholder: module_5294.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5294.bool, secureTextEntry: module_5294.bool, selectionColor: normalizeColor, selection: module_5294.shape(obj2), value: module_5294.string, defaultValue: module_5294.string, clearButtonMode: module_5294.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5294.bool, selectTextOnFocus: module_5294.bool, blurOnSubmit: module_5294.bool, style: _mod9690.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5294.string, inlineImagePadding: module_5294.number, rejectResponderTermination: module_5294.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5294.bool, contextMenuHidden: module_5294.bool, inputAccessoryViewID: module_5294.string, textContentType: module_5294.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5294.bool };
const module_9679 = Object.assign(_mod9679);
module_5294 = module_5294_mod;
obj2 = { start: module_5294.number.isRequired, end: module_5294.number };
module_5294 = module_5294_mod;
oneOfType = module_5294.oneOfType;
module_5294 = module_5294_mod;
items1 = [module_5294.oneOf(items), ];
module_5294 = module_5294_mod;
const arrayOf = module_5294.arrayOf;
module_5294 = module_5294_mod;
items1[1] = arrayOf(module_5294.oneOf(items));
module_5294 = module_5294_mod;

export default obj;
