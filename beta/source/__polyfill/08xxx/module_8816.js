// Module ID: 8816
// Function ID: 8817
// Dependencies: [8806, 5010, 8802, 8817]

// Module 8816
import normalizeColor from "normalizeColor" /* 8802 */;
import _mod8806 from "module_8806" /* 8806 */;
import _mod8817 from "module_8817" /* 8817 */;
import "module_5010";
import module_5010_mod from "module_5010" /* 5010 */;

let items1;
let module_5010;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5010.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5010.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5010.bool, spellCheck: module_5010.bool, autoFocus: module_5010.bool, allowFontScaling: module_5010.bool, maxFontSizeMultiplier: module_5010.number, editable: module_5010.bool, keyboardType: module_5010.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5010.oneOf(["default", "light", "dark"]), returnKeyType: module_5010.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5010.string, maxLength: module_5010.number, numberOfLines: module_5010.number, disableFullscreenUI: module_5010.bool, enablesReturnKeyAutomatically: module_5010.bool, multiline: module_5010.bool, textBreakStrategy: module_5010.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5010.func, onFocus: module_5010.func, onChange: module_5010.func, onChangeText: module_5010.func, onContentSizeChange: module_5010.func, onTextInput: module_5010.func, onEndEditing: module_5010.func, onSelectionChange: module_5010.func, onSubmitEditing: module_5010.func, onKeyPress: module_5010.func, onLayout: module_5010.func, onScroll: module_5010.func, placeholder: module_5010.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5010.bool, secureTextEntry: module_5010.bool, selectionColor: normalizeColor, selection: module_5010.shape(obj2), value: module_5010.string, defaultValue: module_5010.string, clearButtonMode: module_5010.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5010.bool, selectTextOnFocus: module_5010.bool, blurOnSubmit: module_5010.bool, style: _mod8817.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5010.string, inlineImagePadding: module_5010.number, rejectResponderTermination: module_5010.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5010.bool, contextMenuHidden: module_5010.bool, inputAccessoryViewID: module_5010.string, textContentType: module_5010.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5010.bool };
const module_8806 = Object.assign(_mod8806);
module_5010 = module_5010_mod;
obj2 = { start: module_5010.number.isRequired, end: module_5010.number };
module_5010 = module_5010_mod;
oneOfType = module_5010.oneOfType;
module_5010 = module_5010_mod;
items1 = [module_5010.oneOf(items), ];
module_5010 = module_5010_mod;
const arrayOf = module_5010.arrayOf;
module_5010 = module_5010_mod;
items1[1] = arrayOf(module_5010.oneOf(items));
module_5010 = module_5010_mod;

export default obj;
